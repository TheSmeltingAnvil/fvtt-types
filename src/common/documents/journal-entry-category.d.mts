/**
 * @import {JournalEntryCategoryData} from "./_types.mjs";
 */
/**
 * An embedded Document that represents a category in a JournalEntry.
 * Defines the DataSchema and common behaviors for a JournalEntryCategory which are shared between both client and
 * server.
 * @extends {Document<JournalEntryCategoryData>}
 * @mixes JournalEntryCategoryData
 * @category Documents
 */
export default class BaseJournalEntryCategory extends Document<JournalEntryCategoryData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritDoc */
    static metadata: object;
    /** @override */
    static override defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        sort: fields.IntegerSortField;
        flags: fields.DocumentFlagsField;
        _stats: fields.DocumentStatsField;
    };
    constructor(data?: Partial<JournalEntryCategoryData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
}
import type { JournalEntryCategoryData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
