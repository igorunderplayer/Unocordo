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

  find (fn: (value: V) => boolean) {
    for (const val of this.values()) {
      if(fn(val)) return val
    }
  }

  map<R>(fn: (value: V, i?: number) => unknown): R[] {
    const allValues = this.values()
    const values = []
    for (var i = 0;i < this.size;i++) {
      const value = allValues[i]
      values.push(fn(value, i))
    }

    return values
  }
}