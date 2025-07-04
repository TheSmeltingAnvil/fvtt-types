import { JournalEntryPageHeading } from "foundry/documents/JournalEntryPage.js"
import { DocumentSheet } from "foundry/appv1/api/_module.js"
import { DocumentSheetV1Options } from "foundry/types.js"
import { EditorCreateOptions } from "foundry/applications/ux/ProseMirrorEditor.js"

/**
 * The Application responsible for displaying and editing a single JournalEntryPage document.
 * @param object    The JournalEntryPage instance which is being edited.
 * @param [options] Application options.
 */
export default class JournalPageSheet<
  TDocument extends JournalEntryPage<JournalEntry | null>,
> extends DocumentSheet<TDocument> {
  /** The table of contents for this JournalTextPageSheet. */
  toc: Record<string, JournalEntryPageHeading>

  // @ts-expect-error Should fix.
  static override get defaultOptions(): DocumentSheetV1Options

  //override get template(): string

  //override get title(): string

  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  //override getData(
  //  options?: Partial<DocumentSheetV1Options>,
  //): DocumentSheetData<TDocument> | Promise<DocumentSheetData<TDocument>>

  //protected override _renderInner(data: DocumentSheetData<TDocument>, options: AppV1RenderOptions): Promise<JQuery>

  /* -------------------------------------------- */
  /*  Text Secrets Management                     */
  /* -------------------------------------------- */

  //protected override _getSecretContent(secret: HTMLElement): string

  //protected override _updateSecret(secret: HTMLElement, content: string): Promise<TDocument>

  /* -------------------------------------------- */
  /*  Text Editor Integration                     */
  /* -------------------------------------------- */

  //override activateEditor(
  //  name: string,
  //  options?: EditorCreateOptions,
  //  initialContent?: string,
  //): Promise<TinyMCE.Editor | EditorView>

  /**
   * Update the parent sheet if it is open when the server autosaves the contents of this editor.
   * @param html The updated editor contents.
   */
  onAutosave(html: string): void

  /** Update the UI appropriately when receiving new steps from another client. */
  onNewSteps(): void
}

/** The Application responsible for displaying and editing a single JournalEntryPage image document. */
export class JournalImagePageSheet<
  TDocument extends JournalEntryPage<JournalEntry | null>,
> extends JournalPageSheet<TDocument> {
  static override get defaultOptions(): DocumentSheetV1Options
}

export class JournalTextPageSheet<
  TDocument extends JournalEntryPage<JournalEntry | null>,
> extends JournalPageSheet<TDocument> {
  /** Bi-directional HTML <-> Markdown converter. */
  protected static _converter: object

  /**
   * Declare the format that we edit text content in for this sheet so we can perform conversions as necessary.
   */
  static get format(): number

  static override get defaultOptions(): DocumentSheetV1Options

  //override getData(options?: Partial<DocumentSheetV1Options>): Promise<DocumentSheetData<TDocument>>

  //override close(options?: { force?: boolean }): Promise<void>

  //protected override _render(force: boolean, options: AppV1RenderOptions): Promise<void>

  /** Determine if any editors are dirty. */
  isEditorDirty(): boolean

  protected _updateObject(event: Event, formData: Record<string, unknown>): Promise<void>

  /**
   * Lazily convert text formats if we detect the document being saved in a different format.
   * @param renderData Render data.
   */
  protected _convertFormats(renderData?: Record<string, unknown>): void
}

export class JournalTextTinyMCESheet<
  TDocument extends JournalEntryPage<JournalEntry | null>,
> extends JournalTextPageSheet<TDocument> {
  //override getData(options?: DocumentSheetV1Options): Promise<DocumentSheetData<TDocument>>
  //override close(options?: { force?: boolean }): Promise<void>
  //protected override _render(force?: boolean, options?: AppV1RenderOptions): Promise<void>
}

export interface JournalTextTinyMCESheet<TDocument extends JournalEntryPage<JournalEntry | null>>
  extends JournalTextPageSheet<TDocument> {
  // @ts-expect-error Should fix.
  activateEditor(name: string, options?: EditorCreateOptions, initialContent?: string): Promise<TinyMCE.Editor>
}
