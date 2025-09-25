export * from "@common/documents/_types.mjs";
/**
 * The data that is planned to be imported for the adventure, categorized into new documents that will be created and
 * existing documents that will be updated.
 */
export type AdventureImportData = {
    /**
     * Arrays of document data to create, organized by document name
     */
    toCreate: Record<string, object[]>;
    /**
     * Arrays of document data to update, organized by document name
     */
    toUpdate: Record<string, object[]>;
    /**
     * The total count of documents to import
     */
    documentCount: number;
};
/**
 * A callback function that is invoked and awaited during import data preparation before the adventure import proceeds.
 * This can be used to perform custom pre-processing on the import data.
 */
export type AdventurePreImportCallback = (data: AdventureImportData, options: AdventureImportOptions) => Promise<void>;
/**
 * Options which customize how the adventure import process is orchestrated.
 * Modules can use the preImportAdventure hook to extend these options by adding preImport or postImport callbacks.
 */
export type AdventureImportOptions = {
    /**
     * Display a warning dialog if existing documents would be overwritten
     */
    dialog?: boolean | undefined;
    /**
     * A subset of adventure fields to import
     */
    importFields?: string[] | undefined;
    /**
     * An array of awaited pre-import callbacks
     */
    preImport?: AdventurePreImportCallback[] | undefined;
    /**
     * An array of awaited post-import callbacks
     */
    postImport?: AdventurePostImportCallback[] | undefined;
};
/**
 * A report of the world Document instances that were created or updated during the import process.
 */
export type AdventureImportResult = {
    /**
     * Documents created as a result of the import, grouped by document name
     */
    created: Record<string, Document[]>;
    /**
     * Documents updated as a result of the import, grouped by document name
     */
    updated: Record<string, Document[]>;
};
/**
 * A callback function that is invoked and awaited after import but before the overall import workflow concludes.
 * This can be used to perform additional custom adventure setup steps.
 */
export type AdventurePostImportCallback = (result: AdventureImportResult, options: AdventureImportOptions) => Promise<void>;
export type _ActiveEffectDuration = {
    /**
     * The duration type, either "seconds", "turns", or "none"
     */
    type: string;
    /**
     * The total effect duration, in seconds of world time or as a decimal
     * number with the format {rounds}.{turns}
     */
    duration: number | null;
    /**
     * The remaining effect duration, in seconds of world time or as a decimal
     * number with the format {rounds}.{turns}
     */
    remaining: number | null;
    /**
     * A formatted string label that represents the remaining duration
     */
    label: string;
    /**
     * An internal flag used determine when to recompute seconds-based duration
     */
    _worldTime?: number | undefined;
    /**
     * An internal flag used determine when to recompute turns-based duration
     */
    _combatTime?: number | undefined;
};
export type ActiveEffectDuration = EffectDurationData & _ActiveEffectDuration;
/**
 * A node of a Folder-content tree
 */
