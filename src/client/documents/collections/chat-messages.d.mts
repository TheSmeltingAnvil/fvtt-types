/** @import ChatMessage from "../chat-message.mjs"; */
/**
 * The singleton collection of ChatMessage documents which exist within the active World.
 * This Collection is accessible within the Game object as game.messages.
 * @extends {WorldCollection<ChatMessage>}
 * @category Collections
 *
 * @see {@link foundry.documents.ChatMessage}: The ChatMessage document
 * @see {@link foundry.applications.sidebar.tabs.ChatLog}: The ChatLog sidebar directory
 */
export default class ChatMessages extends WorldCollection<ChatMessage> {
    constructor(data?: object[]);
    /** @override */
    override get directory(): foundry.applications.sidebar.tabs.ChatLog;
    /** @override */
    override render(force?: boolean): void;
    /**
     * If requested, dispatch a Chat Bubble UI for the newly created message
     * @param {ChatMessage} message     The ChatMessage document to say
     */
    sayBubble(message: ChatMessage): void;
    /**
     * Handle export of the chat log to a text file
     */
    export(): void;
    /**
     * Allow for bulk deletion of all chat messages, confirm first with a yes/no dialog.
     */
    flush(): Promise<any>;
}
import type ChatMessage from "../chat-message.mjs";
import WorldCollection from "../abstract/world-collection.mjs";
