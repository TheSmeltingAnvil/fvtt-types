/**
 * @import {ApplicationRenderContext} from "../../_types.mjs"
 * @import {HandlebarsTemplatePart, HandlebarsRenderOptions} from "../../api/handlebars-application.mjs"
 */
/**
 * An abstract subclass that contains specialised handlebars logic for JournalEntryPageSheets.
 * @extends JournalEntryPageSheet
 * @mixes HandlebarsApplication
 */
export default class JournalEntryPageHandlebarsSheet extends JournalEntryPageSheet {
  /**
   * Handlebars parts to render in edit mode.
   * @type {Record<string, HandlebarsTemplatePart>}
   */
  static EDIT_PARTS: Record<string, HandlebarsTemplatePart>
  /**
   * Handlebars part to render in view mode.
   * @type {Record<string, HandlebarsTemplatePart>}
   */
  static VIEW_PARTS: Record<string, HandlebarsTemplatePart>
  /** @override */
  override _configureRenderParts(options: any): any
  /**
   * Prepare render context for the content part.
   * @param {ApplicationRenderContext} context
   * @param {HandlebarsRenderOptions} options
   * @returns {Promise<void>}
   * @protected
   */
  protected _prepareContentContext(context: ApplicationRenderContext, options: HandlebarsRenderOptions): Promise<void>
  /** @inheritDoc */
  _preparePartContext(partId: any, context: any, options: any): Promise<any>
  /**
   * Prepare render context for the footer part.
   * @param {ApplicationRenderContext} context
   * @param {HandlebarsRenderOptions} options
   * @returns {Promise<void>}
   * @protected
   */
  protected _prepareFooterContext(context: ApplicationRenderContext, options: HandlebarsRenderOptions): Promise<void>
  /**
   * Prepare render context for the header part.
   * @param {ApplicationRenderContext} context
   * @param {HandlebarsRenderOptions} options
   * @returns {Promise<void>}
   * @protected
   */
  protected _prepareHeaderContext(context: ApplicationRenderContext, options: HandlebarsRenderOptions): Promise<void>
  /** @inheritDoc */
  _prepareSubmitData(event: any, form: any, formData: any, updateData: any): any
}
import type { ApplicationRenderContext } from "../../_types.mjs"
import type { HandlebarsRenderOptions, HandlebarsTemplatePart } from "../../api/handlebars-application.mjs"
import JournalEntryPageSheet from "./journal-entry-page-sheet.mjs"
