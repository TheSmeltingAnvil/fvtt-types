/**
 * @import {ApplicationClickAction, FormFooterButton} from "../_types.mjs";
 * @import EmbeddedCollection from "@common/abstract/embedded-collection.mjs";
 */
/**
 * The Application responsible for configuring a single Scene document.
 * @extends DocumentSheetV2
 * @mixes HandlebarsApplication
 */
export default class SceneConfig extends DocumentSheetV2 {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        classes: string[];
        window: {
            contentClasses: string[];
            icon: string;
        };
        position: {
            width: number;
        };
        form: {
            closeOnSubmit: boolean;
        };
        actions: {
            capturePosition: typeof SceneConfig.#onCapturePosition;
            toggleLinkDimensions: typeof SceneConfig.#onToggleLinkDimensions;
            openGridConfig: typeof SceneConfig.#onOpenGridConfig;
            resetEnvironment: typeof SceneConfig.#onResetEnvironment;
        };
    };
    /** @override */
    static override PARTS: {
        tabs: {
            template: string;
        };
        basics: {
            template: string;
        };
        grid: {
            template: string;
        };
        lighting: {
            template: string;
            scrollable: string[];
        };
        ambience: {
            template: string;
            scrollable: string[];
        };
        footer: {
            template: string;
        };
    };
    /** @override */
    static override TABS: {
        sheet: {
            tabs: {
                id: string;
                icon: string;
            }[];
            initial: string;
            labelPrefix: string;
        };
        ambience: {
            tabs: {
                id: string;
                icon: string;
            }[];
            initial: string;
            labelPrefix: string;
        };
    };
    /**
     * Get an enumeration of the available grid types which can be applied to this Scene
     * @returns {Record<GRID_TYPES, string>}
     * @internal
     */
    static _getGridTypes(): Record<GRID_TYPES, string>;
    static #onCapturePosition(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onOpenGridConfig(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onToggleLinkDimensions(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onResetEnvironment(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    /** @inheritDoc */
    _preparePartContext(partId: any, context: any, options: any): Promise<any>;
    /** @inheritDoc */
    changeTab(tab: any, group: any, options: any): void;
    /**
     * Live update the scene as certain properties are changed.
     * @param {string} changed The changed property
     * @param {object} [options]
     * @param {boolean} [options.force] Should the preview be forced, regardless of changes?
     * @internal
     */
    _previewScene(changed: string, { force }?: {
        force?: boolean | undefined;
    }): void;
    /** @override */
    override _processSubmitData(event: any, form: any, submitData: any, options: any): Promise<void>;
    #private;
}
import { DocumentSheetV2 } from "../api/_module.mjs";
