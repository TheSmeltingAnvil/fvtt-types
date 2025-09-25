/**
 * @import {DocumentSheetConfiguration, DocumentSheetRenderOptions} from "../../api/document-sheet.mjs";
 * @import {ApplicationRenderContext} from "../../_types.mjs";
 * @import {JournalEntryPageHeading} from "@client/_types.mjs";
 */
/**
 * @typedef {DocumentSheetRenderOptions} JournalSheetRenderOptions
 * @property {number} [pageIndex]                   Render the journal sheet at this page index.
 * @property {string} [pageId]                      Render the journal sheet at the page with this ID.
 * @property {JournalEntrySheet.VIEW_MODES} [mode]  Render the journal sheet with the given page mode.
 * @property {string} [anchor]                      Scroll to the specified heading in the given page.
 */
/**
 * @typedef JournalSheetPageContext
 * @property {string} id              The page ID.
 * @property {boolean} editable       Whether the current user is allowed to edit the page.
 * @property {boolean} hidden         Whether the page is currently hidden due to a search filter.
 * @property {string} tocClass        The class name for the page entry in the table of contents.
 * @property {string} viewClass       The class name for the page entry in the pages view.
 * @property {string} name            The page title.
 * @property {number} number          The page number in the table of contents.
 * @property {string} icon            The ownership icon for the page entry in the table of contents.
 * @property {string} ownershipClass  The class name for the page's ownership level in the table of contents.
 * @property {string} [category]      The ID of the category this page belongs to, if any.
 * @property {number} sort            The numeric sort value which orders this page relative to other pages in its
 *                                    category.
 * @property {boolean} [uncategorized]  Whether the page has not been assigned a category.
 */
/**
 * @typedef JournalSheetCategoryContext
 * @property {string} id    The category ID.
 * @property {string} name  The category name.
 */
/**
 * The Application responsible for displaying and editing a single JournalEntry Document.
 * @extends {DocumentSheetV2<DocumentSheetConfiguration, JournalSheetRenderOptions>}
 * @mixes HandlebarsApplication
 */
