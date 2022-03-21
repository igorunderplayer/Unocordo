import Client from '../client'
import { StructureData, TextableChannel } from '../typings'
import DiscordUser from './DiscordUser'

export default class Message {
  id: string
  user: DiscordUser
  channel: TextableChannel
  channelId: string
  content: string

  constructor (client: Client, data: StructureData = {}) {
    this.channel = client.getChannel(this.channelId) as TextableChannel
    this.user = new DiscordUser(data.author)
    this.id = data.id
    this.channelId = data.channel_id
    this.content = data.content
  }
}
