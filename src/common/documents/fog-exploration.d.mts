/**
 * @import {FogExplorationData} from "./_types.mjs";
 * @import {DocumentPermissionTest} from "@common/abstract/_types.mjs";
 */
/**
 * The FogExploration Document.
 * Defines the DataSchema and common behaviors for a FogExploration which are shared between both client and server.
 * @extends {Document<FogExplorationData>}
 * @mixes FogExplorationData
 * @category Documents
 */
export default class BaseFogExploration extends Document<FogExplorationData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        scene: fields.ForeignDocumentField;
        user: fields.ForeignDocumentField;
        explored: fields.FilePathField;
        positions: fields.ObjectField;
        timestamp: fields.NumberField;
        flags: fields.DocumentFlagsField;
        _stats: fields.DocumentStatsField;
    };
    static #canModify(user: foundry.documents.BaseUser, document: Document, data?: object | undefined): boolean;
    constructor(data?: Partial<FogExplorationData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
    /** @inheritDoc */
    _preUpdate(changed: any, options: any, user: any): Promise<false | undefined>;
}
import type { FogExplorationData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
