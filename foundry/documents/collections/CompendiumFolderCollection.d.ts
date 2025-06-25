import { AppV1RenderOptions, DatabaseAction, DatabaseOperation } from "foundry/abstract/_types.js"
import { ApplicationRenderOptions } from "foundry/applications/_types.js"
import * as documents from "foundry/documents/_module.js"
import * as abstract from "foundry/documents/abstract/_module.js"

import CompendiumCollection from "./CompendiumCollection.js"

/**
 * A Collection of Folder documents within a Compendium pack.
 */
export default class CompendiumFolderCollection extends abstract.DocumentCollection<Folder> {
  constructor(pack: CompendiumCollection, data?: documents.FolderSource[])

  /**
   * The CompendiumCollection instance that contains this CompendiumFolderCollection
   */
  pack: CompendiumCollection

  override get documentName(): "Folder"

  override render(force: boolean, options?: ApplicationRenderOptions | AppV1RenderOptions): void

  override updateAll(
    transformation: Record<string, unknown> | ((document: Folder) => Record<string, unknown>),
    condition?: ((document: Folder) => boolean) | null,
    options?: foundry.abstract.types.DatabaseCreateOperation<null>,
  ): Promise<Folder[]>

  override _onModifyContents(
    action: DatabaseAction,
    documents: Folder[],
    result: unknown[],
    operation: DatabaseOperation<null>,
    user: User,
  ): void
}
