/**
 * @import {TileData} from "./_types.mjs";
 */
/**
 * The Tile Document.
 * Defines the DataSchema and common behaviors for a Tile which are shared between both client and server.
 * @extends {Document<TileData>}
 * @mixes TileData
 * @category Documents
 */
export default class BaseTile extends Document<TileData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        texture: TextureData;
        width: fields.NumberField;
        height: fields.NumberField;
        x: fields.NumberField;
        y: fields.NumberField;
        elevation: fields.NumberField;
        sort: fields.NumberField;
        rotation: fields.AngleField;
        alpha: fields.AlphaField;
        hidden: fields.BooleanField;
        locked: fields.BooleanField;
        restrictions: fields.SchemaField;
        occlusion: fields.SchemaField;
        video: fields.SchemaField;
        flags: fields.DocumentFlagsField;
    };
    /** @inheritdoc */
    static migrateData(data: any): object;
    /** @inheritdoc */
    static shimData(data: any, options: any): object;
    constructor(data?: Partial<TileData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
    /**
     * @deprecated since v12
     * @ignore
     */
    set roof(enabled: any);
    /**
     * @deprecated since v12
     * @ignore
     */
    get roof(): any;
    /**
     * @deprecated since v12
     * @ignore
     */
    get z(): any;
    /**
     * @deprecated since v12
     * @ignore
     */
    get overhead(): boolean;
}
import type { TileData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
import { TextureData } from "../data/data.mjs";
