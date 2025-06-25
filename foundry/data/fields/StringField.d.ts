import { CleanFieldOptions, DataFieldContext, StringFieldOptions } from "../_types.js"
import DataField from "./DataField.js"
import { MaybeSchemaProp } from "./util.js"

/** A subclass of `DataField` which deals with string-typed data. */
export default class StringField<
    TSourceProp extends string = string,
    TModelProp extends NonNullable<JSONValue> = TSourceProp,
    TRequired extends boolean = false,
    TNullable extends boolean = false,
    THasInitial extends boolean = boolean,
  >
  extends DataField<TSourceProp, TModelProp, TRequired, TNullable, THasInitial>
  implements Omit<StringFieldOptions<TSourceProp, TRequired, TNullable, THasInitial>, "validate">
{
  /**
   * @param option Options which configure the behavior of the field
   * @param context Additional context which describes the field
   * */
  constructor(options?: StringFieldOptions<TSourceProp, TRequired, TNullable, THasInitial>, context?: DataFieldContext)

  protected static override get _defaults(): StringFieldOptions<string, boolean, boolean, boolean>

  override clean(
    value: unknown,
    options: CleanFieldOptions,
  ): MaybeSchemaProp<TSourceProp, TRequired, TNullable, THasInitial>

  protected override _cast(value: unknown): unknown

  protected override _validateSpecial(value: unknown): boolean | void

  protected _validateType(value: unknown): boolean | void
}
