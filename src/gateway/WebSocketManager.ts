import EventEmitter from 'events'
import WebSocket from 'ws'
import Client from '../client'
import { Opcodes, SocketCloseCodes } from '../Constants'
import GatewayEvents from './gatewayEvents'

import * as DispatchEvents from './dispatch'

export default class WebSocketManager extends EventEmitter {
  private _client: Client

  connection?: WebSocket
  gateway: string

  heartbeatInterval: NodeJS.Timer

  constructor (client: Client) {
    super()

    this._client = client
    this.gateway = `wss://gateway.discord.gg/?encoding=json&v=${this._client.API_VERSION}`
  }

  connect () {
    this.connection = new WebSocket(this.gateway, this._client.options.ws)

    this.connection.on('message', this.onWSMessage)
    this.connection.on('close', this.onWSClose)
  }

  sendWS (op: GatewayEvents.Opcodes, data: any) {
    if (this.connection) {
      const d = JSON.stringify({
        op,
        d: data
      })

      this.connection.send(d)
    }
  }

  identify () {
    return this.sendWS(2, {
      token: this._client._token,
      intents: this._client.intents,
      properties: {
        $os: process.platform.toLowerCase(),
        $browser: 'Unocordo',
        $device: 'Unocordo'
      }
    })
  }

  heartbeat () {
    this.sendWS(1, {})
  }

  onDispatch (packet: GatewayEvents.Packet) {
    DispatchEvents[packet.t](this._client, packet.d)
  }

  onPacket = (packet: GatewayEvents.Packet) => {
    this._client.emit('raw', packet)
    switch (packet.op) {
      case Opcodes.DISPATCH:
        this.onDispatch(packet)
        break
      case Opcodes.HELLO:
        if (packet.d.heartbeat_interval > 0) {
          if (this.heartbeatInterval) {
            clearInterval(this.heartbeatInterval)
          }
          this.heartbeatInterval = setInterval(() => this.heartbeat(), packet.d.heartbeat_interval)
        }

        this.identify()
        this.heartbeat()
        break
    }
  }

  onWSClose(code: number, reason: Buffer) {
    if (code === SocketCloseCodes.INVALID_INTENTS) {
      throw new TypeError('Invalid intents')
    }

    if (code === SocketCloseCodes.DISALLOWED_INTENTS) {
      throw new TypeError('Disallowed intents!')
    }
  }

  onWSMessage = (d: WebSocket.RawData) => {
    const packet = JSON.parse(d.toString()) as GatewayEvents.Packet
    this.onPacket(packet)
  }
}
