import * as canvas from "foundry/canvas/_module.js"

export interface ActiveEffectData {
  _id: null | string
  changes: EffectChangeData[]
  description?: string
  disabled?: boolean
  duration?: EffectDurationData
  flags: foundry.data.types.DocumentFlags
  icon?: string
  name: string
  origin?: string
  sort?: number
  statuses?: Set<string>
  system?: object
  tint?: string
  transfer?: boolean
  type?: string
}

export interface EffectChangeData {
  key: string
  mode: number
  priority: number
  value: string
}

interface EffectDurationData {
  combat?: string
  rounds?: number
  seconds?: number
  startRound?: number
  startTime?: number
  startTurn?: number
  turns?: number
}

export interface SceneDimensions {
  /** The width of the canvas. */
  width: number
  /** The height of the canvas. */
  height: number
  /** The grid size. */
  size: number
  /** The canvas rectangle. */
  rect: PIXI.Rectangle
  /** The X coordinate of the scene rectangle within the larger canvas. */
  sceneX: number
  /** The Y coordinate of the scene rectangle within the larger canvas. */
  sceneY: number
  /** The width of the scene. */
  sceneWidth: number
  /** The height of the scene. */
  sceneHeight: number
  /** The scene rectangle. */
  sceneRect: PIXI.Rectangle
  /** The number of distance units in a single grid space. */
  distance: number
  /** The factor to convert distance units to pixels. */
  distancePixels: number
  /** The units of distance. */
  units: string
  /** The aspect ratio of the scene rectangle. */
  ratio: number
  /** The length of the longest line that can be drawn on the canvas. */
  maxR: number
  /** The number of grid rows on the canvas. */
  rows: number
  /** The number of grid columns on the canvas. */
  columns: number
}

export interface TokenMovementContinuationData {
  /**
   * The movement ID
   */
  movementId: string
  /**
   * The number of continuations
   */
  continueCounter: number
  /**
   * Was continued?
   */
  continued: boolean
  /**
   * The continuation promise
   */
  continuePromise: Promise<boolean> | null
  /**
   * The promise to wait for before continuing movement
   */
  waitPromise: Promise<void>
  /**
   * Resolve function of the wait promise
   */
  resolveWaitPromise: () => object | undefined
  /**
   * The promise that resolves after the update workflow
   */
  postWorkflowPromise: Promise<void>
  /**
   * The movement continuation states
   */
  states: {
    [movementId: string]: {
      handles: Map<string | symbol, TokenMovementContinuationHandle>
      callbacks: Array<(continued: boolean) => void>
      pending: Set<string>
    }
  }
}

export interface TokenMovementContinuationHandle {
  /**
   * The movement ID
   */
  movementId: string
  /**
   * The continuation promise
   */
  continuePromise: Promise<boolean> | undefined
}

export type TokenResumeMovementCallback = () => Promise<boolean>

export interface TokenMeasureMovementPathOptions {
  /**
   * Measure a preview path?
   * @default false
   */
  preview?: boolean
}

export interface TokenConstrainMovementPathOptions {
  /**
   * Constrain a preview path? Default: `false`.
   */
  preview?: boolean

  /**
   * Ignore walls? Default: `false`.
   */
  ignoreWalls?: boolean

  /**
   * Ignore cost? Default: `false`.
   */
  ignoreCost?: boolean

  /**
   * Consider movement history? If true, uses the current movement history.
   * If waypoints are passed, use those as the history. Default: `false`.
   */
  history?: boolean | DeepReadonly<TokenMeasuredMovementWaypoint[]>
}

export interface TokenFindMovementPathOptions {
  /**
   * Find a preview path? Default: `false`.
   */
  preview?: boolean
  /**
   * Ignore walls? Default: `false`.
   */
  ignoreWalls?: boolean
  /**
   * Ignore cost? Default: `false`.
   */
  ignoreCost?: boolean
  /**
   * Consider movement history? If true, uses the current movement history.
   * If waypoints are passed, use those as the history. Default: `false`.
   */
  history?: boolean | DeepReadonly<TokenMeasuredMovementWaypoint[]>
  /**
   * Unless the path can be found instantly, delay the start of the pathfinding
   *                computation by this number of milliseconds. Default: `0`.
   */
  delay?: number
}

