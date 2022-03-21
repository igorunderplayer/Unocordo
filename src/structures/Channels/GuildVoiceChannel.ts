import { DiscordGuild } from "..";
import Client from "../../client";
import { ChannelTypes } from "../../Constants";
import { StructureData } from "../../typings";
import { DiscordChannel } from "..";


export default class GuildVoiceChannel extends DiscordChannel {
  type: ChannelTypes.GUILD_VOICE = ChannelTypes.GUILD_VOICE
  guildId: string
  guild: DiscordGuild
  position: number
  constructor(client: Client, data: StructureData = {}) {
    super(client, data)

    this.guildId = data.guild_id
  }
}