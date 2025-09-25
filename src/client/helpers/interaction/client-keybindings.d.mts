/**
 * @import ControlsConfig from "@client/applications/sidebar/apps/controls-config.mjs";
 * @import InteractionLayer from "../../canvas/layers/base/interaction-layer.mjs";
 * @import {
 *   KeybindingAction,
 *   KeybindingActionBinding,
 *   KeybindingActionConfig,
 *   KeyboardEventContext
 * } from "@client/_types.mjs";
 */
/**
 * A class responsible for managing defined game keybinding.
 * Each keybinding is a string key/value pair belonging to a certain namespace and a certain store scope.
 *
 * When Foundry Virtual Tabletop is initialized, a singleton instance of this class is constructed within the global
 * Game object as as game.keybindings.
 *
 * @see {@link foundry.Game#keybindings}
 * @see {@link ControlsConfig}
 */
export default class ClientKeybindings {
    static MOVEMENT_DIRECTIONS: {
        UP: string;
        LEFT: string;
        DOWN: string;
        RIGHT: string;
        DESCEND: string;
        ASCEND: string;
    };
    static ZOOM_DIRECTIONS: {
        IN: string;
        OUT: string;
    };
    /**
     * A helper method that, when given a value, ensures that the returned value is a standardized Binding array
     * @param {KeybindingActionBinding[]} values  An array of keybinding assignments to be validated
     * @returns {KeybindingActionBinding[]}       An array of keybinding assignments confirmed as valid
     */
    static #validateBindings(values: KeybindingActionBinding[]): KeybindingActionBinding[];
    /**
     * Validate that assigned modifiers are allowed
     * @param {string[]} keys           An array of modifiers which may be valid
     * @returns {string[]}              An array of modifiers which are confirmed as valid
     */
    static #validateModifiers(keys: string[]): string[];
    /**
     * Compares two Keybinding Actions based on their Order
     * @param {Pick<KeybindingAction, "precedence"|"order">} a The first Keybinding Action
     * @param {Pick<KeybindingAction, "precedence"|"order">} b the second Keybinding Action
     * @returns {number}
     * @internal
     */
    static _compareActions(a: Pick<KeybindingAction, "precedence" | "order">, b: Pick<KeybindingAction, "precedence" | "order">): number;
    /**
     * Handle Select all action
     * @param {KeyboardEventContext} context    The context data of the event
     */
    static #onSelectAll(context: KeyboardEventContext): boolean;
    /**
     * Handle Cycle View actions
     * @param {KeyboardEventContext} context    The context data of the event
     */
    static #onCycleView(context: KeyboardEventContext): boolean;
    /**
     * Handle Dismiss actions
     * @param {KeyboardEventContext} context    The context data of the event
     * @returns {Promise<boolean>}
     */
    static #onDismiss(context: KeyboardEventContext): Promise<boolean>;
    /**
     * Open Character sheet for current token or controlled actor
     * @param {KeyboardEventContext} context    The context data of the event
     */
    static #onToggleCharacterSheet(context: KeyboardEventContext): foundry.applications.sheets.ActorSheetV2 | foundry.appv1.sheets.ActorSheet | null;
    /**
     * Handle action to target the currently hovered token.
     * @param {KeyboardEventContext} context    The context data of the event
     */
    static #onTarget(context: KeyboardEventContext): boolean;
    /**
     * Handle action to toggle the ruler tool.
     * @param {KeyboardEventContext} context    The context data of the event
     */
    static #onToggleRuler(context: KeyboardEventContext): boolean;
    /**
     * Handle action to toggle Unconstrained Movement.
     * @param {KeyboardEventContext} context    The context data of the event
     */
    static #onToggleUnconstrainedMovement(context: KeyboardEventContext): boolean;
    /**
     * Handle action to send the currently controlled placeables to the back.
     * @param {KeyboardEventContext} context    The context data of the event
     */
    static #onSendToBack(context: KeyboardEventContext): boolean;
    /**
     * Handle action to bring the currently controlled placeables to the front.
     * @param {KeyboardEventContext} context    The context data of the event
     */
    static #onBringToFront(context: KeyboardEventContext): boolean;
    /**
     * Handle DELETE Keypress Events
     * @param {KeyboardEventContext} context    The context data of the event
     */
    static #onDelete(context: KeyboardEventContext): boolean;
    /**
     * Handle Pause Action.
     * @param {KeyboardEventContext} context    The context data of the event
     */
    static #onPause(context: KeyboardEventContext): boolean;
    /**
     * Handle Highlight action
     * @param {KeyboardEventContext} context    The context data of the event
     */
    static #onHighlight(context: KeyboardEventContext): boolean;
    /**
     * Handle Macro executions
     * @param {KeyboardEventContext} context  The context data of the event
     * @param {number} number                 The numbered macro slot to execute
     */
    static #onMacroExecute(context: KeyboardEventContext, number: number): boolean;
    /**
     * Handle Macro page swaps
     * @param {KeyboardEventContext} context    The context data of the event
     * @param {number} page                     The numbered macro page to activate
     */
    static #onMacroPageSwap(context: KeyboardEventContext, page: number): boolean;
    /**
     * Handle action to copy data to clipboard
     * @param {KeyboardEventContext} context    The context data of the event
     */
    static #onCopy(context: KeyboardEventContext): boolean;
    /**
     * Handle action to cut data to clipboard
     * @param {KeyboardEventContext} context    The context data of the event
     */
    static #onCut(context: KeyboardEventContext): boolean;
    /**
     * Handle Paste action
     * @param {KeyboardEventContext} context    The context data of the event
     */
    static #onPaste(context: KeyboardEventContext): boolean;
    /**
     * Handle Undo action
     * @param {KeyboardEventContext} context    The context data of the event
     */
    static #onUndo(context: KeyboardEventContext): boolean;
    /**
     * Bring the chat window into view and focus the input
     * @param {KeyboardEventContext} context    The context data of the event
     * @returns {boolean}
     */
    static #onFocusChat(context: KeyboardEventContext): boolean;
    /**
     * Registered Keybinding actions
     * @type {Map<string, KeybindingActionConfig>}
     */
    actions: Map<string, KeybindingActionConfig>;
    /**
     * A mapping of a string key to possible Actions that might execute off it
     * @type {Map<string, KeybindingAction[]>}
     */
    activeKeys: Map<string, KeybindingAction[]>;
    /**
     * A stored cache of Keybind Actions Ids to Bindings
     * @type {Map<string, KeybindingActionBinding[]>}
     */
    bindings: Map<string, KeybindingActionBinding[]>;
    /**
     * An alias of the movement key set tracked by the keyboard
     * @returns {Set<string>}>
     */
    get moveKeys(): Set<string>;
    /**
     * Initializes the keybinding values for all registered actions
     */
    initialize(): void;
    /**
     * Register a new keybinding
     *
     * @param {string} namespace                  The namespace the Keybinding Action belongs to
     * @param {string} action                     A unique machine-readable id for the Keybinding Action
     * @param {KeybindingActionConfig} data       Configuration for keybinding data
     *
     * @example Define a keybinding which shows a notification
     * ```js
     * game.keybindings.register("myModule", "showNotification", {
     *   name: "My Settings Keybinding",
     *   hint: "A description of what will occur when the Keybinding is executed.",
     *   uneditable: [
     *     {
     *       key: "Digit1",
     *       modifiers: ["Control"]
     *     }
     *   ],
     *   editable: [
     *     {
     *       key: "F1"
     *     }
     *   ],
     *   onDown: () => { ui.notifications.info("Pressed!") },
     *   onUp: () => {},
     *   restricted: true,             // Restrict this Keybinding to gamemaster only?
     *   reservedModifiers: ["Alt"],  // On ALT, the notification is permanent instead of temporary
     *   precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL
     * });
     * ```
     */
    register(namespace: string, action: string, data: KeybindingActionConfig): void;
    /**
     * Get the current Bindings of a given namespace's Keybinding Action
     *
     * @param {string} namespace   The namespace under which the setting is registered
     * @param {string} action      The keybind action to retrieve
     * @returns {KeybindingActionBinding[]}
     *
     * @example Retrieve the current Keybinding Action Bindings
     * ```js
     * game.keybindings.get("myModule", "showNotification");
     * ```
     */
    get(namespace: string, action: string): KeybindingActionBinding[];
    /**
     * Set the editable Bindings of a Keybinding Action for a certain namespace and Action
     *
     * @param {string} namespace                    The namespace under which the Keybinding is registered
     * @param {string} action                       The Keybinding action to set
     * @param {KeybindingActionBinding[]} bindings  The Bindings to assign to the Keybinding
     *
     * @example Update the current value of a keybinding
     * ```js
     * game.keybindings.set("myModule", "showNotification", [
     *     {
     *       key: "F2",
     *       modifiers: [ "CONTROL" ]
     *     }
     * ]);
     * ```
     */
    set(namespace: string, action: string, bindings: KeybindingActionBinding[]): Promise<any>;
    /**
     * Reset all client keybindings back to their default configuration.
     */
    resetDefaults(): Promise<any>;
    /**
     * Register core keybindings.
     * @param {string} view           The active game view
     * @internal
     */
    _registerCoreKeybindings(view: string): void;
    #private;
}
import type { KeybindingActionConfig } from "@client/_types.mjs";
import type { KeybindingAction } from "@client/_types.mjs";
import type { KeybindingActionBinding } from "@client/_types.mjs";
import type { KeyboardEventContext } from "@client/_types.mjs";
