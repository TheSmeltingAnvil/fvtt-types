/** @import RollTable from "../roll-table.mjs" */
/**
 * The singleton collection of RollTable documents which exist within the active World.
 * This Collection is accessible within the Game object as game.tables.
 * @extends {WorldCollection<RollTable>}
 * @category Collections
 *
 * @see {@link foundry.documents.RollTable}: The RollTable document
 * @see {@link foundry.applications.sidebar.tabs.RollTableDirectory}: The RollTableDirectory
 *   sidebar directory
 */
export default class RollTables extends WorldCollection<RollTable> {
  /**
   * Register world settings related to RollTable documents
   */
  static registerSettings(): void
  constructor(data?: object[])
  /** @override */
  override get directory(): any
}
import WorldCollection from "../abstract/world-collection.mjs"
import type RollTable from "../roll-table.mjs"
