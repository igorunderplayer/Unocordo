import Client from '../client'
import GatewayEvents from '../gateway/gatewayEvents'
import { StructureData } from '../typings'

export default class DiscordGuild {
  client: Client
  id: string
  name: string
  constructor(client: Client, data: StructureData = {}) {
    this.client = client
    this.id = data.id
    this.name = data.name
  }
}
