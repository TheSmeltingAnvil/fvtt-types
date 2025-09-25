/**
 * @typedef TurnMarkerAnimationData
 * The turn marker animation data.
 * @property {string} id                              The ID of the animation.
 * @property {string} label                           The label for the animation.
 * @property {TurnMarkerAnimationConfigData} [config] The configuration of the animation.
 */
/**
 * @typedef TurnMarkerAnimationConfigData
 * The turn marker config data.
 * @property {number} [spin]                 The spin speed for the animation.
 * @property {Object} pulse                  The pulse settings.
 * @property {number} [pulse.speed]          The speed of the pulse.
 * @property {number} [pulse.min]            The minimum pulse value.
 * @property {number} [pulse.max]            The maximum pulse value.
 * @property {typeof AbstractBaseShader|null} [shader] A shader class to apply or null.
 */
/**
 * Turn marker configuration data model.
 * @extends {foundry.abstract.DataModel}
 * @mixes TurnMarkerAnimationData
 */
export default class TurnMarkerData extends DataModel<object, foundry.abstract.types.DataModelConstructionContext> {
    /** @inheritDoc */
    static defineSchema(): {
        id: foundry.data.fields.StringField;
        label: foundry.data.fields.StringField;
        config: foundry.data.fields.SchemaField;
    };
    constructor(data?: object | undefined, { parent, strict, ...options }?: foundry.abstract.types.DataModelConstructionContext | undefined);
}
/**
 * The turn marker animation data.
 */
export type TurnMarkerAnimationData = {
    /**
     * The ID of the animation.
     */
    id: string;
    /**
     * The label for the animation.
     */
    label: string;
    /**
     * The configuration of the animation.
     */
    config?: TurnMarkerAnimationConfigData | undefined;
};
/**
 * The turn marker config data.
 */
export type TurnMarkerAnimationConfigData = {
    /**
     * The spin speed for the animation.
     */
    spin?: number | undefined;
    /**
     * The pulse settings.
     */
    pulse: {
        speed?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
    };
    /**
     * A shader class to apply or null.
     */
    shader?: typeof AbstractBaseShader | null;
};
import DataModel from "../../../../common/abstract/data.mjs";
