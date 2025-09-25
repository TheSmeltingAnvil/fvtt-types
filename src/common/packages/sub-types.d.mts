/**
 * A special ObjectField available to packages which configures any additional Document subtypes
 * provided by the package.
 */
export default class AdditionalTypesField extends ObjectField {
  /** @inheritDoc */
  static get _defaults(): object
  #private
}
import { ObjectField } from "../data/fields.mjs"
