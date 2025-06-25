/**
 * Stores a map of objects with weak references to the keys, allowing them to be garbage collected. Both keys and values
 * can be iterated over, unlike a WeakMap.
 */
export default class IterableWeakMap<
  K extends WeakKey = WeakKey,
  V extends { value: unknown } = { value: unknown },
> extends WeakMap<K, V> {
  /**
   * Enumerate the entries.
   */
  "[iterator]"(): Generator<[any, any], void, any>

  /**
   * Clear all values from the map.
   */
  clear(): void

  /**
   * Enumerate the entries.
   */
  entries(): Generator<[any, any], void, any>

  /**
   * Enumerate the keys.
   */
  keys(): Generator<any, void, any>

  /**
   * Enumerate the values.
   */
  values(): Generator<any, void, any>
}
