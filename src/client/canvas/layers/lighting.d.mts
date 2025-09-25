/**
 * The Lighting Layer which ambient light sources as part of the CanvasEffectsGroup.
 * @category Canvas
 */
export default class LightingLayer extends PlaceablesLayer {
    /** @inheritDoc */
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
            light: {
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
            day: {
                name: string;
                order: number;
                title: string;
                icon: string;
                visible: boolean;
                onChange: () => Promise<foundry.abstract.Document<object, foundry.abstract.types.DocumentConstructionContext> | undefined>;
                button: boolean;
                toolclip: {
                    src: string;
                    heading: string;
                    items: import("../../applications/ui/scene-controls.mjs").ToolclipConfigurationItem[];
                };
            };
            night: {
                name: string;
                order: number;
                title: string;
                icon: string;
                visible: boolean;
                onChange: () => Promise<foundry.abstract.Document<object, foundry.abstract.types.DocumentConstructionContext> | undefined>;
                button: boolean;
                toolclip: {
                    src: string;
                    heading: string;
                    items: import("../../applications/ui/scene-controls.mjs").ToolclipConfigurationItem[];
                };
            };
            reset: {
                name: string;
                order: number;
                title: string;
                icon: string;
                onChange: () => void;
                button: boolean;
                toolclip: {
                    src: string;
                    heading: string;
                    items: {
                        paragraph: string;
                    }[];
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
     * Refresh the fields of all the ambient lights on this scene.
     */
    refreshFields(): void;
    /** @override */
    override _onMouseWheel(event: any): Promise<foundry.canvas.placeables.PlaceableObject> | undefined;
    /**
     * Actions to take when the darkness level of the Scene is changed
     * @param {PIXI.FederatedEvent} event
     * @internal
     */
    _onDarknessChange(event: PIXI.FederatedEvent): void;
    #private;
}
import PlaceablesLayer from "./base/placeables-layer.mjs";
