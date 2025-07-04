import * as abstract from "foundry/documents/abstract/_module.js"
import * as documents from "foundry/documents/_module.js"

/**
 * The Collection of Folder documents which exist within the active World.
 * This Collection is accessible within the Game object as game.folders.
 */
export default class Folders<TFolder extends Folder = Folder> extends abstract.WorldCollection<TFolder> {
  constructor(data?: documents.FolderSource[])

  protected _expanded: Record<string, boolean>

  static override documentName: "Folder"

  override render(force: boolean, options?: foundry.abstract.types.ApplicationV1Options): void

  /** Refresh the display of any active JournalSheet instances where the folder list will change. */
  protected _refreshJournalEntrySheets(): void
}
