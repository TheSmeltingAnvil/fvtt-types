import { DataFieldContext, JavaScriptFieldOptions } from "../_types.js"
import StringField from "./StringField.js"

/** A subclass of {@link StringField} which contains JavaScript code. */
export default class JavaScriptField<
  TRequired extends boolean = true,
  TNullable extends boolean = false,
  THasInitial extends boolean = false,
> extends StringField<string, string, TRequired, TNullable, THasInitial> {
  /**
   * @param options Options which configure the behavior of the field
   * @param context Additional context which describes the field
   */
  constructor(options?: JavaScriptFieldOptions<TRequired, TNullable, THasInitial>, context?: DataFieldContext)
}
