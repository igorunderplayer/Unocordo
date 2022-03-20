namespace GatewayEvents {
  export type Opcodes = 0 | 1 | 2 | 3 | 4 | 6 | 7 | 8 | 9 | 10 | 11

  export interface Packet {
    op: Opcodes
    d?: any
    s?: number
    t?: string
  }

  export interface Ready {
    v: number
    user: any
    guilds: any[]
    shard?: number[]
    application: any
    // eslint-disable-next-line camelcase
    session_id: string
  }

  export interface GuildCreate {
    id: string,
    name: string,
    explicit_content_filter: number,
    members: any[]
    joined_at: Date,
    system_channel_id: string
    owner_id: string
    premium_subscription_count: number,
    public_updates_channel_id: string,
    guild_scheduled_events: any[],
    large: boolean,
    icon: string,
    application_id: string,
    banner: string,
    nsfw: boolean,
    stage_instances: any[],
    lazy: boolean,
    discovery_splash: string,
    nsfw_level: number,
    default_message_notifications: number,
    mfa_level: number,
    afk_timeout: number,
    application_command_count: number,
    channels: any[]
    voice_states: any[]
    roles: any[]
    max_members: 250000,
    vanity_url_code: string,
    stickers: any[],
    splash: string,
    description: string,
    max_video_channel_users: number,
    features: string[],
    afk_channel_id: string,
    threads: any[],
    hub_type: any,
    unavailable: boolean,
    rules_channel_id: string
    premium_tier: number
  }

  export interface MessageCreate {
    content: string,
    channel_id: string,
    author: any
  }

  export interface MessageUpdate {
    content: string,
    channel_id: string,
    author: any
  }
}

export default GatewayEvents
