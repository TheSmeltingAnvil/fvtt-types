/**
 * A subclass of ObjectField that represents a mapping of keys to the provided DataField type.
 */
export class TypedObjectField extends ObjectField {
  /** @inheritDoc */
  static get _defaults(): object
  /**
   * @param {DataField} element             The value type of each entry in this object.
   * @param {DataFieldOptions} [options]    Options which configure the behavior of the field.
   * @param {DataFieldContext} [context]    Additional context which describes the field
   */
  constructor(element: DataField, options?: DataFieldOptions, context?: DataFieldContext)
  /**
   * The value type of each entry in this object.
   * @type {DataField}
   */
  element: DataField
  /** @override */
  override _cleanType(data: any, options: any): any
  /** @override */
  override _validateType(data: any, options?: object): DataModelValidationFailure | undefined
  /** @override */
  override _validateModel(changes: any, options?: object): void
  /** @override */
  override initialize(value: any, model: any, options?: object): object
  /** @override */
  override apply(fn: any, data?: object, options?: object): object
  /** @override */
  override _addTypes(source: any, changes: any, options?: object): void
  /** @override */
  override _getField(path: any): DataField | this | undefined
  /**
   * Migrate this field's candidate source data.
   * @param {object} sourceData   Candidate source data of the root model
   * @param {any} fieldData       The value of this field within the source data
   */
  migrateSource(sourceData: object, fieldData: any): void
}
/**
 * A subclass of DataField which deals with object-typed data.
 */
export class ObjectField extends DataField {
  /** @inheritdoc */
  static get _defaults():
    | object
    | (DataFieldOptions & {
        required: boolean
        nullable: boolean
      })
  /** @override */
  override getInitialValue(data: any): any
  /** @override */
  override _cast(value: any): any
  /** @override */
  override initialize(value: any, model: any, options?: object): any
  /** @override */
  override _updateDiff(source: any, key: any, value: any, difference: any, options: any): void
  /** @inheritDoc */
  _updateCommit(source: any, key: any, value: any, diff: any, options: any): void
  /** @override */
  override toObject(value: any): any
  /** @override */
  override _validateType(value: any, options?: object): void
}
/**
 * @import {EffectChangeData} from "../documents/_types.mjs";
 * @import {
 *   ArrayFieldOptions,
 *   ChoiceInputConfig,
 *   CodeMirrorInputConfig,
 *   DataFieldContext,
 *   DataFieldOptions,
 *   DataFieldValidationOptions,
 *   DocumentStats,
 *   DocumentUUIDFieldOptions,
 *   FilePathFieldOptions,
 *   FormGroupConfig,
 *   FormInputConfig,
 *   JavaScriptFieldOptions,
 *   NumberFieldOptions,
 *   StringFieldInputConfig,
 *   StringFieldOptions
 * } from "./_types.mjs";
 * @import {Document, DataModel} from "../abstract/_module.mjs";
 * @import {DataSchema, DataModelUpdateOptions} from "../abstract/_types.mjs";
 * @import {FormSelectOption} from "../../client/applications/forms/fields.mjs"
 */
/**
 * An abstract class that defines the base pattern for a data field within a data schema.
 * @property {string} name                The name of this data field within the schema that contains it.
 * @mixes DataFieldOptions
 */
