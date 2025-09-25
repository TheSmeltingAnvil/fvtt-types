/**
 * @import {TextAnchorPoint} from "@common/constants.mjs"
 * @import Drawing from "../placeables/drawing.mjs"
 */
/**
 * A container group which displays interface elements rendered above other canvas groups.
 * @extends {CanvasGroupMixin(PIXI.Container)}
 */
export default class InterfaceCanvasGroup {
    /** @override */
    static override groupName: string;
    /**
     * The sorting function used to order objects inside the Interface Drawings Container
     * Overrides the default sorting function defined for the PIXI.Container.
     * @param {PrimaryCanvasObject|PIXI.DisplayObject} a     An object to display
     * @param {PrimaryCanvasObject|PIXI.DisplayObject} b     Some other object to display
     * @returns {number}
     */
    static #compareObjects(a: PrimaryCanvasObject | PIXI.DisplayObject, b: PrimaryCanvasObject | PIXI.DisplayObject): number;
    /**
     * Add a PrimaryGraphics to the group.
     * @param {Drawing} drawing      The Drawing being added
     * @returns {PIXI.Graphics}      The created Graphics instance
     */
    addDrawing(drawing: Drawing): PIXI.Graphics;
    /**
     * Remove a PrimaryGraphics from the group.
     * @param {Drawing} drawing     The Drawing being removed
     */
    removeDrawing(drawing: Drawing): void;
    /** @inheritDoc */
    _draw(options: any): Promise<void>;
    filters: VoidFilter[] | undefined;
    filterArea: any;
    /**
     * Display scrolling status text originating from an origin point on the Canvas.
     * @param {Point} origin            An origin point where the text should first emerge
     * @param {string} content          The text content to display
     * @param {object} [options]        Options which customize the text animation
     * @param {number} [options.duration=2000]  The duration of the scrolling effect in milliseconds
     * @param {number} [options.distance]       The distance in pixels that the scrolling text should travel
     * @param {TextAnchorPoint} [options.anchor]    The original anchor point where the text appears
     * @param {TextAnchorPoint} [options.direction] The direction in which the text scrolls
     * @param {number} [options.jitter=0]       An amount of randomization between [0, 1] applied to the initial position
     * @param {object} [options.textStyle={}]   Additional parameters of PIXI.TextStyle which are applied to the text
     * @returns {Promise<void>}                 A promise that resolves after the scrolling text animation ended.
     */
    createScrollingText(origin: Point, content: string, { duration, distance, jitter, anchor, direction, ...textStyle }?: {
        duration?: number | undefined;
        distance?: number | undefined;
        anchor?: TextAnchorPoint | undefined;
        direction?: TextAnchorPoint | undefined;
        jitter?: number | undefined;
        textStyle?: object | undefined;
    }): Promise<void>;
    #private;
}
import type Drawing from "../placeables/drawing.mjs";
import VoidFilter from "../rendering/filters/void.mjs";
import type { TextAnchorPoint } from "@common/constants.mjs";
