/**
 * @import {ActiveEffectData, ActiveEffectDuration, EffectChangeData} from "@client/documents/_types.mjs";
 * @import {DocumentConstructionContext} from "@common/abstract/_types.mjs";
 * @import Document from "@common/abstract/document.mjs";
 */
/**
 * The client-side ActiveEffect document which extends the common BaseActiveEffect model.
 * Each ActiveEffect belongs to the effects collection of its parent Document.
 * Each ActiveEffect contains a ActiveEffectData object which provides its source data.
 *
 * ### Hook Events
 * - {@link hookEvents.applyActiveEffect}
 *
 * @extends BaseActiveEffect
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.Actor}: The Actor document which contains ActiveEffect embedded documents
 * @see {@link foundry.documents.Item}: The Item document which contains ActiveEffect embedded documents
 *
 * @property {ActiveEffectDuration} duration        Expanded effect duration data.
 */
export default class ActiveEffect extends BaseActiveEffect {
    /**
     * Create an ActiveEffect instance from some status effect ID.
     * Delegates to {@link ActiveEffect._fromStatusEffect} to create the ActiveEffect instance
     * after creating the ActiveEffect data from the status effect data if `CONFIG.statusEffects`.
     * @param {string} statusId                             The status effect ID.
     * @param {DocumentConstructionContext} [options]       Additional options to pass to the ActiveEffect constructor.
     * @returns {Promise<ActiveEffect>}                     The created ActiveEffect instance.
     *
     * @throws {Error} An error if there is no status effect in `CONFIG.statusEffects` with the given status ID and if
     * the status has implicit statuses but doesn't have a static _id.
     */
    static fromStatusEffect(statusId: string, options?: DocumentConstructionContext): Promise<ActiveEffect>;
    /**
     * Create an ActiveEffect instance from status effect data.
     * Called by {@link ActiveEffect.fromStatusEffect}.
     * @param {string} statusId                          The status effect ID.
     * @param {ActiveEffectData} effectData              The status effect data.
     * @param {DocumentConstructionContext} [options]    Additional options to pass to the ActiveEffect constructor.
     * @returns {Promise<ActiveEffect>}                  The created ActiveEffect instance.
     * @protected
     */
    protected static _fromStatusEffect(statusId: string, effectData: ActiveEffectData, options?: DocumentConstructionContext): Promise<ActiveEffect>;
    /**
     * Apply EffectChangeData to a field within a DataModel.
     * @param {DataModel} model          The model instance.
     * @param {EffectChangeData} change  The change to apply.
     * @param {DataField} [field]        The field. If not supplied, it will be retrieved from the supplied model.
     * @returns {*}                      The updated value.
     */
    static applyField(model: DataModel, change: EffectChangeData, field?: DataField): any;
    /**
     * Retrieve the initial duration configuration.
     * @returns {{duration: {startTime: number, [startRound]: number, [startTurn]: number}}}
     */
    static getInitialDuration(): {
        duration: {
            startTime: number;
            [startRound]: number;
            [startTurn]: number;
        };
    };
    /**
     * Is there some system logic that makes this active effect ineligible for application?
     * @type {boolean}
     */
    get isSuppressed(): boolean;
    /**
     * Retrieve the Document that this ActiveEffect targets for modification.
     * @type {Document|null}
     */
    get target(): Document | null;
    /**
     * Whether the Active Effect is currently applying its changes to the target.
     * @type {boolean}
     */
    get active(): boolean;
    /**
     * Does this Active Effect currently modify an Actor?
     * @type {boolean}
     */
    get modifiesActor(): boolean;
    /** @inheritDoc */
    prepareDerivedData(): void;
    /**
     * Update derived Active Effect duration data.
     * Configure the remaining and label properties to be getters which lazily recompute only when necessary.
     * @returns {ActiveEffectDuration}
     */
    updateDuration(): ActiveEffectDuration;
    /**
     * Determine whether the ActiveEffect requires a duration update.
     * True if the worldTime has changed for an effect whose duration is tracked in seconds.
     * True if the combat turn has changed for an effect tracked in turns where the effect target is a combatant.
     * @returns {boolean}
     * @protected
     */
    protected _requiresDurationUpdate(): boolean;
    /**
     * Compute derived data related to active effect duration.
     * @returns {{
     *   type: string,
     *   duration: number|null,
     *   remaining: number|null,
     *   label: string,
     *   [_worldTime]: number,
     *   [_combatTime]: number}
     * }
     * @internal
     */
    _prepareDuration(): {
        type: string;
        duration: number | null;
        remaining: number | null;
        label: string;
        [_worldTime]: number;
        [_combatTime]: number;
    };
    /**
     * Format a round+turn combination as a decimal
     * @param {number} round    The round number
     * @param {number} turn     The turn number
     * @param {number} [nTurns] The maximum number of turns in the encounter
     * @returns {number}        The decimal representation
     * @internal
     */
    _getCombatTime(round: number, turn: number, nTurns?: number): number;
    /**
     * Format a number of rounds and turns into a human-readable duration label
     * @param {number} rounds   The number of rounds
     * @param {number} turns    The number of turns
     * @returns {string}        The formatted label
     * @internal
     */
    _getDurationLabel(rounds: number, turns: number): string;
    /**
     * Describe whether the ActiveEffect has a temporary duration based on combat turns or rounds.
     * @type {boolean}
     */
    get isTemporary(): boolean;
    /**
     * The source name of the Active Effect. The source is retrieved synchronously.
     * Therefore "Unknown" (localized) is returned if the origin points to a document inside a compendium.
     * Returns "None" (localized) if it has no origin, and "Unknown" (localized) if the origin cannot be resolved.
     * @type {string}
     */
    get sourceName(): string;
    /**
     * Apply this ActiveEffect to a provided Actor.
     * @param {Actor} actor                   The Actor to whom this effect should be applied
     * @param {EffectChangeData} change       The change data being applied
     * @returns {Record<string, *>}           An object of property paths and their updated values.
     */
    apply(actor: Actor, change: EffectChangeData): Record<string, any>;
    /**
     * Apply this ActiveEffect to a provided Actor using a heuristic to infer the value types based on the current value
     * and/or the default value in the template.json.
     * @param {Actor} actor                The Actor to whom this effect should be applied.
     * @param {EffectChangeData} change    The change data being applied.
     * @param {Record<string, *>} changes  The aggregate update paths and their updated values.
     * @protected
     */
    protected _applyLegacy(actor: Actor, change: EffectChangeData, changes: Record<string, any>): void;
    /**
     * Apply an ActiveEffect that uses an ADD application mode.
     * The way that effects are added depends on the data type of the current value.
     *
     * If the current value is null, the change value is assigned directly.
     * If the current type is a string, the change value is concatenated.
     * If the current type is a number, the change value is cast to numeric and added.
     * If the current type is an array, the change value is appended to the existing array if it matches in type.
     *
     * @param {Actor} actor                   The Actor to whom this effect should be applied
     * @param {EffectChangeData} change       The change data being applied
     * @param {*} current                     The current value being modified
     * @param {*} delta                       The parsed value of the change object
     * @param {object} changes                An object which accumulates changes to be applied
     * @protected
     */
    protected _applyAdd(actor: Actor, change: EffectChangeData, current: any, delta: any, changes: object): void;
    /**
     * Apply an ActiveEffect that uses a MULTIPLY application mode.
     * Changes which MULTIPLY must be numeric to allow for multiplication.
     * @param {Actor} actor                   The Actor to whom this effect should be applied
     * @param {EffectChangeData} change       The change data being applied
     * @param {*} current                     The current value being modified
     * @param {*} delta                       The parsed value of the change object
     * @param {object} changes                An object which accumulates changes to be applied
     * @protected
     */
    protected _applyMultiply(actor: Actor, change: EffectChangeData, current: any, delta: any, changes: object): void;
    /**
     * Apply an ActiveEffect that uses an OVERRIDE application mode.
     * Numeric data is overridden by numbers, while other data types are overridden by any value
     * @param {Actor} actor                   The Actor to whom this effect should be applied
     * @param {EffectChangeData} change       The change data being applied
     * @param {*} current                     The current value being modified
     * @param {*} delta                       The parsed value of the change object
     * @param {object} changes                An object which accumulates changes to be applied
     * @protected
     */
    protected _applyOverride(actor: Actor, change: EffectChangeData, current: any, delta: any, changes: object): void;
    /**
     * Apply an ActiveEffect that uses an UPGRADE, or DOWNGRADE application mode.
     * Changes which UPGRADE or DOWNGRADE must be numeric to allow for comparison.
     * @param {Actor} actor                   The Actor to whom this effect should be applied
     * @param {EffectChangeData} change       The change data being applied
     * @param {*} current                     The current value being modified
     * @param {*} delta                       The parsed value of the change object
     * @param {object} changes                An object which accumulates changes to be applied
     * @protected
     */
    protected _applyUpgrade(actor: Actor, change: EffectChangeData, current: any, delta: any, changes: object): void;
    /**
     * Apply an ActiveEffect that uses a CUSTOM application mode.
     * @param {Actor} actor                   The Actor to whom this effect should be applied
     * @param {EffectChangeData} change       The change data being applied
     * @param {*} current                     The current value being modified
     * @param {*} delta                       The parsed value of the change object
     * @param {object} changes                An object which accumulates changes to be applied
     * @protected
     */
    protected _applyCustom(actor: Actor, change: EffectChangeData, current: any, delta: any, changes: object): void;
    /** @inheritDoc */
    _onCreate(data: any, options: any, userId: any): void;
    /** @inheritDoc */
    _onUpdate(changed: any, options: any, userId: any): void;
    /** @inheritDoc */
    _onDelete(options: any, userId: any): void;
    /**
     * Display changes to active effects as scrolling Token status text.
     * @param {boolean} enabled     Is the active effect currently enabled?
     * @protected
     */
    protected _displayScrollingStatus(enabled: boolean): void;
    #private;
}
import BaseActiveEffect from "@common/documents/active-effect.mjs";
import type Document from "@common/abstract/document.mjs";
import type { ActiveEffectDuration } from "@client/documents/_types.mjs";
import Actor from "./actor.mjs";
import type { EffectChangeData } from "@client/documents/_types.mjs";
import type { DocumentConstructionContext } from "@common/abstract/_types.mjs";
import type { ActiveEffectData } from "@client/documents/_types.mjs";
