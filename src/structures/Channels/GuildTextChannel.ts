import { MessageOptions, StructureData } from '../../typings'
import Client from '../../client'

import { ChannelTypes } from '../../Constants'
import DiscordChannel from './DiscordChannel'
import { DiscordGuild } from '..'

export default class GuildTextChannel extends DiscordChannel {
  type: ChannelTypes.GUILD_TEXT = ChannelTypes.GUILD_TEXT
  guildId: string
  guild: DiscordGuild
  topic: string
  position: number
  constructor(client: Client, data: StructureData = {}) {
    super(client, data)

    this.guildId = data.guild_id
    this.topic = data.topic
    this.position = data.position
  }

  createMessage(options: MessageOptions | string) {
    return this.client.createMessage(this.id, options)
  }
}