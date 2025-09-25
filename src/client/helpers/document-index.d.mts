/**
 * @import {StringTreeEntryFilter, StringTreeNode, WordTreeEntry} from "@common/utils/_types.mjs";
 */
/**
 * This class is responsible for indexing all documents available in the world.
 * Stores documents using a word tree structure that allows for efficient searching.
 */
export default class DocumentIndex {
    /**
     * Check if the given entry meets the given ownership requirements.
     * @param {WordTreeEntry} entry                         The candidate entry.
     * @param {DOCUMENT_OWNERSHIP_LEVELS|string} ownership  The ownership.
     * @returns {boolean}
     */
    static #filterEntryForOwnership({ uuid, pack }: WordTreeEntry, ownership: DOCUMENT_OWNERSHIP_LEVELS | string): boolean;
    /**
     * Returns a Promise that resolves when the indexing process is complete.
     * @returns {Promise<void>|null}
     */
    get ready(): Promise<void> | null;
    /**
     * Index all available documents in the world and store them in a word tree.
     * @returns {Promise<void>}
     */
    index(): Promise<void>;
    /**
     * Return entries that match the given string prefix.
     * @param {string} prefix                     The prefix.
     * @param {object} [options]                  Additional options to configure behaviour.
     * @param {string[]} [options.documentTypes]  Optionally provide an array of document types. Only entries of that type
     *                                            will be searched for.
     * @param {number} [options.limit=10]         The maximum number of items per document type to retrieve. It is
     *                                            important to set this value as very short prefixes will naturally match
     *                                            large numbers of entries.
     * @param {StringTreeEntryFilter} [options.filterEntries]         A filter function to apply to each candidate entry.
     * @param {DOCUMENT_OWNERSHIP_LEVELS|string} [options.ownership]  Only return entries that the user meets this
     *                                                                ownership level for.
     * @returns {Record<string, WordTreeEntry[]>} A number of entries that have the given prefix, grouped by document
     *                                            type.
     */
    lookup(prefix: string, { limit, documentTypes, ownership, filterEntries }?: {
        documentTypes?: string[] | undefined;
        limit?: number | undefined;
        filterEntries?: StringTreeEntryFilter | undefined;
        ownership?: DOCUMENT_OWNERSHIP_LEVELS | string;
    }): Record<string, WordTreeEntry[]>;
    /**
     * Add an entry to the index.
     * @param {Document} doc  The document entry.
     */
    addDocument(doc: Document): void;
    /**
     * Remove an entry from the index.
     * @param {Document} doc  The document entry.
     */
    removeDocument(doc: Document): void;
    /**
     * Replace an entry in the index with an updated one.
     * @param {Document} doc  The document entry.
     */
    replaceDocument(doc: Document): void;
    /**
     * Add a leaf node to the word tree index.
     * @param {Document|object} doc                  The document or compendium index entry to add.
     * @param {object} [options]                     Additional information for indexing.
     * @param {CompendiumCollection} [options.pack]  The compendium that the index belongs to.
     * @protected
     */
    protected _addLeaf(doc: Document | object, { pack }?: {
        pack?: any;
    }): void;
    /**
     * Aggregate the compendium index and add it to the word tree index.
     * @param {CompendiumCollection} pack  The compendium pack.
     * @protected
     */
    protected _indexCompendium(pack: CompendiumCollection): void;
    /**
     * Add all of a parent document's embedded documents to the index.
     * @param {Document} parent  The parent document.
     * @protected
     */
    protected _indexEmbeddedDocuments(parent: Document): void;
    /**
     * Aggregate all documents and embedded documents in a world collection and add them to the index.
     * @param {string} documentName  The name of the documents to index.
     * @protected
     */
    protected _indexWorldCollection(documentName: string): void;
    #private;
}
import type { StringTreeEntryFilter } from "@common/utils/_types.mjs";
import type { WordTreeEntry } from "@common/utils/_types.mjs";
