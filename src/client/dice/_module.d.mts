export * from "./_types.mjs"
export { default as RollParser } from "./parser.mjs"
export { default as Roll } from "./roll.mjs"
export * as terms from "./terms/_module.mjs"
export { default as MersenneTwister } from "./twister.mjs"
/** @type {{parse(formula: string): RollParseNode|RollTermData}} */
export const RollGrammar: {
  parse(formula: string): RollParseNode | RollTermData
}
import type { RollParseNode } from "./_types.mjs"
import type { RollTermData } from "./terms/_types.mjs"
