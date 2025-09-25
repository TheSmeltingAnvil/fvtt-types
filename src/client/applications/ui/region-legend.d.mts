/**
 * Scene Region Legend.
 * @extends ApplicationV2
 * @mixes HandlebarsApplication
 */
export default class RegionLegend extends ApplicationV2<foundry.applications.types.ApplicationConfiguration, foundry.applications.types.ApplicationRenderOptions> {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        id: string;
        tag: string;
        window: {
            title: string;
            icon: string;
            minimizable: boolean;
        };
        position: {
            width: number;
        };
        actions: {
            config: typeof RegionLegend.#onConfig;
            control: typeof RegionLegend.#onControl;
            create: typeof RegionLegend.#onCreate;
            delete: typeof RegionLegend.#onDelete;
            lock: typeof RegionLegend.#onLock;
        };
    };
    /** @override */
    static override PARTS: {
        list: {
            id: string;
            template: string;
            scrollable: string[];
        };
    };
    /**
     * Handle clicks to configure a Region.
     * @param {PointerEvent} event
     */
    static #onConfig(event: PointerEvent): void;
    /**
     * Handle clicks to assume control over a Region.
     * @param {PointerEvent} event
     */
    static #onControl(event: PointerEvent): void;
    /**
     * Handle button clicks to create a new Region.
     * @param {PointerEvent} event
     */
    static #onCreate(event: PointerEvent): Promise<void>;
    /**
     * Handle clicks to delete a Region.
     * @param {PointerEvent} event
     */
    static #onDelete(event: PointerEvent): Promise<void>;
    /**
     * Handle clicks to toggle the locked state of a Region.
     * @param {PointerEvent} event
     */
    static #onLock(event: PointerEvent): Promise<void>;
    constructor(options?: Partial<foundry.applications.types.ApplicationConfiguration> | undefined);
    /**
     * The currently viewed elevation range.
     * @type {{bottom: number, top: number}}
     */
    elevation: {
        bottom: number;
        top: number;
    };
    /** @override */
    override _configureRenderOptions(options: any): void;
    /** @override */
    override _canRender(options: any): false | undefined;
    /** @inheritDoc */
    _renderFrame(options: any): Promise<HTMLElement>;
    /** @inheritDoc */
    close(options?: object): Promise<this>;
    /** @inheritDoc */
    _onFirstRender(context: any, options: any): Promise<void>;
    /** @inheritDoc */
    _onRender(context: any, options: any): Promise<void>;
    /** @inheritDoc */
    _onClose(options: any): void;
    /** @override */
    override _prepareContext(_options: any): Promise<{
        regions: any;
        elevation: {
            bottom: string | number;
            top: string | number;
        };
    }>;
    /**
     * Is this Region visible in this RegionLegend?
     * @param {Region} region    The region
     * @returns {boolean}
     * @internal
     */
    _isRegionVisible(region: Region): boolean;
    /**
     * Highlight a hovered region in the legend.
     * @param {Region} region    The Region
     * @param {boolean} hover    Whether they are being hovered in or out.
     * @internal
     */
    _hoverRegion(region: Region, hover: boolean): void;
    #private;
}
import ApplicationV2 from "../api/application.mjs";
