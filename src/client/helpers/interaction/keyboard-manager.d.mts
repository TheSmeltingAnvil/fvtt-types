/**
 * @import {KeybindingAction, KeyboardEventContext} from "@client/_types.mjs";
 */
/**
 * A set of helpers and management functions for dealing with user input from keyboard events.
 * {@link https://keycode.info/}
 * @see {@link foundry.Game#keyboard}
 */
export default class KeyboardManager {
    /**
     * Is logical keybindings active?
     * @type {boolean}
     */
    static get isUniversalMode(): boolean;
    static #universalMode: any;
    /**
     * Allowed modifier keys.
     * @enum {string}
     */
    static MODIFIER_KEYS: {
        CONTROL: string;
        SHIFT: string;
        ALT: string;
    };
    /**
     * Track which KeyboardEvent#code presses associate with each modifier.
     * @enum {string[]}
     */
    static MODIFIER_CODES: {
        [x: string]: string[];
    };
    /**
     * Key codes which are "protected" and should not be used because they are reserved for browser-level actions.
     * @type {string[]}
     */
    static PROTECTED_KEYS: string[];
    /**
     * The OS-specific string display for what their Command key is
     * @type {string}
     */
    static CONTROL_KEY_STRING: string;
    /**
     * A special mapping of how special KeyboardEvent#code values should map to displayed strings or symbols.
     * Values in this configuration object override any other display formatting rules which may be applied.
     * @type {Record<string, string>}
     */
    static KEYCODE_DISPLAY_MAPPING: Record<string, string>;
    /**
     * Matches any single graphic Unicode code-point (letters, digits, punctuation, symbols, including emoji).
     * Non-printable identifiers like *ArrowLeft*, *ShiftLeft*, *Dead* never match.
     * @type {RegExp}
     */
    static PRINTABLE_CHAR_REGEX: RegExp;
    /**
     * Canonical identifier for a key press.
     * @param {KeyboardEvent} event
     * @returns {string}
     */
    static translateKey(event: KeyboardEvent): string;
    /**
     * Emulates a key being pressed, triggering the Keyboard event workflow.
     * @param {boolean} up                        If True, emulates the `keyup` Event. Else, the `keydown` event
     * @param {string} code                       The KeyboardEvent#code which is being pressed
     * @param {object} [options]                  Additional options to configure behavior.
     * @param {boolean} [options.altKey=false]    Emulate the ALT modifier as pressed
     * @param {boolean} [options.ctrlKey=false]   Emulate the CONTROL modifier as pressed
     * @param {boolean} [options.shiftKey=false]  Emulate the SHIFT modifier as pressed
     * @param {boolean} [options.repeat=false]    Emulate this as a repeat event
     * @param {boolean} [options.force=false]     Force the event to be handled.
     * @returns {KeyboardEventContext}
     */
    static emulateKeypress(up: boolean, code: string, { altKey, ctrlKey, shiftKey, repeat, force }?: {
        altKey?: boolean | undefined;
        ctrlKey?: boolean | undefined;
        shiftKey?: boolean | undefined;
        repeat?: boolean | undefined;
        force?: boolean | undefined;
    }): KeyboardEventContext;
    /**
     * Format a KeyboardEvent#code into a displayed string.
     * @param {string} code       The input code
     * @returns {string}          The displayed string for this code
     */
    static getKeycodeDisplayString(code: string): string;
    /**
     * Get a standardized keyboard context for a given event.
     * Every individual keypress is uniquely identified using the KeyboardEvent#code property.
     * A list of possible key codes is documented here: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values
     *
     * @param {KeyboardEvent} event    The originating keypress event
     * @param {boolean} up             A flag for whether the key is down or up
     * @returns {KeyboardEventContext} The standardized context of the event
     */
    static getKeyboardEventContext(event: KeyboardEvent, up?: boolean): KeyboardEventContext;
    /**
     * Given a keyboard-event context, return every registered keybinding that matches it (may be empty).
     * @param {KeyboardEventContext} context
     * @returns {KeybindingAction[]}
     * @internal
     */
    static _getMatchingActions(context: KeyboardEventContext): KeybindingAction[];
    /**
     * Test whether a keypress context matches the registration for a keybinding action
     * @param {KeybindingAction} action             The keybinding action
     * @param {KeyboardEventContext} context        The keyboard event context
     * @returns {boolean}                           Does the context match the action requirements?
     */
    static #testContext(action: KeybindingAction, context: KeyboardEventContext): boolean;
    /**
     * Given a registered Keybinding Action, executes the action with a given event and context
     *
     * @param {KeybindingAction} keybind         The registered Keybinding action to execute
     * @param {KeyboardEventContext} context     The gathered context of the event
     * @returns {boolean}                        Returns true if the keybind was consumed
     */
    static #executeKeybind(keybind: KeybindingAction, context: KeyboardEventContext): boolean;
    /**
     * Begin listening to keyboard events.
     * @internal
     */
    _activateListeners(): void;
    /**
     * The set of key codes which are currently depressed (down)
     * @type {Set<string>}
     */
    downKeys: Set<string>;
    /**
     * The set of movement keys which were recently pressed
     * @type {Set<string>}
     */
    moveKeys: Set<string>;
    /**
     * Determines whether an `HTMLElement` currently has focus, which may influence keybinding actions.
     *
     * An element is considered to have focus if:
     * 1. It has a `dataset.keyboardFocus` attribute explicitly set to `"true"` or an empty string (`""`).
     * 2. It is an `<input>`, `<select>`, or `<textarea>` element, all of which inherently accept keyboard input.
     * 3. It has the `isContentEditable` property set to `true`, meaning it is an editable element.
     * 4. It is a `<button>` element inside a `<form>`, which suggests interactive use.
     *
     * An element is considered **not** focused if:
     * 1. There is no currently active element (`document.activeElement` is not an `HTMLElement`).
     * 2. It has a `dataset.keyboardFocus` attribute explicitly set to `"false"`.
     *
     * If none of these conditions are met, the element is assumed to be unfocused.
     * @type {boolean}
     */
    get hasFocus(): boolean;
    /**
     * Report whether a modifier in KeyboardManager.MODIFIER_KEYS is currently actively depressed.
     * @param {string} modifier     A modifier in MODIFIER_KEYS
     * @returns {boolean}           Is this modifier key currently down (active)?
     */
    isModifierActive(modifier: string): boolean;
    /**
     * Report whether a core action key is currently actively depressed.
     * @param {string} action       The core action to verify (ex: "target")
     * @returns {boolean}           Is this core action key currently down (active)?
     */
    isCoreActionKeyActive(action: string): boolean;
    /**
     * Processes a keyboard event context, checking it against registered keybinding actions
     * @param {KeyboardEventContext} context   The keyboard event context
     * @param {object} [options]               Additional options to configure behavior.
     * @param {boolean} [options.force=false]  Force the event to be handled.
     * @protected
     */
    protected _processKeyboardContext(context: KeyboardEventContext, { force }?: {
        force?: boolean | undefined;
    }): void;
    /**
     * Emulate a key-up event for any currently down keys. When emulating, we go backwards such that combinations such as
     * "CONTROL + S" emulate the "S" first in order to capture modifiers.
     * @param {object} [options]              Options to configure behavior.
     * @param {boolean} [options.force=true]  Force the keyup events to be handled.
     */
    releaseKeys({ force }?: {
        force?: boolean | undefined;
    }): void;
    /**
     * Release any down keys when focusing a form element.
     * @param {FocusEvent} event  The focus event.
     * @protected
     */
    protected _onFocusIn(event: FocusEvent): void;
    #private;
}
import type { KeyboardEventContext } from "@client/_types.mjs";
import type { KeybindingAction } from "@client/_types.mjs";
