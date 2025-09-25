declare const Sound_base: {
    new (): {
        #events: Record<string, Map<foundry.utils.types.EmittedEventListener, {
            fn: foundry.utils.types.EmittedEventListener;
            once: boolean;
        }>>;
        addEventListener(type: string, listener: foundry.utils.types.EmittedEventListener, { once }?: {
            once?: boolean | undefined;
        } | undefined): void;
        removeEventListener(type: string, listener: foundry.utils.types.EmittedEventListener): void;
        dispatchEvent(event: Event): boolean;
    };
    emittedEvents: string[];
};
/**
 * @import {SoundPlaybackOptions, SoundScheduleCallback} from "./_types.mjs";
 */
/**
 * @typedef PositionalSoundPlaybackOptions
 * @property {number} [volume=1.0]                      The maximum volume at which the effect should be played
 * @property {boolean} [easing=true]                    Should volume be attenuated by distance?
 * @property {boolean} [walls=true]                     Should the sound be constrained by walls?
 * @property {boolean} [gmAlways=true]                  Should the sound always be played for GM users regardless
 *                                                      of actively controlled tokens?
 * @property {AmbientSoundEffect} [baseEffect]          A base sound effect to apply to playback
 * @property {AmbientSoundEffect} [muffledEffect]       A muffled sound effect to apply to playback, a sound may
 *                                                      only be muffled if it is not constrained by walls
 * @property {Partial<PointEffectSourceData>} [sourceData] Additional data passed to the SoundSource constructor
 * @property {SoundPlaybackOptions} [playbackOptions]   Additional options passed to Sound#play
 */
/**
 * A container around an AudioNode which manages sound playback in Foundry Virtual Tabletop.
 * Each Sound is either an AudioBufferSourceNode (for short sources) or a MediaElementAudioSourceNode (for long ones).
 * This class provides an interface around both types which allows standardized control over playback.
 * @see {EventEmitterMixin}
 */
