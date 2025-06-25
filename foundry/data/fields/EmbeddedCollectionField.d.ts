import EmbeddedCollection from "foundry/abstract/EmbeddedCollection.js"
import ArrayField from "./ArrayField.js"
import { MaybeSchemaProp, SourceFromDocument } from "./util.js"
import { ArrayFieldOptions, CleanFieldOptions, DataFieldContext, DataFieldValidationOptions } from "../_types.js"
import DataModelValidationFailure from "../validation/DataModelValidationFailure.js"

/**
 * A subclass of `ArrayField` which supports an embedded Document collection.
 * Invalid elements will be dropped from the collection during validation rather than failing for the field entirely.
 */
export default class EmbeddedCollectionField<
  TDocument extends foundry.abstract.Document<foundry.abstract.Document>,
  TSourceProp extends object[] = SourceFromDocument<TDocument>[],
  TRequired extends boolean = true,
  TNullable extends boolean = false,
  THasInitial extends boolean = true,
> extends ArrayField<
  TDocument["schema"],
  TSourceProp,
  EmbeddedCollection<TDocument>,
  TRequired,
  TNullable,
  THasInitial
> {
  /**
   * @param element The type of Document which belongs to this embedded collection
   * @param options Options which configure the behavior of the field
   * @param context Additional context which describes the field
   */
  constructor(
    element: ConstructorOf<Document>,
    options?: ArrayFieldOptions<TSourceProp, TRequired, TNullable, THasInitial>,
    context?: DataFieldContext,
  )

  static override _validateElementType(element: unknown): Document

  /** A reference to the DataModel subclass of the embedded document element */
  get model(): ConstructorOf<Document>

  /** The DataSchema of the contained Document model. */
  get schema(): TDocument["schema"]

  protected override _cleanType(
    value: unknown,
    options?: CleanFieldOptions,
  ): MaybeSchemaProp<TSourceProp, TRequired, TNullable, THasInitial>

  protected override _validateElements(
    value: unknown[],
    options?: DataFieldValidationOptions,
  ): DataModelValidationFailure | void

  override initialize(
    _value: unknown,
    model: ConstructorOf<foundry.abstract.DataModel>,
  ): MaybeSchemaProp<EmbeddedCollection<TDocument>, TRequired, TNullable, THasInitial>

  override toObject(
    value: EmbeddedCollection<TDocument>,
  ): MaybeSchemaProp<TSourceProp, TRequired, TNullable, THasInitial>

  override apply(
    fn: string | ((field: this, value?: unknown, options?: Record<string, unknown>) => unknown),
    data?: object,
    options?: Record<string, unknown>,
  ): unknown
}
