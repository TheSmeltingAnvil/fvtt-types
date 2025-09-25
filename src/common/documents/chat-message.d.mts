/**
 * @import {ChatMessageData} from "./_types.mjs";
 * @import {DocumentPermissionTest} from "@common/abstract/_types.mjs";
 */
/**
 * The ChatMessage Document.
 * Defines the DataSchema and common behaviors for a ChatMessage which are shared between both client and server.
 * @extends {Document<ChatMessageData>}
 * @mixes ChatMessageData
 * @category Documents
 */
export default class BaseChatMessage extends Document<ChatMessageData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        type: fields.DocumentTypeField;
        system: fields.TypeDataField;
        style: fields.NumberField;
        author: fields.DocumentAuthorField;
        timestamp: fields.NumberField;
        flavor: fields.HTMLField;
        title: fields.StringField;
        content: fields.HTMLField;
        speaker: fields.SchemaField;
        whisper: fields.ArrayField<fields.ForeignDocumentField>;
        blind: fields.BooleanField;
        rolls: fields.ArrayField<fields.JSONField>;
        sound: fields.FilePathField;
        emote: fields.BooleanField;
        flags: fields.DocumentFlagsField;
        _stats: fields.DocumentStatsField;
    };
    static #canCreate(user: foundry.documents.BaseUser, document: Document, data?: object | undefined): boolean;
    /**
     * Validate that Rolls belonging to the ChatMessage document are valid
     * @param {string} rollJSON     The serialized Roll data
     */
    static #validateRoll(rollJSON: string): void;
    /** @inheritdoc */
    static migrateData(data: any): object;
    /**
     * Migrate the type field to the style field in order to allow the type field to be used for system sub-types.
     * @param {Partial<ChatMessageData>} data
     */
    static #migrateTypeToStyle(data: Partial<ChatMessageData>): void;
    /** @inheritdoc */
    static shimData(data: any, options: any): object;
    constructor(data?: Partial<ChatMessageData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
    /** @inheritDoc */
    getUserLevel(user: any): CONST.DocumentOwnershipNumber;
    /**
     * @deprecated since v12
     * @ignore
     */
    get user(): any;
}
import type { ChatMessageData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as CONST from "../constants.mjs";
import * as fields from "../data/fields.mjs";
