/**
 * @import {RollTermData} from "./_types.mjs";
 * @import {RollParseNode} from "../_types.mjs";
 * @import RollResolver from "../../applications/dice/roll-resolver.mjs";
 */
/**
 * An abstract class which represents a single token that can be used as part of a Roll formula.
 * Every portion of a Roll formula is parsed into a subclass of RollTerm in order for the Roll to be fully evaluated.
 */
export default class RollTerm {
  /**
   * A regular expression pattern which identifies optional term-level flavor text
   * @type {string}
   */
  static FLAVOR_REGEXP_STRING: string
  /**
   * A regular expression which identifies term-level flavor text
   * @type {RegExp}
   */
  static FLAVOR_REGEXP: RegExp
  /**
   * A regular expression used to match a term of this type
   * @type {RegExp}
   */
  static REGEXP: RegExp
  /**
   * An array of additional attributes which should be retained when the term is serialized
   * @type {string[]}
   */
  static SERIALIZE_ATTRIBUTES: string[]
  /**
   * Determine if evaluating a given RollTerm with certain evaluation options can be done so deterministically.
   * @param {RollTerm} term               The term.
   * @param {object} [options]            Options for evaluating the term.
   * @param {boolean} [options.maximize]  Force the result to be maximized.
   * @param {boolean} [options.minimize]  Force the result to be minimized.
   */
  static isDeterministic(
    term: RollTerm,
    {
      maximize,
      minimize,
    }?: {
      maximize?: boolean | undefined
      minimize?: boolean | undefined
    },
  ): boolean
  /**
   * Construct a RollTerm from a provided data object
   * @param {RollTermData} data Provided data from an un-serialized term
   * @returns {RollTerm}        The constructed RollTerm
   */
  static fromData(data: RollTermData): RollTerm
  /**
   * Construct a RollTerm from parser information.
   * @param {RollParseNode} node  The node.
   * @returns {RollTerm}
   */
  static fromParseNode(node: RollParseNode): RollTerm
  /**
   * Define term-specific logic for how a de-serialized data object is restored as a functional RollTerm
   * @param {RollTermData} data The de-serialized term data
   * @returns {RollTerm}        The re-constructed RollTerm object
   * @protected
   */
  protected static _fromData(data: RollTermData): RollTerm
  /**
   * Reconstruct a RollTerm instance from a provided JSON string
   * @param {string} json   A serialized JSON representation of a DiceTerm
   * @returns {RollTerm}    A reconstructed RollTerm from the provided JSON
   */
  static fromJSON(json: string): RollTerm
  /**
   * @param {object} [termData]
   * @param {object} [termData.options] An object of additional options which describes and modifies the term.
   */
  constructor({ options }?: { options?: object | undefined })
  /**
   * An object of additional options which describes and modifies the term.
   * @type {object}
   */
  options: object
  /**
   * An internal flag for whether the term has been evaluated
   * @type {boolean}
   * @internal
   */
  _evaluated: boolean
  /**
   * A reference to the Roll at the root of the evaluation tree.
   * @type {Roll}
   * @internal
   */
  _root: Roll
  /**
   * Is this term intermediate, and should be evaluated first as part of the simplification process?
   * @type {boolean}
   */
  isIntermediate: boolean
  /**
   * A string representation of the formula expression for this RollTerm, prior to evaluation.
   * @type {string}
   */
  get expression(): string
  /**
   * A string representation of the formula, including optional flavor text.
   * @type {string}
   */
  get formula(): string
  /**
   * A string or numeric representation of the final output for this term, after evaluation.
   * @type {number|string|void}
   */
  get total(): number | string | void
  /**
   * Optional flavor text which modifies and describes this term.
   * @type {string}
   */
  get flavor(): string
  /**
   * Whether this term is entirely deterministic or contains some randomness.
   * @type {boolean}
   */
  get isDeterministic(): boolean
  /**
   * A reference to the RollResolver app being used to externally resolve this term.
   * @type {RollResolver}
   */
  get resolver(): RollResolver
  /**
   * Evaluate the term, processing its inputs and finalizing its total.
   * @param {object} [options={}]                   Options which modify how the RollTerm is evaluated
   * @param {boolean} [options.minimize=false]      Minimize the result, obtaining the smallest possible value.
   * @param {boolean} [options.maximize=false]      Maximize the result, obtaining the largest possible value.
   * @param {boolean} [options.allowStrings=false]  If true, string terms will not throw an error when evaluated.
   * @returns {Promise<RollTerm>|RollTerm}          Returns a Promise if the term is non-deterministic.
   */
  evaluate(options?: {
    minimize?: boolean | undefined
    maximize?: boolean | undefined
    allowStrings?: boolean | undefined
  }): Promise<RollTerm> | RollTerm
  /**
   * Evaluate the term.
   * @param {object} [options={}]           Options which modify how the RollTerm is evaluated, see RollTerm#evaluate
   * @returns {Promise<RollTerm>|RollTerm}  Returns a Promise if the term is non-deterministic.
   * @protected
   */
  protected _evaluate(options?: object): Promise<RollTerm> | RollTerm
  /**
   * Serialize the RollTerm to a JSON string which allows it to be saved in the database or embedded in text.
   * This method should return an object suitable for passing to the JSON.stringify function.
   * @returns {RollTermData}
   */
  toJSON(): RollTermData
}
import type RollResolver from "../../applications/dice/roll-resolver.mjs"
import type { RollParseNode } from "../_types.mjs"
import Roll from "../roll.mjs"
import type { RollTermData } from "./_types.mjs"
