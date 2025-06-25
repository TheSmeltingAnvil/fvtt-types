import { DataFieldContext, DocumentUUIDFieldOptions } from "../_types.js"
import StringField from "./StringField.js"

/**
 * A subclass of {@link StringField} which supports referencing some other Document by its UUID.
 * This field may not be blank, but may be null to indicate that no UUID is referenced.
 */
export default class DocumentUUIDField<
  TSourceProp extends DocumentUUID = DocumentUUID,
  TRequired extends boolean = true,
  TNullable extends boolean = true,
  THasInitial extends boolean = true,
> extends StringField<TSourceProp, TSourceProp, TRequired, TNullable, THasInitial> {
  /**
   * @param options Options which configure the behavior of the field
   * @param context Additional context which describes the field
   */
  constructor(options?: DocumentUUIDFieldOptions<TRequired, TNullable, THasInitial>, context?: DataFieldContext)

  protected override _cast(value: unknown): string
}
