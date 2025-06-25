import { DataFieldOptions } from "../_types.js"
import DataField from "./DataField.js"

/** A subclass of [DataField]{@link DataField} which deals with boolean-typed data. */
export default class BooleanField<
  TSourceProp extends boolean = boolean,
  TModelProp extends NonNullable<JSONValue> = TSourceProp,
  TRequired extends boolean = true,
  TNullable extends boolean = false,
  THasInitial extends boolean = true,
> extends DataField<TSourceProp, TModelProp, TRequired, TNullable, THasInitial> {
  protected static override get _defaults(): BooleanFieldOptions<boolean, boolean, boolean, boolean>

  protected override _cast(value: unknown): unknown

  protected override _validateType(value: unknown): value is boolean
}

type BooleanFieldOptions<
  TSourceProp extends boolean,
  TRequired extends boolean = true,
  TNullable extends boolean = false,
  THasInitial extends boolean = true,
> = Omit<DataFieldOptions<TSourceProp, TRequired, TNullable, THasInitial>, "choices">
