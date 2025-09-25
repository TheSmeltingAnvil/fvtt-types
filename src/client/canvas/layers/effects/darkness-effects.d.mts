/**
 * A layer of background alteration effects which change the appearance of the primary group render texture.
 * @category Canvas
 */
export default class CanvasDarknessEffects extends CanvasLayer {
    sortableChildren: boolean;
    /**
     * Clear coloration effects container
     */
    clear(): void;
    /** @override */
    override _draw(options: any): Promise<void>;
    filter: foundry.canvas.rendering.filters.AbstractBaseFilter | undefined;
    filterArea: any;
    filters: foundry.canvas.rendering.filters.AbstractBaseFilter[] | undefined;
}
import CanvasLayer from "../base/canvas-layer.mjs";
