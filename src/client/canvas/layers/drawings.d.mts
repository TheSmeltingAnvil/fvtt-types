/**
 * @import Collection from "@common/utils/collection.mjs";
 * @import {Point} from "@common/_types.mjs";
 */
/**
 * The DrawingsLayer subclass of PlaceablesLayer.
 * This layer implements a container for drawings.
 * @category Canvas
 */
export default class DrawingsLayer extends PlaceablesLayer {
    /** @inheritdoc */
    static get layerOptions(): object;
    /**
     * The named game setting which persists default drawing configuration for the User
     * @type {string}
     */
    static DEFAULT_CONFIG_SETTING: string;
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
            rect: {
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
            ellipse: {
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
            polygon: {
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
            freehand: {
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
            text: {
                name: string;
                order: number;
                title: string;
                icon: string;
                onChange: () => void;
                toolclip: {
                    src: string;
                    heading: string;
                    items: import("../../applications/ui/scene-controls.mjs").ToolclipConfigurationItem[];
                };
            };
            role: {
                name: string;
                order: number;
                title: string;
                icon: string;
                toggle: boolean;
                active: boolean;
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
            configure: {
                name: string;
                order: number;
                title: string;
                icon: string;
                onChange: () => any;
                button: boolean;
            };
            clear: {
                name: string;
                order: number;
                title: string;
                icon: string;
                visible: boolean;
                onChange: () => any;
                button: boolean;
            };
        };
        activeTool: string;
    };
    /**
     * The collection of drawing objects which are rendered in the interface.
     * @type {Collection<string, Drawing>}
     */
    graphics: Collection<string, Drawing>;
    /** @inheritdoc */
    get hud(): foundry.applications.hud.DrawingHUD;
    /** @override */
    override getSnappedPoint(point: any): Point;
    /** @inheritDoc */
    _getCopyableObjects(options: any): foundry.canvas.placeables.PlaceableObject[];
    /**
     * Render a configuration sheet to configure the default Drawing settings
     */
    configureDefault(): void;
    /**
     * Get initial data for a new drawing.
     * Start with some global defaults, apply user default config, then apply mandatory overrides per tool.
     * @param {Point} origin      The initial coordinate
     * @returns {object}          The new drawing data
     * @protected
     */
    protected _getNewDrawingData(origin: Point): object;
    /** @inheritdoc */
    _onClickLeft(event: any): any;
    /** @inheritdoc */
    _onClickLeft2(event: any): void;
    /** @inheritdoc */
    _onDragLeftCancel(event: any): any;
    /** @inheritdoc */
    _onClickRight(event: any): false | undefined;
    /**
     * @deprecated since v12
     * @ignore
     */
    get gridPrecision(): 16 | 0 | 8;
}
import PlaceablesLayer from "./base/placeables-layer.mjs";
import Drawing from "../placeables/drawing.mjs";
import type Collection from "@common/utils/collection.mjs";
import type { Point } from "@common/_types.mjs";
