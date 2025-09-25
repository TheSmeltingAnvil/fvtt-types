/**
 * A type of DiceTerm used to represent a three-sided Fate/Fudge die.
 * Mathematically behaves like 1d3-2
 */
export default class FateDie extends DiceTerm {
  /** @inheritdoc */
  static MODIFIERS: {
    r: (modifier: string, { recursive }?: { recursive: boolean }) => Promise<false | void>
    rr: (modifier: string) => Promise<false | void>
    k: (modifier: string) => false | undefined
    kh: (modifier: string) => false | undefined
    kl: (modifier: string) => false | undefined
    d: (modifier: string) => false | undefined
    dh: (modifier: string) => false | undefined
    dl: (modifier: string) => false | undefined
  }
  constructor(termData: any)
  /** @inheritdoc */
  roll({
    minimize,
    maximize,
    ...options
  }?: {
    minimize?: boolean | undefined
    maximize?: boolean | undefined
  }): Promise<DiceTermResult>
  /** @override */
  override mapRandomFace(randomUniform: any): number
  /** @inheritdoc */
  getResultLabel(result: any): any
}
import type { DiceTermResult } from "../_types.d.mts"
import DiceTerm from "./dice.mjs"
