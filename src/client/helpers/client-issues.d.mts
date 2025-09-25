/**
 * @typedef {Record<string, Record<string, number>>} ModuleSubTypeCounts
 * An object structure of document types at the top level, with a count of different sub-types for that document type.
 */
/**
 * A class responsible for tracking issues in the current world.
 */
export default class ClientIssues {
    /**
     * The minimum supported screen resolution.
     * @type {{width: number; height: number}}
     */
    static #MIN_SCREEN_RESOLUTION: {
        width: number;
        height: number;
    };
    /**
     * The minimum supported viewport dimensions.
     * @type {{width: number; height: number}}
     */
    static #MIN_VIEWPORT_DIMENSIONS: {
        width: number;
        height: number;
    };
    /**
     * @typedef BrowserTest
     * @property {number|string} minimum  The minimum supported version for this browser.
     * @property {RegExp} match    A regular expression to match the browser against the user agent string.
     * @property {string} message  A message to display if the user's browser version does not meet the minimum.
     */
    /**
     * The minimum supported client versions.
     * @type {Record<string, BrowserTest>}
     */
    static #BROWSER_TESTS: Record<string, {
        /**
         * The minimum supported version for this browser.
         */
        minimum: number | string;
        /**
         * A regular expression to match the browser against the user agent string.
         */
        match: RegExp;
        /**
         * A message to display if the user's browser version does not meet the minimum.
         */
        message: string;
    }>;
    /**
     * Detect and display warnings for known performance issues which may occur due to the user's hardware or browser
     * configuration.
     * @internal
     */
    _detectWebGLIssues(): void;
    /**
     * Add an invalid Document to the module-provided sub-type counts.
     * @param {typeof Document} cls                The Document class.
     * @param {object} source                      The Document's source data.
     * @param {object} [options]
     * @param {boolean} [options.decrement=false]  Decrement the counter rather than incrementing it.
     * @internal
     */
    _countDocumentSubType(cls: typeof Document, source: object, options?: {
        decrement?: boolean | undefined;
    }): void;
    /**
     * Track a validation failure that occurred in a WorldCollection.
     * @param {WorldCollection} collection      The parent collection.
     * @param {object} source                   The Document's source data.
     * @param {DataModelValidationError} error  The validation error.
     * @internal
     */
    _trackValidationFailure(collection: WorldCollection<any>, source: object, error: DataModelValidationError): void;
    /**
     * Detect and record certain usability error messages which are likely to result in the user having a bad experience.
     * @internal
     */
    _detectUsabilityIssues(): void;
    /**
     * Get the Document sub-type counts for a given module.
     * @param {Module|string} module  The module or its ID.
     * @returns {ModuleSubTypeCounts}
     */
    getSubTypeCountsFor(module: Module | string): ModuleSubTypeCounts;
    /**
     * Retrieve all sub-type counts in the world.
     * @returns {Iterator<string, ModuleSubTypeCounts>}
     */
    getAllSubTypeCounts(): Iterator<string, ModuleSubTypeCounts>;
    /**
     * Retrieve the tracked validation failures.
     * @returns {object}
     */
    get validationFailures(): object;
    /**
     * Retrieve the tracked usability issues.
     * @returns {Record<string, UsabilityIssue>}
     */
    get usabilityIssues(): Record<string, {
        /**
         * The pre-localized message to display in relation to the usability issue.
         */
        message: string;
        /**
         * The severity of the issue, either "error", "warning", or "info".
         */
        severity: string;
        /**
         * Parameters to supply to the localization.
         */
        params?: object | undefined;
    }>;
    /**
     * @typedef PackageCompatibilityIssue
     * @property {string[]} error    Error messages.
     * @property {string[]} warning  Warning messages.
     */
    /**
     * Retrieve package compatibility issues.
     * @returns {Record<string, PackageCompatibilityIssue>}
     */
    get packageCompatibilityIssues(): Record<string, {
        /**
         * Error messages.
         */
        error: string[];
        /**
         * Warning messages.
         */
        warning: string[];
    }>;
    #private;
}
/**
 * An object structure of document types at the top level, with a count of different sub-types for that document type.
 */
export type ModuleSubTypeCounts = Record<string, Record<string, number>>;
import WorldCollection from "@client/documents/abstract/world-collection.mjs";
