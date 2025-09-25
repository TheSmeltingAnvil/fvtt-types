/**
 * @import {DiceTermResult} from "../_types.mjs";
 */
/**
 * An abstract base class for any type of RollTerm which involves randomized input from dice, coins, or other devices.
 */
export default class DiceTerm extends RollTerm {
  /**
   * Define the denomination string used to register this DiceTerm type in CONFIG.Dice.terms
   * @type {string}
   */
  static DENOMINATION: string
  /**
   * Define the named modifiers that can be applied for this particular DiceTerm type.
   * @type {Record<string, string|Function>}
   */
  static MODIFIERS: Record<string, string | Function>
  /**
   * A regular expression pattern which captures the full set of term modifiers
   * Anything until a space, group symbol, or arithmetic operator
   * @type {string}
   */
  static MODIFIERS_REGEXP_STRING: string
  /**
   * A regular expression used to separate individual modifiers
   * @type {RegExp}
   */
  static MODIFIER_REGEXP: RegExp
  /**
   * A helper comparison function.
   * Returns a boolean depending on whether the result compares favorably against the target.
   * @param {number} result         The result being compared
   * @param {string} comparison     The comparison operator in [=,&lt;,&lt;=,>,>=]
   * @param {number} target         The target value
   * @returns {boolean}             Is the comparison true?
   */
  static compareResult(result: number, comparison: string, target: number): boolean
  /**
   * A helper method to modify the results array of a dice term by flagging certain results are kept or dropped.
   * @param {object[]} results      The results array
   * @param {number} number         The number to keep or drop
   * @param {object} [options]
   * @param {boolean} [options.keep]        Keep results?
   * @param {boolean} [options.highest]     Keep the highest?
   * @returns {object[]}            The modified results array
   */
  static _keepOrDrop(
    results: object[],
    number: number,
    {
      keep,
      highest,
    }?: {
      keep?: boolean | undefined
      highest?: boolean | undefined
    },
  ): object[]
  /**
   * A reusable helper function to handle the identification and deduction of failures
   */
  static _applyCount(
    results: any,
    comparison: any,
    target: any,
    {
      flagSuccess,
      flagFailure,
    }?: {
      flagSuccess?: boolean | undefined
      flagFailure?: boolean | undefined
    },
  ): void
  /**
   * A reusable helper function to handle the identification and deduction of failures
   */
  static _applyDeduct(
    results: any,
    comparison: any,
    target: any,
    {
      deductFailure,
      invertFailure,
    }?: {
      deductFailure?: boolean | undefined
      invertFailure?: boolean | undefined
    },
  ): void
  /**
   * Determine whether a string expression matches this type of term
   * @param {string} expression               The expression to parse
   * @param {object} [options={}]             Additional options which customize the match
   * @param {boolean} [options.imputeNumber=true]  Allow the number of dice to be optional, i.e. "d6"
   * @returns {RegExpMatchArray|null}
   */
  static matchTerm(
    expression: string,
    {
      imputeNumber,
    }?: {
      imputeNumber?: boolean | undefined
    },
  ): RegExpMatchArray | null
  /**
   * Construct a term of this type given a matched regular expression array.
   * @param {RegExpMatchArray} match          The matched regular expression array
   * @returns {DiceTerm}                      The constructed term
   */
  static fromMatch(match: RegExpMatchArray): DiceTerm
  /** @override */
  static override fromParseNode(node: any): RollTerm
  /** @inheritDoc */
  static _fromData(data: any): RollTerm
  /**
   * @param {object} termData                  Data used to create the Dice Term, including the following:
   * @param {number|Roll} [termData.number=1]  The number of dice of this term to roll, before modifiers are applied, or
   *                                           a Roll instance that will be evaluated to a number.
   * @param {number|Roll} [termData.faces=6]   The number of faces on each die of this type, or a Roll instance that
   *                                           will be evaluated to a number.
   * @param {string} termData.method           The resolution method used to resolve DiceTerm.
   * @param {string[]} [termData.modifiers]    An array of modifiers applied to the results
   * @param {DiceTermResult[]} [termData.results]      An optional array of pre-cast results for the term
   * @param {object} [termData.options]        Additional options that modify the term
   */
  constructor({
    number,
    faces,
    method,
    modifiers,
    results,
    options,
  }: {
    number?: number | Roll | undefined
    faces?: number | Roll | undefined
    method: string
    modifiers?: string[] | undefined
    results?: DiceTermResult[] | undefined
    options?: object | undefined
  })
  /**
   * The number of dice of this term to roll, before modifiers are applied, or a Roll instance that will be evaluated to
   * a number.
   * @type {number|Roll}
   * @protected
   */
  protected _number: number | Roll
  /**
   * The number of faces on the die, or a Roll instance that will be evaluated to a number.
   * @type {number|Roll}
   * @protected
   */
  protected _faces: number | Roll
  set method(method: string)
  /**
   * The resolution method used to resolve this DiceTerm.
   * @type {string}
   */
  get method(): string
  /**
   * An Array of dice term modifiers which are applied
   * @type {string[]}
   */
  modifiers: string[]
  /**
   * The array of dice term results which have been rolled
   * @type {DiceTermResult[]}
   */
  results: DiceTermResult[]
  /**
   * @param {number|Roll} value
   */
  set number(value: number | Roll)
  /**
   * The number of dice of this term to roll. Returns undefined if the number is a complex term that has not yet been
   * evaluated.
   * @type {number|void}
   */
  get number(): number | void
  /**
   * @param {number|Roll} value
   */
  set faces(value: number | Roll)
  /**
   * The number of faces on the die. Returns undefined if the faces are represented as a complex term that has not yet
   * been evaluated.
   * @type {number|void}
   */
  get faces(): number | void
  /**
   * The denomination of this DiceTerm instance.
   * @type {string}
   */
  get denomination(): string
  /**
   * An array of additional DiceTerm instances involved in resolving this DiceTerm.
   * @type {DiceTerm[]}
   */
  get dice(): DiceTerm[]
  /** @inheritDoc */
  get total(): number | undefined
  /**
   * Return an array of rolled values which are still active within this term
   * @type {number[]}
   */
  get values(): number[]
  /**
   * Alter the DiceTerm by adding or multiplying the number of dice which are rolled
   * @param {number} multiply   A factor to multiply. Dice are multiplied before any additions.
   * @param {number} add        A number of dice to add. Dice are added after multiplication.
   * @returns {DiceTerm}        The altered term
   */
  alter(multiply: number, add: number): DiceTerm
  /** @inheritDoc */
  _evaluate(options?: object): DiceTerm | Promise<DiceTerm>
  /**
   * Evaluate this dice term asynchronously.
   * @param {object} [options]  Options forwarded to inner Roll evaluation.
   * @returns {Promise<DiceTerm>}
   * @protected
   */
  protected _evaluateAsync(options?: object): Promise<DiceTerm>
  /**
   * Evaluate deterministic values of this term synchronously.
   * @param {object} [options]
   * @param {boolean} [options.maximize]  Force the result to be maximized.
   * @param {boolean} [options.minimize]  Force the result to be minimized.
   * @param {boolean} [options.strict]    Throw an error if attempting to evaluate a die term in a way that cannot be
   *                                      done synchronously.
   * @returns {DiceTerm}
   * @protected
   */
  protected _evaluateSync(options?: {
    maximize?: boolean | undefined
    minimize?: boolean | undefined
    strict?: boolean | undefined
  }): DiceTerm
  /**
   * Roll the DiceTerm by mapping a random uniform draw against the faces of the dice term.
   * @param {object} [options={}]                 Options which modify how a random result is produced
   * @param {boolean} [options.minimize=false]    Minimize the result, obtaining the smallest possible value.
   * @param {boolean} [options.maximize=false]    Maximize the result, obtaining the largest possible value.
   * @returns {Promise<DiceTermResult>}           The produced result
   */
  roll({
    minimize,
    maximize,
    ...options
  }?: {
    minimize?: boolean | undefined
    maximize?: boolean | undefined
  }): Promise<DiceTermResult>
  /**
   * Generate a roll result value for this DiceTerm based on its fulfillment method.
   * @param {object} [options]        Options forwarded to the fulfillment method handler.
   * @returns {Promise<number|void>}  Returns a Promise that resolves to the fulfilled number, or undefined if it could
   *                                  not be fulfilled.
   * @protected
   */
  protected _roll(options?: object): Promise<number | void>
  /**
   * Maps a randomly-generated value in the interval [0, 1) to a face value on the die.
   * @param {number} randomUniform  A value to map. Must be in the interval [0, 1).
   * @returns {number}              The face value.
   */
  mapRandomFace(randomUniform: number): number
  /**
   * Generate a random face value for this die using the configured PRNG.
   * @returns {number}
   */
  randomFace(): number
  /**
   * Return a string used as the label for each rolled result
   * @param {DiceTermResult} result     The rolled result
   * @returns {string}                   The result label
   */
  getResultLabel(result: DiceTermResult): string
  /**
   * Get the CSS classes that should be used to display each rolled result
   * @param {DiceTermResult} result The rolled result
   * @returns {(string|null)[]}     The desired classes
   */
  getResultCSS(result: DiceTermResult): (string | null)[]
  /**
   * Render the tooltip HTML for a Roll instance
   * @returns {object}      The data object used to render the default tooltip template for this DiceTerm
   */
  getTooltipData(): object
  /**
   * Sequentially evaluate each dice roll modifier by passing the term to its evaluation function
   * Augment or modify the results array.
   * @internal
   */
  _evaluateModifiers(): Promise<void>
  /**
   * Asynchronously evaluate a single modifier command, recording it in the array of evaluated modifiers
   * @param {string} command        The parsed modifier command
   * @param {string} modifier       The full modifier request
   * @internal
   */
  _evaluateModifier(command: string, modifier: string): Promise<void>
  #private
}
import type { DiceTermResult } from "../_types.mjs"
import Roll from "../roll.mjs"
import RollTerm from "./term.mjs"
