/**
 * @import {ApplicationClickAction, FormFooterButton} from "../_types.mjs";
 */
/**
 * A Macro configuration sheet
 * @extends DocumentSheetV2
 * @mixes HandlebarsApplication
 */
// @ts-expect-error -- IGNORE --
export default class MacroConfig extends DocumentSheetV2 {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        classes: string[];
        canCreate: boolean;
        window: {
            contentClasses: string[];
            icon: string;
            resizable: boolean;
        };
        position: {
            width: number;
            height: number;
        };
        actions: {
            execute: typeof MacroConfig.#onExecute;
        };
        form: {
            closeOnSubmit: boolean;
        };
    };
    /** @override */
    // @ts-expect-error -- IGNORE --
    static override PARTS: {
        body: {
            template: string;
            root: boolean;
        };
        footer: {
            template: string;
        };
    };
    static #onExecute(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    /** @inheritDoc */
    _processSubmitData(event: any, form: any, submitData: any, options: any): Promise<void>;
    #private;
}
import { DocumentSheetV2 } from "../api/_module.mjs";
