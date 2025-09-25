/**
 * An action bar displayed at the bottom of the game view which contains Macros as interactive buttons.
 * The Hotbar supports 5 pages of macros which can be dragged and dropped to organize as you wish.
 * Left-clicking a Macro button triggers its effect.
 * Right-clicking the button displays a context menu of Macro options.
 * The number keys 1 through 0 activate numbered hotbar slots.
 *
 * @extends ApplicationV2
 * @mixes HandlebarsApplication
 */
export default class Hotbar extends ApplicationV2<foundry.applications.types.ApplicationConfiguration, foundry.applications.types.ApplicationRenderOptions> {
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
            execute: typeof Hotbar.#onExecute;
            lock: typeof Hotbar.#onToggleLock;
            mute: typeof Hotbar.#onToggleMute;
            menu: typeof Hotbar.#onToggleMenu;
            clear: typeof Hotbar.#onClear;
            page: typeof Hotbar.#onPage;
        };
    };
    /** @override */
    static override PARTS: {
        hotbar: {
            root: boolean;
            template: string;
        };
    };
    /**
     * A reusable helper that can be used for toggling display of a document sheet.
     * @param {string} uuid     The Document UUID to display
     * @returns {Promise<void>}
     */
    static toggleDocumentSheet(uuid: string): Promise<void>;
    /**
     * Handle click events to execute a Macro or create a new Macro.
     * @this {Hotbar}
     * @param {PointerEvent} event
     * @returns {Promise<void>}
     */
    static #onExecute(this: Hotbar, event: PointerEvent): Promise<void>;
    /**
     * Handle click events to toggle the hotbar locked state.
     * @this {Hotbar}
     * @returns {Promise<void>}
     */
    static #onToggleLock(this: Hotbar): Promise<void>;
    /**
     * Handle click events to toggle the global mute state.
     * @this {Hotbar}
     * @returns {Promise<void>}
     */
    static #onToggleMute(this: Hotbar): Promise<void>;
    /**
     * Handle click events to toggle the game main menu.
     * @this {Hotbar}
     * @returns {Promise<void>}
     */
    static #onToggleMenu(this: Hotbar): Promise<void>;
    /**
     * Handle click events to toggle the game main menu.
     * @this {Hotbar}
     * @returns {Promise<void>}
     */
    static #onClear(this: Hotbar): Promise<void>;
    /**
     * Handle click events to cycle the viewed hotbar page.
     * @this {Hotbar}
     * @param {PointerEvent} event
     * @returns {Promise<void>}
     */
    static #onPage(this: Hotbar, event: PointerEvent): Promise<void>;
    constructor(options?: Partial<foundry.applications.types.ApplicationConfiguration> | undefined);
    /**
     * The current hotbar page number.
     * @type {number}
     */
    get page(): number;
    /**
     * The currently rendered macro data.
     * @type {HotbarSlotData[]}
     */
    get slots(): {
        slot: number;
        macro: Macro | null;
        key: number;
        tooltip: string;
        ariaLabel: string;
        style: string;
    }[];
    /**
     * Whether the hotbar is locked.
     * @returns {boolean}
     */
    get locked(): boolean;
    /** @override */
    override _prepareContext(_options: any): Promise<{
        slots: any;
        page: number;
    }>;
    /** @override */
    override _onFirstRender(_context: any, _options: any): Promise<void>;
    /** @override */
    override _onRender(_context: any, _options: any): Promise<void>;
    /**
     * Get the set of ContextMenu options which should be applied for Scenes in the menu.
     * @returns {ContextMenuEntry[]}   The Array of context options passed to the ContextMenu instance
     * @protected
     */
    protected _getContextMenuOptions(): ContextMenuEntry[];
    /**
     * Update the presented state of toggle buttons.
     * @internal
     */
    _updateToggles(): void;
    /**
     * Change to a specific numbered page from 1 to 5
     * @param {number} page       The page number to change to
     * @returns {Promise<void>}
     */
    changePage(page: number): Promise<void>;
    /**
     * Change the page of the hotbar by cycling up (positive) or down (negative).
     * @param {number} direction    The direction to cycle
     * @returns {Promise<void>}
     */
    cyclePage(direction: number): Promise<void>;
    /**
     * Update hotbar display based on viewport size.
     * @internal
     */
    _onResize(): void;
    /**
     * Create a Macro which rolls a RollTable when executed
     * @param {Document} table    The RollTable document
     * @returns {Promise<Macro>}  A created Macro document to add to the bar
     * @protected
     */
    protected _createRollTableRollMacro(table: Document): Promise<Macro>;
    /**
     * Create a Macro document which can be used to toggle display of a Journal Entry.
     * @param {Document} doc          A Document which should be toggled
     * @returns {Promise<Macro>}      A created Macro document to add to the bar
     * @protected
     */
    protected _createDocumentSheetToggle(doc: Document): Promise<Macro>;
    /**
     * @deprecated since v13
     * @ignore
     */
    get macros(): any;
    /**
     * @deprecated since v13
     * @ignore
     */
    collapse(): void;
    /**
     * @deprecated since v13
     * @ignore
     */
    expand(): void;
    #private;
}
import ApplicationV2 from "../api/application.mjs";
import Macro from "@client/documents/macro.mjs";
