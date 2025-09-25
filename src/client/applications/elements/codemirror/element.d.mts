/**
 * @import {CodeMirrorInputConfig, CodeMirrorLanguage, FormInputConfig} from "@common/data/_types.mjs";
 * @import {Point} from "@common/_types.mjs";
 */
/**
 * @typedef HTMLCodeMirrorOptions
 * @property {string} [value]  The initial editor contents.
 */
/**
 * A custom HTML element responsible for displaying a CodeMirror rich text editor.
 * @extends {AbstractFormInputElement<string>}
 */
export default class HTMLCodeMirrorElement extends AbstractFormInputElement<string> {
  /**
   * @override
   * @type {"code-mirror"}
   */
  static override tagName: "code-mirror"
  /**
   * Create an HTMLCodeMirrorElement element for a StringField (typically a JSONField or JavascriptField).
   * @param {FormInputConfig<string> & CodeMirrorInputConfig} config
   * @returns {HTMLCodeMirrorElement}
   */
  static create(config: FormInputConfig<string> & CodeMirrorInputConfig): HTMLCodeMirrorElement
  /**
   * @param {HTMLCodeMirrorOptions} [options]
   */
  constructor({ value }?: HTMLCodeMirrorOptions)
  /**
   * The position of the cursor.
   * @type {number|null}
   */
  get cursor(): number | null
  /**
   * Set this element's language attribute.
   * @param {CodeMirrorLanguage} value
   */
  set language(value: CodeMirrorLanguage)
  /**
   * This element's language attribute or its default if no value is set
   * @type {CodeMirrorLanguage}
   */
  get language(): CodeMirrorLanguage
  /**
   * Set this element's indent attribute.
   * @param {number} value
   */
  set indent(value: number)
  /**
   * This element's indent attribute, which determines the number of spaces added upon pressing the TAB key.
   * A value of 0 disables this feature entirely.
   * @returns {number}
   */
  get indent(): number
  /**
   * Set the editor's managed attribute.
   * @param {boolean} value
   */
  set managed(value: boolean)
  /**
   * Whether the editor is externally managed by some other process that takes responsibility for its contents and for
   * firing events. If not set, the editor will fire its own events.
   * @type {boolean}
   */
  get managed(): boolean
  /**
   * Set this element's nowrap attribute.
   * @param {boolean} value
   */
  set nowrap(value: boolean)
  /**
   * The element's nowrap attribute, which if present disables line-wrapping
   * @returns {boolean}
   */
  get nowrap(): boolean
  /** @override */
  override _getValue(): any
  /** @inheritDoc */
  _setValue(value: any): void
  /**
   * Given screen co-ordinates, returns the position in the editor's text content at those co-ordinates.
   * @param {Point} coords  The screen co-ordinates.
   * @returns {number}
   */
  posAtCoords(coords: Point): number
  /** @inheritDoc */
  scrollTo(options?: ScrollToOptions | undefined): void
  scrollTo(x: number, y: number): void
  /** @override */
  override _buildElements(): any[]
  #private
}
export type HTMLCodeMirrorOptions = {
  /**
   * The initial editor contents.
   */
  value?: string | undefined
}
import type { Point } from "@common/_types.mjs"
import type { CodeMirrorInputConfig, CodeMirrorLanguage, FormInputConfig } from "@common/data/_types.mjs"
import AbstractFormInputElement from "../form-element.mjs"
