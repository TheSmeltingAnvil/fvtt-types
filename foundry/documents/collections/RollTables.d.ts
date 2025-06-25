import * as abstract from "foundry/documents/abstract/_module.js"

/**
 * The Collection of RollTable documents which exist within the active World.
 * This Collection is accessible within the Game object as game.tables.
 * @see {@link RollTable} The RollTable document
 * @see {@link RollTableDirectory} The RollTableDirectory sidebar directory
 */
export default class RollTables extends abstract.WorldCollection<RollTable> {
  static override documentName: "RollTable"

  /** Register world settings related to RollTable entities */
  static registerSettings(): void
}

export default interface RollTables extends abstract.WorldCollection<RollTable> {
  get directory(): foundry.applications.sidebar.tabs.RollTableDirectory
}
