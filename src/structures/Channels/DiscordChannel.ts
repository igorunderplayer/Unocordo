import Client from '../../client';
import {
  GuildTextChannel
} from '..';
import { ChannelTypes } from '../../Constants';
import { ChannelData } from '../../typings';

export default class DiscordChannel {
  client: Client
  id: string
  type: ChannelData['type']
  constructor(data: ChannelData, client: Client) {
    this.id = data.id
    this.type = data.type
    this.client = client
  }

  static from (data: ChannelData, client: Client) {
    switch (data.type) {
      case ChannelTypes.GUILD_TEXT:
        return new GuildTextChannel(data, client)
    }
  }
}