import { Client } from "..";
import { StructureData } from "../typings";
import DiscordUser from "./DiscordUser";

export default class DiscordMember {
  client: Client
  id: string
  user: DiscordUser
  roles: string[]
  nickname: string
  avatar: string
  constructor(client: Client, data: StructureData = {}) {
    this.client = client
    this.id = data.user.id
    this.user = new DiscordUser(data.user)
    this.roles = data.roles
    this.nickname = data.nick
    this.avatar = data.avatar
  }
}