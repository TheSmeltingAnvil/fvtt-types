/**
 * @import Wall from "../placeables/wall.mjs";
 */
/**
 * The Walls canvas layer which provides a container for Wall objects within the rendered Scene.
 * @category Canvas
 */
export default class WallsLayer extends PlaceablesLayer {
    /** @inheritDoc */
    static get layerOptions(): object;
    /**
     * Given a point and the coordinates of a wall, determine which endpoint is closer to the point
     * @param {Point} point         The origin point of the new Wall placement
     * @param {Wall} wall           The existing Wall object being chained to
     * @returns {PointArray}        The [x,y] coordinates of the starting endpoint
     */
    static getClosestEndpoint(point: Point, wall: Wall): PointArray;
    /** @override */
    static override prepareSceneControls(): {
        name: string;
        order: number;
        title: string;
        layer: string;
        icon: string;
        visible: boolean;
        onChange: (event: any, active: any) => void;
        onToolChange: () => any;
        tools: {
            select: {
                name: string;
                order: number;
                title: string;
                icon: string;
                toolclip: {
                    src: string;
                    heading: string;
                    items: import("../../applications/ui/scene-controls.mjs").ToolclipConfigurationItem[];
                };
            };
            walls: {
                name: string;
                order: number;
                title: string;
                icon: string;
                toolclip: {
                    src: string;
                    heading: string;
                    items: import("../../applications/ui/scene-controls.mjs").ToolclipConfigurationItem[];
                };
            };
            terrain: {
                name: string;
                order: number;
                title: string;
                icon: string;
                toolclip: {
                    src: string;
                    heading: string;
                    items: import("../../applications/ui/scene-controls.mjs").ToolclipConfigurationItem[];
                };
            };
            invisible: {
                name: string;
                order: number;
                title: string;
                icon: string;
                toolclip: {
                    src: string;
                    heading: string;
                    items: import("../../applications/ui/scene-controls.mjs").ToolclipConfigurationItem[];
                };
            };
            ethereal: {
                name: string;
                order: number;
                title: string;
                icon: string;
                toolclip: {
                    src: string;
                    heading: string;
                    items: import("../../applications/ui/scene-controls.mjs").ToolclipConfigurationItem[];
                };
            };
            doors: {
                name: string;
                order: number;
                title: string;
                icon: string;
                toolclip: {
                    src: string;
                    heading: string;
                    items: import("../../applications/ui/scene-controls.mjs").ToolclipConfigurationItem[];
                };
            };
            secret: {
                name: string;
                order: number;
                title: string;
                icon: string;
                toolclip: {
                    src: string;
                    heading: string;
                    items: import("../../applications/ui/scene-controls.mjs").ToolclipConfigurationItem[];
                };
            };
            window: {
                name: string;
                order: number;
                title: string;
                icon: string;
                toolclip: {
                    src: string;
                    heading: string;
                    items: import("../../applications/ui/scene-controls.mjs").ToolclipConfigurationItem[];
                };
            };
            clone: {
                name: string;
                order: number;
                title: string;
                icon: string;
            };
            snap: {
                name: string;
                order: number;
                title: string;
                icon: string;
                toggle: boolean;
                visible: boolean;
                active: boolean;
                onChange: (event: any, toggled: any) => any;
                toolclip: {
                    src: string;
                    heading: string;
                    items: {
                        paragraph: string;
                    }[];
                };
            };
            closeDoors: {
                name: string;
                order: number;
                title: string;
                icon: string;
                button: boolean;
                onChange: () => void;
            };
            clear: {
                name: string;
                order: number;
                title: string;
                icon: string;
                button: boolean;
                onChange: () => any;
            };
        };
        activeTool: string;
    };
    /**
     * A graphics layer used to display chained Wall selection
     * @type {PIXI.Graphics}
     */
    chain: PIXI.Graphics;
    /**
     * Track whether we are currently within a chained placement workflow
     * @type {boolean}
     * @internal
     */
    _chain: boolean;
    /**
     * Track the most recently created or updated wall data for use with the clone tool
     * @type {object|null}
     * @internal
     */
    _cloneType: object | null;
    /**
     * Reference the last interacted wall endpoint for the purposes of chaining
     * @type {{point: PointArray}}
     * @internal
     */
    _last: {
        point: PointArray;
    };
    /**
     * An Array of Wall instances in the current Scene which act as Doors.
     * @type {Wall[]}
     */
    get doors(): Wall[];
    /** @override */
    override getSnappedPoint(point: any): foundry.types.Point;
    /** @inheritDoc */
    releaseAll(options: any): number;
    /**
     * Get the wall endpoint coordinates for a given point.
     * @param {Point} point                    The candidate wall endpoint.
     * @param {object} [options]
     * @param {boolean} [options.snap=true]    Snap to the grid?
     * @returns {[x: number, y: number]}       The wall endpoint coordinates.
     * @internal
     */
    _getWallEndpointCoordinates(point: Point, { snap }?: {
        snap?: boolean | undefined;
    }): [x: number, y: number];
    /**
     * Identify the interior enclosed by the given walls.
     * @param {Wall[]} walls        The walls that enclose the interior.
     * @returns {PIXI.Polygon[]}    The polygons of the interior.
     * @license MIT
     */
    identifyInteriorArea(walls: Wall[]): PIXI.Polygon[];
    /** @inheritDoc */
    _onDragLeftStart(event: any): any;
    /**
     * Custom undo for wall creation while chaining is active.
     * @param {object} event
     * @returns {Promise<Document[]>}
     * @protected
     */
    protected _onUndoCreate(event: object): Promise<Document[]>;
    /**
     * @deprecated since v12
     * @ignore
     */
    initialize(): void;
    /**
     * @deprecated since v12
     * @ignore
     */
    identifyInteriorWalls(): void;
    /**
     * @deprecated since v12
     * @ignore
     */
    identifyWallIntersections(): void;
    #private;
}
import PlaceablesLayer from "./base/placeables-layer.mjs";
import type Wall from "../placeables/wall.mjs";
