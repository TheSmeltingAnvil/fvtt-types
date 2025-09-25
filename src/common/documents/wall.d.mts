/**
 * @import {WallData} from "./_types.mjs";
 * @import {DocumentPermissionTest} from "@common/abstract/_types.mjs";
 */
/**
 * The Wall Document.
 * Defines the DataSchema and common behaviors for a Wall which are shared between both client and server.
 * @extends {Document<WallData>}
 * @mixes WallData
 * @category Documents
 */
export default class BaseWall extends Document<WallData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritDoc */
    static metadata: object;
    /** @inheritDoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        c: fields.ArrayField<fields.NumberField>;
        light: fields.NumberField;
        move: fields.NumberField;
        sight: fields.NumberField;
        sound: fields.NumberField;
        dir: fields.NumberField;
        door: fields.NumberField;
        ds: fields.NumberField;
        doorSound: fields.StringField;
        threshold: fields.SchemaField;
        animation: fields.SchemaField;
        flags: fields.DocumentFlagsField;
    };
    static #canUpdate(user: foundry.documents.BaseUser, document: Document, data?: object | undefined): boolean;
    constructor(data?: Partial<WallData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
}
import type { WallData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
