import { CleanFieldOptions, DataFieldContext, DataFieldValidationOptions, ObjectFieldOptions } from "../_types.js"
import DataModelValidationFailure from "../validation/DataModelValidationFailure.js"
import ObjectField from "./ObjectField.js"
import { MaybeSchemaProp } from "./util.js"

/** A subclass of `ObjectField` which supports a system-level data object. */
export default class TypeDataField<
  TSourceProp extends object = object,
  TModelProp extends object = TSourceProp,
  TDocument extends foundry.abstract.Document = foundry.abstract.Document,
> extends ObjectField<TSourceProp, TModelProp> {
  /**
   * @param document The base document class which belongs in this field
   * @param options Options which configure the behavior of the field
   * @param context Additional context which describes the field
   */
  constructor(
    document: ConstructorOf<TDocument>,
    options?: ObjectFieldOptions<TSourceProp, true, false, true>,
    context?: DataFieldContext,
  )

  /** The canonical document name of the document type which belongs in this field */
  document: ConstructorOf<TDocument>

  protected static override get _defaults(): ObjectFieldOptions<object, true, false, true>

  static override recursive: boolean

  /**
   * Return the package that provides the sub-type for the given model.
   * @param {DataModel} model       The model instance created for this sub-type.
   * @returns {System|Module|null}
   */
  static getModelProvider(model: foundry.abstract.DataModel): foundry.abstract.DataModel | null

  /** A convenience accessor for the name of the document type associated with this TypeDataField */
  get documentName(): TDocument["documentName"]

  /**
   * Get the DataModel definition that should be used for this type of document.
   * @param type The Document instance type
   * @returns The DataModel class or null
   */
  getModelForType(type: string): typeof foundry.abstract.DataModel | null

  override getInitialValue(data: object): TSourceProp

  protected override _cleanType(value: unknown, options?: CleanFieldOptions): TSourceProp

  override initialize(
    value: TSourceProp,
    model?: ConstructorOf<TDocument>,
    options?: Record<string, unknown>,
  ): MaybeSchemaProp<TModelProp, true, false, true>

  protected override _validateType(
    data: unknown,
    options?: DataFieldValidationOptions,
  ): void | DataModelValidationFailure

  override _validateModel(changes: TSourceProp, options?: DataFieldValidationOptions): void

  override toObject(value: TModelProp): TSourceProp

  /**
   * Migrate this field's candidate source data.
   * @param sourceData Candidate source data of the root model
   * @param fieldData The value of this field within the source data
   */
  migrateSource(sourceData: Record<string, unknown>, fieldData: Record<string, unknown>): void
}
