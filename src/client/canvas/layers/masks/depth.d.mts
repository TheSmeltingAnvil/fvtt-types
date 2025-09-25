/**
 * The depth mask which contains a mapping of elevation. Needed to know if we must render objects according to depth.
 * Red channel: Lighting occlusion (top).
 * Green channel: Lighting occlusion (bottom).
 * Blue channel: Weather occlusion.
 * @category Canvas
 */
export default class CanvasDepthMask extends CachedContainer {
    /** @override */
    static override textureConfiguration: {
        scaleMode: any;
        format: any;
        multisample: any;
    };
    constructor(...args: any[]);
    /**
     * Container in which roofs are rendered with depth data.
     * @type {PIXI.Container}
     */
    roofs: PIXI.Container;
    /**
     * Update the elevation-to-depth mapping?
     * @type {boolean}
     * @internal
     */
    _elevationDirty: boolean;
    /**
     * Map an elevation to a value in the range [0, 1] with 8-bit precision.
     * The depth-rendered object are rendered with these values into the render texture.
     * @param {number} elevation    The elevation in distance units
     * @returns {number}            The value for this elevation in the range [0, 1] with 8-bit precision
     */
    mapElevation(elevation: number): number;
    /**
     * Update the elevation-to-depth mapping.
     * Needs to be called after the children have been sorted
     * and the canvas transform phase.
     * @internal
     */
    _update(): void;
    /**
     * Clear the depth mask.
     * @override
     */
    override clear(): this;
    #private;
}
import CachedContainer from "../../containers/advanced/cached-container.mjs";
