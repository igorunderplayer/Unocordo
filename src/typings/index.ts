import {
  GuildTextChannel,
  GuildVoiceChannel,
  GuildCategory,
  DMChannel,
  GuildNewsChannel
} from '../structures'

export declare type GuildChannels = GuildTextChannel | GuildCategory | GuildNewsChannel | GuildVoiceChannel
export declare type TextableChannel = GuildTextChannel | DMChannel
export declare type AnyChannel = GuildChannels | TextableChannel

export interface StructureData {
  [key: string]: any
}

export interface FetchMessagesOptions {
  limit?: number
  around?: string
  before?: string
  after?: string
}

export interface MessageOptions {
  content: string
}

const arr = ['a', 'o', 'e']
