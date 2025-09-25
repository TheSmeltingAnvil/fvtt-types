/**
 * @import {ApplicationConfiguration, ApplicationRenderOptions} from "../_types.mjs"
 * @import {HandlebarsRenderOptions} from "../api/handlebars-application.mjs"
 */
/**
 * @typedef SceneControlTool
 * The data structure for a single tool in the {@link SceneControl#tools} record.
 * @property {string} name An identifier for the tool, unique among the tools of its SceneControl
 * @property {number} order An integer indicating the tool's order, with 0 being at the top
 * @property {string} title A title for the tool: can be a localization path
 * @property {string} icon  One or more icon classes for the tool, typically Font Awesome classes such as
 *                          "fa-solid fa-face-smile"
 * @property {boolean} [visible] Whether the tool should be visible to the current User
 * @property {boolean} [toggle] Is the tool an on-or-off toggle?
 * @property {boolean} [active] Is the tool the currently the active one? Not applicable to toggles or buttons.
 * @property {boolean} [button] Is the tool a "button" in the sense of immediately resolving on click without
 *                              becoming the active tool?
 * @property {(event: Event, active: boolean) => void} [onChange] A callback invoked when the tool is activated or
 *                                                                deactivated
 * @property {ToolclipConfiguration} [toolclip] Configuration for rendering the tool's toolclip
 */
/**
 * @typedef SceneControl
 * The data structure for a set of controls in the {@link SceneControls#controls} record.
 * @property {string} name A unique identifier for the control
 * @property {number} order An integer indicating the control's order, with 0 being at the top
 * @property {string} title A title for the control: can be a localization path
 * @property {string} icon  One or more icon classes for the control, typically Font Awesome classes such as
 *                          "fa-solid fa-face-smile"
 * @property {boolean} [visible] Whether the control should be visible to the current User
 * @property {Record<string, SceneControlTool>} tools
 * @property {string} activeTool
 * @property {(event: Event, active: boolean) => void} [onChange]
 * A callback invoked when control set is activated or deactivated
 * @property {(event: Event, tool: SceneControlTool) => void} [onToolChange]
 * A callback invoked when the active tool changes
 */
/**
 * @typedef ToolclipConfiguration
 * @property {string} src                         The filename of the toolclip video.
 * @property {string} heading                     The heading string.
 * @property {ToolclipConfigurationItem[]} items  The items in the toolclip body.
 */
/**
 * @typedef ToolclipConfigurationItem
 * @property {string} [paragraph]  A plain paragraph of content for this item.
 * @property {string} [heading]    A heading for the item.
 * @property {string} [content]    Content for the item.
 * @property {string} [reference]  If the item is a single key reference, use this instead of content.
 */
/**
 * @typedef _SceneControlsRenderOptions
 * @property {Event} [event]                      An event which prompted a re-render
 * @property {boolean} [reset]                    Re-prepare the possible list of controls
 * @property {string} [control]                   The control set to activate. If undefined, the current control set
 *                                                remains active
 * @property {string} [tool]                      A specific tool to activate. If undefined the current tool or default
 *                                                tool for the control set becomes active
 * @property {Record<string, boolean>} [toggles]  Changes to apply to toggles within the control set
 */
/**
 * @typedef {ApplicationRenderOptions &
 *           HandlebarsRenderOptions &
 *           _SceneControlsRenderOptions} SceneControlsRenderOptions
 * Options that can be passed to {@link SceneControls#render} to customize rendering behavior.
 */
/**
 * @typedef SceneControlsActivationChange
 * The data structure provided to the {@link SceneControl#onChange} callback.
 * @property {Event} event
 * @property {string} controlChange
 * @property {string} toolChange
 * @property {Record<string, boolean>} toggleChanges
 */
/**
 * The Scene Controls UI element.
 * @extends ApplicationV2<ApplicationConfiguration, SceneControlsRenderOptions>
 * @mixes HandlebarsApplication
 */
