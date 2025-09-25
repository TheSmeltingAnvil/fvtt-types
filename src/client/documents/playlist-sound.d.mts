/**
 * The client-side PlaylistSound document which extends the common BasePlaylistSound model.
 * Each PlaylistSound belongs to the sounds collection of a Playlist document.
 * @extends BasePlaylistSound
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.Playlist}: The Playlist document which contains PlaylistSound embedded
 *   documents
 * @see {@link foundry.applications.sheets.PlaylistSoundConfig}: The PlaylistSound configuration
 *   application
 * @see {@link foundry.audio.Sound}   The Sound API which manages web audio playback
 */
export default class PlaylistSound extends BasePlaylistSound {
    /**
     * The debounce tolerance for processing rapid volume changes into database updates in milliseconds
     * @type {number}
     */
    static VOLUME_DEBOUNCE_MS: number;
    /**
     * The Sound which manages playback for this playlist sound.
     * The Sound is created lazily when playback is required.
     * @type {Sound|null}
     */
    sound: Sound | null;
    /**
     * A debounced function, accepting a single volume parameter to adjust the volume of this sound
     * @type {(volume: number) => void}
     */
    debounceVolume: (volume: number) => void;
    /**
     * Create a Sound used to play this PlaylistSound document
     * @returns {Sound|null}
     * @protected
     */
    protected _createSound(): Sound | null;
    /**
     * Determine the fade-in length:
     * - If the track is not decoded yet, just honor the configured value.
     * - Once we know the real duration, cap the fade to half duration of the track.
     * @type {number}
     */
    get fadeDuration(): number;
    /**
     * The audio context within which this sound is played.
     * This will be undefined if the audio context is not yet active.
     * @type {AudioContext|undefined}
     */
    get context(): AudioContext | undefined;
    /**
     * schedule the fade-out that should occur when repeat is off.
     * Does nothing if the sound is set to repeat or has no finite duration.
     * @protected
     */
    protected _scheduleFadeOut(): void;
    /**
     * Cancel any pending fade-out on the current sound.
     * @protected
     */
    protected _cancelFadeOut(): void;
    /**
     * Synchronize playback for this particular PlaylistSound instance.
     */
    sync(): void;
    /**
     * Load the audio for this sound for the current client.
     * @returns {Promise<void>}
     */
    load(): Promise<void>;
    /** @inheritDoc */
    toAnchor({ classes, ...options }?: {
        classes?: never[] | undefined;
    }): any;
    /** @inheritDoc */
    _onClickDocumentLink(event: any): any;
    /** @inheritDoc */
    _preUpdate(changed: any, options: any, user: any): Promise<boolean | void>;
    /** @inheritDoc */
    _onUpdate(changed: any, options: any, userId: any): void;
    /** @inheritDoc */
    _onDelete(options: any, userId: any): void;
    playing: boolean | undefined;
    /**
     * Special handling that occurs when playback of a PlaylistSound is started.
     * @protected
     */
    protected _onStart(): Promise<any>;
    /**
     * Special handling that occurs when a PlaylistSound reaches the natural conclusion of its playback.
     * @protected
     */
    protected _onEnd(): Promise<any>;
    /**
     * Special handling that occurs when a PlaylistSound is manually stopped before its natural conclusion.
     * @protected
     */
    protected _onStop(): Promise<void>;
    /**
     * The effective volume at which this playlist sound is played, incorporating the global playlist volume setting.
     * @type {number}
     */
    get effectiveVolume(): number;
    #private;
}
import BasePlaylistSound from "@common/documents/playlist-sound.mjs";
