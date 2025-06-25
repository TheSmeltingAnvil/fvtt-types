/**
 * A special `ObjectField` available to packages which configures any additional Document sub-types
 * provided by the package.
 */
export default class AdditionalTypesField extends foundry.data.fields.ObjectField<object, object, false, false, true> {
  static get _defaults(): foundry.data.types.ObjectFieldOptions<object, false, false, true>

  protected override _validateType(value: unknown, options?: Record<string, unknown>): void
}
