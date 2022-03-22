import GatewayEvents from './gatewayEvents'
import { 
  DiscordChannel,
  DiscordGuild,
  Message
} from '../structures'

interface ClientEvents {
  raw: [packet: GatewayEvents.Packet]
  ready: [raw: GatewayEvents.ReadyEvent]
  channelCreate: [channel: DiscordChannel]
  channelUpdate: [oldChannel: DiscordChannel, newChannel: DiscordChannel]
  channelDelete: [channel: DiscordChannel]
  guildCreate: [guild: DiscordGuild]
  guildDelete: [guild: DiscordGuild]
  messageCreate: [message: Message]
  messageUpdate: [message: Message]
}

export default ClientEvents
