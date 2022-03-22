import Client from "../../client"
import { ComponentTypes } from "../../Constants"
import { StructureData } from "../../typings"
import DiscordMember from "../DiscordMember"
import Message from "../Message"
import Interaction from "./Interaction"

export default class ComponentInteraction extends Interaction {
  customId: string
  message: Message
  member: DiscordMember
  components: any[]
  componentType: ComponentTypes
  values?: any[]

  constructor(client: Client, data: StructureData = {}) {
    super(client, data)

    this.type = data.type
    this.message = new Message(client, data.message)
    this.member = new DiscordMember(client, data.member)
    this.components = data.components
    this.componentType = data.component_type
    this.values = data.values
  }
}