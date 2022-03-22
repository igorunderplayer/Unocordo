import Client from "../client";
import { GuildChannels, PrivateChannels } from "../typings";
import Collection from "../util/Collection";

export default class ClientChannelsManager {
  private _client: Client
  private _guildChannels: Collection<string, GuildChannels>
  private _privateChannels: Collection<string, PrivateChannels>

  constructor(client: Client) {
    this._client = client

    this._guildChannels = new Collection()
    this._privateChannels = new Collection()
  }

  
  public get guildChannels() {
    return this._guildChannels
  }

  public get privateChannels() {
    return this._privateChannels
  }
  
}