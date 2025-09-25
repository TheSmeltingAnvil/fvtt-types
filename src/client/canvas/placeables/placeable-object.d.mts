declare const PlaceableObject_base: {
  new (...args: any[]): {
    renderFlags: foundry.canvas.interaction.RenderFlags
    applyRenderFlags(): void
  }
  RENDER_FLAGS: Record<string, Handlebars>
  RENDER_FLAG_PRIORITY: string
}
/**
 * @import DocumentSheetV2 from "../../applications/api/document-sheet.mjs";
 * @import BaseGrid from "@common/grid/base.mjs";
 * @import PlaceablesLayer from "../layers/base/placeables-layer.mjs";
 * @import ControlIcon from "../containers/elements/control-icon.mjs";
 * @import {Scene, User} from "../../documents/_module.mjs";
 */
/**
 * An Abstract Base Class which defines a Placeable Object which represents a Document placed on the Canvas
 * @category Canvas
 * @abstract
 */
export default class PlaceableObject extends PlaceableObject_base {
  /**
   * Identify the official Document name for this PlaceableObject class
   * @type {string}
   */
  static embeddedName: string
  /**
   * Return a reference to the configured subclass of this base PlaceableObject type.
   * @type {typeof PlaceableObject}
   */
  static get implementation(): typeof PlaceableObject
  /**
   * The flags declared here are required for all PlaceableObject subclasses to also support.
   * @override
   */
  static override RENDER_FLAGS: {
    redraw: {
      propagate: string[]
    }
    refresh: {
      propagate: string[]
      alias: boolean
    }
    refreshState: object
  }
  /**
   * Get the origin used for pasting the copied objects.
   * @param {PlaceableObject[]} copies    The objects that are copied
   * @returns {Point}                     The offset
   * @internal
   */
  static _getCopiedObjectsOrigin(copies: PlaceableObject[]): Point
  /**
   * Obtain the shifted position.
   * @param {-1|0|1} dx                 The number of grid units to shift along the X-axis
   * @param {-1|0|1} dy                 The number of grid units to shift along the Y-axis
   * @param {-1|0|1} dz                 The number of grid units to shift along the Z-axis
   * @param {ElevatedPoint} position    The unsnapped position
   * @param {ElevatedPoint} snapped     The snapped position
   * @param {BaseGrid} grid             The grid
   * @returns {ElevatedPoint}           The shifted target coordinates
   * @internal
   */
  static _getShiftedPosition(
    dx: -1 | 0 | 1,
    dy: -1 | 0 | 1,
    dz: -1 | 0 | 1,
    position: ElevatedPoint,
    snapped: ElevatedPoint,
    grid: BaseGrid,
  ): ElevatedPoint
  /**
   * @param {CanvasDocument} document      The Document instance represented by this object
   */
  constructor(document: CanvasDocument)
  /**
   * Retain a reference to the Scene within which this Placeable Object resides
   * @type {Scene}
   */
  scene: Scene
  /**
   * A reference to the Scene embedded Document instance which this object represents
   * @type {CanvasDocument}
   */
  document: CanvasDocument
  /**
   * A control icon for interacting with the object
   * @type {ControlIcon|null}
   */
  controlIcon: ControlIcon | null
  /**
   * A mouse interaction manager instance which handles mouse workflows related to this object.
   * @type {MouseInteractionManager}
   */
  mouseInteractionManager: MouseInteractionManager
  cullable: boolean
  /**
   * The object that this object is a preview of if this object is a preview.
   * @type {PlaceableObject|undefined}
   */
  get _original(): PlaceableObject | undefined
  /**
   * A convenient reference for whether the current User has full control over the document.
   * @type {boolean}
   */
  get isOwner(): boolean
  /**
   * The mouse interaction state of this placeable.
   * @type {MouseInteractionManager.INTERACTION_STATES|undefined}
   */
  get interactionState():
    | {
        NONE: number
        HOVER: number
        CLICKED: number
        GRABBED: number
        DRAG: number
        DROP: number
      }
    | undefined
  /**
   * The bounding box for this PlaceableObject.
   * This is required if the layer uses a Quadtree, otherwise it is optional
   * @type {PIXI.Rectangle}
   */
  get bounds(): PIXI.Rectangle
  /**
   * The central coordinate pair of the placeable object based on it's own width and height
   * @type {PIXI.Point}
   */
  get center(): PIXI.Point
  /**
   * The id of the corresponding Document which this PlaceableObject represents.
   * @type {string}
   */
  get id(): string
  /**
   * A unique identifier which is used to uniquely identify elements on the canvas related to this object.
   * @type {string}
   */
  get objectId(): string
  /**
   * The named identified for the source object associated with this PlaceableObject.
   * This differs from the objectId because the sourceId is the same for preview objects as for the original.
   * @type {string}
   */
  get sourceId(): string
  /**
   * Is this placeable object a temporary preview?
   * @type {boolean}
   */
  get isPreview(): boolean
  /**
   * Does there exist a temporary preview of this placeable object?
   * @type {boolean}
   */
  get hasPreview(): boolean
  /**
   * Provide a reference to the CanvasLayer which contains this PlaceableObject.
   * @type {PlaceablesLayer}
   */
  get layer(): PlaceablesLayer
  /**
   * A document sheet used to configure the properties of this Placeable Object or the Document it represents.
   * @type {DocumentSheetV2}
   */
  get sheet(): DocumentSheetV2
  /**
   * An indicator for whether the object is currently controlled
   * @type {boolean}
   */
  get controlled(): boolean
  set hover(state: boolean)
  /**
   * An indicator for whether the object is currently a hover target
   * @type {boolean}
   */
  get hover(): boolean
  /**
   * Is the HUD display active for this Placeable?
   * @returns {boolean}
   */
  get hasActiveHUD(): boolean
  /**
   * Get the snapped position for a given position or the current position.
   * @param {Point} [position]  The position to be used instead of the current position
   * @returns {Point}           The snapped position
   */
  getSnappedPosition(position?: Point): Point
  /**
   * Get the data of the copied object pasted at the position given by the offset.
   * Called by {@link foundry.canvas.layers.PlaceablesLayer#pasteObjects} for each copied object.
   * @param {Point} offset                      The offset relative from the current position to the destination
   * @param {object} [options]                  Options of {@link foundry.canvas.layers.PlaceablesLayer#pasteObjects}
   * @param {boolean} [options.hidden=false]    Paste in a hidden state, if applicable. Default is false.
   * @param {boolean} [options.snap=true]       Snap to the grid. Default is true.
   * @returns {object}                          The update data
   * @internal
   */
  _pasteObject(
    offset: Point,
    {
      hidden,
      snap,
    }?: {
      hidden?: boolean | undefined
      snap?: boolean | undefined
    },
  ): object
  /**
   * Apply render flags before a render occurs.
   * @param {Record<string, boolean>} flags  The render flags which must be applied
   * @protected
   */
  protected _applyRenderFlags(flags: Record<string, boolean>): void
  /**
   * Clear the display of the existing object.
   * @returns {this} The cleared object
   */
  clear(): this
  /** @inheritdoc */
  destroy(options: any): any
  /**
   * The inner _destroy method which may optionally be defined by each PlaceableObject subclass.
   * @param {object} [options]    Options passed to the initial destroy call
   * @protected
   */
  protected _destroy(options?: object): void
  /**
   * Draw the placeable object into its parent container
   * @param {object} [options]            Options which may modify the draw and refresh workflow
   * @returns {Promise<PlaceableObject>}  The drawn object
   */
  draw(options?: object): Promise<PlaceableObject>
  visible: any
  renderable: any
  /**
   * The inner _draw method which must be defined by each PlaceableObject subclass.
   * @param {object} options            Options which may modify the draw workflow
   * @abstract
   * @protected
   */
  protected _draw(options: object): Promise<void>
  /**
   * Execute a partial draw.
   * @param {() => Promise<void>} fn      The draw function
   * @returns {Promise<PlaceableObject>}  The drawn object
   * @internal
   */
  _partialDraw(fn: () => Promise<void>): Promise<PlaceableObject>
  /**
   * Refresh all incremental render flags for the PlaceableObject.
   * This method is no longer used by the core software but provided for backwards compatibility.
   * @param {object} [options]      Options which may modify the refresh workflow
   * @returns {PlaceableObject}     The refreshed object
   */
  refresh(options?: object): PlaceableObject
  /**
   * Update the quadtree.
   * @internal
   */
  _updateQuadtree(): void
  /**
   * Is this PlaceableObject within the selection rectangle?
   * @param {PIXI.Rectangle} rectangle    The selection rectangle
   * @protected
   */
  protected _overlapsSelection(rectangle: PIXI.Rectangle): any
  /**
   * Get the target opacity that should be used for a Placeable Object depending on its preview state.
   * @returns {number}
   * @protected
   */
  protected _getTargetAlpha(): number
  /**
   * Register pending canvas operations which should occur after a new PlaceableObject of this type is created
   * @param {object} data
   * @param {object} options
   * @param {string} userId
   * @protected
   */
  protected _onCreate(data: object, options: object, userId: string): void
  /**
   * Define additional steps taken when an existing placeable object of this type is updated with new data
   * @param {object} changed
   * @param {object} options
   * @param {string} userId
   * @protected
   */
  protected _onUpdate(changed: object, options: object, userId: string): void
  /**
   * Define additional steps taken when an existing placeable object of this type is deleted
   * @param {object} options
   * @param {string} userId
   * @protected
   */
  protected _onDelete(options: object, userId: string): void
  /**
   * Assume control over a PlaceableObject, flagging it as controlled and enabling downstream behaviors
   * @param {object} [options]                        Additional options which modify the control request
   * @param {boolean} [options.releaseOthers=true]    Release any other controlled objects first
   * @returns {boolean}                               A flag denoting whether control was successful
   */
  control(options?: { releaseOthers?: boolean | undefined }): boolean
  /**
   * Additional events that trigger once control of the object is established
   * @param {object} options    Optional parameters which apply for specific implementations
   * @protected
   */
  protected _onControl(options: object): void
  /**
   * Release control over a PlaceableObject, removing it from the controlled set
   * @param {object} options          Options which modify the releasing workflow
   * @returns {boolean}               A Boolean flag confirming the object was released.
   */
  release(options?: object): boolean
  /**
   * Additional events which trigger once control of the object is released
   * @param {object} options          Options which modify the releasing workflow
   * @protected
   */
  protected _onRelease(options: object): void
  /**
   * Clone the placeable object, returning a new object with identical attributes.
   * The returned object is non-interactive, and has no assigned ID.
   * If you plan to use it permanently you should call the create method.
   * @returns {PlaceableObject}  A new object with identical data
   */
  clone(): PlaceableObject
  _preview: any
  /**
   * Rotate the PlaceableObject to a certain angle of facing
   * @param {number} angle        The desired angle of rotation
   * @param {number} snap         Snap the angle of rotation to a certain target degree increment
   * @returns {Promise<PlaceableObject>} The rotated object
   */
  rotate(angle: number, snap: number): Promise<PlaceableObject>
  /**
   * Determine a new angle of rotation for a PlaceableObject either from an explicit angle or from a delta offset.
   * @param {object} options    An object which defines the rotation update parameters
   * @param {number} [options.angle]    An explicit angle, either this or delta must be provided
   * @param {number} [options.delta=0]  A relative angle delta, either this or the angle must be provided
   * @param {number} [options.snap=0]   A precision (in degrees) to which the resulting angle should snap. Default is 0.
   * @returns {number}          The new rotation angle for the object
   * @internal
   */
  _updateRotation({
    angle,
    delta,
    snap,
  }?: {
    angle?: number | undefined
    delta?: number | undefined
    snap?: number | undefined
  }): number
  /**
   * Obtain a shifted position for the Placeable Object.
   * @param {-1|0|1} dx         The number of grid units to shift along the X-axis
   * @param {-1|0|1} dy         The number of grid units to shift along the Y-axis
   * @param {-1|0|1} dz         The number of grid units to shift along the Z-axis
   * @returns {object}          The shifted target coordinates
   * @internal
   */
  _getShiftedPosition(dx: -1 | 0 | 1, dy: -1 | 0 | 1, dz: -1 | 0 | 1): object
  /**
   * Activate interactivity for the Placeable Object
   */
  activateListeners(): void
  /**
   * Create a standard MouseInteractionManager for the PlaceableObject
   * @protected
   */
  protected _createInteractionManager(): MouseInteractionManager
  /**
   * Test whether a user can perform a certain interaction regarding a Placeable Object
   * @param {User} user       The User performing the action. Must be equal to `game.user`.
   * @param {"hover"|"control"|"drag"|"view"|"configure"|"HUD"|"create"|"update"|"delete"} action
   *                          The named action being attempted
   * @returns {boolean}       Does the User have rights to perform the action?
   */
  can(
    user: User,
    action: "hover" | "control" | "drag" | "view" | "configure" | "HUD" | "create" | "update" | "delete",
  ): boolean
  /**
   * Can the User access the HUD for this Placeable Object?
   * @param {User} user                      The User performing the action. Always equal to `game.user`.
   * @param {PIXI.FederatedEvent} [event]    The pointer event if this function was called by
   *                                         {@link foundry.canvas.interaction.MouseInteractionManager}.
   * @returns {boolean}
   * @protected
   */
  protected _canHUD(user: User, event?: PIXI.FederatedEvent): boolean
  /**
   * Does the User have permission to configure the Placeable Object?
   * @param {User} user                      The User performing the action. Always equal to `game.user`.
   * @param {PIXI.FederatedEvent} [event]    The pointer event if this function was called by
   *                                         {@link foundry.canvas.interaction.MouseInteractionManager}.
   * @returns {boolean}
   * @protected
   */
  protected _canConfigure(user: User, event?: PIXI.FederatedEvent): boolean
  /**
   * Does the User have permission to control the Placeable Object?
   * @param {User} user                      The User performing the action. Always equal to `game.user`.
   * @param {PIXI.FederatedEvent} [event]    The pointer event if this function was called by
   *                                         {@link foundry.canvas.interaction.MouseInteractionManager}.
   * @returns {boolean}
   * @protected
   */
  protected _canControl(user: User, event?: PIXI.FederatedEvent): boolean
  /**
   * Does the User have permission to view details of the Placeable Object?
   * @param {User} user                      The User performing the action. Always equal to `game.user`.
   * @param {PIXI.FederatedEvent} [event]    The pointer event if this function was called by
   *                                         {@link foundry.canvas.interaction.MouseInteractionManager}.
   * @returns {boolean}
   * @protected
   */
  protected _canView(user: User, event?: PIXI.FederatedEvent): boolean
  /**
   * Does the User have permission to create the underlying Document?
   * @param {User} user                      The User performing the action. Always equal to `game.user`.
   * @param {PIXI.FederatedEvent} [event]    The pointer event if this function was called by
   *                                         {@link foundry.canvas.interaction.MouseInteractionManager}.
   * @returns {boolean}
   * @protected
   */
  protected _canCreate(user: User, event?: PIXI.FederatedEvent): boolean
  /**
   * Does the User have permission to drag this Placeable Object?
   * @param {User} user                      The User performing the action. Always equal to `game.user`.
   * @param {PIXI.FederatedEvent} [event]    The pointer event if this function was called by
   *                                         {@link foundry.canvas.interaction.MouseInteractionManager}.
   * @returns {boolean}
   * @protected
   */
  protected _canDrag(user: User, event?: PIXI.FederatedEvent): boolean
  /**
   * Does the User have permission to left-click drag this Placeable Object?
   * @param {User} user                      The User performing the action. Always equal to `game.user`.
   * @param {PIXI.FederatedEvent} event      The pointer event
   * @param {{notify: boolean}} [options]    Options, used internally
   * @returns {boolean}
   * @protected
   */
  protected _canDragLeftStart(
    user: User,
    event: PIXI.FederatedEvent,
    {
      notify,
    }?: {
      notify: boolean
    },
  ): boolean
  /**
   * Does the User have permission to hover on this Placeable Object?
   * @param {User} user                      The User performing the action. Always equal to `game.user`.
   * @param {PIXI.FederatedEvent} [event]    The pointer event if this function was called by
   *                                         {@link foundry.canvas.interaction.MouseInteractionManager}.
   * @returns {boolean}
   * @protected
   */
  protected _canHover(user: User, event?: PIXI.FederatedEvent): boolean
  /**
   * Does the User have permission to update the underlying Document?
   * @param {User} user                      The User performing the action. Always equal to `game.user`.
   * @param {PIXI.FederatedEvent} [event]    The pointer event if this function was called by
   *                                         {@link foundry.canvas.interaction.MouseInteractionManager}.
   * @returns {boolean}
   * @protected
   */
  protected _canUpdate(user: User, event?: PIXI.FederatedEvent): boolean
  /**
   * Does the User have permission to delete the underlying Document?
   * @param {User} user                      The User performing the action. Always equal to `game.user`.
   * @param {PIXI.FederatedEvent} [event]    The pointer event if this function was called by
   *                                         {@link foundry.canvas.interaction.MouseInteractionManager}.
   * @returns {boolean}
   * @protected
   */
  protected _canDelete(user: User, event?: PIXI.FederatedEvent): boolean
  /**
   * Actions that should be taken for this Placeable Object when a mouseover event occurs.
   * Hover events on PlaceableObject instances allow event propagation by default.
   * @param {PIXI.FederatedEvent} event                The triggering canvas interaction event
   * @param {object} options                           Options which customize event handling
   * @param {boolean} [options.hoverOutOthers=false]   Trigger hover-out behavior on sibling objects
   * @returns {boolean|void}
   * @protected
   */
  protected _onHoverIn(
    event: PIXI.FederatedEvent,
    {
      hoverOutOthers,
    }?: {
      hoverOutOthers?: boolean | undefined
    },
  ): boolean | void
  /**
   * Actions that should be taken for this Placeable Object when a mouseout event occurs
   * @param {PIXI.FederatedEvent} event  The triggering canvas interaction event
   * @protected
   */
  protected _onHoverOut(event: PIXI.FederatedEvent): void
  /**
   * Should the placeable propagate left click downstream?
   * @param {PIXI.FederatedEvent} event
   * @returns {boolean}
   * @protected
   */
  protected _propagateLeftClick(event: PIXI.FederatedEvent): boolean
  /**
   * Callback actions which occur on a single left-click event to assume control of the object
   * @param {PIXI.FederatedEvent} event  The triggering canvas interaction event
   * @returns {boolean|void}
   * @protected
   */
  protected _onClickLeft(event: PIXI.FederatedEvent): boolean | void
  /**
   * Callback actions which occur on a single left-unclick event to assume control of the object
   * @param {PIXI.FederatedEvent} event  The triggering canvas interaction event
   * @protected
   */
  protected _onUnclickLeft(event: PIXI.FederatedEvent): void
  /**
   * Callback actions which occur on a double left-click event to activate
   * @param {PIXI.FederatedEvent} event  The triggering canvas interaction event
   * @protected
   */
  protected _onClickLeft2(event: PIXI.FederatedEvent): void
  /**
   * Should the placeable propagate right click downstream?
   * @param {PIXI.FederatedEvent} event
   * @returns {boolean}
   * @protected
   */
  protected _propagateRightClick(event: PIXI.FederatedEvent): boolean
  /**
   * Callback actions which occur on a single right-click event to configure properties of the object
   * @param {PIXI.FederatedEvent} event  The triggering canvas interaction event
   * @protected
   */
  protected _onClickRight(event: PIXI.FederatedEvent): void
  /**
   * Callback actions which occur on a single right-unclick event
   * @param {PIXI.FederatedEvent} event  The triggering canvas interaction event
   * @protected
   */
  protected _onUnclickRight(event: PIXI.FederatedEvent): void
  /**
   * Callback actions which occur on a double right-click event to configure properties of the object
   * @param {PIXI.FederatedEvent} event  The triggering canvas interaction event
   * @protected
   */
  protected _onClickRight2(event: PIXI.FederatedEvent): void
  /**
   * Callback actions which occur when a mouse-drag action is first begun.
   * @param {PIXI.FederatedEvent} event  The triggering canvas interaction event
   * @returns {boolean|void}             If false, the start if prevented
   * @protected
   */
  protected _onDragLeftStart(event: PIXI.FederatedEvent): boolean | void
  /**
   * Initialize the left-drag operation.
   * @param {PIXI.FederatedEvent} event  The triggering canvas interaction event
   * @protected
   */
  protected _initializeDragLeft(event: PIXI.FederatedEvent): void
  /**
   * Begin a drag operation from the perspective of the preview clone.
   * Modify the appearance of both the clone (this) and the original (_original) object.
   * @protected
   */
  protected _onDragStart(): void
  /**
   * Conclude a drag operation from the perspective of the preview clone.
   * Modify the appearance of both the clone (this) and the original (_original) object.
   * @protected
   */
  protected _onDragEnd(): void
  /**
   * Callback actions which occur on a mouse-move operation.
   * @param {PIXI.FederatedEvent} event  The triggering canvas interaction event
   * @protected
   */
  protected _onDragLeftMove(event: PIXI.FederatedEvent): void
  /**
   * Callback actions which occur on a mouse-move operation.
   * @param {PIXI.FederatedEvent} event  The triggering canvas interaction event
   * @protected
   */
  protected _onDragLeftDrop(event: PIXI.FederatedEvent): false | undefined
  /**
   * Perform the database updates that should occur as the result of a drag-left-drop operation.
   * @param {PIXI.FederatedEvent} event The triggering canvas interaction event
   * @returns {[updates: object[], options?: object]|object[]|null}
   *   An array of database updates to perform for documents in this collection
   * @protected
   */
  protected _prepareDragLeftDropUpdates(
    event: PIXI.FederatedEvent,
  ): [updates: object[], options?: object] | object[] | null
  /**
   * Callback actions which occur on a mouse-move operation.
   * @param {PIXI.FederatedEvent} event  The triggering mouse click event
   * @returns {boolean|void}             If false, the cancellation is prevented
   * @protected
   */
  protected _onDragLeftCancel(event: PIXI.FederatedEvent): boolean | void
  /**
   * Finalize the left-drag operation.
   * @param {PIXI.FederatedEvent} event  The triggering mouse click event
   * @protected
   */
  protected _finalizeDragLeft(event: PIXI.FederatedEvent): void
  /**
   * Callback actions which occur on a right mouse-drag operation.
   * @param {PIXI.FederatedEvent} event  The triggering mouse click event
   * @returns {false|void} If false, the start if prevented
   * @protected
   */
  protected _onDragRightStart(event: PIXI.FederatedEvent): false | void
  /**
   * Initialize the right-drag operation.
   * @param {PIXI.FederatedEvent} event  The triggering canvas interaction event
   * @protected
   */
  protected _initializeDragRight(event: PIXI.FederatedEvent): void
  /**
   * Callback actions which occur on a right mouse-drag operation.
   * @param {PIXI.FederatedEvent} event  The triggering canvas interaction event
   * @protected
   */
  protected _onDragRightMove(event: PIXI.FederatedEvent): void
  /**
   * Callback actions which occur on a right mouse-drag operation.
   * @param {PIXI.FederatedEvent} event  The triggering canvas interaction event
   * @protected
   */
  protected _onDragRightDrop(event: PIXI.FederatedEvent): void
  /**
   * Callback actions which occur on a right mouse-drag operation.
   * @param {PIXI.FederatedEvent} event  The triggering mouse click event
   * @returns {boolean|void}             If false, the cancellation is prevented
   * @protected
   */
  protected _onDragRightCancel(event: PIXI.FederatedEvent): boolean | void
  /**
   * Finalize the right-drag operation.
   * @param {PIXI.FederatedEvent} event  The triggering mouse click event
   * @protected
   */
  protected _finalizeDragRight(event: PIXI.FederatedEvent): void
  /**
   * Callback action which occurs on a long press.
   * @param {PIXI.FederatedEvent}   event   The triggering canvas interaction event
   * @param {PIXI.Point}            origin  The local canvas coordinates of the mousepress.
   * @protected
   */
  protected _onLongPress(event: PIXI.FederatedEvent, origin: PIXI.Point): any
  #private
}
import type BaseGrid from "@common/grid/base.mjs"
import type DocumentSheetV2 from "../../applications/api/document-sheet.mjs"
import type { Scene, User } from "../../documents/_module.mjs"
import type ControlIcon from "../containers/elements/control-icon.mjs"
import MouseInteractionManager from "../interaction/mouse-handler.mjs"
import type PlaceablesLayer from "../layers/base/placeables-layer.mjs"
export {}
