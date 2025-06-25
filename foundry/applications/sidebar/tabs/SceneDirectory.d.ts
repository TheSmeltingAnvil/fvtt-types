import { HandlebarsRenderOptions } from "foundry/applications/api/HandlebarsApplicationMixin.js"
import DocumentDirectory from "../DocumentDirectory.js"
import { ContextMenuEntry } from "foundry/applications/ux/ContextMenu.js"

/**
 * The World Scene directory listing.
 */
export default class SceneDirectory extends DocumentDirectory<Scene> {
  //static override DEFAULT_OPTIONS: Partial<ApplicationConfiguration>

  //static override tabName: "scenes"

  protected static override _entryPartial: string

  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  protected override _canRender(options: HandlebarsRenderOptions): false | void

  protected override _getEntryContextOptions(): ContextMenuEntry[]

  protected override _getFolderContextOptions(): ContextMenuEntry[]
}
