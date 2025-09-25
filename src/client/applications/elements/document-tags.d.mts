/**
 * @import {FormInputConfig} from "@common/data/_types.mjs";
 */
/**
 * @typedef DocumentTagsInputConfig
 * @property {string} [type]      A specific document type in CONST.ALL_DOCUMENT_TYPES
 * @property {boolean} [single]   Only allow referencing a single document. In this case the submitted form value will
 *                                be a single UUID string rather than an array
 * @property {number} [max]       Only allow attaching a maximum number of documents
 */
/**
 * @typedef HTMLDocumentTagsOptions
 * @property {string[]} [values]  An array of Document UUIDs to initialize the element with.
 */
/**
 * A custom HTMLElement used to render a set of associated Documents referenced by UUID.
 * @extends {AbstractFormInputElement<string|string[]|null>}
 */
export default class HTMLDocumentTagsElement extends AbstractFormInputElement<string | string[] | null> {
  /**
   * Create an HTML string fragment for a single document tag.
   * @param {string} uuid              The document UUID
   * @param {string} name              The document name
   * @param {boolean} [editable=true]  Is the tag editable?
   * @returns {HTMLDivElement}
   */
  static renderTag(uuid: string, name: string, editable?: boolean): HTMLDivElement
  /**
   * Create a HTMLDocumentTagsElement using provided configuration data.
   * @param {FormInputConfig & DocumentTagsInputConfig} config
   * @returns {HTMLDocumentTagsElement}
   */
  static create(config: FormInputConfig & DocumentTagsInputConfig): HTMLDocumentTagsElement
  /**
   * @param {HTMLDocumentTagsOptions} [options]
   */
  constructor({ values }?: HTMLDocumentTagsOptions)
  /**
   * @override
   * @type {Record<string, string>}
   * @protected
   */
  // @ts-expect-error -- IGNORE --
  protected override _value: Record<string, string>
  set type(value: string | null)
  /**
   * Restrict this element to documents of a particular type.
   * @type {string|null}
   */
  get type(): string | null
  set single(value: boolean)
  /**
   * Restrict to only allow referencing a single Document instead of an array of documents.
   * @type {boolean}
   */
  get single(): boolean
  set max(value: number)
  /**
   * Allow a maximum number of documents to be tagged to the element.
   * @type {number}
   */
  get max(): number
  /**
   * Initialize innerText or an initial value attribute of the element as a serialized JSON array.
   * @param {string[]} [values]  An array of Document UUIDs to initialize the element with.
   * @protected
   */
  protected _initializeTags(values?: string[]): void
  /** @override */
  override _buildElements(): (HTMLDivElement | HTMLButtonElement)[]
  /** @override */
  override _getValue(): string | string[]
  /** @override */
  override _setValue(value: any): void
  /** @override */
  override _toggleDisabled(disabled: any): void
  #private
}
export type DocumentTagsInputConfig = {
  /**
   * A specific document type in CONST.ALL_DOCUMENT_TYPES
   */
  type?: string | undefined
  /**
   * Only allow referencing a single document. In this case the submitted form value will
   *    be a single UUID string rather than an array
   */
  single?: boolean | undefined
  /**
   * Only allow attaching a maximum number of documents
   */
  max?: number | undefined
}
export type HTMLDocumentTagsOptions = {
  /**
   * An array of Document UUIDs to initialize the element with.
   */
  values?: string[] | undefined
}
import type { FormInputConfig } from "@common/data/_types.mjs"
import AbstractFormInputElement from "./form-element.mjs"
