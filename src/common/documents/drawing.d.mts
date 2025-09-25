/**
 * @import {DrawingData} from "./_types.mjs";
 * @import {DocumentPermissionTest} from "@common/abstract/_types.mjs";
 */
/**
 * The Drawing Document.
 * Defines the DataSchema and common behaviors for a Drawing which are shared between both client and server.
 * @extends {Document<DrawingData>}
 * @mixes DrawingData
 * @category Documents
 */
export default class BaseDrawing extends Document<DrawingData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritDoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        author: fields.DocumentAuthorField;
        shape: fields.EmbeddedDataField;
        x: fields.NumberField;
        y: fields.NumberField;
        elevation: fields.NumberField;
        sort: fields.NumberField;
        rotation: fields.AngleField;
        bezierFactor: fields.AlphaField;
        fillType: fields.NumberField;
        fillColor: fields.ColorField;
        fillAlpha: fields.AlphaField;
        strokeWidth: fields.NumberField;
        strokeColor: fields.ColorField;
        strokeAlpha: fields.AlphaField;
        texture: fields.FilePathField;
        text: fields.StringField;
        fontFamily: fields.StringField;
        fontSize: fields.NumberField;
        textColor: fields.ColorField;
        textAlpha: fields.AlphaField;
        hidden: fields.BooleanField;
        locked: fields.BooleanField;
        interface: fields.BooleanField;
        flags: fields.DocumentFlagsField;
    };
    /**
     * Validate whether the drawing has some visible content (as required by validation).
     * @param {Partial<Pick<DrawingData, "shape">> & Pick<DrawingData, "text"|"textAlpha"|"fillType"|"fillAlpha"
     *   |"strokeWidth"|"strokeAlpha">} data
     * @returns {boolean}
     * @internal
     */
    static _validateVisibleContent(data: Partial<Pick<DrawingData, "shape">> & Pick<DrawingData, "text" | "textAlpha" | "fillType" | "fillAlpha" | "strokeWidth" | "strokeAlpha">): boolean;
    /** @inheritdoc */
    static validateJoint(data: any): void;
    /** @override */
    static override canUserCreate(user: any): any;
    static #canCreate(user: foundry.documents.BaseUser, document: Document, data?: object | undefined): boolean;
    /** @inheritdoc */
    static migrateData(data: any): object;
    /** @inheritdoc */
    static shimData(data: any, options: any): object;
    constructor(data?: Partial<DrawingData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
    /** @inheritDoc */
    getUserLevel(user: any): CONST.DocumentOwnershipNumber;
    /**
     * @deprecated since v12
     * @ignore
     */
    get z(): any;
}
import type { DrawingData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as CONST from "../constants.mjs";
import * as fields from "../data/fields.mjs";
