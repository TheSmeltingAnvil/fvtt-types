import { ApplicationConfiguration } from "foundry/applications/_types.js"
import { DocumentDirectory } from "foundry/applications/sidebar/_module.js"
import { ContextMenuEntry } from "foundry/applications/ux/_module.js"

/**
 * The World Cards directory listing.
 */
export default class CardsDirectory extends DocumentDirectory<Cards> {
  static override DEFAULT_OPTIONS: Partial<ApplicationConfiguration>

  static override tabName: "cards"

  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  protected override _getEntryContextOptions(): ContextMenuEntry[]
}
