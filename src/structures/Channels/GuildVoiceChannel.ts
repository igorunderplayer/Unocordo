import Client from "../../client";
import { ChannelTypes } from "../../Constants";
import { StructureData } from "../../typings";
import DiscordChannel from "./DiscordChannel";


export default class GuildVoiceChannel extends DiscordChannel {
  type = ChannelTypes.GUILD_VOICE
  constructor(data: StructureData = {}, client: Client) {
    super(data, client)

    this.type = 2
  }
}