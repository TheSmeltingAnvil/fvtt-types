/**
 * A type of RollTerm used to denote and perform an arithmetic operation.
 */
export default class OperatorTerm extends RollTerm {
  /**
   * An object of operators with their precedence values.
   * @type {Readonly<Record<string, number>>}
   */
  static PRECEDENCE: Readonly<Record<string, number>>
  /**
   * An array of operators which represent arithmetic operations
   * @type {string[]}
   */
  static OPERATORS: string[]
  /** @override */
  static override _fromData(data: any): OperatorTerm
  constructor({ operator, options }?: { operator: string; options?: object })
  /**
   * The term's operator value.
   * @type {string}
   */
  operator: string
  /** @override */
  override get total(): string
}
import RollTerm from "./term.mjs"
