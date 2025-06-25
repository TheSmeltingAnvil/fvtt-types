import { FormGroupConfig, FormInputConfig } from "../../data/_types.js"
import { HTMLMultiSelectElement } from "../elements/_module.js"
import type { EditorInputConfig, NumberInputConfig, SelectInputConfig, TextAreaInputConfig } from "./_module.js"
import FormSelectOption from "./FormSelectOption.js"
import { MultiSelectInputConfig } from "./MultiSelectInputConfig.js"

/** Create an `<input type="checkbox">` element for a BooleanField. */
export function createCheckboxInput(config: FormInputConfig<boolean>): HTMLInputElement

/** Create a `<div class="editor">` element for a StringField. */
export function createEditorInput(config: EditorInputConfig): HTMLDivElement

/**
 * Create an HTML element for a FontAwesome icon
 * @param glyph A FontAwesome glyph name, such as "file" or "user"
 * @param options Additional options to configure the icon
 * @param options.style The style name for the icon
 * @param options.fixedWidth Should icon be fixed-width?
 * @param options.classes Additional classes to append to the class list
 * @returns The configured FontAwesome icon element
 * @see {@link https://fontawesome.com/search}
 */
export function createFontAwesomeIcon(
  glyph: string,
  options?: {
    style?: "solid" | "regular" | "duotone"
    fixedWidth?: boolean
    classes?: string[]
  },
): HTMLElement

/** Create a standardized form field group. */
export function createFormGroup(config: FormGroupConfig): HTMLDivElement

/** Create a `<multi-select>` element for a StringField. */
export function createMultiSelectInput(config: MultiSelectInputConfig): HTMLMultiSelectElement

/** Create an `<input type="number">` element foFormInputConfig<number> & NumberInputConfigr a NumberField. */
export function createNumberInput(config: NumberInputConfig): HTMLInputElement

/** Create a `<select>` element for a StringField. */
export function createSelectInput(config: SelectInputConfig): HTMLSelectElement

/** Create a `<textarea>` element for a StringField. */
export function createTextareaInput(config: TextAreaInputConfig): HTMLTextAreaElement

/** Create an `<input type="text">` element for a StringField. */
export function createTextInput(config: FormInputConfig<string>): HTMLInputElement

/**
 * Structure a provided array of select options into a standardized format for rendering optgroup and option elements.
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
export function prepareSelectOptionGroups(
  config: FormInputConfig<string> & SelectInputConfig,
): { group: string; options: FormSelectOption[] }[]

/**
 * Apply standard attributes to all input elements.
 * @param input The element being configured
 * @param config Configuration for the element
 */
export function setInputAttributes<TValue extends string | boolean = string | boolean>(
  input: HTMLElement,
  config: FormInputConfig<TValue>,
): void
