/**
 * @import {FormInputConfig} from "@common/data/_types.mjs";
 */
/**
 * @typedef FilePickerInputConfig
 * @property {FilePickerOptions.type} [type]
 * @property {string} [placeholder]
 * @property {boolean} [noupload]
 */
/**
 * A custom HTML element responsible for rendering a file input field and associated FilePicker button.
 * @extends {AbstractFormInputElement<string>}
 */
export default class HTMLFilePickerElement extends AbstractFormInputElement<string> {
  /**
   * Create a HTMLFilePickerElement using provided configuration data.
   * @param {FormInputConfig<string> & FilePickerInputConfig} config
   */
  static create(config: FormInputConfig<string> & FilePickerInputConfig): HTMLElement
  constructor()
  /**
   * The file path selected.
   * @type {HTMLInputElement}
   */
  input: HTMLInputElement
  /**
   * A button to open the file picker interface.
   * @type {HTMLButtonElement}
   */
  button: HTMLButtonElement
  /**
   * A reference to the FilePicker application instance originated by this element.
   * @type {FilePicker}
   */
  picker: FilePicker
  set type(value: FilePickerOptions.type)
  /**
   * A type of file which can be selected in this field.
   * @see {@link foundry.applications.apps.FilePicker.FILE_TYPES}
   * @type {FilePickerOptions.type}
   */
  get type(): FilePickerOptions.type
  set noupload(value: boolean)
  /**
   * Prevent uploading new files as part of this element's FilePicker dialog.
   * @type {boolean}
   */
  get noupload(): boolean
  /** @override */
  override _buildElements(): (HTMLInputElement | HTMLButtonElement)[]
  /** @override */
  override _toggleDisabled(disabled: any): void
  #private
}
export type FilePickerInputConfig = {
  type?: FilePickerOptions.type
  placeholder?: string | undefined
  noupload?: boolean | undefined
}
import type { FormInputConfig } from "@common/data/_types.mjs"
import FilePicker from "../apps/file-picker.mjs"
import AbstractFormInputElement from "./form-element.mjs"
