import { StringFieldOptions } from "../_types.js"
import StringField from "./StringField.js"

/**
 * A subclass of [StringField]{@link StringField} which contains a sanitized HTML string.
 * This class does not override any StringField behaviors, but is used by the server-side to identify fields which
 * require sanitization of user input.
 */
export default class HTMLField<
  TSourceProp extends string = string,
  TModelProp extends NonNullable<JSONValue> = TSourceProp,
  TRequired extends boolean = true,
  TNullable extends boolean = false,
  THasInitial extends boolean = true,
> extends StringField<TSourceProp, TModelProp, TRequired, TNullable, THasInitial> {
  protected static override get _defaults(): StringFieldOptions<string, boolean, boolean, boolean>
}
