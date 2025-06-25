import DataModelValidationError from "./DataModelValidationError.js"

/** A class responsible for recording information about a validation failure. */
export default class DataModelValidationFailure {
  /**
   * @param [invalidValue]   The value that failed validation for this field.
   * @param [fallback]       The value it was replaced by, if any.
   * @param [dropped]        Whether the value was dropped from some parent collection.
   * @param [message]        The validation error message.
   * @param [unresolved]     Whether this failure was unresolved
   */
  constructor({
    invalidValue,
    fallback,
    dropped,
    message,
    unresolved,
  }?: {
    invalidValue?: unknown
    fallback?: boolean
    dropped?: boolean
    message?: string
    unresolved?: boolean
  })

  /** The value that failed validation for this field. */
  invalidValue: unknown

  /** The value it was replaced by, if any. */
  fallback: unknown

  /** Whether the value was dropped from some parent collection. */
  dropped: boolean

  /** The validation error message. */
  message?: string

  /** If this field contains other fields that are validated as part of its validation, their results are recorded here. */
  fields: Record<string, DataModelValidationFailure>

  /**
   * If this field contains a list of elements that are validated as part of its validation, their results are recorded
   * here.
   */
  elements: ElementValidationFailure[]

  /**
   * Record whether a validation failure is unresolved.
   * This reports as true if validation for this field or any hierarchically contained field is unresolved.
   * A failure is unresolved if the value was invalid and there was no valid fallback value available.
   */
  unresolved: boolean

  /** Return this validation failure as an Error object. */
  asError(): DataModelValidationError

  /** Whether this failure contains other sub-failures. */
  isEmpty(): boolean

  /** Return the base properties of this failure, omitting any nested failures. */
  toObject(): {
    invalidValue: unknown
    fallback: unknown
    dropped: boolean
    message: string
  }

  /** Represent the DataModelValidationFailure as a string. */
  toString(): string
}

interface ElementValidationFailure {
  /** Either the element's index or some other identifier for it. */
  id: string | number
  /** Optionally a user-friendly name for the element. */
  name?: string
  /** The element's validation failure. */
  failure: DataModelValidationFailure
}
