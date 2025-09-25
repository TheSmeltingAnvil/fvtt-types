/**
 * @import Application from "@client/appv1/api/application-v1.mjs"
 */
/**
 * @typedef ContextMenuEntry
 * @property {string} name                              The context menu label. Can be localized.
 * @property {string} [icon]                            A string containing an HTML icon element for the menu item.
 * @property {string} [classes]                         Additional CSS classes to apply to this menu item.
 * @property {string} [group]                           An identifier for a group this entry belongs to.
 * @property {ContextMenuJQueryCallback} callback       The function to call when the menu item is clicked.
 * @property {ContextMenuCondition|boolean} [condition] A function to call or boolean value to determine if this entry
 *                                                      appears in the menu.
 */
/**
 * @callback ContextMenuCondition
 * @param {jQuery|HTMLElement} html                     The element of the context menu entry.
 * @returns {boolean}                                   Whether the entry should be rendered in the context menu.
 */
/**
 * @callback ContextMenuCallback
 * @param {HTMLElement} target                          The element that the context menu has been triggered for.
 * @returns {unknown}
 */
/**
 * @callback ContextMenuJQueryCallback
 * @param {HTMLElement|jQuery} target                   The element that the context menu has been triggered for. Will
 *                                                      either be a jQuery object or an HTMLElement instance, depending
 *                                                      on how the ContextMenu was configured.
 * @returns {unknown}
 */
/**
 * @typedef ContextMenuOptions
 * @property {string} [eventName="contextmenu"] Optionally override the triggering event which can spawn the menu. If
 *                                              the menu is using fixed positioning, this event must be a MouseEvent.
 * @property {ContextMenuCallback} [onOpen]     A function to call when the context menu is opened.
 * @property {ContextMenuCallback} [onClose]    A function to call when the context menu is closed.
 * @property {boolean} [fixed=false]            If true, the context menu is given a fixed position rather than being
 *                                              injected into the target.
 * @property {boolean} [jQuery=true]            If true, callbacks will be passed jQuery objects instead of HTMLElement
 *                                              instances.
 */
/**
 * @typedef ContextMenuRenderOptions
 * @property {Event} [event]           The event that triggered the context menu opening.
 * @property {boolean} [animate=true]  Animate the context menu opening.
 */
/**
 * Display a right-click activated Context Menu which provides a dropdown menu of options.
 * A ContextMenu is constructed by designating a parent HTML container and a target selector.
 * An Array of menuItems defines the entries of the menu which is displayed.
 */