export default class SceneControls extends ApplicationV2<ApplicationConfiguration, SceneControlsRenderOptions> {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        id: string;
        classes: string[];
        tag: string;
        window: {
            frame: boolean;
            positioned: boolean;
        };
        actions: {
            control: typeof SceneControls.#onChangeControl;
            tool: typeof SceneControls.#onChangeTool;
        };
    };
    /** @override */
    static override PARTS: {
        layers: {
            id: string;
            template: string;
        };
        tools: {
            id: string;
            template: string;
        };
    };
    /** @inheritDoc */
    static emittedEvents: readonly ["render", "close", "position", "activate"];
    /**
     * Reusable toolclip items.
     * @type {Record<string, {heading: string, reference: string}>}
     */
    static COMMON_TOOLCLIP_ITEMS: Record<string, {
        heading: string;
        reference: string;
    }>;
    /**
     * A helper function used to prepare an array of toolclip items.
     * @param {Array<ToolclipConfigurationItem|string|null>} items
     * @returns {ToolclipConfigurationItem[]}
     */
    static buildToolclipItems(items: Array<ToolclipConfigurationItem | string | null>): ToolclipConfigurationItem[];
    /**
     * Handle changing the control layer.
     * @this {SceneControls}
     * @param {PointerEvent} event
     */
    static #onChangeControl(this: SceneControls, event: PointerEvent): void;
    /**
     * Handle changing the active tool within the currently active control set.
     * @this {SceneControls}
     * @param {PointerEvent} event
     */
    static #onChangeTool(this: SceneControls, event: PointerEvent): void;
    constructor(options?: Partial<ApplicationConfiguration> | undefined);
    /**
     * Prepared data of available controls.
     * @type {Record<string, SceneControl>}
     */
    get controls(): Record<string, SceneControl>;
    /**
     * The currently active control layer.
     * @type {SceneControl|null}
     */
    get control(): SceneControl | null;
    /**
     * The tools which are available within the current control layer.
     * @type {Record<string, SceneControlTool>}
     */
    get tools(): Record<string, SceneControlTool>;
    /**
     * The currently active tool in the control palette.
     * @type {SceneControlTool}
     */
    get tool(): SceneControlTool;
    /**
     * Activate a new control layer or tool.
     * This method is advantageous to use because it minimizes the amount of re-rendering necessary.
     * @param {Pick<SceneControlsRenderOptions, "event"|"control"|"tool"|"toggles">} options
     * @returns {Promise<void>}
     */
    activate(options?: Pick<SceneControlsRenderOptions, "event" | "control" | "tool" | "toggles">): Promise<void>;
    /** @inheritDoc */
    _configureRenderOptions(options: any): void;
    /** @inheritDoc */
    _preRender(context: any, options: any): Promise<void>;
    /** @override */
    override _prepareContext(options: any): Promise<{
        controls: any[];
        tools: SceneControlTool[];
    }>;
    /** @inheritDoc */
    _onRender(context: any, options: any): Promise<void>;
    /**
     * Update the class of the notes layer icon to reflect whether there are visible notes or not.
     * @internal
     */
    _updateNotesIcon(): void;
    /** @override */
    override setPosition(position: any): void | foundry.applications.types.ApplicationPosition;
    /**
     * @deprecated since v13
     * @ignore
     */
    get activeControl(): string;
    /**
     * @deprecated since v13
     * @ignore
     */
    get activeTool(): string | null;
    /**
     * @deprecated since v13
     * @ignore
     */
    initialize({ layer, tool }?: object): Promise<this>;
    #private;
}
/**
 * The data structure for a single tool in the {@link SceneControl#tools} record.
 */
