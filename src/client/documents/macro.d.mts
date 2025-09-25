/**
 * @import User from "./user.mjs";
 * @import ChatMessage from "./chat-message.mjs";
 * @import {RegionEvent} from "@client/documents/_types.mjs";
 */
/**
 * The client-side Macro document which extends the common BaseMacro model.
 * @extends BaseMacro
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.collections.Macros}: The world-level collection of Macro documents
 * @see {@link foundry.applications.sheets.MacroConfig}: The Macro configuration application
 */
export default class Macro extends BaseMacro {
    /**
     * Is the current User the author of this macro?
     * @type {boolean}
     */
    get isAuthor(): boolean;
    /**
     * Test whether the current User is capable of executing this Macro.
     * @type {boolean}
     */
    get canExecute(): boolean;
    /**
     * Provide a thumbnail image path used to represent this document.
     * @type {string}
     */
    get thumbnail(): string;
    /**
     * Test whether the given User is capable of executing this Macro.
     * @param {User} user    The User to test.
     * @returns {boolean}    Can this User execute this Macro?
     */
    canUserExecute(user: User): boolean;
    /**
     * Execute the Macro command.
     * @param {object} [scope={}]     Macro execution scope which is passed to script macros
     * @param {ChatSpeakerData} [scope.speaker]   The speaker data
     * @param {Actor} [scope.actor]     An Actor who is the protagonist of the executed action
     * @param {Token} [scope.token]     A Token which is the protagonist of the executed action
     * @param {Event|RegionEvent} [scope.event]   An optional event passed to the executed macro
     * @returns {Promise<unknown>|void} A promise containing a created {@link foundry.documents.ChatMessage}
     *                                  (or `undefined`) if a chat  macro or the return value if a script macro.
     *                                  A void return is possible if the user is not permitted to execute macros
     *                                  or a script macro execution fails.
     */
    execute(scope?: {
        speaker?: any;
        actor?: any;
        token?: any;
        event?: Event | RegionEvent | undefined;
    }): Promise<unknown> | void;
    /** @inheritDoc */
    _onClickDocumentLink(event: any): void | Promise<unknown>;
    /** @inheritDoc */
    _onCreate(data: any, options: any, userId: any): void;
    #private;
}
import BaseMacro from "@common/documents/macro.mjs";
import type User from "./user.mjs";
import type { RegionEvent } from "@client/documents/_types.mjs";
