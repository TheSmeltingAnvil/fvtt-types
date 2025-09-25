/**
 * A helper class to provide common functionality for working with HTML5 video objects
 * A singleton instance of this class is available as ``game.video``
 */
export default class VideoHelper {
    /**
     * Check if a source has a video extension.
     * @param {string} src          The source.
     * @returns {boolean}           If the source has a video extension or not.
     */
    static hasVideoExtension(src: string): boolean;
    /**
     * A user gesture must be registered before video playback can begin.
     * This Set records the video elements which await such a gesture.
     * @type {Set}
     */
    pending: Set<any>;
    /**
     * A mapping of base64 video thumbnail images
     * @type {Record<string, string>}
     */
    thumbs: Record<string, string>;
    /**
     * A flag for whether video playback is currently locked by awaiting a user gesture
     * @type {boolean}
     */
    locked: boolean;
    /**
     * Return the HTML element which provides the source for a loaded texture.
     * @param {PIXI.Sprite|SpriteMesh} mesh                       The rendered mesh
     * @returns {HTMLImageElement|HTMLVideoElement|null}          The source HTML element
     */
    getSourceElement(mesh: PIXI.Sprite | SpriteMesh): HTMLImageElement | HTMLVideoElement | null;
    /**
     * Get the video element source corresponding to a Sprite or SpriteMesh.
     * @param {PIXI.Sprite|SpriteMesh|PIXI.Texture} object        The PIXI source
     * @returns {HTMLVideoElement|null}                           The source video element or null
     */
    getVideoSource(object: PIXI.Sprite | SpriteMesh | PIXI.Texture): HTMLVideoElement | null;
    /**
     * Clone a video texture so that it can be played independently of the original base texture.
     * @param {HTMLVideoElement} source     The video element source
     * @returns {Promise<PIXI.Texture>}     An unlinked PIXI.Texture which can be played independently
     */
    cloneTexture(source: HTMLVideoElement): Promise<PIXI.Texture>;
    /**
     * Play a single video source
     * If playback is not yet enabled, add the video to the pending queue
     * @param {HTMLElement} video     The VIDEO element to play
     * @param {object} [options={}]   Additional options for modifying video playback
     * @param {boolean} [options.playing] Should the video be playing? Otherwise, it will be paused
     * @param {boolean} [options.loop]    Should the video loop?
     * @param {number} [options.offset]   A specific timestamp between 0 and the video duration to begin playback
     * @param {number} [options.volume]   Desired volume level of the video's audio channel (if any)
     */
    play(video: HTMLElement, { playing, loop, offset, volume }?: {
        playing?: boolean | undefined;
        loop?: boolean | undefined;
        offset?: number | undefined;
        volume?: number | undefined;
    }): Promise<any>;
    /**
     * Stop a single video source
     * @param {HTMLElement} video   The VIDEO element to stop
     */
    stop(video: HTMLElement): void;
    /**
     * Register an event listener to await the first mousemove gesture and begin playback once observed
     * A user interaction must involve a mouse click or keypress.
     * Listen for any of these events, and handle the first observed gesture.
     */
    awaitFirstGesture(): void;
    /**
     * Create and cache a static thumbnail to use for the video.
     * The thumbnail is cached using the video file path or URL.
     * @param {string} src        The source video URL
     * @param {object} options    Thumbnail creation options, including width and height
     * @returns {Promise<string>}  The created and cached base64 thumbnail image, or a placeholder image if the canvas is
     *                            disabled and no thumbnail can be generated.
     */
    createThumbnail(src: string, options: object): Promise<string>;
    /**
     * Lazily-load the YouTube API and retrieve a Player instance for a given iframe.
     * @param {string} id      The iframe ID.
     * @param {object} config  A player config object. See {@link https://developers.google.com/youtube/iframe_api_reference} for reference.
     * @returns {Promise<YT.Player>}
     */
    getYouTubePlayer(id: string, config?: object): Promise<YT.Player>;
    /**
     * Retrieve a YouTube video ID from a URL.
     * @param {string} url  The URL.
     * @returns {string}
     */
    getYouTubeId(url: string): string;
    /**
     * Take a URL to a YouTube video and convert it into a URL suitable for embedding in a YouTube iframe.
     * @param {string} url   The URL to convert.
     * @param {object} vars  YouTube player parameters.
     * @returns {string}     The YouTube embed URL.
     */
    getYouTubeEmbedURL(url: string, vars?: object): string;
    /**
     * Test a URL to see if it points to a YouTube video.
     * @param {string} url  The URL to test.
     * @returns {boolean}
     */
    isYouTubeURL(url?: string): boolean;
    #private;
}
