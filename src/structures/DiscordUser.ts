import { StructureData } from "../typings"

export default class DiscordUser {
  id: string
  username: string
  discriminator: string
  bot: boolean
  mfaEnabled: boolean
  flags: number
  email: string
  avatar: string

  constructor(data: StructureData = {}) {
    this.id = data.id
    this.username = data.username
    this.discriminator = data.discriminator
    this.bot = data.bot ?? false
    this.mfaEnabled = data.mfa_enabled
    this.flags = data.flags
    this.email = data.email
    this.avatar = data.avatar
  }
}