export class DataField {
  /**
   * Whether this field defines part of a Document/Embedded Document hierarchy.
   * @type {boolean}
   */
  static hierarchical: boolean
  /**
   * Does this field type contain other fields in a recursive structure?
   * Examples of recursive fields are SchemaField, ArrayField, or TypeDataField
   * Examples of non-recursive fields are StringField, NumberField, or ObjectField
   * @type {boolean}
   */
  static recursive: boolean
  /**
   * Default parameters for this field type
   * @returns {DataFieldOptions}
   * @protected
   */
  protected static get _defaults(): DataFieldOptions
  /**
   * Does this form field class have defined form support?
   * @type {boolean}
   */
  static get hasFormSupport(): boolean
  /**
   * @param {DataFieldOptions} [options]    Options which configure the behavior of the field
   * @param {DataFieldContext} [context]    Additional context which describes the field
   */
  constructor(options?: DataFieldOptions, { name, parent }?: DataFieldContext)
  /**
   * The field name of this DataField instance.
   * This is assigned by SchemaField#initialize.
   * @internal
   */
  name: string | undefined
  /**
   * A reference to the parent schema to which this DataField belongs.
   * This is assigned by SchemaField#initialize.
   * @internal
   */
  parent: any
  /**
   * The initially provided options which configure the data field
   * @type {DataFieldOptions}
   */
  options: DataFieldOptions
  /**
   * A dot-separated string representation of the field path within the parent schema.
   * @type {string}
   */
  get fieldPath(): string
  /**
   * Apply a function to this DataField which propagates through recursively to any contained data schema.
   * @param {string|Function} fn          The function to apply
   * @param {*} value                     The current value of this field
   * @param {object} [options={}]         Additional options passed to the applied function
   * @returns {object}                    The results object
   */
  apply(fn: string | Function, value: any, options?: object): object
  /**
   * Add types of the source to the data if they are missing.
   * @param {*} source                           The source data
   * @param {*} changes                          The partial data
   * @param {object} [options]                   Additional options
   * @param {object} [options.source]            The root data model source
   * @param {object} [options.changes]           The root data model changes
   * @internal
   */
  _addTypes(
    source: any,
    changes: any,
    options?: {
      source?: object | undefined
      changes?: object | undefined
    },
  ): void
  /**
   * Recursively traverse a schema and retrieve a field specification by a given path
   * @param {string[]} path             The field path as an array of strings
   * @returns {DataField|undefined}     The corresponding DataField definition for that field, or undefined
   * @internal
   */
  _getField(path: string[]): DataField | undefined
  /**
   * Coerce source data to ensure that it conforms to the correct data type for the field.
   * Data coercion operations should be simple and synchronous as these are applied whenever a DataModel is constructed.
   * For one-off cleaning of user-provided input the sanitize method should be used.
   * @param {*} value           An initial requested value
   * @param {object} [options]  Additional options for how the field is cleaned
   * @param {boolean} [options.partial]   Whether to perform partial cleaning?
   * @param {object} [options.source]     The root data model being cleaned
   * @returns {*}               The cast value
   */
  clean(
    value: any,
    options?: {
      partial?: boolean | undefined
      source?: object | undefined
    },
  ): any
  /**
   * Apply any cleaning logic specific to this DataField type.
   * @param {*} value           The appropriately coerced value.
   * @param {object} [options]  Additional options for how the field is cleaned.
   * @returns {*}               The cleaned value.
   * @protected
   */
  protected _cleanType(value: any, options?: object): any
  /**
   * Cast a non-default value to ensure it is the correct type for the field
   * @param {*} value       The provided non-default value
   * @returns {*}           The standardized value
   * @protected
   */
  protected _cast(value: any): any
  /**
   * Attempt to retrieve a valid initial value for the DataField.
   * @param {object} data   The source data object for which an initial value is required
   * @returns {*}           A proposed initial value
   */
  getInitialValue(data: object): any
  /**
   * Export the current value of the field into a serializable object.
   * @param {*} value                   The initialized value of the field
   * @returns {*}                       An exported representation of the field
   */
  toObject(value: any): any
  /**
   * Validate a candidate input for this field, ensuring it meets the field requirements.
   * A validation failure can be provided as a raised Error (with a string message), by returning false, or by returning
   * a DataModelValidationFailure instance.
   * A validator which returns true denotes that the result is certainly valid and further validations are unnecessary.
   * @param {*} value                                  The initial value
   * @param {DataFieldValidationOptions} [options={}]  Options which affect validation behavior
   * @returns {DataModelValidationFailure|void}        Returns a DataModelValidationFailure if a validation failure
   *                                                   occurred.
   */
  validate(value: any, options?: DataFieldValidationOptions): DataModelValidationFailure | void
  /**
   * Special validation rules which supersede regular field validation.
   * This validator screens for certain values which are otherwise incompatible with this field like null or undefined.
   * @param {*} value               The candidate value
   * @returns {boolean|void}        A boolean to indicate with certainty whether the value is valid.
   *                                Otherwise, return void.
   * @throws {Error}                May throw a specific error if the value is not valid
   * @protected
   */
  protected _validateSpecial(value: any): boolean | void
  /**
   * A default type-specific validator that can be overridden by child classes
   * @param {*} value                                    The candidate value
   * @param {DataFieldValidationOptions} [options={}]    Options which affect validation behavior
   * @returns {boolean|DataModelValidationFailure|void}  A boolean to indicate with certainty whether the value is
   *                                                     valid, or specific DataModelValidationFailure information,
   *                                                     otherwise void.
   * @throws                                             May throw a specific error if the value is not valid
   * @protected
   */
  protected _validateType(value: any, options?: DataFieldValidationOptions): boolean | DataModelValidationFailure | void
  /**
   * Certain fields may declare joint data validation criteria.
   * This method will only be called if the field is designated as recursive.
   * @param {object} data       Candidate data for joint model validation
   * @param {object} options    Options which modify joint model validation
   * @throws  An error if joint model validation fails
   * @internal
   */
  _validateModel(data: object, options?: object): void
  /**
   * Initialize the original source data into a mutable copy for the DataModel instance.
   * @param {*} value                   The source value of the field
   * @param {Object} model              The DataModel instance that this field belongs to
   * @param {object} [options]          Initialization options
   * @returns {*}                       An initialized copy of the source data
   */
  initialize(value: any, model: Object, options?: object): any
  /**
   * Update the source data for a DataModel which includes this DataField.
   * This method is responsible for modifying the provided source data as well as updating the tracked diff included
   * in provided metadata.
   * @param {object} source               Source data of the DataModel which should be updated. This object is always
   *                                      a partial node of source data, relative to which this field belongs.
   * @param {string} key                  The name of this field within the context of the source data.
   * @param {any} value                   The candidate value that should be applied as an update.
   * @param {object} difference           The accumulated diff that is recursively populated as the model traverses
   *                                      through its schema fields.
   * @param {DataModelUpdateOptions} options Options which modify how this update workflow is performed.
   * @throws {Error}                      An error if the requested update cannot be performed.
   * @internal
   */
  _updateDiff(source: object, key: string, value: any, difference: object, options: DataModelUpdateOptions): void
  /**
   * Commit a prepared update to DataModel#_source.
   * @param {object} source               The parent source object within which the `key` field exists
   * @param {string} key                  The named field in source to commit
   * @param {object} value                The new value of the field which should be committed to source
   * @param {object} diff                 The reported change to the field
   * @param {DataModelUpdateOptions} options Options which modify how this update workflow is performed.
   * @internal
   */
  _updateCommit(source: object, key: string, value: object, diff: object, options: DataModelUpdateOptions): void
  /**
   * Render this DataField as an HTML element.
   * @param {FormInputConfig} config        Form element configuration parameters
   * @throws {Error}                        An Error if this DataField subclass does not support input rendering
   * @returns {HTMLElement|HTMLCollection}  A rendered HTMLElement for the field
   */
  toInput(config?: FormInputConfig): HTMLElement | HTMLCollection
  /**
   * Render this DataField as an HTML element.
   * Subclasses should implement this method rather than the public toInput method which wraps it.
   * @param {FormInputConfig} config        Form element configuration parameters
   * @throws {Error}                        An Error if this DataField subclass does not support input rendering
   * @returns {HTMLElement|HTMLCollection}  A rendered HTMLElement for the field
   * @protected
   */
  protected _toInput(config: FormInputConfig): HTMLElement | HTMLCollection
  /**
   * Render this DataField as a standardized form-group element.
   * @param {FormGroupConfig} groupConfig   Configuration options passed to the wrapping form-group
   * @param {FormInputConfig} inputConfig   Input element configuration options passed to DataField#toInput
   * @returns {HTMLDivElement}              The rendered form group element
   */
  toFormGroup(groupConfig?: FormGroupConfig, inputConfig?: FormInputConfig): HTMLDivElement
  /**
   * Apply an ActiveEffectChange to this field.
   * @param {*} value                  The field's current value.
   * @param {DataModel} model          The model instance.
   * @param {EffectChangeData} change  The change to apply.
   * @returns {*}                      The updated value.
   */
  applyChange(value: any, model: DataModel, change: EffectChangeData): any
  /**
   * Cast a change delta into an appropriate type to be applied to this field.
   * @param {*} delta  The change delta.
   * @returns {*}
   * @internal
   */
  _castChangeDelta(delta: any): any
  /**
   * Apply an ADD change to this field.
   * @param {*} value                  The field's current value.
   * @param {*} delta                  The change delta.
   * @param {DataModel} model          The model instance.
   * @param {EffectChangeData} change  The original change data.
   * @returns {*}                      The updated value.
   * @protected
   */
  protected _applyChangeAdd(value: any, delta: any, model: DataModel, change: EffectChangeData): any
  /**
   * Apply a MULTIPLY change to this field.
   * @param {*} value                  The field's current value.
   * @param {*} delta                  The change delta.
   * @param {DataModel} model          The model instance.
   * @param {EffectChangeData} change  The original change data.
   * @returns {*}                      The updated value.
   * @protected
   */
  protected _applyChangeMultiply(value: any, delta: any, model: DataModel, change: EffectChangeData): any
  /**
   * Apply an OVERRIDE change to this field.
   * @param {*} value                  The field's current value.
   * @param {*} delta                  The change delta.
   * @param {DataModel} model          The model instance.
   * @param {EffectChangeData} change  The original change data.
   * @returns {*}                      The updated value.
   * @protected
   */
  protected _applyChangeOverride(value: any, delta: any, model: DataModel, change: EffectChangeData): any
  /**
   * Apply an UPGRADE change to this field.
   * @param {*} value                  The field's current value.
   * @param {*} delta                  The change delta.
   * @param {DataModel} model          The model instance.
   * @param {EffectChangeData} change  The original change data.
   * @returns {*}                      The updated value.
   * @protected
   */
  protected _applyChangeUpgrade(value: any, delta: any, model: DataModel, change: EffectChangeData): any
  /**
   * Apply a DOWNGRADE change to this field.
   * @param {*} value                  The field's current value.
   * @param {*} delta                  The change delta.
   * @param {DataModel} model          The model instance.
   * @param {EffectChangeData} change  The original change data.
   * @returns {*}                      The updated value.
   * @protected
   */
  protected _applyChangeDowngrade(value: any, delta: any, model: DataModel, change: EffectChangeData): any
  /**
   * Apply a CUSTOM change to this field.
   * @param {*} value                  The field's current value.
   * @param {*} delta                  The change delta.
   * @param {DataModel} model          The model instance.
   * @param {EffectChangeData} change  The original change data.
   * @returns {*}                      The updated value.
   * @protected
   */
  protected _applyChangeCustom(value: any, delta: any, model: DataModel, change: EffectChangeData): any
}
import type { FormSelectOption } from "../../client/applications/forms/fields.mjs"
import type { DataModel, Document } from "../abstract/_module.mjs"
import type { DataModelUpdateOptions, DataSchema } from "../abstract/_types.mjs"
import EmbeddedCollectionDelta from "../abstract/embedded-collection-delta.mjs"
import EmbeddedCollection from "../abstract/embedded-collection.mjs"
import type { EffectChangeData } from "../documents/_types.mjs"
import type {
  ArrayFieldOptions,
  ChoiceInputConfig,
  CodeMirrorInputConfig,
  DataFieldContext,
  DataFieldOptions,
  DataFieldValidationOptions,
  DocumentUUIDFieldOptions,
  FilePathFieldOptions,
  FormGroupConfig,
  FormInputConfig,
  JavaScriptFieldOptions,
  NumberFieldOptions,
  StringFieldInputConfig,
  StringFieldOptions,
} from "./_types.mjs"
import { DataModelValidationFailure } from "./validation-failure.mjs"
/**
 * A special {@link foundry.data.fields.NumberField} represents a number between 0 and 1.
 */
