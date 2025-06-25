import { NumberFieldOptions } from "../_types.js"
import NumberField from "./NumberField.js"

/**
 * A special `NumberField` represents a number between 0 (inclusive) and 1 (exclusive).
 * Its values are normalized (modulo 1) to the range [0, 1) instead of being clamped.
 */
export default class HueField<
  TRequired extends boolean = true,
  TNullable extends boolean = false,
  THasInitial extends boolean = true,
> extends NumberField<number, number, TRequired, TNullable, THasInitial> {
  protected static get _defaults(): NumberFieldOptions<number, boolean, boolean, boolean>
}
