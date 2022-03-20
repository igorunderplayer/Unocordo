import { ChannelData } from '../../typings'
import Client from '../../client'
import DiscordChannel from './DiscordChannel'

export default class GuildChannel extends DiscordChannel {
  name: string
  type: 0 | 2 | 4 | 5 | 6 | 10 | 11 | 12 | 13
  constructor(data: ChannelData, client: Client) {
    super(data, client)

    this.name = data.name
  }
}