//export default Collection
/**
 * A reusable storage concept which blends the functionality of an Array with the efficient key-based lookup of a Map.
 * This concept is reused throughout Foundry VTT where a collection of uniquely identified elements is required.
 * @template {string} K
 * @template V
 * @extends {Map<K, V>}
 */
export default class Collection<K extends string, V> extends Map<K, V> {
  constructor()
  constructor(entries?: readonly (readonly [K, V])[] | null | undefined)
  constructor()
  constructor(iterable?: Iterable<readonly [K, V]> | null | undefined)
  /**
   * Return an Array of all the entry values in the Collection
   * @type {V[]}
   */
  get contents(): V[]
  /**
   * Find an entry in the Map using a functional condition.
   * @see {Array#find}
   * @param {(value: V, index: number, collection: Collection<K, V>) => unknown} condition The functional condition to
   *                                                                                       test.
   * @returns {V|undefined} The value, if found, otherwise undefined
   *
   * @example Create a new Collection and reference its contents
   * ```js
   * let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);
   * c.get("a") === c.find(entry => entry === "A"); // true
   * ```
   */
  find(condition: (value: V, index: number, collection: Collection<K, V>) => unknown): V | undefined
  /**
   * Filter the Collection, returning an Array of entries which match a functional condition.
   * @see {Array#filter}
   * @param {(value: V, index: number, collection: Collection<K, V>) => unknown} condition The functional condition to
   *                                                                                       test.
   * @returns {V[]}           An Array of matched values
   *
   * @example Filter the Collection for specific entries
   * ```js
   * let c = new Collection([["a", "AA"], ["b", "AB"], ["c", "CC"]]);
   * let hasA = c.filters(entry => entry.slice(0) === "A");
   * ```
   */
  filter(condition: (value: V, index: number, collection: Collection<K, V>) => unknown): V[]
  /**
   * Apply a function to each element of the collection
   * @see Array#forEach
   * @param {(value: V) => void} fn A function to apply to each element
   *
   * @example Apply a function to each value in the collection
   * ```js
   * let c = new Collection([["a", {active: false}], ["b", {active: false}], ["c", {active: false}]]);
   * c.forEach(e => e.active = true);
   * ```
   */
  // @ts-expect-error -- IGNORE --
  forEach(fn: (value: V) => void): void
  /**
   * Get an element from the Collection by its key.
   * @param {string} key      The key of the entry to retrieve
   * @param {object} [options]  Additional options that affect how entries are retrieved
   * @param {boolean} [options.strict=false] Throw an Error if the requested key does not exist. Default false.
   * @returns {V|undefined} The retrieved entry value, if the key exists, otherwise undefined
   *
   * @example Get an element from the Collection by key
   * ```js
   * let c = new Collection([["a", "Alfred"], ["b", "Bob"], ["c", "Cynthia"]]);
   * c.get("a"); // "Alfred"
   * c.get("d"); // undefined
   * c.get("d", {strict: true}); // throws Error
   * ```
   */
  get(
    key: string,
    {
      strict,
    }?: {
      strict?: boolean | undefined
    },
  ): V | undefined
  /**
   * Get an entry from the Collection by name.
   * Use of this method assumes that the objects stored in the collection have a "name" attribute.
   * @param {string} name       The name of the entry to retrieve
   * @param {object} [options]  Additional options that affect how entries are retrieved
   * @param {boolean} [options.strict=false] Throw an Error if the requested name does not exist. Default false.
   * @returns {V|undefined} The retrieved entry value, if one was found, otherwise undefined
   *
   * @example Get an element from the Collection by name (if applicable)
   * ```js
   * let c = new Collection([["a", "Alfred"], ["b", "Bob"], ["c", "Cynthia"]]);
   * c.getName("Alfred"); // "Alfred"
   * c.getName("D"); // undefined
   * c.getName("D", {strict: true}); // throws Error
   * ```
   */
  getName(
    name: string,
    {
      strict,
    }?: {
      strict?: boolean | undefined
    },
  ): V | undefined
  /**
   * Transform each element of the Collection into a new form, returning an Array of transformed values
   * @param {function(V,number,Collection): *} transformer  A transformation function applied to each entry value.
   * Positional arguments are the value, the index of iteration, and the collection being mapped.
   * @returns {Array<*>}  An Array of transformed values
   */
  map(transformer: (arg0: V, arg1: number, arg2: Collection<any, any>) => any): Array<any>
  /**
   * Reduce the Collection by applying an evaluator function and accumulating entries
   * @see {Array#reduce}
   * @param {function(*,V,number,Collection): *} reducer  A reducer function applied to each entry value. Positional
   * arguments are the accumulator, the value, the index of iteration, and the collection being reduced.
   * @param {*} initial             An initial value which accumulates with each iteration
   * @returns {*}                    The accumulated result
   *
   * @example Reduce a collection to an array of transformed values
   * ```js
   * let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);
   * let letters = c.reduce((s, l) => {
   *   return s + l;
   * }, ""); // "ABC"
   * ```
   */
  reduce(reducer: (arg0: any, arg1: V, arg2: number, arg3: Collection<any, any>) => any, initial: any): any
  /**
   * Test whether a condition is met by some entry in the Collection.
   * @see {Array#some}
   * @param {function(V,number,Collection): boolean} condition  The functional condition to test. Positional
   * arguments are the value, the index of iteration, and the collection being tested.
   * @returns {boolean}  Was the test condition passed by at least one entry?
   */
  some(condition: (arg0: V, arg1: number, arg2: Collection<any, any>) => boolean): boolean
  /**
   * Convert the Collection to a primitive array of its contents.
   * @returns {object[]}  An array of contained values
   */
  toJSON(): object[]
  /**
   * Then iterating over a Collection, we should iterate over its values instead of over its entries
   * @returns {MapIterator<V>}
   */
  // @ts-expect-error -- IGNORE --
  [Symbol.iterator](): MapIterator<V>
}
