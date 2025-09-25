/**
 * @import {FormInputConfig} from "../../../common/data/_types.mjs";
 */
/**
 * @typedef RangePickerInputConfig
 * @property {number} min
 * @property {number} max
 * @property {number} [step]
 */
/**
 * @typedef HTMLRangePickerOptions
 * @property {number} [min]    The slider minimum value.
 * @property {number} [max]    The slider maximum value.
 * @property {number} [step]   The slider's discrete value increments.
 * @property {number} [value]  The slider's starting value.
 */
/**
 * A custom HTML element responsible selecting a value on a range slider with a linked number input field.
 * @extends {AbstractFormInputElement<number>}
 */
export default class HTMLRangePickerElement extends AbstractFormInputElement<number> {
  /**
   * Create a HTMLRangePickerElement using provided configuration data.
   * @param {FormInputConfig & RangePickerInputConfig} config
   * @returns {HTMLRangePickerElement}
   */
  static create(config: FormInputConfig & RangePickerInputConfig): HTMLRangePickerElement
  /**
   * @param {HTMLRangePickerOptions} [options]
   */
  constructor({ value, step, min, max }?: HTMLRangePickerOptions)
  /**
   * The value of the input element.
   * @type {number}
   */
  get valueAsNumber(): number
  /** @override */
  override _buildElements(): HTMLInputElement[]
  /** @override */
  override _setValue(value: any): void
  /** @override */
  override _toggleDisabled(disabled: any): void
  #private
}
export type RangePickerInputConfig = {
  min: number
  max: number
  step?: number | undefined
}
export type HTMLRangePickerOptions = {
  /**
   * The slider minimum value.
   */
  min?: number | undefined
  /**
   * The slider maximum value.
   */
  max?: number | undefined
  /**
   * The slider's discrete value increments.
   */
  step?: number | undefined
  /**
   * The slider's starting value.
   */
  value?: number | undefined
}
import type { FormInputConfig } from "../../../common/data/_types.mjs"
import AbstractFormInputElement from "./form-element.mjs"
