/** @import FogExploration from "../fog-exploration.mjs" */
/**
 * The singleton collection of FogExploration documents which exist within the active World.
 * @extends {WorldCollection<FogExploration>}
 * @category Collections
 *
 * @see {@link foundry.documents.FogExploration}: The FogExploration document
 */
export default class FogExplorations extends WorldCollection<FogExploration> {
    /**
     * Activate Socket event listeners to handle for fog resets
     * @param {Socket} socket     The active web socket connection
     * @internal
     */
    static _activateSocketListeners(socket: Socket): void;
    constructor(data?: object[]);
}
import type FogExploration from "../fog-exploration.mjs";
import WorldCollection from "../abstract/world-collection.mjs";
