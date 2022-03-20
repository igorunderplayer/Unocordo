export default class RichEmbed {
  title: string
  description: string
  fields: EmbedField[]
  constructor(data: any = {}) {
    this.title = data.title
    this.description = data.description
    this.fields = []

    if('fields' in data) {
      this.fields = data.fields.map(f => new EmbedField(f))
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
  }
}

export class EmbedField {
  name: string
  value: string
  inline: boolean

  constructor(data: EmbedField) {
    this.name = data.name
    this.value = data.value
    this.inline = data.inline
  }
}