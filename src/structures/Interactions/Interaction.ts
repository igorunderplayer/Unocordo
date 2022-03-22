import Client from '../../client'
import { InteractionTypes } from '../../Constants'
import { StructureData } from '../../typings'
import {
  ApplicationCommandInteraction,
  ComponentInteraction
} from '..';

export default class Interaction {
  client: Client
  id: string
  type: InteractionTypes = InteractionTypes.BASE_INTERACTION
  constructor(client: Client, data: StructureData = {}) {
    this.client = client
    this.id = data.id
    this.type = data.type
  }

  static from (client: Client, data: StructureData) {
    switch (data.type) {
      case InteractionTypes.PING:
        return null
      case InteractionTypes.APPLICATION_COMMAND:
        return new ApplicationCommandInteraction(client, data)
      case InteractionTypes.MESSAGE_COMPONENT:
        return new ComponentInteraction(client, data)
    }
  }
}