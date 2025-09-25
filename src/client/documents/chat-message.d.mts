/**
 * @import Messages from "./collections/chat-messages.mjs";
 * @import {ChatSpeakerData} from "@common/documents/_types.mjs";
 * @import User from "./user.mjs";
 * @import {Roll} from "../dice/_module.mjs";
 * @import Actor from "./actor.mjs";
 * @import Scene from "./scene.mjs";
 * @import TokenDocument from "./token.mjs";
 */
/**
 * The client-side ChatMessage document which extends the common BaseChatMessage model.
 *
 * ### Hook Events
 * - {@link hookEvents.renderChatMessageHTML}
 *
 * @extends BaseChatMessage
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.collections.ChatMessages}: The world-level collection of ChatMessage
 *   documents
 *
 * @property {Roll[]} rolls             The prepared array of Roll instances
 */
export default class ChatMessage extends BaseChatMessage {
    /**
     * Transform a provided object of ChatMessage data by applying a certain roll mode to the data object.
     *  - Public: `whisper` is set to `[]` and `blind` is set to `false`.
     *  - Self: `whisper` is set to `[game.user.id]` and `blind` is set to `false`.
     *  - Private: `whisper` is set to the GM users unless `whisper` is nonempty and `blind` is set to `false`.
     *  - Blind: `whisper` is set to the GM users unless `whisper` is nonempty and `blind` is set to `true`.
     * @param {object} chatData     The object of ChatMessage data
     * @param {"roll"|"publicroll"|"gmroll"|"blindroll"|"selfroll"} rollMode
     *   The roll mode to apply to this message data. `"roll"` is the current roll mode.
     * @returns {object}            The modified ChatMessage data with the roll mode applied
     */
    static applyRollMode(chatData: object, rollMode: "roll" | "publicroll" | "gmroll" | "blindroll" | "selfroll"): object;
    /**
     * Attempt to determine who is the speaking character (and token) for a certain Chat Message
     * First assume that the currently controlled Token is the speaker
     *
     * @param {object} [options={}]           Options which affect speaker identification
     * @param {Scene} [options.scene]         The Scene in which the speaker resides
     * @param {Actor} [options.actor]         The Actor who is speaking
     * @param {TokenDocument} [options.token] The Token who is speaking
     * @param {string} [options.alias]        The name of the speaker to display
     *
     * @returns {ChatSpeakerData}             The identified speaker data
     */
    static getSpeaker({ scene, actor, token, alias }?: {
        scene?: Scene | undefined;
        actor?: Actor | undefined;
        token?: TokenDocument | undefined;
        alias?: string | undefined;
    }): ChatSpeakerData;
    /**
     * A helper to prepare the speaker object based on a target TokenDocument
     * @param {object} [options={}]                Options which affect speaker identification
     * @param {TokenDocument} options.token        The TokenDocument of the speaker
     * @param {string} [options.alias]             The name of the speaker to display
     * @returns {ChatSpeakerData}                  The identified speaker data
     */
    static #getSpeakerFromToken({ token, alias }?: {
        token: TokenDocument;
        alias?: string | undefined;
    }): ChatSpeakerData;
    /**
     * A helper to prepare the speaker object based on a target Actor
     * @param {object} [options={}]               Options which affect speaker identification
     * @param {Scene} [options.scene]             The Scene is which the speaker resides
     * @param {Actor} [options.actor]             The Actor that is speaking
     * @param {string} [options.alias]            The name of the speaker to display
     * @returns {ChatSpeakerData}                 The identified speaker data
     */
    static #getSpeakerFromActor({ scene, actor, alias }?: {
        scene?: Scene | undefined;
        actor?: Actor | undefined;
        alias?: string | undefined;
    }): ChatSpeakerData;
    /**
     * A helper to prepare the speaker object based on a target User
     * @param {object} [options={}]               Options which affect speaker identification
     * @param {Scene} [options.scene]             The Scene in which the speaker resides
     * @param {User} [options.user]               The User who is speaking
     * @param {string} [options.alias]            The name of the speaker to display
     * @returns {ChatSpeakerData}                 The identified speaker data
     */
    static #getSpeakerFromUser({ scene, user, alias }?: {
        scene?: Scene | undefined;
        user?: User | undefined;
        alias?: string | undefined;
    }): ChatSpeakerData;
    /**
     * Obtain an Actor instance which represents the speaker of this message (if any)
     * @param {Object} speaker    The speaker data object
     * @returns {Actor|null}
     */
    static getSpeakerActor(speaker: Object): Actor | null;
    /**
     * Given a string whisper target, return an Array of the user IDs which should be targeted for the whisper
     *
     * @param {string} name   The target name of the whisper target
     * @returns {User[]}      An array of User instances
     */
    static getWhisperRecipients(name: string): User[];
    /**
     * Is this ChatMessage currently displayed in the sidebar ChatLog?
     * @type {boolean}
     */
    logged: boolean;
    /**
     * Return the recommended String alias for this message.
     * The alias could be a Token name in the case of in-character messages or dice rolls.
     * Alternatively it could be the name of a User in the case of OOC chat or whispers.
     * @type {string}
     */
    get alias(): string;
    /**
     * Is the current User the author of this message?
     * @type {boolean}
     */
    get isAuthor(): boolean;
    /**
     * Return whether the content of the message is visible to the current user.
     * For certain dice rolls, for example, the message itself may be visible while the content of that message is not.
     * @type {boolean}
     */
    get isContentVisible(): boolean;
    /**
     * Does this message contain dice rolls?
     * @type {boolean}
     */
    get isRoll(): boolean;
    /**
     * Return whether the ChatMessage is visible to the current User.
     * Messages may not be visible if they are private whispers.
     * @type {boolean}
     */
    get visible(): boolean;
    /**
     * The Actor which represents the speaker of this message (if any).
     * @type {Actor|null}
     */
    get speakerActor(): Actor | null;
    /** @inheritDoc */
    prepareDerivedData(): void;
    rolls: any;
    /**
     * Update the data of a ChatMessage instance to apply a requested roll mode.
     * This function calls {@link ChatMessage.applyRollMode} and updates the source of the ChatMessage.
     * @param {"roll"|"publicroll"|"gmroll"|"blindroll"|"selfroll"} rollMode
     *   The roll mode to apply to this message data. `"roll"` is the current roll mode.
     */
    applyRollMode(rollMode: "roll" | "publicroll" | "gmroll" | "blindroll" | "selfroll"): void;
    /**
     * Obtain a data object used to evaluate any dice rolls associated with this particular chat message
     * @returns {object}
     */
    getRollData(): object;
    /**
     * Render the HTML for the ChatMessage which should be added to the log
     * @param {object} [options]             Additional options passed to the Handlebars template.
     * @param {boolean} [options.canDelete]  Render a delete button. By default, this is true for GM users.
     * @param {boolean} [options.canClose]   Render a close button for dismissing chat card notifications.
     * @returns {Promise<HTMLElement>}
     */
    renderHTML({ canDelete, canClose, ...rest }?: {
        canDelete?: boolean | undefined;
        canClose?: boolean | undefined;
    }): Promise<HTMLElement>;
    /** @inheritDoc */
    _preCreate(data: any, options: any, user: any): Promise<false | undefined>;
    /** @inheritDoc */
    _onCreate(data: any, options: any, userId: any): void;
    /** @inheritDoc */
    _onUpdate(changed: any, options: any, userId: any): void;
    /** @inheritDoc */
    _onDelete(options: any, userId: any): void;
    /**
     * Export the content of the chat message into a standardized log format
     * @returns {string}
     */
    export(): string;
    /**
     * @ignore
     * @deprecated since v13
     */
    getHTML(options: any): Promise<any>;
    #private;
}
import BaseChatMessage from "@common/documents/chat-message.mjs";
import type Actor from "./actor.mjs";
import type Scene from "./scene.mjs";
import type TokenDocument from "./token.mjs";
import type { ChatSpeakerData } from "@common/documents/_types.mjs";
import type User from "./user.mjs";
