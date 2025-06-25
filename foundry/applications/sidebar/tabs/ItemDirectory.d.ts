import { DocumentDirectory, DocumentDirectoryConfiguration } from "foundry/applications/sidebar/_module.js"
import { ContextMenuEntry } from "foundry/applications/ux/_module.js"

/**
 * The World Item directory listing.
 */
export default class ItemDirectory<TDocument extends Item<null> = Item<null>> extends DocumentDirectory<TDocument> {
  static override DEFAULT_OPTIONS: DeepPartial<DocumentDirectoryConfiguration>

  static override tabName: "item"

  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  protected override _getEntryContextOptions(): ContextMenuEntry[]

  /* -------------------------------------------- */
  /*  Drag & Drop                                 */
  /* -------------------------------------------- */

  protected override _canDragStart(): boolean
}
