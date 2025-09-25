/**
 * The client-side Playlist document which extends the common BasePlaylist model.
 * @extends BasePlaylist
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.collections.Playlists}: The world-level collection of Playlist documents
 * @see {@link foundry.documents.PlaylistSound}: The PlaylistSound embedded document within a parent
 *   Playlist
 * @see {@link foundry.applications.sheets.PlaylistConfig}: The Playlist configuration application
 */
export default class Playlist extends BasePlaylist {
  /**
   * Find all content links belonging to a given {@link Playlist} or {@link foundry.documents.PlaylistSound}.
   * @param {Playlist|PlaylistSound} doc  The Playlist or PlaylistSound.
   * @returns {NodeListOf<Element>}
   * @protected
   */
  protected static _getSoundContentLinks(doc: Playlist | PlaylistSound): NodeListOf<Element>
  /**
   * The order in which sounds within this playlist will be played (if sequential or shuffled)
   * Uses a stored seed for randomization to guarantee that all clients generate the same random order.
   * @type {string[]}
   */
  get playbackOrder(): string[]
  /** @inheritDoc */
  get visible(): any
  /** @inheritDoc */
  prepareDerivedData(): void
  playing: any
  /**
   * Begin simultaneous playback for all sounds in the Playlist.
   * @returns {Promise<Playlist>} The updated Playlist document
   */
  playAll(): Promise<Playlist>
  /**
   * Play the next Sound within the sequential or shuffled Playlist.
   * @param {string} [soundId]      The currently playing sound ID, if known
   * @param {object} [options={}]   Additional options which configure the next track
   * @param {number} [options.direction=1] Whether to advance forward (if 1) or backwards (if -1)
   * @returns {Promise<this|null|undefined>} If successfully updated, this Playlist document
   */
  playNext(
    soundId?: string,
    {
      direction,
    }?: {
      direction?: number | undefined
    },
  ): Promise<this | null | undefined>
  /**
   * Begin playback of a specific Sound within this Playlist.
   * Determine which other sounds should remain playing, if any.
   * @param {PlaylistSound} sound       The desired sound that should play
   * @returns {Promise<Playlist>}       The updated Playlist
   */
  playSound(sound: PlaylistSound): Promise<Playlist>
  /**
   * Stop playback of a specific Sound within this Playlist.
   * Determine which other sounds should remain playing, if any.
   * @param {PlaylistSound} sound       The desired sound that should play
   * @returns {Promise<Playlist>}       The updated Playlist
   */
  stopSound(sound: PlaylistSound): Promise<Playlist>
  /**
   * End playback for any/all currently playing sounds within the Playlist.
   * @returns {Promise<Playlist>} The updated Playlist document
   */
  stopAll(): Promise<Playlist>
  /**
   * Cycle the playlist mode
   * @returns {Promise<Playlist>}   A promise which resolves to the updated Playlist instance
   */
  cycleMode(): Promise<Playlist>
  /**
   * Get the next sound in the cached playback order. For internal use.
   * @param {number} soundId
   * @protected
   */
  protected _getNextSound(soundId: number): any
  /**
   * Get the previous sound in the cached playback order. For internal use.
   * @param {number} soundId
   * @protected
   */
  protected _getPreviousSound(soundId: number): any
  /**
   * Define the sorting order for the Sounds within this Playlist. For internal use.
   * If sorting alphabetically, the sounds are sorted with a locale-independent comparator
   * to ensure the same order on all clients.
   * @param {Sound} a
   * @param {Sound} b
   * @protected
   */
  protected _sortSounds(a: Sound, b: Sound): any
  /** @inheritDoc */
  toAnchor({ classes, ...options }?: { classes?: never[] | undefined }): any
  /** @inheritDoc */
  _onClickDocumentLink(event: any): Promise<Playlist>
  /** @inheritDoc */
  _preUpdate(changed: any, options: any, user: any): Promise<boolean | void>
  /** @inheritDoc */
  _onUpdate(changed: any, options: any, userId: any): void
  /** @inheritDoc */
  _onDelete(options: any, userId: any): void
  /** @inheritDoc */
  _onCreateDescendantDocuments(parent: any, collection: any, documents: any, data: any, options: any, userId: any): void
  /** @inheritDoc */
  _onUpdateDescendantDocuments(
    parent: any,
    collection: any,
    documents: any,
    changes: any,
    options: any,
    userId: any,
  ): void
  /** @inheritDoc */
  _onDeleteDescendantDocuments(parent: any, collection: any, documents: any, ids: any, options: any, userId: any): void
  /**
   * Handle callback logic when an individual sound within the Playlist concludes playback naturally
   * @param {PlaylistSound} sound
   * @internal
   */
  _onSoundEnd(
    sound: PlaylistSound,
  ): Promise<foundry.abstract.Document<object, foundry.abstract.types.DocumentConstructionContext> | null | undefined>
  /**
   * Handle callback logic when playback for an individual sound within the Playlist is started.
   * Schedule auto-preload of next track
   * @param {PlaylistSound} sound
   * @internal
   */
  _onSoundStart(sound: PlaylistSound): Promise<void>
  /**
   * Spawn a dialog for bulk importing sound files into a playlist.
   * @returns {Promise<boolean>}  Returns true if any sound files were successfully imported.
   */
  bulkImportDialog(): Promise<boolean>
  /**
   * Create PlaylistSounds in this Playlist from the given file paths.
   * @param {string[]} paths  File paths to import.
   * @returns {Promise<PlaylistSound[]>}
   */
  bulkImportSounds(paths: string[]): Promise<PlaylistSound[]>
  /** @inheritDoc */
  toCompendium(pack: any, options?: object): any
  #private
}
import BasePlaylist from "@common/documents/playlist.mjs"
