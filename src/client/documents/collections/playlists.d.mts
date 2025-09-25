/**
 * @import Playlist from "../playlist.mjs";
 * @import Scene from "../scene.mjs";
 */
/**
 * The singleton collection of Playlist documents which exist within the active World.
 * This Collection is accessible within the Game object as game.playlists.
 * @extends {WorldCollection<Playlist>}
 * @category Collections
 *
 * @see {@link foundry.documents.Playlist}: The Playlist document
 * @see {@link foundry.applications.sidebar.tabs.PlaylistDirectory}: The PlaylistDirectory sidebar
 *   directory
 */
export default class Playlists extends WorldCollection<Playlist> {
  constructor(data?: object[])
  /**
   * Return the subset of Playlist documents which are currently playing
   * @type {Playlist[]}
   */
  get playing(): Playlist[]
  /**
   * Perform one-time initialization to begin playback of audio.
   * @returns {Promise<void>}
   */
  initialize(): Promise<void>
  /**
   * Handle changes to a Scene to determine whether to trigger changes to Playlist documents.
   * @param {Scene|null} scene        The new active Scene
   * @param {Scene|null} priorScene   The previously active Scene
   * @internal
   */
  _onChangeScene(scene: Scene | null, priorScene: Scene | null): Promise<void>
}
import WorldCollection from "../abstract/world-collection.mjs"
import type Playlist from "../playlist.mjs"
import type Scene from "../scene.mjs"
