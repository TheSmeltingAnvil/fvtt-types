/**
 * @typedef TabsConfiguration
 * @property {string} [group]            The name of the tabs group
 * @property {string} navSelector        The CSS selector used to target the navigation element for these tabs
 * @property {string} contentSelector    The CSS selector used to target the content container for these tabs
 * @property {string} initial            The tab name of the initially active tab
 * @property {Function|null} [callback]  An optional callback function that executes when the active tab is changed
 */
/**
 * A controller class for managing tabbed navigation within an Application instance.
 * @see {@link foundry.applications.api.ApplicationV2}
 *
 * @example Configure tab-control for a set of HTML elements
 * ```html
 * <!-- Example HTML -->
 * <nav class="tabs" data-group="primary-tabs">
 *   <a class="item" data-tab="tab1" data-group="primary-tabs">Tab 1</li>
 *   <a class="item" data-tab="tab2" data-group="primary-tabs">Tab 2</li>
 * </nav>
 *
 * <section class="content">
 *   <div class="tab" data-tab="tab1" data-group="primary-tabs">Content 1</div>
 *   <div class="tab" data-tab="tab2" data-group="primary-tabs">Content 2</div>
 * </section>
 * ```
 * Activate tab control in JavaScript
 * ```js
 * const tabs = new foundry.applications.ux.Tabs({navSelector: ".tabs", contentSelector: ".content", initial: "tab1"});
 * tabs.bind(html);
 * ```
 */
export default class Tabs {
    /**
     * @param {TabsConfiguration} config The Tabs Configuration to use for this tabbed container
     */
    constructor({ group, navSelector, contentSelector, initial, callback }?: TabsConfiguration);
    /**
     * The name of the tabs group
     * @type {string}
     */
    group: string;
    /**
     * The value of the active tab
     * @type {string}
     */
    active: string;
    /**
     * A callback function to trigger when the tab is changed
     * @type {Function|null}
     */
    callback: Function | null;
    /**
     * The CSS selector used to target the tab navigation element
     * @type {string}
     * @internal
     */
    _navSelector: string;
    /**
     * The CSS selector used to target the tab content element
     * @type {string}
     * @internal
     */
    _contentSelector: string;
    /**
     * A reference to the HTML navigation element the tab controller is bound to
     * @type {HTMLElement|null}
     * @internal
     */
    _nav: HTMLElement | null;
    /**
     * A reference to the HTML container element of the tab content
     * @type {HTMLElement|null}
     * @internal
     */
    _content: HTMLElement | null;
    /**
     * Bind the Tabs controller to an HTML application
     * @param {HTMLElement} html
     */
    bind(html: HTMLElement): void;
    /**
     * Activate a new tab by name
     * @param {string} tabName
     * @param {boolean} triggerCallback
     */
    activate(tabName: string, { triggerCallback }?: boolean): void;
    /**
     * Handle click events on the tab navigation entries
     * @param {PointerEvent} event    A left click event
     * @protected
     */
    protected _onClickNav(event: PointerEvent): void;
}
export type TabsConfiguration = {
    /**
     * The name of the tabs group
     */
    group?: string | undefined;
    /**
     * The CSS selector used to target the navigation element for these tabs
     */
    navSelector: string;
    /**
     * The CSS selector used to target the content container for these tabs
     */
    contentSelector: string;
    /**
     * The tab name of the initially active tab
     */
    initial: string;
    /**
     * An optional callback function that executes when the active tab is changed
     */
    callback?: Function | null | undefined;
};
