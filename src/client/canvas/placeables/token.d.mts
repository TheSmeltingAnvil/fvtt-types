/**
 * @import {DeepReadonly, ElevatedPoint, Point} from "@common/_types.mjs";
 * @import {TokenDisplayMode} from "@common/constants.mjs";
 * @import {TokenDetectionMode, TokenDimensions, TokenPosition} from "@common/documents/_types.mjs";
 * @import {DatabaseUpdateOperation} from "@common/abstract/_types.mjs";
 * @import {GridMeasurePathResult} from "@common/grid/_types.mjs";
 * @import {
 *   TokenFindMovementPathWaypoint, TokenFindMovementPathJob, TokenDragContext, TokenConstrainMovementPathOptions,
 *   TokenFindMovementPathOptions, TokenAnimationContext, TokenAnimationData, TokenAnimationOptions, ReticuleOptions,
 *   TokenAnimationTransition, TokenConstrainMovementPathWaypoint, TokenPlannedMovement, TokenTerrainMovementWaypoint,
 *   TokenConstrainedMovementWaypoint, TokenGetTerrainMovementPathWaypoint
 * } from "../../_types.mjs";
 * @import {
 *   TokenMovementCostFunction, TokenMeasureMovementPathOptions, TokenMeasureMovementPathWaypoint,
 *   TokenMeasuredMovementWaypoint, TokenMovementWaypoint
 * } from "../../documents/_types.mjs";
 * @import {PointSourcePolygonType} from "../geometry/_types.mjs";
 * @import PolygonVertex from "../geometry/edges/vertex.mjs";
 * @import {CanvasAnimationAttribute} from "../animation/_types.mjs";
 * @import Region from "./region.mjs";
 * @import BaseTokenRuler from "./tokens/base-ruler.mjs";
 * @import AbstractBaseFilter from "../rendering/filters/base-filter.mjs";
 * @import {LightSourceData} from "../sources/base-light-source.mjs";
 * @import {VisionSourceData} from "../sources/point-vision-source.mjs";
 * @import {PointLightSource, PointVisionSource} from "../sources/_module.mjs";
 * @import {Actor, Combatant, User} from "../../documents/_module.mjs";
 */
/**
 * A Token is an implementation of PlaceableObject which represents an {@link foundry.documents.Actor} within a viewed
 * Scene on the game canvas.
 * @category Canvas
 * @see {@link foundry.documents.TokenDocument}
 * @see {@link foundry.canvas.layers.TokenLayer}
 */
