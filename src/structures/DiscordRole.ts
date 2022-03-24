import Client from "../client"
import { StructureData } from "../typings"
import { 
  DiscordGuild
} from "."

export default class DiscordRole {
  client: Client
  id: string
  guildId: string
  guild: DiscordGuild
  name: string
  color: number
  hoist: boolean
  position: number
  permissions: number
  managed: boolean
  mentionable: boolean
  constructor(client: Client, data: StructureData = {}) {
    this.client = client
    this.id = data.id
    this.guildId = data.guild_id
    this.guild = client.guilds.get(this.guildId)
    this.name = data.name
    this.color = data.color
    this.hoist = data.hoist
    this.position = data.position
    this.permissions = data.permissions
    this.managed = data.managed
    this.mentionable = data.mentionable
  }
}