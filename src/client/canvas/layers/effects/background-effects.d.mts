/**
 * A layer of background alteration effects which change the appearance of the primary group render texture.
 * @category Canvas
 */
export default class CanvasBackgroundAlterationEffects extends CanvasLayer {
    /**
     * A collection of effects which provide background vision alterations.
     * @type {PIXI.Container}
     */
    vision: PIXI.Container;
    /**
     * A collection of effects which provide background preferred vision alterations.
     * @type {PIXI.Container}
     */
    visionPreferred: PIXI.Container;
    /**
     * A collection of effects which provide other background alterations.
     * @type {PIXI.Container}
     */
    lighting: PIXI.Container;
    /** @override */
    override _draw(options: any): Promise<void>;
    /** @override */
    override _tearDown(options: any): Promise<void>;
    /**
     * Clear background alteration effects vision and lighting containers
     */
    clear(): void;
}
import CanvasLayer from "../base/canvas-layer.mjs";
