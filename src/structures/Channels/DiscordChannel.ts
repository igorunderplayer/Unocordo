import Client from '../../client';
import {
  GuildTextChannel,
  DMChannel,
  GuildCategory,
  GuildVoiceChannel,
  GuildNewsChannel
} from '..';
import { ChannelTypes } from '../../Constants';
import { StructureData } from '../../typings';

export default class DiscordChannel {
  client: Client
  name?: string
  type: ChannelTypes = ChannelTypes.BASE_CHANNEL
  id: string
  constructor(client: Client, data: StructureData = {}) {
    this.id = data.id
    this.name = data.name
    this.client = client
  }

  static from (client: Client, data: StructureData = {}) {
    switch (data.type) {
      case ChannelTypes.GUILD_TEXT:
        return new GuildTextChannel(client, data)
      case ChannelTypes.DM:
        return new DMChannel(client, data)
      case ChannelTypes.GUILD_VOICE:
        return new GuildVoiceChannel(client, data)
      // case ChannelTypes.GROUP_DM:
      //   return new GroupDMChannel(client, data)
      case ChannelTypes.GUILD_CATEGORY:
        return new GuildCategory(client, data)
      case ChannelTypes.GUILD_NEWS:
        return new GuildNewsChannel(client, data)
    }
  }

  isGuildChannel () {
    return this.type == ChannelTypes.GUILD_TEXT ||
          this.type == ChannelTypes.GUILD_VOICE ||
          this.type == ChannelTypes.GUILD_CATEGORY ||
          this.type == ChannelTypes.GUILD_NEWS ||
          this.type == ChannelTypes.GUILD_STORE ||
          this.type == ChannelTypes.GUILD_NEW_THREAD ||
          this.type == ChannelTypes.GUILD_PUBLIC_THREAD ||
          this.type == ChannelTypes.GUILD_PRIVATE_THREAD ||
          this.type == ChannelTypes.GUILD_STAGE_VOICE
  }
}