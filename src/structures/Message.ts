import Client from '../client'
import GatewayEvents from '../gateway/gatewayEvents'
import { StructureData, TextableChannel } from '../typings'
import DiscordChannel from './Channels/DiscordChannel'
import DiscordUser from './DiscordUser'

export default class Message {
  user: DiscordUser
  channel: TextableChannel
  channelId: string
  content: string

  constructor (client: Client, data: StructureData = {}) {
    this.user = new DiscordUser(data.author)
    this.channelId = data.channel_id
    this.content = data.content

    this.channel = DiscordChannel.from(
      client,
      { type: 0, id: this.channelId }
    )

    if ('author' in data) {
      this.user = new DiscordUser(data.author)
    }
  }
}
