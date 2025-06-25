import { ArrayFieldOptions, CleanFieldOptions, DataFieldContext, DataFieldValidationOptions } from "../_types.js"
import DataModelValidationFailure from "../validation/DataModelValidationFailure.js"
import DataField from "./DataField.js"
import { MaybeSchemaProp, ModelPropFromDataField, SourceFromDataField } from "./util.js"

/** A subclass of `DataField` which deals with array-typed data. */
export default class ArrayField<
    TElementField extends DataField,
    TSourceProp extends Partial<SourceFromDataField<TElementField>>[] = SourceFromDataField<TElementField>[],
    TModelProp extends object = ModelPropFromDataField<TElementField>[],
    TRequired extends boolean = true,
    TNullable extends boolean = false,
    THasInitial extends boolean = true,
  >
  extends DataField<TSourceProp, TModelProp, TRequired, TNullable, THasInitial>
  implements Omit<ArrayFieldOptions<TSourceProp, TRequired, TNullable, THasInitial>, "validate">
{
  /**
   * @param element A DataField instance which defines the type of element contained in the Array.
   * @param options Options which configure the behavior of the field
   * @param context Additional context which describes the field
   */
  constructor(
    element: TElementField,
    options?: ArrayFieldOptions<TSourceProp, TRequired, TNullable, THasInitial>,
    context?: DataFieldContext,
  )

  /** The data type of each element in this array */
  element: TElementField

  /**
   * Validate the contained element type of the ArrayField
   * @param element The type of Array element
   * @returns The validated element type
   * @throws An error if the element is not a valid type
   */
  protected static _validateElementType(element: unknown): unknown

  override _validateModel(changes: TSourceProp, options?: DataFieldValidationOptions): void

  protected static override get _defaults(): ArrayFieldOptions<unknown[], boolean, boolean, boolean>

  protected override _cast(value: unknown): unknown

  protected _cleanType(value: unknown, options?: CleanFieldOptions): unknown

  protected override _validateType(value: unknown, options?: DataFieldValidationOptions): void

  /**
   * Validate every element of the ArrayField
   * @param value The array to validate
   * @param options Validation options
   * @returns An array of element-specific errors
   */
  protected _validateElements(value: unknown[], options?: DataFieldValidationOptions): DataModelValidationFailure | void

  override initialize(
    value: JSONValue,
    model: ConstructorOf<foundry.abstract.DataModel>,
    options: ArrayFieldOptions<TSourceProp, TRequired, TNullable, THasInitial>,
  ): MaybeSchemaProp<TModelProp, TRequired, TNullable, THasInitial>

  override toObject(value: TModelProp): MaybeSchemaProp<TSourceProp, TRequired, TNullable, THasInitial>

  override apply(
    fn: string | ((field: this, value?: unknown, options?: Record<string, unknown>) => unknown),
    data?: object,
    options?: Record<string, unknown>,
  ): unknown
}

export default interface ArrayField<
  TElementField extends DataField,
  TSourceProp extends Partial<SourceFromDataField<TElementField>>[] = SourceFromDataField<TElementField>[],
  TModelProp extends object = ModelPropFromDataField<TElementField>[],
  TRequired extends boolean = true,
  TNullable extends boolean = false,
  THasInitial extends boolean = true,
> extends DataField<TSourceProp, TModelProp, TRequired, TNullable, THasInitial> {
  clean(value: unknown, options?: CleanFieldOptions): MaybeSchemaProp<TSourceProp, TRequired, TNullable, THasInitial>
}
