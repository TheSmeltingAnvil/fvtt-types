/**
 * @import {CanvasDimensions, CanvasPerformanceSettings, CanvasSupportedComponents, CanvasViewPosition,
 *   Point} from "@client/_types.mjs";
 * @import {PingOptions} from "./interaction/_types.mjs";
 * @import RenderedCanvasGroup from "./groups/rendered.mjs";
 * @import FogManager from "./perception/fog.mjs";
 * @import EnvironmentCanvasGroup from "./groups/environment.mjs";
 * @import PrimaryCanvasGroup from "./groups/primary.mjs";
 * @import EffectsCanvasGroup from "./groups/effects.mjs";
 * @import CanvasVisibility from "./groups/visibility.mjs";
 * @import InterfaceCanvasGroup from "./groups/interface.mjs";
 * @import OverlayCanvasGroup from "./groups/overlay.mjs";
 * @import HeadsUpDisplayContainer from "@client/applications/hud/container.mjs";
 * @import SceneManager from "./scene-manager.mjs";
 * @import BaseGrid from "@common/grid/base.mjs";
 * @import {Color} from "@common/utils/_module.mjs";
 */
/**
 * The virtual tabletop environment is implemented using a WebGL powered HTML 5 canvas using the powerful PIXI.js
 * library. The canvas is comprised by an ordered sequence of layers which define rendering groups and collections of
 * objects that are drawn on the canvas itself.
 *
 * ### Hook Events
 * {@link hookEvents.canvasConfig}
 * {@link hookEvents.canvasInit}
 * {@link hookEvents.canvasReady}
 * {@link hookEvents.canvasPan}
 * {@link hookEvents.canvasTearDown}
 *
 * @example Canvas State
 * ```js
 * canvas.ready; // Is the canvas ready for use?
 * canvas.scene; // The currently viewed Scene document.
 * canvas.dimensions; // The dimensions of the current Scene.
 * ```
 * @example Canvas Methods
 * ```js
 * canvas.draw(); // Completely re-draw the game canvas (this is usually unnecessary).
 * canvas.pan(x, y, zoom); // Pan the canvas to new coordinates and scale.
 * canvas.recenter(); // Re-center the canvas on the currently controlled Token.
 * ```
 */
