import GatewayEvents from '../gateway/gatewayEvents'

export default class Message {
  user: any
  channelId: string
  content: string

  constructor (d: GatewayEvents.MessageCreate) {
    this.user = d.author
    this.channelId = d.channel_id
    this.content = d.content
  }
}
