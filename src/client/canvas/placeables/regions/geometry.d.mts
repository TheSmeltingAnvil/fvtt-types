/**
 * @import Region from "../region.mjs";
 */
/**
 * The geometry of a {@link foundry.canvas.placeables.Region}.
 * - Vertex Attribute: `aVertexPosition` (`vec2`)
 * - Draw Mode: `PIXI.DRAW_MODES.TRIANGLES`
 */
export default class RegionGeometry {
    /**
     * Create a RegionGeometry.
     * @param {Region} region    The Region to create the RegionGeometry from.
     * @internal
     */
    constructor(region: Region);
    /**
     * The Region this geometry belongs to.
     * @type {Region}
     */
    get region(): Region;
    /**
     * Update the buffers.
     * @internal
     */
    _clearBuffers(): void;
    /**
     * Update the buffers.
     * @internal
     */
    _updateBuffers(): void;
    #private;
}
import type Region from "../region.mjs";
