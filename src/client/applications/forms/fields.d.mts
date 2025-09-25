/**
 * @import {DataField} from "../../../common/data/fields.mjs";
 * @import {FormGroupConfig, FormInputConfig} from "../../../common/data/_types.mjs";
 */
/**
 * @callback CustomFormGroup
 * @param {DataField} field
 * @param {FormGroupConfig} groupConfig
 * @param {FormInputConfig} inputConfig
 * @returns {HTMLDivElement}
 */
/**
 * @callback CustomFormInput
 * @param {DataField} field
 * @param {FormInputConfig} config
 * @returns {HTMLElement|HTMLCollection}
 */
/**
 * Create a standardized form field group.
 * @param {FormGroupConfig} config
 * @returns {HTMLDivElement}
 */
export function createFormGroup(config: FormGroupConfig): HTMLDivElement
/**
 * Create an `<input type="checkbox">` element for a BooleanField.
 * @param {FormInputConfig<boolean>} config
 * @returns {HTMLInputElement}
 */
export function createCheckboxInput(config: FormInputConfig<boolean>): HTMLInputElement
/**
 * @typedef EditorInputConfig
 * @property {string} [engine="prosemirror"]
 * @property {number} [height]
 * @property {boolean} [editable=true]
 * @property {boolean} [button=false]
 * @property {boolean} [collaborate=false]
 */
/**
 * Create a `<div class="editor">` element for a StringField.
 * @param {FormInputConfig<string> & EditorInputConfig} config
 * @returns {HTMLDivElement}
 */
export function createEditorInput(config: FormInputConfig<string> & EditorInputConfig): HTMLDivElement
/**
 * Create a `<multi-select>` or `<multi-checkbox>` element for fields supporting multiple choices.
 * @param {FormInputConfig<(string|number)[]> & Omit<SelectInputConfig, "blank">} config
 *        Configuration object for creating the multi-select element.
 *        The `value` property accepts an array of strings or numbers corresponding to the selected choices.
 * @returns {AbstractMultiSelectElement}
 */
export function createMultiSelectInput(
  config: FormInputConfig<(string | number)[]> & Omit<SelectInputConfig, "blank">,
): AbstractMultiSelectElement
/**
 * @typedef NumberInputConfig
 * @property {number} min
 * @property {number} max
 * @property {number|"any"} step
 * @property {"range"|"number"} [type]
 */
/**
 * Create an `<input type="number">` element for a NumberField.
 * @param {FormInputConfig<number> & NumberInputConfig} config
 * @returns {HTMLInputElement}
 */
export function createNumberInput(config: FormInputConfig<number> & NumberInputConfig): HTMLInputElement
/**
 * @typedef FormSelectOption
 * @property {string} [value]
 * @property {string} [label]
 * @property {string} [group]
 * @property {boolean} [disabled]
 * @property {boolean} [selected]
 * @property {boolean} [rule]
 * @property {Record<string, string>} [dataset]
 */
/**
 * @typedef SelectInputConfig
 * @property {FormSelectOption[]} options
 * @property {string[]} [groups]        An option to control the order and display of optgroup elements. The order of
 *                                      strings defines the displayed order of optgroup elements.
 *                                      A blank string may be used to define the position of ungrouped options.
 *                                      If not defined, the order of groups corresponds to the order of options.
 * @property {string} [blank]
 * @property {string} [valueAttr]       An alternative value key of the object passed to the options array
 * @property {string} [labelAttr]       An alternative label key of the object passed to the options array
 * @property {boolean} [localize=false] Localize value labels
 * @property {boolean} [sort=false]     Sort options alphabetically by label within groups
 * @property {"single"|"multi"|"checkboxes"} [type] Customize the type of select that is created
 */
/**
 * Create a `<select>` element for a StringField.
 * @param {FormInputConfig<string> & SelectInputConfig} config
 * @returns {HTMLSelectElement}
 */
export function createSelectInput(config: FormInputConfig<string> & SelectInputConfig): HTMLSelectElement
/**
 * @typedef TextAreaInputConfig
 * @property {number} rows
 */
/**
 * Create a `<textarea>` element for a StringField.
 * @param {FormInputConfig<string> & TextAreaInputConfig} config
 * @returns {HTMLTextAreaElement}
 */
