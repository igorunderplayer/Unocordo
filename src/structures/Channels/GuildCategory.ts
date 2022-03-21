import { DiscordGuild } from "..";
import Client from "../../client";
import { ChannelTypes } from "../../Constants";
import {  StructureData } from "../../typings";
import { DiscordChannel } from "..";

export default class GuildCategory extends DiscordChannel {
  type: ChannelTypes.GUILD_CATEGORY = ChannelTypes.GUILD_CATEGORY
  guildId: string
  guild: DiscordGuild
  constructor(client: Client, data: StructureData = {}) {
    super(client, data)

    this.guildId = data.guild_id
  }
}