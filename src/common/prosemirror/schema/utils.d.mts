/**
 * Determine if an HTML element contains purely inline content, i.e. only text nodes and 'mark' elements.
 * @param {HTMLElement} element  The element.
 * @returns {boolean}
 */
export function onlyInlineContent(element: HTMLElement): boolean
/**
 * Determine if an HTML element is empty.
 * @param {HTMLElement} element  The element.
 * @returns {boolean}
 */
export function isElementEmpty(element: HTMLElement): boolean
/**
 * Convert an element's style attribute string into an object.
 * @param {string} str  The style string.
 * @returns {object}
 */
export function stylesFromString(str: string): object
/**
 * Merge two style attribute strings.
 * @param {string} a  The first style string.
 * @param {string} b  The second style string.
 * @returns {string}
 */
export function mergeStyle(a: string, b: string): string
/**
 * Convert an element's class attribute string into an array of class names.
 * @param {string} str  The class string.
 * @returns {string[]}
 */
export function classesFromString(str: string): string[]
/**
 * Merge two class attribute strings.
 * @param {string} a  The first class string.
 * @param {string} b  The second class string.
 * @returns {string}
 */
export function mergeClass(a: string, b: string): string
