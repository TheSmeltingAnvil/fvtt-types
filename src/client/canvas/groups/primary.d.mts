/**
 * The primary Canvas group which generally contains tangible physical objects which exist within the Scene.
 * This group is a {@link foundry.canvas.containers.CachedContainer}
 * which is rendered to the Scene as a {@link foundry.canvas.containers.SpriteMesh}.
 * This allows the rendered result of the Primary Canvas Group to be affected by a
 * {@link foundry.canvas.rendering.shaders.BaseSamplerShader}.
 * @extends {CachedContainer}
 * @mixes CanvasGroupMixin
 * @category Canvas
 */
export default class PrimaryCanvasGroup extends CachedContainer {
    /**
     * Sort order to break ties on the group/layer level.
     * @enum {number}
     */
    static SORT_LAYERS: Readonly<{
        readonly SCENE: 0;
        readonly TILES: 500;
        readonly DRAWINGS: 600;
        readonly TOKENS: 700;
        readonly WEATHER: 1000;
    }>;
    /** @override */
    static override groupName: string;
    /** @override */
    static override textureConfiguration: {
        scaleMode: any;
        format: any;
        multisample: any;
    };
    /**
     * Allow API users to override the default elevation of the background layer.
     * This is a temporary solution until more formal support for scene levels is added in a future release.
     * @type {number}
     */
    static BACKGROUND_ELEVATION: number;
    /**
     * The sorting function used to order objects inside the Primary Canvas Group.
     * Overrides the default sorting function defined for the PIXI.Container.
     * Sort Tokens PCO above other objects except WeatherEffects, then Drawings PCO, all else held equal.
     * @param {PrimaryCanvasObject|PIXI.DisplayObject} a     An object to display
     * @param {PrimaryCanvasObject|PIXI.DisplayObject} b     Some other object to display
     * @returns {number}
     * @internal
     */
    static _compareObjects(a: PrimaryCanvasObject | PIXI.DisplayObject, b: PrimaryCanvasObject | PIXI.DisplayObject): number;
    eventMode: string;
    /**
     * The background color in RGB.
     * @type {[red: number, green: number, blue: number]}
     * @internal
     */
    _backgroundColor: [red: number, green: number, blue: number];
    /**
     * Track the set of HTMLVideoElements which are currently playing as part of this group.
     * @type {Set<PrimarySpriteMesh>}
     */
    videoMeshes: Set<PrimarySpriteMesh>;
    /**
     * Occludable objects above this elevation are faded on hover.
     * @type {number}
     */
    hoverFadeElevation: number;
    /**
     * The primary background image configured for the Scene, rendered as a SpriteMesh.
     * @type {PrimarySpriteMesh}
     */
    background: PrimarySpriteMesh;
    /**
     * The primary foreground image configured for the Scene, rendered as a SpriteMesh.
     * @type {PrimarySpriteMesh}
     */
    foreground: PrimarySpriteMesh;
    /**
     * A Quadtree which partitions and organizes primary canvas objects.
     * @type {CanvasQuadtree}
     */
    quadtree: CanvasQuadtree;
    /**
     * The collection of PrimaryDrawingContainer objects which are rendered in the Scene.
     * @type {Collection<string, PrimaryGraphics>}
     */
    drawings: Collection<string, PrimaryGraphics>;
    /**
     * The collection of SpriteMesh objects which are rendered in the Scene.
     * @type {Collection<string, PrimarySpriteMesh>}
     */
    tokens: Collection<string, PrimarySpriteMesh>;
    /**
     * The collection of SpriteMesh objects which are rendered in the Scene.
     * @type {Collection<string, PrimarySpriteMesh>}
     */
    tiles: Collection<string, PrimarySpriteMesh>;
    /**
     * The ambience filter which is applying post-processing effects.
     * @type {PrimaryCanvasGroupAmbienceFilter}
     * @internal
     */
    _ambienceFilter: PrimaryCanvasGroupAmbienceFilter;
    /**
     * Return the base HTML image or video element which provides the background texture.
     * @type {HTMLImageElement|HTMLVideoElement|null}
     */
    get backgroundSource(): HTMLImageElement | HTMLVideoElement | null;
    /**
     * Return the base HTML image or video element which provides the foreground texture.
     * @type {HTMLImageElement|HTMLVideoElement|null}
     */
    get foregroundSource(): HTMLImageElement | HTMLVideoElement | null;
    filterArea: any;
    /**
     * Refresh the primary mesh.
     */
    refreshPrimarySpriteMesh(): void;
    /**
     * Update this group. Calculates the canvas transform and bounds of all its children and updates the quadtree.
     */
    update(): void;
    /** @inheritDoc */
    _draw(options: any): Promise<void>;
    /** @inheritDoc */
    _render(renderer: any): void;
    /** @inheritDoc */
    _tearDown(options: any): Promise<void>;
    /**
     * Draw the SpriteMesh for a specific Token object.
     * @param {Token} token           The Token being added
     * @returns {PrimarySpriteMesh}   The added PrimarySpriteMesh
     */
    addToken(token: Token): PrimarySpriteMesh;
    /**
     * Remove a TokenMesh from the group.
     * @param {Token} token     The Token being removed
     */
    removeToken(token: Token): void;
    /**
     * Draw the SpriteMesh for a specific Token object.
     * @param {Tile} tile                        The Tile being added
     * @returns {PrimarySpriteMesh}              The added PrimarySpriteMesh
     */
    addTile(tile: Tile): PrimarySpriteMesh;
    /**
     * Remove a TokenMesh from the group.
     * @param {Tile} tile     The Tile being removed
     */
    removeTile(tile: Tile): void;
    /**
     * Add a PrimaryGraphics to the group.
     * @param {Drawing} drawing      The Drawing being added
     * @returns {PrimaryGraphics}    The created PrimaryGraphics instance
     */
    addDrawing(drawing: Drawing): PrimaryGraphics;
    /**
     * Remove a PrimaryGraphics from the group.
     * @param {Drawing} drawing     The Drawing being removed
     */
    removeDrawing(drawing: Drawing): void;
    /**
     * Override the default PIXI.Container behavior for how objects in this container are sorted.
     * @override
     */
    override sortChildren(): void;
    sortDirty: boolean | undefined;
    /**
     * Handle mousemove events on the primary group to update the hovered state of its children.
     * @param {PIXI.Point} currentPos   Current mouse position
     * @param {boolean} hasMouseMoved   Has the mouse been moved (or it is a simulated mouse move event)?
     * @internal
     */
    _onMouseMove(currentPos: PIXI.Point, hasMouseMoved: boolean): void;
    /**
     * @deprecated since v12
     * @ignore
     */
    mapElevationToDepth(elevation: any): any;
    #private;
}
import CachedContainer from "../containers/advanced/cached-container.mjs";
import PrimarySpriteMesh from "../primary/primary-sprite-mesh.mjs";
import { CanvasQuadtree } from "../geometry/quad-tree.mjs";
import PrimaryGraphics from "../primary/primary-graphics.mjs";
import PrimaryCanvasGroupAmbienceFilter from "../rendering/filters/environment.mjs";
