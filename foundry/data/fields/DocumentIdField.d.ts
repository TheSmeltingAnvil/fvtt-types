import { StringFieldOptions } from "../_types.js"
import StringField from "./StringField.js"

/**
 * A subclass of [StringField]{@link StringField} which provides the primary _id for a Document.
 * The field may be initially null, but it must be non-null when it is saved to the database.
 */
export default class DocumentIdField<
  TModelProp extends string | foundry.abstract.Document = string,
  TRequired extends boolean = true,
  TNullable extends boolean = true,
  THasInitial extends boolean = true,
> extends StringField<string, TModelProp, TRequired, TNullable, THasInitial> {
  protected static override get _defaults(): StringFieldOptions<string, boolean, boolean, boolean>

  protected override _cast(value: unknown): string

  protected override _validateType(value: unknown): boolean
}
