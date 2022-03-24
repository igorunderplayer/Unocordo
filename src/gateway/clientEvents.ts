import GatewayEvents from './gatewayEvents'
import { 
  DiscordChannel,
  DiscordGuild,
  Message
} from '../structures'
import { AnyChannel, AnyInteraction } from '../typings'

interface ClientEvents {
  raw: [packet: GatewayEvents.Packet]
  ready: [raw: GatewayEvents.ReadyEvent]
  channelCreate: [channel: AnyChannel]
  channelUpdate: [oldChannel: AnyChannel, newChannel: AnyChannel]
  channelDelete: [channel: AnyChannel]
  guildCreate: [guild: DiscordGuild]
  guildDelete: [guild: DiscordGuild]
  interactionCreate: [interaction: AnyInteraction]
  messageCreate: [message: Message]
  messageUpdate: [message: Message]
}

export default ClientEvents