export class AlphaField extends NumberField {
  static get _defaults(): never
}
/**
 * A special {@link foundry.data.fields.NumberField} which represents an angle of rotation in degrees between 0 and 360.
 * @property {boolean} normalize Whether the angle should be normalized to [0,360) before being clamped to [0,360]. The
 *                               default is true.
 */
export class AngleField extends NumberField {
  /** @inheritdoc */
  static get _defaults(): never
  constructor(options?: object, context?: object)
  /**
   * @deprecated since v12
   * @ignore
   */
  set base(v: number)
  /**
   * @deprecated since v12
   * @ignore
   */
  get base(): number
  /** @inheritdoc */
  _cast(value: any): any
  #private
}
/**
 * A special subclass of {@link foundry.data.fields.DataField} which can contain any value of any type.
 * Any input is accepted and is treated as valid.
 * It is not recommended to use this class except for very specific circumstances.
 */
export class AnyField extends DataField {
  /** @override */
  override _validateType(value: any): boolean
}
/**
 * A subclass of {@link foundry.data.fields.DataField} which deals with array-typed data.
 * @template [ElementType=DataField]
 * @property {number} min     The minimum number of elements.
 * @property {number} max     The maximum number of elements.
 */
export class ArrayField<ElementType = DataField> extends DataField {
  /** @inheritdoc */
  static get _defaults(): DataFieldOptions & {
    required: boolean
    nullable: boolean
    empty: boolean
    exact: undefined
    min: number
    max: number
  }
  /**
   * Validate the contained element type of the ArrayField
   * @param {*} element        The type of Array element
   * @returns {ElementType}    The validated element type
   * @throws                   An error if the element is not a valid type
   * @protected
   */
  protected static _validateElementType(element: any): ElementType
  /**
   * @param {ElementType} element          The type of element contained in the Array
   * @param {ArrayFieldOptions} [options]  Options which configure the behavior of the field
   * @param {DataFieldContext} [context]   Additional context which describes the field
   */
  constructor(element: ElementType, options?: ArrayFieldOptions, context?: DataFieldContext)
  /**
   * The data type of each element in this array
   * @type {ElementType}
   */
  element: ElementType
  /** @override */
  override getInitialValue(data: any): any
  /** @override */
  override _validateModel(changes: any, options: any): void
  /** @override */
  override _cast(value: any): any[]
  /** @override */
  override _cleanType(value: any, options: any): any
  /** @override */
  override _validateType(value: any, options?: object): void | DataModelValidationFailure
  /**
   * Validate every element of the ArrayField
   * @param {Array} value                         The array to validate
   * @param {DataFieldValidationOptions} options  Validation options
   * @returns {DataModelValidationFailure|void}   A validation failure if any of the elements failed validation,
   *                                              otherwise void.
   * @protected
   */
  protected _validateElements(value: any[], options: DataFieldValidationOptions): DataModelValidationFailure | void
  /**
   * Validate a single element of the ArrayField.
   * @param {*} value                       The value of the array element
   * @param {DataFieldValidationOptions} options  Validation options
   * @returns {DataModelValidationFailure}  A validation failure if the element failed validation
   * @protected
   */
  protected _validateElement(value: any, options: DataFieldValidationOptions): DataModelValidationFailure
  /** @override */
  override initialize(value: any, model: any, options?: object): any
  /** @override */
  override _updateDiff(source: any, key: any, value: any, difference: any, options: any): void
  /**
   * Commit array field changes by replacing array contents while preserving the array reference itself.
   * @override
   */
  override _updateCommit(source: any, key: any, value: any, diff: any, options: any): void
  /** @override */
  override toObject(value: any): any
  /** @override */
  override apply(fn: any, value?: any[], options?: object): any[]
  /** @override */
  override _getField(path: any): any
  /**
   * Migrate this field's candidate source data.
   * @param {object} sourceData   Candidate source data of the root model
   * @param {any} fieldData       The value of this field within the source data
   */
  migrateSource(sourceData: object, fieldData: any): void
  /** @override */
  override _castChangeDelta(raw: any): any[]
  /** @override */
  override _applyChangeAdd(value: any, delta: any, model: any, change: any): any
}
/**
 * A subclass of {@link foundry.data.fields.DataField} which deals with boolean-typed data.
 */
