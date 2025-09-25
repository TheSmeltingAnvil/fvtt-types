/**
 * @import Combatant from "./combatant.mjs";
 */
/**
 * The client-side CombatantGroup document which extends the common BaseCombatantGroup model.
 * @extends BaseCombatantGroup
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.Combat}: The Combat document which contains Combatant embedded documents
 */
export default class CombatantGroup extends BaseCombatantGroup {
    /**
     * A group is considered defeated if all its members are defeated, or it has no members.
     * @type {boolean}
     */
    defeated: boolean;
    /**
     * A group is considered hidden if all its members are hidden, or it has no members.
     * @type {boolean}
     */
    hidden: boolean;
    /**
     * The Combatant members of this group.
     * @type {Set<Combatant>}
     */
    members: Set<Combatant>;
    /** @inheritDoc */
    prepareBaseData(): void;
    /**
     * Clear the movement history of all Tokens within this Combatant Group.
     * @returns {Promise<void>}
     */
    clearMovementHistories(): Promise<void>;
}
import BaseCombatantGroup from "@common/documents/combatant-group.mjs";
import type Combatant from "./combatant.mjs";
