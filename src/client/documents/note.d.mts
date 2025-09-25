/**
 * @import JournalEntry from "./journal-entry.mjs";
 * @import JournalEntryPage from "./journal-entry-page.mjs";
 */
/**
 * The client-side Note document which extends the common BaseNote document model.
 * @extends BaseNote
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.Scene}: The Scene document type which contains Note documents
 * @see {@link foundry.applications.sheets.NoteConfig}: The Note configuration application
 */
export default class NoteDocument extends BaseNote {
  /** @inheritDoc */
  static createDialog(noteData?: object, createOptions?: object, dialogOptions?: object): Promise<any>
  /**
   * The associated JournalEntry which is referenced by this Note
   * @type {JournalEntry}
   */
  get entry(): JournalEntry
  /**
   * The specific JournalEntryPage within the associated JournalEntry referenced by this Note.
   * @type {JournalEntryPage}
   */
  get page(): JournalEntryPage
  /**
   * The text label used to annotate this Note
   * @type {string}
   */
  get label(): string
}
import BaseNote from "@common/documents/note.mjs"
import type JournalEntryPage from "./journal-entry-page.mjs"
import type JournalEntry from "./journal-entry.mjs"
