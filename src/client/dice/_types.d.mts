export type RollOptions = {
  flavor?: string | null
  [key: string]: unknown
}
export type DiceTermResult = {
  /**
   * The numeric result
   */
  result: number
  /**
   * Is this result active, contributing to the total?
   */
  active?: boolean | undefined
  /**
   * A value that the result counts as, otherwise the result is not used directly as
   */
  count?: number | undefined
  /**
   * Does this result denote a success?
   */
  success?: boolean | undefined
  /**
   * Does this result denote a failure?
   */
  failure?: boolean | undefined
  /**
   * Was this result discarded?
   */
  discarded?: boolean | undefined
  /**
   * Was this result rerolled?
   */
  rerolled?: boolean | undefined
  /**
   * Was this result exploded?
   */
  exploded?: boolean | undefined
}
export type RollParseNode = {
  /**
   * The class name for this node.
   */
  class: string
  /**
   * The original matched text for this node.
   */
  formula: string
}
export type RollParseTreeNode = RollParseNode
export type FlavorRollParseNode = RollParseNode
export type ModifiersRollParseNode = FlavorRollParseNode
export type NumericRollParseNode = FlavorRollParseNode
export type FunctionRollParseNode = FlavorRollParseNode
export type PoolRollParseNode = ModifiersRollParseNode
export type ParentheticalRollParseNode = FlavorRollParseNode
export type StringParseNode = FlavorRollParseNode
export type DiceRollParseNode = ModifiersRollParseNode
export type RollParseArg = null | number | string | RollParseNode | RollParseArg[]
