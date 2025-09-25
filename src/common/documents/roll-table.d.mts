/**
 * @import {RollTableData} from "./_types.mjs";
 */
/**
 * The RollTable Document.
 * Defines the DataSchema and common behaviors for a RollTable which are shared between both client and server.
 * @extends {Document<RollTableData>}
 * @mixes RollTableData
 * @category Documents
 */
export default class BaseRollTable extends Document<RollTableData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritDoc */
    static metadata: object;
    /**
     * The default icon used for newly created Macro documents
     * @type {string}
     */
    static DEFAULT_ICON: string;
    /** @inheritDoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        img: fields.FilePathField;
        description: fields.HTMLField;
        results: fields.EmbeddedCollectionField;
        formula: fields.StringField;
        replacement: fields.BooleanField;
        displayRoll: fields.BooleanField;
        folder: fields.ForeignDocumentField;
        sort: fields.IntegerSortField;
        ownership: fields.DocumentOwnershipField;
        flags: fields.DocumentFlagsField;
        _stats: fields.DocumentStatsField;
    };
    /** @inheritDoc */
    static migrateData(source: any): object;
    /** @inheritDoc */
    static shimData(source: any, options: any): object;
    constructor(data?: Partial<RollTableData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
    /** @inheritDoc */
    _initialize(options: any): void;
}
import type { RollTableData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
