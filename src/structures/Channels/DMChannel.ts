import { FetchMessagesOptions, MessageOptions, StructureData } from '../../typings'
import Client from '../../client'

import { ChannelTypes } from '../../Constants'
import { DiscordChannel } from '..'

export default class DMChannel extends DiscordChannel {
  type: ChannelTypes.DM = ChannelTypes.DM
  constructor(client: Client, data: StructureData = {}) {
    super(client, data)
  }

  createMessage(options: MessageOptions | string) {
    return this.client.createMessage(this.id, options)
  }

  fetchMessages(options: FetchMessagesOptions = {}) {
    this.client.api.get(`channels`)
  }
}