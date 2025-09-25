/**
 * @import {CompendiumCollection} from "./_module.mjs";
 * @import Folder from "../folder.mjs";
 */
/**
 * A mapping of CompendiumCollection instances, one per Compendium pack
 * @extends {Collection<string, CompendiumCollection>}
 * @category Collections
 */
export default class CompendiumPacks extends Collection<string, CompendiumCollection<any>> {
  /** @override */
  // @ts-expect-error -- IGNORE --
  static override _sortAlphabetical(a: any, b: any): any
  constructor()
  constructor(entries?: readonly (readonly [string, CompendiumCollection<any>])[] | null | undefined)
  constructor()
  constructor(iterable?: Iterable<readonly [string, CompendiumCollection<any>]> | null | undefined)
  /**
   * The Collection class name
   * @type {string}
   */
  get name(): string
  /**
   * Get a Collection of Folders which contain Compendium Packs
   * @returns {Collection<string, Folder>}
   */
  get folders(): Collection<string, Folder>
  /** @override */
  // @ts-expect-error -- IGNORE --
  override _getVisibleTreeContents(): CompendiumCollection<any>[]
}
import Collection from "@common/utils/collection.mjs"
import type Folder from "../folder.mjs"
import type { CompendiumCollection } from "./_module.mjs"
