/**
 * @import {ApplicationClickAction} from "../_types.mjs";
 */
/**
 * A DocumentSheet application responsible for displaying and editing a single embedded Card document.
 * @extends DocumentSheetV2
 * @mixes HandlebarsApplication
 */
// @ts-expect-error -- IGNORE --
export default class CardConfig extends DocumentSheetV2 {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        classes: string[];
        position: {
            width: number;
        };
        window: {
            contentClasses: string[];
            icon: string;
        };
        form: {
            closeOnSubmit: boolean;
        };
        actions: {
            addFace: typeof CardConfig.#onAddFace;
            deleteFace: typeof CardConfig.#onDeleteFace;
        };
    };
    /** @override */
    // @ts-expect-error -- IGNORE --
    static override PARTS: {
        header: {
            template: string;
        };
        tabs: {
            template: string;
        };
        details: {
            template: string;
        };
        faces: {
            template: string;
            scrollable: string[];
        };
        back: {
            template: string;
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
    };
    /**
     * Card types with pre-localized labels
     * @type {Record<string, string>}
     */
    static get TYPES(): Record<string, string>;
    static #TYPES: any;
    static #onAddFace(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onDeleteFace(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    /** @inheritDoc */
    _preparePartContext(partId: any, context: any, options: any): Promise<any>;
}
import { DocumentSheetV2 } from "../api/_module.mjs";
