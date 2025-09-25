/**
 * @import showdown from "showdown"
 * @import {ApplicationRenderContext} from "../../_types.mjs"
 */
/**
 * An abstract Application responsible for displaying and editing a single text-type JournalEntryPage Document.
 * @extends JournalEntryPageHandlebarsSheet
 */
export default class JournalEntryPageTextSheet extends JournalEntryPageHandlebarsSheet {
  /** @override */
  static override DEFAULT_OPTIONS: {
    classes: string[]
    includeTOC: boolean
  }
  /**
   * Bi-directional HTML <-> Markdown converter.
   * @type {showdown.Converter}
   * @protected
   */
  protected static _converter: showdown.Converter
  /**
   * The format used to edit text content in this sheet.
   * @type {number}
   */
  static format: number
  /**
   * Determine if any editors have unsaved changes.
   * @returns {boolean}
   * @abstract
   * @protected
   */
  protected _isEditorDirty(): boolean
  #private
}
import JournalEntryPageHandlebarsSheet from "./journal-entry-page-hbs-sheet.mjs"
