import * as abstract from "foundry/documents/abstract/_module.js"

/**
 * The singleton collection of FogExploration documents which exist within the active World.
 * @category Collections
 *
 * @see {@link foundry.documents.FogExploration}: The FogExploration document
 */
export default class FogExplorations extends abstract.WorldCollection<FogExploration> {
  static documentName: FogExploration["documentName"]

  /**
   * Activate Socket event listeners to handle for fog resets
   * @param socket The active web socket connection
   * @internal
   */
  static _activateSocketListeners(socket: io.Socket): void
}