export class BooleanField extends DataField {
  /** @inheritdoc */
  static get _defaults(): DataFieldOptions & {
    required: boolean
    nullable: boolean
    initial: boolean
  }
  /** @override */
  override _cast(value: any): boolean
  /** @override */
  override _validateType(value: any): void
  /** @override */
  override _toInput(config: any): HTMLInputElement
  /** @override */
  override _applyChangeAdd(value: any, delta: any, model: any, change: any): any
  /** @override */
  override _applyChangeMultiply(value: any, delta: any, model: any, change: any): any
  /** @override */
  override _applyChangeUpgrade(value: any, delta: any, model: any, change: any): any
  /** @override */
  override _applyChangeDowngrade(value: any, delta: any, model: any, change: any): any
}
/**
 * A special {@link foundry.data.fields.StringField} which records a standardized CSS color string.
 */
export class ColorField extends StringField {
  /** @inheritdoc */
  static get _defaults(): DataFieldOptions & {
    blank: boolean
    trim: boolean
    choices: undefined
    textSearch: boolean
  } & {
    nullable: boolean
    initial: null
    blank: boolean
  }
  /** @override */
  override initialize(value: any, model: any, options?: object): any
  /** @inheritdoc */
  _validateType(value: any, options: any): true | undefined
  /** @override */
  override _toInput(config: any): foundry.applications.elements.HTMLColorPickerElement
}
/**
 * A special {@link foundry.data.fields.ForeignDocumentField} which defines the original author of a document.
 * This can only be changed later by GM users.
 */
export class DocumentAuthorField extends ForeignDocumentField {
  /** @inheritdoc */
  static get _defaults(): DataFieldOptions & {
    blank: boolean
    trim: boolean
    choices: undefined
    textSearch: boolean
  } & {
    required: boolean
    blank: boolean
    nullable: boolean
    readonly: boolean
    validationError: string
  } & {
    nullable: boolean
    readonly: boolean
    idOnly: boolean
  } & {
    nullable: boolean
    gmOnly: boolean
    label: string
    initial: () => string | null | undefined
  }
}
/**
 * A subclass of {@link foundry.data.fields.StringField} which provides the primary _id for a Document.
 * The field may be initially null, but it must be non-null when it is saved to the database.
 */
export class DocumentIdField extends StringField {
  /** @inheritdoc */
  static get _defaults(): DataFieldOptions & {
    blank: boolean
    trim: boolean
    choices: undefined
    textSearch: boolean
  } & {
    required: boolean
    blank: boolean
    nullable: boolean
    readonly: boolean
    validationError: string
  }
  /** @override */
  override _cast(value: any): any
  /** @override */
  override _validateType(value: any, options: any): void
}
/**
 * A special {@link foundry.data.fields.ObjectField} which captures a mapping of User IDs to Document permission levels.
 */
export class DocumentOwnershipField extends ObjectField {
  /** @inheritdoc */
  static get _defaults(): DataFieldOptions & {
    required: boolean
    nullable: boolean
  } & {
    initial: {
      default: 0
    }
    validationError: string
    gmOnly: boolean
  }
  /** @override */
  override _validateType(value: any): boolean | undefined
}
/**
 * A subclass of {@link foundry.data.fields.TypedObjectField} that is used specifically for the Document "flags" field.
 */
export class DocumentFlagsField extends TypedObjectField {
  /** @inheritdoc */
  static get _defaults(): object & {
    validateKey: typeof foundry.packages.BasePackage.validateId
  }
  /**
   * @param {DataFieldOptions} [options]    Options which configure the behavior of the field
   * @param {DataFieldContext} [context]    Additional context which describes the field
   */
  constructor(options?: DataFieldOptions, context?: DataFieldContext)
}
/**
 * A subclass of {@link foundry.data.fields.SchemaField} which stores document metadata in the _stats field.
 * @mixes DocumentStats
 */
export class DocumentStatsField extends SchemaField {
  /**
   * All Document stats.
   * @type {string[]}
   */
  static fields: string[]
  /**
   * These fields are managed by the server and are ignored if they appear in creation or update data.
   * @type {string[]}
   */
  static managedFields: string[]
  /**
   * Migrate deprecated core flags to `_stats` properties.
   * @param {typeof Document} document
   * @param {object} source
   * @internal
   */
  static _migrateData(document: any, source: object): void
  /**
   * Shim the deprecated core flag `exportSource` on Document source data.
   * @param {typeof Document} document
   * @param {object} source
   * @param {object} [options]
   * @internal
   */
  static _shimData(document: typeof Document, source: object, options?: object): void
  /**
   * Shim the deprecated core flag `exportSource` on Documents.
   * @param {typeof Document} document
   * @internal
   */
  static _shimDocument(document: typeof Document): void
  /**
   * @param {DataFieldOptions} [options]        Options which configure the behavior of the field
   * @param {DataFieldContext} [context]        Additional context which describes the field
   */
  constructor(options?: DataFieldOptions, context?: DataFieldContext)
}
/**
 * A subclass of {@link foundry.data.fields.StringField} that is used specifically for the Document "type" field.
 */
