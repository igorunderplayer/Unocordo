export interface CollectionOptions {
  limit?: number
}

export default class Collection<K, V> extends Map<K, V> {
  limit: number
  constructor(options: CollectionOptions = {}, iterable?: Iterable<[K, V]>) {
    super(iterable)

    this.limit = options.limit || Infinity
  }

  add (obj: V & { id: K }) {
    if(!obj.id) {
      throw new TypeError('Object must have an id')
    }

    if(this.limit === this.size) {
      this.delete(this.keys().next().value)
    }

    this.set(obj.id, obj)
    return this
  }

  at (index: number) {
    const values = Array.from(this.values())
    return values[index]
  }

  find (fn: (value: V) => V) {
    for (const val of this.values()) {
      if(fn(val)) return val
    }
  }

  filter (fn: (value: V) => boolean): V[] {
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

  reverse () {
    const values = Array.from(this.values())
    return values.reverse()
  }
}