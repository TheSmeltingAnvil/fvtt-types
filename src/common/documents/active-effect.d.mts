/**
 * @import {ActiveEffectData} from "./_types.mjs";
 */
/**
 * The ActiveEffect Document.
 * Defines the DataSchema and common behaviors for an ActiveEffect which are shared between both client and server.
 * @extends {Document<ActiveEffectData>}
 * @mixes ActiveEffectData
 * @category Documents
 */
export default class BaseActiveEffect extends Document<ActiveEffectData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        name: fields.StringField;
        img: fields.FilePathField;
        type: fields.DocumentTypeField;
        system: fields.TypeDataField;
        changes: fields.ArrayField<fields.SchemaField>;
        disabled: fields.BooleanField;
        duration: fields.SchemaField;
        description: fields.HTMLField;
        origin: fields.StringField;
        tint: fields.ColorField;
        transfer: fields.BooleanField;
        statuses: fields.SetField;
        sort: fields.IntegerSortField;
        flags: fields.DocumentFlagsField;
        _stats: fields.DocumentStatsField;
    };
    /** @inheritDoc */
    static migrateData(data: any): object;
    /** @inheritdoc */
    static shimData(data: any, options: any): object;
    constructor(data?: Partial<ActiveEffectData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
    /** @inheritDoc */
    _preCreate(data: any, options: any, user: any): Promise<false | undefined>;
    /**
     * @deprecated since v12
     * @ignore
     */
    set icon(value: any);
    /**
     * @deprecated since v12
     * @ignore
     */
    get icon(): any;
    img: any;
}
import type { ActiveEffectData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
