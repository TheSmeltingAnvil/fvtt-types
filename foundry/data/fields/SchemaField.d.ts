import * as abstract from "../../abstract/_module.js"
import { CleanFieldOptions, DataFieldContext, DataFieldOptions, DataFieldValidationOptions } from "../_types.js"
import DataModelValidationFailure from "../validation/DataModelValidationFailure.js"
import { DataField } from "./_module.js"
import { MaybeSchemaProp, ModelPropsFromSchema, SourceFromSchema } from "./util.js"

/** A special class of {@link DataField} which defines a data schema. */
export default class SchemaField<
  TDataSchema extends abstract.types.DataSchema = abstract.types.DataSchema,
  TSourceProp extends SourceFromSchema<TDataSchema> = SourceFromSchema<TDataSchema>,
  TModelProp extends NonNullable<JSONValue> = ModelPropsFromSchema<TDataSchema>,
  TRequired extends boolean = true,
  TNullable extends boolean = false,
  THasInitial extends boolean = true,
> extends DataField<TSourceProp, TModelProp, TRequired, TNullable, THasInitial> {
  /**
   * @param fields The contained field definitions
   * @param options Options which configure the behavior of the field
   * @param context Additional context which describes the field
   */
  constructor(
    fields: TDataSchema,
    options?: DataFieldOptions<TSourceProp, TRequired, TNullable, THasInitial>,
    context?: DataFieldContext,
  )

  protected static override get _defaults(): DataFieldOptions<object, boolean, boolean, boolean>

  /** The contained field definitions. */
  fields: TDataSchema

  /**
   * Initialize and validate the structure of the provided field definitions.
   * @param fields The provided field definitions
   * @returns The validated schema
   */
  protected _initialize(fields: abstract.types.DataSchema): abstract.types.DataSchema

  /* -------------------------------------------- */
  /*  Schema Iteration                            */
  /* -------------------------------------------- */

  /** Iterate over a SchemaField by iterating over its fields. */
  [Symbol.iterator](): Generator<DataField<TSourceProp, TRequired, TNullable, THasInitial>>

  /** An array of field names which are present in the schema. */
  keys(): string[]

  /** An array of DataField instances which are present in the schema. */
  values(): DataField[]

  /** An array of [name, DataField] tuples which define the schema. */
  entries(): [string, DataField][]

  /**
   * Test whether a certain field name belongs to this schema definition.
   * @param fieldName The field name
   * @returns Does the named field exist in this schema?
   */
  has(fieldName: string): boolean

  /**
   * Get a DataField instance from the schema by name
   * @param fieldName The field name
   * @returns The DataField instance or undefined
   */
  get(fieldName: string): DataField | undefined

  /* -------------------------------------------- */
  /*  Data Field Methods                          */
  /* -------------------------------------------- */

  protected override _cast(value: unknown): MaybeSchemaProp<TSourceProp, TRequired, TNullable, THasInitial>

  protected override _cleanType(
    data: object,
    options?: CleanFieldOptions,
  ): MaybeSchemaProp<TSourceProp, TRequired, TNullable, THasInitial>

  override initialize(
    value: unknown,
    model?: ConstructorOf<abstract.DataModel>,
    options?: Record<string, unknown>,
  ): MaybeSchemaProp<TModelProp, TRequired, TNullable, THasInitial>

  protected override _validateType(
    data: object,
    options?: DataFieldValidationOptions,
  ): boolean | DataModelValidationFailure | void

  override toObject(value: TModelProp): MaybeSchemaProp<TSourceProp, TRequired, TNullable, THasInitial>

  override apply(
    fn: string | ((field: this, value?: unknown, options?: Record<string, unknown>) => unknown),
    data?: object,
    options?: Record<string, unknown>,
  ): unknown
}
