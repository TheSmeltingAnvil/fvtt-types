/**
 * @import {NoteData} from "./_types.mjs";
 * @import {DocumentPermissionTest} from "@common/abstract/_types.mjs";
 */
/**
 * The Note Document.
 * Defines the DataSchema and common behaviors for a Note which are shared between both client and server.
 * @extends {Document<NoteData>}
 * @mixes NoteData
 * @category Documents
 */
export default class BaseNote extends Document<NoteData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        entryId: fields.ForeignDocumentField;
        pageId: fields.ForeignDocumentField;
        x: fields.NumberField;
        y: fields.NumberField;
        elevation: fields.NumberField;
        sort: fields.NumberField;
        texture: TextureData;
        iconSize: fields.NumberField;
        text: fields.StringField;
        fontFamily: fields.StringField;
        fontSize: fields.NumberField;
        textAnchor: fields.NumberField;
        textColor: fields.ColorField;
        global: fields.BooleanField;
        flags: fields.DocumentFlagsField;
    };
    /**
     * The default icon used for newly created Note documents.
     * @type {string}
     */
    static DEFAULT_ICON: string;
    /** @override */
    static override canUserCreate(user: any): any;
    static #canCreate(user: foundry.documents.BaseUser, document: Document, data?: object | undefined): boolean;
    constructor(data?: Partial<NoteData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
    /** @inheritDoc */
    getUserLevel(user: any): any;
}
import type { NoteData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
import { TextureData } from "../data/data.mjs";
