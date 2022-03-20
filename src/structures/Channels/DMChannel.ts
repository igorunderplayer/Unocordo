import Client from "../../client";
import { ChannelTypes } from "../../Constants";
import { StructureData } from "../../typings";
import DiscordChannel from "./DiscordChannel";

export default class DMChannel extends DiscordChannel {
  type = ChannelTypes.DM
  constructor(data: StructureData = {}, client: Client) {
    super(data, client)

    this.type = 1
  }
}