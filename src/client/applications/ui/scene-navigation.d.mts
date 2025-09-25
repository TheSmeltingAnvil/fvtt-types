/**
 * The Scene Navigation UI element.
 * @extends ApplicationV2
 * @mixes HandlebarsApplication
 */
export default class SceneNavigation extends ApplicationV2<foundry.applications.types.ApplicationConfiguration, foundry.applications.types.ApplicationRenderOptions> {
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
            viewScene: typeof SceneNavigation.#onViewScene;
            toggleExpand: typeof SceneNavigation.#onToggleExpand;
        };
    };
    /** @override */
    static override PARTS: {
        scenes: {
            root: boolean;
            template: string;
        };
    };
    /**
     * Handle a click event to view a certain Scene.
     * @this {SceneNavigation}
     * @param {PointerEvent} event
     * @returns {Promise<void>}
     */
    static #onViewScene(this: SceneNavigation, event: PointerEvent): Promise<void>;
    /**
     * Handle a click event to view a certain Scene.
     * @this {SceneNavigation}
     */
    static #onToggleExpand(this: SceneNavigation): void;
    /**
     * @deprecated since v13
     * @ignore
     */
    static displayProgressBar({ label, pct }?: object): void;
    static #loadingBar: any;
    constructor(options?: Partial<foundry.applications.types.ApplicationConfiguration> | undefined);
    /**
     * Whether the scene navigation is currently expanded.
     * @type {boolean}
     */
    get expanded(): boolean;
    /** @override */
    override _prepareContext(_options: any): Promise<{
        scenes: {
            inactive: object[];
            active: object[];
        };
        canExpand: number;
    }>;
    /** @override */
    override _onFirstRender(_context: any, _options: any): Promise<void>;
    /** @override */
    override _onRender(_context: any, _options: any): Promise<void>;
    /**
     * Get the set of ContextMenu options which should be applied for Scenes in the menu.
     * @returns {ContextMenuEntry[]}   The Array of context options passed to the ContextMenu instance
     * @protected
     */
    protected _getContextMenuOptions(): ContextMenuEntry[];
    /**
     * Expand Scene Navigation, displaying inactive Scenes.
     * @fires {hookEvents:collapseSceneNavigation}
     */
    expand(): void;
    /**
     * Collapse Scene Navigation, hiding inactive Scenes.
     * @fires {hookEvents:collapseSceneNavigation}
     */
    collapse(): Promise<void>;
    /**
     * Toggle the expanded state of scene navigation.
     * @param {boolean} [expanded]  Force the expanded state to the provided value, otherwise toggle the state.
     * @fires {hookEvents:collapseSceneNavigation}
     */
    toggleExpanded(expanded?: boolean): void;
    #private;
}
import ApplicationV2 from "../api/application.mjs";
