export default class Message {
  user: any
  content: string

  constructor (d: any) {
    this.user = d.author
    this.content = d.content
  }
}
