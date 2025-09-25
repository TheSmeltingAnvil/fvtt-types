/**
 * @import {CardsData} from "./_types.mjs";
 */
/**
 * The Cards Document.
 * Defines the DataSchema and common behaviors for a Cards Document which are shared between both client and server.
 * @extends {Document<CardsData>}
 * @mixes CardsData
 * @category Documents
 */
export default class BaseCards extends Document<CardsData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        type: fields.DocumentTypeField;
        description: fields.HTMLField;
        img: fields.FilePathField;
        system: fields.TypeDataField;
        cards: fields.EmbeddedCollectionField;
        width: fields.NumberField;
        height: fields.NumberField;
        rotation: fields.AngleField;
        displayCount: fields.BooleanField;
        folder: fields.ForeignDocumentField;
        sort: fields.IntegerSortField;
        ownership: fields.DocumentOwnershipField;
        flags: fields.DocumentFlagsField;
        _stats: fields.DocumentStatsField;
    };
    /**
     * The default icon used for a cards stack that does not have a custom image set
     * @type {string}
     */
    static DEFAULT_ICON: string;
    /** @inheritDoc */
    static migrateData(source: any): object;
    /** @inheritDoc */
    static shimData(source: any, options: any): object;
    constructor(data?: Partial<CardsData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
    /** @inheritDoc */
    _initialize(options: any): void;
}
import type { CardsData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
