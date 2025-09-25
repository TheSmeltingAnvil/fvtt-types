/**
 * A type of DiceTerm used to represent flipping a two-sided coin.
 */
export default class Coin extends DiceTerm {
  /** @inheritdoc */
  static MODIFIERS: {
    c: string
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
  /** @inheritdoc */
  getResultLabel(result: any): any
  /** @inheritdoc */
  getResultCSS(result: any): (string | null)[]
  /** @override */
  override mapRandomFace(randomUniform: any): number
  /**
   * Call the result of the coin flip, marking any coins that matched the called target as a success
   * 3dcc1      Flip 3 coins and treat "heads" as successes
   * 2dcc0      Flip 2 coins and treat "tails" as successes
   * @param {string} modifier     The matched modifier query
   */
  call(modifier: string): false | undefined
}
import type { DiceTermResult } from "../_types.d.mts"
import DiceTerm from "./dice.mjs"
