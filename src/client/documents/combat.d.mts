/**
 * @import Combatant from "./combatant.mjs";
 * @import Actor from "./actor.mjs";
 * @import TokenDocument from "./token.mjs";
 * @import User from "./user.mjs";
 * @import {CombatHistoryData, CombatRoundEventContext, CombatTurnEventContext} from "./_types.mjs";
 * @import {DatabaseDeleteOperation, DatabaseUpdateOperation} from "@common/abstract/_types.mjs";
 */
/**
 * The client-side Combat document which extends the common BaseCombat model.
 *
 * ### Hook Events
 * - {@link hookEvents.combatRound}
 * - {@link hookEvents.combatStart}
 * - {@link hookEvents.combatTurn}
 * - {@link hookEvents.combatTurnChange}
 *
 * @extends BaseCombat
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.collections.CombatEncounters}: The world-level collection of Combat
 *   documents
 * @see {@link Combatant}: The Combatant embedded document which exists within a Combat
 *   document
 * @see {@link foundry.applications.sidebar.tabs.CombatTracker}: The CombatTracker application
 * @see {@link foundry.applications.apps.CombatTrackerConfig}: The CombatTracker configuration
 *   application
 */
export default class Combat extends BaseCombat {
    /**
     * The configuration setting used to record Combat preferences
     * @type {string}
     */
    static CONFIG_SETTING: string;
    /**
     * When Tokens are deleted, handle actions to update/delete Combatants of these Tokens.
     * @param {TokenDocument[]} tokens               An array of Tokens which have been deleted
     * @param {DatabaseDeleteOperation} operation    The operation that deleted the Tokens
     * @param {User} user                            The User that deleted the Tokens
     * @internal
     */
    static _onDeleteTokens(tokens: TokenDocument[], operation: DatabaseDeleteOperation, user: User): void;
    /**
     * Track the sorted turn order of this combat encounter
     * @type {Combatant[]}
     */
    turns: Combatant[];
    /**
     * Record the current round, turn, and tokenId to understand changes in the encounter state
     * @type {CombatHistoryData}
     */
    current: CombatHistoryData;
    /**
     * Track the previous round, turn, and tokenId to understand changes in the encounter state
     * @type {CombatHistoryData}
     */
    previous: CombatHistoryData;
    /**
     * Get the Combatant who has the current turn.
     * @type {Combatant|null}
     */
    get combatant(): Combatant | null;
    /**
     * Get the Combatant who has the next turn.
     * @type {Combatant}
     */
    get nextCombatant(): Combatant;
    /**
     * Return the object of settings which modify the Combat Tracker behavior
     * @type {object}
     */
    get settings(): object;
    /**
     * Has this combat encounter been started?
     * @type {boolean}
     */
    get started(): boolean;
    /** @inheritDoc */
    get visible(): boolean;
    /**
     * Is this combat active in the current scene?
     * @type {boolean}
     */
    get isActive(): boolean;
    /**
     * A convenience alias for updating this document to become active.
     * @param {Partial<DatabaseUpdateOperation>} [options] Additional context to customize the update workflow
     * @returns {Promise<this>}
     */
    activate(options?: Partial<DatabaseUpdateOperation>): Promise<this>;
    /** @override */
    override prepareDerivedData(): void;
    /**
     * Get a Combatant using its Token id
     * @param {string|TokenDocument} token    A Token ID or a TokenDocument instance
     * @returns {Combatant[]}                 An array of Combatants which represent the Token
     */
    getCombatantsByToken(token: string | TokenDocument): Combatant[];
    /**
     * Get a Combatant that represents the given Actor or Actor ID.
     * @param {string|Actor} actor              An Actor ID or an Actor instance
     * @returns {Combatant[]}
     */
    getCombatantsByActor(actor: string | Actor): Combatant[];
    /**
     * Calculate the time delta between two turns.
     * @param {number} fromRound        The from-round
     * @param {number|null} fromTurn    The from-turn
     * @param {number} toRound          The to-round
     * @param {number|null} toTurn      The to-turn
     * @returns {number}                The time delta
     */
    getTimeDelta(fromRound: number, fromTurn: number | null, toRound: number, toTurn: number | null): number;
    /**
     * Begin the combat encounter, advancing to round 1 and turn 1
     * @returns {Promise<this>}
     */
    startCombat(): Promise<this>;
    /**
     * Advance the combat to the next round
     * @returns {Promise<this>}
     */
    nextRound(): Promise<this>;
    /**
     * Rewind the combat to the previous round
     * @returns {Promise<this>}
     */
    previousRound(): Promise<this>;
    /**
     * Advance the combat to the next turn
     * @returns {Promise<this>}
     */
    nextTurn(): Promise<this>;
    /**
     * Rewind the combat to the previous turn
     * @returns {Promise<this>}
     */
    previousTurn(): Promise<this>;
    /**
     * Display a dialog querying the GM whether they wish to end the combat encounter and empty the tracker
     * @returns {Promise<this>}
     */
    endCombat(): Promise<this>;
    /**
     * Toggle whether this combat is linked to the scene or globally available.
     * @returns {Promise<this>}
     */
    toggleSceneLink(): Promise<this>;
    /**
     * Reset all combatant initiative scores.
     * @param {object} [options={}]                   Additional options
     * @param {boolean} [options.updateTurn=true]     Update the Combat turn after resetting initiative scores to
     *                                                keep the turn on the same Combatant.
     * @returns {Promise<this>}
     */
    resetAll({ updateTurn }?: {
        updateTurn?: boolean | undefined;
    }): Promise<this>;
    /**
     * Roll initiative for one or multiple Combatants within the Combat document
     * @param {string|string[]} ids     A Combatant id or Array of ids for which to roll
     * @param {object} [options={}]     Additional options which modify how initiative rolls are created or presented.
     * @param {string|null} [options.formula]         A non-default initiative formula to roll. Otherwise, the system
     *                                                default is used.
     * @param {boolean} [options.updateTurn=true]     Update the Combat turn after adding new initiative scores to
     *                                                keep the turn on the same Combatant.
     * @param {object} [options.messageOptions={}]    Additional options with which to customize created Chat Messages
     * @returns {Promise<this>}       A promise which resolves to the updated Combat document once updates are complete.
     */
    rollInitiative(ids: string | string[], { formula, updateTurn, messageOptions }?: {
        formula?: string | null | undefined;
        updateTurn?: boolean | undefined;
        messageOptions?: object | undefined;
    }): Promise<this>;
    /**
     * Roll initiative for all combatants which have not already rolled
     * @param {object} [options={}]   Additional options forwarded to the Combat.rollInitiative method
     * @returns {Promise<this>}
     */
    rollAll(options?: object): Promise<this>;
    /**
     * Roll initiative for all non-player actors who have not already rolled
     * @param {object} [options={}]   Additional options forwarded to the Combat.rollInitiative method
     * @returns {Promise<this>}
     */
    rollNPC(options?: object): Promise<this>;
    /**
     * Assign initiative for a single Combatant within the Combat encounter.
     * Update the Combat turn order to maintain the same combatant as the current turn.
     * @param {string} id         The combatant ID for which to set initiative
     * @param {number} value      A specific initiative value to set
     */
    setInitiative(id: string, value: number): Promise<void>;
    /**
     * Return the Array of combatants sorted into initiative order, breaking ties alphabetically by name.
     * @returns {Combatant[]}
     */
    setupTurns(): Combatant[];
    turn: number | undefined;
    /**
     * Debounce changes to the composition of the Combat encounter to de-duplicate multiple concurrent Combatant changes.
     * If this is the currently viewed encounter, re-render the CombatTracker application.
     * @type {Function}
     */
    debounceSetup: Function;
    /**
     * Update active effect durations for all actors present in this Combat encounter.
     */
    updateCombatantActors(): void;
    /**
     * Loads the registered Combat Theme (if any) and plays the requested type of sound.
     * If multiple exist for that type, one is chosen at random.
     * @param {string} announcement     The announcement that should be played: "startEncounter", "nextUp", or "yourTurn".
     * @protected
     */
    protected _playCombatSound(announcement: string): void;
    /**
     * Define how the array of Combatants is sorted in the displayed list of the tracker.
     * This method can be overridden by a system or module which needs to display combatants in an alternative order.
     * The default sorting rules sort in descending order of initiative using combatant IDs for tiebreakers.
     * @param {Combatant} a     Some combatant
     * @param {Combatant} b     Some other combatant
     * @protected
     */
    protected _sortCombatants(a: Combatant, b: Combatant): number;
    /**
     * Refresh the Token HUD under certain circumstances.
     * @param {Combatant[]} documents  A list of Combatant documents that were added or removed.
     * @protected
     */
    protected _refreshTokenHUD(documents: Combatant[]): void;
    /**
     * Clear the movement history of all Tokens within this Combat.
     * @overload
     * @returns {Promise<void>}
     */
    clearMovementHistories(): Promise<void>;
    /**
     * Clear the movement history of the Combatants' Tokens.
     * @overload
     * @param {Iterable<Combatant>} combatants    The combatants whose movement history is cleared
     * @returns {Promise<void>}
     */
    clearMovementHistories(combatants: Iterable<Combatant>): Promise<void>;
    /** @inheritDoc */
    _onCreate(data: any, options: any, userId: any): void;
    /** @inheritDoc */
    _onUpdate(changed: any, options: any, userId: any): void;
    /** @inheritDoc */
    _onDelete(options: any, userId: any): void;
    /** @inheritDoc */
    _onCreateDescendantDocuments(parent: any, collection: any, documents: any, data: any, options: any, userId: any): void;
    /** @inheritDoc */
    _onUpdateDescendantDocuments(parent: any, collection: any, documents: any, changes: any, options: any, userId: any): void;
    /** @inheritDoc */
    _onDeleteDescendantDocuments(parent: any, collection: any, documents: any, ids: any, options: any, userId: any): void;
    /**
     * This workflow occurs after a Combatant is added to the Combat.
     * This can be overridden to implement system-specific combat tracking behaviors.
     * The default implementation of this function does nothing.
     * This method only executes for one designated GM user. If no GM users are present this method will not be called.
     * @param {Combatant} combatant    The Combatant that entered the Combat
     * @returns {Promise<void>}
     * @protected
     */
    protected _onEnter(combatant: Combatant): Promise<void>;
    /**
     * This workflow occurs after a Combatant is removed from the Combat.
     * This can be overridden to implement system-specific combat tracking behaviors.
     * The default implementation of this function does nothing.
     * This method only executes for one designated GM user. If no GM users are present this method will not be called.
     * @param {Combatant} combatant    The Combatant that exited the Combat
     * @returns {Promise<void>}
     * @protected
     */
    protected _onExit(combatant: Combatant): Promise<void>;
    /**
     * Called after {@link Combat#_onExit} and takes care of clearing the movement history of the
     * Combatant's Token.
     * This function is not called for Combatants that don't have a Token.
     * The default implementation clears the movement history always.
     * @param {Combatant} combatant    The Combatant that exited the Combat
     * @returns {Promise<void>}
     * @protected
     */
    protected _clearMovementHistoryOnExit(combatant: Combatant): Promise<void>;
    /**
     * Get the current history state of the Combat encounter.
     * @param {Combatant} [combatant]       The new active combatant
     * @returns {CombatHistoryData}
     * @protected
     */
    protected _getCurrentState(combatant?: Combatant): CombatHistoryData;
    /**
     * Update display of Token combat turn markers.
     * @protected
     */
    protected _updateTurnMarkers(): void;
    /**
     * Manage the execution of Combat lifecycle events.
     * This method orchestrates the execution of four events in the following order, as applicable:
     * 1. End Turn
     * 2. End Round
     * 3. Begin Round
     * 4. Begin Turn
     * Each lifecycle event is an async method, and each is awaited before proceeding.
     * @returns {Promise<void>}
     * @protected
     */
    protected _manageTurnEvents(): Promise<void>;
    /**
     * A workflow that occurs at the end of each Combat Turn.
     * This workflow occurs after the Combat document update.
     * This can be overridden to implement system-specific combat tracking behaviors.
     * The default implementation of this function does nothing.
     * This method only executes for one designated GM user. If no GM users are present this method will not be called.
     * @param {Combatant} combatant               The Combatant whose turn just ended
     * @param {CombatTurnEventContext} context    The context of the turn that just ended
     * @returns {Promise<void>}
     * @protected
     */
    protected _onEndTurn(combatant: Combatant, context: CombatTurnEventContext): Promise<void>;
    /**
     * A workflow that occurs at the end of each Combat Round.
     * This workflow occurs after the Combat document update.
     * This can be overridden to implement system-specific combat tracking behaviors.
     * The default implementation of this function does nothing.
     * This method only executes for one designated GM user. If no GM users are present this method will not be called.
     * @param {CombatRoundEventContext} context    The context of the round that just ended
     * @returns {Promise<void>}
     * @protected
     */
    protected _onEndRound(context: CombatRoundEventContext): Promise<void>;
    /**
     * A workflow that occurs at the start of each Combat Round.
     * This workflow occurs after the Combat document update.
     * This can be overridden to implement system-specific combat tracking behaviors.
     * The default implementation of this function does nothing.
     * This method only executes for one designated GM user. If no GM users are present this method will not be called.
     * @param {CombatRoundEventContext} context    The context of the round that just started
     * @returns {Promise<void>}
     * @protected
     */
    protected _onStartRound(context: CombatRoundEventContext): Promise<void>;
    /**
     * A workflow that occurs at the start of each Combat Turn.
     * This workflow occurs after the Combat document update.
     * This can be overridden to implement system-specific combat tracking behaviors.
     * The default implementation of this function does nothing.
     * This method only executes for one designated GM user. If no GM users are present this method will not be called.
     * @param {Combatant} combatant               The Combatant whose turn just started
     * @param {CombatTurnEventContext} context    The context of the turn that just started
     * @returns {Promise<void>}
     * @protected
     */
    protected _onStartTurn(combatant: Combatant, context: CombatTurnEventContext): Promise<void>;
    /**
     * Called after {@link Combat#_onStartTurn} and takes care of clearing the movement history of the
     * Combatant's Token.
     * This function is not called for Combatants that don't have a Token.
     * The default implementation clears the movement history always.
     * @param {Combatant} combatant               The Combatant whose turn just started
     * @param {CombatTurnEventContext} context    The context of the turn that just started
     * @returns {Promise<void>}
     * @protected
     */
    protected _clearMovementHistoryOnStartTurn(combatant: Combatant, context: CombatTurnEventContext): Promise<void>;
    /**
     * @deprecated since v12
     * @ignore
     */
    getCombatantByActor(actor: any): Combatant;
    /**
     * @deprecated since v12
     * @ignore
     */
    getCombatantByToken(token: any): Combatant;
    #private;
}
import BaseCombat from "@common/documents/combat.mjs";
import type Combatant from "./combatant.mjs";
import type { CombatHistoryData } from "./_types.mjs";
import type { DatabaseUpdateOperation } from "@common/abstract/_types.mjs";
import type TokenDocument from "./token.mjs";
import type Actor from "./actor.mjs";
import type { CombatTurnEventContext } from "./_types.mjs";
import type { CombatRoundEventContext } from "./_types.mjs";
import type { DatabaseDeleteOperation } from "@common/abstract/_types.mjs";
import type User from "./user.mjs";
