import Client from "../../client";
import { ChannelData } from "../../typings";
import GuildChannel from "./GuildChannel";

export default class GuildCategory extends GuildChannel {
  type: 0 | 2 | 4 | 5 | 6 | 10 | 11 | 12 | 13 = 4
  constructor(data: ChannelData, client: Client) {
    super(data, client)
  }
}