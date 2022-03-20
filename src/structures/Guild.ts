import GatewayEvents from '../gateway/gatewayEvents'

export default class Guild {
  id: string
  name: string
  constructor(d: GatewayEvents.GuildCreate) {
    this.id = d.id
  }
}