export type FolderChildNode = {
    /**
     * Whether this is the root node of a tree
     */
    root: boolean;
    /**
     * The Folder document represented by this node
     */
    folder: Folder;
    /**
     * This node's depth number in the tree
     */
    depth: number;
    /**
     * Whether the Folder is visible to the current User
     */
    visible: boolean;
    /**
     * Child nodes of this node
     */
    children: FolderChildNode[];
    /**
     * Loose contents in this node
     */
    entries: Document[] | CompendiumCollection[];
};
export type CombatHistoryData = {
    round: number;
    turn: number | null;
    tokenId: string | null;
    combatantId: string | null;
};
export type CombatTurnEventContext = {
    /**
     * The round
     */
    round: number;
    /**
     * The turn
     */
    turn: number;
    /**
     * Was skipped?
     */
    skipped: boolean;
};
export type CombatRoundEventContext = Omit<CombatTurnEventContext, "turn">;
export type RegionEvent<Data = object> = {
    /**
     * The name of the event
     */
    name: string;
    /**
     * The data of the event
     */
    data: object;
    /**
     * The Region the event was triggered on
     */
    region: RegionDocument;
    /**
     * The User that triggered the event
     */
    user: User;
};
export type RegionRegionBoundaryEvent = RegionEvent<{}>;
export type RegionBehaviorActivatedEvent = RegionEvent<{}>;
export type RegionBehaviorDeactivatedEvent = RegionEvent<{}>;
export type RegionBehaviorViewedEvent = RegionEvent<{}>;
export type RegionBehaviorUnviewedEvent = RegionEvent<{}>;
export type RegionTokenEnterExitEventData = {
    /**
     * The Token that entered/exited the Region
     */
    token: TokenDocument;
    /**
     * The movement if the Token entered/exited by moving out of the Region
     */
    movement: TokenMovementOperation | null;
};
export type RegionTokenEnterExitEvent = RegionEvent<RegionTokenEnterExitEventData>;
export type RegionTokenEnterEvent = RegionTokenEnterExitEvent;
export type RegionTokenExitEvent = RegionTokenEnterExitEvent;
export type RegionTokenMoveEventData = {
    /**
     * The Token that moved into/out of/within the Region
     */
    token: TokenDocument;
    /**
     * The movement
     */
    movement: TokenMovementOperation;
};
export type RegionTokenMoveEvent = RegionEvent<RegionTokenMoveEventData>;
export type RegionTokenMoveInEvent = RegionTokenMoveEvent;
export type RegionTokenMoveOutEvent = RegionTokenMoveEvent;
export type RegionTokenMoveWithinEvent = RegionTokenMoveEvent;
export type RegionTokenAnimateEventData = {
    /**
     * The Token that animated into/out of the Region
     */
    token: TokenDocument;
    /**
     * The position of the Token when it moved into/out of the Region
     */
    position: TokenPosition;
};
export type RegionTokenAnimateEvent = RegionEvent<RegionTokenAnimateEventData>;
export type RegionTokenAnimateInEvent = RegionTokenAnimateEvent;
export type RegionTokenAnimateOutEvent = RegionTokenAnimateEvent;
export type RegionTokenTurnEventData = {
    /**
     * The Token that started/ended its Combat turn
     */
    token: TokenDocument;
    /**
     * The Combatant of the Token that started/ended its Combat turn
     */
    combatant: Combatant;
    /**
     * The Combat
     */
    combat: Combat;
    /**
     * The round of this turn
     */
    round: number;
    /**
     * The turn that started/ended
     */
    turn: number;
    /**
     * Was the turn skipped?
     */
    skipped: boolean;
};
export type RegionTokenTurnEvent = RegionEvent<RegionTokenTurnEventData>;
export type RegionTokenTurnStartEvent = RegionTokenTurnEvent;
export type RegionTokenTurnEndEvent = RegionTokenTurnEvent;
export type RegionTokenRoundEventData = {
    /**
     * The Token
     */
    token: TokenDocument;
    /**
     * The Combatant of the Token
     */
    combatant: Combatant;
    /**
     * The Combat
     */
    combat: Combat;
    /**
     * The round that started/ended
     */
    round: number;
    /**
     * Was the round skipped?
     */
    skipped: boolean;
};
export type RegionTokenRoundEvent = RegionEvent<RegionTokenRoundEventData>;
export type RegionTokenRoundStartEvent = RegionTokenRoundEvent;
export type RegionTokenRoundEndEvent = RegionTokenRoundEvent;
export type RegionMovementSegment = {
    /**
     * The type of this segment (see {@link CONST.REGION_MOVEMENT_SEGMENTS}).
     */
    type: RegionMovementSegmentType;
    /**
     * The waypoint that this segment starts from.
     */
    from: ElevatedPoint;
    /**
     * The waypoint that this segment goes to.
     */
    to: ElevatedPoint;
    /**
     * Teleport between the waypoints?
     */
    teleport: boolean;
};
export type RegionSegmentizeMovementPathWaypoint = {
    /**
     * The x-coordinate in pixels (integer).
     */
    x: number;
    /**
     * The y-coordinate in pixels (integer).
     */
    y: number;
    /**
     * The elevation in grid units.
     */
    elevation: number;
    /**
     * Teleport from the previous to this waypoint? Default: `false`.
     */
    teleport?: boolean | undefined;
};
/**
 * An object containing the executed Roll and the produced results
 */
