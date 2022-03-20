import {
  GuildTextChannel,
  GuildVoiceChannel,
  GuildCategory,
  DMChannel
} from '../structures'

export declare type AnyGuildChannel = GuildTextChannel | GuildVoiceChannel | GuildCategory
export declare type AnyChannel = AnyGuildChannel | DMChannel

export interface ChannelData {
  id: string
  type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 10 | 11 | 12 | 13
  name?: string
  topic?: string
  position?: number
}

export interface MessageOptions {
  content: string
}
