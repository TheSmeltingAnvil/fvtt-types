import * as documents from "foundry/documents/_module.js"
import * as abstract from "foundry/documents/abstract/_module.js"

import CompendiumCollection from "./CompendiumCollection.js"

declare const MixedCompendiumPacks: ReturnType<
  typeof abstract.DirectoryCollectionMixin<typeof abstract.DocumentCollection<documents.WorldDocument>>
>

/**
 * A mapping of CompendiumCollection instances, one per Compendium pack
 */
export default class CompendiumPacks extends abstract.DirectoryCollectionMixin(Collection) {
  /**
   * Get a Collection of Folders which contain Compendium Packs
   */
  get folders(): Collection<string, Folder>

  protected override _getVisibleTreeContents(): CompendiumCollection[]

  protected static override _sortAlphabetical(a: CompendiumCollection, b: CompendiumCollection): number
  protected static override _sortAlphabetical<T extends { name: string }>(a: T, b: T): number
}
