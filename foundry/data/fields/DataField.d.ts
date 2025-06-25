import { EffectChangeData } from "foundry/documents/_types.js"

import * as abstract from "../../abstract/_module.js"
import {
  CleanFieldOptions,
  DataFieldContext,
  DataFieldOptions,
  DataFieldValidationOptions,
  FormGroupConfig,
  FormInputConfig,
} from "../_types.js"
import DataModelValidationFailure from "../validation/DataModelValidationFailure.js"
import {} from "./SchemaField.js"
import { MaybeSchemaProp } from "./util.js"

export default abstract class DataField<
  TSourceProp extends JSONValue = JSONValue,
  TModelProp = TSourceProp,
  TRequired extends boolean = boolean,
  TNullable extends boolean = boolean,
  THasInitial extends boolean = boolean,
> implements Omit<DataFieldOptions<TSourceProp, TRequired, TNullable, THasInitial>, "validate">
{
  /**
   *  @param options Options which configure the behavior of the field
   *  @param context Additional context which describes the field
   */
  constructor(options?: DataFieldOptions<TSourceProp, TRequired, TNullable, THasInitial>, context?: DataFieldContext)

  /**
   * The field name of this DataField instance.
   * This is assigned by `SchemaField#initialize`.
   * @internal
   */
  name: string

  /**
   * A reference to the parent schema to which this DataField belongs.
   * This is assigned by `SchemaField#initialize`.
   * @internal
   */
  parent: abstract.types.DataSchema | undefined

  /** The initially provided options which configure the data field */
  options: DataFieldOptions<TSourceProp, TRequired, TNullable, THasInitial>

  /** Is this field required to be populated? */
  required: TRequired

  /** Can this field have null values? */
  nullable: TNullable

  /** The initial value of a field, or a function which assigns that initial value. */
  initial: this["options"]["initial"]

  /** Whether this field defines part of a Document/Embedded Document hierarchy. */
  static hierarchical: boolean

  /**
   * Does this field type contain other fields in a recursive structure?
   * Examples of recursive fields are SchemaField, ArrayField, or TypeDataField
   * Examples of non-recursive fields are StringField, NumberField, or ObjectField
   */
  static recursive: boolean

  /** Default parameters for this field type */
  protected static get _defaults(): DataFieldOptions<unknown, boolean, boolean, boolean>

  /** A dot-separated string representation of the field path within the parent schema. */
  get fieldPath(): string

  /**
   * Apply a function to this DataField which propagates through recursively to any contained data schema.
   * @param fn The function to apply
   * @param value The current value of this field
   * @param [options={}] Additional options passed to the applied function
   * @returns The results object
   */
  apply(
    fn: string | ((field: this, value?: unknown, options?: Record<string, unknown>) => unknown),
    value?: unknown,
    options?: Record<string, unknown>,
  ): unknown

  /**
   * Add types of the source to the data if they are missing.
   * @param source The source data
   * @param changes The partial data
   * @param options Additional options
   * @param options.source The root data model source
   * @param options.changes The root data model changes
   * @internal
   */
  _addTypes(source: object, changes: object, options?: { source?: object; changes?: object }): void

  /**
   * Recursively traverse a schema and retrieve a field specification by a given path
   * @param path The field path as an array of strings
   * @returns The corresponding DataField definition for that field, or undefined
   * @internal
   */
  _getField(path: string[]): this | undefined

  /* -------------------------------------------- */
  /*  Field Cleaning                              */
  /* -------------------------------------------- */

  /**
   * Coerce source data to ensure that it conforms to the correct data type for the field.
   * Data coercion operations should be simple and synchronous as these are applied whenever a DataModel is constructed.
   * For one-off cleaning of user-provided input the sanitize method should be used.
   * @param value The initial value
   * @param options Additional options for how the field is cleaned
   * @param [options.partial] Whether to perform partial cleaning?
   * @param [options.source]  The root data model being cleaned
   * @returns The cast value
   */
  clean(value: unknown, options?: CleanFieldOptions): MaybeSchemaProp<TSourceProp, TRequired, TNullable, THasInitial>

  /**
   * Apply any cleaning logic specific to this DataField type.
   * @param value The appropriately coerced value.
   * @param options Additional options for how the field is cleaned.
   * @returns The cleaned value.
   */
  protected _cleanType(value: unknown, options?: CleanFieldOptions): unknown

  /**
   * Cast a non-default value to ensure it is the correct type for the field
   * @param value The provided non-default value
   * @returns The standardized value
   */
  protected _cast(value: unknown): unknown

  /**
   * Attempt to retrieve a valid initial value for the DataField.
   * @param data The source data object for which an initial value is required
   * @returns A valid initial value
   * @throws An error if there is no valid initial value defined
   */
  getInitialValue(data?: object): MaybeSchemaProp<TSourceProp, TRequired, TNullable, THasInitial>

  /* -------------------------------------------- */
  /*  Field Validation                            */
  /* -------------------------------------------- */

  /**
   * Validate a candidate input for this field, ensuring it meets the field requirements.
   * A validation failure can be provided as a raised Error (with a string message), by returning false, or by returning
   * a DataModelValidationFailure instance.
   * A validator which returns true denotes that the result is certainly valid and further validations are unnecessary.
   * @param value The initial value
   * @param [options={}]   Options which affect validation behavior
   * @returns              Returns a DataModelValidationFailure if a validation failure
   *                       occurred.
   */
  validate(value: unknown, options?: DataFieldValidationOptions): DataModelValidationFailure | void

  /**
   * Special validation rules which supersede regular field validation.
   * This validator screens for certain values which are otherwise incompatible with this field like null or undefined.
   * @param value The candidate value
   * @returns A boolean to indicate with certainty whether the value is valid.
   *                                Otherwise, return void.
   * @throws May throw a specific error if the value is not valid
   */
  protected _validateSpecial(value: unknown): boolean | void

  /**
   * A default type-specific validator that can be overridden by child classes
   * @param value The candidate value
   * @param [options={}] Options which affect validation behavior
   * @returns A boolean to indicate with certainty whether the value is valid, or specific DataModelValidationFailure
   *          information, otherwise void.
   * @throws May throw a specific error if the value is not valid
   */
  protected _validateType(
    value: unknown,
    options?: DataFieldValidationOptions,
  ): boolean | DataModelValidationFailure | void

  /**
   * Certain fields may declare joint data validation criteria.
   * This method will only be called if the field is designated as recursive.
   * @param data Candidate data for joint model validation
   * @param options Options which modify joint model validation
   * @throws  An error if joint model validation fails
   * @internal
   */
  _validateModel(data: TSourceProp, options?: DataFieldValidationOptions): void

  /* -------------------------------------------- */
  /*  Initialization and Serialization            */
  /* -------------------------------------------- */

  /**
   * Initialize the original source data into a mutable copy for the DataModel instance.
   * @param value The source value of the field
   * @param model The DataModel instance that this field belongs to
   * @param options Initialization options
   */
  initialize(
    value: unknown,
    model?: ConstructorOf<abstract.DataModel>,
    options?: object,
  ): MaybeSchemaProp<TModelProp, TRequired, TNullable, THasInitial>

  /**
   * Update the source data for a DataModel which includes this DataField.
   * This method is responsible for modifying the provided source data as well as updating the tracked diff included
   * in provided metadata.
   * @param source Source data of the DataModel which should be updated. This object is always a partial node of
   *               source data, relative to which this field belongs.
   * @param key The name of this field within the context of the source data.
   * @param value The candidate value that should be applied as an update.
   * @param difference The accumulated diff that is recursively populated as the model traverses through its schema
   *                   fields.
   * @param options Options which modify how this update workflow is performed.
   * @throws An error if the requested update cannot be performed.
   * @internal
   */
  _updateDiff(
    source: object,
    key: string,
    value: unknown,
    difference: object,
    options: abstract.types.DataModelUpdateOptions,
  ): void

  /**
   * Commit a prepared update to DataModel#_source.
   * @param source The parent source object within which the `key` field exists
   * @param key The named field in source to commit
   * @param value The new value of the field which should be committed to source
   * @param diff The reported change to the field
   * @param options Options which modify how this update workflow is performed.
   * @internal
   */
  _updateCommit(
    source: object,
    key: string,
    value: object,
    diff: object,
    options: abstract.types.DataModelUpdateOptions,
  ): void

  /* -------------------------------------------- */
  /*  Form Field Integration                      */
  /* -------------------------------------------- */

  /**
   * Export the current value of the field into a serializable object.
   * @param value The initialized value of the field
   * @returns An exported representation of the field
   */
  toObject(value: TModelProp): MaybeSchemaProp<TSourceProp, TRequired, TNullable, THasInitial>

  /* -------------------------------------------- */
  /*  Form Field Integration                      */
  /* -------------------------------------------- */

  /** Does this form field class have defined form support? */
  static get hasFormSupport(): boolean

  /**
   * Render this DataField as an HTML element.
   * @param  [config] Form element configuration parameters
   * @throws          An Error if this DataField subclass does not support input rendering
   * @returns         A rendered HTMLElement for the field
   */
  toInput(config?: FormInputConfig): HTMLElement | HTMLCollection

  /**
   * Render this DataField as an HTML element.
   * Subclasses should implement this method rather than the public toInput method which wraps it.
   * @param  [config] Form element configuration parameters
   * @throws          An Error if this DataField subclass does not support input rendering
   * @returns         A rendered HTMLElement for the field
   */
  protected _toInput(config?: FormInputConfig): HTMLElement | HTMLCollection

  /**
   * Render this DataField as a standardized form-group element.
   * @param   [groupConfig] Configuration options passed to the wrapping form-group
   * @param   [inputConfig] Input element configuration options passed to DataField#toInput
   * @returns               The rendered form group element
   */
  toFormGroup(groupConfig?: FormGroupConfig, inputConfig?: FormInputConfig): HTMLDivElement

  /* -------------------------------------------- */
  /*  Active Effect Integration                   */
  /* -------------------------------------------- */

  /**
   * Apply an ActiveEffectChange to this field.
   * @param   value   The field's current value.
   * @param   model   The model instance.
   * @param   change  The change to apply.
   * @returns         The updated value.
   */
  applyChange(value: unknown, model: abstract.DataModel, change: EffectChangeData): unknown

  /**
   * Cast a change delta into an appropriate type to be applied to this field.
   * @param   delta  The change delta.
   * @internal
   */
  _castChangeDelta(delta: unknown): unknown

  /**
   * Apply an ADD change to this field.
   * @param   value   The field's current value.
   * @param   delta   The change delta.
   * @param   model   The model instance.
   * @param   change  The original change data.
   * @returns         The updated value.
   */
  protected _applyChangeAdd(
    value: unknown,
    delta: unknown,
    model: abstract.DataModel,
    change: EffectChangeData,
  ): unknown

  /**
   * Apply a MULTIPLY change to this field.
   * @param   value   The field's current value.
   * @param   delta   The change delta.
   * @param   model   The model instance.
   * @param   change  The original change data.
   * @returns         The updated value.
   */
  protected _applyChangeMultiply(
    value: unknown,
    delta: unknown,
    model: abstract.DataModel,
    change: EffectChangeData,
  ): unknown

  /**
   * Apply an OVERRIDE change to this field.
   * @param   value   The field's current value.
   * @param   delta   The change delta.
   * @param   model   The model instance.
   * @param   change  The original change data.
   * @returns         The updated value.
   */
  protected _applyChangeOverride(
    value: unknown,
    delta: unknown,
    model: abstract.DataModel,
    change: EffectChangeData,
  ): unknown

  /**
   * Apply an UPGRADE change to this field.
   * @param   value   The field's current value.
   * @param   delta   The change delta.
   * @param   model   The model instance.
   * @param   change  The original change data.
   * @returns         The updated value.
   */
  protected _applyChangeUpgrade(
    value: unknown,
    delta: unknown,
    model: abstract.DataModel,
    change: EffectChangeData,
  ): unknown

  /**
   * Apply a DOWNGRADE change to this field.
   * @param   value   The field's current value.
   * @param   delta   The change delta.
   * @param   model   The model instance.
   * @param   change  The original change data.
   * @returns         The updated value.
   */
  protected _applyChangeDowngrade(
    value: unknown,
    delta: unknown,
    model: abstract.DataModel,
    change: EffectChangeData,
  ): unknown

  /**
   * Apply a CUSTOM change to this field.
   * @param   value   The field's current value.
   * @param   delta   The change delta.
   * @param   model   The model instance.
   * @param   change  The original change data.
   * @returns         The updated value.
   */
  protected _applyChangeCustom(
    value: unknown,
    delta: unknown,
    model: abstract.DataModel,
    change: EffectChangeData,
  ): unknown
}
