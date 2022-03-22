import Client from '../client'
import { DiscordChannel, DiscordGuild, DiscordUser, Message } from '../structures'
import { GuildChannels, PrivateChannels, StructureData } from '../typings'
import GatewayEvents from './gatewayEvents'

export function READY (client: Client, data: GatewayEvents.ReadyEvent) {
  client.application = data.application
  client.ws.sessionId = data.session_id
  client.user = new DiscordUser(data.user)

  for(const _channel of data.private_channels) {
    const channel = DiscordChannel.from(client, _channel) as PrivateChannels
    client.channels.privateChannels.add(channel)
  }

  client.emit('ready', data)
}

export function RECONNECT (client: Client) {
  
}

export function INVALID_SESSION (client: Client) {
  
}

export function CHANNEL_CREATE (client: Client, data: StructureData) {
  const _channel = DiscordChannel.from(client, data)
  const channel = _channel as GuildChannels
  channel.guild = client.guilds.get(channel.guildId)
  channel.guild.channels.add(channel)
  client.channels.guildChannels.add(channel)

  client.emit('channelCreate', channel)
}

export function CHANNEL_UPDATE (client: Client, data: StructureData) {
  const channel = DiscordChannel.from(client, data)  
  let oldChannel: DiscordChannel
  if (!channel.isGuildChannel()) {
    oldChannel = client.channels.privateChannels.get(channel.id)
  } else {
    oldChannel = client.channels.guildChannels.get(channel.id)
  }

  client.emit('channelUpdate', oldChannel, channel)
}

export function CHANNEL_DELETE (client: Client, data: StructureData) {
  const channel = DiscordChannel.from(client, data)

  if (client.channels.guildChannels.has(channel.id)) {
    client.channels.guildChannels.delete(channel.id)
  }

  if (client.channels.privateChannels.has(channel.id)) {
    client.channels.privateChannels.delete(channel.id)
  }

  client.emit('channelDelete', channel)
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
  const guild = client.guilds.get(data.id)
  client.guilds.delete(guild.id)
  for (const channel of data.channels) {
    client.channels.guildChannels.delete(channel.id)
  }
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
