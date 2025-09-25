/**
 * @typedef AVSettingsData
 * @property {boolean} [muted]     Whether this user has muted themselves.
 * @property {boolean} [hidden]    Whether this user has hidden their video.
 * @property {boolean} [speaking]  Whether the user is broadcasting audio.
 */
export default class AVSettings {
    /**
     * WebRTC Mode, Disabled, Audio only, Video only, Audio & Video
     * @enum {number}
     */
    static AV_MODES: {
        DISABLED: number;
        AUDIO: number;
        VIDEO: number;
        AUDIO_VIDEO: number;
    };
    /**
     * Voice modes: Always-broadcasting, voice-level triggered, push-to-talk.
     * @enum {string}
     */
    static VOICE_MODES: {
        ALWAYS: string;
        ACTIVITY: string;
        PTT: string;
    };
    /**
     * Displayed nameplate options: Off entirely, animate between player and character name, player name only, character
     * name only.
     * @enum {number}
     */
    static NAMEPLATE_MODES: {
        OFF: number;
        BOTH: number;
        PLAYER_ONLY: number;
        CHAR_ONLY: number;
    };
    /**
     * AV dock positions.
     * @enum {string}
     */
    static DOCK_POSITIONS: {
        TOP: string;
        RIGHT: string;
        BOTTOM: string;
        LEFT: string;
    };
    /**
     * Schemas for world and client settings
     * @type {{world: foundry.data.fields.SchemaField; client: foundry.data.fields.SchemaField}}
     */
    static get schemaFields(): {
        world: foundry.data.fields.SchemaField;
        client: foundry.data.fields.SchemaField;
    };
    /**
     * Default client settings for each connected user.
     * @type {object}
     */
    static get DEFAULT_USER_SETTINGS(): object;
    /**
     * Define world and client settings schemas.
     * @returns {{world: DataSchema; client: DataSchema}}
     */
    static #defineSchemas(): {
        world: DataSchema;
        client: DataSchema;
    };
    /**
     * Register world and client WebRTC settings.
     */
    static register(): void;
    _set: Function;
    /**
     * A debounce callback for when either the world or client settings change.
     * @type {() => void}
     */
    changed: () => void;
    /**
     * Stores the transient AV activity data received from other users.
     * @type {Record<string, AVSettingsData>}
     */
    activity: Record<string, AVSettingsData>;
    client: any;
    world: any;
    _original: {
        client: any;
        world: any;
    } | undefined;
    get(scope: any, setting: any): any;
    getUser(userId: any): object | null;
    set(scope: any, setting: any, value: any): void;
    /**
     * Return a mapping of AV settings for each game User.
     * @type {object}
     */
    get users(): object;
    /**
     * A helper to determine if the dock is configured in a vertical position.
     * @type {boolean}
     */
    get verticalDock(): boolean;
    /**
     * Handle another connected user changing their AV settings.
     * @param {string} userId
     * @param {AVSettingsData} settings
     */
    handleUserActivity(userId: string, settings: AVSettingsData): void;
    #private;
}
export type AVSettingsData = {
    /**
     * Whether this user has muted themselves.
     */
    muted?: boolean | undefined;
    /**
     * Whether this user has hidden their video.
     */
    hidden?: boolean | undefined;
    /**
     * Whether the user is broadcasting audio.
     */
    speaking?: boolean | undefined;
};
