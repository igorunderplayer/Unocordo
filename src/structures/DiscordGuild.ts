import Client from '../client'
import GatewayEvents from '../gateway/gatewayEvents'
import { GuildChannels, StructureData } from '../typings'
import Collection from '../util/Collection'
import DiscordChannel from './Channels/DiscordChannel'

export default class DiscordGuild {
  client: Client
  id: string
  name: string
  channels: Collection<string, GuildChannels>
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
    }
  }
}
