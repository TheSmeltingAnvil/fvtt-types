/**
 * @import {ApplicationClickAction} from "../../_types.mjs";
 */
/**
 * A management app for configuring which Tours are available or have been completed.
 */
export default class ToursManagement extends CategoryBrowser {
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
        actions: {
            resetDefaults: typeof ToursManagement.#onResetDefaults;
            play: typeof ToursManagement.#onPlayTour;
            reset: typeof ToursManagement.#onResetTour;
        };
        initialCategory: string;
        subtemplates: {
            category: string;
            sidebarFooter: string;
        };
    };
    static #onPlayTour(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onResetTour(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onResetDefaults(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    /** @override */
    override _prepareCategoryData(): object;
    /** @override */
    override _sortCategories(a: any, b: any): any;
    #private;
}
import CategoryBrowser from "@client/applications/api/category-browser.mjs";
