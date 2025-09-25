/**
 * @import {ProseMirrorPluginsEvent} from "../../elements/prosemirror-editor.mjs";
 */
/**
 * An Application responsible for displaying a single text-type JournalEntryPage Document, and editing it with a
 * ProseMirror editor.
 * @extends JournalEntryPageTextSheet
 */
export default class JournalEntryPageProseMirrorSheet extends JournalEntryPageTextSheet {
  /** @override */
  static override DEFAULT_OPTIONS: {
    window: {
      icon: string
    }
  }
  /** @inheritDoc */
  static EDIT_PARTS: {
    header: import("../../api/handlebars-application.mjs").HandlebarsTemplatePart
    content: {
      template: string
    }
    footer: import("../../api/handlebars-application.mjs").HandlebarsTemplatePart
  }
  /** @override */
  static override VIEW_PARTS: {
    content: {
      template: string
      root: boolean
    }
  }
  /** @override */
  override _canRender(options: any): boolean
  /** @inheritDoc */
  _prepareContentContext(context: any, options: any): Promise<void>
  /** @override */
  override _isEditorDirty(): any
  /** @inheritDoc */
  _attachFrameListeners(): void
  /**
   * Update the parent sheet if it is open when the server autosaves the contents of this editor.
   * @param {string} content  The updated editor contents.
   * @internal
   */
  _onAutosave(content: string): void
  /**
   * Configure plugins for the ProseMirror instance.
   * @param {ProseMirrorPluginsEvent} event
   * @protected
   */
  protected _onConfigurePlugins(event: ProseMirrorPluginsEvent): void
  /**
   * Update the UI appropriately when receiving new steps from another client.
   * @internal
   */
  _onNewSteps(): void
}
import JournalEntryPageTextSheet from "./journal-entry-page-text-sheet.mjs"
