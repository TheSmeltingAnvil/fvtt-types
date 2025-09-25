/**
 * @import {DeepReadonly, ElevatedPoint, TokenConstrainMovementPathOptions} from "../_types.mjs";
 * @import {RegionEventType, TokenShapeType} from "@common/constants.mjs";
 * @import {
 *   TokenCompleteMovementWaypoint, TokenGetCompleteMovementPathWaypoint, TokenMeasuredMovementWaypoint,
 *   TokenMeasureMovementPathWaypoint, TokenResumeMovementCallback, TokenMovementContinuationData,
 *   TokenMovementCostFunction, TokenMovementData, TokenMovementOperation, TokenMovementSegmentData,
 *   TokenMovementWaypoint, TokenRegionMovementSegment, TokenSegmentizeMovementWaypoint,
 *   TrackedAttributesDescription, TokenMovementContinuationHandle, TokenMovementMethod,
 TokenMovementCostAggregator
 * } from "./_types.mjs";
 * @import {TokenData, TokenDimensions, TokenPosition} from "@common/documents/_types.mjs";
 * @import {Actor, Combat, Combatant, RegionDocument, User} from "./_module.mjs";
 * @import {DatabaseOperation, DatabaseUpdateOperation} from "@common/abstract/_types.mjs".
 * @import Collection from "@common/utils/collection.mjs";
 * @import DataModel from "@common/abstract/data.mjs";
 * @import {SchemaField} from "@common/data/fields.mjs";
 * @import {BaseGrid, HexagonalGrid} from "@common/grid/_module.mjs";
 * @import {GridMeasurePathResult, GridMeasurePathWaypointData3D} from "@common/grid/_types.mjs";
 */
/**
 * The client-side Token document which extends the common BaseToken document model.
 *
 * The following fields must no be altered from source during data preparation:
 * `x`, `y`, `elevation`, `width`, `height`, `shape`.
 *
 * ### Hook Events
 * - {@link hookEvents.moveToken}
 * - {@link hookEvents.pauseToken}
 * - {@link hookEvents.preMoveToken}
 * - {@link hookEvents.stopToken}
 *
 * @extends BaseToken
 * @mixes CanvasDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.Scene}: The Scene document type which contains Token documents
 * @see {@link foundry.applications.sheets.TokenConfig}: The Token configuration application
 */
