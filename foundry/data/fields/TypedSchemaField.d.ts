import { CleanFieldOptions, DataFieldContext, DataFieldOptions, DataFieldValidationOptions } from "../_types.js"
import DataModelValidationFailure from "../validation/DataModelValidationFailure.js"
import DataField from "./DataField.js"
import SchemaField from "./SchemaField.js"
import { MaybeSchemaProp, ModelFromTypedSchemaTypes, SourceFromTypedSchemaTypes } from "./util.js"

/** A subclass of [DataField]{@link DataField} which allows to typed schemas. */
export default class TypedSchemaField<
  TTypes extends Record<
    string,
    foundry.abstract.types.DataSchema | SchemaField | ConstructorOf<foundry.abstract.DataModel>
  >,
  TRequired extends boolean = true,
  TNullable extends boolean = false,
  THasInitial extends boolean = false,
> extends DataField<
  SourceFromTypedSchemaTypes<TTypes>,
  ModelFromTypedSchemaTypes<TTypes>,
  TRequired,
  TNullable,
  THasInitial
> {
  /**
   * @param types The different types this field can represent.
   * @param options Options which configure the behavior of the field
   * @param context Additional context which describes the field
   */
  constructor(
    types: TTypes,
    options?: DataFieldOptions<SourceFromTypedSchemaTypes<TTypes>, TRequired, TNullable, THasInitial>,
    context?: DataFieldContext,
  )

  static override get _defaults(): DataFieldOptions<object, boolean, boolean, boolean>

  /** The types of this field. */
  types: TTypes

  override _getField(path: string[]): this

  /* -------------------------------------------- */
  /*  Data Field Methods                          */
  /* -------------------------------------------- */

  protected override _cleanType(value: JSONValue | undefined, options: CleanFieldOptions): JSONValue | undefined

  protected override _cast(value: JSONValue): object

  protected override _validateSpecial(value: JSONValue | undefined): boolean | void

  protected override _validateType(
    value: unknown,
    options?: DataFieldValidationOptions,
  ): boolean | DataModelValidationFailure | void

  override initialize(
    value: JSONValue | undefined,
    model?: ConstructorOf<foundry.abstract.DataModel>,
    options?: object,
  ): MaybeSchemaProp<ModelFromTypedSchemaTypes<TTypes>, TRequired, TNullable, THasInitial>

  override toObject(
    value: ModelFromTypedSchemaTypes<TTypes>,
  ): MaybeSchemaProp<SourceFromTypedSchemaTypes<TTypes>, TRequired, TNullable, THasInitial>

  override apply(
    fn: string | ((field: this, value?: unknown, options?: Record<string, unknown>) => unknown),
    value?: unknown,
    options?: Record<string, unknown>,
  ): unknown

  /**
   * Migrate this field's candidate source data.
   * @param sourceData Candidate source data of the root model
   * @param fieldData The value of this field within the source data
   */
  migrateSource(sourceData: object, fieldData: JSONValue | undefined): void
}
