/**
 * @import {AmbientSoundData} from "./_types.mjs";
 */
/**
 * The AmbientSound Document.
 * Defines the DataSchema and common behaviors for an AmbientSound which are shared between both client and server.
 * @extends {Document<AmbientSoundData>}
 * @mixes AmbientSoundData
 * @category Documents
 */
export default class BaseAmbientSound extends Document<AmbientSoundData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        x: fields.NumberField;
        y: fields.NumberField;
        elevation: fields.NumberField;
        radius: fields.NumberField;
        path: fields.FilePathField;
        repeat: fields.BooleanField;
        volume: fields.AlphaField;
        walls: fields.BooleanField;
        easing: fields.BooleanField;
        hidden: fields.BooleanField;
        darkness: fields.SchemaField;
        effects: fields.SchemaField;
        flags: fields.DocumentFlagsField;
    };
    constructor(data?: Partial<AmbientSoundData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
}
import type { AmbientSoundData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
