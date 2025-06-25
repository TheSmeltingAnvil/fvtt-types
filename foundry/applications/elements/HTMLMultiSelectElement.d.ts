import { MultiSelectInputConfig } from "../fields/MultiSelectInputConfig.js"
import AbstractMultiSelectElement from "./AbstractMultiSelectElement.js"

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
export default class HTMLMultiSelectElement extends AbstractMultiSelectElement {
  static override tagName: "multi-select"

  /**
   * Create a HTMLMultiSelectElement using provided configuration data.
   * @param {FormInputConfig<string[]> & Omit<SelectInputConfig, "blank">} config
   * @returns {HTMLMultiSelectElement}
   */
  static create(config: MultiSelectInputConfig): HTMLMultiSelectElement
}
