/**
 * An Application responsible for displaying and editing a single pdf-type JournalEntryPage Document.
 * @extends JournalEntryPageHandlebarsSheet
 */
export default class JournalEntryPagePDFSheet extends JournalEntryPageHandlebarsSheet {
  /** @override */
  static override DEFAULT_OPTIONS: {
    classes: string[]
    window: {
      icon: string
    }
  }
  /** @inheritDoc */
  static EDIT_PARTS: {
    header: import("../../api/handlebars-application.mjs").HandlebarsTemplatePart
    content: {
      template: string
      classes: string[]
    }
    footer: import("../../api/handlebars-application.mjs").HandlebarsTemplatePart
  }
  /** @inheritDoc */
  static VIEW_PARTS: {
    content: {
      template: string
      root: boolean
    }
  }
  /**
   * Maintain a cache of PDF sizes to avoid making HEAD requests every render.
   * @type {Record<string, number>}
   * @protected
   */
  protected static _sizes: Record<string, number>
  /** @inheritDoc */
  _prepareContentContext(context: any, options: any): Promise<void>
  /**
   * Handle a request to load a PDF.
   * @param {PointerEvent} event  The triggering event.
   * @protected
   */
  protected _onLoadPDF(event: PointerEvent): void
  /**
   * Marshall URL query parameters to pass to the PDF viewer.
   * @returns {URLSearchParams}
   * @protected
   */
  protected _getViewerParams(): URLSearchParams
  #private
}
import JournalEntryPageHandlebarsSheet from "./journal-entry-page-hbs-sheet.mjs"
