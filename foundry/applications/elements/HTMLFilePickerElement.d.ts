import { FormInputConfig } from "foundry/data/_types.js"
import { FilePickerFileType } from "../apps/FilePicker.js"
import AbstractFormInputElement from "./AbstractFormInputElement.js"

export interface FilePickerInputConfig extends FormInputConfig<string> {
  type?: FilePickerFileType
  placeholder?: string
  noupload?: boolean
}

/**
 * A custom HTML element responsible for rendering a file input field and associated FilePicker button.
 */
export default class HTMLFilePickerElement extends AbstractFormInputElement<string> {
  static override tagName: "file-picker"

  /**
   * The file path selected.
   */
  input: HTMLInputElement

  /**
   * A button to open the file picker interface.
   */
  button: HTMLButtonElement

  /**
   * A reference to the FilePicker application instance originated by this element.
   */
  picker: foundry.applications.apps.FilePicker

  /**
   * A type of file which can be selected in this field.
   * @see {@link foundry.applications.apps.FilePicker.FILE_TYPES}
   */
  get type(): foundry.applications.apps.FilePickerFileType

  set type(value)

  /**
   * Prevent uploading new files as part of this element's FilePicker dialog.
   */
  get noupload(): boolean

  set noupload(value)

  protected override _buildElements(): HTMLElement[]

  protected override _refresh(): void

  protected override _toggleDisabled(disabled: boolean): void

  protected override _activateListeners(): void

  /**
   * Create a HTMLFilePickerElement using provided configuration data.
   */
  static create(config: FilePickerInputConfig): HTMLFilePickerElement
}
