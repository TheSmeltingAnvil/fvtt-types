/**
 * @import {ApplicationConfiguration} from "../../_types.mjs";
 * @import {HandlebarsRenderOptions} from "../../api/handlebars-application.mjs";
 */
/**
 * @typedef CompendiumPackDirectoryContext
 * @property {boolean} locked           Whether the pack is locked.
 * @property {boolean} customOwnership  Whether the pack has custom ownership configured.
 * @property {string} collection        The pack's collection ID.
 * @property {string} package           The name of the package the pack belongs to.
 * @property {string} title             The pack title.
 * @property {string} icon              An icon representing the pack's contents.
 * @property {boolean} hidden           Whether the pack is currently hidden.
 * @property {string} banner            The pack's banner image.
 * @property {string} sourceIcon        An icon representing the pack's source (World, System, or Module).
 * @property {string} css               CSS class names.
 */
/**
 * The listing of compendiums available in the World.
 * @extends {AbstractSidebarTab<ApplicationConfiguration, HandlebarsRenderOptions>}
 * @mixes HandlebarsApplication
 */
export default class CompendiumDirectory extends AbstractSidebarTab<ApplicationConfiguration, HandlebarsRenderOptions> {
    /** @override */
    static override DEFAULT_OPTIONS: {
        classes: string[];
        window: {
            title: string;
        };
        actions: {
            activateEntry: typeof CompendiumDirectory.#onClickEntry;
            collapseFolders: typeof CompendiumDirectory.#onCollapseFolders;
            createEntry: typeof CompendiumDirectory.#onCreateEntry;
            createFolder: typeof CompendiumDirectory.#onCreateFolder;
            toggleFolder: typeof CompendiumDirectory.#onToggleFolder;
            toggleSort: typeof CompendiumDirectory.#onToggleSort;
        };
    };
    /** @override */
    static override PARTS: {
        header: {
            template: string;
        };
        directory: {
            template: string;
            templates: string[];
            scrollable: string[];
        };
        footer: {
            template: string;
        };
    };
    /**
     * Collapse all open folders in this directory.
     * @this {CompendiumDirectory}
     */
    static #onCollapseFolders(this: CompendiumDirectory): void;
    /**
     * Handle clicking on a compendium entry.
     * @this {CompendiumDirectory}
     * @param {...any} args
     */
    static #onClickEntry(this: CompendiumDirectory, ...args: any[]): void;
    /**
     * Handle creating a new compendium pack.
     * @this {CompendiumDirectory}
     * @param {...any} args
     */
    static #onCreateEntry(this: CompendiumDirectory, ...args: any[]): Promise<void>;
    /**
     * Handle creating a new folder in this directory.
     * @this {CompendiumDirectory}
     * @param {...any} args
     */
    static #onCreateFolder(this: CompendiumDirectory, ...args: any[]): void;
    /**
     * Handle toggling a folder's expanded state.
     * @this {CompendiumDirectory}
     * @param {...any} args
     */
    static #onToggleFolder(this: CompendiumDirectory, ...args: any[]): void;
    /**
     * Handle toggling the sort mode.
     * @this {CompendiumDirectory}
     */
    static #onToggleSort(this: CompendiumDirectory): Promise<CompendiumDirectory>;
    constructor(options?: Partial<ApplicationConfiguration> | undefined);
    /**
     * The set of active document type filters.
     * @type {Set<string>}
     */
    get activeFilters(): Set<string>;
    /**
     * Get context menu entries for entries in this directory.
     * @returns {ContextMenuEntry[]}
     * @protected
     */
    protected _getEntryContextOptions(): ContextMenuEntry[];
    /**
     * Get options for filtering the directory by document type.
     * @returns {ContextMenuEntry[]}
     * @protected
     */
    protected _getFilterContextOptions(): ContextMenuEntry[];
    /**
     * Get context menu entries for folders in this directory.
     * @returns {ContextMenuEntry[]}
     * @protected
     */
    protected _getFolderContextOptions(): ContextMenuEntry[];
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
     * Prepare render context for the header part.
     * @param {ApplicationRenderContext} context
     * @param {HandlebarsRenderOptions} options
     * @returns {Promise<void>}
     * @protected
     */
    protected _prepareHeaderContext(context: ApplicationRenderContext, options: HandlebarsRenderOptions): Promise<void>;
    /**
     * Prepare render context for an individual compendium pack.
     * @param {CompendiumCollection} pack  The compendium pack.
     * @returns {CompendiumPackDirectoryContext}
     * @protected
     */
    protected _preparePackContext(pack: CompendiumCollection<any>): CompendiumPackDirectoryContext;
    /** @inheritDoc */
    _preSyncPartState(partId: any, newElement: any, priorElement: any, state: any): void;
    /** @inheritDoc */
    _syncPartState(partId: any, newElement: any, priorElement: any, state: any): void;
    collapseAll(): void;
    /**
     * Handle clicking on a compendium entry.
     * @param {PointerEvent} event  The triggering event.
     * @param {HTMLElement} target  The action target.
     * @protected
     */
    protected _onClickEntry(event: PointerEvent, target: HTMLElement): void;
    /**
     * Handle creating a new compendium pack.
     * @param {PointerEvent} event  The triggering event.
     * @param {HTMLElement} target  The action target.
     * @returns {Promise<void>}
     * @protected
     */
    protected _onCreateEntry(event: PointerEvent, target: HTMLElement): Promise<void>;
    /**
     * Handle creating a new folder in this directory.
     * @param {PointerEvent} event  The triggering click event.
     * @param {HTMLElement} target  The action target element.
     * @protected
     */
    protected _onCreateFolder(event: PointerEvent, target: HTMLElement): void;
    /**
     * Handle deleting a compendium pack.
     * @param {HTMLElement} li  The compendium target element.
     * @returns {Promise<void>}
     * @protected
     */
    protected _onDeleteCompendium(li: HTMLElement): Promise<void>;
    /**
     * Handle duplicating a compendium.
     * @param {HTMLElement} li  The compendium target element.
     * @returns {Promise<CompendiumCollection|void>}
     * @protected
     */
    protected _onDuplicateCompendium(li: HTMLElement): Promise<CompendiumCollection<any> | void>;
    /**
     * Handle toggling a compendium type filter.
     * @param {PointerEvent} event  The triggering event.
     * @param {string} [type]       The compendium type to filter by. If omitted, clear all filters.
     * @protected
     */
    protected _onToggleCompendiumFilterType(event: PointerEvent, type?: string): Promise<this>;
    /**
     * Handle toggling a folder's expanded state.
     * @param {PointerEvent} event  The triggering click event.
     * @param {HTMLElement} target  The action target element.
     * @protected
     */
    protected _onToggleFolder(event: PointerEvent, target: HTMLElement): void;
    /**
     * Handle toggling locked state on a compendium.
     * @param {HTMLElement} li  The compendium target element.
     * @returns {Promise<boolean|void>}
     * @protected
     */
    protected _onToggleLock(li: HTMLElement): Promise<boolean | void>;
    /**
     * Handle matching a given directory entry with the search filter.
     * @param {string} query          The input search string.
     * @param {Set<string>} packs     The matched pack IDs.
     * @param {HTMLElement} element   The candidate entry element.
     * @param {object} [options]      Additional options for subclass-specific behavior.
     * @protected
     */
    protected _onMatchSearchEntry(query: string, packs: Set<string>, element: HTMLElement, options?: object): void;
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
     * @param {Set<string>} packs          The set of matched pack IDs.
     * @param {Set<string>} folderIds      The set of matched folder IDs.
     * @param {Set<string>} autoExpandIds  The set of folder IDs that should be auto-expanded.
     * @param {object} [options]           Additional options for subclass-specific behavior.
     * @protected
     */
    protected _matchSearchEntries(query: RegExp, packs: Set<string>, folderIds: Set<string>, autoExpandIds: Set<string>, options?: object): void;
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
     * Determine if the given user has permission to drop entries into the compendium directory.
     * @param {string} selector  The CSS selector of the dragged element.
     * @returns {boolean}
     * @protected
     */
    protected _canDragDrop(selector: string): boolean;
    /**
     * Determine if the given user has permission to drag packs and folders in the directory.
     * @param {string} selector  The CSS selector of the target element.
     * @returns {boolean}
     * @protected
     */
    protected _canDragStart(selector: string): boolean;
    /**
     * Test if the given pack is already present in this directory.
     * @param {CompendiumCollection} pack  The compendium pack.
     * @returns {boolean}
     * @protected
     */
    protected _entryAlreadyExists(pack: CompendiumCollection<any>): boolean;
    /**
     * Determine whether a given directory entry belongs to the given folder.
     * @param {CompendiumCollection} pack  The compendium pack.
     * @param {string|undefined} folder    The target folder ID.
     * @returns {boolean}
     * @protected
     */
    protected _entryBelongsToFolder(pack: CompendiumCollection<any>, folder: string | undefined): boolean;
    /**
     * Get the pack instance from its dropped data.
     * @param {object} data  The drag data.
     * @returns {Promise<CompendiumCollection>}
     * @protected
     */
    protected _getDroppedEntryFromData(data: object): Promise<CompendiumCollection<any>>;
    /**
     * Get drag data for a compendium in this directory.
     * @param {string} collection  The pack's collection ID.
     * @protected
     */
    protected _getEntryDragData(collection: string): {
        collection: string;
        type: string;
    };
    /**
     * Get drag data for a folder in this directory.
     * @param {string} folderId  The folder ID.
     * @protected
     */
    protected _getFolderDragData(folderId: string): any;
    /**
     * Handle dropping a new pack into this directory.
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
     * Handle sorting a compendium pack relative to others in the directory.
     * @param {CompendiumCollection} pack  The compendium pack.
     * @param {object} sortData            Sort data.
     * @protected
     */
    protected _sortRelative(pack: CompendiumCollection<any>, sortData: object): void;
    #private;
}
export type CompendiumPackDirectoryContext = {
    /**
     * Whether the pack is locked.
     */
    locked: boolean;
    /**
     * Whether the pack has custom ownership configured.
     */
    customOwnership: boolean;
    /**
     * The pack's collection ID.
     */
    collection: string;
    /**
     * The name of the package the pack belongs to.
     */
    package: string;
    /**
     * The pack title.
     */
    title: string;
    /**
     * An icon representing the pack's contents.
     */
    icon: string;
    /**
     * Whether the pack is currently hidden.
     */
    hidden: boolean;
    /**
     * The pack's banner image.
     */
    banner: string;
    /**
     * An icon representing the pack's source (World, System, or Module).
     */
    sourceIcon: string;
    /**
     * CSS class names.
     */
    css: string;
};
import type { ApplicationConfiguration } from "../../_types.mjs";
import type { HandlebarsRenderOptions } from "../../api/handlebars-application.mjs";
import AbstractSidebarTab from "../sidebar-tab.mjs";
import CompendiumCollection from "@client/documents/collections/compendium-collection.mjs";
