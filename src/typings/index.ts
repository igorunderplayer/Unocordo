import {
  GuildTextChannel,
  GuildVoiceChannel,
  GuildCategory,
  DMChannel
} from '../structures'

export declare type AnyChannel = GuildTextChannel | GuildVoiceChannel | GuildCategory| DMChannel

export interface StructureData {
  [key: string]: any
}

export interface MessageOptions {
  content: string
}
