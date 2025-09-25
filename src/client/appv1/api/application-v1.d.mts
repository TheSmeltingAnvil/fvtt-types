/**
 * @typedef ApplicationV1Options
 * Configuration options which control how the application is rendered. Application subclasses may add additional
 * supported options, but these base configurations are supported for all Applications. The values passed to the
 * constructor are combined with the defaultOptions defined at the class level.
 * @property {string|null} [baseApplication]  A named "base application" which generates an additional hook
 * @property {number|null} [width]         The default pixel width for the rendered HTML
 * @property {number|string|null} [height]  The default pixel height for the rendered HTML
 * @property {number|null} [top]           The default offset-top position for the rendered HTML
 * @property {number|null} [left]          The default offset-left position for the rendered HTML
 * @property {number|null} [scale]         A transformation scale for the rendered HTML
 * @property {boolean} [popOut]            Whether to display the application as a pop-out container
 * @property {boolean} [minimizable]       Whether the rendered application can be minimized (popOut only)
 * @property {boolean} [resizable]         Whether the rendered application can be drag-resized (popOut only)
 * @property {string} [id]                 The default CSS id to assign to the rendered HTML
 * @property {string[]} [classes]          An array of CSS string classes to apply to the rendered HTML
 * @property {string} [title]              A default window title string (popOut only)
 * @property {string|null} [template]      The default HTML template path to render for this Application
 * @property {string[]} [scrollY]          A list of unique CSS selectors which target containers that should have their
 *                                         vertical scroll positions preserved during a re-render.
 * @property {TabsConfiguration[]} [tabs]  An array of tabbed container configurations which should be enabled for the
 *                                         application.
 * @property {DragDropConfiguration[]} dragDrop An array of CSS selectors for configuring the application's
 *                                              {@link foundry.applications.ux.DragDrop} behaviour.
 * @property {SearchFilterConfiguration[]} filters  An array of
 *   {@link foundry.applications.ux.SearchFilter} configuration objects.
 */
/**
 * @typedef {{label: string, class: string, icon: string, [tooltip]: string,
 *   onclick: Function|null}} ApplicationV1HeaderButton
 */
/**
 * The legacy application window that is rendered for some UI elements in Foundry VTT.
 * @abstract
 * @deprecated since v13
 */
