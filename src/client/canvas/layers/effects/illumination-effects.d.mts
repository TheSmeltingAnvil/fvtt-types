/**
 * A CanvasLayer for displaying illumination visual effects
 * @category Canvas
 */
export default class CanvasIlluminationEffects extends CanvasLayer {
    /**
     * The filter used to mask visual effects on this layer
     * @type {VisualEffectsMaskingFilter}
     */
    filter: VisualEffectsMaskingFilter;
    /**
     * The container holding the lights.
     * @type {PIXI.Container}
     */
    lights: PIXI.Container;
    /**
     * The base line mesh.
     * @type {SpriteMesh}
     */
    baselineMesh: SpriteMesh;
    /**
     * The cached container holding the illumination meshes.
     * @type {CachedContainer}
     */
    darknessLevelMeshes: CachedContainer;
    /**
     * To know if dynamic darkness level is active on this scene.
     * @returns {boolean}
     */
    get hasDynamicDarknessLevel(): boolean;
    /**
     * The illumination render texture.
     * @returns {PIXI.RenderTexture}
     */
    get renderTexture(): PIXI.RenderTexture;
    /**
     * Clear illumination effects container
     */
    clear(): void;
    /**
     * Invalidate the cached container state to trigger a render pass.
     * @param {boolean} [force=false] Force cached container invalidation?
     */
    invalidateDarknessLevelContainer(force?: boolean): void;
    /** @override */
    override _draw(options: any): Promise<void>;
    darknessLevel: number | undefined;
    filterArea: any;
    filters: VisualEffectsMaskingFilter[] | undefined;
    /** @override */
    override _tearDown(options: any): Promise<void>;
    /**
     * @deprecated since v12
     * @ignore
     */
    background(): null;
    /**
     * @deprecated since v12
     * @ignore
     */
    get globalLight(): any;
    #private;
}
/**
 * Cached container used for dynamic darkness level. Display objects (of any type) added to this cached container will
 * contribute to computing the darkness level of the masked area. Only the red channel is utilized, which corresponds
 * to the desired darkness level. Other channels are ignored.
 */
export class DarknessLevelContainer extends CachedContainer {
    constructor(...args: any[]);
    #private;
}
import CanvasLayer from "../base/canvas-layer.mjs";
import SpriteMesh from "../../containers/elements/sprite-mesh.mjs";
import CachedContainer from "../../containers/advanced/cached-container.mjs";
