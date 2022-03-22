export default class Collection<K, V> extends Map<K, V> {
  limit: number
  constructor() {
    super()
  }

  add (obj: V & { id: K }) {
    if(!obj.id) {
      throw new TypeError('Object must have an id')
    }

    this.set(obj.id, obj)
  }

  find (fn: (value: V) => V) {
    for (const val of this.values()) {
      if(fn(val)) return val
    }
  }

  filter (fn: (value: V) => boolean) {
    const filtered = []

    for (const val of this.values()) {
      if(fn(val)) filtered.push(val)
    }

    return filtered
  }

  map<R>(fn: (value: V, i?: number) => unknown): R[] {
    let i = 0;
    const values = []

    for (const value of this.values()) {
      values.push(fn(value, i))
      i++
    }

    return values
  }
}