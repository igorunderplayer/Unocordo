import GatewayEvents from '../gateway/gatewayEvents'
import { StructureData } from '../typings'
import DiscordUser from './DiscordUser'

export default class Message {
  user: any
  channelId: string
  content: string

  constructor (data: StructureData = {}) {
    this.user = data.author
    this.channelId = data.channel_id
    this.content = data.content

    if ('author' in data) {
      this.user = new DiscordUser(data.author)
    }
  }
}
