/**
 * This Canvas Layer provides a container for MeasuredTemplate objects.
 * @category Canvas
 */
export default class TemplateLayer extends PlaceablesLayer {
    /** @inheritdoc */
    static get layerOptions(): object;
    /**
     * Register game settings used by the TemplatesLayer
     */
    static registerSettings(): void;
    /** @override */
    static override prepareSceneControls(): {
        name: string;
        order: number;
        title: string;
        icon: string;
        visible: boolean;
        onChange: (event: any, active: any) => void;
        onToolChange: () => any;
        tools: {
            circle: {
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
            cone: {
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
            ray: {
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
    /** @inheritDoc */
    _getCopyableObjects(options: any): foundry.canvas.placeables.PlaceableObject[];
    /** @inheritdoc */
    _onMouseWheel(event: any): Promise<foundry.canvas.placeables.PlaceableObject> | undefined;
}
import PlaceablesLayer from "./base/placeables-layer.mjs";