export type RollTableDraw = {
    /**
     * The Dice roll which generated the draw
     */
    roll: Roll;
    /**
     * An array of drawn TableResult documents
     */
    results: TableResult[];
};
export type SceneDimensions = {
    /**
     * The width of the canvas.
     */
    width: number;
    /**
     * The height of the canvas.
     */
    height: number;
    /**
     * The grid size.
     */
    size: number;
    /**
     * The canvas rectangle.
     */
    rect: PIXI.Rectangle;
    /**
     * The X coordinate of the scene rectangle within the larger canvas.
     */
    sceneX: number;
    /**
     * The Y coordinate of the scene rectangle within the larger canvas.
     */
    sceneY: number;
    /**
     * The width of the scene.
     */
    sceneWidth: number;
    /**
     * The height of the scene.
     */
    sceneHeight: number;
    /**
     * The scene rectangle.
     */
    sceneRect: PIXI.Rectangle;
    /**
     * The number of distance units in a single grid space.
     */
    distance: number;
    /**
     * The factor to convert distance units to pixels.
     */
    distancePixels: number;
    /**
     * The units of distance.
     */
    units: string;
    /**
     * The aspect ratio of the scene rectangle.
     */
    ratio: number;
    /**
     * The length of the longest line that can be drawn on the canvas.
     */
    maxR: number;
    /**
     * The number of grid rows on the canvas.
     */
    rows: number;
    /**
     * The number of grid columns on the canvas.
     */
    columns: number;
};
export type TrackedAttributesDescription = {
    /**
     * A list of property path arrays to attributes with both a value and a max property.
     */
    bar: string[][];
    /**
     * A list of property path arrays to attributes that have only a value property.
     */
    value: string[][];
};
export type TokenMeasuredMovementWaypoint = {
    /**
     * The top-left x-coordinate in pixels (integer).
     */
    x: number;
    /**
     * The top-left y-coordinate in pixels (integer).
     */
    y: number;
    /**
     * The elevation in grid units.
     */
    elevation: number;
    /**
     * The width in grid spaces (positive).
     */
    width: number;
    /**
     * The height in grid spaces (positive).
     */
    height: number;
    /**
     * The shape type (see {@link CONST.TOKEN_SHAPES}).
     */
    shape: TokenShapeType;
    /**
     * The movement action from the previous to this waypoint.
     */
    action: string;
    /**
     * The terrain data from the previous to this waypoint.
     */
    terrain: DataModel | null;
    /**
     * Was this waypoint snapped to the grid?
     */
    snapped: boolean;
    /**
     * Was this waypoint explicitly placed by the user?
     */
    explicit: boolean;
    /**
     * Is this waypoint a checkpoint?
     */
    checkpoint: boolean;
    /**
     * Is this waypoint intermediate?
     */
    intermediate: boolean;
    /**
     * The ID of the user that moved the token to from the previous to this waypoint.
     */
    userId: string;
    /**
     * The ID of the movement from the previous to this waypoint.
     */
    movementId: string;
    /**
     * The movement cost from the previous to this waypoint (nonnegative).
     */
    cost: number;
};
export type TokenMovementWaypoint = Omit<TokenMeasuredMovementWaypoint, "terrain" | "intermediate" | "userId" | "movementId" | "cost">;
export type TokenMovementSegmentData = Pick<TokenMeasuredMovementWaypoint, "width" | "height" | "shape" | "action" | "terrain"> & {
    actionConfig: TokenMovementActionConfig;
    teleport: boolean;
};
export type TokenMeasureMovementPathWaypoint = {
    /**
     * The top-left x-coordinate in pixels (integer).
     *                                  Default: the previous or source x-coordinate.
     */
    x?: number | undefined;
    /**
     * The top-left y-coordinate in pixels (integer).
     *                                  Default: the previous or source y-coordinate.
     */
    y?: number | undefined;
    /**
     * The elevation in grid units.
     *                          Default: the previous or source elevation.
     */
    elevation?: number | undefined;
    /**
     * The width in grid spaces (positive).
     *                              Default: the previous or source width.
     */
    width?: number | undefined;
    /**
     * The height in grid spaces (positive).
     *                             Default: the previous or source height.
     */
    height?: number | undefined;
    /**
     * The shape type (see {@link CONST.TOKEN_SHAPES}).
     *                      Default: the previous or source shape.
     */
    shape?: TokenShapeType | undefined;
    /**
     * The movement action from the previous to this waypoint.
     *                             Default: the previous or prepared movement action.
     */
    action?: string | undefined;
    /**
     * The terrain data of this segment. Default: `null`.
     */
    terrain?: DataModel<object, foundry.abstract.types.DataModelConstructionContext> | null | undefined;
    /**
     * A predetermined cost (nonnegative) or cost function
     *     to be used instead of `options.cost`.
     */
    cost?: number | TokenMovementCostFunction | undefined;
};
export type TokenMeasureMovementPathOptions = {
    /**
     * Measure a preview path? Default: `false`.
     */
    preview?: boolean | undefined;
};
export type TokenMovementCostFunction = GridMeasurePathCostFunction3D<TokenMovementSegmentData>;
export type TokenMovementCostAggregator = (results: Array<DeepReadonly<{
    from: GridOffset3D;
    to: GridOffset3D;
    cost: number;
}>>, distance: number, segment: DeepReadonly<TokenMovementSegmentData>) => number;
export type TokenGetCompleteMovementPathWaypoint = {
    /**
     * The top-left x-coordinate in pixels (integer).
     *                        Default: the previous or source x-coordinate.
     */
    x?: number | undefined;
    /**
     * The top-left y-coordinate in pixels (integer).
     *                        Default: the previous or source y-coordinate.
     */
    y?: number | undefined;
    /**
     * The elevation in grid units.
     *                Default: the previous or source elevation.
     */
    elevation?: number | undefined;
    /**
     * The width in grid spaces (positive).
     *                    Default: the previous or source width.
     */
    width?: number | undefined;
    /**
     * The height in grid spaces (positive).
     *                   Default: the previous or source height.
     */
    height?: number | undefined;
    /**
     * The shape type (see {@link CONST.TOKEN_SHAPES}).
     *            Default: the previous or source shape.
     */
    shape?: TokenShapeType | undefined;
    /**
     * The movement action from the previous to this waypoint.
     *                   Default: the previous or prepared movement action.
     */
    action?: string | undefined;
    /**
     * The terrain data of this segment. Default: `null`.
     */
    terrain?: DataModel<object, foundry.abstract.types.DataModelConstructionContext> | null | undefined;
    /**
     * Was this waypoint snapped to the grid? Default: `false`.
     */
    snapped?: boolean | undefined;
    /**
     * Was this waypoint explicitly placed by the user? Default: `false`.
     */
    explicit?: boolean | undefined;
    /**
     * Is this waypoint a checkpoint? Default: `false`.
     */
    checkpoint?: boolean | undefined;
    /**
     * Is this waypoint intermediate? Default: `false`.
     */
    intermediate?: boolean | undefined;
};
export type TokenCompleteMovementWaypoint = Omit<TokenMeasuredMovementWaypoint, "userId" | "movementId" | "cost">;
export type TokenSegmentizeMovementWaypoint = {
    /**
     * The x-coordinate in pixels (integer).
     *                        Default: the previous or source x-coordinate.
     */
    x?: number | undefined;
    /**
     * The y-coordinate in pixels (integer).
     *                        Default: the previous or source y-coordinate.
     */
    y?: number | undefined;
    /**
     * The elevation in grid units.
     *                Default: the previous or source elevation.
     */
    elevation?: number | undefined;
    /**
     * The width in grid spaces (positive).
     *                    Default: the previous or source width.
     */
    width?: number | undefined;
    /**
     * The height in grid spaces (positive).
     *                   Default: the previous or source height.
     */
    height?: number | undefined;
    /**
     * The shape type (see {@link CONST.TOKEN_SHAPES}).
     *            Default: the previous or source shape.
     */
    shape?: TokenShapeType | undefined;
    /**
     * The movement action from the previous to this waypoint.
     *                   Default: the previous or prepared movement action.
     */
    action?: string | undefined;
    /**
     * The terrain data of this segment. Default: `null`.
     */
    terrain?: DataModel<object, foundry.abstract.types.DataModelConstructionContext> | null | undefined;
    /**
     * Was this waypoint snapped to the grid? Default: `false`.
     */
    snapped?: boolean | undefined;
};
export type TokenRegionMovementWaypoint = TokenPosition;
export type TokenRegionMovementSegment = {
    /**
     * The type of this segment (see {@link CONST.REGION_MOVEMENT_SEGMENTS}).
     */
    type: RegionMovementSegmentType;
    /**
     * The waypoint that this segment starts from.
     */
    from: TokenRegionMovementWaypoint;
    /**
     * The waypoint that this segment goes to.
     */
    to: TokenRegionMovementWaypoint;
    /**
     * The movement action between the waypoints.
     */
    action: string;
    /**
     * The terrain data of this segment.
     */
    terrain: DataModel | null;
    /**
     * Is the destination snapped to the grid?
     */
    snapped: boolean;
};
export type TokenMovementSectionData = {
    /**
     * The waypoints of the movement path
     */
    waypoints: TokenMeasuredMovementWaypoint[];
    /**
     * The distance of the movement path
     */
    distance: number;
    /**
     * The cost of the movement path
     */
    cost: number;
    /**
     * The number of spaces moved along the path
     */
    spaces: number;
    /**
     * The number of diagonals moved along the path
     */
    diagonals: number;
};
export type TokenMovementHistoryData = {
    /**
     * The recorded waypoints of the movement path
     */
    recorded: TokenMovementSectionData;
    /**
     * The unrecored waypoints of the movement path
     */
    unrecorded: TokenMovementSectionData;
    /**
     * The distance of the combined movement path
     */
    distance: number;
    /**
     * The cost of the combined movement path
     */
    cost: number;
    /**
     * The number of spaces moved along the combined path
     */
    spaces: number;
    /**
     * The number of diagonals moved along the combined path
     */
    diagonals: number;
};
export type TokenMovementMethod = "api" | "config" | "dragging" | "keyboard" | "paste" | "undo";
export type TokenMovementState = "completed" | "paused" | "pending" | "stopped";
export type TokenMovementData = {
    /**
     * The ID of the movement
     */
    id: string;
    /**
     * The chain of prior movement IDs that this movement is a continuation of
     */
    chain: string[];
    /**
     * The origin of movement
     */
    origin: TokenPosition;
    /**
     * The destination of movement
     */
    destination: TokenPosition;
    /**
     * The waypoints and measurements of the passed path
     */
    passed: TokenMovementSectionData;
    /**
     * The waypoints and measurements of the pending path
     */
    pending: TokenMovementSectionData;
    /**
     * The waypoints and measurements of the history path
     */
    history: TokenMovementHistoryData;
    /**
     * Was the movement constrained?
     */
    constrained: boolean;
    /**
     * Was the movement recorded in the movement history?
     */
    recorded: boolean;
    /**
     * The method of movement
     */
    method: TokenMovementMethod;
    /**
     *                                         The options to constrain movement
     */
    constrainOptions: Omit<TokenConstrainMovementPathOptions, "preview" | "history">;
    /**
     * Automatically rotate the token in the direction of movement?
     */
    autoRotate: boolean;
    /**
     * Show the ruler during the movement animation of the token?
     */
    showRuler: boolean;
    /**
     * The user that moved the token
     */
    user: User;
    /**
     * The state of the movement
     */
    state: TokenMovementState;
    /**
     * The update options of the movement operation
     */
    updateOptions: object;
};
export type TokenMovementOperation = Omit<TokenMovementData, "user" | "state" | "updateOptions">;
export type TokenMovementContinuationData = {
    /**
     * The movement ID
     */
    movementId: string;
    /**
     * The number of continuations
     */
    continueCounter: number;
    /**
     * Was continued?
     */
    continued: boolean;
    /**
     * The continuation promise
     */
    continuePromise: Promise<boolean> | null;
    /**
     * The promise to wait for before continuing movement
     */
    waitPromise: Promise<void>;
    /**
     * Resolve function of the wait promise
     */
    resolveWaitPromise: () => {} | undefined;
    /**
     * The promise that resolves after the update workflow
     */
    postWorkflowPromise: Promise<void>;
    /**
     * The movement continuation states
     */
    states: {
        [movementId: string]: {
            handles: Map<string | symbol, TokenMovementContinuationHandle>;
            callbacks: Array<(continued: boolean) => void>;
            pending: Set<string>;
        };
    };
};
export type TokenMovementContinuationHandle = {
    /**
     * The movement ID
     */
    movementId: string;
    /**
     * The continuation promise
     */
    continuePromise: Promise<boolean> | undefined;
};
export type TokenResumeMovementCallback = () => Promise<boolean>;
import type { Document } from "@common/abstract/_module.mjs";
import type { EffectDurationData } from "@client/documents/_types.mjs";
import type { Folder } from "./_module.mjs";
import type { RegionDocument } from "./_module.mjs";
import type { User } from "./_module.mjs";
import type { TokenDocument } from "./_module.mjs";
import type { TokenPosition } from "@client/documents/_types.mjs";
import type { Combatant } from "./_module.mjs";
import type { Combat } from "./_module.mjs";
import type { RegionMovementSegmentType } from "@common/constants.mjs";
import type Roll from "@client/dice/roll.mjs";
import type { TableResult } from "./_module.mjs";
import type { TokenShapeType } from "@common/constants.mjs";
import type { DataModel } from "@common/abstract/_module.mjs";
import type { TokenMovementActionConfig } from "../_types.mjs";
import type { GridMeasurePathCostFunction3D } from "@common/grid/_types.mjs";
import type { GridOffset3D } from "@common/grid/_types.mjs";
import type { DeepReadonly } from "../_types.mjs";
import type { TokenConstrainMovementPathOptions } from "../_types.mjs";
