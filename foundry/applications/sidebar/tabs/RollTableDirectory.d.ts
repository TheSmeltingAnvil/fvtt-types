import { ApplicationConfiguration } from "foundry/applications/_types.js"
import { DocumentDirectory } from "foundry/applications/sidebar/_module.js"
import { ContextMenuEntry } from "foundry/applications/ux/_module.js"

/**
 * The World RollTable directory listing.
 */
export default class RollTableDirectory extends DocumentDirectory<RollTable> {
  static override DEFAULT_OPTIONS: Partial<ApplicationConfiguration>

  static override tabName: "tables"

  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  protected override _getEntryContextOptions(): ContextMenuEntry[]
}