export class DocumentTypeField extends StringField {
  /** @inheritdoc */
  static get _defaults(): DataFieldOptions & {
    blank: boolean
    trim: boolean
    choices: undefined
    textSearch: boolean
  } & {
    required: boolean
    nullable: boolean
    blank: boolean
  }
  /**
   * @param {typeof Document} documentClass  The base document class which belongs in this field
   * @param {StringFieldOptions} [options]  Options which configure the behavior of the field
   * @param {DataFieldContext} [context]    Additional context which describes the field
   */
  constructor(documentClass: typeof Document, options?: StringFieldOptions, context?: DataFieldContext)
  /** @override */
  override _validateType(value: any, options: any): boolean
}
/**
 * A subclass of {@link foundry.data.fields.StringField} which supports referencing some other Document by its UUID.
 * This field may not be blank, but may be null to indicate that no UUID is referenced.
 */
export class DocumentUUIDField extends StringField {
  /** @inheritdoc */
  static get _defaults(): DataFieldOptions & {
    blank: boolean
    trim: boolean
    choices: undefined
    textSearch: boolean
  } & {
    required: boolean
    blank: boolean
    nullable: boolean
    initial: null
    type: undefined
    embedded: undefined
  }
  /**
   * @param {DocumentUUIDFieldOptions} [options] Options which configure the behavior of the field
   * @param {DataFieldContext} [context]    Additional context which describes the field
   */
  constructor(options?: DocumentUUIDFieldOptions, context?: DataFieldContext)
  /** @override */
  override _validateType(value: any): void
  /** @override */
  override _toInput(config: any): foundry.applications.elements.HTMLDocumentTagsElement
}
/**
 * A subclass of {@link foundry.data.fields.SchemaField} which embeds some other DataModel definition as an inner
 * object.
 */
export class EmbeddedDataField extends SchemaField {
  /**
   * @param {typeof DataModel} model          The class of DataModel which should be embedded in this field
   * @param {DataFieldOptions} [options]      Options which configure the behavior of the field
   * @param {DataFieldContext} [context]      Additional context which describes the field
   */
  constructor(model: typeof DataModel, options?: DataFieldOptions, context?: DataFieldContext)
  /**
   * The base DataModel definition which is contained in this field.
   * @type {typeof DataModel}
   */
  model: typeof DataModel
  /** @inheritdoc */
  clean(value: any, options: any): any
  /** @inheritdoc */
  validate(value: any, options: any): void | DataModelValidationFailure
  /** @override */
  override migrateSource(sourceData: any, fieldData: any): void
  /** @override */
  override _validateModel(changes: any, options: any): void
}
/**
 * A subclass of {@link foundry.data.fields.ArrayField} which supports an embedded Document collection.
 * Invalid elements will be dropped from the collection during validation rather than failing for the field entirely.
 * @extends {ArrayField<typeof Document>}
 */
export class EmbeddedCollectionField extends ArrayField<typeof Document> {
  /** @override */
  static override _validateElementType(element: any): any
  /**
   * The Collection implementation to use when initializing the collection.
   * @type {typeof EmbeddedCollection}
   */
  static get implementation(): typeof EmbeddedCollection
  /**
   * @param {typeof Document} element     The type of Document which belongs to this embedded collection
   * @param {DataFieldOptions} [options]  Options which configure the behavior of the field
   * @param {DataFieldContext} [context]  Additional context which describes the field
   */
  constructor(element: typeof Document, options?: DataFieldOptions, context?: DataFieldContext)
  readonly: boolean
  /**
   * A reference to the DataModel subclass of the embedded document element
   * @type {typeof Document}
   */
  get model(): typeof Document
  /**
   * The DataSchema of the contained Document model.
   * @type {SchemaField}
   */
  get schema(): SchemaField
  /** @override */
  override _cleanType(value: any, options?: object): any
  /**
   * Clean data for an individual element in the collection.
   * @param {object} value      Unclean data for the candidate embedded record
   * @param {object} options    Options which control how data is cleaned
   * @returns {object}          Cleaned data for the candidate embedded record
   * @protected
   */
  protected _cleanElement(value: object, options?: object): object
  /** @override */
  override _validateElements(value: any, options: any): DataModelValidationFailure | undefined
  /** @override */
  override apply(fn: any, value?: any[], options?: object): object[]
  /**
   * Return the embedded document(s) as a Collection.
   * @param {Document} parent  The parent document.
   * @returns {DocumentCollection}
   */
  getCollection(parent: Document): DocumentCollection
}
/**
 * A subclass of {@link foundry.data.fields.EmbeddedCollectionField} which manages a collection of delta objects
 * relative to another collection.
 */
export class EmbeddedCollectionDeltaField extends EmbeddedCollectionField {
  /** @override */
  static override get implementation(): typeof EmbeddedCollectionDelta
  /** @override */
  override _cleanElement(value: any, options?: object): any
}
/**
 * A subclass of {@link foundry.data.fields.EmbeddedDataField} which supports a single embedded Document.
 */
export class EmbeddedDocumentField extends EmbeddedDataField {
  /** @inheritdoc */
  static get _defaults(): DataFieldOptions & {
    required: boolean
    nullable: boolean
  } & {
    nullable: boolean
  }
  /**
   * @param {typeof Document} model       The type of Document which is embedded.
   * @param {DataFieldOptions} [options]  Options which configure the behavior of the field.
   * @param {DataFieldContext} [context]  Additional context which describes the field
   */
  constructor(model: typeof Document, options?: DataFieldOptions, context?: DataFieldContext)
  /**
   * Return the embedded document(s) as a Collection.
   * @param {Document} parent  The parent document.
   * @returns {Collection<string, Document>}
   */
  getCollection(parent: Document): Collection<string, Document>
}
/**
 * A special {@link foundry.data.fields.StringField} which records a file path or inline base64 data.
 *
 * When using the `FilePathField` in a data model that is persisted to the database, for example a Document sub-type, it is essential to declare this field in the package manifest so that it receives proper server-side validation of its contents.
 * See {@link foundry.packages.types.ServerSanitizationFields} for information about this structure.
 *
 * @property {string[]} categories      A set of categories in CONST.FILE_CATEGORIES which this field supports
 * @property {boolean} base64=false     Is embedded base64 data supported in lieu of a file path?
 * @property {boolean} texture=false    Does the file path field allow specifying a virtual file path which must begin
 *                                      with the "#" character?
 * @property {boolean} wildcard=false   Does this file path field allow wildcard characters?
 */
