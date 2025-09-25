/**
 * A CanvasLayer for displaying coloration visual effects
 * @category Canvas
 */
export default class CanvasColorationEffects extends CanvasLayer {
    sortableChildren: boolean;
    /**
     * The filter used to mask visual effects on this layer
     * @type {VisualEffectsMaskingFilter}
     */
    filter: VisualEffectsMaskingFilter;
    /**
     * Clear coloration effects container
     */
    clear(): void;
    /** @override */
    override _draw(options: any): Promise<void>;
    filterArea: any;
    filters: VisualEffectsMaskingFilter[] | undefined;
    /** @override */
    override _tearDown(options: any): Promise<void>;
    #private;
}
import CanvasLayer from "../base/canvas-layer.mjs";
