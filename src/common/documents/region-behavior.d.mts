/**
 * @import {RegionBehaviorData} from "./_types.mjs";
 * @import {DocumentPermissionTest} from "@common/abstract/_types.mjs";
 */
/**
 * The RegionBehavior Document.
 * Defines the DataSchema and common behaviors for a RegionBehavior which are shared between both client and server.
 * @extends {Document<RegionBehaviorData>}
 * @mixes RegionBehaviorData
 * @category Documents
 */
export default class BaseRegionBehavior extends Document<RegionBehaviorData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        type: fields.DocumentTypeField;
        system: fields.TypeDataField;
        disabled: fields.BooleanField;
        flags: fields.DocumentFlagsField;
        _stats: fields.DocumentStatsField;
    };
    /** @override */
    static override canUserCreate(user: any): any;
    static #canCreate(user: foundry.documents.BaseUser, document: Document, data?: object | undefined): boolean;
    static #canUpdate(user: foundry.documents.BaseUser, document: Document, data?: object | undefined): boolean;
    constructor(data?: Partial<RegionBehaviorData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
}
import type { RegionBehaviorData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
