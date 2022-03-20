export interface RawUser {
  id: string
  username: string
  discriminator: string
  bot: boolean
  mfa_enabled: boolean
  flags: number
  email: string
  avatar: string
}

export default class DiscordUser {
  id: string
  username: string
  discriminator: string
  bot: boolean
  mfaEnabled: boolean
  flags: number
  email: string
  avatar: string

  constructor(data: RawUser) {
    this.id = data.id
    this.username = data.username
    this.discriminator = data.discriminator
    this.bot = data.bot
    this.mfaEnabled = data.mfa_enabled
    this.flags = data.flags
    this.email = data.email
    this.avatar = data.avatar
  }
}