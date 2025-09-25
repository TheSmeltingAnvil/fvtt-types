/**
 * @import {
 *   RollParseNode,
 *   RollParseTreeNode,
 *   NumericRollParseNode,
 *   FunctionRollParseNode,
 *   PoolRollParseNode,
 *   ParentheticalRollParseNode,
 *   DiceRollParseNode,
 *   RollParseArg
 * } from "./_types.mjs";
 */
/**
 * A class for transforming events from the Peggy grammar lexer into various formats.
 */
export default class RollParser {
  /**
   * Flatten a tree structure (either a parse tree or AST) into an array with operators in infix notation.
   * @param {RollParseNode} root  The root of the tree.
   * @returns {RollParseNode[]}
   */
  static flattenTree(root: RollParseNode): RollParseNode[]
  /**
   * Use the Shunting Yard algorithm to convert a parse tree or list of terms into an AST with correct operator
   * precedence.
   * See https://en.wikipedia.org/wiki/Shunting_yard_algorithm for a description of the algorithm in detail.
   * @param {RollParseNode|RollTerm[]} root  The root of the parse tree or a list of terms.
   * @returns {RollParseNode}                The root of the AST.
   */
  static toAST(root: RollParseNode | RollTerm[]): RollParseNode
  /**
   * Determine if a given node is an operator term.
   * @param {RollParseNode|RollTerm} node
   */
  static isOperatorTerm(node: RollParseNode | RollTerm): boolean
  /**
   * Format a list argument.
   * @param {RollParseArg[]} list  The list to format.
   * @returns {string}
   */
  static formatList(list: RollParseArg[]): string
  /**
   * Format a parser argument.
   * @param {RollParseArg} arg  The argument.
   * @returns {string}
   */
  static formatArg(arg: RollParseArg): string
  /**
   * Format arguments for debugging.
   * @param {string} method         The method name.
   * @param {...RollParseArg} args  The arguments.
   * @returns {string}
   */
  static formatDebug(method: string, ...args: RollParseArg[]): string
  /**
   * @param {string} formula  The full formula.
   */
  constructor(formula: string)
  /**
   * The full formula.
   * @type {string}
   */
  formula: string
  /**
   * Handle a base roll expression.
   * @param {RollParseNode} head                The first operand.
   * @param {[string[], RollParseNode][]} tail  Zero or more subsequent (operators, operand) tuples.
   * @param {string} [leading]                  A leading operator.
   * @param {string} formula                    The original matched text.
   * @param {Function} error                    The peggy error callback to invoke on a parse error.
   * @returns {RollParseTreeNode}
   * @protected
   */
  protected _onExpression(
    head: RollParseNode,
    tail: [string[], RollParseNode][],
    leading: string | undefined,
    formula: string,
    error: Function,
  ): RollParseTreeNode
  /**
   * Handle a dice term.
   * @param {NumericRollParseNode|ParentheticalRollParseNode|null} number  The number of dice.
   * @param {string|NumericRollParseNode|ParentheticalRollParseNode|null} faces  The number of die faces or a string
   *                                                                             denomination like "c" or "f".
   * @param {string|null} modifiers                                        The matched modifiers string.
   * @param {string|null} flavor                                           Associated flavor text.
   * @param {string} formula                                               The original matched text.
   * @returns {DiceRollParseNode}
   * @protected
   */
  protected _onDiceTerm(
    number: NumericRollParseNode | ParentheticalRollParseNode | null,
    faces: string | NumericRollParseNode | ParentheticalRollParseNode | null,
    modifiers: string | null,
    flavor: string | null,
    formula: string,
  ): DiceRollParseNode
  /**
   * Handle a numeric term.
   * @param {number} number  The number.
   * @param {string} flavor  Associated flavor text.
   * @returns {NumericRollParseNode}
   * @protected
   */
  protected _onNumericTerm(number: number, flavor: string): NumericRollParseNode
  /**
   * Handle a math term.
   * @param {string} fn             The Math function.
   * @param {RollParseNode} head    The first term.
   * @param {RollParseNode[]} tail  Zero or more additional terms.
   * @param {string} flavor         Associated flavor text.
   * @param {string} formula        The original matched text.
   * @returns {FunctionRollParseNode}
   * @protected
   */
  protected _onFunctionTerm(
    fn: string,
    head: RollParseNode,
    tail: RollParseNode[],
    flavor: string,
    formula: string,
  ): FunctionRollParseNode
  /**
   * Handle a pool term.
   * @param {RollParseNode} head     The first term.
   * @param {RollParseNode[]} tail   Zero or more additional terms.
   * @param {string|null} modifiers  The matched modifiers string.
   * @param {string|null} flavor     Associated flavor text.
   * @param {string} formula         The original matched text.
   * @returns {PoolRollParseNode}
   * @protected
   */
  protected _onPoolTerm(
    head: RollParseNode,
    tail: RollParseNode[],
    modifiers: string | null,
    flavor: string | null,
    formula: string,
  ): PoolRollParseNode
  /**
   * Handle a parenthetical.
   * @param {RollParseNode} term  The inner term.
   * @param {string|null} flavor  Associated flavor text.
   * @param {string} formula      The original matched text.
   * @returns {ParentheticalRollParseNode}
   * @protected
   */
  protected _onParenthetical(term: RollParseNode, flavor: string | null, formula: string): ParentheticalRollParseNode
  /**
   * Handle some string that failed to be classified.
   * @param {string} term  The term.
   * @param {string|null} [flavor]  Associated flavor text.
   * @returns {StringParseNode}
   * @protected
   */
  protected _onStringTerm(term: string, flavor?: string | null): StringParseNode
  /**
   * Collapse multiple additive operators into a single one.
   * @param {string[]} operators  A sequence of additive operators.
   * @returns {string}
   * @protected
   */
  protected _collapseOperators(operators: string[]): string
  /**
   * Wrap a term with a leading minus.
   * @param {RollParseNode} term  The term to wrap.
   * @returns {RollParseNode}
   * @protected
   */
  protected _wrapNegativeTerm(term: RollParseNode): RollParseNode
}
import type {
  DiceRollParseNode,
  FunctionRollParseNode,
  NumericRollParseNode,
  ParentheticalRollParseNode,
  PoolRollParseNode,
  RollParseArg,
  RollParseNode,
  RollParseTreeNode,
  StringParseNode,
} from "./_types.mjs"
import type RollTerm from "./terms/term.d.mts"
