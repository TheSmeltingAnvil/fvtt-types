/**
 * An Application responsible for displaying a single text-type JournalEntryPage Document, and editing it with a
 * Markdown editor.
 * @extends JournalEntryPageTextSheet
 */
export default class JournalEntryPageMarkdownSheet extends JournalEntryPageTextSheet {
  /** @override */
  static override DEFAULT_OPTIONS: {
    window: {
      contentClasses: string[]
      icon: string
    }
  }
  /** @inheritDoc */
  static EDIT_PARTS: {
    header: import("../../api/handlebars-application.mjs").HandlebarsTemplatePart
    content: {
      classes: string[]
      template: string
    }
    footer: import("../../api/handlebars-application.mjs").HandlebarsTemplatePart
  }
  /** @override */
  static override VIEW_PARTS: {
    content: {
      root: boolean
      template: string
    }
  }
  /** @override */
  static override format: 2
  /** @inheritDoc */
  _prepareContentContext(context: any, options: any): Promise<void>
  /** @inheritDoc */
  _preSyncPartState(partId: any, newElement: any, priorElement: any, state: any): void
  /** @inheritDoc */
  _syncPartState(partId: any, newElement: any, priorElement: any, state: any): void
  /** @inheritDoc */
  _attachFrameListeners(): void
  /**
   * Handle dropping something onto the markdown editor.
   * @param {DragEvent} event  The triggering event.
   * @protected
   */
  protected _onDrop(event: DragEvent): Promise<void> | undefined
  /**
   * Handle dropping a content link onto the markdown editor.
   * @param {DragEvent} event   The originating drop event.
   * @param {object} eventData  The parsed event data.
   * @protected
   * @returns {Promise<void>}
   */
  protected _onDropContentLink(event: DragEvent, eventData: object): Promise<void>
  #private
}
import JournalEntryPageTextSheet from "./journal-entry-page-text-sheet.mjs"
