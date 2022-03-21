import Client from "../../client";
import { ChannelTypes } from "../../Constants";
import { MessageOptions, StructureData } from "../../typings";
import DiscordChannel from "./DiscordChannel";

export default class DMChannel extends DiscordChannel {
  type: ChannelTypes.DM
  constructor(client: Client, data: StructureData = {}) {
    super(client, data)

    this.type = 1
  }

  createMessage(options: MessageOptions | string) {
    return this.client.createMessage(this.id, options)
  }
}