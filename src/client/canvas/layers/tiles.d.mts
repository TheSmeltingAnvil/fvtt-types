/**
 * @import Tile from "../placeables/tile.mjs";
 */
/**
 * A PlaceablesLayer designed for rendering the visual Scene for a specific vertical cross-section.
 * @category Canvas
 */
export default class TilesLayer extends PlaceablesLayer {
    /** @inheritdoc */
    static get layerOptions(): object;
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
            tile: {
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
            browse: {
                name: string;
                order: number;
                title: string;
                icon: string;
                button: boolean;
                onChange: () => Promise<FilePicker>;
                toolclip: {
                    src: string;
                    heading: string;
                    items: import("../../applications/ui/scene-controls.mjs").ToolclipConfigurationItem[];
                };
            };
            foreground: {
                name: string;
                order: number;
                title: string;
                icon: string;
                toggle: boolean;
                active: boolean;
                onChange: (event: any, active: any) => void;
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
            };
        };
        activeTool: string;
    };
    /** @inheritdoc */
    get hud(): foundry.applications.hud.TileHUD;
    /**
     * An array of Tile objects which are rendered within the objects container
     * @type {Tile[]}
     */
    get tiles(): Tile[];
    /** @override */
    override controllableObjects(): Generator<foundry.canvas.placeables.PlaceableObject, void, unknown>;
    /** @inheritDoc */
    getSnappedPoint(point: any): any;
    /**
     * Handle drop events for Tile data on the Tiles Layer
     * @param {DragEvent} event     The concluding drag event
     * @param {object} data         The extracted Tile data
     * @protected
     */
    protected _onDropData(event: DragEvent, data: object): Promise<false | foundry.abstract.Document<object, foundry.abstract.types.DocumentConstructionContext> | foundry.abstract.Document<object, foundry.abstract.types.DocumentConstructionContext>[] | undefined>;
    /**
     * Prepare the data object when a new Tile is dropped onto the canvas
     * @param {DragEvent} event     The concluding drag event
     * @param {object} data         The extracted Tile data
     * @returns {object}            The prepared data to create
     */
    _getDropData(event: DragEvent, data: object): object;
    /**
     * @deprecated since v12
     * @ignore
     */
    get roofs(): foundry.canvas.placeables.PlaceableObject[];
    /**
     * @deprecated since v12
     * @ignore
     */
    get depthMask(): any;
}
import PlaceablesLayer from "./base/placeables-layer.mjs";
import type Tile from "../placeables/tile.mjs";
import FilePicker from "@client/applications/apps/file-picker.mjs";
