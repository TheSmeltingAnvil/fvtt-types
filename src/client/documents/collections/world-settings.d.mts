/** @import Setting from "../setting.mjs"; */
/**
 * The Collection of Setting documents which exist within the active World.
 * This collection is accessible as game.settings.storage.get("world")
 * @extends {WorldCollection<Setting>}
 * @category Collections
 *
 * @see {@link foundry.documents.Setting}: The Setting document
 */
export default class WorldSettings extends WorldCollection<Setting> {
  constructor(data?: object[])
  /** @override */
  override get directory(): never
  /**
   * Return the Setting document with the given key.
   * @param {string} key        The setting key
   * @param {string} [user]     For user-scoped settings, the user ID.
   * @returns {Setting}         The Setting
   */
  getSetting(key: string, user?: string): Setting
  /**
   * Return the serialized value of the world setting as a string
   * @param {string} key     The setting key
   * @param {string} [user]  For user-scoped settings, the user ID.
   * @returns {string|null}  The serialized setting string
   */
  getItem(key: string, user?: string): string | null
}
import WorldCollection from "../abstract/world-collection.mjs"
import type Setting from "../setting.mjs"
