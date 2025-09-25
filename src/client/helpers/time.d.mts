/**
 * @import CalendarData from "@client/data/calendar.mjs";
 * @import {CalendarConfig, TimeComponents, TimeFormatter} from "@client/data/_types.mjs";
 */
/**
 * A singleton class at which keeps the official Server and World time stamps.
 * Uses a basic implementation of https://www.geeksforgeeks.org/cristians-algorithm/ for synchronization.
 * @see {@link foundry.Game#time}
 */
export default class GameTime {
    /**
     * The amount of time to delay before re-syncing the official server time.
     * @type {number}
     */
    static SYNC_INTERVAL_MS: number;
    /**
     * How many samples of latency history to retain?
     * @type {number}
     */
    static #PING_HISTORY_LENGTH: number;
    /**
     * The calendar instance for in-world timekeeping.
     * @type {CalendarData}
     */
    get calendar(): CalendarData<any>;
    /**
     * The "Earth" calendar instance for IRL timekeeping.
     * @type {CalendarData}
     */
    get earthCalendar(): CalendarData<any>;
    /**
     * The current server time based on the last synchronization point and the approximated one-way latency.
     * @type {number}
     */
    get serverTime(): number;
    /**
     * * The current World time expressed in seconds.
     * @type {number}
     */
    get worldTime(): number;
    /**
     * The current World time expressed as components.
     * @type {TimeComponents}
     */
    get components(): TimeComponents;
    /**
     * The average one-way latency between client and server in milliseconds.
     * @type {number}
     */
    get averageLatency(): number;
    /**
     * Initialize a calendar configuration.
     * This is called once automatically upon construction, but can be called manually if CONFIG.time changes.
     */
    initializeCalendar(): void;
    /**
     * Advance or rewind the world time according to a delta amount expressed either in seconds or as components.
     * @param {TimeComponents|number} delta     The number of seconds to advance (or rewind if negative) by
     * @param {object} [options]                Additional options passed to game.settings.set
     * @returns {Promise<number>}               The new game time
     */
    advance(delta: TimeComponents | number, options?: object): Promise<number>;
    /**
     * Directly set the world time to a certain value expressed either in seconds or as components.
     * @param {TimeComponents|number} time      The desired world time
     * @param {object} [options]                Additional options passed to game.settings.set
     * @returns {Promise<number>}               The new game time
     */
    set(time: TimeComponents | number, options?: object): Promise<number>;
    /**
     * Synchronize the local client game time with the official time kept by the server
     * @returns {Promise<GameTime>}
     */
    sync(): Promise<GameTime>;
    /**
     * Handle follow-up actions when the official World time is changed
     * @param {number} worldTime      The new canonical World time.
     * @param {object} options        Options passed from the requesting client where the change was made
     * @param {string} userId         The ID of the User who advanced the time
     */
    onUpdateWorldTime(worldTime: number, options: object, userId: string): void;
    #private;
}
import type CalendarData from "@client/data/calendar.mjs";
import type { TimeComponents } from "@client/data/_types.mjs";
