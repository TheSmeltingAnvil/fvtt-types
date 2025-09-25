/**
 * @import {ApplicationClickAction, ApplicationFormSubmission} from "../_types.mjs";
 */
/**
 * The Application responsible for configuring a single ActiveEffect document within a parent Actor or Item.
 * @extends DocumentSheetV2
 * @mixes HandlebarsApplication
 */
// @ts-expect-error -- IGNORE --
export default class ActiveEffectConfig extends DocumentSheetV2 {
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
            addChange: typeof ActiveEffectConfig.#onAddChange;
            deleteChange: typeof ActiveEffectConfig.#onDeleteChange;
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
            scrollable: string[];
        };
        duration: {
            template: string;
        };
        changes: {
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
    };
    /**
     * The default priorities of the core change modes
     * @type {Record<number, number>}
     */
    static DEFAULT_PRIORITIES: Record<number, number>;
    static #onAddChange(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onDeleteChange(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    /** @inheritDoc */
    _preparePartContext(partId: any, context: any): Promise<any>;
}
import { DocumentSheetV2 } from "../api/_module.mjs";
