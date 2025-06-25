import { NumberFieldOptions } from "../_types.js"
import NumberField from "./NumberField.js"

/** A subclass of `NumberField` which is used for storing integer sort keys. */
export default class IntegerSortField<
  TRequired extends boolean = true,
  TNullable extends boolean = false,
  THasInitial extends boolean = true,
> extends NumberField<number, number, TRequired, TNullable, THasInitial> {
  protected static override get _defaults(): NumberFieldOptions<number, boolean, boolean, boolean>
}
