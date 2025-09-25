/**
 * @import {ItemData} from "./_types.mjs";
 * @import {DocumentPermissionTest} from "@common/abstract/_types.mjs";
 */
/**
 * The Item Document.
 * Defines the DataSchema and common behaviors for a Item which are shared between both client and server.
 * @extends {Document<ItemData>}
 * @mixes ItemData
 * @category Documents
 */
export default class BaseItem extends Document<ItemData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        type: fields.DocumentTypeField;
        img: fields.FilePathField;
        system: fields.TypeDataField;
        effects: fields.EmbeddedCollectionField;
        folder: fields.ForeignDocumentField;
        sort: fields.IntegerSortField;
        ownership: fields.DocumentOwnershipField;
        flags: fields.DocumentFlagsField;
        _stats: fields.DocumentStatsField;
    };
    /**
     * The default icon used for newly created Item documents
     * @type {string}
     */
    static DEFAULT_ICON: string;
    /**
     * Determine default artwork based on the provided item data.
     * @param {ItemData} itemData  The source item data.
     * @returns {{img: string}}    Candidate item image.
     */
    static getDefaultArtwork(itemData: ItemData): {
        img: string;
    };
    /** @override */
    static override canUserCreate(user: any): any;
    static #canCreate(user: foundry.documents.BaseUser, document: Document, data?: object | undefined): boolean;
    /** @inheritDoc */
    static migrateData(source: any): object;
    /** @inheritDoc */
    static shimData(source: any, options: any): object;
    constructor(data?: Partial<ItemData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
    /** @inheritDoc */
    _initialize(options: any): void;
    /** @inheritDoc */
    getUserLevel(user: any): any;
}
import type { ItemData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
