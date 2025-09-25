/**
 * @import {FormInputConfig} from "../../../common/data/_types.mjs";
 * @import ProseMirrorEditor from "@client/applications/ux/prosemirror-editor.mjs";
 */
/**
 * @typedef ProseMirrorInputConfig
 * @property {boolean} toggled            Is this editor toggled (true) or always active (false)
 * @property {string} [enriched]          If the editor is toggled, provide the enrichedHTML which is displayed while
 *                                        the editor is not active.
 * @property {boolean} collaborate        Does this editor instance support collaborative editing?
 * @property {boolean} compact            Should the editor be presented in compact mode?
 * @property {string} documentUUID        A Document UUID. Required for collaborative editing
 * @property {number} [height]            The height of the editor in pixels
 */
/**
 * @typedef HTMLProseMirrorOptions
 * @property {boolean} [toggled]  Whether the editor's active state is toggled or always active.
 * @property {string} [enriched]  If the editor is toggled, provide enriched HTML which is displayed while the editor is
 *                                not active.
 * @property {string} value       The raw value to edit.
 */
/**
 * A custom HTML element responsible displaying a ProseMirror rich text editor.
 * @extends {AbstractFormInputElement<string>}
 * @fires {Event} open                       Fired when an editor is initialized in the DOM and ready.
 * @fires {Event} close                      Fired when a toggled editor is deactivated.
 * @fires {Event} save                       Fired when the editor is saved.
 * @fires {ProseMirrorPluginsEvent} plugins  Fired when an editor's plugins are being configured.
 */
export default class HTMLProseMirrorElement extends AbstractFormInputElement<string> {
  /**
   * Create a HTMLProseMirrorElement using provided configuration data.
   * @param {FormInputConfig & ProseMirrorInputConfig} config
   * @returns {HTMLProseMirrorElement}
   */
  static create(config: FormInputConfig & ProseMirrorInputConfig): HTMLProseMirrorElement
  constructor({ enriched, toggled, value }?: { enriched: string; toggled: boolean; value: string })
  set open(open: boolean)
  /**
   * Whether the editor is currently open. Always true for non-toggled editors.
   * @type {boolean}
   */
  get open(): boolean
  /** @override */
  override _buildElements(): (HTMLDivElement | HTMLButtonElement)[]
  /**
   * Configure ProseMirror editor plugins.
   * @returns {Record<string, ProseMirror.Plugin>}
   * @protected
   */
  protected _configurePlugins(): Record<string, ProseMirror.Plugin>
  /** @override */
  override _toggleDisabled(disabled: any): void
  /**
   * Determine if the editor has unsaved changes.
   * @returns {boolean}
   */
  isDirty(): boolean
  #private
}
export type ProseMirrorInputConfig = {
  /**
   * Is this editor toggled (true) or always active (false)
   */
  toggled: boolean
  /**
   * If the editor is toggled, provide the enrichedHTML which is displayed while
   *           the editor is not active.
   */
  enriched?: string | undefined
  /**
   * Does this editor instance support collaborative editing?
   */
  collaborate: boolean
  /**
   * Should the editor be presented in compact mode?
   */
  compact: boolean
  /**
   * A Document UUID. Required for collaborative editing
   */
  documentUUID: string
  /**
   * The height of the editor in pixels
   */
  height?: number | undefined
}
export type HTMLProseMirrorOptions = {
  /**
   * Whether the editor's active state is toggled or always active.
   */
  toggled?: boolean | undefined
  /**
   * If the editor is toggled, provide enriched HTML which is displayed while the editor is
   *   not active.
   */
  enriched?: string | undefined
  /**
   * The raw value to edit.
   */
  value: string
}
import type { FormInputConfig } from "../../../common/data/_types.mjs"
import AbstractFormInputElement from "./form-element.mjs"
