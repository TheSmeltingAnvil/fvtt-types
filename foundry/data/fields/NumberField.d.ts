import { CleanFieldOptions, DataFieldContext, NumberFieldOptions } from "../_types.js"
import DataField from "./DataField.js"
import { MaybeSchemaProp } from "./util.js"

/** A subclass of [DataField]{@link DataField} which deals with number-typed data. */
export default class NumberField<
    TSourceProp extends number = number,
    TModelProp extends NonNullable<JSONValue> = TSourceProp,
    TRequired extends boolean = false,
    TNullable extends boolean = true,
    THasInitial extends boolean = TNullable,
  >
  extends DataField<TSourceProp, TModelProp, TRequired, TNullable, THasInitial>
  implements Omit<NumberFieldOptions<TSourceProp, TRequired, TNullable, THasInitial>, "validate">
{
  /**
   * @param options Options which configure the behavior of the field
   * @param context Additional context which describes the field
   * */
  constructor(options?: NumberFieldOptions<TSourceProp, TRequired, TNullable, THasInitial>, context?: DataFieldContext)

  protected static override get _defaults(): NumberFieldOptions<number, boolean, boolean, boolean>

  protected override _cast(value: unknown): unknown

  protected override _cleanType(
    value: unknown,
    options?: CleanFieldOptions,
  ): MaybeSchemaProp<TSourceProp, TRequired, TNullable, THasInitial>

  protected override _validateType(value: unknown): void
}
