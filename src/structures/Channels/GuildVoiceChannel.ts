import Client from "../../client";
import { ChannelData } from "../../typings";
import GuildChannel from "./GuildChannel";

export default class GuildVoiceChannel extends GuildChannel {
  type: 0 | 2 | 4 | 5 | 6 | 10 | 11 | 12 | 13 = 2
  constructor(data: ChannelData, client: Client) {
    super(data, client)

    
  }
}