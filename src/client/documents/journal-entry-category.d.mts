/**
 * The client-side JournalEntryCategory document which extends the common BaseJournalEntryCategory model.
 * @extends BaseJournalEntryCategory
 * @mixes ClientDocumentMixin
 * @category Documents
 */
export default class JournalEntryCategory extends BaseJournalEntryCategory {
    /** @inheritDoc */
    prepareDerivedData(): void;
}
import BaseJournalEntryCategory from "@common/documents/journal-entry-category.mjs";
