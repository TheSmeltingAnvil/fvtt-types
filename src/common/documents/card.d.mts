/**
 * @import {CardData} from "./_types.mjs";
 * @import {DocumentPermissionTest} from "@common/abstract/_types.mjs";
 */
/**
 * The Card Document.
 * Defines the DataSchema and common behaviors for a Card which are shared between both client and server.
 * @extends {Document<CardData>}
 * @mixes CardData
 * @category Documents
 */
export default class BaseCard extends Document<CardData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        description: fields.HTMLField;
        type: fields.DocumentTypeField;
        system: fields.TypeDataField;
        suit: fields.StringField;
        value: fields.NumberField;
        back: fields.SchemaField;
        faces: fields.ArrayField<fields.SchemaField>;
        face: fields.NumberField;
        drawn: fields.BooleanField;
        origin: fields.ForeignDocumentField;
        width: fields.NumberField;
        height: fields.NumberField;
        rotation: fields.AngleField;
        sort: fields.IntegerSortField;
        flags: fields.DocumentFlagsField;
        _stats: fields.DocumentStatsField;
    };
    /**
     * The default icon used for a Card face that does not have a custom image set
     * @type {string}
     */
    static DEFAULT_ICON: string;
    static #canCreate(user: foundry.documents.BaseUser, document: Document, data?: object | undefined): boolean;
    static #canUpdate(user: foundry.documents.BaseUser, document: Document, data?: object | undefined): boolean;
    constructor(data?: Partial<CardData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
}
import type { CardData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
