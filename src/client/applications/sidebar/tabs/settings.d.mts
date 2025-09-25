/**
 * The sidebar settings tab.
 * @extends {AbstractSidebarTab}
 * @mixes HandlebarsApplication
 */
export default class Settings extends AbstractSidebarTab<foundry.applications.types.ApplicationConfiguration, foundry.applications.types.ApplicationRenderOptions> {
    /** @override */
    static override DEFAULT_OPTIONS: {
        window: {
            title: string;
        };
        actions: {
            openApp: typeof Settings.#onOpenApp;
            notifyUpdate: typeof Settings.#onNotifyUpdate;
        };
    };
    /** @override */
    static override PARTS: {
        settings: {
            template: string;
            root: boolean;
        };
    };
    /**
     * Open an application.
     * @this {Settings}
     * @type {ApplicationClickAction}
     */
    static #onOpenApp(this: Settings, event: any): Promise<void>;
    static #onNotifyUpdate(event: any): Promise<void>;
    constructor(options?: Partial<foundry.applications.types.ApplicationConfiguration> | undefined);
    /** @inheritDoc */
    _prepareContext(options: any): Promise<foundry.applications.types.ApplicationRenderContext & {
        system: foundry.packages.System;
        release: any;
        versionDisplay: string;
        canConfigure: boolean;
        canEditWorld: boolean;
        canManagePlayers: boolean;
        canReturnSetup: boolean;
        modules: any;
        issues: number;
        isDemo: any;
        coreUpdate: string | null;
        systemUpdate: string | null;
    }>;
}
import AbstractSidebarTab from "../sidebar-tab.mjs";