export default class Sound extends Sound_base {
    /**
     * The sequence of container loading states.
     * @enum {Readonly<number>}
     */
    static STATES: Readonly<{
        readonly FAILED: -1;
        readonly NONE: 0;
        readonly LOADING: 1;
        readonly LOADED: 2;
        readonly STARTING: 3;
        readonly PLAYING: 4;
        readonly PAUSED: 5;
        readonly STOPPING: 6;
        readonly STOPPED: 7;
    }>;
    /**
     * The maximum duration, in seconds, for which an AudioBufferSourceNode will be used.
     * Otherwise, a MediaElementAudioSourceNode will be used.
     * @type {number}
     */
    static MAX_BUFFER_DURATION: number;
    /**
     * An incrementing counter used to assign each Sound a unique id.
     * @type {number}
     */
    static #nodeId: number;
    /**
     * Ensure to safely unload a media stream
     * @param {HTMLAudioElement} element      The audio element to unload
     */
    static #unloadAudioElement(element: HTMLAudioElement): void;
    /**
     * @deprecated since v12
     * @ignore
     */
    static get LOAD_STATES(): Readonly<{
        readonly FAILED: -1;
        readonly NONE: 0;
        readonly LOADING: 1;
        readonly LOADED: 2;
        readonly STARTING: 3;
        readonly PLAYING: 4;
        readonly PAUSED: 5;
        readonly STOPPING: 6;
        readonly STOPPED: 7;
    }>;
    /**
     * Construct a Sound by providing the source URL and other options.
     * @param {string} src                    The audio source path, either a relative path or a remote URL
     * @param {object} [options]              Additional options which configure the Sound
     * @param {AudioContext} [options.context]  A non-default audio context within which the sound should play
     * @param {boolean} [options.forceBuffer]   Force use of an AudioBufferSourceNode even if the audio duration is long
     */
    constructor(src: string, { context, forceBuffer }?: {
        context?: AudioContext | undefined;
        forceBuffer?: boolean | undefined;
    });
    /**
     * A unique integer identifier for this sound.
     * @type {number}
     */
    id: number;
    /**
     * The audio source path.
     * Either a relative path served by the running Foundry VTT game server or a remote URL.
     * @type {string}
     */
    src: string;
    /**
     * The audio context within which this Sound is played.
     * @type {AudioContext}
     */
    get context(): AudioContext;
    /**
     * The AudioSourceNode used to control sound playback.
     * @type {AudioBufferSourceNode|MediaElementAudioSourceNode}
     */
    get sourceNode(): AudioBufferSourceNode | MediaElementAudioSourceNode;
    /**
     * The GainNode used to control volume for this sound.
     * @type {GainNode}
     */
    gainNode: GainNode;
    /**
     * An AudioBuffer instance, if this Sound uses an AudioBufferSourceNode for playback.
     * @type {AudioBuffer|null}
     */
    buffer: AudioBuffer | null;
    /**
     * An HTMLAudioElement, if this Sound uses a MediaElementAudioSourceNode for playback.
     * @type {HTMLAudioElement|null}
     */
    element: HTMLAudioElement | null;
    /**
     * The life-cycle state of the sound.
     * @see {Sound.STATES}
     * @type {number}
     * @protected
     */
    protected _state: number;
    /**
     * Has the audio file been loaded either fully or for streaming.
     * @type {boolean}
     */
    get loaded(): boolean;
    /**
     * Did the audio file fail to load.
     * @type {boolean}
     */
    get failed(): boolean;
    /**
     * Is this sound currently playing?
     * @type {boolean}
     */
    get playing(): boolean;
    /**
     * Does this Sound use an AudioBufferSourceNode?
     * Otherwise, the Sound uses a streamed MediaElementAudioSourceNode.
     * @type {boolean}
     */
    get isBuffer(): boolean;
    /**
     * A convenience reference to the GainNode gain audio parameter.
     * @type {AudioParam}
     */
    get gain(): AudioParam;
    /**
     * The AudioNode destination which is the output target for the Sound.
     * @type {AudioNode}
     */
    destination: AudioNode;
    /**
     * A pipeline of AudioNode instances to be applied to Sound playback.
     * @type {AudioNode[]}
     */
    effects: AudioNode[];
    set volume(value: number);
    /**
     * The currently playing volume of the sound.
     * Undefined until playback has started for the first time.
     * @type {number}
     */
    get volume(): number;
    /**
     * The time in seconds at which playback was started.
     * @type {number}
     */
    startTime: number;
    /**
     * The time in seconds at which playback was paused.
     * @type {number}
     */
    pausedTime: number;
    /**
     * The total duration of the audio source in seconds.
     * @type {number}
     */
    get duration(): number;
    /**
     * The current playback time of the sound.
     * @type {number}
     */
    get currentTime(): number;
    set loop(value: boolean);
    /**
     * Is the sound looping?
     * @type {boolean}
     */
    get loop(): boolean;
    /**
     * An internal reference to some object which is managing this Sound instance.
     * @type {AmbientSound|null}
     * @internal
     */
    _manager: AmbientSound | null;
    /**
     * Load the audio source and prepare it for playback, either using an AudioBuffer or a streamed HTMLAudioElement.
     * @param {object} [options={}]   Additional options which affect resource loading
     * @param {boolean} [options.autoplay=false]  Automatically begin playback of the sound once loaded
     * @param {SoundPlaybackOptions} [options.autoplayOptions]  Playback options passed to Sound#play, if autoplay
     * @returns {Promise<Sound>}      A Promise which resolves to the Sound once it is loaded
     */
    load({ autoplay, autoplayOptions }?: {
        autoplay?: boolean | undefined;
        autoplayOptions?: SoundPlaybackOptions | undefined;
    }): Promise<Sound>;
    /**
     * An inner method which handles loading so that it can be de-duplicated under a single shared Promise resolution.
     * This method is factored out to allow for subclasses to override loading behavior.
     * @returns {Promise<void>}                       A Promise which resolves once the sound is loaded
     * @throws {Error}                                An error if loading failed for any reason
     * @protected
     */
    protected _load(): Promise<void>;
    /**
     * Begin playback for the Sound.
     * This method is asynchronous because playback may not start until after an initially provided delay.
     * The Promise resolves *before* the fade-in of any configured volume transition.
     * @param {SoundPlaybackOptions} [options]  Options which configure the beginning of sound playback
     * @returns {Promise<Sound>}                A Promise which resolves once playback has started (excluding fade)
     */
    play(options?: SoundPlaybackOptions, ...args: any[]): Promise<Sound>;
    /**
     * Play a one-shot Sound originating from a predefined point on the canvas.
     * The sound plays locally for the current client only.
     * To play a sound for all connected clients use {@link foundry.canvas.layers.SoundsLayer#emitAtPosition}.
     * A helper which does not depend on a pre-existing Sound instance is available at
     * {@link foundry.canvas.layers.SoundsLayer#playAtPosition}.
     *
     * @param {Point|ElevatedPoint} origin                  The canvas coordinates from which the sound originates
     * @param {number} radius                               The radius of effect in distance units
     * @param {PositionalSoundPlaybackOptions} options      Additional options which configure playback
     * @returns {Promise<Sound|null>}                       A Promise which resolves to the played Sound, or null
     *
     * @example Play the sound of a trap springing
     * ```js
     * const sound = new Sound("modules/my-module/sounds/spring-trap.ogg", {context: game.audio.environment});
     * await sound.load();
     * const origin = {x: 5200, y: 3700};  // The origin point for the sound
     * const radius = 30;                  // Audible in a 30-foot radius
     * await sound.playAtPosition(origin, radius);
     * ```
     *
     * @example A Token casts a spell
     * ```js
     * const sound = new Sound("modules/my-module/sounds/spells-sprite.ogg", {context: game.audio.environment});
     * const origin = token.center;         // The origin point for the sound
     * const radius = 60;                   // Audible in a 60-foot radius
     * await sound.playAtPosition(origin, radius, {
     *   walls: false,                      // Not constrained by walls with a lowpass muffled effect
     *   muffledEffect: {type: "lowpass", intensity: 6},
     *   sourceData: {
     *     angle: 120,                      // Sound emitted at a limited angle
     *     rotation: 270                    // Configure the direction of sound emission
     *   }
     *   playbackOptions: {
     *     loopStart: 12,                   // Audio sprite timing
     *     loopEnd: 16,
     *     fade: 300,                      // Fade-in 300ms
     *     onended: () => console.log("Do something after the spell sound has played")
     *   }
     * });
     * ```
     */
    playAtPosition(origin: Point | ElevatedPoint, radius: number, { volume, easing, walls, gmAlways, baseEffect, muffledEffect, sourceData, playbackOptions }?: PositionalSoundPlaybackOptions): Promise<Sound | null>;
    /**
     * Begin playback for the configured pipeline and playback options.
     * This method is factored out so that subclass implementations of Sound can implement alternative behavior.
     * @protected
     */
    protected _play(): void;
    /**
     * Pause playback of the Sound.
     * For AudioBufferSourceNode this stops playback after recording the current time.
     * Calling Sound#play will resume playback from the pausedTime unless some other offset is passed.
     * For a MediaElementAudioSourceNode this simply calls the HTMLAudioElement#pause method directly.
     */
    pause(): void;
    /**
     * Pause playback of the Sound.
     * This method is factored out so that subclass implementations of Sound can implement alternative behavior.
     * @protected
     */
    protected _pause(): void;
    /**
     * Stop playback for the Sound.
     * This method is asynchronous because playback may not stop until after an initially provided delay.
     * The Promise resolves *after* the fade-out of any configured volume transition.
     * @param {SoundPlaybackOptions} [options]  Options which configure the stopping of sound playback
     * @returns {Promise<Sound>}                A Promise which resolves once playback is fully stopped (including fade)
     */
    stop(options?: SoundPlaybackOptions): Promise<Sound>;
    /**
     * Stop playback of the Sound.
     * This method is factored out so that subclass implementations of Sound can implement alternative behavior.
     * @protected
     */
    protected _stop(): void;
    /**
     * Fade the volume for this sound between its current level and a desired target volume.
     * @param {number} volume                     The desired target volume level between 0 and 1
     * @param {object} [options={}]               Additional options that configure the fade operation
     * @param {number} [options.duration=1000]      The duration of the fade effect in milliseconds
     * @param {number} [options.from]               A volume level to start from, the current volume by default
     * @param {string} [options.type=linear]        The type of fade easing, "linear" or "exponential"
     * @returns {Promise<void>}                   A Promise that resolves after the requested fade duration
     */
    fade(volume: number, { duration, from, type }?: {
        duration?: number | undefined;
        from?: number | undefined;
        type?: string | undefined;
    }): Promise<void>;
    /**
     * Wait a certain scheduled duration within this sound's own AudioContext.
     * @param {number} duration                   The duration to wait in milliseconds
     * @returns {Promise<void>}                   A promise which resolves after the waited duration
     */
    wait(duration: number): Promise<void>;
    /**
     * Schedule a function to occur at the next occurrence of a specific playbackTime for this Sound.
     * @param {SoundScheduleCallback} fn  A function that will be called with this Sound as its single argument
     * @param {number} playbackTime       The desired playback time at which the function should be called
     * @returns {Promise<any>}            A Promise which resolves to the returned value of the provided function once
     *                                    it has been evaluated.
     * @example Schedule audio playback changes
     * ```js
     * sound.schedule(() => console.log("Do something exactly 30 seconds into the track"), 30);
     * sound.schedule(() => console.log("Do something next time the track loops back to the beginning"), 0);
     * sound.schedule(() => console.log("Do something 5 seconds before the end of the track"), sound.duration - 5);
     * ```
     */
    schedule(fn: SoundScheduleCallback, playbackTime: number): Promise<any>;
    /**
     * Cancel one scheduled event created with {@link Sound#schedule}.
     * You may pass either the {@link AudioTimeout} returned internally or the Promise returned by {@link Sound#schedule}.
     * @param {AudioTimeout|{timeout: AudioTimeout}} handle The handle to cancel.
     */
    unschedule(handle: AudioTimeout | {
        timeout: AudioTimeout;
    }): void;
    /**
     * Cancel all events that are still scheduled for this sound.
     */
    unscheduleAll(): void;
    /**
     * Update the array of effects applied to a Sound instance.
     * Optionally a new array of effects can be assigned. If no effects are passed, the current effects are re-applied.
     * @param {AudioNode[]} [effects]     An array of AudioNode effects to apply
     */
    applyEffects(effects?: AudioNode[]): void;
    /**
     * Create any AudioNode instances required for playback of this Sound.
     * @protected
     */
    protected _createNodes(): void;
    /**
     * Create the audio pipeline used to play this Sound.
     * The GainNode is reused each time to link volume changes across multiple playbacks.
     * The AudioSourceNode is re-created every time that Sound#play is called.
     * @protected
     */
    protected _connectPipeline(): void;
    /**
     * Disconnect the audio pipeline once playback is stopped.
     * Walk backwards along the Sound##pipeline from the Sound#destination, disconnecting each node.
     * @protected
     */
    protected _disconnectPipeline(): void;
    /**
     * @deprecated since v12
     * @ignore
     */
    get loadState(): number;
    /**
     * @deprecated since v12
     * @ignore
     */
    get container(): this;
    /**
     * @deprecated since v12
     * @ignore
     */
    get node(): AudioBufferSourceNode | MediaElementAudioSourceNode;
    /**
     * @deprecated since v12
     * @ignore
     */
    on(eventName: any, fn: any, { once }?: {
        once?: boolean | undefined;
    }): void;
    /**
     * @deprecated since v12
     * @ignore
     */
    off(eventName: any, fn: any): void;
    /**
     * @deprecated since v12
     * @ignore
     */
    emit(eventName: any): boolean;
    #private;
}
export type PositionalSoundPlaybackOptions = {
    /**
     * The maximum volume at which the effect should be played
     */
    volume?: number | undefined;
    /**
     * Should volume be attenuated by distance?
     */
    easing?: boolean | undefined;
    /**
     * Should the sound be constrained by walls?
     */
    walls?: boolean | undefined;
    /**
     * Should the sound always be played for GM users regardless
     *                   of actively controlled tokens?
     */
    gmAlways?: boolean | undefined;
    /**
     * A base sound effect to apply to playback
     */
    baseEffect?: AmbientSoundEffect;
    /**
     * A muffled sound effect to apply to playback, a sound may
     *        only be muffled if it is not constrained by walls
     */
    muffledEffect?: AmbientSoundEffect;
    /**
     * Additional data passed to the SoundSource constructor
     */
    sourceData?: Partial<PointEffectSourceData>;
    /**
     * Additional options passed to Sound#play
     */
    playbackOptions?: SoundPlaybackOptions | undefined;
};
import type { SoundPlaybackOptions } from "./_types.mjs";
import type { SoundScheduleCallback } from "./_types.mjs";
import AudioTimeout from "./timeout.mjs";
export {};