export interface TokenFindMovementPathJob {
  /**
   * The result of the pathfinding job. Undefined while the
   * search is in progress, null if the job was cancelled,
   * and the (partial) path if the job completed.
   */
  result: TokenMovementWaypoint[] | null | undefined
  /**
   * The promise returning the (partial) path that as found
   * or null if cancelled.
   */
  promise: Promise<TokenMovementWaypoint[] | null>
  /**
   * If this function is called and the job hasn't completed
   * yet, the job is cancelled.
   */
  cancel: () => void
}

interface TokenGetCompleteMovementPathWaypoint {
  /**
   * The top-left x-coordinate in pixels (integer).
   *                        Default: the previous or source x-coordinate.
   */
  x?: number
  /**
   * The top-left y-coordinate in pixels (integer).
   *                        Default: the previous or source y-coordinate.
   */
  y?: number
  /**
   * The elevation in grid units.
   *                Default: the previous or source elevation.
   */
  elevation?: number
  /**
   * The width in grid spaces (positive).
   *                    Default: the previous or source width.
   */
  width?: number
  /**
   * The height in grid spaces (positive).
   *                   Default: the previous or source height.
   */
  height?: number
  /**
   * The shape type (see {@link CONST.TOKEN_SHAPES}).
   *            Default: the previous or source shape.
   */
  shape?: CONST.TokenShapeType
  /**
   * The movement action from the previous to this waypoint.
   *                   Default: the previous or prepared movement action.
   */
  action?: string
  /**
   * The terrain data of this segment. Default: `null`.
   */
  terrain?: foundry.abstract.DataModel | null
  /**
   * Was this waypoint snapped to the grid? Default: `false`.
   */
  snapped?: boolean
  /**
   * Was this waypoint explicitly placed by the user? Default: `false`.
   */
  explicit?: boolean
  /**
   * Is this waypoint a checkpoint? Default: `false`.
   */
  checkpoint?: boolean
  /**
   * Is this waypoint intermediate? Default: `false`.
   */
  intermediate?: boolean
}

export type TokenGetTerrainMovementPathWaypoint = Omit<TokenGetCompleteMovementPathWaypoint, "terrain">

export type TokenTerrainMovementWaypoint = Omit<TokenMeasuredMovementWaypoint, "userId" | "cost">

export interface TokenRulerData {
  /** The waypoints that were already passed by the Token */
  passedWaypoints: TokenMeasuredMovementWaypoint[]

  /** The waypoints that the Token will try move to next */
  pendingWaypoints: TokenMeasuredMovementWaypoint[]

  /** Movement planned by Users */
  plannedMovement: Record<string, TokenPlannedMovement>
}

export interface TokenPlannedMovement {
  /** The found path, which goes through all but the unreachable waypoints */
  foundPath: TokenMeasuredMovementWaypoint[]

  /**
   * The unreachable waypoints, which are those that
   * are not reached by the found path
   */
  unreachableWaypoints: TokenMeasuredMovementWaypoint[]
  /**
   * The movement history
   */
  history: TokenMeasuredMovementWaypoint[]
  /**
   * Is the path hidden?
   */
  hidden: boolean
  /**
   * Is the pathfinding still in progress?
   */
  searching: boolean
}

export interface TokenRulerWaypointData {
  /**
   * The index of the waypoint, which is equal to the number of
   * explicit waypoints from the first to this waypoint.
   */
  index: number
  /**
   * The stage this waypoint belongs to.
   */
  stage: "passed" | "pending" | "planned"
  /**
   * Is this waypoint hidden?
   */
  hidden: boolean
  /**
   * Is this waypoint unreachable?
   */
  unreachable: boolean
  /**
   * The center point of the Token at this waypoint.
   */
  center: foundry.types.Point
  /**
   * The size of the Token in pixels at this waypoint.
   */
  size: {
    width: number
    height: number
  }
  /**
   * The ray from the center point of previous to the center
   * point of this waypoint, or null if there is no previous
   * waypoint.
   */
  // @ts-expect-error Should fix.
  ray: Ray | null
  /**
   * The measurements at this waypoint.
   */
  measurement: foundry.grid.types.GridMeasurePathResultWaypoint
  /**
   * The previous waypoint, if any.
   */
  previous: TokenRulerWaypoint | null
  /**
   * The next waypoint, if any.
   */
  next: TokenRulerWaypoint | null
}

