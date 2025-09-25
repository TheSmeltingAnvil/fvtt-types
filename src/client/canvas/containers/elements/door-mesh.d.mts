/**
 * @import {PrimarySpriteMeshConstructorOptions} from "../../primary/primary-sprite-mesh.mjs";
 * @import {CanvasAnimationData, CanvasAnimationAttribute} from "../../animation/_types.mjs";
 * @import {WallDoorAnimationConfig} from "@client/config.mjs";
 */
/**
 * @typedef DoorAnimationConfiguration
 * @property {number} [direction=1]
 * @property {boolean} [double=false]
 * @property {number} [duration=500]
 * @property {boolean} [flip=false]
 * @property {number} [strength=1.0]
 * @property {keyof typeof CONFIG.Wall.animationTypes} [type="swing"]
 * @property {DoorStyle} [style]
 * @property {WallDoorAnimationConfig} config
 */
/**
 * @typedef DoorStateSnapshot
 * @property {number} x
 * @property {number} y
 * @property {number} elevation
 * @property {number} sort
 * @property {number} rotation
 * @property {number} scaleX
 * @property {number} scaleY
 * @property {number} tint
 * @property {number} alpha
 */
/**
 * @typedef {typeof DoorMesh.DOOR_STYLES[keyof typeof DoorMesh.DOOR_STYLES]} DoorStyle
 */
/**
 * A special subclass of PrimarySpriteMesh used to render an interactive door.
 */
export default class DoorMesh extends PrimarySpriteMesh {
    /**
     * The possible rendering styles for a door mesh.
     */
    static DOOR_STYLES: Readonly<{
        readonly SINGLE: "single";
        readonly DOUBLE_LEFT: "doubleL";
        readonly DOUBLE_RIGHT: "doubleR";
    }>;
    /**
     * Configure the "swing" animation.
     * @this {DoorMesh}
     * @param {boolean} open
     * @returns {CanvasAnimationAttribute[]}
     */
    static animateSwing(this: DoorMesh, open: boolean): CanvasAnimationAttribute[];
    /**
     * Configure the "ascend" animation.
     * @this {DoorMesh}
     * @param {boolean} open
     * @returns {CanvasAnimationAttribute[]}
     */
    static animateAscend(this: DoorMesh, open: boolean): CanvasAnimationAttribute[];
    /**
     * Special initialization needed for descending door types.
     * @this {DoorMesh}
     * @param {boolean} open
     */
    static initializeDescend(this: DoorMesh, open: boolean): void;
    /**
     * When closing a descending door, shift its elevation to the foreground before animation.
     * @this {DoorMesh}
     * @param {boolean} open
     * @returns {Promise<void>}
     */
    static preAnimateDescend(this: DoorMesh, open: boolean): Promise<void>;
    /**
     * Configure the "descend" animation.
     * @this {DoorMesh}
     * @param {boolean} open
     * @returns {CanvasAnimationAttribute[]}
     */
    static animateDescend(this: DoorMesh, open: boolean): CanvasAnimationAttribute[];
    /**
     * When opening a descending door, shift its elevation to the background after animation.
     * @this {DoorMesh}
     * @param {boolean} open
     * @returns {Promise<void>}
     */
    static postAnimateDescend(this: DoorMesh, open: boolean): Promise<void>;
    /**
     * Configure the "slide" animation.
     * @this {DoorMesh}
     * @param {boolean} open
     * @returns {CanvasAnimationAttribute[]}
     */
    static animateSlide(this: DoorMesh, open: boolean): CanvasAnimationAttribute[];
    /**
     * Construct a DoorMesh by providing PrimarySpriteMesh constructor options and specific door configuration.
     * @param {PrimarySpriteMeshConstructorOptions & DoorAnimationConfiguration & {style: DoorStyle}} options
     */
    constructor({ direction, double, duration, flip, strength, type, style, ...spriteOptions }?: PrimarySpriteMeshConstructorOptions & DoorAnimationConfiguration & {
        style: DoorStyle;
    });
    /**
     * The original position of the door in its resting CLOSED state.
     * @type {DoorStateSnapshot}
     * @internal
     */
    _closedPosition: DoorStateSnapshot;
    /**
     * The currently rendered position of the door.
     * @type {DoorStateSnapshot}
     * @internal
     */
    _animatedPosition: DoorStateSnapshot;
    /**
     * An amount of pixel padding surrounding the door texture.
     * @type {number}
     */
    texturePadding: number;
    /**
     * The identifier for this door animation.
     * @type {string}
     */
    get animationId(): string;
    /**
     * Configure and initialize the DoorMesh.
     * This is called automatically upon construction, but may be called manually later to update the DoorMesh.
     * @param {DoorAnimationConfiguration} animation
     */
    initialize(animation: DoorAnimationConfiguration): void;
    hoverFade: boolean | undefined;
    elevation: number | undefined;
    sort: number | undefined;
    rotation: number | undefined;
    alpha: number | undefined;
    /**
     * Animate the door to its current rendered state.
     * @param {boolean} open      Is the door now open or closed?
     * @returns {Promise<void>}
     */
    animate(open: boolean): Promise<void>;
    #private;
}
export type DoorAnimationConfiguration = {
    direction?: number | undefined;
    double?: boolean | undefined;
    duration?: number | undefined;
    flip?: boolean | undefined;
    strength?: number | undefined;
    type?: string | undefined;
    style?: DoorStyle | undefined;
    config: WallDoorAnimationConfig;
};
export type DoorStateSnapshot = {
    x: number;
    y: number;
    elevation: number;
    sort: number;
    rotation: number;
    scaleX: number;
    scaleY: number;
    tint: number;
    alpha: number;
};
export type DoorStyle = (typeof DoorMesh.DOOR_STYLES)[keyof typeof DoorMesh.DOOR_STYLES];
import PrimarySpriteMesh from "../../primary/primary-sprite-mesh.mjs";
import type { CanvasAnimationAttribute } from "../../animation/_types.mjs";
import type { PrimarySpriteMeshConstructorOptions } from "../../primary/primary-sprite-mesh.mjs";
import type { WallDoorAnimationConfig } from "@client/config.mjs";
