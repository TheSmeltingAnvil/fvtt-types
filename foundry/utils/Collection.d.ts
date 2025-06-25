/**
 * A reusable storage concept which blends the functionality of an Array with the efficient key-based lookup ofa Map.
 * This concept is reused throughout Foundry VTT where a collection of uniquely identified elements is required.
 */
export default class Collection<K extends string, V> extends Map<K, V> {
  /**
   *
   * @param entries
   */
  constructor(entries: Iterable<readonly [K, V], any, any>)

  /**
   * Return an Array of all the entry values in the Collection.
   */
  get contents(): V[]

  set(key: K, value: V): this

  delete(key: K): boolean

  /**
   * Then iterating over a Collection, we should iterate over its values instead of over its entries.
   */
  "[iterator]"(): MapIterator<V>

  /**
   * Filter the Collection, returning an Array of entries which match a functional condition.
   * @param condition The functional condition to test. Positional arguments are the value, the index of iteration,
   * and the collection being filtered.
   * @returns An Array of matched values.
   */
  filter<T extends V = V>(condition: (value: V, index: number, collection: this) => value is T): T[]
  filter<T extends V = V>(condition: (value: V, index: number, collection: this) => boolean): T[]

  /**
   * Find an entry in the Map using a functional condition.
   * @param condition The functional condition to test. Positional arguments are the value, the index of iteration,
   * and the collection being searched.
   * @returns The value, if found, otherwise undefined.
   */
  find<T extends V = V>(condition: (value: V, index: number, collection: this) => boolean): T | undefined

  /**
   * Apply a function to each element of the collection.
   * @param fn A function to apply to each element.
   */
  // @ts-expect-error This is a new overload!?
  forEach(fn: (value: V) => void): void

  /**
   * Get an element from the Collection by its key.
   * @param key The key of the entry to retrieve.
   * @param [.strict] Throw an Error if the requested key does not exist. Default false.
   * @returns The retrieved entry value, if the key exists, otherwise undefined.
   */
  get<T extends V = V>(key: Maybe<string>, { strict }: { strict: true }): T
  get<T extends V = V>(key: string, { strict }?: CollectionGetOptions): T | undefined
  get<T extends V = V>(key: string, { strict }?: CollectionGetOptions): T | undefined

  /**
   * Get an entry from the Collection by name. Use of this method assumes that the objects stored in the collection
   * have a "name" attribute.
   * @param name The name of the entry to retrieve.
   * @param options Additional options that affect how entries are retrieved.
   * @param [options.strict] Throw an Error if the requested name does not exist. Default false.
   * @returns The retrieved entry value, if one was found, otherwise undefined.
   */
  getName(name: string, options?: { strict?: boolean }): undefined | V

  /**
   * Transform each element of the Collection into a new form, returning an Array of transformed values.
   * @param transformer A transformation function applied to each entry value. Positional arguments are the value,
   * the index of iteration, and the collection being mapped.
   * @returns An Array of transformed values.
   */
  map<T>(transformer: (value: V, index: number, collection: this) => T): T[]

  /**
   * Reduce the Collection by applying an evaluator function and accumulating entries.
   * @param reducer A reducer function applied to each entry value. Positional arguments are the accumulator, the
   * value, the index of iteration, and the collection being reduced.
   * @param initial An initial value which accumulates with each iteration.
   * @returns The accumulated result.
   */
  reduce<T>(reducer: (accumulator: T, value: V, index: number, collection: this) => T, initial: T): T

  /**
   * Test whether a condition is met by some entry in the Collection.
   * @param condition The functional condition to test. Positional arguments are the value, the index of iteration,
   * and the collection being tested.
   * @returns Was the test condition passed by at least one entry?
   */
  some(condition: (value: V, index: number, collection: this) => boolean): boolean

  /**
   * Convert the Collection to a primitive array of its contents.
   * @returns An array of contained values.
   */
  toJSON(): object[]
}

export interface CollectionGetOptions {
  /**
   * Throw an Error if the requested key does not exist.
   * @default false
   */
  strict?: boolean
}
