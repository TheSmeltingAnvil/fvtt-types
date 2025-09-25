/**
 * @import {DocumentSheetConfiguration, DocumentSheetRenderOptions} from "../../api/document-sheet.mjs";
 * @import {JournalEntryPageHeading} from "@client/_types.mjs";
 */
/**
 * @typedef {DocumentSheetConfiguration} JournalPageSheetConfiguration
 * @property {boolean} [includeTOC]  Whether the sheet includes additional table of contents elements besides its title.
 * @property {"edit"|"view"} [mode]  Whether the sheet is in edit or view mode.
 * @property {string} [viewClasses]  Classes appended to the page's root element when embedded in another sheet in view
 *                                   mode.
 */
/**
 * An abstract Application responsible for displaying and editing a single JournalEntryPage Document.
 * @extends {DocumentSheetV2<JournalPageSheetConfiguration, DocumentSheetRenderOptions>}
 * @mixes HandlebarsApplication
 */
export default class JournalEntryPageSheet {
  /** @override */
  static override DEFAULT_OPTIONS: {
    classes: string[]
    includeTOC: boolean
    mode: string
    viewPermission: 2
    viewClasses: never[]
    window: {
      resizable: boolean
    }
    position: {
      width: number
      height: number
    }
    form: {
      submitOnChange: boolean
    }
  }
  /** @inheritDoc */
  static emittedEvents: readonly [...unknown[], "closeView"]
  /**
   * Indicates that the sheet renders with App V2 rather than V1.
   * @type {boolean}
   */
  static isV2: boolean
  /**
   * The table of contents for this text page.
   * @type {Record<string, JournalEntryPageHeading>}
   */
  toc: Record<string, JournalEntryPageHeading>
  /**
   * Indicates that the sheet renders with App V2 rather than V1.
   * @type {boolean}
   */
  isV2: boolean
  /**
   * Whether the sheet is in view mode.
   * @returns {boolean}
   */
  get isView(): boolean
  /**
   * The JournalEntryPage for this sheet.
   * @returns {JournalEntryPage}
   */
  get page(): JournalEntryPage
  /** @inheritDoc */
  _insertElement(element: any): void
  /** @inheritDoc */
  _prepareContext(options: any): Promise<any>
  /**
   * Prepare heading level choices.
   * @returns {Record<string, string>}
   * @protected
   */
  protected _prepareHeadingLevels(): Record<string, string>
  /**
   * Actions performed when this sheet is closed in some parent view.
   * @protected
   */
  protected _onCloseView(): void
  /** @inheritDoc */
  _onRender(context: any, options: any): Promise<void>
}
export type JournalPageSheetConfiguration = DocumentSheetConfiguration
import type { JournalEntryPageHeading } from "@client/_types.mjs"
import JournalEntryPage from "@client/documents/journal-entry-page.mjs"
import type { DocumentSheetConfiguration } from "../../api/document-sheet.mjs"
