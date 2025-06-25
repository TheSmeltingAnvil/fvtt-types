import { DataFieldValidationOptions, ObjectFieldOptions } from "../_types.js"
import DataModelValidationFailure from "../validation/DataModelValidationFailure.js"
import DataField from "./DataField.js"
import { MaybeSchemaProp } from "./util.js"

/** A subclass of `DataField` which deals with object-typed data. */
export default class ObjectField<
    TSourceProp extends object,
    TModelProp extends object = TSourceProp,
    TRequired extends boolean = true,
    TNullable extends boolean = false,
    THasInitial extends boolean = true,
  >
  extends DataField<TSourceProp, TModelProp, TRequired, TNullable, THasInitial>
  implements Omit<ObjectFieldOptions<TSourceProp, TRequired, TNullable, THasInitial>, "initial" | "validate">
{
  protected static override get _defaults(): ObjectFieldOptions<object, boolean, boolean, boolean>

  protected override _cast(value: unknown): unknown

  override initialize(
    value: unknown,
    model?: ConstructorOf<foundry.abstract.DataModel>,
    options?: ObjectFieldOptions<TSourceProp, TRequired, TNullable, THasInitial>,
  ): MaybeSchemaProp<TModelProp, TRequired, TNullable, THasInitial>

  override _updateDiff(
    source: object,
    key: string,
    value: unknown,
    difference: object,
    options: foundry.abstract.types.DataModelUpdateOptions,
  ): void

  override toObject(value: TModelProp): MaybeSchemaProp<TSourceProp, TRequired, TNullable, THasInitial>

  protected override _validateType(
    value: unknown,
    options?: DataFieldValidationOptions,
  ): DataModelValidationFailure | boolean | void
}
