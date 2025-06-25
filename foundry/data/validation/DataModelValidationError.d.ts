import DataModelValidationFailure from "./DataModelValidationFailure.js"

/** A specialised Error to indicate a model validation failure. */
export default class DataModelValidationError extends Error {
  /**
   * @param failure    The failure that triggered this error or an error message
   * @param [params]   Additional Error constructor parameters
   */
  constructor(failure: DataModelValidationFailure | string, params?: ErrorOptions)

  /**
   * Retrieve the root failure that caused this error, or a specific sub-failure via a path.
   * @param path  The property path to the failure.
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
  getFailure(path?: string): DataModelValidationFailure

  /**
   * Retrieve a flattened object of all the properties that failed validation as part of this error.
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
  getAllFailures(): Record<string, DataModelValidationFailure>

  /** Log the validation error as a table. */
  logAsTable(): void

  /** Generate a nested tree view of the error as an HTML string. */
  asHTML(): string
}
