/**
 * @import JournalEntry from "@client/documents/journal-entry.mjs";
 */
/**
 * The World Journal.
 * @extends {DocumentDirectory<JournalEntry>}
 */
export default class JournalDirectory extends DocumentDirectory<JournalEntry> {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        collection: string;
    };
    constructor(options: any);
    /** @inheritDoc */
    _getEntryContextOptions(): (import("../../ux/context-menu.mjs").ContextMenuEntry | {
        name: string;
        icon: string;
        condition: (li: any) => boolean;
        callback: (li: any) => any;
    })[];
}
import type JournalEntry from "@client/documents/journal-entry.mjs";
import DocumentDirectory from "../document-directory.mjs";
