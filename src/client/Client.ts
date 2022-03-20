import { EventEmitter } from 'stream'
import WebSocket from 'ws'
import ClientEvents from '../gateway/clientEvents'
import WebSocketManager from '../gateway/WebSocketManager'

export interface ClientOptions {
  token: string
  intents: number | number[]
  options?: { ws?: WebSocket.ClientOptions }

  _tokenType?: 'Bot' | 'Bearer' | 'User'

}

export default class Client extends EventEmitter {
  public options: ClientOptions['options'] = {}
  public user: any
  intents: number
  _token: string

  _tokenType: ClientOptions['_tokenType'] = 'Bot'

  ws: WebSocketManager

  constructor (options: ClientOptions) {
    super()
    this._token = options.token

    this.intents = typeof options.intents === 'number' ? options.intents : options.intents.reduce((acc, curr) => acc += curr)

    this._tokenType = options._tokenType

    this.ws = new WebSocketManager(this)
  }

  emit<K extends keyof ClientEvents> (event: K, ...args: ClientEvents[K]): boolean
  emit (event: string | symbol, ...args: any[]) {
    return super.emit(event, ...args)
  }



  off<K extends keyof ClientEvents> (event: K, listener: (...args: ClientEvents[K]) => void): this
  off (event: string | symbol, listener: (...args: any) => any) {
    super.off(event, listener)
    return this
  }

  on<K extends keyof ClientEvents> (event: K, listener: (...args: ClientEvents[K]) => void): this
  on (event: string | symbol, listener: (...args: any) => any) {
    super.on(event, listener)
    return this
  }

  once<K extends keyof ClientEvents> (event: K, listener: (...args: ClientEvents[K]) => void): this
  once (event: string | symbol, listener: (...args: any) => any) {
    super.once(event, listener)
    return this
  }

  login () {
    this._token = this._token.replace(`${this._tokenType} `, '')

    this.ws.connect()
  }
}
