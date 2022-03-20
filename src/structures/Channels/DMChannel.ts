import Client from "../../client";
import { ChannelData } from "../../typings";
import DiscordChannel from "./DiscordChannel";

export default class DMChannel extends DiscordChannel {
  type: ChannelData['type'] = 1
  constructor(data: ChannelData, client: Client) {
    super(data, client)
  }
}