import Client from "../../client";
import { ChannelTypes } from "../../Constants";
import {  StructureData } from "../../typings";
import DiscordChannel from "./DiscordChannel";

export default class GuildCategory extends DiscordChannel {
  type: ChannelTypes.GUILD_CATEGORY
  constructor(client: Client, data: StructureData = {}) {
    super(client, data)

    this.type = 4
  }
}