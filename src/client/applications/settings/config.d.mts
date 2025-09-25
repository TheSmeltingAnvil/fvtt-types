/**
 * @import {ApplicationClickAction, ApplicationFormSubmission} from "../_types.mjs";
 */
/**
 * The Application responsible for displaying and editing the client and world settings for this world.
 * This form renders the settings defined via the game.settings.register API which have config = true
 */
export default class SettingsConfig extends CategoryBrowser {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        id: string;
        window: {
            title: string;
            icon: string;
            resizable: boolean;
        };
        position: {
            width: number;
            height: number;
        };
        form: {
            handler: typeof SettingsConfig.#onSubmit;
        };
        actions: {
            openSubmenu: typeof SettingsConfig.#onOpenSubmenu;
            resetDefaults: typeof SettingsConfig.#onResetDefaults;
        };
        initialCategory: string;
        subtemplates: {
            category: string;
            sidebarFooter: string;
        };
    };
    /**
     * Confirm if the user wishes to reload the application.
     * @param {object} [options]               Additional options to configure the prompt.
     * @param {boolean} [options.world=false]  Whether to reload all connected clients as well.
     * @returns {Promise<void>}
     */
    static reloadConfirm({ world }?: {
        world?: boolean | undefined;
    }): Promise<void>;
    static #onOpenSubmenu(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onResetDefaults(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onSubmit(event: SubmitEvent | Event, form: HTMLFormElement, formData: foundry.applications.ux.FormDataExtended): Promise<any>;
    /** @inheritDoc */
    _prepareCategoryData(): object;
    /**
     * Classify what Category an Action belongs to
     * @param {string} namespace The entry to classify
     * @returns {{id: string; label: string}} The category the entry belongs to
     * @protected
     */
    protected _categorizeEntry(namespace: string): {
        id: string;
        label: string;
    };
    /**
     * Sort categories in order of core, system, and finally modules.
     * @param {{id: string; label: string}} a
     * @param {{id: string; label: string}} b
     * @protected
     * @override
     */
    protected override _sortCategories(a: {
        id: string;
        label: string;
    }, b: {
        id: string;
        label: string;
    }): number;
}
import CategoryBrowser from "../api/category-browser.mjs";
