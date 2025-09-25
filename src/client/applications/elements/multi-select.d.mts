/**
 * @import {FormInputConfig} from "../../../common/data/_types.mjs";
 */
/**
 * An abstract base class designed to standardize the behavior for a multi-select UI component.
 * Multi-select components return an array of values as part of form submission.
 * Different implementations may provide different experiences around how inputs are presented to the user.
 * @extends {AbstractFormInputElement<Set<string>>}
 */
export class AbstractMultiSelectElement extends AbstractFormInputElement<Set<string>> {
  constructor()
  /**
   * Predefined <option> and <optgroup> elements which were defined in the original HTML.
   * @type {(HTMLOptionElement|HTMLOptGroupElement)[]}
   * @protected
   */
  protected _options: (HTMLOptionElement | HTMLOptGroupElement)[]
  /**
   * An object which maps option values to displayed labels.
   * @type {Record<string, string>}
   * @protected
   */
  protected _choices: Record<string, string>
  /** @override */
  override _value: Set<any>
  /**
   * Preserve existing <option> and <optgroup> elements which are defined in the original HTML.
   * @protected
   */
  protected _initialize(): void
  /**
   * Mark a choice as selected.
   * @param {string} value      The value to add to the chosen set
   */
  select(value: string): void
  /**
   * Mark a choice as un-selected.
   * @param {string} value      The value to delete from the chosen set
   */
  unselect(value: string): void
  /** @override */
  override _getValue(): Set<string>
  /** @override */
  override _setValue(value: any): void
}
/**
 * Provide a multi-select workflow using a select element as the input mechanism.
 *
 * @example Multi-Select HTML Markup
 * ```html
 * <multi-select name="select-many-things">
 *   <optgroup label="Basic Options">
 *     <option value="foo">Foo</option>
 *     <option value="bar">Bar</option>
 *     <option value="baz">Baz</option>
 *   </optgroup>
 *   <optgroup label="Advanced Options">
 *    <option value="fizz">Fizz</option>
 *     <option value="buzz">Buzz</option>
 *   </optgroup>
 * </multi-select>
 * ```
 */
export class HTMLMultiSelectElement extends AbstractMultiSelectElement {
  /**
   * Create a HTMLMultiSelectElement using provided configuration data.
   * @param {FormInputConfig<string[]> & Omit<SelectInputConfig, "blank">} config
   * @returns {HTMLMultiSelectElement}
   */
  static create(config: FormInputConfig<string[]> & Omit<SelectInputConfig, "blank">): HTMLMultiSelectElement
  /** @override */
  override _buildElements(): (HTMLDivElement | HTMLSelectElement)[]
  /** @override */
  override _toggleDisabled(disabled: any): void
  #private
}
/**
 * Provide a multi-select workflow as a grid of input checkbox elements.
 *
 * @example Multi-Checkbox HTML Markup
 * ```html
 * <multi-checkbox name="check-many-boxes">
 *   <optgroup label="Basic Options">
 *     <option value="foo">Foo</option>
 *     <option value="bar">Bar</option>
 *     <option value="baz">Baz</option>
 *   </optgroup>
 *   <optgroup label="Advanced Options">
 *    <option value="fizz">Fizz</option>
 *     <option value="buzz">Buzz</option>
 *   </optgroup>
 * </multi-checkbox>
 * ```
 */
export class HTMLMultiCheckboxElement extends AbstractMultiSelectElement {
  /** @override */
  override _buildElements(): (HTMLLabelElement | HTMLFieldSetElement)[]
  /** @override */
  override _toggleDisabled(disabled: any): void
  #private
}
import type { FormInputConfig } from "../../../common/data/_types.mjs"
import { SelectInputConfig } from "../forms/fields.d.mts"
import AbstractFormInputElement from "./form-element.mjs"
