/**
 * Convert a string color to a hex integer
 * @param color    The string color
 * @return         The hexidecimal color code
 */
export function colorStringToHex(color: string): number

/**
 * Wrap a callback in a debounced timeout.
 * Delay execution of the callback function until the function has not been called for delay milliseconds
 * @param callback A function to execute once the debounced threshold has been passed
 * @param delay An amount of time in milliseconds to delay
 * @return A wrapped function which can be called to debounce execution
 */
export function debounce<T extends unknown[]>(callback: (...args: T) => unknown, delay: number): (...args: T) => void

/**
 * Quickly clone a simple piece of data, returning a copy which can be mutated safely.
 * This method DOES support recursive data structures containing inner objects or arrays.
 * This method DOES NOT support advanced object types like Set, Map, or other specialized classes.
 * @param original Some sort of data
 * @return The clone of that data
 */
export function deepClone<T>(original: T): T

/**
 * Recursively freezes (Object.freeze) the object (or value). This method DOES NOT support cyclical data structures.
 * This method DOES NOT support advanced object types like Set, Map, or other specialized classes.
 * @param obj The object (or value).
 * @param strict Throw an Error if deepFreeze is unable to seal something instead of returning the original.
 * @returns The same object (or value) that was passed in.
 */
export function deepFreeze<const T extends object>(obj: T, { strict }?: { strict?: boolean }): Readonly<T>

/**
 * Recursively seals (Object.seal) the object (or value). This method DOES NOT support cyclical data structures.
 * This method DOES NOT support advanced object types like Set, Map, or other specialized classes.
 * @param obj The object (or value)
 * @param strict Throw an Error if deepFreeze is unable to seal something instead of returning the original.
 * @returns The same object (or value) that was passed in.
 */
export function deepSeal<T extends object>(obj: T, { strict }?: { strict?: boolean }): T

/**
 * A helper function which searches through an object to delete a value by a string key. The string key supports the
 * notation a.b.c which would delete object[a][b][c].
 * @param object The object to traverse.
 * @param key An object property with notation a.b.c.
 * @return Was the property deleted?
 */
export function deleteProperty(object: object, key: string): boolean

/**
 * Deeply difference an object against some other, returning the update keys and values.
 * @param original An object comparing data against which to compare.
 * @param other An object containing potentially different data.
 * @param options Additional options which configure the diff operation.
 * @param [options._d] An internal depth tracker
 * @param [options.deletionKeys] Apply special logic to deletion keys. They will only be kept if the original object has a corresponding key that could be deleted.
 * @param [options.inner] Only recognize differences in other for keys which also exist in original
 * @returns An object of the data in other which differs from that in original.
 */
export function diffObject<T extends Record<string, unknown> = Record<string, unknown>>(
  original: object,
  other: object,
  options?: { _d?: number; deletionKeys?: boolean; inner?: boolean },
): T

/**
 * A cheap data duplication trick which is relatively robust.
 * For a subset of cases the deepClone function will offer better performance.
 * @param original Some sort of data
 */
export function duplicate<T>(original: T): T

/**
 * Encode an url-like string by replacing any characters which need encoding. To reverse this encoding, the native
 * decodeURIComponent can be used on the whole encoded string, without adjustment.
 * @param path A fully-qualified URL or url component (like a relative path)
 * @returns An encoded URL string.
 */
export function encodeURL(path: string): string

/**
 * Escape the given unescaped string.
 *
 * Escaped strings are safe to use inside inner HTML of most tags and in most quoted HTML attributes. They are not NOT
 * safe to use in <script> tags, unquoted attributes, href, onmouseover, and similar. They must be unescaped first if
 * they are used inside a context that would escape them.
 *
 * Handles only &, <, >, ", and '.
 * @param value An unescaped string.
 * @return The escaped string.
 * @see foundry.utils.unescapeHTML
 */
export function escapeHTML(value: any): string

