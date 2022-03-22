import axios, { AxiosInstance } from 'axios'
import { EventEmitter } from 'events'
import WebSocket from 'ws'
import ClientEvents from '../gateway/clientEvents'
import WebSocketManager from '../gateway/WebSocketManager'
import ClientChannelsManager from '../managers/ClientChannelsManager'
import { 
  DiscordUser,
  DiscordGuild,
  Message,
  DiscordChannel
} from '../structures'

import { AnyChannel, FetchMessagesOptions, MessageOptions } from '../typings'
import Collection from '../util/Collection'

export interface ClientOptions {
  token: string
  intents: number | number[]
  options?: { ws?: WebSocket.ClientOptions }
}

export default class Client extends EventEmitter {
  public readonly API_VERSION = '9'
  public application: any
  public api: AxiosInstance
  public user: DiscordUser
  public guilds: Collection<string, DiscordGuild>
  public channels: ClientChannelsManager
  public options: ClientOptions['options'] = {}
  
  readonly intents: number

  _token: string
  _tokenType = 'Bot'

  ws: WebSocketManager

  constructor (options: ClientOptions) {
    super()
    this._token = options.token

    if (typeof options.intents !== 'number') 
      options.intents = options.intents.reduce((acc, curr) => acc | curr)

    this.intents = options.intents

    this.guilds = new Collection()
    this.channels = new ClientChannelsManager(this)
    this.ws = new WebSocketManager(this)

    this.api = axios.create({
      baseURL: `https://discord.com/api/v${this.API_VERSION}`,
      headers: {
        Authorization: `${this._tokenType} ${this._token}`
      }
    })
  }

  public getChannel (channelId: string) {
    if (this.channels.guildChannels.has(channelId)) {
      return this.channels.guildChannels.get(channelId)
    }

    if (this.channels.privateChannels.has(channelId)) {
      return this.channels.privateChannels.get(channelId)
    }
  }

  async fetchChannel(channelId: string): Promise<AnyChannel> {
    const { data } = await this.api.get(`channels/${channelId}`)

    return DiscordChannel.from(this, data)
  }

  async fetchMessages(channelId: string, options: FetchMessagesOptions = {}) {
    const { data } = await this.api.get(`channels/${channelId}/messages`, {
      params: {
        limit: options.limit,
        after: options.after,
        before: options.before,
        around: options.around
      }
    })

    return data.map(messageData => new Message(this, messageData))
  }

  async createMessage(channelId: string, options: MessageOptions | string) {
    if(typeof options === 'string') {
      options = {
        content: options
      }
    }
    const { data } = await this.api.post(`channels/${channelId}/messages`, options)

    return new Message(this, data)
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
