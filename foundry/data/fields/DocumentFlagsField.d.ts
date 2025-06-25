import { DataFieldContext, ObjectFieldOptions } from "../_types.js"
import ObjectField from "./ObjectField.js"
import TypedObjectField from "./TypedObjectField.js"

/**
 * A subclass of {@link foundry.data.fields.TypedObjectField} that is used specifically for the Document "flags" field.
 */
export default class DocumentFlagsField extends TypedObjectField<
  ObjectField<Record<string, JSONValue | undefined>, Record<string, unknown>, true, false, true>
> {
  /**
   * @param options Options which configure the behavior of the field
   * @param context Additional context which describes the field
   */
  constructor(
    options?: ObjectFieldOptions<Record<string, Record<string, JSONValue | undefined>>, true, false, true>,
    context?: DataFieldContext,
  )

  static override get _defaults(): ObjectFieldOptions<Record<string, Record<string, JSONValue | undefined>>>
}
