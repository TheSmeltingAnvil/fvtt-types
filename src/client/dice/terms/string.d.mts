/**
 * A type of RollTerm used to represent strings which have not yet been matched.
 */
export default class StringTerm extends RollTerm {
  constructor({ term, options }?: { term: string; options?: object })
  /**
   * The term's string value.
   * @type {string}
   */
  term: string
  /** @inheritdoc */
  get total(): string
  /** @inheritdoc */
  evaluate({ allowStrings }?: { allowStrings?: boolean | undefined }): this
}
import RollTerm from "./term.mjs"
