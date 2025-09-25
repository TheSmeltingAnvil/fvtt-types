/**
 * @import {KeyboardEventContext} from "@client/_types.mjs";
 * @import {AVClient} from "./client.mjs";
 */
/**
 * The master Audio/Video controller instance.
 * This is available as the singleton game.webrtc
 */
export default class AVMaster {
    settings: AVSettings;
    config: foundry.applications.settings.menus.AVConfig;
    /**
     * The Audio/Video client class
     * @type {AVClient}
     */
    client: AVClient;
    /**
     * A flag to track whether the current user is actively broadcasting their microphone.
     * @type {boolean}
     */
    broadcasting: boolean;
    _speakingData: {
        speaking: boolean;
        volumeHistories: never[];
    };
    _pttMuteTimeout: number;
    _reconnectPeriodMS: number;
    get mode(): any;
    /**
     * Connect to the Audio/Video client.
     * @returns {Promise<boolean>}     Was the connection attempt successful?
     */
    connect(): Promise<boolean>;
    /**
     * Disconnect from the Audio/Video client.
     * @returns {Promise<boolean>}     Whether an existing connection was terminated?
     */
    disconnect(): Promise<boolean>;
    /**
     * Callback actions to take when the user becomes disconnected from the server.
     * @returns {Promise<void>}
     */
    reestablish(): Promise<void>;
    /**
     * A user can broadcast audio if the AV mode is compatible and if they are allowed to broadcast.
     * @param {string} userId
     * @returns {boolean}
     */
    canUserBroadcastAudio(userId: string): boolean;
    /**
     * A user can share audio if they are allowed to broadcast and if they have not muted themselves or been blocked.
     * @param {string} userId
     * @returns {boolean}
     */
    canUserShareAudio(userId: string): boolean;
    /**
     * A user can broadcast video if the AV mode is compatible and if they are allowed to broadcast.
     * @param {string} userId
     * @returns {boolean}
     */
    canUserBroadcastVideo(userId: string): boolean;
    /**
     * A user can share video if they are allowed to broadcast and if they have not hidden themselves or been blocked.
     * @param {string} userId
     * @returns {boolean}
     */
    canUserShareVideo(userId: string): boolean;
    /**
     * Trigger a change in the audio broadcasting state when using a push-to-talk workflow.
     * @param {boolean} intent        The user's intent to broadcast. Whether an actual broadcast occurs will depend
     *                                on whether or not the user has muted their audio feed.
     */
    broadcast(intent: boolean): any;
    /**
     * Set up audio level listeners to handle voice activation detection workflow.
     * @param {string} mode           The currently selected voice broadcasting mode
     * @internal
     */
    _initializeUserVoiceDetection(mode: string): void;
    /**
     * Activate voice detection tracking for a userId on a provided MediaStream.
     * Currently only a MediaStream is supported because MediaStreamTrack processing is not yet supported cross-browser.
     * @param {MediaStream} stream    The MediaStream which corresponds to that User
     * @param {number} [ms]           A number of milliseconds which represents the voice activation volume interval
     */
    activateVoiceDetection(stream: MediaStream, ms?: number): void;
    /**
     * Actions which the orchestration layer should take when a peer user disconnects from the audio/video service.
     */
    deactivateVoiceDetection(): void;
    /**
     * Handle activation of a push-to-talk key or button.
     * @param {KeyboardEventContext} context    The context data of the event
     * @internal
     */
    _onPTTStart(context: KeyboardEventContext): boolean;
    /**
     * Handle deactivation of a push-to-talk key or button.
     * @param {KeyboardEventContext} context    The context data of the event
     * @internal
     */
    _onPTTEnd(context: KeyboardEventContext): boolean;
    render(): any;
    /**
     * Respond to changes which occur to AV Settings.
     * Changes are handled in descending order of impact.
     * @param {object} changed       The object of changed AV settings
     */
    onSettingsChanged(changed: object): Promise<boolean> | undefined;
    debug(message: any): void;
    #private;
}
import AVSettings from "./settings.mjs";
import type { KeyboardEventContext } from "@client/_types.mjs";
