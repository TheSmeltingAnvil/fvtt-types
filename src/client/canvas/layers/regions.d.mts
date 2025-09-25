/**
 * @import {BaseShapeData} from "@common/data/data.mjs";
 */
/**
 * The Regions Container.
 * @category Canvas
 */
export default class RegionLayer extends PlaceablesLayer {
    /** @inheritDoc */
    static get layerOptions(): object;
    /**
     * The method to sort the Regions.
     * @type {Function}
     */
    static #sortRegions: Function;
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
            rectangle: {
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
            hole: {
                name: string;
                order: number;
                title: string;
                icon: string;
                toggle: boolean;
                active: boolean;
                toolclip: {
                    src: string;
                    heading: string;
                    items: import("../../applications/ui/scene-controls.mjs").ToolclipConfigurationItem[];
                };
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
                    items: import("../../applications/ui/scene-controls.mjs").ToolclipConfigurationItem[];
                };
            };
            clear: {
                name: string;
                order: number;
                title: string;
                icon: string;
                onChange: () => any;
                button: boolean;
            };
        };
        activeTool: string;
    };
    /**
     * The RegionLegend application of this RegionLayer.
     * @type {RegionLegend}
     */
    get legend(): RegionLegend;
    /** @inheritDoc */
    storeHistory(type: any, data: any, options: any): void;
    /** @override */
    override copyObjects(): never[];
    /** @override */
    override getSnappedPoint(point: any): foundry.types.Point;
    /** @override */
    override getZIndex(): any;
    filters: foundry.canvas.rendering.filters.AbstractBaseFilter[] | undefined;
    filterArea: any;
    /**
     * Highlight the shape or clear the highlight.
     * @param {BaseShapeData|null} data    The shape to highlight, or null to clear the highlight
     * @internal
     */
    _highlightShape(data: BaseShapeData | null): void;
    /** @inheritDoc */
    _onClickLeft2(event: any): void;
    /** @inheritDoc */
    _onClickRight(event: any): false | undefined;
    #private;
}
import PlaceablesLayer from "./base/placeables-layer.mjs";
import RegionLegend from "../../applications/ui/region-legend.mjs";
import type { BaseShapeData } from "@common/data/data.mjs";