export default class Canvas {
    /**
     * Mouse move handler priorities.
     * @enum number
     */
    static MOUSE_MOVE_HANDLER_PRIORITIES: Readonly<{
        readonly HIGH: 75;
        readonly MEDIUM: 50;
        readonly LOW: 25;
    }>;
    /**
     * A mapping of named CanvasLayer classes which defines the layers which comprise the Scene.
     * @type {Record<string, CanvasLayer>}
     */
    static get layers(): Record<string, CanvasLayer>;
    /**
     * Configure the usage of WebGL for the PIXI.Application that will be created.
     * @throws an Error if WebGL is not supported by this browser environment.
     */
    static #configureWebGL(): void;
    /**
     * Create the Canvas element which will be the render target for the PIXI.Application instance.
     * Replace the template element which serves as a placeholder in the initially served HTML response.
     * @returns {HTMLCanvasElement}
     */
    static #createHTMLCanvas(): HTMLCanvasElement;
    /**
     * Configure the settings used to initialize the PIXI.Application instance.
     * @returns {object}    Options passed to the PIXI.Application constructor.
     */
    static #configureCanvasSettings(): object;
    /**
     * Create a SceneManager instance used for this Scene, if any.
     * @param {Scene} scene
     * @returns {SceneManager|null}
     * @internal
     */
    static getSceneManager(scene: Scene): SceneManager | null;
    /**
     * Remove all children of the display object and call one cleaning method:
     * clean first, then tearDown, and destroy if no cleaning method is found.
     * @param {PIXI.DisplayObject} displayObject  The display object to clean.
     * @param {boolean} destroy                   If textures should be destroyed.
     */
    static clearContainer(displayObject: PIXI.DisplayObject, destroy?: boolean): void;
    /**
     * Get a texture with the required configuration and clear color.
     * @param {object} options
     * @param {number[]} [options.clearColor]           The clear color to use for this texture. Transparent by default.
     * @param {object} [options.textureConfiguration]   The render texture configuration.
     * @returns {PIXI.RenderTexture}
     */
    static getRenderTexture({ clearColor, textureConfiguration }?: {
        clearColor?: number[] | undefined;
        textureConfiguration?: object | undefined;
    }): PIXI.RenderTexture;
    /**
     * A set of blur filter instances which are modified by the zoom level and the "soft shadows" setting
     * @type {Set<PIXI.Filter>}
     */
    blurFilters: Set<PIXI.Filter>;
    /**
     * A reference to the MouseInteractionManager that is currently controlling pointer-based interaction, or null.
     * @type {MouseInteractionManager|null}
     */
    currentMouseManager: MouseInteractionManager | null;
    /**
     * Configure options passed to the texture loaded for the Scene.
     * This object can be configured during the canvasInit hook before textures have been loaded.
     * @type {{expireCache: boolean; additionalSources: string[]}}
     */
    loadTexturesOptions: {
        expireCache: boolean;
        additionalSources: string[];
    };
    /**
     * Configure options used by the visibility framework for special effects
     * This object can be configured during the canvasInit hook before visibility is initialized.
     * @type {{persistentVision: boolean}}
     */
    visibilityOptions: {
        persistentVision: boolean;
    };
    /**
     * Configure options passed to initialize blur for the Scene and override normal behavior.
     * This object can be configured during the canvasInit hook before blur is initialized.
     * @type {{enabled: boolean; blurClass: typeof PIXI.Filter; strength: number; passes: number; kernels: number}}
     */
    blurOptions: {
        enabled: boolean;
        blurClass: typeof PIXI.Filter;
        strength: number;
        passes: number;
        kernels: number;
    };
    /**
     * Configure the Textures to apply to the Scene.
     *
     * Textures registered here will be automatically loaded as part of the TextureLoader.loadSceneTextures workflow.
     * To be loaded, a texture must be added to this record before or during the "canvasInit" hook.
     *
     * After textures are loaded for the Scene, the values of this record are replaced with direct references to the
     * PIXI.Textures that were loaded.
     *
     * @type {Record<string, string|PIXI.Texture|PIXI.Spritesheet>}
     * @property {string|PIXI.Texture} [background]     A specific background texture used for the Scene
     * @property {string|PIXI.Texture} [foreground]     A specific foreground texture used for the Scene
     * @property {string|PIXI.Texture} [fogOverlay]     A specific fog overlay texture used for the Scene
     */
    sceneTextures: Record<string, string | PIXI.Texture | PIXI.Spritesheet>;
    /**
     * Record framerate performance data.
     * @type {{values: number[]; render: number}}
     */
    fps: {
        values: number[];
        render: number;
    };
    /**
     * The singleton interaction manager instance which handles mouse interaction on the Canvas.
     * @type {MouseInteractionManager}
     */
    mouseInteractionManager: MouseInteractionManager;
    /**
     * Configured performance settings which affect the behavior of the Canvas and its renderer.
     * @type {CanvasPerformanceSettings}
     */
    performance: CanvasPerformanceSettings;
    /**
     * A list of supported webGL capabilities and limitations.
     * @type {CanvasSupportedComponents}
     */
    supported: CanvasSupportedComponents;
    /**
     * Is the photosensitive mode enabled?
     * @type {boolean}
     */
    photosensitiveMode: boolean;
    /**
     * The renderer screen dimensions.
     * @type {number[]}
     */
    screenDimensions: number[];
    /**
     * The framenbuffer snapshot.
     * @type {FramebufferSnapshot}
     */
    snapshot: FramebufferSnapshot;
    /**
     * A flag to indicate whether a new Scene is currently being drawn.
     * @type {boolean}
     */
    loading: boolean;
    /**
     * A promise that resolves when the canvas is first initialized and ready.
     * @type {Promise<void>|null}
     */
    initializing: Promise<void> | null;
    /**
     * The singleton PIXI.Application instance rendered on the Canvas.
     * @type {PIXI.Application}
     */
    app: PIXI.Application;
    /**
     * The primary stage container of the PIXI.Application.
     * @type {PIXI.Container}
     */
    stage: PIXI.Container;
    /**
     * The rendered canvas group which render the environment canvas group and the interface canvas group.
     * @see {@link Canvas#environment}
     * @see {@link Canvas#interface}
     * @type {RenderedCanvasGroup}
     */
    rendered: RenderedCanvasGroup;
    /**
     * A singleton CanvasEdges instance.
     * @type {CanvasEdges}
     */
    edges: CanvasEdges;
    /**
     * The singleton FogManager instance.
     * @type {FogManager}
     */
    fog: FogManager;
    /**
     * A perception manager interface for batching lighting, sight, and sound updates.
     * @type {PerceptionManager}
     */
    perception: PerceptionManager;
    /**
     * The environment canvas group which render the primary canvas group and the effects canvas group.
     * @see {@link Canvas#primary}
     * @see {@link Canvas#effects}
     * @type {EnvironmentCanvasGroup}
     */
    environment: EnvironmentCanvasGroup;
    /**
     * The primary Canvas group which generally contains tangible physical objects which exist within the Scene.
     * This group is a {@link foundry.canvas.containers.CachedContainer}
     * which is rendered to the Scene as a {@link foundry.canvas.containers.SpriteMesh}.
     * This allows the rendered result of the Primary Canvas Group to be affected by a
     * {@link foundry.canvas.rendering.shaders.BaseSamplerShader}.
     * @type {PrimaryCanvasGroup}
     */
    primary: PrimaryCanvasGroup;
    /**
     * The effects Canvas group which modifies the result of the {@link foundry.canvas.groups.PrimaryCanvasGroup} by
     * adding special effects.
     * This includes lighting, vision, fog of war and related animations.
     * @type {EffectsCanvasGroup}
     */
    effects: EffectsCanvasGroup;
    /**
     * The visibility Canvas group which handles the fog of war overlay by consolidating multiple render textures,
     * and applying a filter with special effects and blur.
     * @type {CanvasVisibility}
     */
    visibility: CanvasVisibility;
    /**
     * The interface Canvas group which is rendered above other groups and contains all interactive elements.
     * The various {@link foundry.canvas.layers.InteractionLayer} instances of the interface group provide different
     * control sets for interacting with different types of {@link foundry.abstract.Document}s which can be represented
     * on the Canvas.
     * @type {InterfaceCanvasGroup}
     */
    interface: InterfaceCanvasGroup;
    /**
     * The overlay Canvas group which is rendered above other groups and contains elements not bound to stage transform.
     * @type {OverlayCanvasGroup}
     */
    overlay: OverlayCanvasGroup;
    /**
     * The singleton HeadsUpDisplay container which overlays HTML rendering on top of this Canvas.
     * @type {HeadsUpDisplayContainer}
     */
    hud: HeadsUpDisplayContainer;
    /**
     * Position of the mouse on stage.
     * @type {PIXI.Point}
     */
    mousePosition: PIXI.Point;
    /**
     * Previous position of the mouse on stage.
     * @type {PIXI.Point}
     */
    previousMousePosition: PIXI.Point;
    set forceSnapVertices(value: boolean);
    /**
     * Force snapping to grid vertices?
     * @type {boolean}
     */
    get forceSnapVertices(): boolean;
    /**
     * A flag for whether the game Canvas is fully initialized and ready for additional content to be drawn.
     * @type {boolean}
     */
    get initialized(): boolean;
    /**
     * A reference to the currently displayed Scene document, or null if the Canvas is currently blank.
     * @type {Scene|null}
     */
    get scene(): Scene | null;
    /**
     * A SceneManager instance which adds behaviors to this Scene, or null if there is no manager.
     * @type {SceneManager|null}
     */
    get manager(): SceneManager | null;
    /**
     * The current pixel dimensions of the displayed Scene, or null if the Canvas is blank.
     * @type {Readonly<CanvasDimensions>|null}
     */
    get dimensions(): Readonly<CanvasDimensions> | null;
    /**
     * A reference to the grid of the currently displayed Scene document, or null if the Canvas is currently blank.
     * @type {BaseGrid|null}
     */
    get grid(): BaseGrid | null;
    /**
     * A flag for whether the game Canvas is ready to be used. False if the canvas is not yet drawn, true otherwise.
     * @type {boolean}
     */
    get ready(): boolean;
    /**
     * The colors bound to this scene and handled by the color manager.
     * @type {Color}
     */
    get colors(): Color;
    /**
     * Shortcut to get the masks container from HiddenCanvasGroup.
     * @type {PIXI.Container}
     */
    get masks(): PIXI.Container;
    /**
     * The id of the currently displayed Scene.
     * @type {string|null}
     */
    get id(): string | null;
    /**
     * An Array of all CanvasLayer instances which are active on the Canvas board
     * @type {CanvasLayer[]}
     */
    get layers(): CanvasLayer[];
    /**
     * Return a reference to the active Canvas Layer
     * @type {CanvasLayer}
     */
    get activeLayer(): CanvasLayer;
    /**
     * The currently displayed darkness level, which may override the saved Scene value.
     * @type {number}
     */
    get darknessLevel(): number;
    /**
     * Initialize the Canvas by creating the HTML element and PIXI application.
     * This step should only ever be performed once per client session.
     * Subsequent requests to reset the canvas should go through Canvas#draw
     */
    initialize(): void;
    blur: {
        enabled: any;
        blurClass: any;
        blurPassClass: any;
        strength: any;
        passes: any;
        kernels: any;
    } | undefined;
    /**
     * Configure performance settings for hte canvas application based on the selected performance mode.
     * @returns {CanvasPerformanceSettings}
     * @internal
     */
    _configurePerformanceMode(): CanvasPerformanceSettings;
    /**
     * Draw the game canvas.
     * @param {Scene} [scene]         A specific Scene document to render on the Canvas
     * @returns {Promise<Canvas>}     A Promise which resolves once the Canvas is fully drawn
     */
    draw(scene?: Scene): Promise<Canvas>;
    /**
     * When re-drawing the canvas, first tear down or discontinue some existing processes
     * @returns {Promise<void>}
     */
    tearDown(): Promise<void>;
    /**
     * Get the value of a GL parameter
     * @param {string} parameter  The GL parameter to retrieve
     * @returns {*}               The GL parameter value
     */
    getGLParameter(parameter: string): any;
    /**
     * Initialize the starting view of the canvas stage
     * If we are re-drawing a scene which was previously rendered, restore the prior view position
     * Otherwise set the view to the top-left corner of the scene at standard scale
     */
    initializeCanvasPosition(): void;
    /**
     * Given an embedded object name, get the canvas layer for that object
     * @param {string} embeddedName
     * @returns {PlaceablesLayer|null}
     */
    getLayerByEmbeddedName(embeddedName: string): PlaceablesLayer | null;
    /**
     * Get the InteractionLayer of the canvas which manages Documents of a certain collection within the Scene.
     * @param {string} collectionName     The collection name
     * @returns {PlaceablesLayer}         The canvas layer
     */
    getCollectionLayer(collectionName: string): PlaceablesLayer;
    /**
     * Activate framerate tracking by adding an HTML element to the display and refreshing it every frame.
     */
    activateFPSMeter(): void;
    /**
     * Deactivate framerate tracking by canceling ticker updates and removing the HTML element.
     */
    deactivateFPSMeter(): void;
    /**
     * Pan the canvas to a certain position and a certain zoom level.
     * @param {Partial<CanvasViewPosition>} [position]    The canvas position to pan to
     */
    pan({ x, y, scale }?: Partial<CanvasViewPosition>): void;
    /**
     * @typedef CanvasAnimationPanOptions
     * @param {number} [duration=250]  The total duration of the animation in milliseconds; used if speed is not set
     * @param {number} [speed]         The speed of animation in pixels per second; overrides duration if set
     * @param {Function} [easing]      An easing function passed to CanvasAnimation animate
     */
    /**
     * Animate panning the canvas to a certain destination coordinate and zoom scale
     * Customize the animation speed with additional options
     * Returns a Promise which is resolved once the animation has completed
     *
     * @param {CanvasViewPosition & CanvasAnimationPanOptions} view    The desired view parameters
     * @returns {Promise<boolean>}    A Promise which resolves once the animation has been completed
     */
    animatePan({ x, y, scale, duration, speed, easing }?: CanvasViewPosition & any): Promise<boolean>;
    /**
     * Recenter the canvas with a pan animation that ends in the center of the canvas rectangle.
     * @param {CanvasViewPosition} initial    A desired initial position from which to begin the animation
     * @returns {Promise<void>}               A Promise which resolves once the animation has been completed
     */
    recenter(initial: CanvasViewPosition): Promise<void>;
    /**
     * Highlight objects on any layers which are visible
     * @param {boolean} active
     */
    highlightObjects(active: boolean): void;
    /**
     * Displays a Ping both locally and on other connected client, following these rules:
     * 1) Displays on the current canvas Scene
     * 2) If ALT is held, becomes an ALERT ping
     * 3) Else if the user is GM and SHIFT is held, becomes a PULL ping
     * 4) Else is a PULSE ping
     * @param {Point} origin                  Point to display Ping at
     * @param {PingOptions} [options]         Additional options to configure how the ping is drawn.
     * @returns {Promise<boolean>}
     */
    ping(origin: Point, options?: PingOptions): Promise<boolean>;
    /**
     * Get the constrained zoom scale parameter which is allowed by the maxZoom parameter
     * @param {Partial<CanvasViewPosition>} position    The uncontrained camera position
     * @returns {CanvasViewPosition}                    The constrained position
     * @internal
     */
    _constrainView({ x, y, scale }: Partial<CanvasViewPosition>): CanvasViewPosition;
    /**
     * Create a BlurFilter instance and register it to the array for updates when the zoom level changes.
     * @param {number} blurStrength         The desired blur strength to use for this filter
     * @param {number} blurQuality          The desired quality to use for this filter
     * @returns {PIXI.BlurFilter}
     */
    createBlurFilter(blurStrength: number, blurQuality?: number): PIXI.BlurFilter;
    /**
     * Add a filter to the blur filter list if it has the `blur` property.
     * @param {PIXI.Filter} filter    The filter instance to add
     * @returns {PIXI.Filter}         The filter that was passed to this function
     */
    addBlurFilter(filter: PIXI.Filter): PIXI.Filter;
    /**
     * Update the blur strength depending on the scale of the canvas stage.
     * This number is zero if "soft shadows" are disabled
     * @param {number} [strength]      Optional blur strength to apply
     */
    updateBlur(strength?: number): void;
    /**
     * Convert canvas coordinates to the client's viewport.
     * @param {Point} origin  The canvas coordinates.
     * @returns {Point}       The corresponding coordinates relative to the client's viewport.
     */
    clientCoordinatesFromCanvas(origin: Point): Point;
    /**
     * Convert client viewport coordinates to canvas coordinates.
     * @param {Point} origin  The client coordinates.
     * @returns {Point}       The corresponding canvas coordinates.
     */
    canvasCoordinatesFromClient(origin: Point): Point;
    /**
     * Determine whether given canvas coordinates are off-screen.
     * @param {Point} position  The canvas coordinates.
     * @returns {boolean}       Is the coordinate outside the screen bounds?
     */
    isOffscreen(position: Point): boolean;
    dt: number | undefined;
    /**
     * Register a new onMouseMove handler with an optional priority.
     * @param {Function} handler The function to call on mouse move.
     * @param {number} [priority=0] Optional priority. Higher values are called earlier.
     * @param {object} [context=this] The context in which the handler should be executed.
     * @param {boolean} [strict=false] To know if the handler should be called on real pointer move only (not simulated)
     */
    registerMouseMoveHandler(handler: Function, priority?: number, context?: object, strict?: boolean): void;
    /**
     * Handle right-mouse start drag events occurring on the Canvas.
     * @see {MouseInteractionManager##handleDragStart}
     * @param {PIXI.FederatedEvent} event
     * @internal
     */
    _onDragRightStart(event: PIXI.FederatedEvent): void;
    /**
     * Handle right-mouse drag events occurring on the Canvas.
     * @see {MouseInteractionManager##handleDragMove}
     * @param {PIXI.FederatedEvent} event
     * @internal
     */
    _onDragRightMove(event: PIXI.FederatedEvent): void;
    /**
     * Handle the conclusion of a right-mouse drag workflow the Canvas stage.
     * @see {MouseInteractionManager##handleDragDrop}
     * @param {PIXI.FederatedEvent} event
     * @internal
     */
    _onDragRightDrop(event: PIXI.FederatedEvent): void;
    /**
     * Handle the cancellation of a right-mouse drag workflow the Canvas stage.
     * @see {MouseInteractionManager##handleDragCancel}
     * @param {PIXI.FederatedEvent} event
     * @internal
     */
    _onDragRightCancel(event: PIXI.FederatedEvent): void;
    /**
     * Pan the canvas view when the cursor position gets close to the edge of the frame
     * @param {MouseEvent} event    The originating mouse movement event
     * @internal
     */
    _onDragCanvasPan(event: MouseEvent): Promise<boolean> | undefined;
    /**
     * Handle window resizing with the dimensions of the window viewport change
     * @internal
     */
    _onResize(): false | undefined;
    /**
     * Handle mousewheel events which adjust the scale of the canvas
     * @param {WheelEvent} event    The mousewheel event that zooms the canvas
     * @internal
     */
    _onMouseWheel(event: WheelEvent): void;
    /**
     * Track objects which have pending render flags.
     * @type {{OBJECTS: Set<RenderFlagObject>; PERCEPTION: Set<RenderFlagObject>}}
     */
    pendingRenderFlags: {
        OBJECTS: Set<RenderFlagObject>;
        PERCEPTION: Set<RenderFlagObject>;
    };
    /**
     * @deprecated since v12
     * @ignore
     */
    get colorManager(): EnvironmentCanvasGroup;
    #private;
}
import MouseInteractionManager from "./interaction/mouse-handler.mjs";
import type { CanvasPerformanceSettings } from "@client/_types.mjs";
import type { CanvasSupportedComponents } from "@client/_types.mjs";
import FramebufferSnapshot from "./framebuffer-snapshot.mjs";
import type RenderedCanvasGroup from "./groups/rendered.mjs";
import CanvasEdges from "./geometry/edges/edges.mjs";
import type FogManager from "./perception/fog.mjs";
import PerceptionManager from "./perception/perception-manager.mjs";
import type EnvironmentCanvasGroup from "./groups/environment.mjs";
import type PrimaryCanvasGroup from "./groups/primary.mjs";
import type EffectsCanvasGroup from "./groups/effects.mjs";
import type CanvasVisibility from "./groups/visibility.mjs";
import type InterfaceCanvasGroup from "./groups/interface.mjs";
import type OverlayCanvasGroup from "./groups/overlay.mjs";
import type HeadsUpDisplayContainer from "@client/applications/hud/container.mjs";
import Scene from "@client/documents/scene.mjs";
import type SceneManager from "./scene-manager.mjs";
import type { CanvasDimensions } from "@client/_types.mjs";
import type BaseGrid from "@common/grid/base.mjs";
import type { Color } from "@common/utils/_module.mjs";
import CanvasLayer from "./layers/base/canvas-layer.mjs";
import PlaceablesLayer from "./layers/base/placeables-layer.mjs";
import type { CanvasViewPosition } from "@client/_types.mjs";
import type { Point } from "@client/_types.mjs";
import type { PingOptions } from "./interaction/_types.mjs";
