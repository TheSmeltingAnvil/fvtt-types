/**
 * @import Combat from "./combat.mjs";
 * @import User from "./user.mjs";
 * @import Actor from "./actor.mjs";
 * @import TokenDocument from "./token.mjs";
 * @import {Roll} from "../dice/_module.mjs";
 */
/**
 * The client-side Combatant document which extends the common BaseCombatant model.
 *
 * @extends BaseCombatant
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.Combat}: The Combat document which contains Combatant embedded documents
 * @see {@link foundry.applications.sheets.CombatantConfig}: The application which configures a
 *   Combatant
 */
export default class Combatant extends BaseCombatant {
    /** @override */
    static override _preCreateOperation(documents: any, operation: any, _user: any): Promise<void>;
    /** @override */
    static override _preUpdateOperation(_documents: any, operation: any, _user: any): Promise<void>;
    /** @override */
    static override _preDeleteOperation(_documents: any, operation: any, _user: any): Promise<void>;
    /**
     * The token video source image (if any)
     * @type {string|null}
     * @internal
     */
    _videoSrc: string | null;
    /**
     * The current value of the special tracked resource which pertains to this Combatant
     * @type {object|null}
     */
    resource: object | null;
    /**
     * A convenience alias of Combatant#parent which is more semantically intuitive
     * @type {Combat|null}
     */
    get combat(): Combat | null;
    /**
     * This is treated as a non-player combatant if it has no associated actor and no player users who can control it
     * @type {boolean}
     */
    get isNPC(): boolean;
    /**
     * Eschew `ClientDocument`'s redirection to `Combat#permission` in favor of special ownership determination.
     * @override
     */
    override get permission(): any;
    /** @override */
    override get visible(): any;
    /**
     * A reference to the Actor document which this Combatant represents, if any
     * @type {Actor|null}
     */
    get actor(): Actor | null;
    /**
     * A reference to the Token document which this Combatant represents, if any
     * @type {TokenDocument|null}
     */
    get token(): TokenDocument | null;
    /**
     * An array of non-Gamemaster Users who have ownership of this Combatant.
     * @type {User[]}
     */
    get players(): User[];
    /**
     * Has this combatant been marked as defeated?
     * @type {boolean}
     */
    get isDefeated(): boolean;
    /**
     * Get a Roll object which represents the initiative roll for this Combatant.
     * @param {string} formula        An explicit Roll formula to use for the combatant.
     * @returns {Roll}                The unevaluated Roll instance to use for the combatant.
     */
    getInitiativeRoll(formula: string): Roll;
    /**
     * Roll initiative for this particular combatant.
     * @param {string} [formula]      A dice formula which overrides the default for this Combatant.
     * @returns {Promise<Combatant>}  The updated Combatant.
     */
    rollInitiative(formula?: string): Promise<Combatant>;
    /** @override */
    override prepareDerivedData(): void;
    /**
     * Update the value of the tracked resource for this Combatant.
     * @returns {null|object}
     */
    updateResource(): null | object;
    /**
     * Acquire the default dice formula which should be used to roll initiative for this combatant.
     * Modules or systems could choose to override or extend this to accommodate special situations.
     * @returns {string}               The initiative formula to use for this combatant.
     * @protected
     */
    protected _getInitiativeFormula(): string;
    /**
     * Prepare derived data based on group membership.
     * @protected
     */
    protected _prepareGroup(): void;
    initiative: any;
    group: any;
    /**
     * Clear the movement history of the Combatant's Token.
     * @returns {Promise<void>}
     */
    clearMovementHistory(): Promise<void>;
}
import BaseCombatant from "@common/documents/combatant.mjs";
import type Combat from "./combat.mjs";
import type Actor from "./actor.mjs";
import type TokenDocument from "./token.mjs";
import type User from "./user.mjs";
import type { Roll } from "../dice/_module.mjs";