export default class ContextMenu {
    /**
     * Create a ContextMenu for this Application and dispatch hooks.
     * @param {Application} app                           The Application this ContextMenu belongs to.
     * @param {JQuery|HTMLElement} html                   The Application's rendered HTML.
     * @param {string} selector                           The target CSS selector which activates the menu.
     * @param {ContextMenuEntry[]} menuItems              The array of menu items being rendered.
     * @param {object} [options]                          Additional options to configure context menu initialization.
     * @param {string} [options.hookName="EntryContext"]  The name of the hook to call.
     * @returns {ContextMenu}
     * @deprecated since v13
     */
    static create(app: Application, html: JQuery | HTMLElement, selector: string, menuItems: ContextMenuEntry[], { hookName, ...options }?: {
        hookName?: string | undefined;
    }): ContextMenu;
    /**
     * Global listeners which apply once only to the document.
     */
    static eventListeners(): void;
    /**
     * Retrieve the configured DragDrop implementation.
     * @type {typeof ContextMenu}
     */
    static get implementation(): typeof ContextMenu;
    /**
     * @param {HTMLElement|jQuery} container              The HTML element that contains the context menu targets.
     * @param {string} selector                           A CSS selector which activates the context menu.
     * @param {ContextMenuEntry[]} menuItems              An Array of entries to display in the menu
     * @param {ContextMenuOptions} [options]              Additional options to configure the context menu.
     */
    constructor(container: HTMLElement | jQuery, selector: string, menuItems: ContextMenuEntry[], { eventName, onOpen, onClose, jQuery, fixed }?: ContextMenuOptions);
    /**
     * The array of menu items to render.
     * @type {Array<ContextMenuEntry & {element: HTMLElement}>}
     */
    menuItems: Array<ContextMenuEntry & {
        element: HTMLElement;
    }>;
    /**
     * A function to call when the context menu is opened.
     * @type {ContextMenuCallback}
     */
    onOpen: ContextMenuCallback;
    /**
     * A function to call when the context menu is closed.
     * @type {ContextMenuCallback}
     */
    onClose: ContextMenuCallback;
    /**
     * The menu element.
     * @type {HTMLElement}
     */
    get element(): HTMLElement;
    /**
     * A CSS selector to identify context menu targets.
     * @type {string}
     */
    get selector(): string;
    /**
     * The event name to listen for.
     * @type {string}
     */
    get eventName(): string;
    /**
     * Check which direction the menu is expanded in.
     * @type {boolean}
     */
    get expandUp(): boolean;
    /**
     * Whether to position the context menu as a fixed element, or inject it into the target.
     * @type {boolean}
     */
    get fixed(): boolean;
    /**
     * The parent HTML element to which the context menu is attached
     * @type {HTMLElement}
     */
    get target(): HTMLElement;
    /**
     * Animate the context menu's height when opening or closing.
     * @param {boolean} open      Whether the menu is opening or closing.
     * @returns {Promise<void>}   A Promise that resolves when the animation completes.
     * @protected
     */
    protected _animate(open?: boolean): Promise<void>;
    /**
     * Closes the menu and removes it from the DOM.
     * @param {object} [options]                Options to configure the closing behavior.
     * @param {boolean} [options.animate=true]  Animate the context menu closing.
     * @param {HTMLElement} [options.target]    The target element to close on.
     * @returns {Promise<void>}
     */
    close({ animate, target }?: {
        animate?: boolean | undefined;
        target?: HTMLElement | undefined;
    }): Promise<void>;
    /**
     * Close the menu and remove it from the DOM.
     * @param {object} [options]
     * @param {HTMLElement} [options.target]  The target element to close on.
     * @protected
     */
    protected _close({ target }?: {
        target?: HTMLElement | undefined;
    }): void;
    /**
     * Called before the context menu begins rendering.
     * @param {HTMLElement} target  The context target.
     * @param {ContextMenuRenderOptions} [options]
     * @returns {Promise<void>}
     * @protected
     */
    protected _preRender(target: HTMLElement, options?: ContextMenuRenderOptions): Promise<void>;
    /**
     * Render the Context Menu by iterating over the menuItems it contains.
     * Check the visibility of each menu item, and only render ones which are allowed by the item's logical condition.
     * Attach a click handler to each item which is rendered.
     * @param {HTMLElement} target  The target element to which the context menu is attached.
     * @param {ContextMenuRenderOptions} [options]
     * @returns {Promise<void>}     A Promise that resolves when the open animation has completed.
     */
    render(target: HTMLElement, options?: ContextMenuRenderOptions): Promise<void>;
    /**
     * Called after the context menu has finished rendering and animating open.
     * @param {ContextMenuRenderOptions} [options]
     * @returns {Promise<void>}
     * @protected
     */
    protected _onRender(options?: ContextMenuRenderOptions): Promise<void>;
    /**
     * Set the position of the context menu, taking into consideration whether the menu should expand upward or downward
     * @param {HTMLElement} menu       The context menu element.
     * @param {HTMLElement} target     The element that the context menu was spawned on.
     * @param {object} [options]
     * @param {Event} [options.event]  The event that triggered the context menu opening.
     * @protected
     */
    protected _setPosition(menu: HTMLElement, target: HTMLElement, { event }?: {
        event?: Event | undefined;
    }): void;
    /**
     * Inject the menu inside the target.
     * @param {HTMLElement} menu    The menu element.
     * @param {HTMLElement} target  The context target.
     * @protected
     */
    protected _injectMenu(menu: HTMLElement, target: HTMLElement): void;
    /**
     * Set the context menu at a fixed position in the viewport.
     * @param {HTMLElement} menu       The menu element.
     * @param {HTMLElement} target     The context target.
     * @param {object} [options]
     * @param {Event} [options.event]  The event that triggered the context menu opening.
     * @protected
     */
    protected _setFixedPosition(menu: HTMLElement, target: HTMLElement, { event }?: {
        event?: Event | undefined;
    }): void;
    /**
     * Local listeners which apply to each ContextMenu instance which is created.
     * @param {HTMLElement} menu  The context menu element.
     */
    activateListeners(menu: HTMLElement): void;
    /**
     * Handle context menu activation.
     * @param {Event} event  The triggering event.
     * @protected
     */
    protected _onActivate(event: Event): Promise<void> | undefined;
    /**
     * @deprecated since v13 until v15
     * @ignore
     */
    get _expandUp(): boolean;
    /**
     * @deprecated since v13 until v15
     * @ignore
     */
    get menu(): any;
    #private;
}
export type ContextMenuEntry = {
    /**
     * The context menu label. Can be localized.
     */
    name: string;
    /**
     * A string containing an HTML icon element for the menu item.
     */
    icon?: string | undefined;
    /**
     * Additional CSS classes to apply to this menu item.
     */
    classes?: string | undefined;
    /**
     * An identifier for a group this entry belongs to.
     */
    group?: string | undefined;
    /**
     * The function to call when the menu item is clicked.
     */
    callback: ContextMenuJQueryCallback;
    /**
     * A function to call or boolean value to determine if this entry
     *  appears in the menu.
     */
    condition?: boolean | ContextMenuCondition | undefined;
};
export type ContextMenuCondition = (html: jQuery | HTMLElement) => boolean;
export type ContextMenuCallback = (target: HTMLElement) => unknown;
export type ContextMenuJQueryCallback = (target: HTMLElement | jQuery) => unknown;
export type ContextMenuOptions = {
    /**
     * Optionally override the triggering event which can spawn the menu. If
     *  the menu is using fixed positioning, this event must be a MouseEvent.
     */
    eventName?: string | undefined;
    /**
     * A function to call when the context menu is opened.
     */
    onOpen?: ContextMenuCallback | undefined;
    /**
     * A function to call when the context menu is closed.
     */
    onClose?: ContextMenuCallback | undefined;
    /**
     * If true, the context menu is given a fixed position rather than being
     *             injected into the target.
     */
    fixed?: boolean | undefined;
    /**
     * If true, callbacks will be passed jQuery objects instead of HTMLElement
     *             instances.
     */
    jQuery?: boolean | undefined;
};
export type ContextMenuRenderOptions = {
    /**
     * The event that triggered the context menu opening.
     */
    event?: Event | undefined;
    /**
     * Animate the context menu opening.
     */
    animate?: boolean | undefined;
};
import type Application from "@client/appv1/api/application-v1.mjs";
