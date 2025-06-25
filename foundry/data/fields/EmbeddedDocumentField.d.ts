import { DataFieldContext, DataFieldOptions } from "../_types.js"
import EmbeddedDataField from "./EmbeddedDataField.js"
import { MaybeSchemaProp } from "./util.js"

/** A subclass of {@link EmbeddedDataField} which supports a single embedded Document. */
export default class EmbeddedDocumentField<
  TModelProp extends foundry.abstract.Document,
  TRequired extends boolean = true,
  TNullable extends boolean = true,
  THasInitial extends boolean = true,
> extends EmbeddedDataField<TModelProp, TRequired, TNullable, THasInitial> {
  /**
   * @param model The type of Document which is embedded.
   * @param options Options which configure the behavior of the field.
   * @param context Additional context which describes the field
   */
  constructor(
    model: ConstructorOf<TModelProp>,
    options?: DataFieldOptions<TModelProp["_source"], TRequired, TNullable, THasInitial>,
    context?: DataFieldContext,
  )

  static override get _defaults(): DataFieldOptions<object, boolean, true, boolean>

  static override hierarchical: boolean

  override initialize(
    value: MaybeSchemaProp<TModelProp["_source"], TRequired, TNullable, THasInitial>,
    model: ConstructorOf<TModelProp>,
    options?: Record<string, unknown>,
  ): MaybeSchemaProp<TModelProp, TRequired, TNullable, THasInitial>

  /* -------------------------------------------- */
  /*  Embedded Document Operations                */
  /* -------------------------------------------- */

  /**
   * Return the embedded document(s) as a Collection.
   * @param parent The parent document.
   */
  getCollection(parent: foundry.abstract.Document): Collection<string, TModelProp>
}
