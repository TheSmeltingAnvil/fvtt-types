/**
 * @import {ApplicationConfiguration, ApplicationRenderOptions} from "../_types.mjs"
 */
/**
 * The sidebar tab interface that allows any sidebar tab to also be rendered as a popout.
 * @template {ApplicationConfiguration} [Configuration=ApplicationConfiguration]
 * @template {ApplicationRenderOptions} [RenderOptions=ApplicationRenderOptions]
 * @extends {ApplicationV2<Configuration, RenderOptions>}
 */
export default class AbstractSidebarTab<Configuration extends ApplicationConfiguration = ApplicationConfiguration, RenderOptions extends ApplicationRenderOptions = ApplicationRenderOptions> extends ApplicationV2<Configuration, RenderOptions> {
    /**
     * The base name of the sidebar tab.
     * @type {string}
     * @abstract
     */
    static tabName: string;
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        tag: string;
        classes: string[];
        window: {
            frame: boolean;
            positioned: boolean;
        };
    };
    /** @override */
    static override emittedEvents: readonly ["render", "close", "position", "activate", "deactivate"];
    /**
     * Whether this tab is currently active in the sidebar.
     * @type {boolean}
     */
    get active(): boolean;
    /**
     * Whether this is the popped-out tab or the in-sidebar one.
     * @type {boolean}
     */
    get isPopout(): boolean;
    /**
     * A reference to the popped-out version of this tab, if one exists.
     * @type {AbstractSidebarTab|void}
     */
    get popout(): AbstractSidebarTab | void;
    /**
     * The base name of the sidebar tab.
     * @type {string}
     */
    get tabName(): string;
    /** @inheritDoc */
    _initializeApplicationOptions(options: any): ApplicationConfiguration;
    /** @inheritDoc */
    _prepareContext(options: any): Promise<foundry.applications.types.ApplicationRenderContext>;
    /** @inheritDoc */
    _renderFrame(options: any): Promise<HTMLElement>;
    /** @inheritDoc */
    render(options: any, _options: any): Promise<this>;
    /**
     * Activate this tab in the sidebar.
     */
    activate(): void;
    /**
     * Pop-out this sidebar tab as a new application.
     * @returns {Promise<AbstractSidebarTab>}
     */
    renderPopout(): Promise<AbstractSidebarTab>;
    /**
     * Actions performed when this tab is activated in the sidebar.
     * @protected
     */
    protected _onActivate(): void;
    /** @inheritDoc */
    _onClose(options: any): void;
    /**
     * Actions performed when this tab is deactivated in the sidebar.
     * @protected
     */
    protected _onDeactivate(): void;
    /** @inheritDoc */
    _onFirstRender(context: any, options: any): Promise<void>;
    /** @inheritDoc */
    _onRender(context: any, options: any): Promise<void>;
    #private;
}
import type { ApplicationConfiguration } from "../_types.mjs";
import type { ApplicationRenderOptions } from "../_types.mjs";
import ApplicationV2 from "../api/application.mjs";
