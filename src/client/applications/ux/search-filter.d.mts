/**
 * @callback SearchFilterCallback
 * @param {KeyboardEvent|null} event
 * @param {string} query
 * @param {RegExp} rgx
 * @param {HTMLElement} content
 * @returns {void}
 */
/**
 * @typedef SearchFilterConfiguration
 * Options which customize the behavior of the filter
 * @property {string} inputSelector    The CSS selector used to target the text input element.
 * @property {string} contentSelector  The CSS selector used to target the content container for these tabs.
 * @property {SearchFilterCallback} callback  A callback function which executes when the filter changes.
 * @property {string} [initial]        The initial value of the search query.
 * @property {number} [delay=200]      The number of milliseconds to wait for text input before processing.
 *                                     Default: `200`.
 */
/**
 * @typedef FieldFilter
 * @property {string} field                                     The dot-delimited path to the field being filtered
 * @property {string} [operator=SearchFilter.OPERATORS.EQUALS]  The search operator, from CONST.OPERATORS
 * @property {boolean} negate                                   Negate the filter, returning results which do NOT match
 *                                                              the filter criteria
 * @property {*} value                                          The value against which to test
 */
/**
 * A controller class for managing a text input widget that filters the contents of some other UI element.
 */
export default class SearchFilter {
    /**
     * The allowed Filter Operators which can be used to define a search filter
     * @enum {string}
     */
    static OPERATORS: Readonly<{
        readonly EQUALS: "equals";
        readonly CONTAINS: "contains";
        readonly STARTS_WITH: "starts_with";
        readonly ENDS_WITH: "ends_with";
        readonly LESS_THAN: "lt";
        readonly LESS_THAN_EQUAL: "lte";
        readonly GREATER_THAN: "gt";
        readonly GREATER_THAN_EQUAL: "gte";
        readonly BETWEEN: "between";
        readonly IS_EMPTY: "is_empty";
    }>;
    /**
     * Clean a query term to standardize it for matching.
     * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
     * @param {string} query    An input string which may contain leading/trailing spaces or diacritics
     * @returns {string}        A cleaned string of ASCII characters for comparison
     */
    static cleanQuery(query: string): string;
    /**
     * A helper method to test a value against a precomposed regex pattern.
     * @param {RegExp} rgx        The regular expression to test
     * @param {string} value      The value to test against
     * @returns {boolean}         Does the query match?
     */
    static testQuery(rgx: RegExp, value: string): boolean;
    /**
     * Test whether a given object matches a provided filter
     * @param {object} obj          An object to test against
     * @param {FieldFilter} filter  The filter to test
     * @returns {boolean}           Whether the object matches the filter
     */
    static evaluateFilter(obj: object, filter: FieldFilter): boolean;
    /**
     * @param {SearchFilterConfiguration} config     Configuration object for initializing the SearchFilter.
     */
    constructor(config?: SearchFilterConfiguration);
    /**
     * The value of the current query string
     * @type {string}
     */
    query: string;
    /**
     * A callback function to trigger when the tab is changed
     * @type {SearchFilterCallback|null}
     */
    callback: SearchFilterCallback | null;
    /**
     * The regular expression corresponding to the query that should be matched against
     * @type {RegExp}
     */
    rgx: RegExp;
    /**
     * A reference to the HTML navigation element the tab controller is bound to
     * @type {HTMLElement|null}
     * @internal
     */
    _input: HTMLElement | null;
    /**
     * Bind the SearchFilter controller to an HTML application
     * @param {HTMLElement} html
     */
    bind(html: HTMLElement): void;
    /**
     * Release all bound HTML elements and reset the query.
     */
    unbind(): void;
    /**
     * Perform a filtering of the content by invoking the callback function
     * @param {KeyboardEvent|null} event The triggering keyboard event
     * @param {string} query             The input search string
     */
    filter(event: KeyboardEvent | null, query: string): void;
    #private;
}
export type SearchFilterCallback = (event: KeyboardEvent | null, query: string, rgx: RegExp, content: HTMLElement) => void;
/**
 * Options which customize the behavior of the filter
 */
export type SearchFilterConfiguration = {
    /**
     * The CSS selector used to target the text input element.
     */
    inputSelector: string;
    /**
     * The CSS selector used to target the content container for these tabs.
     */
    contentSelector: string;
    /**
     * A callback function which executes when the filter changes.
     */
    callback: SearchFilterCallback;
    /**
     * The initial value of the search query.
     */
    initial?: string | undefined;
    /**
     * The number of milliseconds to wait for text input before processing.
     *       Default: `200`.
     */
    delay?: number | undefined;
};
export type FieldFilter = {
    /**
     * The dot-delimited path to the field being filtered
     */
    field: string;
    /**
     * The search operator, from CONST.OPERATORS
     */
    operator?: string | undefined;
    /**
     * Negate the filter, returning results which do NOT match
     * the filter criteria
     */
    negate: boolean;
    /**
     * The value against which to test
     */
    value: any;
};
