import GatewayEvents from './gatewayEvents'
import { 
  Message
} from '../structures'

interface ClientEvents {
  raw: [packet: GatewayEvents.Packet]
  ready: [raw: GatewayEvents.Ready]
  messageCreate: [message: Message]
}

export default ClientEvents
