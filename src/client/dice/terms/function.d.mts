/**
 * @import {RollFunction} from "@client/config.mjs";
 */
/**
 * A type of RollTerm used to apply a function.
 */
export default class FunctionTerm extends RollTerm {
  /** @inheritDoc */
  static _fromData(data: any): RollTerm
  /** @override */
  static override fromParseNode(node: any): RollTerm
  constructor({
    fn,
    terms,
    rolls,
    result,
    options,
  }?: {
    fn: string
    terms?: never[] | undefined
    rolls?: never[] | undefined
    result: string | number
    options?: object | undefined
  })
  /**
   * The name of the configured function, or one in the Math environment, which should be applied to the term
   * @type {string}
   */
  fn: string
  /**
   * An array of string argument terms for the function
   * @type {string[]}
   */
  terms: string[]
  /**
   * The cached Roll instances for each function argument
   * @type {Roll[]}
   */
  rolls: Roll[]
  /**
   * The cached result of evaluating the method arguments
   * @type {string|number}
   */
  result: string | number
  /**
   * An array of evaluated DiceTerm instances that should be bubbled up to the parent Roll
   * @type {DiceTerm[]}
   */
  get dice(): DiceTerm[]
  /** @inheritdoc */
  get total(): string | number
  /**
   * The function this term represents.
   * @returns {RollFunction}
   */
  get function(): RollFunction
  /** @inheritdoc */
  _evaluate(options?: object): RollTerm | Promise<RollTerm>
  /**
   * Evaluate this function when it contains any non-deterministic sub-terms.
   * @param {object} [options]
   * @returns {Promise<RollTerm>}
   * @protected
   */
  protected _evaluateAsync(options?: object): Promise<RollTerm>
  /**
   * Evaluate this function when it contains only deterministic sub-terms.
   * @param {object} [options]
   * @returns {RollTerm}
   * @protected
   */
  protected _evaluateSync(options?: object): RollTerm
  #private
}
import type { RollFunction } from "@client/config.mjs"
import Roll from "../roll.mjs"
import DiceTerm from "./dice.mjs"
import RollTerm from "./term.mjs"