export type SceneControlTool = {
    /**
     * An identifier for the tool, unique among the tools of its SceneControl
     */
    name: string;
    /**
     * An integer indicating the tool's order, with 0 being at the top
     */
    order: number;
    /**
     * A title for the tool: can be a localization path
     */
    title: string;
    /**
     * One or more icon classes for the tool, typically Font Awesome classes such as
     * "fa-solid fa-face-smile"
     */
    icon: string;
    /**
     * Whether the tool should be visible to the current User
     */
    visible?: boolean | undefined;
    /**
     * Is the tool an on-or-off toggle?
     */
    toggle?: boolean | undefined;
    /**
     * Is the tool the currently the active one? Not applicable to toggles or buttons.
     */
    active?: boolean | undefined;
    /**
     * Is the tool a "button" in the sense of immediately resolving on click without
     *  becoming the active tool?
     */
    button?: boolean | undefined;
    /**
     * A callback invoked when the tool is activated or
     *  deactivated
     */
    onChange?: ((event: Event, active: boolean) => void) | undefined;
    /**
     * Configuration for rendering the tool's toolclip
     */
    toolclip?: ToolclipConfiguration | undefined;
};
/**
 * The data structure for a set of controls in the {@link SceneControls#controls} record.
 */
export type SceneControl = {
    /**
     * A unique identifier for the control
     */
    name: string;
    /**
     * An integer indicating the control's order, with 0 being at the top
     */
    order: number;
    /**
     * A title for the control: can be a localization path
     */
    title: string;
    /**
     * One or more icon classes for the control, typically Font Awesome classes such as
     * "fa-solid fa-face-smile"
     */
    icon: string;
    /**
     * Whether the control should be visible to the current User
     */
    visible?: boolean | undefined;
    tools: Record<string, SceneControlTool>;
    activeTool: string;
    /**
     * A callback invoked when control set is activated or deactivated
     */
    onChange?: ((event: Event, active: boolean) => void) | undefined;
    /**
     * A callback invoked when the active tool changes
     */
    onToolChange?: ((event: Event, tool: SceneControlTool) => void) | undefined;
};
export type ToolclipConfiguration = {
    /**
     * The filename of the toolclip video.
     */
    src: string;
    /**
     * The heading string.
     */
    heading: string;
    /**
     * The items in the toolclip body.
     */
    items: ToolclipConfigurationItem[];
};
export type ToolclipConfigurationItem = {
    /**
     * A plain paragraph of content for this item.
     */
    paragraph?: string | undefined;
    /**
     * A heading for the item.
     */
    heading?: string | undefined;
    /**
     * Content for the item.
     */
    content?: string | undefined;
    /**
     * If the item is a single key reference, use this instead of content.
     */
    reference?: string | undefined;
};
export type _SceneControlsRenderOptions = {
    /**
     * An event which prompted a re-render
     */
    event?: Event | undefined;
    /**
     * Re-prepare the possible list of controls
     */
    reset?: boolean | undefined;
    /**
     * The control set to activate. If undefined, the current control set
     *                    remains active
     */
    control?: string | undefined;
    /**
     * A specific tool to activate. If undefined the current tool or default
     *                       tool for the control set becomes active
     */
    tool?: string | undefined;
    /**
     * Changes to apply to toggles within the control set
     */
    toggles?: Record<string, boolean> | undefined;
};
/**
 * Options that can be passed to {@link SceneControls#render} to customize rendering behavior.
 */
export type SceneControlsRenderOptions = ApplicationRenderOptions & HandlebarsRenderOptions & _SceneControlsRenderOptions;
/**
 * The data structure provided to the {@link SceneControl#onChange} callback.
 */
export type SceneControlsActivationChange = {
    event: Event;
    controlChange: string;
    toolChange: string;
    toggleChanges: Record<string, boolean>;
};
import type { ApplicationConfiguration } from "../_types.mjs";
import ApplicationV2 from "../api/application.mjs";
import type { ApplicationRenderOptions } from "../_types.mjs";
import type { HandlebarsRenderOptions } from "../api/handlebars-application.mjs";
