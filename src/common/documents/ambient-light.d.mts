/**
 * @import {AmbientLightData} from "./_types.mjs";
 */
/**
 * The AmbientLight Document.
 * Defines the DataSchema and common behaviors for an AmbientLight which are shared between both client and server.
 * @extends {Document<AmbientLightData>}
 * @mixes AmbientLightData
 * @category Documents
 */
export default class BaseAmbientLight extends Document<AmbientLightData, foundry.abstract.types.DocumentConstructionContext> {
    /** @inheritdoc */
    static metadata: object;
    /** @inheritdoc */
    static defineSchema(): {
        _id: fields.DocumentIdField;
        x: fields.NumberField;
        y: fields.NumberField;
        elevation: fields.NumberField;
        rotation: fields.AngleField;
        walls: fields.BooleanField;
        vision: fields.BooleanField;
        config: fields.EmbeddedDataField;
        hidden: fields.BooleanField;
        flags: fields.DocumentFlagsField;
    };
    constructor(data?: Partial<AmbientLightData> | undefined, { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined);
}
import type { AmbientLightData } from "./_types.mjs";
import Document from "../abstract/document.mjs";
import * as fields from "../data/fields.mjs";
