/**
 * A common framework for displaying notifications to the client.
 * Submitted notifications are added to a queue, and up to {@link Notifications.MAX_ACTIVE}
 * notifications are displayed at once. Each notification is displayed for
 * {@link Notifications.LIFETIME_MS} milliseconds before being
 * removed, at which point further notifications are pulled from the queue.
 *
 *
 * @example Displaying Notification Messages
 * ```js
 * ui.notifications.error("This is a permanent error message", {permanent: true});
 * ui.notifications.warn("LOCALIZED.WARNING.MESSAGE", {localize: true});
 * ui.notifications.success("This is a success message, not logged to the console", {console: false});
 * ui.notifications.info("LOCALIZED.FORMAT.STRING", {format: {key1: "foo", key2: "bar"}});
 * ```
 *
 * @example Progress Bar Notification
 * ```js
 * const progress = ui.notifications.info("Thing Happening!", {progress: true});
 * progress.update({pct: 0.25, message: "Still happening!"});
 * progress.update({pct: 0.50, message: "Almost there!"});
 * progress.update({pct: 0.75, message: "Stay on target!"});
 * progress.update({pct: 1.0, message: "Done!"});
 * ```
 */
export default class Notifications {
    /**
     * The maximum number of active notifications.
     * @type {number}
     */
    static MAX_ACTIVE: number;
    /**
     * Notification lifetime in milliseconds.
     * @type {number}
     */
    static LIFETIME_MS: number;
    /**
     * @typedef Notification
     * @property {number} id
     * @property {string} type
     * @property {number} timestamp
     * @property {string} message
     * @property {Error} [error]
     * @property {boolean} permanent
     * @property {boolean} console
     * @property {boolean} active
     * @property {boolean} progress
     * @property {number} pct
     * @property {HTMLLIElement} [element]
     * @property {() => void} [remove]
     * @property {(pct: number) => void} [update]
     */
    /**
     * @typedef NotificationOptions
     * @property {boolean} [permanent=false]     Should the notification be permanently displayed until dismissed
     * @property {boolean} [progress=false]      Does this Notification include a progress bar?
     * @property {boolean} [localize=false]      Whether to localize the message content before displaying it
     * @property {boolean} [console=true]        Whether to log the message to the console
     * @property {boolean} [escape=true]         Whether to escape the values of `format`
     * @property {boolean} [clean=true]          Whether to clean the provided message string as untrusted user input.
     *                                           No cleaning is applied if `format` is passed and `escape` is true or
     *                                           `localize` is true and `format` is not passed.
     * @property {Record<string, string>} [format] A mapping of formatting strings passed to Localization#format
     */
    /**
     * Push a new notification into the queue
     * @param {string|object} message            The content of the notification message. A passed object should have a
     *                                           meaningful override of the `toString` method. If the object is an
     *                                           `Error` and console logging is requested, the stack trace will be
     *                                           included.
     * @param {string} type                      The type of notification, "info", "warning", and "error" are supported
     * @param {NotificationOptions} [options={}] Additional options which affect the notification
     * @returns {Notification}                   The registered notification
     */
    notify(message: string | object, type?: string, { localize, permanent, progress, console, escape, clean, format }?: {
        /**
         * Should the notification be permanently displayed until dismissed
         */
        permanent?: boolean | undefined;
        /**
         * Does this Notification include a progress bar?
         */
        progress?: boolean | undefined;
        /**
         * Whether to localize the message content before displaying it
         */
        localize?: boolean | undefined;
        /**
         * Whether to log the message to the console
         */
        console?: boolean | undefined;
        /**
         * Whether to escape the values of `format`
         */
        escape?: boolean | undefined;
        /**
         * Whether to clean the provided message string as untrusted user input.
         *           No cleaning is applied if `format` is passed and `escape` is true or
         *           `localize` is true and `format` is not passed.
         */
        clean?: boolean | undefined;
        /**
         * A mapping of formatting strings passed to Localization#format
         */
        format?: Record<string, string> | undefined;
    }): {
        id: number;
        type: string;
        timestamp: number;
        message: string;
        error?: Error | undefined;
        permanent: boolean;
        console: boolean;
        active: boolean;
        progress: boolean;
        pct: number;
        element?: HTMLLIElement | undefined;
        remove?: (() => void) | undefined;
        update?: ((pct: number) => void) | undefined;
    };
    /**
     * Display a notification with the "info" type.
     * @param {string|object} message             The content of the info message
     * @param {NotificationOptions} [options]     Notification options passed to the notify function
     * @returns {Readonly<Notification>}          The registered notification
     * @see {@link notify}
     */
    info(message: string | object, options?: {
        /**
         * Should the notification be permanently displayed until dismissed
         */
        permanent?: boolean | undefined;
        /**
         * Does this Notification include a progress bar?
         */
        progress?: boolean | undefined;
        /**
         * Whether to localize the message content before displaying it
         */
        localize?: boolean | undefined;
        /**
         * Whether to log the message to the console
         */
        console?: boolean | undefined;
        /**
         * Whether to escape the values of `format`
         */
        escape?: boolean | undefined;
        /**
         * Whether to clean the provided message string as untrusted user input.
         *           No cleaning is applied if `format` is passed and `escape` is true or
         *           `localize` is true and `format` is not passed.
         */
        clean?: boolean | undefined;
        /**
         * A mapping of formatting strings passed to Localization#format
         */
        format?: Record<string, string> | undefined;
    }): Readonly<{
        id: number;
        type: string;
        timestamp: number;
        message: string;
        error?: Error | undefined;
        permanent: boolean;
        console: boolean;
        active: boolean;
        progress: boolean;
        pct: number;
        element?: HTMLLIElement | undefined;
        remove?: (() => void) | undefined;
        update?: ((pct: number) => void) | undefined;
    }>;
    /**
     * Display a notification with the "warning" type.
     * @param {string|object} message             The content of the warning message
     * @param {NotificationOptions} [options]     Notification options passed to the notify function
     * @returns {Readonly<Notification>}          The registered notification
     * @see {@link notify}
     */
    warn(message: string | object, options?: {
        /**
         * Should the notification be permanently displayed until dismissed
         */
        permanent?: boolean | undefined;
        /**
         * Does this Notification include a progress bar?
         */
        progress?: boolean | undefined;
        /**
         * Whether to localize the message content before displaying it
         */
        localize?: boolean | undefined;
        /**
         * Whether to log the message to the console
         */
        console?: boolean | undefined;
        /**
         * Whether to escape the values of `format`
         */
        escape?: boolean | undefined;
        /**
         * Whether to clean the provided message string as untrusted user input.
         *           No cleaning is applied if `format` is passed and `escape` is true or
         *           `localize` is true and `format` is not passed.
         */
        clean?: boolean | undefined;
        /**
         * A mapping of formatting strings passed to Localization#format
         */
        format?: Record<string, string> | undefined;
    }): Readonly<{
        id: number;
        type: string;
        timestamp: number;
        message: string;
        error?: Error | undefined;
        permanent: boolean;
        console: boolean;
        active: boolean;
        progress: boolean;
        pct: number;
        element?: HTMLLIElement | undefined;
        remove?: (() => void) | undefined;
        update?: ((pct: number) => void) | undefined;
    }>;
    /**
     * Display a notification with the "error" type.
     * @param {string|object} message             The content of the error message
     * @param {NotificationOptions} [options]     Notification options passed to the notify function
     * @returns {Readonly<Notification>}          The registered notification
     * @see {@link notify}
     */
    error(message: string | object, options?: {
        /**
         * Should the notification be permanently displayed until dismissed
         */
        permanent?: boolean | undefined;
        /**
         * Does this Notification include a progress bar?
         */
        progress?: boolean | undefined;
        /**
         * Whether to localize the message content before displaying it
         */
        localize?: boolean | undefined;
        /**
         * Whether to log the message to the console
         */
        console?: boolean | undefined;
        /**
         * Whether to escape the values of `format`
         */
        escape?: boolean | undefined;
        /**
         * Whether to clean the provided message string as untrusted user input.
         *           No cleaning is applied if `format` is passed and `escape` is true or
         *           `localize` is true and `format` is not passed.
         */
        clean?: boolean | undefined;
        /**
         * A mapping of formatting strings passed to Localization#format
         */
        format?: Record<string, string> | undefined;
    }): Readonly<{
        id: number;
        type: string;
        timestamp: number;
        message: string;
        error?: Error | undefined;
        permanent: boolean;
        console: boolean;
        active: boolean;
        progress: boolean;
        pct: number;
        element?: HTMLLIElement | undefined;
        remove?: (() => void) | undefined;
        update?: ((pct: number) => void) | undefined;
    }>;
    /**
     * Display a notification with the "success" type.
     * @param {string|object} message             The content of the success message
     * @param {NotificationOptions} [options]     Notification options passed to the notify function
     * @returns {Readonly<Notification>}          The registered notification
     * @see {@link notify}
     */
    success(message: string | object, options?: {
        /**
         * Should the notification be permanently displayed until dismissed
         */
        permanent?: boolean | undefined;
        /**
         * Does this Notification include a progress bar?
         */
        progress?: boolean | undefined;
        /**
         * Whether to localize the message content before displaying it
         */
        localize?: boolean | undefined;
        /**
         * Whether to log the message to the console
         */
        console?: boolean | undefined;
        /**
         * Whether to escape the values of `format`
         */
        escape?: boolean | undefined;
        /**
         * Whether to clean the provided message string as untrusted user input.
         *           No cleaning is applied if `format` is passed and `escape` is true or
         *           `localize` is true and `format` is not passed.
         */
        clean?: boolean | undefined;
        /**
         * A mapping of formatting strings passed to Localization#format
         */
        format?: Record<string, string> | undefined;
    }): Readonly<{
        id: number;
        type: string;
        timestamp: number;
        message: string;
        error?: Error | undefined;
        permanent: boolean;
        console: boolean;
        active: boolean;
        progress: boolean;
        pct: number;
        element?: HTMLLIElement | undefined;
        remove?: (() => void) | undefined;
        update?: ((pct: number) => void) | undefined;
    }>;
    /**
     * Update the progress of the notification.
     * @param {Notification|number} notification    A Notification or ID to update
     * @param {object} [update]                     An incremental progress update
     * @param {string} [update.message]             An update to the string message
     * @param {string} [update.localize=false]      Localize updates to presented progress text
     * @param {string} [update.escape=true]         See {@link NotificationOptions#escape}
     * @param {string} [update.clean=true]          See {@link NotificationOptions#clean}
     * @param {Record<string, string>} [update.format]    A mapping of formatting strings passed to Localization#format
     * @param {number} [update.pct]                 An update to the completion percentage
     */
    update(notification: {
        id: number;
        type: string;
        timestamp: number;
        message: string;
        error?: Error | undefined;
        permanent: boolean;
        console: boolean;
        active: boolean;
        progress: boolean;
        pct: number;
        element?: HTMLLIElement | undefined;
        remove?: (() => void) | undefined;
        update?: ((pct: number) => void) | undefined;
    } | number, update?: {
        message?: string | undefined;
        localize?: string | undefined;
        escape?: string | undefined;
        clean?: string | undefined;
        format?: Record<string, string> | undefined;
        pct?: number | undefined;
    }): void;
    /**
     * Remove the notification linked to the ID.
     * @param {Notification|number} notification    The Notification or ID to remove
     */
    remove(notification: {
        id: number;
        type: string;
        timestamp: number;
        message: string;
        error?: Error | undefined;
        permanent: boolean;
        console: boolean;
        active: boolean;
        progress: boolean;
        pct: number;
        element?: HTMLLIElement | undefined;
        remove?: (() => void) | undefined;
        update?: ((pct: number) => void) | undefined;
    } | number): void;
    /**
     * Does the notification linked to the ID exist?.
     * @param {Notification|number} notification    The Notification or ID to remove
     * @returns {boolean}
     */
    has(notification: {
        id: number;
        type: string;
        timestamp: number;
        message: string;
        error?: Error | undefined;
        permanent: boolean;
        console: boolean;
        active: boolean;
        progress: boolean;
        pct: number;
        element?: HTMLLIElement | undefined;
        remove?: (() => void) | undefined;
        update?: ((pct: number) => void) | undefined;
    } | number): boolean;
    /**
     * Clear all notifications.
     */
    clear(): void;
    #private;
}
