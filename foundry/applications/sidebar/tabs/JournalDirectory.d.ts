import { ApplicationConfiguration } from "foundry/applications/_types.js"
import { DocumentDirectory } from "foundry/applications/sidebar/_module.js"
import { ContextMenuEntry } from "foundry/applications/ux/_module.js"

/**
 * The World Journal.
 */
export default class JournalDirectory extends DocumentDirectory<JournalEntry> {
  static override DEFAULT_OPTIONS: Partial<ApplicationConfiguration>

  static override tabName: "journal"

  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  protected override _getEntryContextOptions(): ContextMenuEntry[]
}
