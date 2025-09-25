/**
 * @import {ApplicationRenderContext, ApplicationRenderOptions, ApplicationClickAction} from "../../_types.mjs"
 */
/**
 * The sidebar chat tab.
 * @extends {AbstractSidebarTab}
 * @mixes HandlebarsApplication
 */
export default class ChatLog extends AbstractSidebarTab<foundry.applications.types.ApplicationConfiguration, ApplicationRenderOptions> {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        classes: string[];
        window: {
            title: string;
        };
        actions: {
            deleteMessage: typeof ChatLog.#onDeleteMessage;
            dismissMessage: typeof ChatLog.#onDismissNotification;
            expandRoll: typeof ChatLog.#onExpandRoll;
            export: typeof ChatLog.#onExportLog;
            flush: typeof ChatLog.#onFlushLog;
            jumpToBottom: typeof ChatLog.#onJumpToBottom;
            rollMode: typeof ChatLog.#onChangeRollMode;
        };
    };
    /** @override */
    static override PARTS: {
        log: {
            template: string;
            templates: string[];
        };
        input: {
            template: string;
        };
    };
    /**
     * An enumeration of regular expression patterns used to match chat messages.
     * @enum {RegExp}
     */
    static MESSAGE_PATTERNS: {
        roll: RegExp;
        gmroll: RegExp;
        blindroll: RegExp;
        selfroll: RegExp;
        publicroll: RegExp;
        ic: RegExp;
        ooc: RegExp;
        emote: RegExp;
        whisper: RegExp;
        reply: RegExp;
        gm: RegExp;
        players: RegExp;
        macro: RegExp;
        invalid: RegExp;
    };
    /**
     * The set of commands that can be processed over multiple lines.
     * @type {Set<string>}
     */
    static MULTILINE_COMMANDS: Set<string>;
    /**
     * The maximum number of messages to retain in the history in a given session.
     * @type {number}
     */
    static MAX_MESSAGE_HISTORY: number;
    /**
     * The number of milliseconds to keep a chat card notification until it is automatically dismissed.
     * @type {number}
     */
    static NOTIFY_DURATION: number;
    /**
     * The notification ticker frequency.
     * @type {number}
     */
    static NOTIFY_TICKER: number;
    /**
     * The number of milliseconds to wait before unpausing the notification queue.
     * @type {number}
     */
    static NOTIFY_UNPAUSE: number;
    /**
     * The number of milliseconds to display the chat notification pip.
     * @type {number}
     */
    static PIP_DURATION: number;
    /**
     * How often, in milliseconds, to update timestamps.
     * @type {number}
     */
    static UPDATE_TIMESTAMP_FREQUENCY: number;
    static #onChangeRollMode(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onDeleteMessage(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onDismissNotification(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onExpandRoll(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onExportLog(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onFlushLog(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onJumpToBottom(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    /**
     * Parse a chat string to identify the chat command (if any) which was used.
     * @param {string} message                                            The message to parse.
     * @returns {[string, string[]|RegExpMatchArray|RegExpMatchArray[]]}  The identified command and regex match.
     */
    static parse(message: string): [string, string[] | RegExpMatchArray | RegExpMatchArray[]];
    /**
     * Handles chat message rendering during the ChatMessage#getHTML deprecation period. After that period ends, calls to
     * this method can be replaced by ChatMessage#renderHTML.
     * @param {ChatMessage} message  The chat message to render.
     * @param {object} [options]     Options forwarded to the render function.
     * @returns {Promise<HTMLElement>}
     * @throws {Error}               If the message's render methods do not return a usable result.
     */
    static renderMessage(message: ChatMessage, options?: object): Promise<HTMLElement>;
    constructor(options?: Partial<foundry.applications.types.ApplicationConfiguration> | undefined);
    /**
     * A reference to the Messages collection that the chat log displays.
     * @type {Messages}
     */
    get collection(): Messages;
    /**
     * Message history management.
     * @type {{ queue: string[], index: number, pending: string }}
     */
    get history(): {
        queue: string[];
        index: number;
        pending: string;
    };
    /**
     * A flag for whether the chat log is currently scrolled to the bottom.
     * @type {boolean}
     */
    get isAtBottom(): boolean;
    /** @inheritDoc */
    _configureRenderOptions(options: any): void;
    /**
     * Get context menu entries for chat messages in the log.
     * @returns {ContextMenuEntry[]}
     * @protected
     */
    protected _getEntryContextOptions(): ContextMenuEntry[];
    /** @inheritDoc */
    _postRender(context: any, options: any): Promise<void>;
    /** @inheritDoc */
    _preparePartContext(partId: any, context: any, options: any): Promise<any>;
    /**
     * Prepare rendering context for the chat panel's message input component.
     * @param {ApplicationRenderContext} context
     * @param {ApplicationRenderOptions} options
     * @protected
     */
    protected _prepareInputContext(context: ApplicationRenderContext, options: ApplicationRenderOptions): Promise<void>;
    /** @inheritDoc */
    _renderHTML(context: any, options: any): Promise<any>;
    /** @inheritDoc */
    _preSyncPartState(partId: any, newElement: any, priorElement: any, state: any): void;
    /**
     * Prepare data used to synchronize the state of the chat input.
     * @param {HTMLElement} newElement    The newly-rendered element.
     * @param {HTMLElement} priorElement  The existing element.
     * @param {object} state              A state object which is used to synchronize after replacement.
     * @protected
     */
    protected _preSyncInputState(newElement: HTMLElement, priorElement: HTMLElement, state: object): void;
    /** @inheritDoc */
    _syncPartState(partId: any, newElement: any, priorElement: any, state: any): void;
    /**
     * Synchronize the state of the chat input.
     * @param {HTMLElement} newElement    The newly-rendered element.
     * @param {HTMLElement} priorElement  The element being replaced.
     * @param {object} state              The state object used to synchronize the pre- and post-render states.
     * @protected
     */
    protected _syncInputState(newElement: HTMLElement, priorElement: HTMLElement, state: object): void;
    /** @inheritDoc */
    _attachPartListeners(partId: any, element: any, options: any): void;
    /**
     * Attach listeners to the chat log.
     * @param {HTMLElement} element  The log element.
     * @param {ApplicationRenderOptions} options
     * @protected
     */
    protected _attachLogListeners(element: HTMLElement, options: ApplicationRenderOptions): void;
    /**
     * Handle clicking a chat card notification.
     * Treat action button clicks within the Notifications UI as action clicks on the ChatLog instance itself.
     * @param {PointerEvent} event  The triggering event.
     * @protected
     */
    protected _onClickNotification(event: PointerEvent): void;
    /**
     * Handle keydown events in the chat message entry textarea.
     * @param {KeyboardEvent} event  The triggering event.
     * @protected
     */
    protected _onKeyDown(event: KeyboardEvent): void;
    /** @inheritDoc */
    _preClose(options: any): Promise<void>;
    /**
     * Prepare the data object of chat message data depending on the type of message being posted.
     * @param {string} message                      The original string of the message content
     * @param {object} [options]                    Additional options
     * @param {ChatSpeakerData} [options.speaker]   The speaker data
     * @returns {Promise<ChatMessage|void>}         The created ChatMessage Document, or void if we were executing a
     *                                              macro instead.
     * @throws {Error}                              If an invalid command is found.
     */
    processMessage(message: string, { speaker }?: {
        speaker?: any;
    }): Promise<ChatMessage | void>;
    /**
     * Delete a single message from the chat log.
     * @param {string} messageId                   The ID of the ChatMessage Document to remove from the log.
     * @param {object} [options]
     * @param {boolean} [options.deleteAll=false]  Delete all messages from the log.
     * @returns {Promise<void>}
     */
    deleteMessage(messageId: string, options?: {
        deleteAll?: boolean | undefined;
    }): Promise<void>;
    /**
     * Trigger a notification that alerts the user visually and audibly of new chat activity.
     * @param {ChatMessage} message             The created or updated message.
     * @param {object} [options]
     * @param {HTMLElement} [options.existing]  The existing rendered chat card, if it exists.
     * @param {boolean} [options.newMessage]    Whether this is a new message.
     */
    notify(message: ChatMessage, { existing, newMessage }?: {
        existing?: HTMLElement | undefined;
        newMessage?: boolean | undefined;
    }): void;
    /**
     * Post a single chat message to the log.
     * @param {ChatMessage} message             The chat message.
     * @param {object} [options]
     * @param {string} [options.before]         An existing message ID to prepend the posted message to, by default the
     *                                          new message is appended to the end of the log.
     * @param {boolean} [options.notify=false]  Trigger a notification which shows the log as having a new unread message.
     * @returns {Promise<void>}                 A Promise which resolves once the message has been posted.
     */
    postOne(message: ChatMessage, options?: {
        before?: string | undefined;
        notify?: boolean | undefined;
    }): Promise<void>;
    /**
     * Render a batch of additional messages, prepending them to the top of the log.
     * @param {number} size  The batch size.
     * @returns {Promise<void>}
     */
    renderBatch(size: number): Promise<void>;
    /**
     * Scroll the chat log to the bottom.
     * @param {object} [options]
     * @param {boolean} [options.popout=false]                 If a popout exists, scroll it to the bottom too.
     * @param {boolean} [options.waitImages=false]             Wait for any images embedded in the chat log to load first
     *                                                         before scrolling.
     * @param {ScrollIntoViewOptions} [options.scrollOptions]  Options to configure scrolling behavior.
     */
    scrollBottom({ popout, waitImages, scrollOptions }?: {
        popout?: boolean | undefined;
        waitImages?: boolean | undefined;
        scrollOptions?: ScrollIntoViewOptions | undefined;
    }): Promise<void>;
    /**
     * Update the contents of a previously-posted message.
     * @param {ChatMessage} message  The ChatMessage instance to update.
     * @param {object} options
     * @param {boolean} [options.notify=false]  Trigger a notification which shows the log as having a new unread message.
     * @returns {Promise<void>}
     */
    updateMessage(message: ChatMessage, options?: {
        notify?: boolean | undefined;
    }): Promise<void>;
    /**
     * Update displayed timestamps for every displayed message in the chat log.
     * Timestamps are displayed in a humanized "time-since" format.
     */
    updateTimestamps(): void;
    /**
     * Determine whether the notifications pane should be visible.
     * @param {object} [options]
     * @param {boolean} [options.closing=false]  Whether the chat popout is closing.
     * @returns {boolean}
     * @protected
     */
    protected _shouldShowNotifications({ closing }?: {
        closing?: boolean | undefined;
    }): boolean;
    /**
     * Update notification display, based on interface state.
     * If the chat log is popped-out, embed chat input into it. Otherwise,
     * if the sidebar is expanded, and the chat log is the active tab, embed chat input into it. Otherwise,
     * embed chat input into the notifications area.
     * If the sidebar is expanded, and the chat log is the active tab, do not display notifications.
     * If the chat log is popped out, do not display notifications.
     * @param {object} [options]
     * @param {boolean} [options.closing=false]  Whether this method has been triggered by the chat popout closing.
     * @fires {hookEvents:renderChatInput}
     * @internal
     */
    _toggleNotifications({ closing }?: {
        closing?: boolean | undefined;
    }): void;
    /**
     * Handle updating the roll mode display.
     * @internal
     */
    _updateRollMode(): void;
    #private;
}
import type { ApplicationRenderOptions } from "../../_types.mjs";
import AbstractSidebarTab from "../sidebar-tab.mjs";
import type { ApplicationRenderContext } from "../../_types.mjs";
import ChatMessage from "@client/documents/chat-message.mjs";
