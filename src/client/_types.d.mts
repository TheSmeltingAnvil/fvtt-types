export * from "../common/_types.mjs";
export type HotReloadData = {
    /**
     * The type of package which was modified
     */
    packageType: string;
    /**
     * The id of the package which was modified
     */
    packageId: string;
    /**
     * The updated stringified file content
     */
    content: string;
    /**
     * The relative file path which was modified
     */
    path: string;
    /**
     * The file extension which was modified, e.g. "js", "css", "html"
     */
    extension: string;
};
export type RulerWaypoint = {
    /**
     * The x-coordinate in pixels.
     */
    x: number;
    /**
     * The y-coordinate in pixels.
     */
    y: number;
    /**
     * The elevation in grid units.
     */
    elevation: number;
    /**
     * The index of the waypoint.
     */
    index: number;
    /**
     * The ray from the center point of previous to the
     * center point of this waypoint, or null if there is
     * no previous waypoint.
     */
    ray: Ray | null;
    /**
     * The measurements at this waypoint.
     */
    measurement: GridMeasurePathResultWaypoint;
    /**
     * The previous waypoint, if any.
     */
    previous: RulerWaypoint | null;
    /**
     * The next waypoint, if any.
     */
    next: RulerWaypoint | null;
};
export type TokenFindMovementPathWaypoint = {
    /**
     * The top-left x-coordinate in pixels (integer).
     *                     Default: the previous or source x-coordinate.
     */
    x?: number | undefined;
    /**
     * The top-left y-coordinate in pixels (integer).
     *                     Default: the previous or source y-coordinate.
     */
    y?: number | undefined;
    /**
     * The elevation in grid units.
     *             Default: the previous or source elevation.
     */
    elevation?: number | undefined;
    /**
     * The width in grid spaces (positive).
     *                 Default: the previous or source width.
     */
    width?: number | undefined;
    /**
     * The height in grid spaces (positive).
     *                Default: the previous or source height.
     */
    height?: number | undefined;
    /**
     * The shape type (see {@link CONST.TOKEN_SHAPES}).
     *         Default: the previous or source shape.
     */
    shape?: TokenShapeType | undefined;
    /**
     * The movement action from the previous to this waypoint.
     */
    action?: string | undefined;
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
};
export type TokenConstrainMovementPathWaypoint = {
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
export type TokenConstrainMovementPathOptions = {
    /**
     * Constrain a preview path? Default: `false`.
     */
    preview?: boolean | undefined;
    /**
     * Ignore walls? Default: `false`.
     */
    ignoreWalls?: boolean | undefined;
    /**
     * Ignore cost? Default: `false`.
     */
    ignoreCost?: boolean | undefined;
    /**
     * Consider movement history? If true, uses the current movement history.
     * If waypoints are passed, use those as the history. Default: `false`.
     */
    history?: boolean | readonly DeepReadonly<TokenMeasuredMovementWaypoint>[] | undefined;
};
export type TokenConstrainedMovementWaypoint = Omit<TokenMeasuredMovementWaypoint, "userId" | "movementId" | "cost">;
export type TokenFindMovementPathOptions = {
    /**
     * Find a preview path? Default: `false`.
     */
    preview?: boolean | undefined;
    /**
     * Ignore walls? Default: `false`.
     */
    ignoreWalls?: boolean | undefined;
    /**
     * Ignore cost? Default: `false`.
     */
    ignoreCost?: boolean | undefined;
    /**
     * Consider movement history? If true, uses the current movement history.
     * If waypoints are passed, use those as the history. Default: `false`.
     */
    history?: boolean | readonly DeepReadonly<TokenMeasuredMovementWaypoint>[] | undefined;
    /**
     * Unless the path can be found instantly, delay the start of the pathfinding
     *                computation by this number of milliseconds. Default: `0`.
     */
    delay?: number | undefined;
};
export type TokenFindMovementPathJob = {
    /**
     * The result of the pathfinding job. Undefined while the
     * search is in progress, null if the job was cancelled,
     * and the (partial) path if the job completed.
     */
    result: TokenMovementWaypoint[] | null | undefined;
    /**
     * The promise returning the (partial) path that as found
     * or null if cancelled.
     */
    promise: Promise<TokenMovementWaypoint[] | null>;
    /**
     * If this function is called and the job hasn't completed
     * yet, the job is cancelled.
     */
    cancel: () => void;
};
export type TokenGetTerrainMovementPathWaypoint = Omit<TokenGetCompleteMovementPathWaypoint, "terrain">;
export type TokenTerrainMovementWaypoint = Omit<TokenMeasuredMovementWaypoint, "userId" | "movementId" | "cost">;
export type TokenRulerData = {
    /**
     * The waypoints that were already passed by the Token
     */
    passedWaypoints: TokenMeasuredMovementWaypoint[];
    /**
     * The waypoints that the Token will try move to next
     */
    pendingWaypoints: TokenMeasuredMovementWaypoint[];
    /**
     * Movement planned by Users
     */
    plannedMovement: {
        [userId: string]: TokenPlannedMovement;
    };
};
export type TokenPlannedMovement = {
    /**
     * The found path, which goes
     * through all but the unreachable waypoints
     */
    foundPath: Omit<TokenMeasuredMovementWaypoint, "userId" | "movementId">[];
    /**
     * The unreachable
     * waypoints, which are those that are not reached by the found path
     */
    unreachableWaypoints: Omit<TokenMeasuredMovementWaypoint, "userId" | "movementId">[];
    /**
     * The movement history
     */
    history: TokenMeasuredMovementWaypoint[];
    /**
     * Is the path hidden?
     */
    hidden: boolean;
    /**
     * Is the pathfinding still in progress?
     */
    searching: boolean;
};
export type TokenRulerWaypointData = {
    /**
     * The config of the movement action
     */
    actionConfig: TokenMovementActionConfig;
    /**
     * The ID of movement, or null if planned movement.
     */
    movementId: string | null;
    /**
     * The index of the waypoint, which is equal to the number of
     * explicit waypoints from the first to this waypoint.
     */
    index: number;
    /**
     * The stage this waypoint belongs to.
     */
    stage: "passed" | "pending" | "planned";
    /**
     * Is this waypoint hidden?
     */
    hidden: boolean;
    /**
     * Is this waypoint unreachable?
     */
    unreachable: boolean;
    /**
     * The center point of the Token at this waypoint.
     */
    center: Point;
    /**
     * The size of the Token in pixels at this waypoint.
     */
    size: {
        width: number;
        height: number;
    };
    /**
     * The ray from the center point of previous to the center
     * point of this waypoint, or null if there is no previous
     * waypoint.
     */
    ray: Ray | null;
    /**
     * The measurements at this waypoint.
     */
    measurement: GridMeasurePathResultWaypoint;
    /**
     * The previous waypoint, if any.
     */
    previous: TokenRulerWaypoint | null;
    /**
     * The next waypoint, if any.
     */
    next: TokenRulerWaypoint | null;
};
export type TokenRulerWaypoint = Omit<TokenMeasuredMovementWaypoint, "movementId"> & TokenRulerWaypointData;
export type TokenDragContext = {
    token: Token;
    clonedToken: Token;
    origin: TokenPosition;
    destination: Omit<TokenMovementWaypoint, "width" | "height" | "shape" | "action"> & Partial<Pick<TokenMovementWaypoint, "width" | "height" | "shape" | "action">>;
    waypoints: (Omit<TokenMovementWaypoint, "width" | "height" | "shape" | "action"> & Partial<Pick<TokenMovementWaypoint, "width" | "height" | "shape" | "action">>)[];
    foundPath: TokenMovementWaypoint[];
    unreachableWaypoints: TokenMovementWaypoint[];
    hidden: boolean;
    updating: boolean;
    search: TokenFindMovementPathJob;
    searching: boolean;
    searchId: number;
    searchOptions: TokenFindMovementPathOptions;
};
export type TokenAnimationData = {
    /**
     * The x position in pixels
     */
    x: number;
    /**
     * The y position in pixels
     */
    y: number;
    /**
     * The elevation in grid units
     */
    elevation: number;
    /**
     * The width in grid spaces
     */
    width: number;
    /**
     * The height in grid spaces
     */
    height: number;
    /**
     * The alpha value
     */
    alpha: number;
    /**
     * The rotation in degrees
     */
    rotation: number;
    /**
     * The texture data
     */
    texture: {
        src: string;
        anchorX: number;
        anchorY: number;
        scaleX: number;
        scaleY: number;
        tint: Color;
    };
    /**
     * The ring data
     */
    ring: {
        subject: {
            texture: string;
            scale: number;
        };
    };
};
export type TokenAnimationContext = {
    /**
     * The name of the animation.
     */
    name: string | symbol;
    /**
     *                                               The animation chain.
     */
    chain: {
        to: Partial<TokenAnimationData>;
        options: Omit<TokenAnimationOptions, "duration"> & {
            duration: number;
        };
        promise: Promise<void>;
        resolve: () => void;
        reject: (error: Error) => void;
    }[];
    /**
     * The final animation state.
     */
    to: Partial<TokenAnimationData>;
    /**
     * The duration of the animation.
     */
    duration: number;
    /**
     * The current time of the animation.
     */
    time: number;
    /**
     *                                      Asynchronous functions that are executed before the animation starts
     */
    preAnimate: ((context: TokenAnimationContext) => Promise<void>)[];
    /**
     *                                      Synchronous functions that are executed after the animation ended. They may be
     *                                      executed before the `preAnimate` functions have finished if the animation is
     *                                      terminated.
     */
    postAnimate: ((context: TokenAnimationContext) => void)[];
    /**
     *                                      Synchronous functions that are executed each frame after `ontick` and before
     *                                      {@link foundry.canvas.placeables.Token#_onAnimationUpdate}.
     */
    onAnimate: ((context: TokenAnimationContext) => void)[];
    /**
     * The promise of the animation that resolves once it completes or is terminated.
     */
    promise: Promise<void>;
};
export type TokenAnimationOptions = {
    /**
     * The name of the animation, or null if nameless.
     *     Default: {@link foundry.canvas.placeables.Token#animationName}.
     */
    name?: string | symbol | null | undefined;
    /**
     * Chain the animation to the existing one of the same name? Default: `false`.
     */
    chain?: boolean | undefined;
    /**
     * The duration of the animation in milliseconds (nonnegative).
     *             Default: automatic (determined by
     *             {@link foundry.canvas.placeables.Token#_getAnimationDuration},
     *             which returns 1000 by default unless it's a movement animation).
     */
    duration?: number | undefined;
    /**
     * A desired base movement speed in grid size per second (positive),
     *        which determines the `duration` if the given `duration` is undefined and
     *        either `x`, `y`, `width`, `height`, or `rotation` is animated.
     *        Default: automatic (determined by
     *        {@link foundry.canvas.placeables.Token#_getAnimationMovementSpeed}).
     */
    movementSpeed?: number | undefined;
    /**
     * The movement action. Default: `this.document.movementAction`.
     */
    action?: string | undefined;
    /**
     * The terrain data. Default: `null`.
     */
    terrain?: DataModel<object, foundry.abstract.types.DataModelConstructionContext> | null | undefined;
    /**
     * The desired texture transition type.
     *    Default: automatic (determined by
     *    {@link foundry.canvas.placeables.Token#_getAnimationTransition},
     *    which returns `"fade"` by default).
     */
    transition?: TokenAnimationTransition | undefined;
    /**
     * The easing function of the animation.
     *   Default: `undefined` (linear).
     */
    easing?: CanvasAnimationEasingFunction | undefined;
    /**
     * An on-tick callback.
     */
    ontick?: ((elapsedMS: number, animation: CanvasAnimationData, data: TokenAnimationData) => void) | undefined;
};
export type TokenAnimationTransition = "crosshatch" | "dots" | "fade" | "glitch" | "hole" | "holeSwirl" | "hologram" | "morph" | "swirl" | "waterDrop" | "waves" | "wind" | "whiteNoise";
export type TokenMovementActionCostFunction = (baseCost: number, from: Readonly<GridOffset3D>, to: Readonly<GridOffset3D>, distance: number, segment: DeepReadonly<TokenMovementSegmentData>) => number;
export type TokenMovementActionConfig = {
    /**
     * The label of the movement action.
     */
    label: string;
    /**
     * The FontAwesome icon class.
     */
    icon: string;
    /**
     * An image filename. Takes precedence over the icon if both are supplied.
     */
    img: string | null;
    /**
     * The number that is used to sort the movement actions / movement action configs.
     * Determines the order in the Token Config/HUD and of cycling. Default: `0`.
     */
    order: number;
    /**
     * Is teleportation? If true, the movement does not go through all grid spaces
     * between the origin and destination: it goes from the origin immediately to the
     * destination grid space. Default: `false`.
     */
    teleport: boolean;
    /**
     * Is the movement measured? The distance, cost, spaces, and diagonals
     * of a segment that is not measured are always 0. Default: `true`.
     */
    measure: boolean;
    /**
     * The type of walls that block this movement, if any. Default: `"move"`.
     */
    walls: string | null;
    /**
     * Is segment of the movement visualized by the ruler? Default: `true`.
     */
    visualize: boolean;
    /**
     * Get the default animation options for this movement action. Default: `() => ({})`.
     */
    getAnimationOptions: (token: Token) => Pick<TokenAnimationOptions, "duration" | "movementSpeed" | "easing" | "ontick">;
    /**
     *   Can the current User select this movement action for the given Token? If selectable, the movement action of the
     *   Token can be set to this movement action by the User via the UI and when cycling. Default: `() => true`.
     */
    canSelect: (token: TokenDocument | PrototypeToken) => boolean;
    /**
     *   If set, this function is used to derive the terrain difficulty from from nonderived difficulties,
     *   which are those that do not have `deriveTerrainDifficulty` set.
     *   Used by {@link foundry.data.regionBehaviors.ModifyMovementCostRegionBehaviorType}.
     *   Derived terrain difficulties are not configurable via the behavior UI.
     */
    deriveTerrainDifficulty: ((nonDerivedDifficulties: {
        [action: string]: number;
    }) => number) | null;
    /**
     * The cost modification function. Default: `() => cost => cost`.
     */
    getCostFunction: (token: TokenDocument, options: TokenMeasureMovementPathOptions) => TokenMovementActionCostFunction;
};
export type CanvasViewPosition = {
    /**
     * The x-coordinate which becomes `stage.pivot.x`
     */
    x: number;
    /**
     * The y-coordinate which becomes `stage.pivot.y`
     */
    y: number;
    /**
     * The zoom level which becomes `stage.scale.x` and `y`
     */
    scale: number;
};
export type CanvasVisibilityTest = {
    point: ElevatedPoint;
    los: Map<PointVisionSource, boolean>;
};
export type CanvasVisibilityTestConfiguration = {
    /**
     * The target object
     */
    object: object | null;
    /**
     * An array of visibility tests
     */
    tests: CanvasVisibilityTest[];
};
export type CanvasVisibilityTextureConfiguration = {
    resolution: number;
    width: number;
    height: number;
    mipmap: number;
    scaleMode: number;
    alphaMode: number;
    multisample: number;
    format: number;
};
export type ReticuleOptions = {
    /**
     * The amount of margin between the targeting arrows and the token's bounding
     *         box, expressed as a fraction of an arrow's size.
     */
    margin?: number | undefined;
    /**
     * The alpha value of the arrows.
     */
    alpha?: number | undefined;
    /**
     * The size of the arrows as a proportion of grid size.
     *             Default: `CONFIG.Canvas.targeting.size`.
     */
    size?: number | undefined;
    /**
     * The color of the arrows.
     */
    color?: number | undefined;
    /**
     * The arrows' border style configuration.
     */
    border?: {
        /**
         * The border color.
         */
        color?: number | undefined;
        /**
         * The border width.
         */
        width?: number | undefined;
    } | undefined;
};
export type ActivityData = {
    /**
     * The ID of the scene that the user is viewing.
     */
    sceneId?: string | null | undefined;
    /**
     * The position of the user's cursor.
     */
    cursor?: Point | undefined;
    /**
     * The state of the user's ruler, if they are currently using one.
     */
    ruler?: ElevatedPoint[] | undefined;
    /**
     * The IDs of the tokens the user has targeted in the currently viewed
     *               scene.
     */
    targets?: string[] | undefined;
    /**
     * Whether the user has an open WS connection to the server or not.
     */
    active?: boolean | undefined;
    /**
     * Is the user emitting a ping at the cursor coordinates?
     */
    ping?: PingData | undefined;
    /**
     * The state of the user's AV settings.
     */
    av?: AVSettingsData | undefined;
};
export type CanvasPerformanceSettings = {
    /**
     * A performance mode in {@link CONST.CANVAS_PERFORMANCE_MODES}
     */
    mode: CanvasPerformanceMode;
    /**
     * Whether to use mipmaps, "ON" or "OFF"
     */
    mipmap: string;
    /**
     * Whether to apply MSAA at the overall canvas level
     */
    msaa: boolean;
    /**
     * Whether to apply SMAA at the overall canvas level
     */
    smaa: boolean;
    /**
     * Maximum framerate which should be the render target
     */
    fps: number;
    /**
     * Whether to display token movement animation
     */
    tokenAnimation: boolean;
    /**
     * Whether to display light source animation
     */
    lightAnimation: boolean;
    /**
     * Whether to render soft edges for light sources
     */
    lightSoftEdges: boolean;
};
export type CanvasSupportedComponents = {
    /**
     * Is WebGL2 supported?
     */
    webGL2: boolean;
    /**
     * Is reading pixels in RED format supported?
     */
    readPixelsRED: boolean;
    /**
     * Is the OffscreenCanvas supported?
     */
    offscreenCanvas: boolean;
};
export type _CanvasDimensions = {
    /**
     * The minimum, maximum, and default canvas scale.
     */
    scale: {
        min: number;
        max: number;
        default: number;
    };
    /**
     * The scaling factor for canvas UI elements.
     * Based on the normalized grid size (100px).
     */
    uiScale: number;
};
export type CanvasDimensions = SceneDimensions & _CanvasDimensions;
export type JournalEntryPageHeading = {
    /**
     * The heading level, 1-6.
     */
    level: number;
    /**
     * The raw heading text with any internal tags omitted.
     */
    text: string;
    /**
     * The generated slug for this heading.
     */
    slug: string;
    /**
     * The currently rendered element for this heading, if it exists.
     */
    element?: HTMLHeadingElement | undefined;
    /**
     * Any child headings of this one.
     */
    children: string[];
    /**
     * The linear ordering of the heading in the table of contents.
     */
    order: number;
};
export type SearchableField = DataField | { [K in string]: SearchableField; };
export type FromCompendiumOptions = {
    /**
     * Clear the currently assigned folder.
     */
    clearFolder?: boolean | undefined;
    /**
     * Clear fields which store Document state.
     */
    clearState?: boolean | undefined;
    /**
     * Clear the current sort order.
     */
    clearSort?: boolean | undefined;
    /**
     * Clear Document ownership (recursive).
     */
    clearOwnership?: boolean | undefined;
    /**
     * Retain the Document ID from the source Compendium.
     */
    keepId?: boolean | undefined;
};
export type _RollTableHTMLEmbedConfig = {
    /**
     * Adds a button allowing the table to be rolled directly from its embedded
     *   context.
     */
    rollable?: boolean | undefined;
    /**
     * The label to use for the range column. If rollable is true, this option is
     *        ignored.
     */
    rangeLabel?: string | undefined;
    /**
     * The label to use for the result column.
     */
    resultLabel?: string | undefined;
};
export type RollTableHTMLEmbedConfig = DocumentHTMLEmbedConfig & _RollTableHTMLEmbedConfig;
export type ManageCompendiumRequest = SocketRequest;
export type ManageCompendiumResponse = SocketResponse;
export type WorldCompendiumPackConfiguration = {
    folder: string | null;
    sort?: number | undefined;
    locked?: boolean | undefined;
    ownership: Record<Exclude<keyof typeof CONST.USER_ROLES, "NONE">, keyof typeof CONST.DOCUMENT_OWNERSHIP_LEVELS>;
};
export type WorldCompendiumConfiguration = Record<string, WorldCompendiumPackConfiguration>;
/**
 * A Client Setting
 */
export type SettingConfig = {
    /**
     * A unique machine-readable id for the setting
     */
    key: string;
    /**
     * The namespace the setting belongs to
     */
    namespace: string;
    /**
     * The human-readable name
     */
    name: string;
    /**
     * An additional human-readable hint
     */
    hint: string;
    /**
     * The scope the Setting is stored in, either World, Client, or User.
     */
    scope: "world" | "client" | "user";
    /**
     * Indicates if this Setting should render in the Config application
     */
    config: boolean;
    /**
     * The type of data stored by this Setting
     */
    type: BuiltinType | DataField | typeof DataModel;
    /**
     * For string Types, defines the allowable values
     */
    choices?: Object | undefined;
    /**
     * For numeric Types, defines the allowable range
     */
    range?: Object | undefined;
    /**
     * The default value
     */
    default?: any;
    /**
     * Executes when the value of this Setting changes
     */
    onChange?: Function | undefined;
    /**
     * A custom form field input used in conjunction with a DataField type
     */
    input?: CustomFormInput | undefined;
    /**
     * The combination of `{namespace}.{key}`
     */
    id?: string | undefined;
};
/**
 * A Client Setting Submenu
 */
export type SettingSubmenuConfig = {
    /**
     * The human readable name
     */
    name: string;
    /**
     * The human readable label
     */
    label: string;
    /**
     * An additional human readable hint
     */
    hint: string;
    /**
     * The classname of an Icon to render
     */
    icon: string;
    /**
     * The Application class to render
     */
    type: typeof Application | typeof ApplicationV2;
    /**
     * If true, only a GM can edit this Setting
     */
    restricted: boolean;
};
/**
 * A Client Keybinding Action Configuration
 */
export type KeybindingActionConfig = {
    /**
     * The namespace within which the action was registered
     */
    namespace?: string | undefined;
    /**
     * The human-readable name.
     */
    name: string;
    /**
     * An additional human-readable hint.
     */
    hint?: string | undefined;
    /**
     * The default bindings that can never be changed nor removed.
     */
    uneditable?: KeybindingActionBinding[] | undefined;
    /**
     * The default bindings that can be changed by the user.
     */
    editable?: KeybindingActionBinding[] | undefined;
    /**
     * A function to execute when a key down event occurs.
     * If True is returned, the event is consumed and no further
     * keybinds execute.
     */
    onDown?: ((context: KeyboardEventContext) => boolean | void) | undefined;
    /**
     * A function to execute when a key up event occurs. If True is
     * returned, the event is consumed and no further keybinds execute.
     */
    onUp?: ((context: KeyboardEventContext) => boolean | void) | undefined;
    /**
     * If True, allows Repeat events to execute the Action's onDown.
     *                    Defaults to false.
     */
    repeat?: boolean | undefined;
    /**
     * If true, only a GM can edit and execute this Action.
     */
    restricted?: boolean | undefined;
    /**
     * Modifiers such as `["CONTROL"]` that can be also pressed when
     *              executing this Action. Prevents using one of these modifiers as
     *              a Binding.
     */
    reservedModifiers?: string[] | undefined;
    /**
     * The preferred precedence of running this Keybinding Action.
     */
    precedence?: number | undefined;
    /**
     * The recorded registration order of the action.
     */
    order?: number | undefined;
};
/**
 * A Client Keybinding Action Binding
 */
export type KeybindingActionBinding = {
    /**
     * A numeric index which tracks this bindings position during form rendering
     */
    index?: number | undefined;
    /**
     * The KeyboardEvent#code value from
     */
    key: string;
    /**
     * The Keyboard logical code if universal mode is enable (it is code otherwise)
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values}
     */
    logicalKey: string;
    /**
     * An array of modifiers keys from
     *      {@link foundry.helpers.interaction.KeyboardManager.MODIFIER_KEYS}     which are required for this binding to be activated
     */
    modifiers?: string[] | undefined;
};
/**
 * An action that can occur when a key is pressed
 */
export type KeybindingAction = {
    /**
     * The namespaced machine identifier of the Action
     */
    action: string;
    /**
     * The Keyboard key
     */
    key: string;
    /**
     * The human-readable name
     */
    name: string;
    /**
     * Required modifiers
     */
    requiredModifiers: string[];
    /**
     * Optional (reserved) modifiers
     */
    optionalModifiers: string[];
    /**
     * The handler that executes onDown
     */
    onDown: Function;
    /**
     * The handler that executes onUp
     */
    onUp: Function;
    /**
     * If True, allows Repeat events to execute this Action's onDown
     */
    repeat: boolean;
    /**
     * If true, only a GM can execute this Action
     */
    restricted: boolean;
    /**
     * The registration precedence
     */
    precedence: number;
    /**
     * The registration order
     */
    order: number;
};
/**
 * A keyboard event context
 */
export type KeyboardEventContext = {
    /**
     * The normalized string key, such as "KeyA"
     */
    key: string;
    /**
     * The logical string key, such as "a"
     */
    logicalKey: string;
    /**
     * The originating keypress event
     */
    event: KeyboardEvent;
    /**
     * Is the Shift modifier being pressed
     */
    isShift: boolean;
    /**
     * Is the Control or Meta modifier being processed
     */
    isControl: boolean;
    /**
     * Is the Alt modifier being pressed
     */
    isAlt: boolean;
    /**
     * Are any of the modifiers being pressed
     */
    hasModifier: boolean;
    /**
     * A list of string modifiers applied to this context, such as `["CONTROL"]`
     */
    modifiers: string[];
    /**
     * True if the Key is Up, else False if down
     */
    up: boolean;
    /**
     * True if the given key is being held down such that it is automatically repeating.
     */
    repeat: boolean;
    /**
     * The executing Keybinding Action. May be undefined until the action is known.
     */
    action?: string | undefined;
};
/**
 * Connected Gamepad info
 */
export type ConnectedGamepad = {
    /**
     * A map of axes values
     */
    axes: Map<string, number>;
    /**
     * The Set of pressed Buttons
     */
    activeButtons: Set<string>;
};
import type { Ray } from "./canvas/geometry/_module.mjs";
import type { GridMeasurePathResultWaypoint } from "@common/grid/_types.mjs";
import type { TokenShapeType } from "@common/constants.mjs";
import type { DataModel } from "@common/abstract/_module.mjs";
import type { TokenMeasuredMovementWaypoint } from "@client/documents/_types.mjs";
import type { DeepReadonly } from "@common/_types.mjs";
import type { TokenMovementWaypoint } from "@client/documents/_types.mjs";
import type { TokenGetCompleteMovementPathWaypoint } from "@client/documents/_types.mjs";
import type { Point } from "@common/_types.mjs";
import type Token from "./canvas/placeables/token.mjs";
import type { TokenPosition } from "@client/documents/_types.mjs";
import type { Color } from "../common/utils/_module.mjs";
import type { CanvasAnimationEasingFunction } from "./canvas/animation/_types.mjs";
import type { CanvasAnimationData } from "./canvas/animation/_types.mjs";
import type { GridOffset3D } from "@common/grid/_types.mjs";
import type { TokenMovementSegmentData } from "@client/documents/_types.mjs";
import type { TokenDocument } from "./documents/_module.mjs";
import type { PrototypeToken } from "@common/data/data.mjs";
import type { TokenMeasureMovementPathOptions } from "@client/documents/_types.mjs";
import type { ElevatedPoint } from "@common/_types.mjs";
import type PointVisionSource from "./canvas/sources/point-vision-source.mjs";
import type { PingData } from "./canvas/interaction/_types.mjs";
import type { AVSettingsData } from "./av/settings.mjs";
import type { SceneDimensions } from "@client/documents/_types.mjs";
import type { DataField } from "@common/data/fields.mjs";
import type { DocumentHTMLEmbedConfig } from "./applications/ux/text-editor.mjs";
import type { SocketRequest } from "@common/_types.mjs";
import type { SocketResponse } from "@common/_types.mjs";
import type { BuiltinType } from "@common/_types.mjs";
import type { CustomFormInput } from "./applications/forms/fields.mjs";
import type Application from "./appv1/api/application-v1.mjs";
import type ApplicationV2 from "./applications/api/application.mjs";
