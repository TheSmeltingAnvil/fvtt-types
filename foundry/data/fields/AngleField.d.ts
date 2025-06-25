import { NumberFieldOptions } from "../_types.js"
import NumberField from "./NumberField.js"

/**
 * A special `NumberField` which represents an angle of rotation in degrees between 0 and 360.
 * @property base Whether the base angle should be treated as 360 or as 0
 */
export default class AngleField<
  TRequired extends boolean = true,
  TNullable extends boolean = false,
  THasInitial extends boolean = true,
> extends NumberField<number, number, TRequired, TNullable, THasInitial> {
  protected static override get _defaults(): AngleFieldOptions<number, boolean, boolean, boolean>

  protected override _cast(value: unknown): number
}

interface AngleFieldOptions<
  TSourceProp extends number,
  TRequired extends boolean,
  TNullable extends boolean,
  THasInitial extends boolean,
> extends NumberFieldOptions<TSourceProp, TRequired, TNullable, THasInitial> {
  min?: number
  max?: number
  step?: number
  integer?: boolean
  base?: 360 | 0
}