/**
 * Expand a flattened object to be a standard nested Object by converting all dot-notation keys to inner objects.
 * Only simple objects will be expanded. Other Object types like class instances will be retained as-is.
 * @param obj The object to expand.
 * @returns An expanded object.
 */
export function expandObject<T extends object = Record<string, unknown>>(obj: object): T

/**
 * Filter the contents of some source object using the structure of a template object.
 * Only keys which exist in the template are preserved in the source object.
 *
 * @param source           An object which contains the data you wish to filter
 * @param template         An object which contains the structure you wish to preserve
 * @param keepSpecial      Whether to keep special tokens like deletion keys
 * @param templateValues   Instead of keeping values from the source, instead draw values from the template
 *
 * @example
 * const source = {foo: {number: 1, name: "Tim", topping: "olives"}, bar: "baz"};
 * const template = {foo: {number: 0, name: "Mit", style: "bold"}, other: 72};
 * filterObject(source, template); // {foo: {number: 1, name: "Tim"}};
 * filterObject(source, template, {templateValues: true}); // {foo: {number: 0, name: "Mit"}};
 */
export function filterObject(source: object, template: object, keepSpecial?: boolean, templateValues?: boolean): object

/**
 * Flatten a possibly multi-dimensional object to a one-dimensional one by converting all nested keys to dot notation
 * @param obj  The object to flatten
 * @param _d   Recursion depth, to prevent overflow
 * @return     A flattened object
 */
export function flattenObject(obj: object, _d?: number): Record<string, unknown>

/**
 * Retrieve a Document by its Universally Unique Identifier (uuid).
 * @param uuid The uuid of the Document to retrieve.
 * @param options Options to configure how a UUID is resolved.
 * @param [options.invalid] Allow retrieving an invalid Document.
 * @param [options.relative] A Document to resolve relative UUIDs against.
 * @return Returns the Document if it could be found, otherwise null.
 */
export function fromUuid(
  uuid: string,
  options?: {
    invalid?: boolean
    relative?: foundry.abstract.Document /*<object, foundry.abstract.types.DocumentConstructionContext>*/
  },
): Promise<null | foundry.abstract.Document /*<object, foundry.abstract.types.DocumentConstructionContext>*/>

/**
 * Retrieve a Document by its Universally Unique Identifier (uuid) synchronously. If the uuid resolves to a compendium
 * document, that document's index entry will be returned instead.
 * @param uuid The uuid of the Document to retrieve.
 * @param options Options to configure how a UUID is resolved.
 * @param [options.invalid] Allow retrieving an invalid Document.
 * @param [options.relative] A Document to resolve relative UUIDs against.
 * @returns The Document or its index entry if it resides in a Compendium, otherwise null.
 * @throws If the uuid resolves to a Document that cannot be retrieved synchronously, and the strict option is true.
 */
export function fromUuidSync(
  uuid: string,
  options?: {
    invalid?: boolean
    relative?: foundry.abstract.Document /*<object, foundry.abstract.types.DocumentConstructionContext>*/
    strict?: boolean
  },
): null | object | foundry.abstract.Document /*<object, foundry.abstract.types.DocumentConstructionContext>*/

/**
 * A helper function which searches through an object to retrieve a value by a string key.
 * The string key supports the notation a.b.c which would return object[a][b][c]
 * @param object   The object to traverse
 * @param key      An object property with notation a.b.c
 *
 * @return         The value of the found property
 */
export function getProperty(object: object, key: string): unknown

/**
 * Learn the named type of a token - extending the functionality of typeof to recognize some core Object types
 * @param token Some passed token
 * @return      The named type of the token
 */
export function getType(token: unknown): string

/**
 * A helper function which tests whether an object has a property or nested property given a string key.
 * The string key supports the notation a.b.c which would return true if object[a][b][c] exists
 * @param object   The object to traverse
 * @param key      An object property with notation a.b.c
 *
 * @return         An indicator for whether the property exists
 */
export function hasProperty(object: object, key: string): boolean