export class FilePathField extends StringField {
  /** @inheritdoc */
  static get _defaults(): DataFieldOptions & {
    blank: boolean
    trim: boolean
    choices: undefined
    textSearch: boolean
  } & {
    categories: never[]
    base64: boolean
    wildcard: boolean
    virtual: boolean
    nullable: boolean
    blank: boolean
    initial: null
  }
  /**
   * @param {FilePathFieldOptions} [options]  Options which configure the behavior of the field
   * @param {DataFieldContext} [context]      Additional context which describes the field
   */
  constructor(options?: FilePathFieldOptions, context?: DataFieldContext)
  categories: any[] | undefined
  /** @override */
  override _toInput(config: any): HTMLElement
}
/**
 * A special class of {@link foundry.data.fields.StringField} field which references another DataModel by its id.
 * This field may also be null to indicate that no foreign model is linked.
 */
export class ForeignDocumentField extends DocumentIdField {
  /** @inheritdoc */
  static get _defaults(): DataFieldOptions & {
    blank: boolean
    trim: boolean
    choices: undefined
    textSearch: boolean
  } & {
    required: boolean
    blank: boolean
    nullable: boolean
    readonly: boolean
    validationError: string
  } & {
    nullable: boolean
    readonly: boolean
    idOnly: boolean
  }
  /**
   * @param {typeof Document} model  The foreign DataModel class definition which this field links to
   * @param {StringFieldOptions} [options]    Options which configure the behavior of the field
   * @param {DataFieldContext} [context]      Additional context which describes the field
   */
  constructor(model: typeof Document, options?: StringFieldOptions, context?: DataFieldContext)
  /**
   * A reference to the model class which is stored in this field
   * @type {typeof Document}
   */
  model: typeof Document
  /** @inheritdoc */
  initialize(value: any, model: any, options?: object): any
  /** @inheritdoc */
  toObject(value: any): any
  /** @override */
  override _toInput(config: any): HTMLSelectElement
}
/**
 * A subclass of {@link foundry.data.fields.StringField} which contains a sanitized HTML string.
 * This class does not override any StringField behaviors, but is used by the server-side to identify fields which
 * require sanitization of user input.
 *
 * When using the `HTMLField` in a data model that is persisted to the database, for example a Document sub-type, it is essential to declare this field in the package manifest so that it receives proper server-side validation of its contents.
 * See {@link foundry.packages.types.ServerSanitizationFields} for information about this structure.
 */
export class HTMLField extends StringField {
  /** @inheritDoc */
  static get _defaults(): DataFieldOptions & {
    blank: boolean
    trim: boolean
    choices: undefined
    textSearch: boolean
  } & {
    required: boolean
    blank: boolean
  }
  /** @inheritDoc */
  toFormGroup(groupConfig?: object, inputConfig?: object): HTMLDivElement
  /** @inheritDoc */
  _toInput(config: any): HTMLElement | foundry.applications.elements.HTMLCodeMirrorElement
}
/**
 * A special {@link foundry.data.fields.NumberField} represents a number between 0 (inclusive) and 1 (exclusive).
 * Its values are normalized (modulo 1) to the range [0, 1) instead of being clamped.
 */
export class HueField extends NumberField {
  static get _defaults(): never
  /** @inheritdoc */
  _cast(value: any): any
  /** @override */
  override _toInput(config: any): foundry.applications.elements.HTMLHueSelectorSlider
}
/**
 * A subclass of {@link foundry.data.fields.NumberField} which is used for storing integer sort keys.
 */
export class IntegerSortField extends NumberField {
  /** @inheritdoc */
  static get _defaults(): DataFieldOptions & {
    nullable: boolean
    min: undefined
    max: undefined
    step: undefined
    integer: boolean
    positive: boolean
    choices: undefined
  } & {
    required: boolean
    nullable: boolean
    integer: boolean
    initial: number
  }
}
/**
 * A subclass of {@link foundry.data.fields.StringField} which contains JavaScript code.
 */
export class JavaScriptField extends StringField {
  /** @inheritdoc */
  static get _defaults(): DataFieldOptions & {
    blank: boolean
    trim: boolean
    choices: undefined
    textSearch: boolean
  } & {
    required: boolean
    blank: boolean
    nullable: boolean
    async: boolean
  }
  /**
   * @param {JavaScriptFieldOptions} [options] Options which configure the behavior of the field
   * @param {DataFieldContext} [context]    Additional context which describes the field
   */
  constructor(options?: JavaScriptFieldOptions, context?: DataFieldContext)
  choices: any
  /** @inheritdoc */
  _validateType(value: any, options: any): true | undefined
  /** @override */
  override toFormGroup(groupConfig?: object, inputConfig?: object): HTMLDivElement
  /**
   * @param {FormInputConfig & CodeMirrorInputConfig} config
   * @override
   */
  override _toInput(
    config: FormInputConfig & CodeMirrorInputConfig,
  ): foundry.applications.elements.HTMLCodeMirrorElement
}
/**
 * A special {@link foundry.data.fields.StringField} which contains serialized JSON data.
 */
