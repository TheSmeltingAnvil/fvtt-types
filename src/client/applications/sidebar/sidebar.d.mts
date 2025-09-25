/**
 * @import {ApplicationConfiguration, ApplicationRenderContext} from "../_types.mjs"
 * @import {HandlebarsRenderOptions} from "../api/handlebars-application.mjs"
 */
/**
 * @typedef SidebarTabDescriptor
 * @property {string} [tooltip]       The tab's tooltip.
 * @property {string} [icon]          The tab's Font Awesome icon class.
 * @property {string} [documentName]  A Document name to retrieve tooltip and icon information from automatically.
 * @property {boolean} [gmOnly]       Whether the tab is only rendered for GM users.
 */
/**
 * The main sidebar application.
 * @extends {ApplicationV2<ApplicationConfiguration, HandlebarsRenderOptions>}
 * @mixes HandlebarsApplication
 */
export default class Sidebar extends ApplicationV2<ApplicationConfiguration, HandlebarsRenderOptions> {
    /** @override */
    static override DEFAULT_OPTIONS: {
        id: string;
        tag: string;
        window: {
            frame: boolean;
            positioned: boolean;
        };
        actions: {
            toggleState: typeof Sidebar.#onToggleState;
        };
    };
    /**
     * Tab configuration.
     * @type {Record<string, SidebarTabDescriptor>}
     */
    static TABS: Record<string, SidebarTabDescriptor>;
    /** @override */
    static override PARTS: {
        tabs: {
            id: string;
            template: string;
        };
    };
    /**
     * Handle collapsing or expanding the sidebar.
     * @this {Sidebar}
     */
    static #onToggleState(this: Sidebar): void;
    constructor(options?: Partial<ApplicationConfiguration> | undefined);
    /** @override */
    override tabGroups: {
        primary: string;
    };
    /**
     * Whether the sidebar is currently expanded.
     * @type {boolean}
     */
    get expanded(): boolean;
    /**
     * The currently popped-out sidebar tabs.
     * @type {Record<string, SidebarTab|AbstractSidebarTab>}
     */
    popouts: Record<string, SidebarTab | AbstractSidebarTab>;
    /** @inheritDoc */
    _configureRenderOptions(options: any): void;
    /** @inheritDoc */
    _onFirstRender(context: any, options: any): Promise<void>;
    /** @inheritDoc */
    _preparePartContext(partId: any, context: any, options: any): Promise<any>;
    /**
     * Prepare render context for the tabs.
     * @param {ApplicationRenderContext} context  Shared context provided by _prepareContext.
     * @param {HandlebarsRenderOptions} options   Options for configuring rendering behavior.
     * @protected
     */
    protected _prepareTabContext(context: ApplicationRenderContext, options: HandlebarsRenderOptions): Promise<void>;
    /** @inheritDoc */
    _renderHTML(context: any, options: any): Promise<any>;
    /** @inheritDoc */
    _onClickTab(event: any): void;
    /** @inheritDoc */
    changeTab(tab: any, group: any, options?: object): void;
    /**
     * Collapse the sidebar.
     */
    collapse(): void;
    /**
     * Expand the sidebar.
     */
    expand(): void;
    /**
     * Toggle the expanded state of the sidebar.
     * @param {boolean} [expanded]  Force the expanded state to the provided value, otherwise toggle the state.
     * @fires {hookEvents:collapseSidebar}
     */
    toggleExpanded(expanded?: boolean): void;
    /**
     * @deprecated since v13
     * @ignore
     */
    activateTab(tabName: any): void;
    #private;
}
export type SidebarTabDescriptor = {
    /**
     * The tab's tooltip.
     */
    tooltip?: string | undefined;
    /**
     * The tab's Font Awesome icon class.
     */
    icon?: string | undefined;
    /**
     * A Document name to retrieve tooltip and icon information from automatically.
     */
    documentName?: string | undefined;
    /**
     * Whether the tab is only rendered for GM users.
     */
    gmOnly?: boolean | undefined;
};
import type { ApplicationConfiguration } from "../_types.mjs";
import type { HandlebarsRenderOptions } from "../api/handlebars-application.mjs";
import ApplicationV2 from "../api/application.mjs";
import type { ApplicationRenderContext } from "../_types.mjs";
