import * as abstract from "foundry/documents/abstract/_module.js"

/**
 * The Collection of Macro documents which exist within the active World.
 * This Collection is accessible within the Game object as game.macros.
 */
export default class Macros<TMacro extends Macro> extends abstract.WorldCollection<TMacro> {
  static override documentName: "Macro"

  override get directory(): foundry.applications.sidebar.DocumentDirectory<TMacro>

  override fromCompendium(document: TMacro): TMacro["_source"]
}
