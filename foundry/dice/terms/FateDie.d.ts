import DiceTerm, { DiceTermData } from "./DiceTerm.js"
import { DiceTermResult } from "foundry/dice/_module.js"

/**
 * Define a three-sided Fate/Fudge dice term that can be used as part of a Roll formula
 * Mathematically behaves like 1d3-2
 */
export default class FateDie extends DiceTerm {
  constructor(termData: DiceTermData)

  static override DENOMINATION: "f"

  override roll({ minimize, maximize }?: { minimize?: boolean; maximize?: boolean }): DiceTermResult

  override getResultLabel<T extends DiceTermResult>(
    result: DiceTermResult,
  ): T["result"] extends -1 ? "-" : T extends 0 ? "&nbsp;" : T extends 1 ? "+" : never
}

export default interface FateDie extends DiceTerm {
  faces: 3
}
