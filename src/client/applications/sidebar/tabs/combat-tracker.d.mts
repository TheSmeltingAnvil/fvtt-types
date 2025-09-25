/**
 * @import {ApplicationRenderContext} from "../../_types.mjs";
 * @import {HandlebarsRenderOptions} from "../../api/handlebars-application.mjs";
 * @import {ContextMenuEntry} from "../../ux/context-menu.mjs";
 * @import Scene from "@client/documents/scene.mjs";
 */
/**
 * An Application that manages switching between Combats and tracking the Combatants in those Combats.
 * @extends {AbstractSidebarTab}
 * @mixes HandlebarsApplication
 */
export default class CombatTracker extends AbstractSidebarTab<foundry.applications.types.ApplicationConfiguration, foundry.applications.types.ApplicationRenderOptions> {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        window: {
            title: string;
        };
        actions: {
            activateCombatant: typeof CombatTracker.#onCombatantMouseDown;
            cycleCombat: typeof CombatTracker.#onCombatCycle;
            createCombat: typeof CombatTracker.#onCombatCreate;
            panToCombatant: typeof CombatTracker.#onCombatantControl;
            pingCombatant: typeof CombatTracker.#onCombatantControl;
            rollInitiative: typeof CombatTracker.#onCombatantControl;
            toggleDefeated: typeof CombatTracker.#onCombatantControl;
            toggleHidden: typeof CombatTracker.#onCombatantControl;
            trackerSettings: typeof CombatTracker.#onConfigure;
        };
    };
    /** @override */
    static override PARTS: {
        header: {
            template: string;
        };
        tracker: {
            template: string;
            scrollable: string[];
        };
        footer: {
            template: string;
        };
    };
    /**
     * Cycle to a different combat encounter in the tracker.
     * @this {CombatTracker}
     * @param {...any} args
     */
    static #onCombatCycle(this: CombatTracker, ...args: any[]): Promise<Combat>;
    /**
     * Create a new combat.
     * @this {CombatTracker}
     * @param {...any} args
     * @returns {Promise<void>}
     */
    static #onCombatCreate(this: CombatTracker, ...args: any[]): Promise<void>;
    /**
     * Spawn the combat tracker settings dialog.
     * @this {CombatTracker}
     * @param {PointerEvent} event  The triggering event.
     * @param {HTMLElement} target  The action target element.
     */
    static #onConfigure(this: CombatTracker, event: PointerEvent, target: HTMLElement): Promise<foundry.applications.apps.CombatTrackerConfig>;
    /**
     * Handle performing some action for an individual combatant.
     * @this {CombatTracker}
     * @param {...any} args
     */
    static #onCombatantControl(this: CombatTracker, ...args: any[]): any;
    /**
     * Handle activating a combatant in the tracker.
     * @this {CombatTracker}
     * @param {...any} args
     */
    static #onCombatantMouseDown(this: CombatTracker, ...args: any[]): void;
    constructor(options?: Partial<foundry.applications.types.ApplicationConfiguration> | undefined);
    /**
     * The list combats applicable to the active Scene.
     * @type {Combat[]}
     */
    get combats(): Combat[];
    set viewed(combat: Combat | null);
    /**
     * Record the currently tracked combat encounter.
     * @type {Combat|null}
     */
    get viewed(): Combat | null;
    /**
     * The Scene linked to the currently viewed Combat, if any
     * @type {Scene|null}
     */
    get scene(): Scene | null;
    /** @inheritDoc */
    _configureRenderOptions(options: any): void;
    /**
     * Format a tooltip for displaying overflowing effects.
     * @param {{ img: string, name: string }[]} effects  The effect names and icons.
     * @returns {string}
     * @protected
     */
    protected _formatEffectsTooltip(effects: {
        img: string;
        name: string;
    }[]): string;
    /**
     * Retrieve a source image for a combatant. If it is a video, use the first frame.
     * @param {Combatant} combatant  The Combatant.
     * @returns {Promise<string>}    The image URL.
     * @protected
     */
    protected _getCombatantThumbnail(combatant: Combatant): Promise<string>;
    /** @inheritDoc */
    _preparePartContext(partId: any, context: any, options: any): Promise<any>;
    /**
     * Prepare render context for the footer part.
     * @param {ApplicationRenderContext} context
     * @param {HandlebarsRenderOptions} options
     * @returns {Promise<void>}
     * @protected
     */
    protected _prepareCombatContext(context: ApplicationRenderContext, options: HandlebarsRenderOptions): Promise<void>;
    /**
     * Prepare render context for the tracker part.
     * @param {ApplicationRenderContext} context
     * @param {HandlebarsRenderOptions} options
     * @returns {Promise<void>}
     * @protected
     */
    protected _prepareTrackerContext(context: ApplicationRenderContext, options: HandlebarsRenderOptions): Promise<void>;
    /**
     * Prepare render context for a single entry in the combat tracker.
     * @param {Combat} combat        The active combat.
     * @param {Combatant} combatant  The Combatant whose turn is being prepared.
     * @param {number} index         The index of this entry in the turn order.
     * @returns {Promise<object>}
     * @protected
     */
    protected _prepareTurnContext(combat: Combat, combatant: Combatant, index: number): Promise<object>;
    /**
     * Get context menu entries for Combatants in the tracker.
     * @returns {ContextMenuEntry[]}
     * @protected
     */
    protected _getEntryContextOptions(): ContextMenuEntry[];
    /**
     * Get context menu entries for Combat in the tracker.
     * @returns {ContextMenuEntry[]}
     * @protected
     */
    protected _getCombatContextOptions(): ContextMenuEntry[];
    /** @inheritDoc */
    _onClickAction(event: any, target: any): Promise<void>;
    /**
     * Cycle to a different combat encounter in the tracker.
     * @param {PointerEvent} event  The triggering event.
     * @param {HTMLElement} target  The action target element.
     * @protected
     */
    protected _onCombatCycle(event: PointerEvent, target: HTMLElement): Promise<Combat>;
    /**
     * Create a new combat.
     * @param {PointerEvent} event  The triggering event.
     * @param {HTMLElement} target  The action target element.
     * @returns {Promise<void>}
     * @protected
     */
    protected _onCombatCreate(event: PointerEvent, target: HTMLElement): Promise<void>;
    /**
     * Handle performing some action for an individual combatant.
     * @param {PointerEvent} event  The triggering event.
     * @param {HTMLElement} target  The action target element.
     * @protected
     */
    protected _onCombatantControl(event: PointerEvent, target: HTMLElement): any;
    /**
     * Handle hovering over a combatant in the tracker.
     * @param {PointerEvent} event  The triggering event.
     * @protected
     */
    protected _onCombatantHoverIn(event: PointerEvent): void;
    /**
     * Handle hovering out a combatant in the tracker.
     * @param {PointerEvent} event  The triggering event.
     * @protected
     */
    protected _onCombatantHoverOut(event: PointerEvent): void;
    /**
     * Handle activating a combatant in the tracker.
     * @param {PointerEvent} event  The triggering event.
     * @param {HTMLElement} target  The action target element.
     * @protected
     */
    protected _onCombatantMouseDown(event: PointerEvent, target: HTMLElement): void;
    /**
     * Handle panning to a combatant's token.
     * @param {Combatant} combatant  The combatant.
     * @protected
     */
    protected _onPanToCombatant(combatant: Combatant): Promise<boolean> | undefined;
    /**
     * Handle pinging a combatant's token.
     * @param {Combatant} combatant  The combatant.
     * @protected
     */
    protected _onPingCombatant(combatant: Combatant): Promise<boolean> | undefined;
    /**
     * Handle rolling initiative for a single combatant.
     * @param {Combatant} combatant  The combatant.
     * @protected
     */
    protected _onRollInitiative(combatant: Combatant): Promise<Combat>;
    /**
     * Handle toggling the defeated status effect on a combatant token.
     * @param {Combatant} combatant  The combatant.
     * @returns {Promise<void>}
     * @protected
     */
    protected _onToggleDefeatedStatus(combatant: Combatant): Promise<void>;
    /**
     * Toggle a combatant's hidden state in the tracker.
     * @param {Combatant} combatant  The combatant.
     * @protected
     */
    protected _onToggleHidden(combatant: Combatant): any;
    /**
     * The CombatTracker application is not a <form> element by default, but it does handle specific input events.
     * @param {Event} event  The triggering change event.
     * @protected
     */
    protected _onChangeInput(event: Event): any;
    /**
     * Handle updating a combatant's initiative in-sheet.
     * @param {Event} event  The triggering change event.
     * @protected
     */
    protected _onUpdateInitiative(event: Event): any;
    /**
     * Highlight a hovered combatant in the tracker.
     * @param {Combatant} combatant  The Combatant.
     * @param {boolean} hover        Whether they are being hovered in or out.
     */
    hoverCombatant(combatant: Combatant, hover: boolean): void;
    /**
     * Is the token of the combatant visible?
     * @param {Token} token    The token of the combatant
     * @returns {boolean}      Is the token visible?
     * @protected
     */
    protected _isTokenVisible(token: Token): boolean;
    /**
     * Scroll to the current combatant in the combat log.
     */
    scrollToTurn(): void;
    /**
     * @deprecated since v13
     * @ignore
     */
    initialize({ combat, render }?: {
        combat?: null | undefined;
        render?: boolean | undefined;
    }): void;
    #private;
}
import AbstractSidebarTab from "../sidebar-tab.mjs";
import Combat from "@client/documents/combat.mjs";
import type Scene from "@client/documents/scene.mjs";
import type { ApplicationRenderContext } from "../../_types.mjs";
import type { HandlebarsRenderOptions } from "../../api/handlebars-application.mjs";
import type { ContextMenuEntry } from "../../ux/context-menu.mjs";