export default class Application {
    static _warnedAppV1: boolean;
    /**
     * The sequence of rendering states that track the Application life-cycle.
     * @enum {number}
     */
    static RENDER_STATES: Readonly<{
        readonly ERROR: -3;
        readonly CLOSING: -2;
        readonly CLOSED: -1;
        readonly NONE: 0;
        readonly RENDERING: 1;
        readonly RENDERED: 2;
    }>;
    /**
     * Assign the default options configuration which is used by this Application class. The options and values defined
     * in this object are merged with any provided option values which are passed to the constructor upon initialization.
     * Application subclasses may include additional options which are specific to their usage.
     * @returns {ApplicationV1Options}
     */
    static get defaultOptions(): ApplicationV1Options;
    /**
     * Return the inheritance chain for this Application class up to (and including) it's base Application class.
     * @returns {Function[]}
     * @internal
     */
    static _getInheritanceChain(): Function[];
    /**
     * @param {ApplicationV1Options} [options] Configuration options which control how the application is rendered.
     */
    constructor(options?: ApplicationV1Options);
    /**
     * The options provided to this application upon initialization
     * @type {object}
     */
    options: object;
    /**
     * An internal reference to the HTML element this application renders
     * @type {jQuery}
     * @internal
     */
    _element: jQuery;
    /**
     * Track the current position and dimensions of the Application UI
     * @type {object}
     */
    position: object;
    /**
     * DragDrop workflow handlers which are active for this Application
     * @type {DragDrop[]}
     * @internal
     */
    _dragDrop: DragDrop[];
    /**
     * Tab navigation handlers which are active for this Application
     * @type {Tabs[]}
     * @internal
     */
    _tabs: Tabs[];
    /**
     * SearchFilter handlers which are active for this Application
     * @type {SearchFilter[]}
     * @internal
     */
    _searchFilters: SearchFilter[];
    /**
     * Track whether the Application is currently minimized
     * @type {boolean|null}
     * @internal
     */
    _minimized: boolean | null;
    /**
     * The current render state of the Application
     * @see {@link Application.RENDER_STATES}
     * @type {number}
     * @protected
     */
    protected _state: number;
    /**
     * The prior render state of this Application.
     * This allows for rendering logic to understand if the application is being rendered for the first time.
     * @see {Application.RENDER_STATES}
     * @type {number}
     * @protected
     */
    protected _priorState: number;
    /**
     * Track the most recent scroll positions for any vertically scrolling containers
     * @type {object | null}
     * @internal
     */
    _scrollPositions: object | null;
    /**
     * The application ID is a unique incrementing integer which is used to identify every application window
     * drawn by the VTT
     * @type {number}
     */
    appId: number;
    /**
     * Create drag-and-drop workflow handlers for this Application
     * @returns {DragDrop[]}     An array of DragDrop handlers
     * @internal
     */
    _createDragDropHandlers(): DragDrop[];
    /**
     * Create tabbed navigation handlers for this Application
     * @returns {Tabs[]}     An array of Tabs handlers
     * @internal
     */
    _createTabHandlers(): Tabs[];
    /**
     * Create search filter handlers for this Application
     * @returns {SearchFilter[]}  An array of SearchFilter handlers
     * @internal
     */
    _createSearchFilters(): SearchFilter[];
    /**
     * Return the CSS application ID which uniquely references this UI element
     * @type {string}
     */
    get id(): string;
    /**
     * Return the active application element, if it currently exists in the DOM
     * @type {jQuery}
     */
    get element(): jQuery;
    /**
     * The path to the HTML template file which should be used to render the inner content of the app
     * @type {string}
     */
    get template(): string;
    /**
     * Control the rendering style of the application. If popOut is true, the application is rendered in its own
     * wrapper window, otherwise only the inner app content is rendered
     * @type {boolean}
     */
    get popOut(): boolean;
    /**
     * Return a flag for whether the Application instance is currently rendered
     * @type {boolean}
     */
    get rendered(): boolean;
    /**
     * Whether the Application is currently closing.
     * @type {boolean}
     */
    get closing(): boolean;
    /**
     * An Application window should define its own title definition logic which may be dynamic depending on its data
     * @type {string}
     */
    get title(): string;
    /**
     * An application should define the data object used to render its template.
     * This function may either return an Object directly, or a Promise which resolves to an Object
     * If undefined, the default implementation will return an empty object allowing only for rendering of static HTML
     * @param {object} options
     * @returns {object|Promise<object>}
     */
    getData(options?: object): object | Promise<object>;
    /**
     * Render the Application by evaluating its HTML template against the object of data provided by the getData method
     * If the Application is rendered as a pop-out window, wrap the contained HTML in an outer frame with window controls
     *
     * @param {boolean} force   Add the rendered application to the DOM if it is not already present. If false, the
     *                          Application will only be re-rendered if it is already present.
     * @param {object} options  Additional rendering options which are applied to customize the way that the Application
     *                          is rendered in the DOM.
     *
     * @param {number} [options.left]           The left positioning attribute
     * @param {number} [options.top]            The top positioning attribute
     * @param {number} [options.width]          The rendered width
     * @param {number} [options.height]         The rendered height
     * @param {number} [options.scale]          The rendered transformation scale
     * @param {boolean} [options.focus=false]   Apply focus to the application, maximizing it and bringing it to the top
     *                                          of the vertical stack.
     * @param {string} [options.renderContext]  A context-providing string which suggests what event triggered the render
     * @param {object} [options.renderData]     The data change which motivated the render request
     *
     * @returns {Application}                 The rendered Application instance
     *
     */
    render(force?: boolean, options?: {
        left?: number | undefined;
        top?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        scale?: number | undefined;
        focus?: boolean | undefined;
        renderContext?: string | undefined;
        renderData?: object | undefined;
    }): Application;
    /**
     * An asynchronous inner function which handles the rendering of the Application
     * @fires renderApplication
     * @param {boolean} force     Render and display the application even if it is not currently displayed.
     * @param {object} options    Additional options which update the current values of the Application#options object
     * @returns {Promise<void>}   A Promise that resolves to the Application once rendering is complete
     * @protected
     */
    protected _render(force?: boolean, options?: object): Promise<void>;
    /**
     * Call all hooks for all applications in the inheritance chain.
     * @param {string|((className: string) => string)} hookName   The hook being triggered, which formatted
     *                                                            with the Application class name
     * @param {...*} hookArgs                                     The arguments passed to the hook calls
     * @protected
     */
    protected _callHooks(hookName: string | ((className: string) => string), ...hookArgs: any[]): void;
    /**
     * Persist the scroll positions of containers within the app before re-rendering the content
     * @param {jQuery} html           The HTML object being traversed
     * @protected
     */
    protected _saveScrollPositions(html: jQuery): void;
    /**
     * Restore the scroll positions of containers within the app after re-rendering the content
     * @param {jQuery} html           The HTML object being traversed
     * @protected
     */
    protected _restoreScrollPositions(html: jQuery): void;
    /**
     * Render the outer application wrapper
     * @returns {Promise<jQuery>}   A promise resolving to the constructed jQuery object
     * @protected
     */
    protected _renderOuter(): Promise<jQuery>;
    /**
     * Render the inner application content
     * @param {object} data         The data used to render the inner template
     * @returns {Promise<jQuery>}   A promise resolving to the constructed jQuery object
     * @internal
     */
    _renderInner(data: object): Promise<jQuery>;
    /**
     * Customize how inner HTML is replaced when the application is refreshed
     * @param {jQuery} element      The original HTML processed as a jQuery object
     * @param {jQuery} html         New updated HTML as a jQuery object
     * @internal
     */
    _replaceHTML(element: jQuery, html: jQuery): void;
    /**
     * Customize how a new HTML Application is added and first appears in the DOM
     * @param {jQuery} html       The HTML element which is ready to be added to the DOM
     * @internal
     */
    _injectHTML(html: jQuery): void;
    /**
     * Specify the set of config buttons which should appear in the Application header.
     * Buttons should be returned as an Array of objects.
     * The header buttons which are added to the application can be modified by the getApplicationV1HeaderButtons hook.
     * @fires getApplicationHeaderButtons
     * @returns {ApplicationV1HeaderButton[]}
     * @protected
     */
    protected _getHeaderButtons(): ApplicationV1HeaderButton[];
    /**
     * Create a {@link foundry.applications.ux.ContextMenu} for this Application.
     * @param {jQuery} html  The Application's HTML.
     * @internal
     */
    _contextMenu(html: jQuery): void;
    /**
     * Activate required listeners which must be enabled on every Application.
     * These are internal interactions which should not be overridden by downstream subclasses.
     * @param {jQuery} html
     * @protected
     */
    protected _activateCoreListeners(html: jQuery): void;
    /**
     * After rendering, activate event listeners which provide interactivity for the Application.
     * This is where user-defined Application subclasses should attach their event-handling logic.
     * @param {jQuery} html
     */
    activateListeners(html: jQuery): void;
    /**
     * Change the currently active tab
     * @param {string} tabName      The target tab name to switch to
     * @param {object} options      Options which configure changing the tab
     * @param {string} options.group    A specific named tab group, useful if multiple sets of tabs are present
     * @param {boolean} options.triggerCallback  Whether to trigger tab-change callback functions
     */
    activateTab(tabName: string, { group, triggerCallback }?: {
        group: string;
        triggerCallback: boolean;
    }): void;
    /**
     * Handle changes to the active tab in a configured Tabs controller
     * @param {MouseEvent|null} event   A left click event
     * @param {Tabs} tabs               The Tabs controller
     * @param {string} active           The new active tab name
     * @protected
     */
    protected _onChangeTab(event: MouseEvent | null, tabs: Tabs, active: string): void;
    /**
     * Handle changes to search filtering controllers which are bound to the Application
     * @param {KeyboardEvent} event   The key-up event from keyboard input
     * @param {string} query          The raw string input to the search field
     * @param {RegExp} rgx            The regular expression to test against
     * @param {HTMLElement} html      The HTML element which should be filtered
     * @protected
     */
    protected _onSearchFilter(event: KeyboardEvent, query: string, rgx: RegExp, html: HTMLElement): void;
    /**
     * Define whether a user is able to begin a dragstart workflow for a given drag selector
     * @param {string} selector       The candidate HTML selector for dragging
     * @returns {boolean}             Can the current user drag this selector?
     * @protected
     */
    protected _canDragStart(selector: string): boolean;
    /**
     * Define whether a user is able to conclude a drag-and-drop workflow for a given drop selector
     * @param {string} selector       The candidate HTML selector for the drop target
     * @returns {boolean}             Can the current user drop on this selector?
     * @protected
     */
    protected _canDragDrop(selector: string): boolean;
    /**
     * Callback actions which occur at the beginning of a drag start workflow.
     * @param {DragEvent} event       The originating DragEvent
     * @protected
     */
    protected _onDragStart(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is over a drop target.
     * @param {DragEvent} event       The originating DragEvent
     * @protected
     */
    protected _onDragOver(event: DragEvent): void;
    /**
     * Callback actions which occur when a dragged element is dropped on a target.
     * @param {DragEvent} event       The originating DragEvent
     * @protected
     */
    protected _onDrop(event: DragEvent): void;
    /**
     * Bring the application to the top of the rendering stack
     */
    bringToTop(): void;
    /**
     * A convenience alias for {@link bringToTop} for when operating on an object that is either an Application or an
     * {@link ApplicationV2}
     */
    bringToFront(): void;
    /**
     * Close the application and un-register references to it within UI mappings
     * This function returns a Promise which resolves once the window closing animation concludes
     * @fires closeApplication
     * @param {object} [options={}] Options which affect how the Application is closed
     * @returns {Promise<void>}     A Promise which resolves once the application is closed
     */
    close(options?: object): Promise<void>;
    /**
     * Minimize the pop-out window, collapsing it to a small tab
     * Take no action for applications which are not of the pop-out variety or apps which are already minimized
     * @returns {Promise<void>}  A Promise which resolves once the minimization action has completed
     */
    minimize(): Promise<void>;
    /**
     * Maximize the pop-out window, expanding it to its original size
     * Take no action for applications which are not of the pop-out variety or are already maximized
     * @returns {Promise<void>}    A Promise which resolves once the maximization action has completed
     */
    maximize(): Promise<void>;
    /**
     * Set the application position and store its new location.
     * Returns the updated position object for the application containing the new values.
     * @param {object} position                   Positional data
     * @param {number|null} position.left            The left offset position in pixels
     * @param {number|null} position.top             The top offset position in pixels
     * @param {number|null} position.width           The application width in pixels
     * @param {number|string|null} position.height   The application height in pixels
     * @param {number|null} position.scale           The application scale as a numeric factor where 1.0 is default
     * @returns {{left: number, top: number, width: number, height: number, scale:number}|void}
     */
    setPosition({ left, top, width, height, scale }?: {
        left: number | null;
        top: number | null;
        width: number | null;
        height: number | string | null;
        scale: number | null;
    }): {
        left: number;
        top: number;
        width: number;
        height: number;
        scale: number;
    } | void;
    /**
     * Handle application minimization behavior - collapsing content and reducing the size of the header
     * @param {Event} ev
     * @internal
     */
    _onToggleMinimize(ev: Event): void;
    /**
     * Additional actions to take when the application window is resized
     * @param {Event} event
     * @internal
     */
    _onResize(event: Event): void;
    /**
     * Wait for any images present in the Application to load.
     * @returns {Promise<void>}  A Promise that resolves when all images have loaded.
     * @protected
     */
    protected _waitForImages(): Promise<void>;
}
/**
 * Configuration options which control how the application is rendered. Application subclasses may add additional
 * supported options, but these base configurations are supported for all Applications. The values passed to the
 * constructor are combined with the defaultOptions defined at the class level.
 */
export type ApplicationV1Options = {
    /**
     * A named "base application" which generates an additional hook
     */
    baseApplication?: string | null | undefined;
    /**
     * The default pixel width for the rendered HTML
     */
    width?: number | null | undefined;
    /**
     * The default pixel height for the rendered HTML
     */
    height?: string | number | null | undefined;
    /**
     * The default offset-top position for the rendered HTML
     */
    top?: number | null | undefined;
    /**
     * The default offset-left position for the rendered HTML
     */
    left?: number | null | undefined;
    /**
     * A transformation scale for the rendered HTML
     */
    scale?: number | null | undefined;
    /**
     * Whether to display the application as a pop-out container
     */
    popOut?: boolean | undefined;
    /**
     * Whether the rendered application can be minimized (popOut only)
     */
    minimizable?: boolean | undefined;
    /**
     * Whether the rendered application can be drag-resized (popOut only)
     */
    resizable?: boolean | undefined;
    /**
     * The default CSS id to assign to the rendered HTML
     */
    id?: string | undefined;
    /**
     * An array of CSS string classes to apply to the rendered HTML
     */
    classes?: string[] | undefined;
    /**
     * A default window title string (popOut only)
     */
    title?: string | undefined;
    /**
     * The default HTML template path to render for this Application
     */
    template?: string | null | undefined;
    /**
     * A list of unique CSS selectors which target containers that should have their
     *           vertical scroll positions preserved during a re-render.
     */
    scrollY?: string[] | undefined;
    /**
     * An array of tabbed container configurations which should be enabled for the
     *   application.
     */
    tabs?: TabsConfiguration[] | undefined;
    /**
     * An array of CSS selectors for configuring the application's
     * {@link foundry.applications.ux.DragDrop} behaviour.
     */
    dragDrop: DragDropConfiguration[];
    /**
     * An array of
     * {@link foundry.applications.ux.SearchFilter} configuration objects.
     */
    filters: SearchFilterConfiguration[];
};
export type ApplicationV1HeaderButton = {
    label: string;
    class: string;
    icon: string;
    [tooltip]: string;
    onclick: Function | null;
};
import { DragDrop } from "@client/applications/ux/_module.mjs";
import { Tabs } from "@client/applications/ux/_module.mjs";
import { SearchFilter } from "@client/applications/ux/_module.mjs";
import type { TabsConfiguration } from "@client/applications/ux/tabs.mjs";
import type { DragDropConfiguration } from "@client/applications/ux/drag-drop.mjs";
import type { SearchFilterConfiguration } from "@client/applications/ux/search-filter.mjs";
