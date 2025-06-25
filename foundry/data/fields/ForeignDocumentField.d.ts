import { DataFieldContext, StringFieldOptions } from "../_types.js"
import DocumentIdField from "./DocumentIdField.js"
import * as abstract from "foundry/abstract/_module.js"
import { MaybeSchemaProp } from "./util.js"

/**
 * A special class of [StringField]{@link StringField} field which references another DataModel by its id.
 * This field may also be null to indicate that no foreign model is linked.
 */
export default class ForeignDocumentField<
  TModelProp extends string | abstract.Document = abstract.Document,
  TRequired extends boolean = true,
  TNullable extends boolean = true,
  THasInitial extends boolean = true,
> extends DocumentIdField<TModelProp, TRequired, TNullable, THasInitial> {
  /**
   * @param model The foreign DataModel class definition which this field should link to.
   * @param options Options which configure the behavior of the field
   * @param context Additional context which describes the field
   */
  constructor(
    model: ConstructorOf<abstract.DataModel>,
    options?: ForeignDocumentFieldOptions<string, TRequired, TNullable, THasInitial>,
    context?: DataFieldContext,
  )

  /** A reference to the model class which is stored in this field */
  model: abstract.DataModel

  protected static override get _defaults(): StringFieldOptions<string, boolean, boolean, boolean>

  _cast(value: unknown): string

  override initialize(
    value: string,
    model: ConstructorOf<abstract.DataModel>,
  ): MaybeSchemaProp<TModelProp, TRequired, TNullable, THasInitial>

  toObject(value: TModelProp): MaybeSchemaProp<string, TRequired, TNullable, THasInitial>
}

interface ForeignDocumentFieldOptions<
  TSourceProp extends string,
  TRequired extends boolean,
  TNullable extends boolean,
  THasInitial extends boolean,
> extends StringFieldOptions<TSourceProp, TRequired, TNullable, THasInitial> {
  idOnly?: boolean
}
