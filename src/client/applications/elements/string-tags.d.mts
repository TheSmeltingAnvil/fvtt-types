/**
 * @import {FormInputConfig} from "../../../common/data/_types.mjs";
 */
/**
 * @typedef StringTagsInputConfig
 * @property {boolean} slug               Automatically slugify provided strings?
 */
/**
 * @typedef HTMLStringTagsOptions
 * @property {boolean} [slug]     Whether to automatically slugify all strings provided to the element.
 * @property {string[]} [values]  An array of initial values.
 */
/**
 * A custom HTML element which allows for arbitrary assignment of a set of string tags.
 * This element may be used directly or subclassed to impose additional validation or functionality.
 * @extends {AbstractFormInputElement<Set<string>>}
 */
export default class HTMLStringTagsElement extends AbstractFormInputElement<Set<string>> {
  static icons: {
    add: string
    remove: string
  }
  static labels: {
    add: string
    remove: string
    placeholder: string
  }
  /**
   * Render the tagged string as an HTML element.
   * @param {string} tag        The raw tag value
   * @param {string} [label]    An optional tag label
   * @param {boolean} [editable=true]  Is the tag editable?
   * @returns {HTMLDivElement}  A rendered HTML element for the tag
   */
  static renderTag(tag: string, label?: string, editable?: boolean): HTMLDivElement
  /**
   * Create a HTMLStringTagsElement using provided configuration data.
   * @param {FormInputConfig & StringTagsInputConfig} config
   */
  static create(config: FormInputConfig & StringTagsInputConfig): HTMLStringTagsElement
  /**
   * @param {HTMLStringTagsOptions} [options]
   */
  constructor({ slug, values }?: HTMLStringTagsOptions)
  /** @override */
  override _value: Set<any>
  /**
   * Initialize innerText or an initial value attribute of the element as a comma-separated list of currently assigned
   * string tags.
   * @param {string[]} [values]  An array of initial values.
   * @protected
   */
  protected _initializeTags(values?: string[]): void
  /**
   * Subclasses may impose more strict validation on what tags are allowed.
   * @param {string} tag      A candidate tag
   * @throws {Error}          An error if the candidate tag is not allowed
   * @protected
   */
  protected _validateTag(tag: string): void
  /** @override */
  override _buildElements(): (HTMLDivElement | HTMLButtonElement)[]
  /** @override */
  override _getValue(): Set<string>
  /** @override */
  override _setValue(value: any): void
  /** @override */
  override _toggleDisabled(disabled: any): void
  #private
}
export type StringTagsInputConfig = {
  /**
   * Automatically slugify provided strings?
   */
  slug: boolean
}
export type HTMLStringTagsOptions = {
  /**
   * Whether to automatically slugify all strings provided to the element.
   */
  slug?: boolean | undefined
  /**
   * An array of initial values.
   */
  values?: string[] | undefined
}
import type { FormInputConfig } from "../../../common/data/_types.mjs"
import AbstractFormInputElement from "./form-element.mjs"