/**
 * Convert a hex color code to an RGB array
 * @param hex    A hex color number
 * @return       An array of [r,g,b] colors normalized on the range of [0,1]
 */
export function hexToRGB(hex: number): [number, number, number]

/**
 * Convert a hex color code to an RGBA color string which can be used for CSS styling
 * @param hex    A hex color number
 * @param alpha  A level of transparency
 * @return       An rgba style string
 */
export function hexToRGBAString(hex: number, alpha?: number): string

/**
 * Converts an HSV color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes h, s, and v are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 1].
 *
 * @param  h       The hue
 * @param  s       The saturation
 * @param  v       The value
 * @return         The RGB representation
 */
export function hsvToRgb(h: number, s: number, v: number): [number, number, number]

/**
 * A temporary shim to invert an object, flipping keys and values
 * @param obj    Some object where the values are unique
 * @return       An inverted object where the values of the original object are the keys of the new object
 */
export function invertObject(obj: object): object

/**
 * Test whether a value is empty-like; either undefined or a content-less object.
 * @param value The value to test
 * @returns Is the value empty-like?
 */
export function isEmpty(value: unknown): boolean

/**
 * Return whether or not a version (v1) is more advanced than some other version (v0)
 * Supports numeric or string version numbers
 * @param v0
 * @param v1
 * @return
 */
export function isNewerVersion(v1: number | string | null, v0: number | string): boolean

/**
 * A simple function to test whether or not an Object is empty
 * @param obj    The object to test
 * @return       Is the object empty?
 */
export function isObjectEmpty(obj: object): boolean

/**
 * Log a compatibility warning which is filtered based on the client's defined compatibility settings.
 * @param message              The original warning or error message
 * @param [options={}]         Additional options which customize logging
 * @param [options.mode]       A logging level in COMPATIBILITY_MODES which overrides the configured default
 * @param [options.since]      A version identifier since which a change was made
 * @param [options.until]      A version identifier until which a change remains supported
 * @param [options.details]    Additional details to append to the logged message
 * @param [options.stack=true] Include the message stack trace
 * @throws An Error if the mode is ERROR
 */
export function logCompatibilityWarning(
  message: string,
  options?: {
    mode?: foundry.CompatibilityMode
    since?: number | string
    until?: number | string
    details?: string
    stack?: boolean
  },
): void

/**
 * Update a source object by replacing its keys and values with those from a target object.
 *
 * @param original     The initial object which should be updated with values from the target
 * @param [other={}]   A new object whose values should replace those in the source
 * @param [options={}] Additional options which configure the merge
 * @param [_d=0]       A privately used parameter to track recursion depth.
 * @returns The original source object including updated, inserted, or overwritten records.
 *
 * @example Control how new keys and values are added
 * ```js
 * mergeObject({k1: "v1"}, {k2: "v2"}, {insertKeys: false}); // {k1: "v1"}
 * mergeObject({k1: "v1"}, {k2: "v2"}, {insertKeys: true});  // {k1: "v1", k2: "v2"}
 * mergeObject({k1: {i1: "v1"}}, {k1: {i2: "v2"}}, {insertValues: false}); // {k1: {i1: "v1"}}
 * mergeObject({k1: {i1: "v1"}}, {k1: {i2: "v2"}}, {insertValues: true}); // {k1: {i1: "v1", i2: "v2"}}
 * ```
 *
 * @example Control how existing data is overwritten
 * ```js
 * mergeObject({k1: "v1"}, {k1: "v2"}, {overwrite: true}); // {k1: "v2"}
 * mergeObject({k1: "v1"}, {k1: "v2"}, {overwrite: false}); // {k1: "v1"}
 * ```
 *
 * @example Control whether merges are performed recursively
 * ```js
 * mergeObject({k1: {i1: "v1"}}, {k1: {i2: "v2"}}, {recursive: false}); // {k1: {i2: "v2"}}
 * mergeObject({k1: {i1: "v1"}}, {k1: {i2: "v2"}}, {recursive: true}); // {k1: {i1: "v1", i2: "v2"}}
 * ```
 *
 * @example Deleting an existing object key
 * ```js
 * mergeObject({k1: "v1", k2: "v2"}, {"-=k1": null}, {performDeletions: true});   // {k2: "v2"}
 * ```
 */
