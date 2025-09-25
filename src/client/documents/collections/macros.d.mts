/** @import Macro from "../macro.mjs" */
/**
 * The singleton collection of Macro documents which exist within the active World.
 * This Collection is accessible within the Game object as game.macros.
 * @extends {WorldCollection<Macro>}
 * @category Collections
 *
 * @see {@link foundry.documents.Macro}: The Macro document
 * @see {@link foundry.applications.sidebar.tabs.MacroDirectory}: The MacroDirectory sidebar directory
 */
export default class Macros extends WorldCollection<Macro> {
  constructor(data?: object[])
  /** @override */
  override get directory(): any
  /** @inheritDoc */
  fromCompendium(document: any, options?: object): object
}
import WorldCollection from "../abstract/world-collection.mjs"
import type Macro from "../macro.mjs"