export default class TokenDocument extends BaseToken {
  /**
   * The list of movement operation properties that are writeable in preUpdateMovement.
   * @type {string[]}
   */
  static #WRITEABLE_MOVEMENT_OPERATION_PROPERTIES: string[]
  /**
   * Infer the subject texture path if one is existing.
   * @param {string} src        The path to test.
   * @returns {string|null}     The inferred path, or null otherwise.
   */
  static #inferSubjectTexture(src: string): string | null
  /**
   * Remove waypoints that were added to measure the path correctly.
   * @param {(ElevatedPoint & GridMeasurePathWaypointData3D & TokenMovementSegmentData)[]} path   The measurement path
   * @param {GridMeasurePathResult} result                                                        The measurement result
   */
  static #removeResizeSegmentsFromMeasurementResult(
    path: (ElevatedPoint & GridMeasurePathWaypointData3D & TokenMovementSegmentData)[],
    result: GridMeasurePathResult,
  ): void
  /**
   * Create the cost function for {@link foundry.grid.BaseGrid#measurePath}.
   * The `from` and `to` parameters of the cost function are top-left offsets
   * ({@link foundry.documents.BaseToken##getTopLeftGridOffset}).
   * @param {BaseGrid} grid                                    The grid
   * @param {TokenMovementCostFunction|number|undefined} cost  The cost function for a single step or predetermined cost
   * @param {TokenMovementCostAggregator} aggregator           The cost aggregator
   * @param {number} width                                     The width in grid spaces (positive)
   * @param {number} height                                    The height in grid spaces (positive)
   * @param {TokenShapeType} shape                             The shape (one of {@link CONST.TOKEN_SHAPES})
   * @returns {TokenMovementCostFunction|number|undefined}     The cost function for measuring
   */
  static #createMovementCostFunction(
    grid: BaseGrid,
    cost: TokenMovementCostFunction | number | undefined,
    aggregator: TokenMovementCostAggregator,
    width: number,
    height: number,
    shape: TokenShapeType,
  ): TokenMovementCostFunction | number | undefined
  /**
   * Create the cost function for {@link foundry.grid.SquareGrid#measurePath}.
   * @param {TokenMovementCostFunction} cost         The cost function for a single step
   * @param {TokenMovementCostAggregator} aggregator The cost aggregator
   * @param {number} width                           The width in grid spaces (positive)
   * @param {number} height                          The height in grid spaces (positive)
   * @returns {TokenMovementCostFunction}            The combined cost function
   */
  static #createSquareMovementCostFunction(
    cost: TokenMovementCostFunction,
    aggregator: TokenMovementCostAggregator,
    width: number,
    height: number,
  ): TokenMovementCostFunction
  /**
   * Create the cost function for {@link foundry.grid.HexagonalGrid#measurePath}.
   * @param {HexagonalGrid} grid                       The hexagonal grid
   * @param {TokenMovementCostFunction} cost           The cost function for a single step
   * @param {TokenMovementCostAggregator} aggregator   The cost aggregator
   * @param {number} width                             The width in grid spaces (positive)
   * @param {number} height                            The height in grid spaces (positive)
   * @param {TokenShapeType} shape                     The shape type (one of {@link CONST.TOKEN_SHAPES})
   * @returns {TokenMovementCostFunction}              The combined cost function
   */
  static #createHexagonalMovementCostFunction(
    grid: HexagonalGrid,
    cost: TokenMovementCostFunction,
    aggregator: TokenMovementCostAggregator,
    width: number,
    height: number,
    shape: TokenShapeType,
  ): TokenMovementCostFunction
  /**
   * Create or remove Combatants for an array of provided Token objects.
   * @param {TokenDocument[]} tokens      The tokens which should be added to the Combat
   * @param {object} [options={}]         Options which modify the toggle operation
   * @param {Combat} [options.combat]       A specific Combat instance which should be modified. If undefined, the
   *                                        current active combat will be modified if one exists. Otherwise, a new
   *                                        Combat encounter will be created if the requesting user is a Gamemaster.
   * @returns {Promise<Combatant[]>}      An array of created Combatant documents
   */
  static createCombatants(
    tokens: TokenDocument[],
    {
      combat,
    }?: {
      combat?: Combat | undefined
    },
  ): Promise<Combatant[]>
  /**
   * Remove Combatants for the array of provided Tokens.
   * @param {TokenDocument[]} tokens      The tokens which should removed from the Combat
   * @param {object} [options={}]         Options which modify the operation
   * @param {Combat} [options.combat]       A specific Combat instance from which Combatants should be deleted
   * @returns {Promise<Combatant[]>}      An array of deleted Combatant documents
   */
  static deleteCombatants(
    tokens: TokenDocument[],
    {
      combat,
    }?: {
      combat?: Combat | undefined
    },
  ): Promise<Combatant[]>
  /** @inheritDoc */
  static _preCreateOperation(documents: any, operation: any, user: any): Promise<false | undefined>
  /** @inheritDoc */
  static _preUpdateOperation(documents: any, operation: any, user: any): Promise<false | undefined>
  /** @type {TOKEN_SHAPES[]} */
  static #VALID_SHAPES: Readonly<{
    readonly ELLIPSE_1: 0
    readonly ELLIPSE_2: 1
    readonly TRAPEZOID_1: 2
    readonly TRAPEZOID_2: 3
    readonly RECTANGLE_1: 4
    readonly RECTANGLE_2: 5
  }>[]
  /** @type {Set<string>} */
  static #VALID_MOVEMENT_WAYPOINT_PROPERTIES: Set<string>
  /**
   * Finalize movement operation.
   * @param {TokenDocument[]} documents           Document instances to be updated
   * @param {DatabaseUpdateOperation} operation   Parameters of the database update operation
   * @param {User} user                           The User requesting the update operation
   */
  static #preUpdateOperationMovement(documents: TokenDocument[], operation: DatabaseUpdateOperation, user: User): void
  /**
   * Convert a set of {x, y, elevation} changes in a Token document update into an array of waypoints.
   * @param {TokenDocument} document
   * @param {Partial<TokenData>} changes
   * @param {DatabaseUpdateOperation} operation
   * @returns {TokenMovementWaypoint[]}
   */
  static #inferMovementWaypoints(
    document: TokenDocument,
    changes: Partial<TokenData>,
    operation: DatabaseUpdateOperation,
  ): TokenMovementWaypoint[]
  /**
   * Filter nonintermediate waypoints.
   * @param {TokenMeasuredMovementWaypoint[]} waypoints    The waypoints
   * @returns {TokenMovementWaypoint[]}                    The nonintermediate waypoints
   */
  static #filterNonintermediateWaypoints(waypoints: TokenMeasuredMovementWaypoint[]): TokenMovementWaypoint[]
  /**
   * Automatically set the rotation of the Token in the direction of the last nonzero movement segment
   * unless the rotation was explicity changed.
   * @param {TokenDocument} document
   * @param {Partial<TokenData>} changes
   * @param {TokenMovementOperation} movement
   */
  static #rotateInMovementDirection(
    document: TokenDocument,
    changes: Partial<TokenData>,
    movement: TokenMovementOperation,
  ): void
  /**
   * Identify and update the regions this Token is going to be in if necessary.
   * @param {TokenDocument[]} documents           Document instances to be updated
   * @param {DatabaseUpdateOperation} operation   Parameters of the database update operation
   */
  static #preUpdateOperationRegions(documents: TokenDocument[], operation: DatabaseUpdateOperation): void
  /** @override */
  static override _onCreateOperation(documents: any, operation: any, user: any): Promise<void>
  /**
   * Add deprecated getters for the teleport and forced option.
   * @param {DatabaseUpdateOperation} operation
   * @internal
   * @deprecated since v13
   */
  static _addTeleportAndForcedShims(operation: DatabaseUpdateOperation): void
  /** @override */
  static override _onUpdateOperation(documents: any, operation: any, user: any): Promise<void>
  /**
   * Handle TOKEN_ENTER, TOKEN_EXIT, TOKEN_MOVE_IN, and TOKEN_MOVE_OUT region events.
   * @param {TokenDocument[]} documents           Document instances to be updated
   * @param {DatabaseUpdateOperation} operation   Parameters of the database update operation
   * @param {User} user                           The User requesting the update operation
   */
  static #onUpdateHandleEnterExitMoveInOutRegionEvents(
    documents: TokenDocument[],
    operation: DatabaseUpdateOperation,
    user: User,
  ): void
  /**
   * Handle {@link TokenDocument#_onUpdateMovement} and `moveToken` hook calls.
   * @param {TokenDocument[]} documents           Document instances to be updated
   * @param {DatabaseUpdateOperation} operation   Parameters of the database update operation
   * @param {User} user                           The User requesting the update operation
   */
  static #onUpdateOperationMovement(documents: TokenDocument[], operation: DatabaseUpdateOperation, user: User): void
  /**
   * Handle TOKEN_MOVE_WITHIN region events.
   * @param {TokenDocument[]} documents           Document instances to be updated
   * @param {DatabaseUpdateOperation} operation   Parameters of the database update operation
   * @param {User} user                           The User requesting the update operation
   */
  static #onUpdateHandleMoveWithinRegionEvents(
    documents: TokenDocument[],
    operation: DatabaseUpdateOperation,
    user: User,
  ): void
  /**
   * Continue movement for tokens which are on a multi-checkpoint path of waypoints.
   * @param {TokenDocument[]} documents           Document instances to be updated
   * @param {DatabaseUpdateOperation} operation   Parameters of the database update operation
   * @param {User} user                           The User requesting the update operation
   * @returns {Promise<void>}                     This function must not be awaited!
   */
  static #onUpdateContinueMovement(
    documents: TokenDocument[],
    operation: DatabaseUpdateOperation,
    user: User,
  ): Promise<void>
  /** @override */
  static override _onDeleteOperation(documents: any, operation: any, user: any): Promise<void>
  /**
   * Are these changes moving the Token?
   * @overload
   * @param {object} changes    The (candidate) changes
   * @returns {boolean}         Is movement?
   * @internal
   */
  static _isMovementUpdate(changes: object): boolean
  /**
   * Are these changes moving the Token from the given origin?
   * @overload
   * @param {object} changes          The (candidate) changes
   * @param {TokenPosition} origin    The origin
   * @returns {boolean}               Is movement?
   * @internal
   */
  static _isMovementUpdate(changes: object, origin: TokenPosition): boolean
  /**
   * Get an Array of attribute choices which could be tracked for Actors in the Combat Tracker
   * @param {object|DataModel|typeof DataModel|SchemaField|string} [data]  The object to explore for attributes, or an
   *                                                                       Actor type.
   * @param {string[]} [_path]
   * @returns {TrackedAttributesDescription}
   */
  static getTrackedAttributes(
    data?: object | DataModel | typeof DataModel | SchemaField | string,
    _path?: string[],
  ): TrackedAttributesDescription
  /**
   * Retrieve an Array of attribute choices from a plain object.
   * @param {object} data  The object to explore for attributes.
   * @param {string[]} _path
   * @returns {TrackedAttributesDescription}
   * @protected
   */
  protected static _getTrackedAttributesFromObject(data: object, _path?: string[]): TrackedAttributesDescription
  /**
   * Retrieve an Array of attribute choices from a SchemaField.
   * @param {SchemaField} schema  The schema to explore for attributes.
   * @param {string[]} _path
   * @returns {TrackedAttributesDescription}
   * @protected
   */
  protected static _getTrackedAttributesFromSchema(schema: SchemaField, _path?: string[]): TrackedAttributesDescription
  /**
   * Retrieve any configured attributes for a given Actor type.
   * @param {string} [type]  The Actor type.
   * @returns {TrackedAttributesDescription|void}
   * @protected
   */
  protected static _getConfiguredTrackedAttributes(type?: string): TrackedAttributesDescription | void
  /**
   * Inspect the Actor data model and identify the set of attributes which could be used for a Token Bar.
   * @param {object} attributes       The tracked attributes which can be chosen from
   * @returns {object}                A nested object of attribute choices to display
   */
  static getTrackedAttributeChoices(attributes: object): object
  /**
   * The current movement data of this Token document.
   * @type {DeepReadonly<TokenMovementData>}
   */
  get movement(): DeepReadonly<TokenMovementData>
  /**
   * The movement continuation state of this Token document.
   * @type {TokenMovementContinuationData}
   * @internal
   */
  _movementContinuation: TokenMovementContinuationData
  /**
   * A singleton collection which holds a reference to the synthetic token actor by its base actor's ID.
   * @type {Collection<string, Actor>}
   */
  actors: Collection<string, Actor>
  /**
   * A reference to the Actor this Token modifies.
   * If actorLink is true, then the document is the primary Actor document.
   * Otherwise, the Actor document is a synthetic (ephemeral) document constructed using the Token's ActorDelta.
   * @returns {Actor|null}
   */
  get actor(): Actor | null
  /**
   * A reference to the base, World-level Actor this token represents.
   * @returns {Actor|null}
   */
  get baseActor(): Actor | null
  /**
   * An indicator for whether the current User has full control over this Token document.
   * @type {boolean}
   */
  get isOwner(): boolean
  /**
   * A convenient reference for whether this TokenDocument is linked to the Actor it represents, or is a synthetic copy
   * @type {boolean}
   */
  get isLinked(): boolean
  /**
   * Does this TokenDocument have the SECRET disposition and is the current user lacking the necessary permissions
   * that would reveal this secret?
   * @type {boolean}
   */
  get isSecret(): boolean
  /**
   * Return a reference to a Combatant that represents this Token, if one is present in the current encounter.
   * @type {Combatant|null}
   */
  get combatant(): Combatant | null
  /**
   * An indicator for whether this Token is currently involved in the active combat encounter.
   * @type {boolean}
   */
  get inCombat(): boolean
  /**
   * The movement history.
   * @type {TokenMeasuredMovementWaypoint[]}
   */
  get movementHistory(): TokenMeasuredMovementWaypoint[]
  /**
   * Check if the document has a distinct subject texture (inferred or explicit).
   * @type {boolean}
   */
  get hasDistinctSubjectTexture(): boolean
  /**
   * The Regions this Token is currently in.
   * @type {Set<RegionDocument>}
   */
  regions: Set<RegionDocument>
  /** @inheritDoc */
  _initializeSource(data: any, options: any): object
  /** @inheritDoc */
  _initialize(options?: object): void
  /** @override */
  override prepareBaseData(): void
  alpha: any
  /** @inheritDoc */
  prepareEmbeddedDocuments(): void
  /** @inheritDoc */
  prepareDerivedData(): void
  /**
   * Infer the subject texture path to use for a token ring.
   * @returns {string}
   * @protected
   */
  protected _inferRingSubjectTexture(): string
  /**
   * Infer the movement action.
   * The default implementation returns `CONFIG.Token.movement.defaultAction`.
   * @returns {string}
   * @protected
   */
  protected _inferMovementAction(): string
  /**
   * Prepare detection modes which are available to the Token.
   * Ensure that every Token has the basic sight detection mode configured.
   * @protected
   */
  protected _prepareDetectionModes(): void
  /**
   * A helper method to retrieve the underlying data behind one of the Token's attribute bars
   * @param {string} barName                The named bar to retrieve the attribute for
   * @param {object} [options]
   * @param {string} [options.alternative]  An alternative attribute path to get instead of the default one
   * @returns {object|null}                 The attribute displayed on the Token bar, if any
   */
  getBarAttribute(
    barName: string,
    {
      alternative,
    }?: {
      alternative?: string | undefined
    },
  ): object | null
  /**
   * Test whether a Token has a specific status effect.
   * @param {string} statusId     The status effect ID as defined in CONFIG.statusEffects
   * @returns {boolean}           Does the Actor of the Token have this status effect?
   */
  hasStatusEffect(statusId: string): boolean
  /**
   * Move the Token through the given waypoint(s).
   * @param {Partial<TokenMovementWaypoint> | Partial<TokenMovementWaypoint>[]} waypoints
   *                                       The waypoint(s) to move the Token through
   * @param {Partial<Omit<DatabaseUpdateOperation, "updates"> & {method: TokenMovementMethod;
   *   autoRotate: boolean; showRuler: boolean, constrainOptions: Omit<TokenConstrainMovementPathOptions,
   *   "preview"|"history">}>} [options]    Parameters of the update operation
   * @returns {Promise<boolean>}    A Promise that resolves to true if the Token was moved, otherwise resolves to false
   */
  move(
    waypoints: Partial<TokenMovementWaypoint> | Partial<TokenMovementWaypoint>[],
    {
      method,
      constrainOptions,
      autoRotate,
      showRuler,
      ...options
    }?: Partial<
      Omit<DatabaseUpdateOperation, "updates"> & {
        method: TokenMovementMethod
        autoRotate: boolean
        showRuler: boolean
        constrainOptions: Omit<TokenConstrainMovementPathOptions, "preview" | "history">
      }
    >,
  ): Promise<boolean>
  /**
   * Undo all recorded movement or the recorded movement corresponding to given movement ID up to the last movement.
   * The token is displaced to the prior recorded position and the movement history it rolled back accordingly.
   * @overload
   * @param {string} [movementId]    The ID of the recorded movement to undo
   * @returns {Promise<boolean>}     True if the movement was undone, otherwise false
   */
  revertRecordedMovement(movementId?: string | undefined): Promise<boolean>
  /**
   * Resize the token Token such that its center point remains (almost) unchanged. The center point might change
   * slightly because the new (x, y) position is rounded.
   * @param {Partial<TokenDimensions>} dimensions                            The new dimensions
   * @param {Partial<Omit<DatabaseUpdateOperation, "updates">>} [options]    Parameters of the update operation
   * @returns {Promise<boolean>}  A Promise that resolves to true if the Token was resized, otherwise resolves to false
   */
  resize(
    { width, height, shape }: Partial<TokenDimensions>,
    options?: Partial<Omit<DatabaseUpdateOperation, "updates">>,
  ): Promise<boolean>
  /**
   * Stop the movement of this Token document. The movement cannot be continued after being stopped.
   * Only the User that initiated the movement can stop it.
   * @returns {boolean}    True if the movement was or is stopped, otherwise false
   */
  stopMovement(): boolean
  /**
   * This function is called on Token documents that are still being moved by a User that just disconnected.
   * @internal
   */
  _stopMovementOnDisconnect(): void
  /**
   * Pause the movement of this Token document. The movement can be resumed after being paused.
   * Only the User that initiated the movement can pause it.
   * Returns a callback that can be used to resume the movement later.
   * Only after all callbacks and keys have been called the movement of the Token is resumed.
   * If the callback is called within the update operation workflow, the movement is resumed after the workflow.
   * @overload
   * @returns {TokenResumeMovementCallback|null}  The callback to resume movement if the movement was or is paused,
   *                                              otherwise null
   * @example
   * ```js
   * // This is an Execute Script Region Behavior that makes the token invisible
   * // On TOKEN_MOVE_IN...
   * if ( !event.user.isSelf ) return;
   * const resumeMovement = event.data.token.pauseMovement();
   * event.data.token.toggleStatusEffect("invisible", {active: true});
   * const resumed = await resumeMovement();
   * ```
   */
  pauseMovement(): TokenResumeMovementCallback | null
  /**
   * Pause the movement of this Token document. The movement can be resumed after being paused.
   * Only the User that initiated the movement can pause it.
   * Returns a promise that resolves to true if the movement was resumed by
   * {@link TokenDocument#resumeMovement} with the same key that was passed to this function.
   * Only after all callbacks and keys have been called the movement of the Token is resumed.
   * If the callback is called within the update operation workflow, the movement is resumed after the workflow.
   * @overload
   * @param {string} key               The key to resume movement with {@link TokenDocument#resumeMovement}
   * @returns {Promise<boolean>|null}  The continuation promise if the movement was paused, otherwise null
   * @example
   * ```js
   * // This is an Execute Script Region Behavior of a pressure plate that activates a trap
   * // On TOKEN_MOVE_IN...
   * if ( event.user.isSelf ) {
   *   event.data.token.pauseMovement(this.parent.uuid);
   * }
   * if ( game.user.isActiveGM ) {
   *   const trapUuid; // The Region Behavior UUID of the trap
   *   const trapBehavior = await fromUuid(trapUuid);
   *   await trapBehavior.update({disabled: false});
   *   event.data.token.resumeMovement(event.data.movement.id, this.parent.uuid);
   * }
   * ```
   */
  pauseMovement(key: string): Promise<boolean> | null
  /**
   * Resume the movement given its ID and the key that was passed to {@link TokenDocument#pauseMovement}.
   * @param {string} movementId    The movement ID
   * @param {string} key           The key that was passed to {@link TokenDocument#pauseMovement}
   */
  resumeMovement(movementId: string, key: string): void
  /**
   * Measure the movement path for this Token.
   * @param {TokenMeasureMovementPathWaypoint[]} waypoints     The waypoints of movement
   * @param {object} [options]                                 Additional measurement options
   * @param {TokenMovementCostFunction} [options.cost]         The function that returns the cost
   *   for a given move between grid spaces (default is the distance travelled along the direct path)
   * @param {TokenMovementCostAggregator} [options.aggregator] The cost aggregator.
   *                                                           Default: `CONFIG.Token.movement.costAggregator`.
   * @returns {GridMeasurePathResult}
   */
  measureMovementPath(
    waypoints: TokenMeasureMovementPathWaypoint[],
    {
      cost,
      aggregator,
    }?: {
      cost?: TokenMovementCostFunction | undefined
      aggregator?: TokenMovementCostAggregator | undefined
    },
  ): GridMeasurePathResult
  /**
   * Get the path of movement with the intermediate steps of the direct path between waypoints.
   * @param {TokenGetCompleteMovementPathWaypoint[]} waypoints    The waypoints of movement
   * @returns {TokenCompleteMovementWaypoint[]}                   The path of movement with all intermediate steps
   */
  getCompleteMovementPath(waypoints: TokenGetCompleteMovementPathWaypoint[]): TokenCompleteMovementWaypoint[]
  /**
   * Add or remove this Token from a Combat encounter.
   * @param {object} [options={}]         Additional options passed to TokenDocument.createCombatants or
   *                                      TokenDocument.deleteCombatants
   * @param {boolean} [options.active]      Require this token to be an active Combatant or to be removed.
   *                                        Otherwise, the current combat state of the Token is toggled.
   * @returns {Promise<boolean>}          Is this Token now an active Combatant?
   */
  toggleCombatant({ active, ...options }?: { active?: boolean | undefined }): Promise<boolean>
  /**
   * Convenience method to change a token vision mode.
   * @param {string} visionMode                     The vision mode to apply to this token.
   * @param {boolean} [defaults=true]               If the vision mode should be updated with its defaults.
   * @returns {Promise<TokenDocument|undefined>}    The updated Document instance, or undefined not updated.
   */
  updateVisionMode(visionMode: string, defaults?: boolean): Promise<TokenDocument | undefined>
  /** @inheritDoc */
  getEmbeddedCollection(embeddedName: any): any
  /** @inheritDoc */
  _onCreate(data: any, options: any, userId: any): void
  /** @inheritDoc */
  _preUpdate(changed: any, options: any, user: any): Promise<false | undefined>
  /** @inheritDoc */
  _onUpdate(changed: any, options: any, userId: any): void
  /** @inheritDoc */
  _onDelete(options: any, userId: any): void
  /**
   * Identify the Regions the Token currently is or is going to be in after the changes are applied.
   * @param {object} [changes]    The changes that will be applied to this Token
   * @returns {string[]}          The Region IDs this Token is in after the changes are applied (sorted)
   * @internal
   */
  _identifyRegions(changes?: object): string[]
  /**
   * Reject the movement or modify the update operation as needed based on the movement.
   * Called after the movement for this document update has been determined.
   * The waypoints of movement are final and cannot be changed. The movement can only be rejected entirely.
   * @param {DeepReadonly<Omit<TokenMovementOperation, "autoRotate"|"showRuler">>
   *   & Pick<TokenMovementOperation, "autoRotate"|"showRuler">} movement    The pending movement of this Token
   * @param {Partial<DatabaseUpdateOperation>} operation                     The update operation
   * @returns {Promise<boolean|void>}                                        If false, the movement is prevented
   * @protected
   */
  protected _preUpdateMovement(
    movement: DeepReadonly<Omit<TokenMovementOperation, "autoRotate" | "showRuler">> &
      Pick<TokenMovementOperation, "autoRotate" | "showRuler">,
    operation: Partial<DatabaseUpdateOperation>,
  ): Promise<boolean | void>
  /**
   * Post-process an update operation of a movement.
   * @param {DeepReadonly<TokenMovementOperation>} movement    The movement of this Token
   * @param {Partial<DatabaseUpdateOperation>} operation       The update operation
   * @param {User} user                                        The User that requested the update operation
   * @protected
   */
  protected _onUpdateMovement(
    movement: DeepReadonly<TokenMovementOperation>,
    operation: Partial<DatabaseUpdateOperation>,
    user: User,
  ): void
  /**
   * Called when the current movement is stopped.
   * @protected
   */
  protected _onMovementStopped(): void
  /**
   * Called when the current movement is paused.
   * @protected
   */
  protected _onMovementPaused(): void
  /**
   * Called when the movement is recorded or cleared.
   * @protected
   */
  protected _onMovementRecorded(): void
  /**
   * Should the movement of this Token update be recorded in the movement history?
   * Called as part of the preUpdate workflow if the Token is moved.
   * @returns {boolean}    Should the movement of this Token update be recorded in the movement history?
   * @protected
   */
  protected _shouldRecordMovementHistory(): boolean
  /**
   * Clear the movement history of this Token.
   * @returns {Promise<void>}
   */
  clearMovementHistory(): Promise<void>
  /**
   * Is the Token document updated such that the Regions the Token is contained in may change?
   * Called as part of the preUpdate workflow.
   * @param {object} changes    The changes.
   * @returns {boolean}         Could this Token update change Region containment?
   * @protected
   */
  protected _couldRegionsChange(changes: object): boolean
  /**
   * Test whether the Token is inside the Region.
   * This function determines the state of {@link TokenDocument#regions} and
   * {@link foundry.documents.RegionDocument#tokens}.
   * The Token and the Region must be in the same Scene.
   *
   * Implementations of this function are restricted in the following ways:
   *   - If the bounds (given by {@link TokenDocument#getSize}) of the Token do not intersect the
   *     Region, then the Token is not contained within the Region.
   *   - If the Token is inside the Region a particular elevation, then the Token is inside the Region at any elevation
   *     within the elevation range of the Region.
   *   - This function must not use prepared field values that are animated. In particular, it must use the source
   *     instead of prepared values of the following fields: `x`, `y`, `elevation`, `width`, `height`, and `shape`.
   *
   * If this function is overridden, then {@link TokenDocument#segmentizeRegionMovementPath} must be
   * overridden too.
   *
   * If an override of this function uses Token document fields other than `x`, `y`, `elevation`, `width`, `height`, and
   * `shape`, {@link TokenDocument#_couldRegionsChange} must be overridden to return true for changes
   * of these fields. If an override of this function uses non-Token properties other than `Scene#grid.type` and
   * `Scene#grid.size`,
   * {@link foundry.documents.Scene#updateTokenRegions} must be called when any of those properties change.
   * @overload
   * @param {RegionDocument} region                              The region.
   * @returns {boolean}                                          Is inside the Region?
   */
  testInsideRegion(region: RegionDocument): boolean
  /**
   * @overload
   * @param {RegionDocument} region                              The region.
   * @param {(Partial<ElevatedPoint & TokenDimensions>)} data    The position and dimensions. Defaults to the values of
   *                                                             the document source.
   * @returns {boolean}                                          Is inside the Region?
   */
  testInsideRegion(region: RegionDocument, data: Partial<ElevatedPoint & TokenDimensions>): boolean
  /**
   * Split the Token movement path through the Region into its segments.
   * The Token and the Region must be in the same Scene.
   *
   * Implementations of this function are restricted in the following ways:
   *   - The segments must go through the waypoints.
   *   - The *from* position matches the *to* position of the succeeding segment.
   *   - The Token must be contained (w.r.t. {@link TokenDocument#testInsideRegion}) within the Region
   *     at the *from* and *to* of MOVE segments.
   *   - The Token must be contained (w.r.t. {@link TokenDocument#testInsideRegion}) within the Region
   *     at the *to* position of ENTER segments.
   *   - The Token must be contained (w.r.t. {@link TokenDocument#testInsideRegion}) within the Region
   *     at the *from* position of EXIT segments.
   *   - The Token must not be contained (w.r.t. {@link TokenDocument#testInsideRegion}) within the
   *     Region at the *from* position of ENTER segments.
   *   - The Token must not be contained (w.r.t. {@link TokenDocument#testInsideRegion}) within the
   *     Region at the *to* position of EXIT segments.
   *   - This function must not use prepared field values that are animated. In particular, it must use the source
   *     instead of prepared values of the following fields: `x`, `y`, `elevation`, `width`, `height`, and `shape`.
   * @param {RegionDocument} region                           The region
   * @param {TokenSegmentizeMovementWaypoint[]} waypoints     The waypoints of movement
   * @returns {TokenRegionMovementSegment[]}                  The movement split into its segments
   */
  segmentizeRegionMovementPath(
    region: RegionDocument,
    waypoints: TokenSegmentizeMovementWaypoint[],
  ): TokenRegionMovementSegment[]
  /** @inheritDoc */
  _preCreateDescendantDocuments(parent: any, collection: any, data: any, options: any, userId: any): void
  /** @inheritDoc */
  _preUpdateDescendantDocuments(parent: any, collection: any, changes: any, options: any, userId: any): void
  /** @inheritDoc */
  _preDeleteDescendantDocuments(parent: any, collection: any, ids: any, options: any, userId: any): void
  /** @inheritDoc */
  _onCreateDescendantDocuments(parent: any, collection: any, documents: any, data: any, options: any, userId: any): void
  /** @inheritDoc */
  _onUpdateDescendantDocuments(
    parent: any,
    collection: any,
    documents: any,
    changes: any,
    options: any,
    userId: any,
  ): void
  /** @inheritDoc */
  _onDeleteDescendantDocuments(parent: any, collection: any, documents: any, ids: any, options: any, userId: any): void
  /**
   * When the base Actor for a TokenDocument changes, we may need to update its Actor instance
   * @param {object} [update={}]                               The update delta
   * @param {Partial<DatabaseUpdateOperation>} [options={}]    The database operation that was performed
   * @internal
   */
  _onUpdateBaseActor(update?: object, options?: Partial<DatabaseUpdateOperation>): void
  /**
   * Whenever the token's actor delta changes, or the base actor changes, perform associated refreshes.
   * @param {object|object[]} [update] The update delta
   * @param {Partial<DatabaseOperation>} [operation] The database operation that was performed
   * @protected
   */
  protected _onRelatedUpdate(update?: object | object[], operation?: Partial<DatabaseOperation>): void
  /**
   * @deprecated since v12
   * @ignore
   */
  toggleActiveEffect(
    effectData: any,
    {
      overlay,
      active,
    }?: {
      overlay?: boolean | undefined
    },
  ): Promise<boolean>
  #private
}
import type { DatabaseOperation, DatabaseUpdateOperation } from "@common/abstract/_types.mjs"
import type DataModel from "@common/abstract/data.mjs"
import type { TokenShapeType } from "@common/constants.mjs"
import type { SchemaField } from "@common/data/fields.mjs"
import type { TokenData, TokenDimensions, TokenPosition } from "@common/documents/_types.mjs"
import BaseToken from "@common/documents/token.mjs"
import type { BaseGrid, HexagonalGrid } from "@common/grid/_module.mjs"
import type { GridMeasurePathResult, GridMeasurePathWaypointData3D } from "@common/grid/_types.mjs"
import type Collection from "@common/utils/collection.mjs"
import type { DeepReadonly, ElevatedPoint, TokenConstrainMovementPathOptions } from "../_types.mjs"
import type { Actor, Combat, Combatant, RegionDocument, User } from "./_module.mjs"
import type {
  TokenCompleteMovementWaypoint,
  TokenGetCompleteMovementPathWaypoint,
  TokenMeasuredMovementWaypoint,
  TokenMeasureMovementPathWaypoint,
  TokenMovementContinuationData,
  TokenMovementCostAggregator,
  TokenMovementCostFunction,
  TokenMovementData,
  TokenMovementMethod,
  TokenMovementOperation,
  TokenMovementSegmentData,
  TokenMovementWaypoint,
  TokenRegionMovementSegment,
  TokenResumeMovementCallback,
  TokenSegmentizeMovementWaypoint,
  TrackedAttributesDescription,
} from "./_types.mjs"
