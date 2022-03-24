import { StructureData } from "../typings"

export default class RichEmbed {
  title: string
  description: string
  fields: EmbedField[]
  constructor(data: StructureData = {}) {
    this.title = data.title
    this.description = data.description
    this.fields = []

    for (const field of data.fields) {
      this.fields.push(new EmbedField(field))
    }
  }

  setTitle(title: string) {
    this.title = title
    return this
  }

  setDescription(description: string) {
    this.description = description
    return this
  }

  addField(field: EmbedField) {
    this.fields.push(field)
    return this
  }
}

export class EmbedField {
  name: string
  value: string
  inline?: boolean

  constructor(data: EmbedField) {
    this.name = data.name
    this.value = data.value
    this.inline = data.inline
  }
}