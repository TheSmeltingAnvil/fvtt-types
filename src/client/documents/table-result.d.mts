/**
 * The client-side TableResult document which extends the common BaseTableResult document model.
 * @extends BaseTableResult
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.RollTable}: The RollTable document type which contains TableResult
 *   documents
 */
export default class TableResult extends BaseTableResult {
    /**
     * A path reference to the icon image used to represent this result
     * @type {string}
     */
    get icon(): string;
    /** @override */
    override prepareBaseData(): void;
    /**
     * Prepare a string representation for this result.
     * @returns {Promise<string>} The enriched text to display
     */
    getHTML(): Promise<string>;
    /**
     * Create a content-link anchor from this Result's referenced Document.
     * @returns {HTMLAnchorElement|null}
     */
    documentToAnchor(): HTMLAnchorElement | null;
    /** @inheritDoc */
    _preUpdate(changes: any, options: any, user: any): Promise<boolean | void>;
    /**
     * @deprecated since V13
     * @ignore
     */
    getChatText(): any;
    #private;
}
import BaseTableResult from "@common/documents/table-result.mjs";