export class JSONField extends StringField {
  /** @inheritdoc */
  static get _defaults(): DataFieldOptions & {
    blank: boolean
    trim: boolean
    choices: undefined
    textSearch: boolean
  } & {
    blank: boolean
    trim: boolean
    initial: undefined
    validationError: string
  }
  constructor(options: any, context: any)
  choices: any
  /** @override */
  override _validateType(value: any, options: any): void
  /** @override */
  override initialize(value: any, model: any, options?: object): any
  /** @override */
  override toObject(value: any): any
  /**
   * @param {FormInputConfig & CodeMirrorInputConfig} config
   * @override
   */
  override _toInput(
    config: FormInputConfig & CodeMirrorInputConfig,
  ): foundry.applications.elements.HTMLCodeMirrorElement
}
/**
 * A subclass of {@link foundry.data.fields.DataField} which deals with number-typed data.
 *
 * @property {number} min                 A minimum allowed value
 * @property {number} max                 A maximum allowed value
 * @property {number} step                A permitted step size
 * @property {boolean} integer=false      Must the number be an integer?
 * @property {boolean} positive=false     Must the number be positive?
 * @property {number[]|object|Function} [choices] An array of values or an object of values/labels which represent
 *                                        allowed choices for the field. A function may be provided which dynamically
 *                                        returns the array of choices.
 */
export class NumberField extends DataField {
  /** @inheritdoc */
  static get _defaults(): DataFieldOptions & {
    nullable: boolean
    min: undefined
    max: undefined
    step: undefined
    integer: boolean
    positive: boolean
    choices: undefined
  }
  /**
   * @param {NumberFieldOptions} options  Options which configure the behavior of the field
   * @param {DataFieldContext} [context]  Additional context which describes the field
   */
  constructor(options?: NumberFieldOptions, context?: DataFieldContext)
  nullable: boolean | undefined
  /** @override */
  override _cast(value: any): number | null
  /** @inheritdoc */
  _cleanType(value: any, options: any): any
  /** @override */
  override _validateType(value: any): void
  /** @override */
  override _toInput(
    config: any,
  ): HTMLInputElement | HTMLSelectElement | foundry.applications.elements.HTMLRangePickerElement
  /** @override */
  override _applyChangeMultiply(value: any, delta: any, model: any, change: any): number
  /** @override */
  override _applyChangeUpgrade(value: any, delta: any, model: any, change: any): any
  /** @override */
  override _applyChangeDowngrade(value: any, delta: any, model: any, change: any): any
  #private
}
/**
 * A subclass of {@link foundry.data.fields.DataField} that defines a union of schema-constrained objects discriminable
 * via a `type` property.
 */
export class TypedSchemaField extends DataField {
  /** @inheritdoc */
  static get _defaults(): DataFieldOptions & {
    required: boolean
  }
  /**
   * @param {Record<string, DataSchema|SchemaField|typeof DataModel>} types The different types this field can represent
   * @param {DataFieldOptions} [options]                                    Options for configuring the field
   * @param {DataFieldContext} [context]                                    Additional context describing the field
   */
  constructor(
    types: Record<string, DataSchema | SchemaField | typeof DataModel>,
    options?: DataFieldOptions,
    context?: DataFieldContext,
  )
  /**
   * The types of this field.
   * @type {{[type: string]: SchemaField}}
   */
  types: {
    [type: string]: SchemaField
  }
  /** @override */
  override _getField(path: any): SchemaField | DataField | this | undefined
  /** @override */
  override _cleanType(value: any, options: any): any
  /** @override */
  override _cast(value: any): any
  /** @override */
  override _validateSpecial(value: any): boolean | undefined
  /** @override */
  override _validateType(value: any, options: any): void | DataModelValidationFailure
  /** @override */
  override initialize(value: any, model: any, options: any): any
  /** @inheritDoc */
  _updateDiff(source: any, key: any, value: any, difference: any, options: any): void
  /** @inheritDoc */
  _updateCommit(source: any, key: any, value: any, diff: any, options: any): void
  /** @override */
  override toObject(value: any): any
  /** @override */
  override apply(fn: any, data?: object, options?: object): object
  /** @override */
  override _addTypes(source: any, changes: any, options?: object): void
  /**
   * Migrate this field's candidate source data.
   * @param {object} sourceData   Candidate source data of the root model
   * @param {any} fieldData       The value of this field within the source data
   */
  migrateSource(sourceData: object, fieldData: any): void
  #private
}
/**
 * A special class of {@link foundry.data.fields.DataField} which defines a data schema.
 */
export class SchemaField extends DataField {
  /** @inheritdoc */
  static get _defaults(): DataFieldOptions & {
    required: boolean
    nullable: boolean
  }
  /**
   * @param {DataSchema} fields                 The contained field definitions
   * @param {DataFieldOptions} [options]        Options which configure the behavior of the field
   * @param {DataFieldContext} [context]        Additional context which describes the field
   */
  constructor(fields: DataSchema, options?: DataFieldOptions, context?: DataFieldContext)
  /**
   * The contained field definitions.
   * @type {DataSchema}
   */
  fields: DataSchema
  /**
   * Initialize and validate the structure of the provided field definitions.
   * @param {DataSchema} fields     The provided field definitions
   * @returns {DataSchema}          The validated schema
   * @protected
   */
  protected _initialize(fields: DataSchema): DataSchema
  /**
   * An array of field names which are present in the schema.
   * @returns {string[]}
   */
  keys(): string[]
  /**
   * An array of DataField instances which are present in the schema.
   * @returns {DataField[]}
   */
  values(): DataField[]
  /**
   * An array of [name, DataField] tuples which define the schema.
   * @returns {Array<[string, DataField]>}
   */
  entries(): Array<[string, DataField]>
  /**
   * Test whether a certain field name belongs to this schema definition.
   * @param {string} fieldName    The field name
   * @returns {boolean}           Does the named field exist in this schema?
   */
  has(fieldName: string): boolean
  /**
   * Get a DataField instance from the schema by name.
   * @param {string} fieldName    The field name
   * @returns {DataField|void}    The DataField instance or undefined
   */
  get(fieldName: string): DataField | void
  /**
   * Traverse the schema, obtaining the DataField definition for a particular field.
   * @param {string[]|string} fieldName       A field path like ["abilities", "strength"] or "abilities.strength"
   * @returns {DataField|undefined}           The corresponding DataField definition for that field, or undefined
   */
  getField(fieldName: string[] | string): DataField | undefined
  /** @override */
  override _getField(path: any): this | DataField | undefined
  /** @override */
  override getInitialValue(data: any): any
  /** @override */
  override _cast(value: any): any
  /** @inheritdoc */
  _cleanType(data: any, options?: object): any
  /** @override */
  override initialize(value: any, model: any, options?: object): any
  /**
   * The SchemaField#update method plays a special role of recursively dispatching DataField#update operations to the
   * constituent fields within the schema.
   * @override
   */
  override _updateDiff(source: any, key: any, value: any, difference: any, options: any): void
  /** @override */
  override _updateCommit(source: any, key: any, value: any, diff: any, options: any): void
  /** @override */
  override _validateType(data: any, options?: object): DataModelValidationFailure | undefined
  /** @override */
  override _validateModel(changes: any, options?: object): void
  /** @override */
  override toObject(value: any): any
  /** @override */
  override apply(fn: any, data?: object, options?: object): object
  /** @override */
  override _addTypes(source: any, changes: any, options?: object): void
  /**
   * Migrate this field's candidate source data.
   * @param {object} sourceData   Candidate source data of the root model
   * @param {any} fieldData       The value of this field within the source data
   */
  migrateSource(sourceData: object, fieldData: any): void
  /**
   * Iterate over a SchemaField by iterating over its fields.
   * @type {Iterable<DataField>}
   */
  [Symbol.iterator](): Generator<DataField, void, unknown>
}
/**
 * A subclass of {@link foundry.data.fields.ArrayField} which supports a set of contained elements.
 * Elements in this set are treated as fungible and may be represented in any order or discarded if invalid.
 */
