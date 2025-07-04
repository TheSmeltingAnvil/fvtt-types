import * as abstract from "foundry/documents/abstract/_module.js"
import * as documents from "foundry/documents/_module.js"

/**
 * The Collection of Playlist documents which exist within the active World.
 * This Collection is accessible within the Game object as game.playlists.
 *
 * @see {@link Playlist} The Playlist entity
 * @see {@link PlaylistDirectory} The PlaylistDirectory sidebar directory
 */
export default class Playlists extends abstract.WorldCollection<Playlist> {
  constructor(data?: documents.PlaylistSoundSource[])

  static override documentName: "Playlist"

  /** Return the subset of Playlist entities which are currently playing */
  get playing(): Playlist[]

  /** Perform one-time initialization to begin playback of audio */
  initialize(): void

  /**
   * Handle changes to a Scene to determine whether to trigger changes to Playlist entities.
   * @param scene The Scene entity being updated
   * @param data  The incremental update data
   */
  protected _onChangeScene(scene: Scene, data: Record<string, unknown>): Promise<void>
}
