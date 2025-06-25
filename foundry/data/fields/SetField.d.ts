import { DataFieldValidationOptions } from "../_types.js"
import DataModelValidationFailure from "../validation/DataModelValidationFailure.js"
import ArrayField from "./ArrayField.js"
import DataField from "./DataField.js"
import { MaybeSchemaProp, ModelPropFromDataField, SourceFromDataField } from "./util.js"

/**
 * A subclass of `ArrayField` which supports a set of contained elements.
 * Elements in this set are treated as fungible and may be represented in any order or discarded if invalid.
 */
export default class SetField<
  TElementField extends DataField,
  TSourceProp extends SourceFromDataField<TElementField>[] = SourceFromDataField<TElementField>[],
  TModelProp extends Set<ModelPropFromDataField<TElementField>> = Set<ModelPropFromDataField<TElementField>>,
  TRequired extends boolean = false,
  TNullable extends boolean = false,
  THasInitial extends boolean = true,
> extends ArrayField<TElementField, TSourceProp, TModelProp, TRequired, TNullable, THasInitial> {
  protected override _validateElements(
    value: unknown[],
    options?: DataFieldValidationOptions,
  ): DataModelValidationFailure | void

  override initialize(
    value: TSourceProp,
    model: ConstructorOf<foundry.abstract.DataModel>,
  ): MaybeSchemaProp<TModelProp, TRequired, TNullable, THasInitial>

  override toObject(value: TModelProp): TSourceProp
}
