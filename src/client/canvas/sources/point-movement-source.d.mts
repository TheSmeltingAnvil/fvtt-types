/**
 * A specialized subclass of the BaseEffectSource which describes a movement-based source.
 * @extends {BaseEffectSource}
 * @mixes PointEffectSource
 */
export default class PointMovementSource extends BaseEffectSource<import("./base-effect-source.mjs").BaseEffectSourceData, PIXI.Polygon> {
    constructor(options?: import("./base-effect-source.mjs").BaseEffectSourceOptions | undefined);
}
import BaseEffectSource from "./base-effect-source.mjs";
