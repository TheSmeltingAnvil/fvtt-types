/**
 * @import {ElevatedPoint} from "../../_types.mjs";
 */
/**
 * A specialized subclass of the BaseEffectSource which describes a point-based source of sound.
 * @extends {BaseEffectSource}
 * @mixes PointEffectSource
 */
export default class PointSoundSource extends BaseEffectSource<import("./base-effect-source.mjs").BaseEffectSourceData, PIXI.Polygon> {
    constructor(options?: import("./base-effect-source.mjs").BaseEffectSourceOptions | undefined);
    /** @override */
    override get effectsCollection(): any;
    /** @inheritDoc */
    _getPolygonConfiguration(): any;
    /**
     * Get the effective volume at which an AmbientSound source should be played for a certain listener.
     * @param {ElevatedPoint} listener
     * @param {object} [options]
     * @param {boolean} [options.easing]
     * @returns {number}
     */
    getVolumeMultiplier(listener: ElevatedPoint, { easing }?: {
        easing?: boolean | undefined;
    }): number;
}
import BaseEffectSource from "./base-effect-source.mjs";
import type { ElevatedPoint } from "../../_types.mjs";
