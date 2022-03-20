import Client from '../client'
import { Message } from '../structures'
import ClientEvents from './clientEvents'
import GatewayEvents from './gatewayEvents'

export const READY = (client: Client, ...args: ClientEvents['ready']) => {
  client.emit('ready', ...args)
}

export const GUILD_CREATE = (client: Client, data: GatewayEvents.GuildCreate) => {
  
}

export const MESSAGE_CREATE = (client: Client, data: GatewayEvents.MessageCreate) => {
  client.emit('messageCreate', new Message(data))
}