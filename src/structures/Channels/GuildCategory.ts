import { DiscordGuild } from "..";
import Client from "../../client";
import { ChannelTypes } from "../../Constants";
import {  StructureData } from "../../typings";
import { DiscordChannel } from "..";

export default class GuildCategory extends DiscordChannel {
  type: ChannelTypes.GUILD_CATEGORY = ChannelTypes.GUILD_CATEGORY
  position: number
  parentId: string
  guildId: string
  guild: DiscordGuild
  permissionOverwrites: any[]
  constructor(client: Client, data: StructureData = {}) {
    super(client, data)

    this.guildId = data.guild_id
    this.guild = client.guilds.get(this.guildId)
    this.position = data.position
    this.parentId = data.parent_id
    this.permissionOverwrites = data.permission_overwrites
  }
}