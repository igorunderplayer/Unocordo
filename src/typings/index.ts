import {
  ApplicationCommandInteraction,
  ComponentInteraction,
  DMChannel,
  GuildTextChannel,
  GuildVoiceChannel,
  GuildCategory,
  GuildNewsChannel,
  RichEmbed
} from '../structures'

export declare type PrivateChannels = DMChannel
export declare type GuildTextableChannels = GuildTextChannel | GuildNewsChannel
export declare type GuildChannels = GuildTextableChannels | GuildCategory | GuildVoiceChannel
export declare type TextableChannel = GuildTextableChannels | DMChannel
export declare type AnyChannel = GuildChannels | PrivateChannels

export declare type AnyInteraction = ComponentInteraction | ApplicationCommandInteraction

export declare type InteractionCallbackData = MessageInteractionCallbackData | AutoCompleteInteractionCallbackData | ModalInteractionCallbackData

export interface MessageInteractionCallbackData {
  tts?: boolean
  content?: string
  embeds?: RichEmbed[]
  allowedMentions?: any
  flags?: number
  components?: any[]
  attachments?: any[]
}

export interface AutoCompleteInteractionCallbackData {
  choices: any[]
}

export interface ModalInteractionCallbackData {
  customId: string
  title: string
  componetns: any[]
}

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
  content?: string,
  embeds?: RichEmbed[],
  components?: any[],

}

const arr = ['a', 'o', 'e']