export class SetField extends ArrayField<DataField> {
  /**
   * @param {ElementType} element          The type of element contained in the Array
   * @param {ArrayFieldOptions} [options]  Options which configure the behavior of the field
   * @param {DataFieldContext} [context]   Additional context which describes the field
   */
  constructor(element: DataField, options?: ArrayFieldOptions, context?: DataFieldContext)
  /** @override */
  override _validateElements(value: any, options?: any): DataModelValidationFailure | undefined
  /** @override */
  override _toInput(config: any): any
  /** @inheritDoc */
  _castChangeDelta(raw: any): Set<any>
}
/**
 * A subclass of {@link foundry.data.fields.DataField} which deals with string-typed data.
 */
export class StringField extends DataField {
  /** @inheritdoc */
  static get _defaults(): DataFieldOptions & {
    blank: boolean
    trim: boolean
    choices: undefined
    textSearch: boolean
  }
  /**
   * Prepare form input configuration to accept a limited choice set of options.
   * @param {FormInputConfig & Partial<ChoiceInputConfig>} [config]
   * @internal
   */
  static _prepareChoiceConfig(config?: FormInputConfig & Partial<ChoiceInputConfig>): void
  /**
   * Convert a choice entry into a standardized FormSelectOption
   * @param {string|object} entry
   * @param {{labelAttr?: string; valueAttr?: string; localize?: boolean}} options
   * @returns {FormSelectOption}
   */
  static #getChoiceFromEntry(
    entry: string | object,
    {
      labelAttr,
      valueAttr,
      localize,
    }: {
      labelAttr?: string
      valueAttr?: string
      localize?: boolean
    },
  ): FormSelectOption
  /**
   * @param {StringFieldOptions} [options]  Options which configure the behavior of the field
   * @param {DataFieldContext} [context]    Additional context which describes the field
   */
  constructor(options?: StringFieldOptions, context?: DataFieldContext)
  nullable: boolean | undefined
  /**
   * Is the string allowed to be blank (empty)?
   * @type {boolean}
   */
  blank: boolean
  /**
   * Should any provided string be trimmed as part of cleaning?
   * @type {boolean}
   */
  trim: boolean
  /**
   * An array of values or an object of values/labels which represent
   * allowed choices for the field. A function may be provided which dynamically
   * returns the array of choices.
   * @type {string[]|object|Function}
   */
  choices: string[] | object | Function
  /**
   * Is this string field a target for text search?
   * @type {boolean}
   */
  textSearch: boolean
  /** @inheritdoc */
  clean(value: any, options: any): any
  /** @override */
  override getInitialValue(data: any): any
  /** @override */
  override _cast(value: any): string
  /** @inheritdoc */
  _validateSpecial(value: any): boolean | void
  /** @override */
  override _validateType(value: any): true | undefined
  /**
   * Test whether a provided value is a valid choice from the allowed choice set
   * @param {string} value      The provided value
   * @returns {boolean}         Is the choice valid?
   * @protected
   */
  protected _isValidChoice(value: string): boolean
  /**
   * @param {FormInputConfig & StringFieldInputConfig} config
   * @override
   */
  override _toInput(
    config: FormInputConfig & StringFieldInputConfig,
  ): HTMLElement | foundry.applications.elements.HTMLCodeMirrorElement
}
/**
 * A subclass of {@link foundry.data.fields.ObjectField} which supports a type-specific data object.
 */
export class TypeDataField extends ObjectField {
  /** @inheritdoc */
  static get _defaults(): DataFieldOptions & {
    required: boolean
    nullable: boolean
  } & {
    required: boolean
  }
  /**
   * Return the package that provides the sub-type for the given model.
   * @param {DataModel} model       The model instance created for this sub-type.
   * @returns {System|Module|null}
   */
  static getModelProvider(model: DataModel): System | Module | null
  /**
   * @param {typeof Document} document      The base document class which belongs in this field
   * @param {DataFieldOptions} [options]    Options which configure the behavior of the field
   * @param {DataFieldContext} [context]    Additional context which describes the field
   */
  constructor(document: typeof Document, options?: DataFieldOptions, context?: DataFieldContext)
  /**
   * The canonical document name of the document type which belongs in this field
   * @type {typeof Document}
   */
  document: typeof Document
  /**
   * A convenience accessor for the name of the document type associated with this TypeDataField
   * @type {string}
   */
  get documentName(): string
  /**
   * Get the DataModel definition that should be used for this type of document.
   * @param {string} type              The Document instance type
   * @returns {typeof DataModel|null}  The DataModel class or null
   */
  getModelForType(type: string): typeof DataModel | null
  /** @override */
  override _cleanType(value: any, options: any): any
  /** @inheritdoc */
  _validateType(data: any, options?: object): void | DataModelValidationFailure
  /** @override */
  override _validateModel(changes: any, options?: object): void | undefined
  /** @override */
  override _addTypes(source: any, changes: any, options?: object): void
  /**
   * Migrate this field's candidate source data.
   * @param {object} sourceData   Candidate source data of the root model
   * @param {any} fieldData       The value of this field within the source data
   */
  migrateSource(sourceData: object, fieldData: any): void
}
