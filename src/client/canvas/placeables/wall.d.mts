/**
 * A Wall is an implementation of PlaceableObject which represents a physical or visual barrier within the Scene.
 * Walls are used to restrict Token movement or visibility as well as to define the areas of effect for ambient lights
 * and sounds.
 * @category Canvas
 * @see {@link foundry.documents.WallDocument}
 * @see {@link foundry.canvas.layers.WallsLayer}
 */
export default class Wall extends PlaceableObject {
  /** @override */
  static override RENDER_FLAGS: {
    redraw: {
      propagate: string[]
    }
    refresh: {
      propagate: string[]
      alias: boolean
    }
    refreshState: {
      propagate: string[]
    }
    refreshLine: {
      propagate: string[]
    }
    refreshEndpoints: object
    refreshDirection: object
    refreshHighlight: object
  }
  /**
   * Adapt the width that the wall should be rendered based on the grid size.
   * @returns {number}
   */
  static #getLineWidth(): number
  constructor(document: any)
  /**
   * A reference the Door Control icon associated with this Wall, if any
   * @type {DoorControl|null}
   */
  doorControl: DoorControl | null
  /**
   * A set of optional DoorMesh instances used to render a door animation for this Wall.
   * @type {Set<DoorMesh>}
   */
  get doorMeshes(): Set<DoorMesh>
  /**
   * The line segment that represents the Wall.
   * @type {PIXI.Graphics}
   */
  line: PIXI.Graphics
  /**
   * The endpoints of the Wall line segment.
   * @type {PIXI.Graphics}
   */
  endpoints: PIXI.Graphics
  /**
   * The icon that indicates the direction of the Wall.
   * @type {PIXI.Sprite|null}
   */
  directionIcon: PIXI.Sprite | null
  /**
   * A Graphics object used to highlight this wall segment. Only used when the wall is controlled.
   * @type {PIXI.Graphics}
   */
  highlight: PIXI.Graphics
  /**
   * A convenience reference to the coordinates Array for the Wall endpoints, [x0,y0,x1,y1].
   * @type {number[]}
   */
  get coords(): number[]
  /**
   * The Edge instance which represents this Wall.
   * The Edge is re-created when data for the Wall changes.
   * @type {Edge}
   */
  get edge(): Edge
  /**
   * A boolean for whether this wall contains a door
   * @type {boolean}
   */
  get isDoor(): boolean
  /**
   * A boolean for whether the wall contains an open door
   * @returns {boolean}
   */
  get isOpen(): boolean
  /**
   * Return the coordinates [x,y] at the midpoint of the wall segment
   * @returns {Array<number>}
   */
  get midpoint(): Array<number>
  /**
   * Get the direction of effect for a directional Wall
   * @type {number|null}
   */
  get direction(): number | null
  /** @override */
  override getSnappedPosition(position: any): void
  /** @override */
  override _pasteObject(offset: any, options: any): any
  /**
   * Initialize the edge which represents this Wall.
   * @param {object} [options]              Options which modify how the edge is initialized
   * @param {boolean} [options.deleted]     Has the edge been deleted?
   */
  initializeEdge({ deleted }?: { deleted?: boolean | undefined }): void
  /**
   * This helper converts the wall segment to a Ray
   * @returns {Ray}    The wall in Ray representation
   */
  toRay(): Ray
  /** @override */
  override _draw(options: any): Promise<void>
  cursor: string | undefined
  /** @override */
  override clear(): this
  /** @inheritDoc */
  control({ chain, ...options }?: { chain?: boolean | undefined }): boolean
  /** @override */
  override _destroy(options: any): void
  /**
   * Test whether the Wall direction lies between two provided angles
   * This test is used for collision and vision checks against one-directional walls
   * @param {number} lower    The lower-bound limiting angle in radians
   * @param {number} upper    The upper-bound limiting angle in radians
   * @returns {boolean}
   */
  isDirectionBetweenAngles(lower: number, upper: number): boolean
  /**
   * A simple test for whether a Ray can intersect a directional wall
   * @param {Ray} ray     The ray to test
   * @returns {boolean}    Can an intersection occur?
   */
  canRayIntersect(ray: Ray): boolean
  /**
   * Get an Array of Wall objects which are linked by a common coordinate
   * @returns {Object}    An object reporting ids and endpoints of the linked segments
   */
  getLinkedSegments(): Object
  /** @override */
  override _applyRenderFlags(flags: any): void
  /**
   * Refresh the displayed position of the wall which refreshes when the wall coordinates or type changes.
   * @protected
   */
  protected _refreshLine(): void
  /**
   * Refresh the display of wall endpoints which refreshes when the wall position or state changes.
   * @protected
   */
  protected _refreshEndpoints(): void
  /**
   * Draw a directional prompt icon for one-way walls to illustrate their direction of effect.
   * @protected
   */
  protected _refreshDirection(): false | undefined
  /**
   * Refresh the appearance of the wall control highlight graphic. Occurs when wall control or position changes.
   * @protected
   */
  protected _refreshHighlight(): void
  /**
   * Refresh the displayed state of the Wall.
   * @protected
   */
  protected _refreshState(): void
  alpha: number | undefined
  zIndex: number | undefined
  /**
   * Given the properties of the wall - decide upon a color to render the wall for display on the WallsLayer
   * @returns {number}
   * @protected
   */
  protected _getWallColor(): number
  /** @inheritDoc */
  _onCreate(data: any, options: any, userId: any): void
  /** @inheritDoc */
  _onUpdate(changed: any, options: any, userId: any): void
  /** @inheritDoc */
  _onDelete(options: any, userId: any): void
  /**
   * Should this Wall have a corresponding DoorMesh?
   * @type {boolean}
   */
  get hasDoorMesh(): boolean
  /**
   * Create and add a DoorMesh to the PrimaryCanvasContainer.
   * @returns {Promise<void>}
   */
  createDoorMeshes(): Promise<void>
  /**
   * Remove and destroy a DoorMesh from the PrimaryCanvasContainer.
   */
  destroyDoorMeshes(): void
  /**
   * Play a door interaction sound.
   * This plays locally, each client independently applies this workflow.
   * @param {string} interaction      The door interaction: "open", "close", "lock", "unlock", or "test".
   * @protected
   */
  protected _playDoorSound(interaction: string): void
  /**
   * Customize the audible radius of sounds emitted by this wall, for example when a door opens or closes.
   * @type {number}
   */
  get soundRadius(): number
  /**
   * Draw a control icon that is used to manipulate the door's open/closed state
   * @returns {DoorControl}
   */
  createDoorControl(): DoorControl
  /**
   * Clear the door control if it exists.
   */
  clearDoorControl(): void
  /** @inheritdoc */
  _canControl(user: any, event: any): boolean
  /** @inheritdoc */
  _onHoverIn(event: any, options: any): boolean | void
  /** @inheritdoc */
  _onHoverOut(event: any): void
  /** @override */
  override _overlapsSelection(rectangle: any): boolean
  /** @inheritDoc */
  _onClickLeft(event: any): boolean | void
  /** @override */
  override _onClickLeft2(event: any): void
  /** @override */
  override _onClickRight2(event: any): void
  /** @inheritdoc */
  _onDragLeftStart(event: any): boolean | void
  /** @override */
  override _onDragLeftMove(event: any): void
  /** @override */
  override _prepareDragLeftDropUpdates(event: any):
    | {
        _id: any
        c: any
      }[]
    | null
  /**
   * @deprecated since v12
   * @ignore
   */
  get roof(): null
  /**
   * @deprecated since v12
   * @ignore
   */
  get hasActiveRoof(): boolean
  /**
   * @deprecated since v12
   * @ignore
   */
  identifyInteriorState(): void
  /**
   * @deprecated since v12
   * @ignore
   */
  orientPoint(point: any): number
  /**
   * @deprecated since v12
   * @ignore
   */
  applyThreshold(sourceType: any, sourceOrigin: any, externalRadius?: number): boolean
  /**
   * @deprecated since v12
   * @ignore
   */
  get vertices(): Edge
  /**
   * @deprecated since v12
   * @ignore
   */
  get A(): PIXI.Point
  /**
   * @deprecated since v12
   * @ignore
   */
  get B(): PIXI.Point
  #private
}
import DoorMesh from "../containers/elements/door-mesh.mjs"
import Edge from "../geometry/edges/edge.mjs"
import Ray from "../geometry/shapes/ray.mjs"
import PlaceableObject from "./placeable-object.mjs"
