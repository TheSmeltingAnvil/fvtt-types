import { CleanFieldOptions, DataFieldContext, DataFieldValidationOptions, ObjectFieldOptions } from "../_types.js"
import DataModelValidationFailure from "../validation/DataModelValidationFailure.js"
import DataField from "./DataField.js"
import ObjectField from "./ObjectField.js"
import { MaybeSchemaProp, ModelPropFromDataField, SourceFromDataField } from "./util.js"

export default class TypedObjectField<
  TField extends DataField,
  TRequired extends boolean = true,
  TNullable extends boolean = false,
  THasInitial extends boolean = true,
> extends ObjectField<
  Record<string, SourceFromDataField<TField>>,
  Record<string, ModelPropFromDataField<TField>>,
  TRequired,
  TNullable,
  THasInitial
> {
  /**
   * @param element The value type of each entry in this object.
   * @param options Options which configure the behavior of the field.
   * @param context Additional context which describes the field
   */
  constructor(
    element: TField,
    options?: ObjectFieldOptions<Record<string, SourceFromDataField<TField>>>,
    context?: DataFieldContext,
  )

  /**
   * The value type of each entry in this object.
   */
  element: TField

  static override recursive: true

  static override get _defaults(): ObjectFieldOptions<Record<string, SourceFromDataField<ObjectField<object>>>>

  protected override _cleanType(data: object, options: CleanFieldOptions): object

  protected override _validateType(data: object, options?: object): DataModelValidationFailure | void

  override _validateModel(
    changes: Record<string, SourceFromDataField<TField>>,
    options?: DataFieldValidationOptions,
  ): void

  override initialize(
    value: unknown,
    model?: ConstructorOf<foundry.abstract.DataModel>,
    options?: ObjectFieldOptions<Record<string, SourceFromDataField<TField>>, TRequired, TNullable, THasInitial>,
  ): MaybeSchemaProp<Record<string, ModelPropFromDataField<TField>>, TRequired, TNullable, THasInitial>

  override _updateDiff(
    source: object,
    key: string,
    value: unknown,
    difference: object,
    options: foundry.abstract.types.DataModelUpdateOptions,
  ): void

  override _updateCommit(source: object, key: string, value: unknown, diff: unknown, options: object): void

  override toObject(
    value: Record<string, ModelPropFromDataField<TField>>,
  ): MaybeSchemaProp<Record<string, SourceFromDataField<TField>>, TRequired, TNullable, THasInitial>

  override apply(
    fn: string | ((field: this, value?: unknown, options?: Record<string, unknown>) => unknown),
    data?: object,
    options?: Record<string, unknown>,
  ): unknown

  override _addTypes(source: object, changes: object, options?: object): void

  override _getField(path: string[]): this | undefined

  /**
   * Migrate this field's candidate source data.
   * @param sourceData Candidate source data of the root model
   * @param fieldData The value of this field within the source data
   */
  migrateSource(sourceData: object, fieldData: unknown): void
}
