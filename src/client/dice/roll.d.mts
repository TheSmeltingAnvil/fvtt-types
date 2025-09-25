/**
 * @import {DiceTerm, RollTerm} from "./terms/_module.mjs";
 * @import {RollOptions, RollParseNode} from "./_types.mjs";
 * @import RollResolver from "../applications/dice/roll-resolver.mjs";
 */
/**
 * An interface and API for constructing and evaluating dice rolls.
 * The basic structure for a dice roll is a string formula and an object of data against which to parse it.
 *
 * @example Attack with advantage
 * ```js
 * // Construct the Roll instance
 * let r = new Roll("2d20kh + @prof + @strMod", {prof: 2, strMod: 4});
 *
 * // The parsed terms of the roll formula
 * console.log(r.terms);    // [Die, OperatorTerm, NumericTerm, OperatorTerm, NumericTerm]
 *
 * // Execute the roll
 * await r.evaluate();
 *
 * // The resulting equation after it was rolled
 * console.log(r.result);   // 16 + 2 + 4
 *
 * // The total resulting from the roll
 * console.log(r.total);    // 22
 * ```
 */
export default class Roll {
  /**
   * Dice Configuration setting name.
   * @readonly
   */
  static readonly DICE_CONFIGURATION_SETTING: "diceConfiguration"
  /**
   * A Proxy environment for safely evaluating a string using only available Math functions
   * @type {Math}
   */
  static MATH_PROXY: Math
  /**
   * The HTML template path used to render a complete Roll object to the chat log
   * @type {string}
   */
  static CHAT_TEMPLATE: string
  /**
   * The HTML template used to render an expanded Roll tooltip to the chat log
   * @type {string}
   */
  static TOOLTIP_TEMPLATE: string
  /**
   * A mapping of Roll instances to currently-active resolvers.
   * @type {Map<Roll, RollResolver>}
   */
  static RESOLVERS: Map<Roll, RollResolver>
  /**
   * A factory method which constructs a Roll instance using the default configured Roll class.
   * @param {string} formula        The formula used to create the Roll instance
   * @param {object} [data={}]      The data object which provides component data for the formula
   * @param {object} [options={}]   Additional options which modify or describe this Roll
   * @returns {Roll}                The constructed Roll instance
   */
  static create(formula: string, data?: object, options?: object): Roll
  /**
   * Get the default configured Roll class.
   * @returns {typeof Roll}
   */
  static get defaultImplementation(): typeof Roll
  /**
   * Retrieve the appropriate resolver implementation based on the user's configuration.
   * @returns {typeof RollResolver}
   */
  static get resolverImplementation(): typeof RollResolver
  /**
   * Transform an array of RollTerm objects into a cleaned string formula representation.
   * @param {RollTerm[]} terms      An array of terms to represent as a formula
   * @returns {string}              The string representation of the formula
   */
  static getFormula(terms: RollTerm[]): string
  /**
   * A sandbox-safe evaluation function to execute user-input code with access to scoped Math methods.
   * @param {string} expression   The input string expression
   * @returns {number}            The numeric evaluated result
   */
  static safeEval(expression: string): number
  /**
   * After parenthetical and arithmetic terms have been resolved, we need to simplify the remaining expression.
   * Any remaining string terms need to be combined with adjacent non-operators in order to construct parsable terms.
   * @param {RollTerm[]} terms      An array of terms which is eligible for simplification
   * @returns {RollTerm[]}          An array of simplified terms
   */
  static simplifyTerms(terms: RollTerm[]): RollTerm[]
  /**
   * Simulate a roll and evaluate the distribution of returned results
   * @param {string} formula      The Roll expression to simulate
   * @param {number} n            The number of simulations
   * @returns {Promise<number[]>} The rolled totals
   */
  static simulate(formula: string, n?: number): Promise<number[]>
  /**
   * Register an externally-fulfilled result with an active RollResolver.
   * @param {string} method        The fulfillment method.
   * @param {string} denomination  The die denomination being fulfilled.
   * @param {number} result        The obtained result.
   * @returns {boolean|void}       Whether the result was consumed. Returns undefined if no resolver was available.
   */
  static registerResult(method: string, denomination: string, result: number): boolean | void
  /**
   * Parse a formula expression using the compiled peggy grammar.
   * @param {string} formula  The original string expression to parse.
   * @param {object} data     A data object used to substitute for attributes in the formula.
   * @returns {RollTerm[]}
   */
  static parse(formula?: string, data?: object): RollTerm[]
  /**
   * Instantiate the nodes in an AST sub-tree into RollTerm instances.
   * @param {RollParseNode} ast  The root of the AST sub-tree.
   * @returns {RollTerm[]}
   */
  static instantiateAST(ast: RollParseNode): RollTerm[]
  /**
   * Replace referenced data attributes in the roll formula with values from the provided data.
   * Data references in the formula use the \@attr syntax and would reference the corresponding attr key.
   *
   * @param {string} formula          The original formula within which to replace
   * @param {object} data             The data object which provides replacements
   * @param {object} [options]        Options which modify formula replacement
   * @param {string} [options.missing]      The value that should be assigned to any unmatched keys.
   *                                        If null, the unmatched key is left as-is.
   * @param {boolean} [options.warn=false]  Display a warning notification when encountering an un-matched key.
   */
  static replaceFormulaData(
    formula: string,
    data: object,
    {
      missing,
      warn,
    }?: {
      missing?: string | undefined
      warn?: boolean | undefined
    },
  ): string
  /**
   * Validate that a provided roll formula can represent a valid
   * @param {string} formula    A candidate formula to validate
   * @returns {boolean}         Is the provided input a valid dice formula?
   */
  static validate(formula: string): boolean
  /**
   * Determine which of the given terms require external fulfillment.
   * @param {RollTerm[]} terms  The terms.
   * @returns {DiceTerm[]}
   */
  static identifyFulfillableTerms(terms: RollTerm[]): DiceTerm[]
  /**
   * Classify a remaining string term into a recognized RollTerm class
   * @param {string} term         A remaining un-classified string
   * @param {object} [options={}] Options which customize classification
   * @param {boolean} [options.intermediate=true]  Allow intermediate terms
   * @param {RollTerm|string} [options.prior]       The prior classified term
   * @param {RollTerm|string} [options.next]        The next term to classify
   * @returns {RollTerm}          A classified RollTerm instance
   * @internal
   */
  static _classifyStringTerm(
    term: string,
    {
      intermediate,
      prior,
      next,
    }?: {
      intermediate?: boolean | undefined
      prior?: string | RollTerm | undefined
      next?: string | RollTerm | undefined
    },
  ): RollTerm
  /**
   * Expand an inline roll element to display its contained dice result as a tooltip.
   * @param {HTMLAnchorElement} a     The inline-roll button
   * @returns {Promise<void>}
   */
  static expandInlineResult(a: HTMLAnchorElement): Promise<void>
  /**
   * Collapse an expanded inline roll to conceal its tooltip.
   * @param {HTMLAnchorElement} a     The inline-roll button
   */
  static collapseInlineResult(a: HTMLAnchorElement): void
  /**
   * Recreate a Roll instance using a provided data object
   * @param {object} data   Unpacked data representing the Roll
   * @returns {Roll}         A reconstructed Roll instance
   */
  static fromData(data: object): Roll
  /**
   * Recreate a Roll instance using a provided JSON string
   * @param {string} json   Serialized JSON data representing the Roll
   * @returns {Roll}        A reconstructed Roll instance
   */
  static fromJSON(json: string): Roll
  /**
   * Manually construct a Roll object by providing an explicit set of input terms
   * @param {RollTerm[]} terms      The array of terms to use as the basis for the Roll
   * @param {object} [options={}]   Additional options passed to the Roll constructor
   * @returns {Roll}                The constructed Roll instance
   *
   * @example Construct a Roll instance from an array of component terms
   * ```js
   * const t1 = new Die({number: 4, faces: 8};
   * const plus = new OperatorTerm({operator: "+"});
   * const t2 = new NumericTerm({number: 8});
   * const roll = Roll.fromTerms([t1, plus, t2]);
   * roll.formula; // 4d8 + 8
   * ```
   */
  static fromTerms(terms: RollTerm[], options?: object): Roll
  /**
   * @param {string} formula    The string formula to parse
   * @param {object} data       The data object against which to parse attributes within the formula
   * @param {RollOptions} [options]  Options modifying or describing the Roll
   */
  constructor(formula?: string, data?: object, options?: RollOptions)
  /**
   * The original provided data object which substitutes into attributes of the roll formula.
   * @type {object}
   */
  data: object
  /**
   * Options modifying or describing the Roll
   * @type {RollOptions}
   */
  options: RollOptions
  /**
   * The identified terms of the Roll
   * @type {RollTerm[]}
   */
  terms: RollTerm[]
  /**
   * Store the original cleaned formula for the Roll, prior to any internal evaluation or simplification
   * @type {string}
   * @internal
   */
  _formula: string
  /**
   * An array of inner DiceTerms that were evaluated as part of the Roll evaluation
   * @type {DiceTerm[]}
   * @internal
   */
  _dice: DiceTerm[]
  /**
   * Track whether this Roll instance has been evaluated or not. Once evaluated the Roll is immutable.
   * @type {boolean}
   * @internal
   */
  _evaluated: boolean
  /**
   * Cache the numeric total generated through evaluation of the Roll.
   * @type {number}
   * @internal
   */
  _total: number
  /**
   * A reference to the Roll at the root of the evaluation tree.
   * @type {Roll}
   * @internal
   */
  _root: Roll
  /**
   * A reference to the RollResolver app being used to externally resolve this Roll.
   * @type {RollResolver}
   * @internal
   */
  _resolver: RollResolver
  /**
   * Prepare the data structure used for the Roll.
   * This is factored out to allow for custom Roll classes to do special data preparation using provided input.
   * @param {object} data   Provided roll data
   * @returns {object}      The prepared data object
   * @protected
   */
  protected _prepareData(data: object): object
  /**
   * Return an Array of the individual DiceTerm instances contained within this Roll.
   * @type {DiceTerm[]}
   */
  get dice(): DiceTerm[]
  /**
   * Return a standardized representation for the displayed formula associated with this Roll.
   * @type {string}
   */
  get formula(): string
  /**
   * The resulting arithmetic expression after rolls have been evaluated
   * @type {string}
   */
  get result(): string
  /**
   * Return the total result of the Roll expression if it has been evaluated.
   * @type {number}
   */
  get total(): number
  /**
   * Return the arbitrary product of evaluating this Roll.
   * @returns {any}
   */
  get product(): any
  /**
   * Whether this Roll contains entirely deterministic terms or whether there is some randomness.
   * @type {boolean}
   */
  get isDeterministic(): boolean
  /**
   * Alter the Roll expression by adding or multiplying the number of dice which are rolled
   * @param {number} multiply   A factor to multiply. Dice are multiplied before any additions.
   * @param {number} add        A number of dice to add. Dice are added after multiplication.
   * @param {boolean} [multiplyNumeric]  Apply multiplication factor to numeric scalar terms
   * @returns {Roll}            The altered Roll expression
   */
  alter(multiply: number, add: number, { multiplyNumeric }?: { multiplyNumeric: boolean }): Roll
  /**
   * Clone the Roll instance, returning a new Roll instance that has not yet been evaluated.
   * @returns {Roll}
   */
  clone(): Roll
  /**
   * Execute the Roll asynchronously, replacing dice and evaluating the total result
   * @param {object} [options={}]                      Options which inform how the Roll is evaluated
   * @param {boolean} [options.minimize=false]         Minimize the result, obtaining the smallest possible value.
   * @param {boolean} [options.maximize=false]         Maximize the result, obtaining the largest possible value.
   * @param {boolean} [options.allowStrings=false]     If true, string terms will not cause an error to be thrown during
   *                                                   evaluation.
   * @param {boolean} [options.allowInteractive=true]  If false, force the use of non-interactive rolls and do not
   *                                                   prompt the user to make manual rolls.
   * @returns {Promise<Roll>}                          The evaluated Roll instance
   *
   * @example Evaluate a Roll expression
   * ```js
   * let r = new Roll("2d6 + 4 + 1d4");
   * await r.evaluate();
   * console.log(r.result); // 5 + 4 + 2
   * console.log(r.total);  // 11
   * ```
   */
  evaluate({
    minimize,
    maximize,
    allowStrings,
    allowInteractive,
    ...options
  }?: {
    minimize?: boolean | undefined
    maximize?: boolean | undefined
    allowStrings?: boolean | undefined
    allowInteractive?: boolean | undefined
  }): Promise<Roll>
  /**
   * Execute the Roll synchronously, replacing dice and evaluating the total result.
   * @param {object} [options={}]
   * @param {boolean} [options.minimize=false]      Minimize the result, obtaining the smallest possible value.
   * @param {boolean} [options.maximize=false]      Maximize the result, obtaining the largest possible value.
   * @param {boolean} [options.strict=true]         Throw an Error if the Roll contains non-deterministic terms that
   *                                                cannot be evaluated synchronously. If this is set to false,
   *                                                non-deterministic terms will be ignored.
   * @param {boolean} [options.allowStrings=false]  If true, string terms will not cause an error to be thrown during
   *                                                evaluation.
   * @returns {Roll}                                The evaluated Roll instance.
   */
  evaluateSync({
    minimize,
    maximize,
    allowStrings,
    strict,
  }?: {
    minimize?: boolean | undefined
    maximize?: boolean | undefined
    strict?: boolean | undefined
    allowStrings?: boolean | undefined
  }): Roll
  /**
   * Evaluate the roll asynchronously.
   * @param {object} [options]                    Options which inform how evaluation is performed
   * @param {boolean} [options.minimize]          Force the result to be minimized
   * @param {boolean} [options.maximize]          Force the result to be maximized
   * @param {boolean} [options.allowStrings]      If true, string terms will not cause an error to be thrown during
   *                                              evaluation.
   * @param {boolean} [options.allowInteractive]  If false, force the use of digital rolls and do not prompt the user to
   *                                              make manual rolls.
   * @returns {Promise<Roll>}
   * @protected
   */
  protected _evaluate(options?: {
    minimize?: boolean | undefined
    maximize?: boolean | undefined
    allowStrings?: boolean | undefined
    allowInteractive?: boolean | undefined
  }): Promise<Roll>
  /**
   * Evaluate an AST asynchronously.
   * @param {RollParseNode|RollTerm} node     The root node or term.
   * @param {object} [options]                Options which inform how evaluation is performed
   * @param {boolean} [options.minimize]      Force the result to be minimized
   * @param {boolean} [options.maximize]      Force the result to be maximized
   * @param {boolean} [options.allowStrings]  If true, string terms will not cause an error to be thrown during
   *                                          evaluation.
   * @returns {Promise<string|number>}
   * @protected
   */
  protected _evaluateASTAsync(
    node: RollParseNode | RollTerm,
    options?: {
      minimize?: boolean | undefined
      maximize?: boolean | undefined
      allowStrings?: boolean | undefined
    },
  ): Promise<string | number>
  /**
   * Evaluate the roll synchronously.
   * @param {object} [options]                Options which inform how evaluation is performed
   * @param {boolean} [options.minimize]      Force the result to be minimized
   * @param {boolean} [options.maximize]      Force the result to be maximized
   * @param {boolean} [options.strict]        Throw an error if encountering a term that cannot be synchronously
   *                                          evaluated.
   * @param {boolean} [options.allowStrings]  If true, string terms will not cause an error to be thrown during
   *                                          evaluation.
   * @returns {Roll}
   * @protected
   */
  protected _evaluateSync(options?: {
    minimize?: boolean | undefined
    maximize?: boolean | undefined
    strict?: boolean | undefined
    allowStrings?: boolean | undefined
  }): Roll
  /**
   * Evaluate an AST synchronously.
   * @param {RollParseNode|RollTerm} node     The root node or term.
   * @param {object} [options]                Options which inform how evaluation is performed
   * @param {boolean} [options.minimize]      Force the result to be minimized
   * @param {boolean} [options.maximize]      Force the result to be maximized
   * @param {boolean} [options.strict]        Throw an error if encountering a term that cannot be synchronously
   *                                          evaluated.
   * @param {boolean} [options.allowStrings]  If true, string terms will not cause an error to be thrown during
   *                                          evaluation.
   * @returns {string|number}
   * @protected
   */
  protected _evaluateASTSync(
    node: RollParseNode | RollTerm,
    options?: {
      minimize?: boolean | undefined
      maximize?: boolean | undefined
      strict?: boolean | undefined
      allowStrings?: boolean | undefined
    },
  ): string | number
  /**
   * Safely evaluate the final total result for the Roll using its component terms.
   * @returns {number}    The evaluated total
   * @protected
   */
  protected _evaluateTotal(): number
  /**
   * Alias for evaluate.
   * @see {Roll#evaluate}
   * @param {object} options    Options passed to Roll#evaluate
   * @returns {Promise<Roll>}
   */
  roll(options?: object): Promise<Roll>
  /**
   * Create a new Roll object using the original provided formula and data.
   * Each roll is immutable, so this method returns a new Roll instance using the same data.
   * @param {object} [options={}]  Evaluation options passed to Roll#evaluate
   * @returns {Promise<Roll>}      A new Roll object, rolled using the same formula and data
   */
  reroll(options?: object): Promise<Roll>
  /**
   * Recompile the formula string that represents this Roll instance from its component terms.
   * @returns {string}                The re-compiled formula
   */
  resetFormula(): string
  /**
   * Propagate flavor text across all terms that do not have any.
   * @param {string} flavor  The flavor text.
   */
  propagateFlavor(flavor: string): void
  /** @override */
  // @ts-expect-error -- IGNORE --
  override toString(): string
  /**
   * Render the tooltip HTML for a Roll instance
   * @returns {Promise<string>}     The rendered HTML tooltip as a string
   */
  getTooltip(): Promise<string>
  /**
   * Render a Roll instance to HTML
   * @param {object} [options={}]               Options which affect how the Roll is rendered
   * @param {string} [options.flavor]             Flavor text to include
   * @param {string} [options.template]           A custom HTML template path
   * @param {boolean} [options.isPrivate=false]   Is the Roll displayed privately?
   * @returns {Promise<string>}                 The rendered HTML template as a string
   */
  render({
    flavor,
    template,
    isPrivate,
    ...options
  }?: {
    flavor?: string | undefined
    template?: string | undefined
    isPrivate?: boolean | undefined
  }): Promise<string>
  /**
   * Prepare context data used to render the CHAT_TEMPLATE for this roll.
   * @param {object} options
   * @param {string} [options.flavor]
   * @param {boolean} [options.isPrivate=false]
   * @returns {Promise<{object}>}
   * @protected
   */
  protected _prepareChatRenderContext({
    flavor,
    isPrivate,
    ...options
  }?: {
    flavor?: string | undefined
    isPrivate?: boolean | undefined
  }): Promise<{
    object: any
  }>
  /**
   * Transform a Roll instance into a ChatMessage, displaying the roll result.
   * This function can either create the ChatMessage directly, or return the data object that will be used to create.
   *
   * @param {object} messageData          The data object to use when creating the message
   * @param {object} [options]            Additional options which modify the created message.
   * @param {string} [options.rollMode]   The template roll mode to use for the message from CONFIG.Dice.rollModes
   * @param {boolean} [options.create=true]   Whether to automatically create the chat message, or only return the
   *                                          prepared chatData object.
   * @returns {Promise<ChatMessage|object>} A promise which resolves to the created ChatMessage document if create is
   *                                        true, or the Object of prepared chatData otherwise.
   */
  toMessage(
    messageData?: object,
    {
      rollMode,
      create,
    }?: {
      rollMode?: string | undefined
      create?: boolean | undefined
    },
  ): Promise<ChatMessage | object>
  /**
   * Construct an inline roll link for this Roll.
   * @param {object} [options]                  Additional options to configure how the link is constructed.
   * @param {string} [options.label]            A custom label for the total.
   * @param {Record<string, string>} [options.attrs]    Attributes to set on the link.
   * @param {Record<string, string>} [options.dataset]  Custom data attributes to set on the link.
   * @param {string[]} [options.classes]        Additional classes to add to the link. The classes `inline-roll`
   *                                            and `inline-result` are added by default.
   * @param {string} [options.icon]             A font-awesome icon class to use as the icon instead of a d20.
   * @returns {HTMLAnchorElement}
   */
  toAnchor({
    attrs,
    dataset,
    classes,
    label,
    icon,
  }?: {
    label?: string | undefined
    attrs?: Record<string, string> | undefined
    dataset?: Record<string, string> | undefined
    classes?: string[] | undefined
    icon?: string | undefined
  }): HTMLAnchorElement
  /**
   * Represent the data of the Roll as an object suitable for JSON serialization.
   * @returns {object}     Structured data which can be serialized into JSON
   */
  toJSON(): object
}
import ChatMessage from "@client/documents/chat-message.mjs"
import type RollResolver from "../applications/dice/roll-resolver.mjs"
import type { RollOptions, RollParseNode } from "./_types.mjs"
import type { DiceTerm, RollTerm } from "./terms/_module.mjs"
