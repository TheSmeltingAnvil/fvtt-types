/**
 * @import {ElementValidationFailure} from "./_types.mjs";
 */
/**
 * A class responsible for recording information about a validation failure.
 */
export class DataModelValidationFailure {
    /**
     * Format a DataModelValidationFailure instance as a string message.
     * @param {DataModelValidationFailure} failure    The failure instance
     * @param {number} _d                             An internal depth tracker
     * @returns {string}                              The formatted failure string
     */
    static #formatString(failure: DataModelValidationFailure, _d?: number): string;
    /**
     * @param {object} [options]
     * @param {any} [options.invalidValue]       The value that failed validation for this field.
     * @param {any} [options.fallback]           The value it was replaced by, if any.
     * @param {boolean} [options.dropped=false]  Whether the value was dropped from some parent collection.
     * @param {string} [options.message]         The validation error message.
     * @param {boolean} [options.unresolved=false]     Whether this failure was unresolved
     */
    constructor({ invalidValue, fallback, dropped, message, unresolved }?: {
        invalidValue?: any;
        fallback?: any;
        dropped?: boolean | undefined;
        message?: string | undefined;
        unresolved?: boolean | undefined;
    });
    /**
     * The value that failed validation for this field.
     * @type {any}
     */
    invalidValue: any;
    /**
     * The value it was replaced by, if any.
     * @type {any}
     */
    fallback: any;
    /**
     * Whether the value was dropped from some parent collection.
     * @type {boolean}
     */
    dropped: boolean;
    /**
     * The validation error message.
     * @type {string}
     */
    message: string;
    /**
     * Record whether a validation failure is unresolved.
     * This reports as true if validation for this field or any hierarchically contained field is unresolved.
     * A failure is unresolved if the value was invalid and there was no valid fallback value available.
     * @type {boolean}
     */
    unresolved: boolean;
    /**
     * If this field contains other fields that are validated as part of its validation, their results are recorded here.
     * @type {Record<string, DataModelValidationFailure>}
     */
    fields: Record<string, DataModelValidationFailure>;
    /**
     * If this field contains a list of elements that are validated as part of its validation, their results are recorded
     * here.
     * @type {ElementValidationFailure[]}
     */
    elements: ElementValidationFailure[];
    /**
     * Return this validation failure as an Error object.
     * @returns {DataModelValidationError}
     */
    asError(): DataModelValidationError;
    /**
     * Whether this failure contains other sub-failures.
     * @returns {boolean}
     */
    isEmpty(): boolean;
    /**
     * Return the base properties of this failure, omitting any nested failures.
     * @returns {{invalidValue: any, fallback: any, dropped: boolean, message: string}}
     */
    toObject(): {
        invalidValue: any;
        fallback: any;
        dropped: boolean;
        message: string;
    };
    /**
     * Represent the DataModelValidationFailure as a string.
     * @returns {string}
     */
    toString(): string;
}
/**
 * A specialised Error to indicate a model validation failure.
 * @extends {Error}
 */
export class DataModelValidationError extends Error {
    /**
     * Collect nested failures into an aggregate object.
     * @param {DataModelValidationFailure} failure                               The failure.
     * @returns {DataModelValidationFailure|Record<string, DataModelValidationFailure>}  Returns the failure at the leaf of the
     *                                                                           tree, otherwise an object of
     *                                                                           sub-failures.
     */
    static #aggregateFailures(failure: DataModelValidationFailure): DataModelValidationFailure | Record<string, DataModelValidationFailure>;
    /**
     * @param {DataModelValidationFailure|string} failure  The failure that triggered this error or an error message
     * @param {...any} [params]                            Additional Error constructor parameters
     */
    constructor(failure: DataModelValidationFailure | string, ...params?: any[]);
    /**
     * Retrieve the root failure that caused this error, or a specific sub-failure via a path.
     * @param {string} [path]  The property path to the failure.
     * @returns {DataModelValidationFailure}
     *
     * @example Retrieving a failure.
     * ```js
     * const changes = {
     *   "foo.bar": "validValue",
     *   "foo.baz": "invalidValue"
     * };
     * try {
     *   doc.validate(expandObject(changes));
     * } catch ( err ) {
     *   const failure = err.getFailure("foo.baz");
     *   console.log(failure.invalidValue); // "invalidValue"
     * }
     * ```
     */
    getFailure(path?: string): DataModelValidationFailure;
    /**
     * Retrieve a flattened object of all the properties that failed validation as part of this error.
     * @returns {Record<string, DataModelValidationFailure>}
     *
     * @example Removing invalid changes from an update delta.
     * ```js
     * const changes = {
     *   "foo.bar": "validValue",
     *   "foo.baz": "invalidValue"
     * };
     * try {
     *   doc.validate(expandObject(changes));
     * } catch ( err ) {
     *   const failures = err.getAllFailures();
     *   if ( failures ) {
     *     for ( const prop in failures ) delete changes[prop];
     *     doc.validate(expandObject(changes));
     *   }
     * }
     * ```
     */
    getAllFailures(): Record<string, DataModelValidationFailure>;
    /**
     * Log the validation error as a table.
     */
    logAsTable(): void;
    /**
     * Generate a nested tree view of the error as an HTML string.
     * @returns {string}
     */
    asHTML(): string;
    #private;
}
import type { ElementValidationFailure } from "./_types.mjs";
