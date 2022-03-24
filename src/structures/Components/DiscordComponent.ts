import Client from "../../client";
import { ComponentTypes } from "../../Constants";
import { StructureData } from "../../typings";

export default class DiscordComponent {
  type: ComponentTypes
  constructor(client: Client, data: StructureData = {}) {
    this.type = data.type
  }
}