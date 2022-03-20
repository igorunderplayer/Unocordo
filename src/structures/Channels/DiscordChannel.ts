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
  constructor(data: StructureData = {}, client: Client) {
    this.id = data.id
    this.type = -1
    this.client = client
  }

  static from (data: StructureData = {}, client: Client) {
    switch (data.type) {
      case ChannelTypes.GUILD_TEXT:
        return new GuildTextChannel(data, client)
    }
  }
}