export interface TokenRulerWaypoint extends TokenMeasuredMovementWaypoint, TokenRulerWaypointData {}

export interface TokenDragContext {
  token: canvas.placeables.Token
  clonedToken: canvas.placeables.Token
  origin: TokenPosition
  destination: Omit<TokenMovementWaypoint, "width" | "height" | "shape" | "action" | "teleport"> &
    Partial<Pick<TokenMovementWaypoint, "width" | "height" | "shape" | "action" | "teleport">>
  waypoints: (Omit<TokenMovementWaypoint, "width" | "height" | "shape" | "action" | "teleport"> &
    Partial<Pick<TokenMovementWaypoint, "width" | "height" | "shape" | "action" | "teleport">>)[]
  foundPath: TokenMovementWaypoint[]
  unreachableWaypoints: TokenMovementWaypoint[]
  hidden: boolean
  updating: boolean
  search: TokenFindMovementPathJob
  searching: boolean
  searchId: number
  searchOptions: TokenFindMovementPathOptions
}

export interface TokenAnimationData {
  /** The x position in pixels */
  x: number

  /** The y position in pixels */
  y: number

  /** The elevation in grid units */
  elevation: number

  /** The width in grid spaces */
  width: number

  /** The height in grid spaces */
  height: number

  /** The alpha value */
  alpha: number

  /** The rotation in degrees */
  rotation: number

  /** The texture data */
  texture: {
    src: string
    anchorX: number
    anchorY: number
    scaleX: number
    scaleY: number
    tint: Color
  }

  /** The ring data */
  ring: {
    subject: {
      texture: string
      scale: number
    }
  }
}

export interface TokenAnimationContext {
  /** The name of the animation. */
  name: string | symbol

  /** The animation chain. */
  chain: {
    to: Partial<TokenAnimationData>
    options: Omit<foundry.types.TokenAnimationOptions, "duration"> & { duration: number }
    promise: Promise<void>
    resolve: () => void
    reject: (error: Error) => void
  }[]

  /** The final animation state. */
  to: Partial<TokenAnimationData>

  /** The duration of the animation. */
  duration: number

  /** The current time of the animation. */
  time: number

  /** Asynchronous functions that are executed before the animation starts */
  preAnimate: ((context: TokenAnimationContext) => Promise<void>)[]

  /**
   * Synchronous functions that are executed after the animation ended. They may be executed before the `preAnimate`
   * functions have finished if the animation is terminated.
   */
  postAnimate: ((context: TokenAnimationContext) => void)[]

  /** Synchronous functions executed each frame after `ontick` and before {@link Token#_onAnimationUpdate}. */
  onAnimate: ((context: TokenAnimationContext) => void)[]

  /** The promise of the animation that resolves once it completes or is terminated. */
  promise: Promise<void>
}

//export interface TokenAnimationOptions {
//  /** The name of the animation, or null if nameless. Default: {@link Token#animationName}. */
//  name?: string | symbol | null

//  /** Chain the animation to the existing one of the same name? Default: `false`. */
//  chain?: boolean

//  /**
//   * The duration of the animation in milliseconds (nonnegative). Default: automatic (determined by
//   * {@link Token#_getAnimationDuration}, which returns 1000 by default unless it's a movement animation).
//   */
//  duration?: number

//  /**
//   * A desired base movement speed in grid size per second (positive), which determines the `duration` if the given
//   * `duration` is undefined and either `x`, `y`, `width`, `height`, or `rotation` is animated.
//   * Default: automatically determined by {@link Token#_getAnimationMovementSpeed}, which returns
//   * `CONFIG.Token.movement.defaultSpeed` by default.
//   */
//  movementSpeed?: number

