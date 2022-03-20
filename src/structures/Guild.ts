import GatewayEvents from '../gateway/gatewayEvents'

export default class Guild {
  id: string
  name: string
  constructor(d: GatewayEvents.GuildCreateEvent) {
    this.id = d.id
    this.name = d.name
  }
}