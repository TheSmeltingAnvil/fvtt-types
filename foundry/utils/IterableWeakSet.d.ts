/**
 * Stores a set of objects with weak references to them, allowing them to be garbage collected.
 * Can be iterated over, unlike a WeakSet.
 */
export default class IterableWeakSet<T extends object> extends WeakSet<T> {
  /**
   * Enumerate the entries.
   */
  "[iterator]"(): Generator<any, void, any>

  /**
   * Clear all values from the set.
   */
  clear(): void

  /**
   * Enumerate the collection.
   */
  values(): Generator<any, void, any>
}
