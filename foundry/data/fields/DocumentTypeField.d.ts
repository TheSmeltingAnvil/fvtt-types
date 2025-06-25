import { DataFieldContext, StringFieldOptions } from "../_types.js"
import StringField from "./StringField.js"

/**
 * A subclass of [StringField]{@link StringField} that is used specifically for the Document "type" field.
 */
export default class DocumentTypeField<
  TSourceProp extends string = string,
  TModelProp extends string = TSourceProp,
  TRequired extends boolean = true,
  TNullable extends boolean = false,
  THasInitial extends boolean = true,
  TDocument extends foundry.abstract.Document = foundry.abstract.Document,
> extends StringField<TSourceProp, TModelProp, TRequired, TNullable, THasInitial> {
  /**
   * @param documentClass The base document class which belongs in this field
   * @param options Options which configure the behavior of the field
   * @param context Additional context which describes the field
   */
  constructor(
    documentClass: ConstructorOf<TDocument>,
    options?: StringFieldOptions<TSourceProp, TRequired, TNullable, THasInitial>,
    context?: DataFieldContext,
  )
}
