/**
 * @import Note from "@client/canvas/placeables/note.mjs";
 * @import JournalEntryCategory from "./journal-entry-category.mjs";
 */
/**
 * The client-side JournalEntry document which extends the common BaseJournalEntry model.
 * @extends BaseJournalEntry
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.collections.Journal}: The world-level collection of JournalEntry documents
 * @see {@link foundry.applications.sheets.journal.JournalEntrySheet}: The JournalEntry sheet
 *   application
 */
export default class JournalEntry extends BaseJournalEntry {
    /**
     * A sorting comparator for JournalEntryCategory documents.
     * @param {JournalEntryCategory} a
     * @param {JournalEntryCategory} b
     * @returns {number}                An integer in the range [-1, 1].
     */
    static sortCategories(a: JournalEntryCategory, b: JournalEntryCategory): number;
    /**
     * A boolean indicator for whether the JournalEntry is visible to the current user in the directory sidebar
     * @type {boolean}
     */
    get visible(): boolean;
    /** @inheritDoc */
    getUserLevel(user: any): CONST.DocumentOwnershipNumber;
    /**
     * Return a reference to the Note instance for this Journal Entry in the current Scene, if any.
     * If multiple notes are placed for this Journal Entry, only the first will be returned.
     * @type {Note|null}
     */
    get sceneNote(): Note | null;
    /**
     * Show the JournalEntry to connected players.
     * By default, the entry will only be shown to players who have permission to observe it.
     * If the parameter force is passed, the entry will be shown to all players regardless of normal permission.
     *
     * @param {boolean} [force=false]    Display the entry to all players regardless of normal permissions
     * @returns {Promise<JournalEntry>}  A Promise that resolves back to the shown entry once the request is processed
     */
    show(force?: boolean): Promise<JournalEntry>;
    /**
     * If the JournalEntry has a pinned note on the canvas, this method will animate to that note
     * The note will also be highlighted as if hovered upon by the mouse
     * @param {object} [options={}]         Options which modify the pan operation
     * @param {number} [options.scale=1.5]          The resulting zoom level
     * @param {number} [options.duration=250]       The speed of the pan animation in milliseconds
     * @returns {Promise<void>}             A Promise which resolves once the pan animation has concluded
     */
    panToNote(options?: {
        scale?: number | undefined;
        duration?: number | undefined;
    }): Promise<void>;
    /** @inheritDoc */
    _onUpdate(changed: any, options: any, userId: any): void;
    /** @inheritDoc */
    _onDelete(options: any, userId: any): void;
}
import BaseJournalEntry from "@common/documents/journal-entry.mjs";
import type Note from "@client/canvas/placeables/note.mjs";
import type JournalEntryCategory from "./journal-entry-category.mjs";
