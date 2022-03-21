import GatewayEvents from './gatewayEvents'
import { 
  DiscordGuild,
  Message
} from '../structures'

interface ClientEvents {
  raw: [packet: GatewayEvents.Packet]
  ready: [raw: GatewayEvents.ReadyEvent]
  guildCreate: [guild: DiscordGuild]
  guildDelete: [guild: DiscordGuild]
  messageCreate: [message: Message]
  messageUpdate: [message: Message]
}

export default ClientEvents
