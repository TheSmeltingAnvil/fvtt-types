/**
 * @import Combat from "../combat.mjs";
 */
/**
 * The singleton collection of Combat documents which exist within the active World.
 * This Collection is accessible within the Game object as game.combats.
 * @extends {WorldCollection<Combat>}
 * @category Collections
 *
 * @see {@link foundry.documents.Combat}: The Combat document
 * @see {@link foundry.applications.sidebar.tabs.CombatTracker}: The CombatTracker sidebar directory
 */
export default class CombatEncounters extends WorldCollection<Combat> {
    /**
     * Provide the settings object which configures the Combat document
     * @type {object}
     */
    static get settings(): object;
    constructor(data?: object[]);
    /** @inheritDoc */
    get directory(): any;
    /**
     * Get an Array of Combat instances which apply to the current canvas scene
     * @type {Combat[]}
     */
    get combats(): Combat[];
    /**
     * The currently active Combat instance.
     * @type {Combat}
     */
    get active(): Combat;
    /**
     * The currently viewed Combat encounter
     * @type {Combat|null}
     */
    get viewed(): Combat | null;
}
import type Combat from "../combat.mjs";
import WorldCollection from "../abstract/world-collection.mjs";
