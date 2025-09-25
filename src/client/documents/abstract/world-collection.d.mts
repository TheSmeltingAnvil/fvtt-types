/**
 * @import Collection from "@common/utils/collection.mjs";
 * @import Document from "@common/abstract/document.mjs";
 * @import DocumentDirectory from "../../applications/sidebar/document-directory.mjs";
 * @import CompendiumCollection from "../collections/compendium-collection.mjs";
 * @import {FromCompendiumOptions} from "../../_types.mjs";
 * @import Folder from "../folder.mjs";
 */
/**
 * A collection of world-level Document objects with a singleton instance per primary Document type.
 * Each primary Document type has an associated subclass of WorldCollection which contains them.
 * @template {Document} TDocument
 * @extends DocumentCollection<TDocument>
 * @abstract
 * @category Collections
 *
 * @see {@link foundry.Game#collections}
 */
export default class WorldCollection<TDocument extends Document> extends DocumentCollection<TDocument> {
    /**
     * Return a reference to the singleton instance of this WorldCollection, or null if it has not yet been created.
     * @type {WorldCollection}
     */
    static get instance(): WorldCollection<any>;
    /**
     * Register a Document sheet class as a candidate which can be used to display Documents of a given type.
     * See {@link foundry.applications.apps.DocumentSheetConfig.registerSheet} for details.
     * @param {Array<*>} args      Arguments forwarded to the DocumentSheetConfig.registerSheet method
     *
     * @example Register a new ActorSheet subclass for use with certain Actor types.
     * ```js
     * foundry.documents.collections.Actors.registerSheet("dnd5e", ActorSheet5eCharacter, {
     *   types: ["character],
     *   makeDefault: true
     * });
     * ```
     */
    static registerSheet(...args: Array<any>): void;
    /**
     * Unregister a Document sheet class, removing it from the list of available sheet Applications to use.
     * See {@link foundry.applications.apps.DocumentSheetConfig.unregisterSheet} for detauls.
     * @param {Array<*>} args      Arguments forwarded to the DocumentSheetConfig.unregisterSheet method
     *
     * @example Deregister the default ActorSheet subclass to replace it with others.
     * ```js
     * foundry.documents.collections.Actors.unregisterSheet("core", ActorSheet);
     * ```
     */
    static unregisterSheet(...args: Array<any>): void;
    /**
     * Return an array of currently registered sheet classes for this Document type.
     * @type {DocumentSheet[]}
     */
    static get registeredSheets(): DocumentSheet[];
    /**
     * Reference the set of Folders which contain documents in this collection
     * @type {Collection<string, Folder>}
     */
    get folders(): Collection<string, Folder>;
    /**
     * Return a reference to the SidebarDirectory application for this WorldCollection.
     * @type {DocumentDirectory}
     */
    get directory(): DocumentDirectory;
    /** @override */
    override _getVisibleTreeContents(entry: any): TDocument[];
    /**
     * Import a Document from a Compendium collection, adding it to the current World.
     * @param {CompendiumCollection} pack The CompendiumCollection instance from which to import
     * @param {string} id             The ID of the compendium entry to import
     * @param {object} [updateData]   Optional additional data used to modify the imported Document before it is created
     * @param {object} [options]      Optional arguments passed to the
     *                                {@link foundry.documents.abstract.WorldCollection#fromCompendium} and
     *                                {@link foundry.abstract.Document.create} methods
     * @returns {Promise<TDocument>}  The imported Document instance
     */
    importFromCompendium(pack: CompendiumCollection<any>, id: string, updateData?: object, options?: object): Promise<TDocument>;
    /**
     * Apply data transformations when importing a Document from a Compendium pack
     * @param {TDocument|object} document        The source Document, or a plain data object
     * @param {FromCompendiumOptions} [options]  Additional options which modify how the document is imported
     * @returns {object}                         The processed data ready for world Document creation
     */
    fromCompendium(document: TDocument | object, { clearFolder, clearState, clearSort, clearOwnership, keepId, ...rest }?: FromCompendiumOptions): object;
}
import type Document from "@common/abstract/document.mjs";
import DocumentCollection from "./document-collection.mjs";
import type Folder from "../folder.mjs";
import type Collection from "@common/utils/collection.mjs";
import type DocumentDirectory from "../../applications/sidebar/document-directory.mjs";
import type CompendiumCollection from "../collections/compendium-collection.mjs";
import type { FromCompendiumOptions } from "../../_types.mjs";
