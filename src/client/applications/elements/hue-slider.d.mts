/**
 * @import {FormInputConfig} from "@common/data/_types.mjs";
 */
/**
 * A class designed to standardize the behavior for a hue selector UI component.
 * @extends {AbstractFormInputElement<number>}
 */
export default class HTMLHueSelectorSlider extends AbstractFormInputElement<number> {
  /**
   * Create a HTMLHueSelectorSlider using provided configuration data.
   * @param {FormInputConfig} config
   * @returns {HTMLHueSelectorSlider}
   */
  static create(config: FormInputConfig): HTMLHueSelectorSlider
  constructor()
  /** @override */
  override _buildElements(): HTMLInputElement[]
  /** @override */
  override _setValue(value: any): void
  /** @override */
  override _toggleDisabled(disabled: any): void
  #private
}
import type { FormInputConfig } from "@common/data/_types.mjs"
import AbstractFormInputElement from "./form-element.mjs"
