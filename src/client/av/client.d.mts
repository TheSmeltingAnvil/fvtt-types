/**
 * @import {AVMaster} from "./master.mjs";
 * @import {AVSettings} from "./settings.mjs";
 */
/**
 * An interface for an Audio/Video client which is extended to provide broadcasting functionality.
 * @interface
 * @param {AVMaster} master           The master orchestration instance
 * @param {AVSettings} settings       The audio/video settings being used
 */
export default class AVClient {
    constructor(master: any, settings: any);
    /**
     * The master orchestration instance
     * @type {AVMaster}
     */
    master: AVMaster;
    /**
     * The active audio/video settings being used
     * @type {AVSettings}
     */
    settings: AVSettings;
    /**
     * Is audio broadcasting push-to-talk enabled?
     * @returns {boolean}
     */
    get isVoicePTT(): boolean;
    /**
     * Is audio broadcasting always enabled?
     * @returns {boolean}
     */
    get isVoiceAlways(): boolean;
    /**
     * Is audio broadcasting voice-activation enabled?
     * @returns {boolean}
     */
    get isVoiceActivated(): boolean;
    /**
     * Is the current user muted?
     * @returns {boolean}
     */
    get isMuted(): boolean;
    /**
     * One-time initialization actions that should be performed for this client implementation.
     * This will be called only once when the Game object is first set-up.
     * @returns {Promise<void>}
     * @abstract
     */
    initialize(): Promise<void>;
    /**
     * Connect to any servers or services needed in order to provide audio/video functionality.
     * Any parameters needed in order to establish the connection should be drawn from the settings object.
     * This function should return a boolean for whether the connection attempt was successful.
     * @returns {Promise<boolean>}   Was the connection attempt successful?
     * @abstract
     */
    connect(): Promise<boolean>;
    /**
     * Disconnect from any servers or services which are used to provide audio/video functionality.
     * This function should return a boolean for whether a valid disconnection occurred.
     * @returns {Promise<boolean>}   Did a disconnection occur?
     * @abstract
     */
    disconnect(): Promise<boolean>;
    /**
     * Provide an Object of available audio sources which can be used by this implementation.
     * Each object key should be a device id and the key should be a human-readable label.
     * @returns {Promise<{object}>}
     */
    getAudioSinks(): Promise<{
        object: any;
    }>;
    /**
     * Provide an Object of available audio sources which can be used by this implementation.
     * Each object key should be a device id and the key should be a human-readable label.
     * @returns {Promise<{object}>}
     */
    getAudioSources(): Promise<{
        object: any;
    }>;
    /**
     * Provide an Object of available video sources which can be used by this implementation.
     * Each object key should be a device id and the key should be a human-readable label.
     * @returns {Promise<{object}>}
     */
    getVideoSources(): Promise<{
        object: any;
    }>;
    /**
     * Return an array of Foundry User IDs which are currently connected to A/V.
     * The current user should also be included as a connected user in addition to all peers.
     * @returns {string[]}          The connected User IDs
     * @abstract
     */
    getConnectedUsers(): string[];
    /**
     * Provide a MediaStream instance for a given user ID
     * @param {string} userId        The User id
     * @returns {MediaStream|null}   The MediaStream for the user, or null if the user does not have one
     * @abstract
     */
    getMediaStreamForUser(userId: string): MediaStream | null;
    /**
     * Provide a MediaStream for monitoring a given user's voice volume levels.
     * @param {string} userId       The User ID.
     * @returns {MediaStream|null}  The MediaStream for the user, or null if the user does not have one.
     * @abstract
     */
    getLevelsStreamForUser(userId: string): MediaStream | null;
    /**
     * Is outbound audio enabled for the current user?
     * @returns {boolean}
     * @abstract
     */
    isAudioEnabled(): boolean;
    /**
     * Is outbound video enabled for the current user?
     * @returns {boolean}
     * @abstract
     */
    isVideoEnabled(): boolean;
    /**
     * Set whether the outbound audio feed for the current game user is enabled.
     * This method should be used when the user marks themselves as muted or if the gamemaster globally mutes them.
     * @param {boolean} enable        Whether the outbound audio track should be enabled (true) or disabled (false)
     * @abstract
     */
    toggleAudio(enable: boolean): void;
    /**
     * Set whether the outbound audio feed for the current game user is actively broadcasting.
     * This can only be true if audio is enabled, but may be false if using push-to-talk or voice activation modes.
     * @param {boolean} broadcast      Whether outbound audio should be sent to connected peers or not?
     * @abstract
     */
    toggleBroadcast(broadcast: boolean): void;
    /**
     * Set whether the outbound video feed for the current game user is enabled.
     * This method should be used when the user marks themselves as hidden or if the gamemaster globally hides them.
     * @param {boolean} enable        Whether the outbound video track should be enabled (true) or disabled (false)
     * @abstract
     */
    toggleVideo(enable: boolean): void;
    /**
     * Set the Video Track for a given User ID to a provided VideoElement
     * @param {string} userId                   The User ID to set to the element
     * @param {HTMLVideoElement} videoElement   The HTMLVideoElement to which the video should be set
     * @abstract
     */
    setUserVideo(userId: string, videoElement: HTMLVideoElement): Promise<void>;
    /**
     * Handle changes to A/V configuration settings.
     * @param {object} changed      The settings which have changed
     */
    onSettingsChanged(changed: object): void;
    /**
     * Replace the local stream for each connected peer with a re-generated MediaStream.
     * @abstract
     */
    updateLocalStream(): Promise<void>;
    #private;
}
