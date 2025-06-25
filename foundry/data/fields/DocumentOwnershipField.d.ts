import { ObjectFieldOptions } from "../_types.js"
import ObjectField from "./ObjectField.js"

/** A special `ObjectField` which captures a mapping of User IDs to Document permission levels. */
export default class DocumentOwnershipField extends ObjectField<{ [K in string]?: CONST.DocumentOwnershipLevel }> {
  protected static override get _defaults(): ObjectFieldOptions<
    Record<string, CONST.DocumentOwnershipLevel | undefined>,
    true,
    false,
    true
  >

  protected override _validateType(value: object): boolean | void
}