export function createTextareaInput(config: FormInputConfig<string> & TextAreaInputConfig): HTMLTextAreaElement
/**
 * Create an `<input type="text">` element for a StringField.
 * @param {FormInputConfig<string>} config
 * @returns {HTMLInputElement}
 */
export function createTextInput(config: FormInputConfig<string>): HTMLInputElement
/**
 * Structure a provided array of select options into a standardized format for rendering optgroup and option elements.
 * @param {FormInputConfig & SelectInputConfig} config
 * @returns {{group: string, options: FormSelectOption[]}[]}
 *
 * @example
 * const options = [
 *   {value: "bar", label: "Bar", selected: true, group: "Good Options"},
 *   {value: "foo", label: "Foo", disabled: true, group: "Bad Options"},
 *   {value: "baz", label: "Baz", group: "Good Options"}
 * ];
 * const groups = ["Good Options", "Bad Options", "Unused Options"];
 * const optgroups = foundry.applications.fields.prepareSelectOptionGroups({options, groups, blank: true, sort: true});
 */
export function prepareSelectOptionGroups(config: FormInputConfig & SelectInputConfig): {
  group: string
  options: FormSelectOption[]
}[]
/**
 * Apply standard attributes to all input elements.
 * @param {HTMLElement} input           The element being configured
 * @param {FormInputConfig<*>} config   Configuration for the element
 */
export function setInputAttributes(input: HTMLElement, config: FormInputConfig<any>): void
/**
 * Create an HTML element for a FontAwesome icon
 * @param {string} glyph A FontAwesome glyph name, such as "file" or "user"
 * @param {object} [options] Additional options to configure the icon
 * @param {"solid"|"regular"|"duotone"} [options.style="solid"] The style name for the icon
 * @param {boolean} [options.fixedWidth=false] Should icon be fixed-width?
 * @param {string[]} [options.classes] Additional classes to append to the class list
 * @returns {HTMLElement} The configured FontAwesome icon element
 * @see {@link https://fontawesome.com/search}
 */
export function createFontAwesomeIcon(
  glyph: string,
  {
    style,
    fixedWidth,
    classes,
  }?: {
    style?: "solid" | "regular" | "duotone" | undefined
    fixedWidth?: boolean | undefined
    classes?: string[] | undefined
  },
): HTMLElement
export type CustomFormGroup = (
  field: DataField,
  groupConfig: FormGroupConfig,
  inputConfig: FormInputConfig,
) => HTMLDivElement
export type CustomFormInput = (field: DataField, config: FormInputConfig) => HTMLElement | HTMLCollection
export type EditorInputConfig = {
  engine?: string | undefined
  height?: number | undefined
  editable?: boolean | undefined
  button?: boolean | undefined
  collaborate?: boolean | undefined
}
export type NumberInputConfig = {
  min: number
  max: number
  step: number | "any"
  type?: "number" | "range" | undefined
}
export type FormSelectOption = {
  value?: string | undefined
  label?: string | undefined
  group?: string | undefined
  disabled?: boolean | undefined
  selected?: boolean | undefined
  rule?: boolean | undefined
  dataset?: Record<string, string> | undefined
}
export type SelectInputConfig = {
  options: FormSelectOption[]
  /**
   * An option to control the order and display of optgroup elements. The order of
   *         strings defines the displayed order of optgroup elements.
   *         A blank string may be used to define the position of ungrouped options.
   *         If not defined, the order of groups corresponds to the order of options.
   */
  groups?: string[] | undefined
  blank?: string | undefined
  /**
   * An alternative value key of the object passed to the options array
   */
  valueAttr?: string | undefined
  /**
   * An alternative label key of the object passed to the options array
   */
  labelAttr?: string | undefined
  /**
   * Localize value labels
   */
  localize?: boolean | undefined
  /**
   * Sort options alphabetically by label within groups
   */
  sort?: boolean | undefined
  /**
   * Customize the type of select that is created
   */
  type?: "single" | "multi" | "checkboxes" | undefined
}
export type TextAreaInputConfig = {
  rows: number
}
import type { FormGroupConfig, FormInputConfig } from "../../../common/data/_types.mjs"
import type { DataField } from "../../../common/data/fields.mjs"import { AbstractMultiSelectElement } from "../elements/multi-select.d.mts"