//  /** The movement action. Default: `CONFIG.Token.movement.defaultAction`. */
//  action?: string

//  /** Teleportation instead of animating the movement? Default: `false`. */
//  teleport?: boolean

//  /** Forced movement? Default: `false`. */
//  forced?: boolean

//  /** The terrain data. Default: `null`. */
//  terrain?: foundry.abstract.DataModel | null

//  /**
//   * The desired texture transition type. Default: automatic (determined by {@link Token#_getAnimationTransition},
//   * which returns `"fade"` by default).
//   */
//  transition?: TokenAnimationTransition

//  /** The easing function of the animation. Default: `undefined` (linear). */
//  easing?: canvas.animation.types.CanvasAnimationEasingFunction

//  /** An on-tick callback. */
//  ontick?: (elapsedMS: number, animation: canvas.animation.types.CanvasAnimationData, data: TokenAnimationData) => void
//}

export type TokenMovementActionCostFunction = (
  baseCost: number,
  from: Readonly<foundry.grid.types.GridOffset3D>,
  to: Readonly<foundry.grid.types.GridOffset3D>,
  distance: number,
  segment: DeepReadonly<TokenMovementSegmentData>,
) => number

export interface TokenMovementActionConfig {
  /** The label of the movement action. */
  label: string

  /** The icon of the movement action. */
  icon: string

  /**
   * The number that is used to sort the movement actions / movement action configs.
   * Determines the order of cycling. Default: `0`.
   */
  order: number

  /**
   * Is teleportation? If true, the movement does not go through all grid spaces
   * between the origin and destination: it goes from the origin immediately to the
   * destination grid space. Default: `false`.
   */
  teleport: boolean

  /**
   * Is the movement measured? The distance, cost, spaces, and diagonals
   * of a segment that is not measured are always 0. Default: `true`.
   */
  measure: boolean

  /** The type of walls that block this movement, if any. Default: `"move"`. */
  walls: string | null

  /** Is segment of the movement visualized by the ruler? Default: `true`. */
  visualize: boolean

  /** Get the default animation options for this movement action. Default: `() => ({})`. */
  getAnimationOptions: (token: canvas.placeables.Token) => Partial<foundry.types.TokenAnimationOptions>

  /**
   * Can the current User select this movement action for the given Token? If selectable, the movement action of the
   * Token can set to this movement action by the User via the UI and when cycling. Default: `() => true`.
   */
  canSelect: (token: TokenDocument) => boolean

  /**
   * If set, this function is used to derive the terrain difficulty from from nonderived difficulties,
   * which are those that do not have `deriveTerrainDifficulty` set.
   * Used by {@link foundry.data.regionBehaviors.ModifyMovementCostRegionBehaviorType}.
   * Derived terrain difficulties are not configurable via the behavior UI.
   */
  deriveTerrainDifficulty: ((nonDerivedDifficulties: { [action: string]: number }) => number) | null

  /** The cost modification function. Default: `() => cost => cost`. */
  getCostFunction: (token: TokenDocument, options: TokenMeasureMovementPathOptions) => TokenMovementActionCostFunction
}

export type TokenAnimationTransition =
  | "crosshatch"
  | "dots"
  | "fade"
  | "glitch"
  | "hole"
  | "holeSwirl"
  | "hologram"
  | "morph"
  | "swirl"
  | "waterDrop"
  | "waves"
  | "wind"
  | "whiteNoise"

export interface TokenMovementData {
  /** The ID of the movement */
  id: string

  /** The chain of prior movement IDs that this movement is a continuation of */
  chain: string[]

  /** The origin of movement */
  origin: TokenPosition

  /** The destination of movement */
  destination: TokenPosition

  /** The waypoints and measurements of the passed path */
  passed: TokenMovementSectionData

  /** The waypoints and measurements of the pending path */
  pending: TokenMovementSectionData

