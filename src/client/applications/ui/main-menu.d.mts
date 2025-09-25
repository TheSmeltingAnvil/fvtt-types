/**
 * The main menu application which is toggled via the ESC key.
 * @extends ApplicationV2
 * @mixes HandlebarsApplication
 */
export default class MainMenu extends ApplicationV2<foundry.applications.types.ApplicationConfiguration, foundry.applications.types.ApplicationRenderOptions> {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        id: string;
        classes: string[];
        tag: string;
        window: {
            frame: boolean;
            positioned: boolean;
        };
        actions: {
            menuItem: typeof MainMenu.#onClickMenuItem;
        };
    };
    /** @override */
    static override PARTS: {
        items: {
            template: string;
        };
    };
    /**
     * @typedef MainMenuItem
     * @property {string} label
     * @property {string} icon
     * @property {boolean|function():boolean} enbaled
     * @property {function(event):void} onClick
     */
    /**
     * Configuration of Main Menu items.
     * @type {Record<string, MainMenuItem>}
     */
    static ITEMS: Record<string, {
        label: string;
        icon: string;
        enbaled: boolean | (() => boolean);
        onClick: (arg0: Event | undefined) => void;
    }>;
    /**
     * Handle click actions on menu items.
     * @this {MainMenu}
     * @param {PointerEvent} event
     */
    static #onClickMenuItem(this: MainMenu, event: PointerEvent): void;
    constructor(options?: Partial<foundry.applications.types.ApplicationConfiguration> | undefined);
    /**
     * A record of menu items which are currently enabled.
     * @returns {Record<string, MainMenuItem>}
     */
    get items(): Record<string, {
        label: string;
        icon: string;
        enbaled: boolean | (() => boolean);
        onClick: (arg0: Event | undefined) => void;
    }>;
    /** @override */
    override _insertElement(element: any): void;
    /** @override */
    override _onFirstRender(context: any, options: any): Promise<void>;
    /** @override */
    override _prepareContext(_options: any): Promise<{
        items: Record<string, {
            label: string;
            icon: string;
            enbaled: boolean | (() => boolean);
            onClick: (arg0: Event | undefined) => void;
        }>;
    }>;
    /**
     * Toggle display of the menu, or render it in the first place.
     * @returns {Promise<void>}
     */
    toggle(): Promise<void>;
}
import ApplicationV2 from "../api/application.mjs";
