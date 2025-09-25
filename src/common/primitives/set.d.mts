/**
 * Test whether this set is equal to some other set.
 * Sets are equal if they share the same members, independent of order
 * @param {Set<any>} other       Some other set to compare against
 * @returns {boolean}       Are the sets equal?
 */
export function equals(other: Set<any>): boolean
/**
 * Return the first value from the set.
 * @template T
 * @returns {T|undefined} The first element in the set, or undefined
 */
export function first<T>(): T | undefined
/**
 * Test whether this set has an intersection with another set.
 * @param {Set} other       Another set to compare against
 * @returns {boolean}       Do the sets intersect?
 */
export function intersects(other: Set<any>): boolean
/**
 * Test whether this set is a subset of some other set.
 * A set is a subset if all its members are also present in the other set.
 * @param {Set} other       Some other set that may be a subset of this one
 * @returns {boolean}       Is the other set a subset of this one?
 * @deprecated since v13
 */
export function isSubset(other: Set<any>): boolean
/**
 * Convert a set to a JSON object by mapping its contents to an array
 * @template T
 * @returns {T[]}           The set elements as an array.
 */
export function toObject<T>(): T[]
/**
 * Test whether every element in this Set satisfies a certain test criterion.
 * @template T
 * @param {(element: T, index: number, set: Set<T>) => boolean} test The test criterion to apply. Positional arguments
 *                                                                   are the value, the index of iteration, and the set
 *                                                                   being tested.
 * @returns {boolean}  Does every element in the set satisfy the test criterion?
 * @see Array#every
 */
export function every<T>(test: (element: T, index: number, set: Set<T>) => boolean): boolean
/**
 * Filter this set to create a subset of elements which satisfy a certain test criterion.
 * @template T
 * @param {(element: T, index: number, set: Set) => boolean} test The test criterion to apply. Positional arguments are
 *                                                                the value, the index of iteration, and the set being
 *                                                                filtered.
 * @returns {Set<T>} A new Set containing only elements which satisfy the test criterion.
 * @see Array#filter
 */
export function filter<T>(test: (element: T, index: number, set: Set<any>) => boolean): Set<T>
/**
 * Find the first element in this set which satisfies a certain test criterion.
 * @template T
 * @param {(element: T, index: number, set: Set<T>) => boolean} test The test criterion to apply. Positional arguments
 *                                                                   are the value, the index of iteration, and the set
 *                                                                   being searched.
 * @returns {T|undefined} The first element in the set which satisfies the test criterion, or undefined.
 * @see Array#find
 */
export function find<T>(test: (element: T, index: number, set: Set<T>) => boolean): T | undefined
/**
 * Create a new Set where every element is modified by a provided transformation function.
 * @template T
 * @template U
 * @param {(element: T, index: number, set: Set<T>) => U} transform The transformation function to apply. Positional
 *                                                                  arguments are the value, the index of iteration, and
 *                                                                  the set being transformed.
 * @returns {Set<U>} A new Set of equal size containing transformed elements.
 * @see Array#map
 */
export function map<T, U>(transform: (element: T, index: number, set: Set<T>) => U): Set<U>
/**
 * Create a new Set with elements that are filtered and transformed by a provided reducer function.
 * @template T
 * @param {(accum: any, element: T, index: number, set: Set<T>) => any} reducer A reducer function applied to each
 *                                                                              value. Positional arguments are the
 *                                                                              accumulator, the value, the index of
 *                                                                              iteration, and the set being reduced.
 * @param {any} [initial]         The initial value of the returned accumulator.
 * @returns {any}                 The final value of the accumulator.
 * @see Array#reduce
 */
export function reduce<T>(reducer: (accum: any, element: T, index: number, set: Set<T>) => any, initial?: any): any
/**
 * Test whether any element in this Set satisfies a certain test criterion.
 * @template T
 * @param {(element: T, index: number, set: Set<T>) => boolean} test The test criterion to apply. Positional arguments
 *                                                                   are the value, the index of iteration, and the set
 *                                                                   being tested.
 * @returns {boolean} Does any element in the set satisfy the test criterion?
 * @see Array#some
 */
export function some<T>(test: (element: T, index: number, set: Set<T>) => boolean): boolean
