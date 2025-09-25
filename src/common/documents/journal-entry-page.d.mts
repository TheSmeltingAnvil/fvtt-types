/**
 * @import {JournalEntryPageData} from "./_types.mjs";
 */
/**
 * The JournalEntryPage Document.
 * Defines the DataSchema and common behaviors for a JournalEntryPage which are shared between both client and server.
 * @extends {Document<JournalEntryPageData>}
 * @mixes JournalEntryPageData
 * @category Documents
 */
export default class BaseJournalEntryPage extends Document<JournalEntryPageData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        type: fields.DocumentTypeField;
        system: fields.TypeDataField;
        title: fields.SchemaField;
        image: fields.SchemaField;
        text: fields.SchemaField;
        video: fields.SchemaField;
        src: fields.StringField;
        category: fields.DocumentIdField;
        sort: fields.IntegerSortField;
        ownership: fields.DocumentOwnershipField;
        flags: fields.DocumentFlagsField;
        _stats: fields.DocumentStatsField;
    };
    constructor(data?: Partial<JournalEntryPageData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
}
import type { JournalEntryPageData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
