/**
 * @import {Point} from "@common/_types.mjs";
 */
/**
 * A type of Placeable Object which highlights an area of the grid as covered by some area of effect.
 * @category Canvas
 * @see {@link foundry.documents.MeasuredTemplateDocument}
 * @see {@link foundry.canvas.layers.TemplateLayer}
 */
export default class MeasuredTemplate extends PlaceableObject {
  /** @override */
  static override RENDER_FLAGS: {
    redraw: {
      propagate: string[]
    }
    refresh: {
      propagate: string[]
      alias: boolean
    }
    refreshState: object
    refreshPosition: {
      propagate: string[]
    }
    refreshShape: {
      propagate: string[]
    }
    refreshTemplate: object
    refreshGrid: object
    refreshText: object
    refreshElevation: object
  }
  /**
   * Get a Circular area of effect given a radius of effect
   * @param {number} distance    The radius of the circle in grid units
   * @returns {PIXI.Circle|PIXI.Polygon}
   */
  static getCircleShape(distance: number): PIXI.Circle | PIXI.Polygon
  /**
   * Get a Conical area of effect given a direction, angle, and distance
   * @param {number} distance     The radius of the cone in grid units
   * @param {number} direction    The direction of the cone in degrees
   * @param {number} angle        The angle of the cone in degrees
   * @returns {PIXI.Polygon|PIXI.Circle}
   */
  static getConeShape(distance: number, direction: number, angle: number): PIXI.Polygon | PIXI.Circle
  /**
   * Get a Rectangular area of effect given a width and height
   * @param {number} distance     The length of the diagonal in grid units
   * @param {number} direction    The direction of the diagonal in degrees
   * @returns {PIXI.Rectangle}
   */
  static getRectShape(distance: number, direction: number): PIXI.Rectangle
  /**
   * Get a rotated Rectangular area of effect given a width, height, and direction
   * @param {number} distance      The length of the ray in grid units
   * @param {number} direction     The direction of the ray in degrees
   * @param {number} width         The width of the ray in grid units
   * @returns {PIXI.Polygon}
   */
  static getRayShape(distance: number, direction: number, width: number): PIXI.Polygon
  /**
   * The geometry shape used for testing point intersection
   * @type {PIXI.Circle |PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle}
   */
  shape: PIXI.Circle | PIXI.Ellipse | PIXI.Polygon | PIXI.Rectangle | PIXI.RoundedRectangle
  /**
   * The tiling texture used for this template, if any
   * @type {PIXI.Texture|null}
   */
  texture: PIXI.Texture | null
  /**
   * The template graphics
   * @type {PIXI.Graphics}
   */
  template: PIXI.Graphics
  /**
   * The measurement ruler label
   * @type {PreciseText}
   */
  ruler: PreciseText
  /**
   * Internal property used to configure the control border thickness
   * @type {number}
   * @protected
   */
  protected _borderThickness: number
  /**
   * A convenient reference for whether the current User is the author of the MeasuredTemplate document.
   * @type {boolean}
   */
  get isAuthor(): boolean
  /**
   * Is this MeasuredTemplate currently visible on the Canvas?
   * @type {boolean}
   */
  get isVisible(): boolean
  /**
   * A unique identifier which is used to uniquely identify related objects like a template effect or grid highlight.
   * @type {string}
   */
  get highlightId(): string
  /** @override */
  override _draw(options: any): Promise<void>
  /** @override */
  override _destroy(options: any): void
  /** @override */
  override _applyRenderFlags(flags: any): void
  /**
   * Refresh the displayed state of the MeasuredTemplate.
   * This refresh occurs when the user interaction state changes.
   * @protected
   */
  protected _refreshState(): void
  zIndex: number | undefined
  alpha: number | undefined
  /**
   * Refresh the elevation of the control icon.
   * @protected
   */
  protected _refreshElevation(): void
  /** @override */
  override _getTargetAlpha(): 1 | 0.8
  /**
   * Refresh the position of the MeasuredTemplate
   * @protected
   */
  protected _refreshPosition(): void
  /**
   * Refresh the underlying geometric shape of the MeasuredTemplate.
   * @protected
   */
  protected _refreshShape(): void
  ray: Ray | undefined
  /**
   * Compute the geometry for the template using its document data.
   * Subclasses can override this method to take control over how different shapes are rendered.
   * @returns {PIXI.Circle|PIXI.Rectangle|PIXI.Polygon}
   * @protected
   */
  protected _computeShape(): PIXI.Circle | PIXI.Rectangle | PIXI.Polygon
  /**
   * Refresh the display of the template outline and shape.
   * Subclasses may override this method to take control over how the template is visually rendered.
   * @protected
   */
  protected _refreshTemplate(): void
  /**
   * Update the displayed ruler tooltip text
   * @protected
   */
  protected _refreshRulerText(): void
  /**
   * Highlight the grid squares which should be shown under the area of effect
   */
  highlightGrid(): void
  /**
   * Get the shape to highlight on a Scene which uses grid-less mode.
   * @returns {PIXI.Polygon|PIXI.Circle|PIXI.Rectangle}
   * @protected
   */
  protected _getGridHighlightShape(): PIXI.Polygon | PIXI.Circle | PIXI.Rectangle
  /**
   * Get an array of points which define top-left grid spaces to highlight for square or hexagonal grids.
   * @returns {Point[]}
   * @protected
   */
  protected _getGridHighlightPositions(): Point[]
  /**
   * Is the given point contained in the template's shape?
   * @param {Point} point    The point
   * @returns {boolean}      Is contained?
   */
  testPoint(point: Point): boolean
  /** @override */
  override rotate(angle: any, snap: any): Promise<this>
  /** @inheritDoc */
  _onUpdate(changed: any, options: any, userId: any): void
  /** @override */
  override _canControl(user: any, event: any): any
  /** @inheritdoc */
  _canHUD(user: any, event: any): boolean
  /** @inheritdoc */
  _canConfigure(user: any, event: any): boolean
  /** @override */
  override _canView(user: any, event: any): any
  /** @inheritdoc */
  _onClickRight(event: any): void
  /**
   * @deprecated since v12
   * @ignore
   */
  get borderColor(): any
  /**
   * @deprecated since v12
   * @ignore
   */
  get fillColor(): any
  /**
   * @deprecated since v12
   * @ignore
   */
  get owner(): boolean
  #private
}
import type { Point } from "@common/_types.mjs"
import PreciseText from "../containers/elements/precise-text.mjs"
import Ray from "../geometry/shapes/ray.mjs"
import PlaceableObject from "./placeable-object.mjs"
