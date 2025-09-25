/**
 * @import {ApplicationV1Options} from "../api/application-v1.mjs";
 * @import {DocumentSheetV1Options} from "../api/document-sheet-v1.mjs";
 */
/**
 * The Application responsible for displaying and editing a single JournalEntryPage document.
 * @deprecated since v13
 * @param {JournalEntryPage} object         The JournalEntryPage instance which is being edited.
 * @param {ApplicationV1Options & DocumentSheetV1Options} [options]  Application options.
 */
export class JournalPageSheet extends DocumentSheet {
  /** @inheritdoc */
  static get defaultOptions(): object
  /**
   * Indicates that the sheet renders with App V2 rather than V1.
   * @type {boolean}
   */
  static isV2: boolean
  /**
   * Indicates that the sheet renders with App V2 rather than V1.
   * @type {boolean}
   */
  isV2: boolean
  /** @inheritdoc */
  get title(): any
  /**
   * The table of contents for this JournalTextPageSheet.
   * @type {Record<string, JournalEntryPageHeading>}
   */
  toc: Record<string, JournalEntryPageHeading>
  /** @inheritdoc */
  getData(options?: object): object
  /**
   * A method called by the journal sheet when the view mode of the page sheet is closed.
   * @internal
   */
  _closeView(): void
  /** @inheritdoc */
  _getSecretContent(secret: any): any
  /** @inheritdoc */
  _updateSecret(secret: any, content: any): any
  /**
   * Update the parent sheet if it is open when the server autosaves the contents of this editor.
   * @param {string} html  The updated editor contents.
   * @internal
   */
  _onAutosave(html: string): void
  /**
   * Update the UI appropriately when receiving new steps from another client.
   * @internal
   */
  _onNewSteps(): void
}
/**
 * The Application responsible for displaying and editing a single JournalEntryPage text document.
 * @extends {JournalPageSheet}
 */
export class JournalTextPageSheet extends JournalPageSheet {
  /**
   * Bi-directional HTML <-> Markdown converter.
   * @type {showdown.Converter}
   * @protected
   */
  protected static _converter: showdown.Converter
  /**
   * Declare the format that we edit text content in for this sheet so we can perform conversions as necessary.
   * @type {number}
   */
  static get format(): number
  /** @inheritdoc */
  getData(options?: object): Promise<object>
  /** @inheritdoc */
  _render(force: any, options: any): Promise<void>
  /**
   * Determine if any editors are dirty.
   * @returns {boolean}
   */
  isEditorDirty(): boolean
  /** @inheritDoc */
  saveEditor(
    name: any,
    {
      preventRender,
      ...options
    }?: {
      preventRender?: boolean | undefined
    },
  ): Promise<void>
  /**
   * Lazily convert text formats if we detect the document being saved in a different format.
   * @param {object} renderData  Render data.
   * @protected
   */
  protected _convertFormats(renderData: object): void
  #private
}
/**
 * A subclass of {@link foundry.appv1.sheets.JournalTextPageSheet} that implements a TinyMCE editor.
 * @extends {JournalTextPageSheet}
 * @deprecated since v13 until v14
 */
export class JournalTextTinyMCESheet extends JournalTextPageSheet {}
import DocumentSheet from "../api/document-sheet-v1.mjs"