export default class Token extends PlaceableObject {
  /** @override */
  static override RENDER_FLAGS: {
    redraw: {
      propagate: string[]
    }
    redrawEffects: object
    refresh: {
      propagate: string[]
      alias: boolean
    }
    refreshState: {
      propagate: string[]
    }
    refreshVisibility: object
    refreshTransform: {
      propagate: string[]
      alias: boolean
    }
    refreshPosition: object
    refreshRotation: object
    refreshSize: {
      propagate: string[]
    }
    refreshElevation: {
      propagate: string[]
    }
    refreshMesh: {
      propagate: string[]
    }
    refreshShader: object
    refreshShape: {
      propagate: string[]
    }
    refreshBorder: object
    refreshBars: object
    refreshEffects: object
    refreshNameplate: object
    refreshTarget: object
    refreshTooltip: object
    refreshRingVisuals: object
    refreshRuler: object
    refreshTurnMarker: object
    /** @deprecated since v12 Stable 4 */
    recoverFromPreview: {
      deprecated: {
        since: number
        until: number
      }
    }
  }
  /**
   * Used in {@link Token#_renderDetectionFilter}.
   * @type {[detectionFilter: PIXI.Filter|null]}
   */
  static #DETECTION_FILTER_ARRAY: [detectionFilter: PIXI.Filter | null]
  /**
   * Calculate the movement animation duration.
   * @param {Omit<TokenPosition, "elevation"|"shape">} from           The from-position
   * @param {Partial<Omit<TokenPosition, "elevation"|"shape">>} to    The (partial) to-position
   * @param {number} movementSpeed                                    The movement speed
   * @returns {number}                                                The movement animation duration
   */
  static #getMovementAnimationDuration(
    from: Omit<TokenPosition, "elevation" | "shape">,
    to: Partial<Omit<TokenPosition, "elevation" | "shape">>,
    movementSpeed: number,
  ): number
  /**
   * Configure the animation movement speed based on the given animation duration.
   * @param {DatabaseUpdateOperation} operation    The update operation
   * @param {TokenPosition} origin                 The origin
   * @param {TokenMovementWaypoint[]} waypoints    The candidante waypoints
   * @param {TokenDocument} document               The token document
   * @internal
   */
  static _configureAnimationMovementSpeed(
    operation: DatabaseUpdateOperation,
    origin: TokenPosition,
    waypoints: TokenMovementWaypoint[],
    document: TokenDocument,
  ): void
  /**
   * Handle the rotation changes for the animation, ensuring the shortest rotation path.
   * @param {DeepReadonly<TokenAnimationData>} from    The animation data to animate from
   * @param {Partial<TokenAnimationData>} changes      The animation data changes
   */
  static #handleRotationChanges(from: DeepReadonly<TokenAnimationData>, changes: Partial<TokenAnimationData>): void
  /**
   * Update the padding for both the source and target tokens to ensure they are square.
   * @param {PrimarySpriteMesh} sourceMesh  The source mesh
   * @param {PrimarySpriteMesh} targetMesh  The target mesh
   */
  static #updatePadding(sourceMesh: PrimarySpriteMesh, targetMesh: PrimarySpriteMesh): void
  /**
   * Get the drop position for the given token.
   * @param {TokenDocument} token
   * @param {{x: number; y: number; elevation?: number}} point
   * @param {object} [options]
   * @param {boolean} [options.snap=false]
   * @returns {TokenPosition}
   * @see {@link foundry.canvas.layers.TokenLayer#_onDropActorData}
   * @internal
   */
  static _getDropActorPosition(
    token: TokenDocument,
    point: {
      x: number
      y: number
      elevation?: number
    },
    {
      snap,
    }?: {
      snap?: boolean | undefined
    },
  ): TokenPosition
  /**
   * Update the position of the preview token.
   * @param {Token} preview                         The preview token
   * @param {Partial<TokenPosition>} destination    The destination
   */
  static #updateDragPreview(preview: Token, destination: Partial<TokenPosition>): void
  /**
   * Update the planned movement path.
   * @param {TokenDragContext} context    The drag context
   */
  static #recalculatePlannedMovementPath(context: TokenDragContext): void
  /**
   *
   * @param {TokenDocument} document   The TokenDocument that this Token represents
   */
  constructor(document: TokenDocument)
  /**
   * The shape of this token.
   * @type {PIXI.Rectangle|PIXI.Polygon|PIXI.Circle|PIXI.Ellipse}
   */
  shape: PIXI.Rectangle | PIXI.Polygon | PIXI.Circle | PIXI.Ellipse
  /**
   * Defines the filter to use for detection.
   * @type {PIXI.Filter|null} filter
   */
  detectionFilter: PIXI.Filter | null
  /**
   * A Graphics instance which renders the border frame for this Token inside the GridLayer.
   * @type {PIXI.Graphics}
   */
  border: PIXI.Graphics
  /**
   * The effects icons of temporary ActiveEffects that are applied to the Actor of this Token.
   * @type {PIXI.Container}
   */
  effects: PIXI.Container
  /**
   * The attribute bars of this Token.
   * @type {PIXI.Container}
   */
  bars: PIXI.Container
  /**
   * The tooltip text of this Token, which contains its elevation.
   * @type {PreciseText}
   */
  tooltip: PreciseText
  /**
   * The target arrows marker, which indicates that this Token is targeted by this User.
   * @type {PIXI.Graphics}
   */
  targetArrows: PIXI.Graphics
  /**
   * The target pips marker, which indicates that this Token is targeted by other User(s).
   * @type {PIXI.Graphics}
   */
  targetPips: PIXI.Graphics
  /**
   * The nameplate of this Token, which displays its name.
   * @type {PreciseText}
   */
  nameplate: PreciseText
  /**
   * The ruler of this Token.
   * @type {BaseTokenRuler|null}
   */
  ruler: BaseTokenRuler | null
  /**
   * The ruler data.
   * @type {{[userId: string]: TokenPlannedMovement}}
   * @protected
   */
  protected _plannedMovement: {
    [userId: string]: TokenPlannedMovement
  }
  /**
   * Track the set of User documents which are currently targeting this Token
   * @type {Set<User>}
   */
  targeted: Set<User>
  /**
   * A reference to the SpriteMesh which displays this Token in the PrimaryCanvasGroup.
   * @type {PrimarySpriteMesh}
   */
  mesh: PrimarySpriteMesh
  /**
   * Renders the mesh of this Token with ERASE blending in the Token.
   * @type {PIXI.Container}
   */
  voidMesh: PIXI.Container
  /**
   * Renders the mesh of with the detection filter.
   * @type {PIXI.Container}
   */
  detectionFilterMesh: PIXI.Container
  /**
   * The texture of this Token, which is used by its mesh.
   * @type {PIXI.Texture}
   */
  texture: PIXI.Texture
  /**
   * A reference to the VisionSource object which defines this vision source area of effect.
   * This is undefined if the Token does not provide an active source of vision.
   * @type {PointVisionSource}
   */
  vision: PointVisionSource
  /**
   * A reference to the LightSource object which defines this light source area of effect.
   * This is undefined if the Token does not provide an active source of light.
   * @type {PointLightSource}
   */
  light: PointLightSource
  /**
   * The Turn Marker of this Token.
   * Only a subset of Token objects have a turn marker at any given time.
   * @type {TokenTurnMarker|null}
   */
  turnMarker: TokenTurnMarker | null
  /**
   * The current animations of this Token.
   * @type {Map<string, TokenAnimationContext>}
   */
  get animationContexts(): Map<string, TokenAnimationContext>
  /**
   * The general animation name used for this Token.
   * @type {string}
   */
  get animationName(): string
  /**
   * The animation name used to animate this Token's movement.
   * @type {string}
   */
  get movementAnimationName(): string
  /**
   * The promise of the current movement animation chain of this Token
   * or null if there isn't a movement animation in progress.
   * @type {Promise<void>|null}
   */
  get movementAnimationPromise(): Promise<void> | null
  /**
   * Should the ruler of this Token be visible?
   * @type {boolean}
   */
  get showRuler(): boolean
  /**
   * Prevent keyboard movement of this Token?
   * @type {boolean}
   * @internal
   */
  _preventKeyboardMovement: boolean
  /**
   * A TokenRing instance which is used if this Token applies a dynamic ring.
   * This property is null if the Token does not use a dynamic ring.
   * @type {TokenRing|null}
   */
  get ring(): TokenRing | null
  /**
   * A convenience boolean to test whether the Token is using a dynamic ring.
   * @type {boolean}
   */
  get hasDynamicRing(): boolean
  /**
   * A convenient reference to the Actor object associated with the Token embedded document.
   * @returns {Actor|null}
   */
  get actor(): Actor | null
  /**
   * A boolean flag for whether the current game User has observer permission for the Token
   * @type {boolean}
   */
  get observer(): boolean
  /**
   * Convenience access to the token's nameplate string
   * @type {string}
   */
  get name(): string
  /**
   * Translate the token's grid width into a pixel width based on the canvas size
   * @type {number}
   */
  get w(): number
  /**
   * Translate the token's grid height into a pixel height based on the canvas size
   * @type {number}
   */
  get h(): number
  /**
   * The Token's central position, adjusted in each direction by one or zero pixels to offset it relative to walls.
   * @overload
   * @param {ElevatedPoint} point The center point with elevation.
   * @param {object} [options]
   * @param {number} [options.offsetX] The x-offset.
   * @param {number} [options.offsetY] The y-offset.
   * @returns {ElevatedPoint} The adjusted center point.
   */
  getMovementAdjustedPoint(
    point: ElevatedPoint,
    options?:
      | {
          offsetX?: number | undefined
          offsetY?: number | undefined
        }
      | undefined,
  ): ElevatedPoint
  /**
   * @overload
   * @param {Point} point The center point.
   * @param {object} [options]
   * @param {number} [options.offsetX] The x-offset.
   * @param {number} [options.offsetY] The y-offset.
   * @returns {Point} The adjusted center point.
   */
  getMovementAdjustedPoint(
    point: Point,
    options?:
      | {
          offsetX?: number | undefined
          offsetY?: number | undefined
        }
      | undefined,
  ): Point
  /**
   * The HTML source element for the primary Tile texture
   * @type {PIXI.ImageSource|null}
   */
  get sourceElement(): PIXI.ImageSource | null
  /**
   * Does this Tile depict an animated video texture?
   * @type {boolean}
   */
  get isVideo(): boolean
  /**
   * An indicator for whether or not this token is currently involved in the active combat encounter.
   * @type {boolean}
   */
  get inCombat(): boolean
  /**
   * Return a reference to a Combatant that represents this Token, if one is present in the current encounter.
   * @type {Combatant|null}
   */
  get combatant(): Combatant | null
  /**
   * An indicator for whether the Token is currently targeted by the active game User
   * @type {boolean}
   */
  get isTargeted(): boolean
  /**
   * Is this Token currently being dragged?
   * @type {boolean}
   */
  get isDragged(): boolean
  /**
   * Return a reference to the detection modes array.
   * @type {TokenDetectionMode[]}
   */
  get detectionModes(): TokenDetectionMode[]
  /**
   * Determine whether the Token is visible to the calling user's perspective.
   * Hidden Tokens are only displayed to GM Users.
   * Non-hidden Tokens are always visible if Token Vision is not required.
   * Controlled tokens are always visible.
   * All Tokens are visible to a GM user if no Token is controlled.
   *
   * @see {CanvasVisibility#testVisibility}
   * @type {boolean}
   */
  get isVisible(): boolean
  /**
   * Test whether the Token has sight (or blindness) at any radius
   * @type {boolean}
   */
  get hasSight(): boolean
  /**
   * Does this Token actively emit light given its properties and the current darkness level of the Scene?
   * @returns {boolean}
   * @protected
   */
  protected _isLightSource(): boolean
  /**
   * Does this token actively emit darkness given its properties and the current darkness level of the Scene?
   * @type {boolean}
   */
  get emitsDarkness(): boolean
  /**
   * Does this token actively emit light given its properties and the current darkness level of the Scene?
   * @type {boolean}
   */
  get emitsLight(): boolean
  /**
   * Test whether the Token uses a limited angle of vision or light emission.
   * @type {boolean}
   */
  get hasLimitedSourceAngle(): boolean
  /**
   * Translate the token's dim light distance in units into a radius in pixels.
   * @type {number}
   */
  get dimRadius(): number
  /**
   * Translate the token's bright light distance in units into a radius in pixels.
   * @type {number}
   */
  get brightRadius(): number
  /**
   * The maximum radius in pixels of the light field
   * @type {number}
   */
  get radius(): number
  /**
   * The range of this token's light perception in pixels.
   * @type {number}
   */
  get lightPerceptionRange(): number
  /**
   * Translate the token's vision range in units into a radius in pixels.
   * @type {number}
   */
  get sightRange(): number
  /**
   * Translate the token's maximum vision range that takes into account lights.
   * @type {number}
   */
  get optimalSightRange(): number
  /**
   * Update the light and vision source objects associated with this Token.
   * @param {object} [options={}]       Options which configure how perception sources are updated
   * @param {boolean} [options.deleted=false]       Indicate that this light and vision source has been deleted
   */
  initializeSources({ deleted }?: { deleted?: boolean | undefined }): void
  /**
   * Update an emitted light source associated with this Token.
   * @param {object} [options={}]
   * @param {boolean} [options.deleted]    Indicate that this light source has been deleted.
   */
  initializeLightSource({ deleted }?: { deleted?: boolean | undefined }): void
  /**
   * Get the light source data.
   * @returns {LightSourceData}
   * @protected
   */
  protected _getLightSourceData(): LightSourceData
  /**
   * Update the VisionSource instance associated with this Token.
   * @param {object} [options]        Options which affect how the vision source is updated
   * @param {boolean} [options.deleted]   Indicate that this vision source has been deleted.
   */
  initializeVisionSource({ deleted }?: { deleted?: boolean | undefined }): void
  /**
   * Returns a record of blinding state.
   * @returns {Record<string, boolean>}
   * @protected
   */
  protected _getVisionBlindedStates(): Record<string, boolean>
  /**
   * Get the vision source data.
   * @returns {VisionSourceData}
   * @protected
   */
  protected _getVisionSourceData(): VisionSourceData
  /**
   * Test whether this Token is a viable vision source for the current User.
   * @returns {boolean}
   * @protected
   */
  protected _isVisionSource(): boolean
  /**
   * Render the bound mesh detection filter.
   * Note: this method does not verify that the detection filter exists.
   * @param {PIXI.Renderer} renderer
   * @protected
   */
  protected _renderDetectionFilter(renderer: PIXI.Renderer): void
  /** @override */
  override clear(): this
  /** @inheritdoc */
  _destroy(options: any): void
  /** @override */
  override _draw(options: any): Promise<void>
  sortableChildren: boolean | undefined
  /**
   * Create the BaseTokenRuler instance for this Token, if any.
   * This function is called when the Token is drawn for the first time.
   * @returns {BaseTokenRuler|null}
   * @protected
   */
  protected _initializeRuler(): BaseTokenRuler | null
  /** @override */
  override _applyRenderFlags(flags: any): void
  /**
   * Refresh the token ring visuals if necessary.
   * @protected
   */
  protected _refreshRingVisuals(): void
  /**
   * Refresh the visibility.
   * @protected
   */
  protected _refreshVisibility(): void
  /**
   * Refresh aspects of the user interaction state.
   * For example the border, nameplate, or bars may be shown on Hover or on Control.
   * @protected
   */
  protected _refreshState(): void
  alpha: number | undefined
  cursor: string | null | undefined
  zIndex: number | undefined
  /**
   * Resize mesh and handle scale adjustment.
   * @protected
   */
  protected _refreshMeshSizeAndScale(): void
  /**
   * Refresh the size.
   * @protected
   */
  protected _refreshSize(): void
  /**
   * Refresh the token mesh.
   * @protected
   */
  protected _refreshMesh(): void
  /**
   * Refresh the shape.
   * @protected
   */
  protected _refreshShape(): void
  hitArea: any
  /**
   * Refresh the rotation.
   * @protected
   */
  protected _refreshRotation(): void
  /**
   * Refresh the position.
   * @protected
   */
  protected _refreshPosition(): void
  /**
   * Refresh the elevation
   * @protected
   */
  protected _refreshElevation(): void
  /**
   * Refresh the tooltip.
   * @protected
   */
  protected _refreshTooltip(): void
  /**
   * Refresh the text content, position, and visibility of the Token nameplate.
   * @protected
   */
  protected _refreshNameplate(): void
  /**
   * Refresh the token mesh shader.
   * @protected
   */
  protected _refreshShader(): void
  /**
   * Refresh the border.
   * @protected
   */
  protected _refreshBorder(): void
  /**
   * Get the hex color that should be used to render the Token border
   * @returns {number}          The hex color used to depict the border color
   * @protected
   */
  protected _getBorderColor(): number
  /**
   * Get the Color used to represent the disposition of this Token.
   * @returns {number}
   */
  getDispositionColor(): number
  /**
   * Refresh the target indicators for the Token.
   * Draw both target arrows for the primary User and indicator pips for other Users targeting the same Token.
   * @protected
   */
  protected _refreshTarget(): void
  /**
   * Draw the targeting arrows around this token.
   * @param {ReticuleOptions} [reticule]  Additional parameters to configure how the targeting reticule is drawn.
   * @protected
   */
  protected _drawTargetArrows({
    margin: m,
    alpha,
    size,
    color,
    border: { width, color: lineColor },
  }?: ReticuleOptions): void
  /**
   * Draw the targeting pips around this token.
   * @protected
   */
  protected _drawTargetPips(): void
  /**
   * Refresh the display of Token attribute bars, rendering its latest resource data.
   * If the bar attribute is valid (has a value and max), draw the bar. Otherwise hide it.
   */
  drawBars(): void
  /**
   * Draw a single resource bar, given provided data
   * @param {number} number       The Bar number
   * @param {PIXI.Graphics} bar   The Bar container
   * @param {Object} data         Resource data for this bar
   * @protected
   */
  protected _drawBar(number: number, bar: PIXI.Graphics, data: Object): boolean
  /**
   * Return the text which should be displayed in a token's tooltip field
   * @returns {string}
   * @protected
   */
  protected _getTooltipText(): string
  /**
   * Get the text style that should be used for this Token's tooltip.
   * @returns {PIXI.TextStyle}
   * @protected
   */
  protected _getTextStyle(): PIXI.TextStyle
  /**
   * Draw the effect icons for ActiveEffect documents which apply to the Token's Actor.
   */
  drawEffects(): Promise<PlaceableObject>
  /**
   * Draw the effect icons for ActiveEffect documents which apply to the Token's Actor.
   * Called by {@link Token#drawEffects}.
   * @protected
   */
  protected _drawEffects(): Promise<void>
  /**
   * Draw a status effect icon
   * @param {string} src
   * @param {PIXI.ColorSource|null} tint
   * @returns {Promise<PIXI.Sprite|undefined>}
   * @protected
   */
  protected _drawEffect(src: string, tint: PIXI.ColorSource | null): Promise<PIXI.Sprite | undefined>
  /**
   * Draw the overlay effect icon
   * @param {string} src
   * @param {number|null} tint
   * @returns {Promise<PIXI.Sprite>}
   * @protected
   */
  protected _drawOverlay(src: string, tint: number | null): Promise<PIXI.Sprite>
  /**
   * Refresh the display of status effects, adjusting their position for the token width and height.
   * @protected
   */
  protected _refreshEffects(): void
  /**
   * Refresh presentation of the Token's combat turn marker, if any.
   * @protected
   */
  protected _refreshTurnMarker(): void
  /**
   * Refresh the display of the ruler.
   * @protected
   */
  protected _refreshRuler(): void
  /**
   * Helper method to determine whether a token attribute is viewable under a certain mode
   * @param {TokenDisplayMode} mode   The mode from {@link CONST.TOKEN_DISPLAY_MODES}
   * @returns {boolean}                  Is the attribute viewable?
   * @protected
   */
  protected _canViewMode(mode: TokenDisplayMode): boolean
  /**
   * Override ring colors for this particular Token instance.
   * @returns {{[ring]: Color, [background]: Color}}
   */
  getRingColors(): {
    [ring]: Color
    [background]: Color
  }
  /**
   * Apply additional ring effects for this particular Token instance.
   * Effects are returned as an array of integers in {@link foundry.canvas.placeables.tokens.TokenRing.effects}.
   * @returns {number[]}
   */
  getRingEffects(): number[]
  /**
   * Get the animation data for the current state of the document.
   * @returns {TokenAnimationData}         The target animation data object
   * @protected
   */
  protected _getAnimationData(): TokenAnimationData
  /**
   * Animate from the old to the new state of this Token.
   * @param {Partial<TokenAnimationData>} to      The animation data to animate to
   * @param {TokenAnimationOptions} [options]     The options that configure the animation behavior
   * @returns {Promise<void>}                     A promise which resolves once the animation has finished or stopped
   */
  animate(to: Partial<TokenAnimationData>, options?: TokenAnimationOptions): Promise<void>
  /**
   * Get the duration of the animation.
   * @param {DeepReadonly<TokenAnimationData>} from           The animation data to animate from
   * @param {DeepReadonly<Partial<TokenAnimationData>>} to    The animation data to animate to
   * @param {TokenAnimationOptions} options                   The options that configure the animation behavior
   * @returns {number}                                        The duration of the animation in milliseconds
   * @protected
   */
  protected _getAnimationDuration(
    from: DeepReadonly<TokenAnimationData>,
    to: DeepReadonly<Partial<TokenAnimationData>>,
    options: TokenAnimationOptions,
  ): number
  /**
   * Get the base movement speed for the animation in grid size per second.
   * The default implementation returns `CONFIG.Token.movement.defaultSpeed`.
   * @param {TokenAnimationOptions} options                   The options that configure the animation behavior
   * @returns {number}                                        The base movement speed in grid size per second
   * @protected
   */
  protected _getAnimationMovementSpeed(options: TokenAnimationOptions): number
  /**
   * Modify the base movement speed of the animation.
   * Divides by the terrain difficulty, if present, by default.
   * @param {number} speed                                    The base movement speed in grid size per second
   * @param {TokenAnimationOptions} options                   The options that configure the animation behavior
   * @returns {number}                                        The modified movement speed in grid size per second
   * @protected
   */
  protected _modifyAnimationMovementSpeed(speed: number, options: TokenAnimationOptions): number
  /**
   * Get the rotation speed for the animation in 60 degrees per second.
   * Returns the movement speed by default.
   * @param {TokenAnimationOptions} options                   The options that configure the animation behavior
   * @returns {number}                                        The rotation speed in 60 degrees per second
   * @protected
   */
  protected _getAnimationRotationSpeed(options: TokenAnimationOptions): number
  /**
   * Does this Token require rotation changes to be animated?
   * If false is returned, the rotation speed is set to infinity.
   * @returns {boolean}
   * @protected
   */
  protected _requiresRotationAnimation(): boolean
  /**
   * Called each animation frame.
   * @param {Partial<TokenAnimationData>} changed    The animation data that changed
   * @param {TokenAnimationContext} context          The animation context
   * @protected
   */
  protected _onAnimationUpdate(changed: Partial<TokenAnimationData>, context: TokenAnimationContext): void
  /**
   * Terminate the animations of this particular Token, if exists.
   * @param {object} [options]                Additional options.
   * @param {boolean} [options.reset=true]    Reset the TokenDocument?
   */
  stopAnimation({ reset }?: { reset?: boolean | undefined }): void
  /**
   * Get the texture transition type.
   * Returns `"fade"` by default.
   * @param {TokenAnimationOptions} options    The options that configure the animation behavior
   * @returns {TokenAnimationTransition}       The transition type
   * @protected
   */
  protected _getAnimationTransition(options: TokenAnimationOptions): TokenAnimationTransition
  /**
   * Prepare the animation data changes: performs special handling required for animating rotation.
   * @param {DeepReadonly<TokenAnimationData>} from             The animation data to animate from
   * @param {Partial<TokenAnimationData>} changes               The animation data changes
   * @param {Omit<TokenAnimationContext, "promise">} context    The animation context
   * @param {TokenAnimationOptions} options                     The options that configure the animation behavior
   * @returns {CanvasAnimationAttribute[]}                      The animation attributes
   * @protected
   */
  protected _prepareAnimation(
    from: DeepReadonly<TokenAnimationData>,
    changes: Partial<TokenAnimationData>,
    context: Omit<TokenAnimationContext, "promise">,
    options: TokenAnimationOptions,
  ): CanvasAnimationAttribute[]
  /**
   * Check for collision when attempting a move to a new position.
   *
   * The result of this function must not be affected by the animation of this Token.
   * @param {Point|ElevatedPoint} destination         The central destination point of the attempted movement.
   *                                                  The elevation defaults to the elevation of the origin.
   * @param {object} [options={}]                     Additional options forwarded to PointSourcePolygon.testCollision
   * @param {Point|ElevatedPoint} [options.origin]    The origin to be used instead of the current origin. The elevation
   *                                                  defaults to the current elevation.
   * @param {PointSourcePolygonType} [options.type="move"]    The collision type
   * @param {"any"|"all"|"closest"} [options.mode="any"]      The collision mode to test: "any", "all", or "closest"
   * @returns {boolean|PolygonVertex|PolygonVertex[]|null}    The collision result depends on the mode of the test:
   *                                                * any: returns a boolean for whether any collision occurred
   *                                                * all: returns a sorted array of PolygonVertex instances
   *                                                * closest: returns a PolygonVertex instance or null
   */
  checkCollision(
    destination: Point | ElevatedPoint,
    {
      origin,
      type,
      mode,
    }?: {
      origin?: Point | ElevatedPoint | undefined
      type?: PointSourcePolygonType | undefined
      mode?: "any" | "closest" | "all" | undefined
    },
  ): boolean | PolygonVertex | PolygonVertex[] | null
  /**
   * Get the shape of this Token.
   * @returns {PIXI.Rectangle|PIXI.Polygon|PIXI.Circle|PIXI.Ellipse}
   */
  getShape(): PIXI.Rectangle | PIXI.Polygon | PIXI.Circle | PIXI.Ellipse
  /**
   * Get the center point of the Token.
   * @param {Point} [position]  The position in pixels
   * @returns {Point}           The center point
   */
  getCenterPoint(position?: Point): Point
  /** @override */
  override getSnappedPosition(position: any): {
    x: any
    y: any
  }
  /** @override */
  override _pasteObject(
    offset: any,
    {
      hidden,
      snap,
    }?: {
      hidden?: boolean | undefined
      snap?: boolean | undefined
    },
  ): any
  /**
   * Measure the movement path for this Token.
   * @param {TokenMeasureMovementPathWaypoint[]} waypoints    The waypoints of movement
   * @param {TokenMeasureMovementPathOptions} [options]       Additional options that affect cost calculations
   *                                                          (passed to {@link Token#_getMovementCostFunction})
   * @returns {GridMeasurePathResult}
   */
  measureMovementPath(
    waypoints: TokenMeasureMovementPathWaypoint[],
    options?: TokenMeasureMovementPathOptions,
  ): GridMeasurePathResult
  /**
   * Create the movement cost function for this Token.
   * In square and hexagonal grids it calculates the cost for single grid space move between two grid space offsets.
   * For tokens that occupy more than one grid space the cost of movement is calculated as the median of all individual
   * grid space moves unless the cost of any of these is infinite, in which case total cost is always infinite.
   * In gridless grids the `from` and `to` parameters of the cost function are top-left offsets.
   * If the movement cost function is undefined, the cost equals the distance moved.
   * @param {TokenMeasureMovementPathOptions} [options]    Additional options that affect cost calculations
   * @returns {TokenMovementCostFunction|void}
   * @protected
   */
  protected _getMovementCostFunction(options?: TokenMeasureMovementPathOptions): TokenMovementCostFunction | void
  /**
   * Constrain the given movement path.
   *
   * The result of this function must not be affected by the animation of this Token.
   * @param {TokenConstrainMovementPathWaypoint[]} waypoints    The waypoints of movement
   * @param {TokenConstrainMovementPathOptions} [options]       Additional options
   * @returns {[constrainedPath: TokenConstrainedMovementWaypoint[], wasConstrained: boolean]}
   *   The (constrained) path of movement and a boolean that is true if and only if the path was constrained.
   *   If it wasn't constrained, then a copy of the path of all given waypoints with all default values filled in
   *   is returned.
   */
  constrainMovementPath(
    waypoints: TokenConstrainMovementPathWaypoint[],
    { preview, ignoreWalls, ignoreCost, history }?: TokenConstrainMovementPathOptions,
  ): [constrainedPath: TokenConstrainedMovementWaypoint[], wasConstrained: boolean]
  /**
   * Find a movement path through the waypoints.
   * The path may not necessarily be one with the least cost.
   * The path returned may be partial, i.e. it doesn't go through all waypoints, but must always start with the first
   * waypoints unless the waypoints are empty, in which case an empty path is returned.
   *
   * The result of this function must not be affected by the animation of this Token.
   * @param {TokenFindMovementPathWaypoint[]} waypoints    The waypoints of movement
   * @param {TokenFindMovementPathOptions} [options]       Additional options
   * @returns {TokenFindMovementPathJob}                   The job of the movement pathfinder
   */
  findMovementPath(
    waypoints: TokenFindMovementPathWaypoint[],
    options?: TokenFindMovementPathOptions,
  ): TokenFindMovementPathJob
  /**
   * This function adds intermediate waypoints pre/post enter and exit for a {@link Region} if the Region
   * has at least one Behavior that could affect the movement, which is determined by
   * {@link foundry.data.regionBehaviors.RegionBehaviorType#_getTerrainEffects}.
   * For each segment of the movement path the terrain data is created from all behaviors that
   * could affect the movement of this Token with {@link CONFIG.Token.movement.TerrainData.resolveTerrainEffects}.
   * This terrain data is included in the returned regionalized movement path.
   * This terrain data may then be used in {@link Token#_getMovementCostFunction} and
   * {@link Token#constrainMovementPath}.
   * @param {TokenGetTerrainMovementPathWaypoint[]} waypoints    The waypoints of movement
   * @param {object} [options]                                   Additional options
   * @param {boolean} [options.preview=false]                    Is preview?
   * @returns {TokenTerrainMovementWaypoint[]}                   The movement path with terrain data
   */
  createTerrainMovementPath(
    waypoints: TokenGetTerrainMovementPathWaypoint[],
    {
      preview,
    }?: {
      preview?: boolean | undefined
    },
  ): TokenTerrainMovementWaypoint[]
  /**
   * Set this Token as an active target for the current game User.
   * @param {boolean} targeted                        Is the Token now targeted?
   * @param {object} [options={}]                     Additional option which modify how targets are acquired
   * @param {boolean} [options.releaseOthers=true]    Release other active targets?
   */
  setTarget(
    targeted?: boolean,
    {
      releaseOthers,
    }?: {
      releaseOthers?: boolean | undefined
    },
  ): void
  /**
   * Handle updating the targeting state of this Token for a particular User.
   * @param {boolean} targeted    Is the token now targeted?
   * @param {User} user           The user whose targeting state has changed
   * @internal
   */
  _updateTarget(targeted: boolean, user: User): void
  /**
   * The external radius of the token in pixels.
   * @type {number}
   */
  get externalRadius(): number
  /**
   * A generic transformation to turn a certain number of grid units into a radius in canvas pixels.
   * This function adds additional padding to the light radius equal to the external radius of the token.
   * This causes light to be measured from the outer token edge, rather than from the center-point.
   * @param {number} units  The radius in grid units
   * @returns {number}      The radius in pixels
   */
  getLightRadius(units: number): number
  /**
   * Obtain a shifted waypoint for the Token. The returned waypoint must move the Token to a snapped position.
   * @param {-1|0|1} dx                   The number of grid units to shift along the X-axis
   * @param {-1|0|1} dy                   The number of grid units to shift along the Y-axis
   * @param {-1|0|1} dz                   The number of grid units to shift along the Z-axis
   * @returns {Partial<TokenPosition>}    The shifted target waypoint (snapped if square/hexagonal grid)
   * @override
   * @internal
   */
  override _getShiftedPosition(dx: -1 | 0 | 1, dy: -1 | 0 | 1, dz: -1 | 0 | 1): Partial<TokenPosition>
  /**
   * Get the movement action in {@link CONFIG.Token.movement | CONFIG.Token.movement.actions} to be used for keyboard
   * movement.
   * The default implementation returns `this.document.movementAction`.
   * @returns {string}
   * @protected
   */
  protected _getKeyboardMovementAction(): string
  /**
   * Get the position for movement via the Token HUD.
   * @param {number} elevation
   * @returns {Partial<TokenPosition>}
   * @see {@link foundry.applications.hud.TokenHUD#_onSubmit}
   * @internal
   */
  _getHUDMovementPosition(elevation: number): Partial<TokenPosition>
  /**
   * Get the movement action in {@link CONFIG.Token.movement | CONFIG.Token.movement.actions} to be used for movement
   * via the Token HUD.
   * The default implementation returns `this.document.movementAction`.
   * @returns {string}
   * @see {@link foundry.applications.hud.TokenHUD#_onSubmit}
   * @protected
   */
  protected _getHUDMovementAction(): string
  /**
   * Get the position for movement via the Token Config.
   * @param {Partial<TokenPosition>} changes
   * @returns {Partial<TokenPosition>}
   * @see {@link foundry.applications.sheets.TokenConfig#_processSubmitData}
   * @internal
   */
  _getConfigMovementPosition(changes: Partial<TokenPosition>): Partial<TokenPosition>
  /** @override */
  override _updateRotation({ angle, delta, snap }?: { delta?: number | undefined; snap?: number | undefined }): number
  /** @inheritDoc */
  _onCreate(data: any, options: any, userId: any): void
  /** @inheritDoc */
  _onUpdate(changed: any, options: any, userId: any): void
  /** @inheritDoc */
  _onDelete(options: any, userId: any): void
  /**
   * Handle changes to Token behavior when a significant status effect is applied
   * @param {string} statusId       The status effect ID being applied, from {@link CONFIG.specialStatusEffects}
   * @param {boolean} active        Is the special status effect now active?
   * @protected
   */
  protected _onApplyStatusEffect(statusId: string, active: boolean): void
  /**
   * Add/Modify a filter effect on this token.
   * @param {string} statusId       The status effect ID being applied, from {@link CONFIG.specialStatusEffects}
   * @param {boolean} active        Is the special status effect now active?
   * @internal
   */
  _configureFilterEffect(statusId: string, active: boolean): void
  /**
   * Update the filter effects depending on special status effects
   * TODO: replace this method by something more convenient.
   * @internal
   */
  _updateSpecialStatusFilterEffects(): void
  /**
   * Remove all filter effects on this placeable.
   * @internal
   */
  _removeAllFilterEffects(): void
  /**
   * Additional events that trigger once control of the Token is established
   * @param {object} options Optional parameters which apply for specific implementations
   * @param {boolean} [options.releaseOthers=true] Release control of all other Tokens
   * @param {bolean} [options.pan=false] Pan to the controlled Token
   * @protected
   * @override
   */
  protected override _onControl({
    releaseOthers,
    pan,
    ...options
  }?: {
    releaseOthers?: boolean | undefined
    pan?: any
  }): void
  /** @inheritdoc */
  _onRelease(options: any): void
  /** @override */
  override _overlapsSelection(rectangle: any): any
  /** @override */
  override _canControl(user: any, event: any): boolean
  /** @override */
  override _canHUD(user: any, event: any): any
  /** @override */
  override _canConfigure(user: any, event: any): boolean
  /** @override */
  override _canHover(user: any, event: any): boolean
  /** @override */
  override _canView(user: any, event: any): boolean | undefined
  /** @override */
  override _canDrag(user: any, event: any): boolean
  /** @inheritDoc */
  _onHoverIn(event: any, options: any): boolean | void
  /** @inheritDoc */
  _onHoverOut(event: any): void
  /** @inheritDoc */
  _onClickLeft(event: any): void
  /** @override */
  override _propagateLeftClick(event: any): boolean
  /** @override */
  override _onClickLeft2(event: any): void
  /** @override */
  override _onClickRight2(event: any): void
  /** @inheritDoc */
  _initializeDragLeft(event: any): void
  /**
   * Get the constrain options used during the drag operation.
   * @returns {Omit<TokenConstrainMovementPathOptions, "preview"|"history">}    The constrain options
   * @protected
   */
  protected _getDragConstrainOptions(): Omit<TokenConstrainMovementPathOptions, "preview" | "history">
  /**
   * Get the search options used during the drag operation to find the path of movement through the waypoints.
   * @returns {TokenFindMovementPathOptions}    The search options
   * @protected
   */
  protected _getDragPathfindingOptions(): TokenFindMovementPathOptions
  /**
   * Get the movement action for the waypoints placed during a drag operation.
   * @returns {string}    The movement action
   * @protected
   */
  protected _getDragMovementAction(): string
  /** @inheritDoc */
  _onDragLeftDrop(event: any): false | undefined
  /**
   * Prevent the drop event?
   * Called by {@link Token#_onDragLeftDrop}.
   * @param {PIXI.FederatedEvent} event    The pointerup event
   * @returns {boolean}
   * @protected
   */
  protected _shouldPreventDragLeftDrop(event: PIXI.FederatedEvent): boolean
  /** @override */
  override _prepareDragLeftDropUpdates(event: any): (
    | {
        _id: string
      }[]
    | {
        movement: object
      }
  )[]
  /** @override */
  override _onDragLeftMove(event: any): void
  /**
   * Update the destinations of the drag previews and rulers
   * @param {Point} point                     The (unsnapped) center point of the waypoint
   * @param {object} [options]                Additional options
   * @param {boolean} [options.snap=false]    Snap the destination?
   * @protected
   */
  protected _updateDragDestination(
    point: Point,
    {
      snap,
    }?: {
      snap?: boolean | undefined
    },
  ): void
  /**
   * Get the origin of the drag operation.
   * @returns {Point}
   * @internal
   */
  _getDragOrigin(): Point
  /**
   * Called by {@link foundry.canvas.layers.TokenLayer#_onClickLeft} while this Token is in a drag workflow.
   * @param {PIXI.FederatedEvent} event    The pointerdown event
   * @protected
   */
  protected _onDragClickLeft(event: PIXI.FederatedEvent): void
  /**
   * Add ruler waypoints and update ruler paths.
   * @param {Point} point                     The (unsnapped) center point of the waypoint
   * @param {object} [options]                Additional options
   * @param {boolean} [options.snap=false]    Snap the added waypoint?
   * @protected
   */
  protected _addDragWaypoint(
    point: Point,
    {
      snap,
    }?: {
      snap?: boolean | undefined
    },
  ): void
  /**
   * Trigger drop event. This drop cannot be prevented by {@link Token#_shouldPreventDragLeftDrop}.
   * @protected
   */
  protected _triggerDragLeftDrop(): void
  /**
   * Called by {@link foundry.canvas.layers.TokenLayer#_onClickLeft2} while this Token is in a drag workflow.
   * @param {PIXI.FederatedEvent} event    The pointerdown event
   * @protected
   */
  protected _onDragClickLeft2(event: PIXI.FederatedEvent): void
  /**
   * Called by {@link foundry.canvas.layers.TokenLayer#_onClickRight} while this Token is in a drag workflow.
   * @param {PIXI.FederatedEvent} event    The pointerdown event
   * @protected
   */
  protected _onDragClickRight(event: PIXI.FederatedEvent): void
  /**
   * Remove last ruler waypoints and update ruler paths.
   * @protected
   */
  protected _removeDragWaypoint(): void
  /**
   * Cancel the drag workflow. This cancellation cannot be prevented by {@link Token#_onDragLeftCancel}.
   * @protected
   */
  protected _triggerDragLeftCancel(): void
  /**
   * Called by {@link foundry.canvas.layers.TokenLayer#_onClickRight2} while this Token is in a drag workflow.
   * @param {PIXI.FederatedEvent} event    The pointerdown event
   * @protected
   */
  protected _onDragClickRight2(event: PIXI.FederatedEvent): void
  /** @inheritDoc */
  _onDragLeftCancel(event: any): boolean | void
  /** @inheritDoc */
  _finalizeDragLeft(event: any): void
  /**
   * Change the elevation of Token during dragging.
   * @param {WheelEvent} event    The mousewheel event
   * @protected
   */
  protected _onDragMouseWheel(event: WheelEvent): void
  /**
   * Change the elevation of the dragged Tokens.
   * @param {number} delta                       The number vertical steps
   * @param {object} [options]                   Additional options
   * @param {boolean} [options.precise=false]    Round elevations to multiples of the grid distance divided by
   *                                             `CONFIG.Canvas.elevationSnappingPrecision`?
   *                                             If false, rounds to multiples of the grid distance.
   * @protected
   */
  protected _changeDragElevation(
    delta: number,
    {
      precise,
    }?: {
      precise?: boolean | undefined
    },
  ): void
  /**
   * Get the drag waypoint position.
   * @param {DeepReadonly<Pick<TokenPosition, "x"|"y"|"elevation">>} current
   * @param {DeepReadonly<Partial<ElevatedPoint>>} changes
   * @param {object} [options]
   * @param {boolean} [options.snap=false]
   * @returns {Pick<TokenPosition, "x"|"y"|"elevation"> & Partial<TokenDimensions>}
   * @internal
   */
  _getDragWaypointPosition(
    current: DeepReadonly<Pick<TokenPosition, "x" | "y" | "elevation">>,
    changes: DeepReadonly<Partial<ElevatedPoint>>,
    {
      snap,
    }?: {
      snap?: boolean | undefined
    },
  ): Pick<TokenPosition, "x" | "y" | "elevation"> & Partial<TokenDimensions>
  /**
   * Recalculate the planned movement path of this Token for the current User.
   */
  recalculatePlannedMovementPath(): void
  /**
   * @deprecated since v12
   * @ignore
   */
  updateSource({ deleted }?: { deleted?: boolean | undefined }): void
  /**
   * @deprecated since v12
   * @ignore
   */
  getCenter(x: any, y: any): Point
  /**
   * @deprecated since v12
   * @ignore
   */
  get owner(): boolean
  /**
   * @deprecated since v12
   * @ignore
   */
  toggleCombat(combat: any): Promise<void>
  /**
   * @deprecated since v12
   * @ignore
   */
  toggleEffect(
    effect: any,
    {
      active,
      overlay,
    }?: {
      overlay?: boolean | undefined
    },
  ): Promise<boolean | foundry.documents.ActiveEffect | undefined>
  /**
   * @deprecated since v12
   * @ignore
   */
  toggleVisibility(): Promise<foundry.abstract.Document<object, foundry.abstract.types.DocumentConstructionContext>[]>
  /**
   * @deprecated since v12 Stable 4
   * @ignore
   */
  _recoverFromPreview(): void
  /**
   * @deprecated since v13
   * @ignore
   */
  testInsideRegion(region: any, position: any): any
  /**
   * @deprecated since v13
   * @ignore
   */
  segmentizeRegionMovement(region: any, waypoints: any, options: any): any
  /**
   * @deprecated since v13
   * @ignore
   */
  getSize(): any
  /**
   * @deprecated since v13
   * @ignore
   */
  get target(): PIXI.Graphics
  #private
}
import TokenDocument from "@client/documents/token.mjs"
import type { DeepReadonly, ElevatedPoint, Point } from "@common/_types.mjs"
import type { DatabaseUpdateOperation } from "@common/abstract/_types.mjs"
import type { TokenDisplayMode } from "@common/constants.mjs"
import type { TokenDetectionMode, TokenDimensions, TokenPosition } from "@common/documents/_types.mjs"
import type { GridMeasurePathResult } from "@common/grid/_types.mjs"
import { Color } from "@common/utils/_module.mjs"
import type {
  ReticuleOptions,
  TokenAnimationContext,
  TokenAnimationData,
  TokenAnimationOptions,
  TokenAnimationTransition,
  TokenConstrainedMovementWaypoint,
  TokenConstrainMovementPathOptions,
  TokenConstrainMovementPathWaypoint,
  TokenDragContext,
  TokenFindMovementPathJob,
  TokenFindMovementPathOptions,
  TokenFindMovementPathWaypoint,
  TokenGetTerrainMovementPathWaypoint,
  TokenPlannedMovement,
  TokenTerrainMovementWaypoint,
} from "../../_types.mjs"
import type { Actor, Combatant, User } from "../../documents/_module.mjs"
import type {
  TokenMeasureMovementPathOptions,
  TokenMeasureMovementPathWaypoint,
  TokenMovementCostFunction,
  TokenMovementWaypoint,
} from "../../documents/_types.mjs"
import type { CanvasAnimationAttribute } from "../animation/_types.mjs"
import PreciseText from "../containers/elements/precise-text.mjs"
import type { PointSourcePolygonType } from "../geometry/_types.mjs"
import type PolygonVertex from "../geometry/edges/vertex.mjs"
import PrimarySpriteMesh from "../primary/primary-sprite-mesh.mjs"
import type { PointLightSource, PointVisionSource } from "../sources/_module.mjs"
import type { LightSourceData } from "../sources/base-light-source.mjs"
import type { VisionSourceData } from "../sources/point-vision-source.mjs"
import PlaceableObject from "./placeable-object.mjs"
import type BaseTokenRuler from "./tokens/base-ruler.mjs"
import TokenRing from "./tokens/ring.mjs"
import TokenTurnMarker from "./tokens/turn-marker.mjs"
