import GatewayEvents from '../gateway/gatewayEvents'
import { StructureData } from '../typings'

export default class DiscordGuild {
  id: string
  name: string
  constructor(data: StructureData = {}) {
    this.id = data.id
    this.name = data.name
  }
}
