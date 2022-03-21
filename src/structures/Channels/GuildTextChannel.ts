import { MessageOptions, StructureData } from '../../typings'
import Client from '../../client'

import { ChannelTypes } from '../../Constants'
import DiscordChannel from './DiscordChannel'

export default class GuildTextChannel extends DiscordChannel {
  type: ChannelTypes.GUILD_TEXT
  topic: string
  position: number
  constructor(client: Client, data: StructureData = {}) {
    super(client, data)

    this.type = 0
    this.topic = data.topic
    this.position = data.position
  }

  createMessage(options: MessageOptions | string) {
    return this.client.createMessage(this.id, options)
  }
}