/**
 * @import {MacroData} from "./_types.mjs";
 * @import {DocumentPermissionTest} from "@common/abstract/_types.mjs";
 */
/**
 * The Macro Document.
 * Defines the DataSchema and common behaviors for a Macro which are shared between both client and server.
 * @extends {Document<MacroData>}
 * @mixes MacroData
 * @category Documents
 */
export default class BaseMacro extends Document<MacroData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        type: fields.DocumentTypeField;
        author: fields.DocumentAuthorField;
        img: fields.FilePathField;
        scope: fields.StringField;
        command: fields.StringField;
        folder: fields.ForeignDocumentField;
        sort: fields.IntegerSortField;
        ownership: fields.DocumentOwnershipField;
        flags: fields.DocumentFlagsField;
        _stats: fields.DocumentStatsField;
    };
    /**
     * The default icon used for newly created Macro documents.
     * @type {string}
     */
    static DEFAULT_ICON: string;
    /** @inheritDoc */
    static migrateData(source: any): object;
    /** @inheritDoc */
    static shimData(source: any, options: any): object;
    /** @override */
    static override validateJoint(data: any): void;
    /** @override */
    static override canUserCreate(user: any): any;
    static #canCreate(user: foundry.documents.BaseUser, document: Document, data?: object | undefined): boolean;
    static #canUpdate(user: foundry.documents.BaseUser, document: Document, data?: object | undefined): boolean;
    constructor(data?: Partial<MacroData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
    /** @inheritDoc */
    _initialize(options: any): void;
    /** @inheritDoc */
    getUserLevel(user: any): CONST.DocumentOwnershipNumber;
    /** @inheritDoc */
    _preCreate(data: any, options: any, user: any): Promise<false | undefined>;
}
import type { MacroData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as CONST from "../constants.mjs";
import * as fields from "../data/fields.mjs";
