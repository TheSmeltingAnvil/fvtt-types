import { CleanFieldOptions, StringFieldOptions } from "../_types.js"
import StringField from "./StringField.js"
import { MaybeSchemaProp } from "./util.js"

/** A special [StringField]{@link StringField} which contains serialized JSON data. */
export default class JSONField<
  TModelProp extends NonNullable<JSONValue> = object,
  TRequired extends boolean = false,
  TNullable extends boolean = false,
  THasInitial extends boolean = false,
> extends StringField<string, TModelProp, TRequired, TNullable, THasInitial> {
  protected static override get _defaults(): StringFieldOptions<string, boolean, boolean, boolean>

  override clean(
    value: unknown,
    options?: CleanFieldOptions,
  ): MaybeSchemaProp<string, TRequired, TNullable, THasInitial>

  protected override _validateType(value: unknown): boolean

  override initialize(value: string): MaybeSchemaProp<TModelProp, TRequired, TNullable, THasInitial>

  toObject(value: TModelProp): MaybeSchemaProp<string, TRequired, TNullable, THasInitial>
}
