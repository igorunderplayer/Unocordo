import { Interaction } from '..'
import Client from '../../client';
import { InteractionTypes } from '../../Constants';
import { StructureData } from '../../typings';

export default class ApplicationCommandInteraction extends Interaction {
  type: InteractionTypes.APPLICATION_COMMAND = InteractionTypes.APPLICATION_COMMAND
  name: string
  resolved: any
  options: any
  constructor(client: Client, data: StructureData = {}) {
    super(client, data)

    this.name = data.name
    this.type = data.type
    this.resolved = data.resolved
    this.options = data.options
  }
}