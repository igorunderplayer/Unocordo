import Client from "../../client"
import { ComponentTypes, InteractionTypes } from "../../Constants"
import { StructureData } from "../../typings"
import DiscordMember from "../DiscordMember"
import Message from "../Message"
import Interaction from "./Interaction"

export interface ComponentInteractionData {
  customId: string
  componentType: ComponentTypes

}

export default class ComponentInteraction extends Interaction {
  type: InteractionTypes.MESSAGE_COMPONENT = InteractionTypes.MESSAGE_COMPONENT
  customId: string
  message: Message
  member: DiscordMember
  data: ComponentInteractionData

  constructor(client: Client, data: StructureData = {}) {
    super(client, data)

    this.type = data.type
    this.customId = data.customId
    this.message = new Message(client, data.message)
    this.member = new DiscordMember(client, data.member)
    this.data = {
      customId: data.data.custom_id,
      componentType: data.data.component_type
    }
  }
}