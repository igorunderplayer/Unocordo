export interface ClientOptions {
  token: string
}

export default class Client {
  private _token: string

  constructor (options: ClientOptions) {
    this._token = options.token
  }
}