export default class JournalEntrySheet {
    /** @override */
    static override DEFAULT_OPTIONS: {
        classes: string[];
        viewPermission: 0;
        window: {
            resizable: boolean;
        };
        position: {
            width: number;
            height: number;
        };
        form: {
            submitOnChange: boolean;
        };
        actions: {
            configCategories: typeof JournalEntrySheet.#onConfigureCategories;
            createPage: () => any;
            editPage: (event: PointerEvent, target: HTMLElement) => any;
            goToHeading: typeof JournalEntrySheet.#onGoToHeading;
            nextPage: () => any;
            previousPage: () => any;
            showPlayers: () => void;
            toggleLock: typeof JournalEntrySheet.#onToggleLock;
            toggleMode: typeof JournalEntrySheet.#onToggleMode;
            toggleSearch: () => any;
            toggleSidebar: () => void;
        };
    };
    /** @override */
    static override PARTS: {
        sidebar: {
            template: string;
            templates: string[];
            scrollable: string[];
        };
        pages: {
            template: string;
            scrollable: string[];
        };
    };
    /**
     * The percentage of the journal sheet page viewport that must be filled by a page before that page is marked as in
     * view.
     * @type {number}
     */
    static #INTERSECTION_RATIO: number;
    /**
     * Icons for page ownership.
     * @enum {string}
     */
    static OWNERSHIP_ICONS: {
        0: string;
        2: string;
        3: string;
    };
    /**
     * The available view modes for journal entries.
     * @enum {number}
     */
    static VIEW_MODES: {
        SINGLE: number;
        MULTIPLE: number;
    };
    /**
     * Handle configuring the journal entry's categories.
     * @this {JournalEntrySheet}
     */
    static #onConfigureCategories(this: JournalEntrySheet): void;
    /**
     * Handle clicking on a page heading.
     * @this {JournalEntrySheet}
     * @param {PointerEvent} event  The triggering event.
     * @param {HTMLElement} target  The action target.
     */
    static #onGoToHeading(this: JournalEntrySheet, event: PointerEvent, target: HTMLElement): void;
    /**
     * Handle toggling the lock mode.
     * @this {JournalEntrySheet}
     */
    static #onToggleLock(this: JournalEntrySheet): void;
    /**
     * Handle toggling the view mode.
     * @this {JournalEntrySheet}
     */
    static #onToggleMode(this: JournalEntrySheet): any;
    /**
     * The JournalEntry for this sheet.
     * @type {JournalEntry}
     */
    get entry(): JournalEntry;
    /**
     * Whether the sheet is in multi-page mode.
     * @type {boolean}
     */
    get isMultiple(): boolean;
    /**
     * Whether the journal is locked and disallows modifications to the table of contents.
     * @type {boolean}
     */
    get locked(): boolean;
    /**
     * Get the JournalEntry's current view mode.
     * @type {JournalEntrySheet.VIEW_MODES}
     */
    get mode(): {
        SINGLE: number;
        MULTIPLE: number;
    };
    /**
     * The currently active IntersectionObserver.
     * @type {IntersectionObserver}
     */
    get observer(): IntersectionObserver;
    /**
     * The ID of the currently-viewed page.
     * @type {string}
     */
    get pageId(): string;
    /**
     * The index of the currently-viewed page in the list of available pages.
     * @type {number}
     */
    get pageIndex(): number;
    /**
     * The cached list of processed page entries.
     * @type {Record<string, JournalSheetPageContext>}
     * @protected
     */
    protected _pages: Record<string, JournalSheetPageContext>;
    /**
     * The pages that are currently scrolled into view and marked as 'active' in the sidebar.
     * @type {HTMLElement[]}
     */
    get pagesInView(): HTMLElement[];
    /**
     * Get the JournalEntry's current search mode.
     * @type {string}
     */
    get searchMode(): string;
    /**
     * The expanded state of the sidebar.
     * @type {boolean}
     */
    get sidebarExpanded(): boolean;
    /** @override */
    override get title(): string;
    /**
     * Highlights the currently-viewed page in the sidebar.
     * @protected
     */
    protected _activatePagesInView(): void;
    /** @inheritDoc */
    _configureRenderOptions(options: any): void;
    /** @inheritDoc */
    _configureRenderParts(options: any): any;
    /**
     * Get the set of ContextMenu options which should be used for journal entry pages in the sidebar.
     * @returns {ContextMenuEntry[]}
     * @protected
     */
    protected _getEntryContextOptions(): ContextMenuEntry[];
    /** @inheritDoc */
    _initializeApplicationOptions(options: any): any;
    /** @inheritDoc */
    _getHeaderControls(): any;
    /** @inheritDoc */
    _onFirstRender(context: any, options: any): Promise<void>;
    /** @inheritDoc */
    _onRender(context: any, options: any): Promise<void>;
    /** @inheritDoc */
    _prepareContext(options: any): Promise<any>;
    /**
     * Prepare pages for display.
     * @returns {Record<string, JournalSheetPageContext>}
     * @protected
     */
    protected _preparePageData(): Record<string, JournalSheetPageContext>;
    /** @inheritDoc */
    _preparePartContext(partId: any, context: any, options: any): Promise<any>;
    /**
     * Prepare render context for the pages part.
     * @param {ApplicationRenderContext} context
     * @param {JournalSheetRenderOptions} options
     * @returns {Promise<void>}
     * @protected
     */
    protected _preparePagesContext(context: ApplicationRenderContext, options: JournalSheetRenderOptions): Promise<void>;
    /**
     * Prepare render context for the sidebar part.
     * @param {ApplicationRenderContext} context
     * @param {JournalSheetRenderOptions} options
     * @returns {Promise<void>}
     * @protected
     */
    protected _prepareSidebarContext(context: ApplicationRenderContext, options: JournalSheetRenderOptions): Promise<void>;
    /**
     * Prepare the sidebar table of contents.
     * @returns {Promise<Array<JournalSheetPageContext & JournalSheetCategoryContext>>}
     * @protected
     */
    protected _prepareTableOfContents(): Promise<Array<JournalSheetPageContext & JournalSheetCategoryContext>>;
    /** @inheritDoc */
    _preSyncPartState(partId: any, newElement: any, priorElement: any, state: any): void;
    /** @inheritDoc */
    _replaceHTML(result: any, content: any, options: any): void;
    /**
     * Add headings to the table of contents for the given node.
     * @param {HTMLElement} pageNode                         The HTML node of the page's rendered contents.
     * @param {Record<string, JournalEntryPageHeading>} toc  The page's table of contents.
     * @returns {Promise<void>}
     * @protected
     */
    protected _renderHeadings(pageNode: HTMLElement, toc: Record<string, JournalEntryPageHeading>): Promise<void>;
    /**
     * Update child views inside the main sheet.
     * @param {ApplicationRenderContext} context
     * @param {JournalSheetRenderOptions} options
     * @returns {Promise<void>}
     * @protected
     */
    protected _renderPageViews(context: ApplicationRenderContext, options: JournalSheetRenderOptions): Promise<void>;
    /**
     * Render the page view for a page sheet.
     * @param {HTMLElement} element          The existing page element in the journal entry view.
     * @param {JournalEntryPageSheet} sheet  The page sheet.
     * @returns {Promise<void>}
     * @protected
     */
    protected _renderPageView(element: HTMLElement, sheet: JournalEntryPageSheet): Promise<void>;
    /**
     * Update which page of the journal sheet should be currently rendered.
     * This can be controlled by options passed into the render method, or by subclass override.
     * @param {JournalSheetRenderOptions} [options]
     * @protected
     */
    protected _setCurrentPage(options?: JournalSheetRenderOptions): void;
    /**
     * If the set of active pages has changed, various elements in the sidebar will expand and collapse. For particularly
     * long ToCs, this can leave the scroll position of the sidebar in a seemingly random state. We try to do our best to
     * sync the sidebar scroll position with the current journal viewport.
     * @protected
     */
    protected _synchronizeSidebar(): void;
    /**
     * Update the disabled state of the previous and next page buttons.
     * @protected
     */
    protected _updateButtonState(): void;
    /** @inheritDoc */
    _updateFrame(options: any): void;
    /** @inheritDoc */
    _tearDown(options: any): void;
    /** @inheritDoc */
    _attachFrameListeners(): void;
    /**
     * Create an intersection observer to maintain a list of headings that are in view. This is much more performant than
     * calling getBoundingClientRect on all headings whenever we want to determine this list.
     * @protected
     */
    protected _observeHeadings(): void;
    /**
     * Create an intersection observer to maintain a list of pages that are in view.
     * @protected
     */
    protected _observePages(): void;
    /**
     * Handle clicking an image to pop it out for fullscreen view.
     * @param {PointerEvent} event  The triggering click event.
     * @protected
     */
    protected _onClickImage(event: PointerEvent): void;
    /** @inheritDoc */
    _onClose(options: any): void;
    /**
     * Handle closing the context menu.
     * @param {HTMLElement} target  The element the context menu has been triggered for.
     * @protected
     */
    protected _onContextMenuClose(target: HTMLElement): void;
    /**
     * Handle opening the context menu.
     * @param {HTMLElement} target  The element the context menu has been triggered for.
     * @protected
     */
    protected _onContextMenuOpen(target: HTMLElement): void;
    /**
     * Handle editing one of the journal entry's pages.
     * @param {PointerEvent} event  The triggering event.
     * @param {HTMLElement} target  The action target.
     * @protected
     */
    protected _onEditPage(event: PointerEvent, target: HTMLElement): any;
    /**
     * Handle new pages scrolling into view.
     * @param {IntersectionObserverEntry[]} entries  An array of element that have scrolled into or out of view.
     * @param {IntersectionObserver} observer        The IntersectionObserver that invoked this callback.
     * @protected
     */
    protected _onPageScroll(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void;
    /** @override */
    override _onRevealSecret(event: any): void;
    /**
     * Handle journal entry search and filtering.
     * @param {KeyboardEvent} event  The keyboard input event.
     * @param {string} query         The input search string.
     * @param {RegExp} rgx           The regular expression query that should be matched against.
     * @param {HTMLElement} html     The container to filter items from.
     * @protected
     */
    protected _onSearchFilter(event: KeyboardEvent, query: string, rgx: RegExp, html: HTMLElement): void;
    /**
     * Handle a request to show the JournalEntry to other Users.
     * @protected
     */
    protected _onShowPlayers(): void;
    /**
     * Prompt the user with a Dialog for creation of a new JournalEntryPage.
     */
    createPageDialog(): any;
    /**
     * Retrieve the sheet instance for rendering this page inline.
     * @param {JournalEntryPage|string} page  The page instance or its ID.
     * @returns {JournalPageSheet}
     */
    getPageSheet(page: JournalEntryPage | string): JournalPageSheet;
    /**
     * Turn to a specific page.
     * @param {string} pageId            The ID of the page to turn to.
     * @param {object} [options]
     * @param {string} [options.anchor]  Optionally an anchor slug to focus within that page.
     */
    goToPage(pageId: string, { anchor }?: {
        anchor?: string | undefined;
    }): any;
    /**
     * Determine whether a given page is visible to the current user.
     * @param {JournalEntryPage} page  The page.
     * @returns {boolean}
     */
    isPageVisible(page: JournalEntryPage): boolean;
    /**
     * Turn to the next page.
     */
    nextPage(): any;
    /**
     * Turn to the previous page.
     */
    previousPage(): any;
    /**
     * Toggle the search mode for this journal entry between name and full text search.
     */
    toggleSearchMode(): any;
    /**
     * Toggle the collapsed or expanded state of the sidebar.
     */
    toggleSidebar(): void;
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
     * Handle drag operations.
     * @param {DragEvent} event
     * @protected
     */
    protected _onDragStart(event: DragEvent): void;
    /**
     * Handle drop operations.
     * @param {DragEvent} event
     * @protected
     */
    protected _onDrop(event: DragEvent): Promise<any>;
    /**
     * @deprecated since v13 until v16.
     * @ignore
     */
    _renderAppV1PageView(element: any, sheet: any): Promise<void>;
    #private;
}
export type JournalSheetRenderOptions = DocumentSheetRenderOptions;
export type JournalSheetPageContext = {
    /**
     * The page ID.
     */
    id: string;
    /**
     * Whether the current user is allowed to edit the page.
     */
    editable: boolean;
    /**
     * Whether the page is currently hidden due to a search filter.
     */
    hidden: boolean;
    /**
     * The class name for the page entry in the table of contents.
     */
    tocClass: string;
    /**
     * The class name for the page entry in the pages view.
     */
    viewClass: string;
    /**
     * The page title.
     */
    name: string;
    /**
     * The page number in the table of contents.
     */
    number: number;
    /**
     * The ownership icon for the page entry in the table of contents.
     */
    icon: string;
    /**
     * The class name for the page's ownership level in the table of contents.
     */
    ownershipClass: string;
    /**
     * The ID of the category this page belongs to, if any.
     */
    category?: string | undefined;
    /**
     * The numeric sort value which orders this page relative to other pages in its
     * category.
     */
    sort: number;
    /**
     * Whether the page has not been assigned a category.
     */
    uncategorized?: boolean | undefined;
};
export type JournalSheetCategoryContext = {
    /**
     * The category ID.
     */
    id: string;
    /**
     * The category name.
     */
    name: string;
};
import JournalEntry from "@client/documents/journal-entry.mjs";
import type { ApplicationRenderContext } from "../../_types.mjs";
import type { JournalEntryPageHeading } from "@client/_types.mjs";
import JournalEntryPage from "@client/documents/journal-entry-page.mjs";
import type { DocumentSheetRenderOptions } from "../../api/document-sheet.mjs";
