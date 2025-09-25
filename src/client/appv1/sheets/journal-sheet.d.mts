/**
 * @import {JournalPageSheet} from "./journal-page-sheet.mjs";
 * @import {ApplicationV1Options} from "../api/application-v1.mjs";
 * @import {DocumentSheetV1Options} from "../api/document-sheet-v1.mjs";
 */
/**
 * @typedef JournalSheetOptions
 * @property {string|null} [sheetMode]  The current display mode of the journal. Either 'text' or 'image'.
 */
/**
 * The Application responsible for displaying and editing a single JournalEntry document.
 * @deprecated since v13
 * @param {JournalEntry} object            The JournalEntry instance which is being edited
 * @param {JournalSheetOptions & DocumentSheetV1Options & ApplicationV1Options} [options] Application options
 */
export default class JournalSheet extends DocumentSheet {
  /**
   * @override
   * @returns {JournalSheetOptions & DocumentSheetV1Options & ApplicationV1Options}
   */
  static override get defaultOptions(): JournalSheetOptions & DocumentSheetV1Options & ApplicationV1Options
  /**
   * Available view modes for journal entries.
   * @enum {number}
   */
  static VIEW_MODES: {
    SINGLE: number
    MULTIPLE: number
  }
  /**
   * The minimum amount of content that must be visible before the next page is marked as in view. Cannot be less than
   * 25% without also modifying the IntersectionObserver threshold.
   * @type {number}
   */
  static INTERSECTION_RATIO: number
  /**
   * Icons for page ownership.
   * @enum {string}
   */
  static OWNERSHIP_ICONS: {
    0: string
    2: string
    3: string
  }
  /**
   * The cached list of processed page entries.
   * This array is populated in the getData method.
   * @type {object[]}
   * @protected
   */
  protected _pages: object[]
  /**
   * Get the journal entry's current view mode.
   * @see {@link JournalSheet.VIEW_MODES}
   * @returns {number}
   */
  get mode(): number
  /**
   * The current search mode for this journal
   * @type {string}
   */
  get searchMode(): string
  /**
   * Toggle the search mode for this journal between "name" and "full" text search
   */
  toggleSearchMode(): void
  /**
   * The pages that are currently scrolled into view and marked as 'active' in the sidebar.
   * @type {HTMLElement[]}
   */
  get pagesInView(): HTMLElement[]
  /**
   * The index of the currently viewed page.
   * @type {number}
   */
  get pageIndex(): number
  /**
   * The currently active IntersectionObserver.
   * @type {IntersectionObserver}
   */
  get observer(): IntersectionObserver
  /**
   * Is the table-of-contents sidebar currently collapsed?
   * @type {boolean}
   */
  get sidebarCollapsed(): boolean
  /** @inheritdoc */
  getData(options?: object): {
    cssClass: string
    editable: any
    document: ClientDocument
    data: any
    limited: any
    options: object
    owner: any
    title: string
  }
  /**
   * Prepare pages for display.
   * @returns {JournalEntryPage[]}  The sorted list of pages.
   * @protected
   */
  protected _getPageData(): JournalEntryPage[]
  /**
   * Identify which page of the journal sheet should be currently rendered.
   * This can be controlled by options passed into the render method or by a subclass override.
   * @param {object} options    Sheet rendering options
   * @param {number} [options.pageIndex]    A numbered index of page to render
   * @param {string} [options.pageId]       The ID of a page to render
   * @returns {number}      The currently displayed page index
   * @protected
   */
  protected _getCurrentPage({
    pageIndex,
    pageId,
  }?: {
    pageIndex?: number | undefined
    pageId?: string | undefined
  }): number
  /**
   * Activate listeners after page content has been injected.
   * @protected
   */
  protected _activatePageListeners(): void
  /**
   * @param {boolean} [force]
   * @param {object} [options]
   * @param {number} [options.mode]       Render the sheet in a given view mode, see {@link JournalSheet.VIEW_MODES}.
   * @param {string} [options.pageId]     Render the sheet with the page with the given ID in view.
   * @param {number} [options.pageIndex]  Render the sheet with the page at the given index in view.
   * @param {string} [options.anchor]     Render the sheet with the given anchor for the given page in view.
   * @param {boolean} [options.tempOwnership]  Whether the journal entry or one of its pages is being shown to players
   *                                           who might otherwise not have permission to view it.
   * @param {boolean} [options.collapsed] Render the sheet with the TOC sidebar collapsed?
   * @override
   */
  override _render(
    force?: boolean,
    options?: {
      mode?: number | undefined
      pageId?: string | undefined
      pageIndex?: number | undefined
      anchor?: string | undefined
      tempOwnership?: boolean | undefined
      collapsed?: boolean | undefined
    },
  ): Promise<void>
  /**
   * Update child views inside the main sheet.
   * @returns {Promise<void>}
   * @protected
   */
  protected _renderPageViews(): Promise<void>
  /**
   * Render the page view for an app v1 page sheet.
   * @param {HTMLElement} element     The existing page element in the journal entry view.
   * @param {JournalPageSheet} sheet  The page sheet.
   * @returns {Promise<void>}
   * @protected
   */
  protected _renderAppV1PageView(element: HTMLElement, sheet: JournalPageSheet): Promise<void>
  /**
   * Render the page view for a page sheet.
   * @param {HTMLElement} element          The existing page element in the journal entry view.
   * @param {JournalEntryPageSheet} sheet  The page sheet.
   * @returns {Promise<void>}
   * @protected
   */
  protected _renderPageView(element: HTMLElement, sheet: JournalEntryPageSheet): Promise<void>
  /**
   * Add headings to the table of contents for the given page node.
   * @param {HTMLElement} pageNode                         The HTML node of the page's rendered contents.
   * @param {Record<string, JournalEntryPageHeading>} toc  The page's table of contents.
   * @protected
   */
  protected _renderHeadings(pageNode: HTMLElement, toc: Record<string, JournalEntryPageHeading>): Promise<void>
  /**
   * Create an intersection observer to maintain a list of pages that are in view.
   * @protected
   */
  protected _observePages(): void
  /**
   * Create an intersection observer to maintain a list of headings that are in view. This is much more performant than
   * calling getBoundingClientRect on all headings whenever we want to determine this list.
   * @protected
   */
  protected _observeHeadings(): void
  /**
   * Handle clicking the previous and next page buttons.
   * @param {JQuery.TriggeredEvent} event  The button click event.
   * @protected
   */
  protected _onAction(event: JQuery.TriggeredEvent): any
  /**
   * Prompt the user with a Dialog for creation of a new JournalEntryPage
   */
  createPage(): any
  /**
   * Turn to the previous page.
   */
  previousPage(): foundry.appv1.api.Application | undefined
  /**
   * Turn to the next page.
   */
  nextPage(): foundry.appv1.api.Application | undefined
  /**
   * Turn to a specific page.
   * @param {string} pageId    The ID of the page to turn to.
   * @param {string} [anchor]  Optionally an anchor slug to focus within that page.
   */
  goToPage(pageId: string, anchor?: string): foundry.appv1.api.Application | undefined
  /**
   * Retrieve the sheet instance for rendering this page inline.
   * @param {string} pageId  The ID of the page.
   * @returns {JournalPageSheet}
   */
  getPageSheet(pageId: string): JournalPageSheet
  /**
   * Determine whether a page is visible to the current user.
   * @param {JournalEntryPage} page  The page.
   * @returns {boolean}
   */
  isPageVisible(page: JournalEntryPage): boolean
  /**
   * Toggle the collapsed or expanded state of the Journal Entry table-of-contents sidebar.
   */
  toggleSidebar(): void
  /**
   * Update the disabled state of the previous and next page buttons.
   * @protected
   */
  protected _updateButtonState(): void
  /**
   * Edit one of this JournalEntry's JournalEntryPages.
   * @param {JQuery.TriggeredEvent} event  The originating page edit event.
   * @protected
   */
  protected _onEditPage(event: JQuery.TriggeredEvent): any
  /**
   * Handle clicking an entry in the sidebar to scroll that heading into view.
   * @param {JQuery.TriggeredEvent} event  The originating click event.
   * @protected
   */
  protected _onClickPageLink(event: JQuery.TriggeredEvent): void
  /**
   * Handle clicking an image to pop it out for fullscreen view.
   * @param {MouseEvent} event  The click event.
   * @protected
   */
  protected _onClickImage(event: MouseEvent): void
  /**
   * Handle new pages scrolling into view.
   * @param {IntersectionObserverEntry[]} entries  An Array of elements that have scrolled into or out of view.
   * @param {IntersectionObserver} observer        The IntersectionObserver that invoked this callback.
   * @protected
   */
  protected _onPageScroll(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void
  /**
   * Highlights the currently viewed page in the sidebar.
   * @protected
   */
  protected _activatePagesInView(): void
  /**
   * If the set of active pages has changed, various elements in the sidebar will expand and collapse. For particularly
   * long ToCs, this can leave the scroll position of the sidebar in a seemingly random state. We try to do our best to
   * sync the sidebar scroll position with the current journal viewport.
   * @protected
   */
  protected _synchronizeSidebar(): void
  /** @inheritdoc */
  _contextMenu(html: any): void
  /**
   * Handle opening the context menu.
   * @param {HTMLElement} target  The element the context menu has been triggered for.
   * @protected
   */
  protected _onContextMenuOpen(target: HTMLElement): void
  /**
   * Handle closing the context menu.
   * @param {HTMLElement} target  The element the context menu has been triggered for.
   * @protected
   */
  protected _onContextMenuClose(target: HTMLElement): void
  /**
   * Get the set of ContextMenu options which should be used for JournalEntryPages in the sidebar.
   * @returns {ContextMenuEntry[]}  The Array of context options passed to the ContextMenu instance.
   * @protected
   */
  protected _getEntryContextOptions(): ContextMenuEntry[]
  /**
   * Handle requests to show the referenced Journal Entry to other Users
   * Save the form before triggering the show request, in case content has changed
   * @param {Event} event   The triggering click event
   */
  _onShowPlayers(event: Event): Promise<void>
  /** @inheritdoc */
  _canDragStart(selector: any): any
  /** @inheritdoc */
  _canDragDrop(selector: any): any
  /** @inheritdoc */
  _onDragStart(event: any): void
  /** @inheritdoc */
  _onDrop(event: any): Promise<any>
  /** @inheritdoc */
  _onSearchFilter(event: any, query: any, rgx: any, html: any): void
  #private
}
export type JournalSheetOptions = {
  /**
   * The current display mode of the journal. Either 'text' or 'image'.
   */
  sheetMode?: string | null | undefined
}
import JournalEntryPage from "../../documents/journal-entry-page.mjs"
import type { ApplicationV1Options } from "../api/application-v1.mjs"
import type { DocumentSheetV1Options } from "../api/document-sheet-v1.mjs"
import DocumentSheet from "../api/document-sheet-v1.mjs"
import type { JournalPageSheet } from "./journal-page-sheet.mjs"