export function mergeObject<T extends object, U extends object = T>(
  original: T,
  other?: U | undefined,
  options?: MergeObjectOptions,
  _d?: number,
): T & U

/**
 * Test if two objects contain the same enumerable keys and values.
 * @param a  The first object.
 * @param b  The second object.
 */
export function objectsEqual(a: object, b: object): boolean

/**
 * Parse a UUID into its constituent parts.
 * @param uuid               The UUID to parse.
 * @param [options]          Options to configure parsing behavior.
 * @param [options.relative] A document to resolve relative UUIDs against.
 * @returns Returns the Collection, Document Type, and Document ID to resolve the parent
 *          document, as well as the remaining Embedded Document parts, if any.
 */
export function parseUuid(
  uuid: Maybe<string>,
  options?: { relative?: Maybe<Document> },
): foundry.utils.types.ResolvedUUID | null

/**
 * Generate a random ID
 * Generate random number and convert it to base 36 and remove the '0.' at the beginning
 * As long as the string is not long enough, generate more random data into it
 * Use substring in case we generated a string with a length higher than the requested length
 *
 * @param length    The length of the random ID to generate
 * @return          Return a string containing random letters and numbers
 */
export function randomID(length?: number): string

/**
 * Converts an RGB color value to HSV. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes r, g, and b are contained in the set [0, 1] and
 * returns h, s, and v in the set [0, 1].
 *
 * @param  r       The red color value
 * @param  g       The green color value
 * @param  b       The blue color value
 * @return         The HSV representation
 */
export function rgbToHsv(r: number, g: number, b: number): number[]

/**
 * Converts a color as an [R, G, B] array of normalized floats to a hexadecimal number.
 * @param rgb - Array of numbers where all values are normalized floats from 0.0 to 1.0.
 * @return      Number in hexadecimal.
 */
export function rgbToHex(rgb: [number, number, number]): number

/**
 * A helper function which searches through an object to assign a value using a string key
 * This string key supports the notation a.b.c which would target object[a][b][c]
 *
 * @param object   The object to update
 * @param key      The string key
 * @param value    The value to be assigned
 *
 * @return A flag for whether or not the object was updated
 */
export function setProperty(object: object, key: string, value: unknown): boolean

declare interface SortOptions<TObject extends object> {
  /** The target object relative which to sort */
  target?: TObject
  /** The Array of siblings which the source should be sorted within */
  siblings?: TObject[]
  /** The property name within the source object which defines the sort key */
  sortKey?: string
  /**
   * Explicitly sort before (true) or sort after( false).
   * If undefined the sort order will be automatically determined.
   */
  sortBefore?: boolean
}

declare global {
  interface MergeObjectOptions {
    /**
     * Control whether to insert new top-level objects into the resulting structure which do not previously exist
     * in the original object.
     */
    insertKeys?: boolean
    /**
     * Control whether to insert new nested values into child objects in the resulting structure which did not
     * previously exist in the original object. */
    insertValues?: boolean
    /**
     * Control whether to replace existing values in the source, or only merge values which do not already exist
     * in the original object.
     */
    overwrite?: boolean
    /**
     * Control whether to merge inner-objects recursively (if true), or whether to simply replace inner objects
     * with a provided new value.
     */
    recursive?: boolean
    /**
     * Control whether to apply updates to the original object in-place (if true), otherwise the original object is
     * duplicated and the copy is merged.
     */
    inplace?: boolean
    /**
     * Control whether strict type checking requires that the value of a key in the other object must match the
     * data type in the original data to be merged.
     */
    enforceTypes?: boolean
    /**
     * Control whether to perform deletions on the original object if deletion keys are present in the other object.
     */
    performDeletions?: boolean
  }
}
