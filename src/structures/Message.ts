import GatewayEvents from '../gateway/gatewayEvents'
import DiscordUser from './DiscordUser'

export default class Message {
  user: any
  channelId: string
  content: string

  constructor (data: GatewayEvents.MessageCreateEvent) {
    this.user = data.author
    this.channelId = data.channel_id
    this.content = data.content

    if ('author' in data) {
      this.user = new DiscordUser(data.author)
    }
  }
}
