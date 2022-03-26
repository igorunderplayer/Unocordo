import Client from "../../client"
import { ComponentTypes } from "../../Constants"
import { StructureData } from "../../typings"
import DiscordComponent from "./DiscordComponent"

export default class DiscordButton extends DiscordComponent {
  type: ComponentTypes.BUTTON = ComponentTypes.BUTTON
  label: string
  emoji: any
  url: string
  constructor(client: Client, data: StructureData = {}) {
    super(client, data)
    this.label = data.label
    this.emoji = data.any
    this.url = data.url
  }
}