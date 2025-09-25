/**
 * A Vision Mode which can be selected for use by a Token.
 * The selected Vision Mode alters the appearance of various aspects of the canvas while that Token is the POV.
 */
export default class VisionMode extends DataModel<object, foundry.abstract.types.DataModelConstructionContext> {
    /** @inheritDoc */
    static defineSchema(): {
        id: fields.StringField;
        label: fields.StringField;
        tokenConfig: fields.BooleanField;
        canvas: fields.SchemaField;
        lighting: fields.SchemaField;
        vision: fields.SchemaField;
    };
    /**
     * The lighting illumination levels which are supported.
     * @enum {number}
     */
    static LIGHTING_LEVELS: Readonly<{
        readonly DARKNESS: -2;
        readonly HALFDARK: -1;
        readonly UNLIT: 0;
        readonly DIM: 1;
        readonly BRIGHT: 2;
        readonly BRIGHTEST: 3;
    }>;
    /**
     * Flags for how each lighting channel should be rendered for the currently active vision modes:
     * - Disabled: this lighting layer is not rendered, the shaders does not decide.
     * - Enabled: this lighting layer is rendered normally, and the shaders can choose if they should be rendered or not.
     * - Required: the lighting layer is rendered, the shaders does not decide.
     * @enum {number}
     */
    static LIGHTING_VISIBILITY: {
        DISABLED: number;
        ENABLED: number;
        REQUIRED: number;
    };
    /**
     * Construct a Vision Mode using provided configuration parameters and callback functions.
     * @param {object} data             Data which fulfills the model defined by the VisionMode schema.
     * @param {object} [options]        Additional options passed to the DataModel constructor.
     */
    constructor(data?: object, options?: object);
    /**
     * A flag for whether this vision source is animated
     * @type {boolean}
     */
    animated: boolean;
    /**
     * Does this vision mode enable light sources?
     * True unless it disables lighting entirely.
     * @type {boolean}
     */
    get perceivesLight(): boolean;
    /**
     * Special activation handling that could be implemented by VisionMode subclasses
     * @param {PointVisionSource} source   Activate this VisionMode for a specific source
     * @abstract
     */
    _activate(source: PointVisionSource): void;
    /**
     * Special deactivation handling that could be implemented by VisionMode subclasses
     * @param {PointVisionSource} source   Deactivate this VisionMode for a specific source
     * @abstract
     */
    _deactivate(source: PointVisionSource): void;
    /**
     * Special handling which is needed when this Vision Mode is activated for a PointVisionSource.
     * @param {PointVisionSource} source   Activate this VisionMode for a specific source
     */
    activate(source: PointVisionSource): void;
    /**
     * Special handling which is needed when this Vision Mode is deactivated for a PointVisionSource.
     * @param {PointVisionSource} source   Deactivate this VisionMode for a specific source
     */
    deactivate(source: PointVisionSource): void;
    /**
     * An animation function which runs every frame while this Vision Mode is active.
     * @param {number} dt         The deltaTime passed by the PIXI Ticker
     */
    animate(dt: number): any;
}
export { ShaderField } from "@client/data/fields.mjs";
import DataModel from "@common/abstract/data.mjs";
import PointVisionSource from "../sources/point-vision-source.mjs";
import * as fields from "@client/data/fields.mjs";
