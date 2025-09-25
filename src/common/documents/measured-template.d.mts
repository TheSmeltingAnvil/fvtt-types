/**
 * @import {MeasuredTemplateData} from "./_types.mjs";
 * @import {DocumentPermissionTest} from "@common/abstract/_types.mjs";
 */
/**
 * The MeasuredTemplate Document.
 * Defines the DataSchema and common behaviors for a MeasuredTemplate which are shared between both client and server.
 * @extends {Document<MeasuredTemplateData>}
 * @mixes MeasuredTemplateData
 * @category Documents
 */
export default class BaseMeasuredTemplate extends Document<MeasuredTemplateData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        author: fields.DocumentAuthorField;
        t: fields.StringField;
        x: fields.NumberField;
        y: fields.NumberField;
        elevation: fields.NumberField;
        sort: fields.NumberField;
        distance: fields.NumberField;
        direction: fields.AngleField;
        angle: fields.AngleField;
        width: fields.NumberField;
        borderColor: fields.ColorField;
        fillColor: fields.ColorField;
        texture: fields.FilePathField;
        hidden: fields.BooleanField;
        flags: fields.DocumentFlagsField;
    };
    static #canCreate(user: foundry.documents.BaseUser, document: Document, data?: object | undefined): boolean;
    /** @inheritdoc */
    static migrateData(data: any): object;
    /** @inheritdoc */
    static shimData(data: any, options: any): object;
    constructor(data?: Partial<MeasuredTemplateData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
    /** @inheritDoc */
    getUserLevel(user: any): CONST.DocumentOwnershipNumber;
    /**
     * @deprecated since v12
     * @ignore
     */
    get user(): any;
}
import type { MeasuredTemplateData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as CONST from "../constants.mjs";
import * as fields from "../data/fields.mjs";
