/**
 * @import {CanvasVisionContainerSight} from "../_types.mjs"
 * @import {CanvasVisionContainerLight} from "../_types.mjs"
 * @import {CanvasVisionContainerDarkness} from "../_types.mjs"
 * @import {CanvasVisionContainer} from "../_types.mjs"
 */
/**
 * The vision mask which contains the current line-of-sight texture.
 * @category Canvas
 */
export default class CanvasVisionMask extends CachedContainer {
    /** @override */
    static override textureConfiguration: {
        scaleMode: any;
        format: any;
        multisample: any;
    };
    /**
     * The current vision Container.
     * @type {CanvasVisionContainer}
     */
    vision: CanvasVisionContainer;
    /**
     * The BlurFilter which applies to the vision mask texture.
     * This filter applies a NORMAL blend mode to the container.
     * @type {AlphaBlurFilter}
     */
    blurFilter: AlphaBlurFilter;
    filterArea: any;
    draw(): Promise<void>;
    /**
     * Initialize the vision mask with the los and the fov graphics objects.
     * @param {PIXI.Container} vision         The vision container to attach
     * @returns {CanvasVisionContainer}
     */
    attachVision(vision: PIXI.Container): CanvasVisionContainer;
    /**
     * Detach the vision mask from the cached container.
     * @returns {CanvasVisionContainer} The detached vision container.
     */
    detachVision(): CanvasVisionContainer;
    #private;
}
import CachedContainer from "../../containers/advanced/cached-container.mjs";
import type { CanvasVisionContainer } from "../_types.mjs";
