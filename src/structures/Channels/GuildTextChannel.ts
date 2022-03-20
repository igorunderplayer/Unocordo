import { ChannelData, MessageOptions } from '../../typings'
import Client from '../../client'
import GuildChannel from './GuildChannel'

export default class GuildTextChannel extends GuildChannel {
  type: 0 | 2 | 4 | 5 | 6 | 10 | 11 | 12 | 13 = 0
  topic: string
  position: number
  constructor(data: ChannelData, client: Client) {
    super(data, client)

    this.topic = data.topic
    this.position = data.position
  }

  createMessage(options: MessageOptions) {
    return this.client.createMessage(this.id, options)
  }
}