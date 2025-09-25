export type AudioBufferCacheEntry = {
    src: string;
    buffer: AudioBuffer;
    size: number;
    locked?: boolean | undefined;
    next?: AudioBufferCacheEntry | undefined;
    previous?: AudioBufferCacheEntry | undefined;
};
export type SoundCreationOptions = {
    /**
     * The source URL for the audio file
     */
    src: string;
    /**
     * A specific AudioContext to attach the sound to
     */
    context?: AudioContext | undefined;
    /**
     * Reuse an existing Sound for this source?
     */
    singleton?: boolean | undefined;
    /**
     * Begin loading the audio immediately?
     */
    preload?: boolean | undefined;
    /**
     * Begin playing the audio as soon as it is ready?
     */
    autoplay?: boolean | undefined;
    /**
     * Options passed to the play method if autoplay is true
     */
    autoplayOptions?: SoundPlaybackOptions | undefined;
};
export type SoundPlaybackOptions = {
    /**
     * A delay in seconds by which to delay playback
     */
    delay?: number | undefined;
    /**
     * A limited duration in seconds for which to play
     */
    duration?: number | undefined;
    /**
     * A duration in milliseconds over which to fade in playback
     */
    fade?: number | undefined;
    /**
     * Should sound playback loop?
     */
    loop?: boolean | undefined;
    /**
     * Seconds of the AudioBuffer when looped playback should start.
     *            Only works for AudioBufferSourceNode.
     */
    loopStart?: number | undefined;
    /**
     * Seconds of the Audio buffer when looped playback should restart.
     *                Only works for AudioBufferSourceNode.
     */
    loopEnd?: number | undefined;
    /**
     * An offset in seconds at which to start playback
     */
    offset?: number | undefined;
    /**
     * A callback function attached to the source node
     */
    onended?: Function | null | undefined;
    /**
     * The volume at which to play the sound
     */
    volume?: number | undefined;
};
export type SoundScheduleCallback = (sound: Sound) => any;
/**
 * An object representing the raw and normalized audio data produced by an AnalyserNode
 * for a given audio context (music, environment, interface).
 */
export type AnalysisDataValue = {
    /**
     * Whether the analyzer is currently active.
     */
    active: boolean;
    /**
     * If true, the analyzer remains active and will not be disabled after inactivity.
     */
    keepAlive: boolean;
    /**
     * The AnalyserNode for this context, or null if inactive.
     */
    node: AnalyserNode | null;
    /**
     * The FFT frequency data buffer used by the AnalyserNode.
     */
    dataArray: Float32Array | null;
    /**
     * Raw average decibel values for each frequency band.
     */
    db: {
        bass: number;
        mid: number;
        treble: number;
        all: number;
    };
    /**
     * Normalized [0,1] values for the same bands.
     */
    bands: {
        bass: number;
        mid: number;
        treble: number;
        all: number;
    };
    /**
     * The timestamp when data was last requested.
     */
    lastUsed: number;
};
/**
 * An object mapping each audio context name (music, environment, interface)
 * to an {@link foundry.audio.AnalysisDataValue}.
 */
export type AnalysisData = {
    /**
     * Analysis data for the music context.
     */
    music: AnalysisDataValue;
    /**
     * Analysis data for the ambient/environment context.
     */
    environment: AnalysisDataValue;
    /**
     * Analysis data for the interface context.
     */
    interface: AnalysisDataValue;
    /**
     * Whether the internal RAQ loop is currently running.
     */
    analysisLoopActive: boolean;
};
export type ContextName = "music" | "environment" | "interface";
export type BandName = "bass" | "mid" | "treble" | "all";
export type AnalysisNodes = {
    /**
     * The AnalyserNode for music, or null if not active.
     */
    music: AnalyserNode | null;
    /**
     * The AnalyserNode for ambient, or null if not active.
     */
    environment: AnalyserNode | null;
    /**
     * The AnalyserNode for interface, or null if not active.
     */
    interface: AnalyserNode | null;
};
