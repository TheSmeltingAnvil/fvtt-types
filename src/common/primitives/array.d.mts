/**
 * Flatten nested arrays by concatenating their contents
 * @returns {any[]}    An array containing the concatenated inner values
 */
export function deepFlatten(): any[]
/**
 * Test element-wise equality of the values of this array against the values of another array
 * @param {any[]} other   Some other array against which to test equality
 * @returns {boolean}     Are the two arrays element-wise equal?
 */
export function equals(other: any[]): boolean
/**
 * Partition an original array into two children array based on a logical test
 * Elements which test as false go into the first result while elements testing as true appear in the second
 * @template T
 * @param {(element: T) => boolean} rule
 * @returns {[T[], T[]]}    An Array of length two whose elements are the partitioned pieces of the original
 */
export function partition<T>(rule: (element: T) => boolean): [T[], T[]]
/**
 * Join an Array using a string separator, first filtering out any parts which return a false-y value
 * @param {string} sep    The separator string
 * @returns {string}      The joined string, filtered of any false values
 */
export function filterJoin(sep: string): string
/**
 * Find an element within the Array and remove it from the array
 * @template T
 * @param {(element: T) => boolean} find   A function to use as input to findIndex
 * @param {T} [replace]     A replacement for the spliced element
 * @returns {T|null}        The replacement element, the removed element, or null if no element was found.
 * @see Array#splice
 */
export function findSplice<T>(find: (element: T) => boolean, replace?: T): T | null
/**
 * Create and initialize an array of length n with integers from 0 to n-1
 * @param {number} n        The desired array length
 * @param {number} [min=0]  A desired minimum number from which the created array starts
 * @returns {number[]}      An array of integers from min to min+n
 */
export function fromRange(n: number, min?: number): number[]
