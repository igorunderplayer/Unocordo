import Client from '../client'
import { DiscordGuild, DiscordUser, Message } from '../structures'
import { StructureData } from '../typings'
import GatewayEvents from './gatewayEvents'

export function READY (client: Client, data: GatewayEvents.ReadyEvent) {
  client.application = data.application
  client.ws.sessionId = data.session_id
  client.user = new DiscordUser(data.user)
  client.emit('ready', data)
}

export function RECONNECT (client: Client) {
  
}

export function INVALID_SESSION (client: Client) {
  
}

export function CHANNEL_CREATE (client: Client) {
  
}

export function CHANNEL_UPDATE (client: Client) {
  
}

export function CHANNEL_DELETE (client: Client) {
  
}

export function CHANNEL_PINS_UPDATE (client: Client) {
  
}

export function THREAD_CREATE (client: Client) {
  
}

export function THREAD_UPDATE (client: Client) {
  
}

export function THREAD_DELETE (client: Client) {
  
}

export function THREAD_LIST_SYNC (client: Client) {
  
}

export function THREAD_MEMBER_UPDATE (client: Client) {
  
}

export function THREAD_MEMBERS_UPDATE (client: Client) {
  
}

export function GUILD_CREATE (client: Client, data: GatewayEvents.GuildCreateEvent) {
  const guild = new DiscordGuild(client, data)
  client.guilds.set(data.id, guild)
  client.emit('guildCreate', guild)
}

export function GUILD_DELETE (client: Client, data: StructureData) {
  const guild = new DiscordGuild(client, data)
  client.guilds.delete(guild.id)
  client.emit('guildDelete', guild)
}

export function GUILD_BAN_ADD (client: Client) {
  
}

export function GUILD_BAN_REMOVE (client: Client) {
  
}

export function GUILD_EMOJIS_UPDATE (client: Client) {
  
}

export function GUILD_STICKERS_UPDATE (client: Client) {
  
}

export function GUILD_INTEGRATIONS_UPDATE (client: Client) {
  
}

export function GUILD_MEMBER_ADD (client: Client) {
  
}

export function GUILD_MEMBER_REMOVE (client: Client) {
  
}

export function GUILD_MEMBER_UPDATE (client: Client) {
  
}

export function GUILD_MEMBERS_CHUNK (client: Client) {
  
}

export function GUILD_ROLE_CREATE (client: Client) {
  
}

export function GUILD_ROLE_UPDATE (client: Client) {
  
}

export function GUILD_ROLE_DELETE (client: Client) {
  
}

export function GUILD_SCHEDULED_EVENT_CREATE (client: Client) {
  
}

export function GUILD_SCHEDULED_EVENT_UPDATE (client: Client) {
  
}

export function GUILD_SCHEDULED_EVENT_DELETE (client: Client) {
  
}

export function GUILD_SCHEDULED_EVENT_USER_ADD (client: Client) {
  
}

export function GUILD_SCHEDULED_EVENT_USER_REMOVE (client: Client) {
  
}

export function INTEGRATION_CREATE (client: Client) {
  
}

export function INTEGRATION_UPDATE (client: Client) {
  
}

export function INTEGRATION_DELETE (client: Client) {
  
}

export function INTERACTION_CREATE (client: Client) {
  
}

export function INVITE_CREATE (client: Client) {
  
}

export function INVITE_DELETE (client: Client) {
  
}

export function MESSAGE_CREATE (client: Client, data: GatewayEvents.MessageCreateEvent) {
  client.emit('messageCreate', new Message(client, data))
}

export function MESSAGE_UPDATE (client: Client, data: StructureData) {
  client.emit('messageUpdate', new Message(client, data))
}

export function MESSAGE_DELETE (client: Client) {
  
}

export function MESSAGE_DELETE_BULK (client: Client) {
  
}

export function MESSAGE_REACTION_ADD (client: Client) {
  
}

export function MESSAGE_REACTION_REMOVE (client: Client) {
  
}

export function MESSAGE_REACTION_REMOVE_ALL (client: Client) {
  
}

export function MESSAGE_REACTION_REMOVE_EMOJI (client: Client) {
  
}

export function PRESENCE_UPDATE (client: Client) {
  
}

export function STAGE_INSTANCE_CREATE (client: Client) {
  
}

export function STAGE_INSTANCE_DELETE (client: Client) {
  
}

export function STAGE_INSTANCE_UPDATE (client: Client) {
  
}

export function TYPING_START (client: Client) {
  
}

export function USER_UPDATE (client: Client) {
  
}

export function VOICE_STATE_UPDATE (client: Client) {
  
}

export function VOICE_SERVER_UPDATE (client: Client) {
  
}


export function WEBHOOKS_UPDATE (client: Client) {
  
}
