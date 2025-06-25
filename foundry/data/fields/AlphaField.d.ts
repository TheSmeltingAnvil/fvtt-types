import { NumberFieldOptions } from "../_types.js"
import NumberField from "./NumberField.js"

/** A special `NumberField` represents a number between 0 and 1. */
export default class AlphaField<
  TRequired extends boolean = true,
  TNullable extends boolean = false,
  THasInitial extends boolean = true,
> extends NumberField<number, number, TRequired, TNullable, THasInitial> {
  protected static get _defaults(): NumberFieldOptions<number, boolean, boolean, boolean>
}
