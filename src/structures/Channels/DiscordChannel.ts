import Client from '../../client';
import {
  GuildTextChannel
} from '..';
import { ChannelTypes } from '../../Constants';
import { StructureData } from '../../typings';

export default class DiscordChannel {
  client: Client
  type: ChannelTypes = ChannelTypes.BASE_CHANNEL
  id: string
  constructor(client: Client, data: StructureData = {}) {
    this.id = data.id
    this.type = -1
    this.client = client
  }

  static from (client: Client, data: StructureData = {}) {
    switch (data.type) {
      case ChannelTypes.GUILD_TEXT:
        return new GuildTextChannel(client, data)
    }
  }
}