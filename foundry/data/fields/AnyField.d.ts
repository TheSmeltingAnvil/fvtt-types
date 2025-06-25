import { DataFieldValidationOptions } from "../_types.js"
import DataModelValidationFailure from "../validation/DataModelValidationFailure.js"
import DataField from "./DataField.js"

/**
 * A special subclass of {@link DataField} which can contain any value of any type.
 * Any input is accepted and is treated as valid.
 * It is not recommended to use this class except for very specific circumstances.
 */
export default class AnyField extends DataField {
  protected override _cast(value: unknown): unknown

  protected override _validateType(
    value: unknown,
    options?: DataFieldValidationOptions,
  ): boolean | DataModelValidationFailure | void
}
