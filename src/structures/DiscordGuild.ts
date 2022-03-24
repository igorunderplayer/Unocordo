import Client from '../client'
import { GuildChannels, StructureData } from '../typings'
import Collection from '../util/Collection'

import {
  DiscordChannel,
  DiscordRole
} from '.'

export default class DiscordGuild {
  client: Client
  id: string
  name: string
  channels: Collection<string, GuildChannels>
  roles: Collection<string, DiscordRole>
  constructor(client: Client, data: StructureData = {}) {
    this.client = client
    this.id = data.id
    this.name = data.name

    this.channels = new Collection()
    for (const _channel of data.channels) {
      _channel.guild_id = this.id
      const channel = DiscordChannel.from(client, _channel) as GuildChannels
      channel.guild = this
      this.channels.add(channel)
      client.channels.guildChannels.add(channel)
    }

    this.roles = new Collection()
    for (const _role of data.roles) {
      _role.guild_id = this.id
      const role = new DiscordRole(client, _role)
      role.guild = this
      this.roles.add(role)
    }
  }
}
