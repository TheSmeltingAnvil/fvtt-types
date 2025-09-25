/**
 * Dynamic Ring configuration data model.
 * @extends {foundry.abstract.DataModel}
 * @property {string} id                        The id of this Token Ring configuration.
 * @property {string} label                     The label of this Token Ring configuration.
 * @property {string} spritesheet               The spritesheet path which provides token ring frames for various
 *                                              sized creatures.
 * @property {Record<string, string>} [effects] Registered special effects which can be applied to a token ring.
 * @property {Object} framework
 * @property {typeof TokenRing} [framework.ringClass=TokenRing] The manager class responsible for rendering token rings.
 * @property {typeof PrimaryBaseSamplerShader} [framework.shaderClass=TokenRingSamplerShader]  The shader class used to
 *                                              render the TokenRing.
 */
export default class DynamicRingData extends DataModel<object, foundry.abstract.types.DataModelConstructionContext> {
    /** @inheritDoc */
    static defineSchema(): {
        id: foundry.data.fields.StringField;
        label: foundry.data.fields.StringField;
        spritesheet: foundry.data.fields.FilePathField;
        effects: foundry.data.fields.ObjectField;
        framework: foundry.data.fields.SchemaField;
    };
    constructor(data?: object | undefined, { parent, strict, ...options }?: foundry.abstract.types.DataModelConstructionContext | undefined);
}
import DataModel from "@common/abstract/data.mjs";
