/**
 * A type of RollTerm used to represent static numbers.
 */
export default class NumericTerm extends RollTerm {
  /**
   * Determine whether a string expression matches a NumericTerm
   * @param {string} expression               The expression to parse
   * @returns {RegExpMatchArray|null}
   */
  static matchTerm(expression: string): RegExpMatchArray | null
  /**
   * Construct a term of this type given a matched regular expression array.
   * @param {RegExpMatchArray} match          The matched regular expression array
   * @returns {NumericTerm}                   The constructed term
   */
  static fromMatch(match: RegExpMatchArray): NumericTerm
  constructor({ number, options }?: { number: number; options?: object })
  /**
   * The term's numeric value.
   * @type {number}
   */
  number: number
  /** @inheritdoc */
  get total(): number
}
import RollTerm from "./term.mjs"
