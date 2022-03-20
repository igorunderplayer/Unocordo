import Client from "../../client";
import { ChannelTypes } from "../../Constants";
import {  StructureData } from "../../typings";
import DiscordChannel from "./DiscordChannel";

export default class GuildCategory extends DiscordChannel {
  type = ChannelTypes.GUILD_CATEGORY
  constructor(data: StructureData = {}, client: Client) {
    super(data, client)

    this.type = 4
  }
}