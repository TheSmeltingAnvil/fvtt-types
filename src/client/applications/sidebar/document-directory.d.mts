/**
 * @import {HandlebarsRenderOptions} from "../api/handlebars-application.mjs"
 * @import {ApplicationConfiguration, ApplicationRenderContext} from "../_types.mjs"
 * @import {ContextMenuEntry} from "../ux/context-menu.mjs";
 * @import {Constructor} from "@common/_types.mjs";
 */
/**
 * @typedef _DocumentDirectoryConfiguration
 * @property {DirectoryCollection} collection  The Document collection that this directory represents.
 * @property {string[]} renderUpdateKeys       Updating one of these properties of a displayed Document will trigger a
 *                                             re-render of the tab.
 */
/**
 * @typedef {ApplicationConfiguration & _DocumentDirectoryConfiguration} DocumentDirectoryConfiguration
 */
/**
 * An abstract class for rendering a foldered directory of Documents.
 * @extends {AbstractSidebarTab<DocumentDirectoryConfiguration, HandlebarsRenderOptions>}
 * @template {ClientDocument} [TDocument=ClientDocument]
 * @mixes HandlebarsApplication
 */
export default class DocumentDirectory<TDocument extends ClientDocument = ClientDocument> extends AbstractSidebarTab<DocumentDirectoryConfiguration, HandlebarsRenderOptions> {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        classes: string[];
        collection: null;
        renderUpdateKeys: string[];
        actions: {
            activateEntry: typeof DocumentDirectory.#onClickEntry;
            collapseFolders: typeof DocumentDirectory.#onCollapseFolders;
            createEntry: typeof DocumentDirectory.#onCreateEntry;
            createFolder: typeof DocumentDirectory.#onCreateFolder;
            showIssues: typeof DocumentDirectory.#onShowIssues;
            toggleFolder: typeof DocumentDirectory.#onToggleFolder;
            toggleSearch: typeof DocumentDirectory.#onToggleSearch;
            toggleSort: typeof DocumentDirectory.#onToggleSort;
        };
    };
    /** @override */
    static override PARTS: {
        header: {
            template: string;
        };
        directory: {
            template: string;
            scrollable: string[];
        };
        footer: {
            template: string;
        };
    };
    /**
     * The path to the template used to render a single entry within the directory.
     * @type {string}
     * @protected
     */
    protected static _entryPartial: string;
    /**
     * The path to the template used to render a single folder within the directory.
     * @type {string}
     * @protected
     */
    protected static _folderPartial: string;
    /**
     * Handle activating a directory entry.
     * @this {DocumentDirectory}
     * @param {...any} args
     * @returns {Promise<void>}
     */
    static #onClickEntry(this: DocumentDirectory<ClientDocument>, ...args: any[]): Promise<void>;
    /**
     * Collapse open folders in this directory.
     * @this {DocumentDirectory}
     */
    static #onCollapseFolders(this: DocumentDirectory<ClientDocument>): void;
    /**
     * Handle creating a new entry in this directory.
     * @this {DocumentDirectory}
     * @param {...any} args
     */
    static #onCreateEntry(this: DocumentDirectory<ClientDocument>, ...args: any[]): any;
    /**
     * Handle creating a new folder in this directory.
     * @this {DocumentDirectory}
     * @param {...any} args
     */
    static #onCreateFolder(this: DocumentDirectory<ClientDocument>, ...args: any[]): void;
    /**
     * Handle showing the client issues dialog.
     * @this {DocumentDirectory}
     */
    static #onShowIssues(this: DocumentDirectory<ClientDocument>): void;
    /**
     * Handle toggling a folder's expanded state.
     * @this {DocumentDirectory}
     * @param {...any} args
     */
    static #onToggleFolder(this: DocumentDirectory<ClientDocument>, ...args: any[]): any;
    /**
     * Handle toggling the search mode.
     * @this {DocumentDirectory}
     */
    static #onToggleSearch(this: DocumentDirectory<ClientDocument>): void;
    /**
     * Handle toggling the sort mode.
     * @this {DocumentDirectory}
     */
    static #onToggleSort(this: DocumentDirectory<ClientDocument>): void;
    /**
     * Get context menu entries for folders in a directory.
     * @returns {ContextMenuEntry[]}
     * @internal
     */
    static _getFolderContextOptions(): ContextMenuEntry[];
    /**
     * Helper method to handle dropping a folder onto the directory.
     * @param {HTMLElement} target            The drop target element.
     * @param {object} data                   The drop data.
     * @param {object} config
     * @param {Folder[]} config.folders       The sibling folders.
     * @param {string} config.label           The label for entries in the directory.
     * @param {number} config.maxFolderDepth  The maximum folder depth in this directory.
     * @param {string} config.type            The type of entries in the directory.
     * @returns {Promise<{[closestFolderId]: string, folder: Folder, sortData: object, [foreign]: boolean}|void>}
     * @internal
     */
    static _handleDroppedFolder(target: HTMLElement, data: object, { folders, label, maxFolderDepth, type }: {
        folders: Folder[];
        label: string;
        maxFolderDepth: number;
        type: string;
    }): Promise<{
        [closestFolderId]: string;
        folder: Folder;
        sortData: object;
        [foreign]: boolean;
    } | void>;
    constructor(options: any);
    /**
     * The Document collection that this directory represents.
     * @type {DirectoryCollection}
     */
    get collection(): DirectoryCollection;
    /**
     * The implementation of the Document type that this directory represents.
     * @returns {Constructor<TDocument>}
     */
    get documentClass(): Constructor<TDocument>;
    /**
     * The named Document type that this directory represents.
     * @type {string}
     */
    get documentName(): string;
    /** @inheritDoc */
    _initializeApplicationOptions(options: any): any;
    /**
     * Determine if the current user has permission to create directory entries.
     * @returns {boolean}
     * @protected
     */
    protected _canCreateEntry(): boolean;
    /**
     * Determine if the current user has permission to create folders in this directory.
     * @returns {boolean}
     * @protected
     */
    protected _canCreateFolder(): boolean;
    /** @inheritDoc */
    _canRender(options: any): false | void;
    /** @inheritDoc */
    _configureRenderParts(options: any): any;
    /**
     * Register context menu entries and fire hooks.
     * @protected
     */
    protected _createContextMenus(): void;
    /**
     * Get context menu entries for entries in this directory.
     * @returns {ContextMenuEntry[]}
     * @protected
     */
    protected _getEntryContextOptions(): ContextMenuEntry[];
    /**
     * Prepares the data for a duplicated Document.
     * @param {Document} document    The Document that is duplicated
     * @returns {object}             The partial data of the duplicate that overrides the original data
     * @protected
     */
    protected _prepareDuplicateData(document: Document): object;
    /**
     * Get context menu entries for folders in this directory.
     * @returns {ContextMenuEntry[]}
     * @protected
     */
    protected _getFolderContextOptions(): ContextMenuEntry[];
    /** @inheritDoc */
    _prepareContext(options: any): Promise<ApplicationRenderContext & {
        documentName: string;
        folderIcon: string;
        sidebarIcon: any;
        canCreateEntry: boolean;
        canCreateFolder: boolean;
    }>;
    /** @inheritDoc */
    _preparePartContext(partId: any, context: any, options: any): Promise<any>;
    /**
     * Prepare render context for the directory part.
     * @param {ApplicationRenderContext} context
     * @param {HandlebarsRenderOptions} options
     * @returns {Promise<void>}
     * @protected
     */
    protected _prepareDirectoryContext(context: ApplicationRenderContext, options: HandlebarsRenderOptions): Promise<void>;
    /**
     * Prepare render context for the footer part.
     * @param {ApplicationRenderContext} context
     * @param {HandlebarsRenderOptions} options
     * @returns {Promise<void>}
     * @protected
     */
    protected _prepareFooterContext(context: ApplicationRenderContext, options: HandlebarsRenderOptions): Promise<void>;
    /**
     * Prepare render context for the header part.
     * @param {ApplicationRenderContext} context
     * @param {HandlebarsRenderOptions} options
     * @returns {Promise<void>}
     * @protected
     */
    protected _prepareHeaderContext(context: ApplicationRenderContext, options: HandlebarsRenderOptions): Promise<void>;
    /** @inheritDoc */
    _preSyncPartState(partId: any, newElement: any, priorElement: any, state: any): void;
    /** @inheritDoc */
    _syncPartState(partId: any, newElement: any, priorElement: any, state: any): void;
    /**
     * Collapse all open folders in this directory.
     */
    collapseAll(): void;
    /**
     * Handle activating a directory entry.
     * @param {PointerEvent} event  The triggering click event.
     * @param {HTMLElement} target  The action target element.
     * @param {object} [options]
     * @param {boolean} [options._skipDeprecation] Internal use only.
     * @returns {Promise<void>}
     * @protected
     */
    protected _onClickEntry(event: PointerEvent, target: HTMLElement, { _skipDeprecation }?: {
        _skipDeprecation?: boolean | undefined;
    }): Promise<void>;
    /**
     * Handle creating a new entry in this directory.
     * @param {PointerEvent} event  The triggering click event.
     * @param {HTMLElement} target  The action target element.
     * @protected
     */
    protected _onCreateEntry(event: PointerEvent, target: HTMLElement): any;
    /**
     * Handle creating a new folder in this directory.
     * @param {PointerEvent} event  The triggering click event.
     * @param {HTMLElement} target  The action target element.
     * @protected
     */
    protected _onCreateFolder(event: PointerEvent, target: HTMLElement): void;
    /**
     * Handle toggling a folder's expanded state.
     * @param {PointerEvent} event  The triggering click event.
     * @param {HTMLElement} target  The action target element.
     * @param {object} [options]
     * @param {boolean} [options._skipDeprecation] Internal use only.
     * @protected
     */
    protected _onToggleFolder(event: PointerEvent, target: HTMLElement, { _skipDeprecation }?: {
        _skipDeprecation?: boolean | undefined;
    }): any;
    /**
     * Handle matching a given directory entry with the search filter.
     * @param {string} query          The input search string.
     * @param {Set<string>} entryIds  The matched directory entry IDs.
     * @param {HTMLElement} element   The candidate entry element.
     * @param {object} [options]      Additional options for subclass-specific behavior.
     * @protected
     */
    protected _onMatchSearchEntry(query: string, entryIds: Set<string>, element: HTMLElement, options?: object): void;
    /**
     * Handle directory searching and filtering.
     * @param {KeyboardEvent} event  The keyboard input event.
     * @param {string} query         The input search string.
     * @param {RegExp} rgx           The regular expression query that should be matched against.
     * @param {HTMLElement} html     The container to filter entries from.
     * @protected
     */
    protected _onSearchFilter(event: KeyboardEvent, query: string, rgx: RegExp, html: HTMLElement): void;
    /**
     * Identify entries in the collection which match a provided search query.
     * @param {RegExp} query               The search query.
     * @param {Set<string>} entryIds       The set of matched entry IDs.
     * @param {Set<string>} folderIds      The set of matched folder IDs.
     * @param {Set<string>} autoExpandIds  The set of folder IDs that should be auto-expanded.
     * @param {object} [options]           Additional options for subclass-specific behavior.
     * @protected
     */
    protected _matchSearchEntries(query: RegExp, entryIds: Set<string>, folderIds: Set<string>, autoExpandIds: Set<string>, options?: object): void;
    /**
     * Identify folders in the collection which match a provided search query.
     * @param {RegExp} query               The search query.
     * @param {Set<string>} folderIds      The set of matched folder IDs.
     * @param {Set<string>} autoExpandIds  The set of folder IDs that should be auto-expanded.
     * @param {object} [options]           Additional options for subclass-specific behavior.
     * @protected
     */
    protected _matchSearchFolders(query: RegExp, folderIds: Set<string>, autoExpandIds: Set<string>, options?: object): void;
    /**
     * Determine if drop operations are permitted.
     * @param {string} selector       The candidate HTML selector for dragging
     * @returns {boolean}             Can the current user drag this selector?
     * @protected
     */
    protected _canDragDrop(selector: string): boolean;
    /**
     * Determine if drag operations are permitted.
     * @param {string} selector       The candidate HTML selector for dragging
     * @returns {boolean}             Can the current user drag this selector?
     * @protected
     */
    protected _canDragStart(selector: string): boolean;
    /**
     * Create a new entry in this directory from one that was dropped on it.
     * @param {DirectoryMixinEntry} entry  The dropped entry.
     * @param {object} [updates]           Modifications to the creation data.
     * @returns {Promise<TDocument>}
     * @protected
     */
    protected _createDroppedEntry(entry: DirectoryMixinEntry, updates?: object): Promise<TDocument>;
    /**
     * Import a dropped folder and its children into this collection if they do not already exist.
     * @param {Folder} folder          The folder being dropped.
     * @param {Folder} [targetFolder]  A folder to import into if not the directory root.
     * @returns {Promise<Folder[]>}
     * @protected
     */
    protected _createDroppedFolderContent(folder: Folder, targetFolder?: Folder): Promise<Folder[]>;
    /**
     * Create a set of documents in a dropped folder.
     * @param {Folder} folder  The dropped folder.
     * @param {TDocument[]|object[]} documents  The documents to create, or their indices.
     * @returns {Promise<void>}
     * @protected
     */
    protected _createDroppedFolderDocuments(folder: Folder, documents: TDocument[] | object[]): Promise<void>;
    /**
     * Test if the given entry is already present in this directory.
     * @param {ClientDocument} entry  The directory entry.
     * @returns {boolean}
     * @protected
     */
    protected _entryAlreadyExists(entry: ClientDocument): boolean;
    /**
     * Determine whether a given directory entry belongs to the given folder.
     * @param {DirectoryMixinEntry} entry  The entry.
     * @param {string} folder              The target folder ID.
     * @returns {boolean}
     * @protected
     */
    protected _entryBelongsToFolder(entry: DirectoryMixinEntry, folder: string): boolean;
    /**
     * Get the entry instance from its dropped data.
     * @param {object} data  The drag data.
     * @returns {Promise<ClientDocument>}
     * @throws {Error}       If the correct instance type could not be retrieved.
     * @protected
     */
    protected _getDroppedEntryFromData(data: object): Promise<ClientDocument>;
    /**
     * Get drag data for an entry in this directory.
     * @param {string} entryId  The entry's ID.
     * @protected
     */
    protected _getEntryDragData(entryId: string): any;
    /**
     * Get drag data for a folder in this directory.
     * @param {string} folderId  The folder ID.
     * @protected
     */
    protected _getFolderDragData(folderId: string): any;
    /**
     * Handle dropping a new entry into this directory.
     * @param {HTMLElement} target  The drop target element.
     * @param {object} data         The drop data.
     * @returns {Promise<void>}
     * @protected
     */
    protected _handleDroppedEntry(target: HTMLElement, data: object): Promise<void>;
    /**
     * Handle dropping a folder onto the directory.
     * @param {HTMLElement} target  The drop target element.
     * @param {object} data         The drop data.
     * @returns {Promise<void>}
     * @protected
     */
    protected _handleDroppedFolder(target: HTMLElement, data: object): Promise<void>;
    /**
     * Handle importing a new folder's into the directory.
     * @param {Folder} folder           The dropped folder.
     * @param {string} closestFolderId  The ID of the closest folder to the drop target.
     * @param {object} sortData         Sort data for the folder.
     * @returns {Promise<{ folder: Folder, sortNeeded: boolean }|null>}
     * @protected
     */
    protected _handleDroppedForeignFolder(folder: Folder, closestFolderId: string, sortData: object): Promise<{
        folder: Folder;
        sortNeeded: boolean;
    } | null>;
    /**
     * Highlight folders as drop targets when a drag event enters or exits their area.
     * @param {DragEvent} event  The in-progress drag event.
     * @protected
     */
    protected _onDragHighlight(event: DragEvent): void;
    /**
     * Handle drag events over the directory.
     * @param {DragEvent} event
     * @protected
     */
    protected _onDragOver(event: DragEvent): void;
    /** @override */
    override _onDragStart(event: any): void;
    /** @override */
    override _onDrop(event: any): Promise<void> | undefined;
    /**
     * Organize a dropped folder and its children into a list of folders and documents to create.
     * @param {Folder} folder          The dropped folder.
     * @param {Folder} [targetFolder]  A folder to import into if not the directory root.
     * @returns {Promise<{ foldersToCreate: Folder[], documentsToCreate: TDocument[]|object[] }>}
     * @protected
     */
    protected _organizeDroppedFoldersAndDocuments(folder: Folder, targetFolder?: Folder): Promise<{
        foldersToCreate: Folder[];
        documentsToCreate: TDocument[] | object[];
    }>;
    /**
     * @deprecated since v13 until v15.
     * @ignore
     */
    _onClickEntryName(event: any): Promise<void>;
    /**
     * @deprecated since v13 until v15.
     * @ignore
     */
    _toggleFolder(event: any): any;
    #private;
}
export type _DocumentDirectoryConfiguration = {
    /**
     * The Document collection that this directory represents.
     */
    collection: DirectoryCollection;
    /**
     * Updating one of these properties of a displayed Document will trigger a
     * re-render of the tab.
     */
    renderUpdateKeys: string[];
};
export type DocumentDirectoryConfiguration = ApplicationConfiguration & _DocumentDirectoryConfiguration;
import type { HandlebarsRenderOptions } from "../api/handlebars-application.mjs";
import AbstractSidebarTab from "./sidebar-tab.mjs";
import type { Constructor } from "@common/_types.mjs";
import type { ContextMenuEntry } from "../ux/context-menu.mjs";
import type { ApplicationRenderContext } from "../_types.mjs";
import Folder from "@client/documents/folder.mjs";
import type { ApplicationConfiguration } from "../_types.mjs";
