/** @module dice */

import { RollTermData } from "./terms/RollTerm.js"
import { RollParseNode } from "./types.js"

export const RollGrammar: {
  parse(formula: string): RollParseNode | RollTermData
}

export { default as MersenneTwister } from "./MersenneTwister.js"
export * from "./Roll.js"
export { default as Roll } from "./Roll.js"
export { default as RollParser } from "./RollParser.js"
export * as terms from "./terms/_module.js"

export * from "./types.js"
