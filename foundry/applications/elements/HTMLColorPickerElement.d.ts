import { FormInputConfig } from "foundry/data/_types.js"
import AbstractFormInputElement from "./AbstractFormInputElement.js"

/**
 * A custom HTMLElement used to select a color using a linked pair of input fields.
 */
export default class HTMLColorPickerElement extends AbstractFormInputElement<string> {
  static override tagName: "color-picker"

  protected override _buildElements(): HTMLInputElement[]

  /** Create a HTMLColorPickerElement using provided configuration data. */
  static create(config: FormInputConfig<string>): HTMLColorPickerElement
}
