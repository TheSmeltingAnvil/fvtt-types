import { HexColorString } from "foundry/utils/Color.js"
import StringField from "./StringField.js"
import { StringFieldOptions } from "../_types.js"

/** A special `StringField` which records a standardized CSS color string. */
export default class ColorField<
  TRequired extends boolean = false,
  TNullable extends boolean = true,
  THasInitial extends boolean = true,
> extends StringField<HexColorString, Color, TRequired, TNullable, THasInitial> {
  protected static override get _defaults(): StringFieldOptions<HexColorString, boolean, boolean, boolean>

  protected override _validateType(value: unknown): boolean
}