  /** The waypoints and measurements of the history path */
  history: TokenMovementHistoryData

  /** Was the movement recorded in the movement history? */
  recorded: boolean

  /** The method of movement */
  method: TokenMovementMethod

  /** The options to constrain movement */
  constrainOptions: Omit<TokenConstrainMovementPathOptions, "preview" | "history">

  /** Automatically rotate the token in the direction of movement? */
  autoRotate: boolean

  /** Show the ruler during the movement animation of the token? */
  showRuler: boolean

  /** The user that moved the token */
  user: User

  /**
   * The state of the movement
   */
  state: TokenMovementState
  /**
   * The update options of the movement operation
   */
  updateOptions: object
}

export type TokenMovementOperation = Omit<TokenMovementData, "user" | "state" | "updateOptions">

export type TokenMovementMethod = "api" | "config" | "dragging" | "keyboard" | "undo"

export type TokenMovementState = "completed" | "paused" | "pending" | "stopped"

export interface TokenMovementHistoryData {
  /**
   * The recorded waypoints of the movement path
   */
  recorded: TokenMovementSectionData
  /**
   * The unrecored waypoints of the movement path
   */
  unrecorded: TokenMovementHistoryData
  /**
   * The distance of the combined movement path
   */
  distance: number
  /**
   * The cost of the combined movement path
   */
  cost: number
  /**
   * The number of spaces moved along the combined path
   */
  spaces: number
  /**
   * The number of diagonals moved along the combined path
   */
  diagonals: number
}

export interface TokenMovementSectionData {
  /**
   * The waypoints of the movement path
   */
  waypoints: TokenMeasuredMovementWaypoint[]
  /**
   * The distance of the movement path
   */
  distance: number
  /**
   * The cost of the movement path
   */
  cost: number
  /**
   * The number of spaces moved along the path
   */
  spaces: number
  /**
   * The number of diagonals moved along the path
   */
  diagonals: number
}

export interface TokenMeasuredMovementWaypoint {
  /** The top-left x-coordinate in pixels (integer). */
  x: number

  /** The top-left y-coordinate in pixels (integer). */
  y: number

  /** The elevation in grid units. */
  elevation: number

  /** The width in grid spaces (positive). */
  width: number

  /** The height in grid spaces (positive). */
  height: number

  /** The shape type (see {@link CONST.TOKEN_SHAPES}). */
  shape: foundry.canvas.placeables.TokenShape

  /** The movement action from the previous to this waypoint. */
  action: string

  /** Teleport from the previous to this waypoint? */
  teleport: boolean

  /** Is the movement from the previous to this waypoint forced? */
  forced: boolean

  /** The terrain data from the previous to this waypoint. */
  terrain: foundry.abstract.DataModel | null

  /** Was this waypoint snapped to the grid? */
  snapped: boolean

  /** Was this waypoint explicitly placed by the user? */
  explicit: boolean

  /** Is this waypoint a checkpoint? */
  checkpoint: boolean

  /** Is this waypoint intermediate? */
  intermediate: boolean

  /** The ID of the user that moved the token to from the previous to this waypoint. */
  userId: string

  /** The movement cost from the previous to this waypoint (nonnegative). */
  cost: number
}

export type TokenMovementWaypoint = Omit<TokenMeasuredMovementWaypoint, "terrain" | "intermediate" | "userId" | "cost">

export type TokenMovementCostFunction = foundry.grid.types.GridMeasurePathCostFunction3D<TokenMovementSegmentData>

export type TokenMovementSegmentData = Pick<
  TokenMeasuredMovementWaypoint,
  "width" | "height" | "shape" | "action" | "teleport" | "forced" | "terrain"
>

export interface TokenPosition extends foundry.types.ElevatedPoint {
  /** The width in grid spaces (positive). */
  width: number
  /** The height in grid spaces (positive). */
  height: number
  /** The shape type (see {@link CONST.TOKEN_SHAPES}). */
  shape: canvas.placeables.TokenShape
}

export type TokenDimensions = Pick<TokenPosition, "width" | "height" | "shape">
