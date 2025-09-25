/**
 * @import {PingOptions} from "../_types.mjs"
 * @import {Point} from "@common/_types.mjs";
 */
/**
 * A class to manage a user ping on the canvas.
 */
export default class Ping {
  /**
   * @param {Point} origin            The canvas coordinates of the origin of the ping.
   * @param {PingOptions} [options]   Additional options to configure the ping animation.
   */
  constructor(origin: Point, options?: PingOptions)
  x: number
  y: number
  options: object
  /**
   * The color of the ping.
   * @type {Color}
   * @protected
   */
  protected _color: Color
  /** @inheritdoc */
  destroy(options?: object): void
  /**
   * Start the ping animation.
   * @returns {Promise<boolean>}  Returns true if the animation ran to completion, false otherwise.
   */
  animate(): Promise<boolean>
  /**
   * On each tick, advance the animation.
   * @param {number} dt                      The number of ms that elapsed since the previous frame.
   * @param {CanvasAnimationData} animation  The animation state.
   * @protected
   */
  protected _animateFrame(dt: number, animation: CanvasAnimationData): void
}
import type { Point } from "@common/_types.mjs"
import Color from "@common/utils/color.mjs"
import type { PingOptions } from "../_types.mjs"
