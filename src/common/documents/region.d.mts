/**
 * @import {RegionData} from "./_types.mjs";
 */
/**
 * The Region Document.
 * Defines the DataSchema and common behaviors for a Region which are shared between both client and server.
 * @extends {Document<RegionData>}
 * @mixes RegionData
 * @category Documents
 */
export default class BaseRegion extends Document<RegionData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        color: fields.ColorField;
        shapes: fields.ArrayField<fields.TypedSchemaField>;
        elevation: fields.SchemaField;
        behaviors: fields.EmbeddedCollectionField;
        visibility: fields.NumberField;
        locked: fields.BooleanField;
        flags: fields.DocumentFlagsField;
    };
    constructor(data?: Partial<RegionData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
}
import type { RegionData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
