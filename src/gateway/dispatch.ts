import Client from '../client'
import { DiscordUser, Message } from '../structures'
import ClientEvents from './clientEvents'
import GatewayEvents from './gatewayEvents'

export const READY = (client: Client, data: GatewayEvents.ReadyEvent) => {
  client.application = data.application
  client.ws.sessionId = data.session_id
  client.user = new DiscordUser(data.user)
  client.guilds = data.guilds
  client.emit('ready', data)
}

export const RECONNECT = (client: Client) => {
  
}

export const INVALID_SESSION = (client: Client) => {
  
}

export const CHANNEL_CREATE = (client: Client) => {
  
}

export const CHANNEL_UPDATE = (client: Client) => {
  
}

export const CHANNEL_DELETE = (client: Client) => {
  
}

export const CHANNEL_PINS_UPDATE = (client: Client) => {
  
}

export const THREAD_CREATE = (client: Client) => {
  
}

export const THREAD_UPDATE = (client: Client) => {
  
}

export const THREAD_DELETE = (client: Client) => {
  
}

export const THREAD_LIST_SYNC = (client: Client) => {
  
}

export const THREAD_MEMBER_UPDATE = (client: Client) => {
  
}

export const THREAD_MEMBERS_UPDATE = (client: Client) => {
  
}

export const GUILD_CREATE = (client: Client, data: GatewayEvents.GuildCreateEvent) => {
  
}

export const GUILD_DELETE = (client: Client) => {
  
}

export const GUILD_BAN_ADD = (client: Client) => {
  
}

export const GUILD_BAN_REMOVE = (client: Client) => {
  
}

export const GUILD_EMOJIS_UPDATE = (client: Client) => {
  
}

export const GUILD_STICKERS_UPDATE = (client: Client) => {
  
}

export const GUILD_INTEGRATIONS_UPDATE = (client: Client) => {
  
}

export const GUILD_MEMBER_ADD = (client: Client) => {
  
}

export const GUILD_MEMBER_REMOVE = (client: Client) => {
  
}

export const GUILD_MEMBER_UPDATE = (client: Client) => {
  
}

export const GUILD_MEMBERS_CHUNK = (client: Client) => {
  
}

export const GUILD_ROLE_CREATE = (client: Client) => {
  
}

export const GUILD_ROLE_UPDATE = (client: Client) => {
  
}

export const GUILD_ROLE_DELETE = (client: Client) => {
  
}

export const GUILD_SCHEDULED_EVENT_CREATE = (client: Client) => {
  
}

export const GUILD_SCHEDULED_EVENT_UPDATE = (client: Client) => {
  
}

export const GUILD_SCHEDULED_EVENT_DELETE = (client: Client) => {
  
}

export const GUILD_SCHEDULED_EVENT_USER_ADD = (client: Client) => {
  
}

export const GUILD_SCHEDULED_EVENT_USER_REMOVE = (client: Client) => {
  
}

export const INTEGRATION_CREATE = (client: Client) => {
  
}

export const INTEGRATION_UPDATE = (client: Client) => {
  
}

export const INTEGRATION_DELETE = (client: Client) => {
  
}

export const INTERACTION_CREATE = (client: Client) => {
  
}

export const INVITE_CREATE = (client: Client) => {
  
}

export const INVITE_DELETE = (client: Client) => {
  
}

export const MESSAGE_CREATE = (client: Client, data: GatewayEvents.MessageCreateEvent) => {
  client.emit('messageCreate', new Message(data))
}

export const MESSAGE_UPDATE = (client: Client, data: any) => {
  client.emit('messageUpdate', new Message(data))
}

export const MESSAGE_DELETE = (client: Client) => {
  
}

export const MESSAGE_DELETE_BULK = (client: Client) => {
  
}

export const MESSAGE_REACTION_ADD = (client: Client) => {
  
}

export const MESSAGE_REACTION_REMOVE = (client: Client) => {
  
}

export const MESSAGE_REACTION_REMOVE_ALL = (client: Client) => {
  
}

export const MESSAGE_REACTION_REMOVE_EMOJI = (client: Client) => {
  
}

export const PRESENCE_UPDATE = (client: Client) => {
  
}

export const STAGE_INSTANCE_CREATE = (client: Client) => {
  
}

export const STAGE_INSTANCE_DELETE = (client: Client) => {
  
}

export const STAGE_INSTANCE_UPDATE = (client: Client) => {
  
}

export const TYPING_START = (client: Client) => {
  
}

export const USER_UPDATE = (client: Client) => {
  
}

export const VOICE_STATE_UPDATE = (client: Client) => {
  
}

export const VOICE_SERVER_UPDATE = (client: Client) => {
  
}


export const WEBHOOKS_UPDATE = (client: Client) => {
  
}
