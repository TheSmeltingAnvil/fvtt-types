import { DataFieldContext, FilePathFieldOptions } from "../_types.js"
import StringField from "./StringField.js"

/** A special `StringField` which records a file path or inline base64 data. */
export default class FilePathField<
  TSourceProp extends foundry.abstract.FilePath = foundry.abstract.FilePath,
  TModelProp extends NonNullable<JSONValue> = TSourceProp,
  TRequired extends boolean = false,
  TNullable extends boolean = true,
  THasInitial extends boolean = true,
> extends StringField<TSourceProp, TModelProp, TRequired, TNullable, THasInitial> {
  /**
   * @param options Options which configure the behavior of the field
   * @param context Additional context which describes the field
   * */
  constructor(
    options?: FilePathFieldOptions<TSourceProp, TRequired, TNullable, THasInitial>,
    context?: DataFieldContext,
  )

  protected static override get _defaults(): FilePathFieldOptions<foundry.abstract.FilePath, boolean, boolean, boolean>

  protected override _validateType(value: unknown): void
}
