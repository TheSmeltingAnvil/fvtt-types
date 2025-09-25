/**
 * The User configuration application.
 * @extends DocumentSheetV2
 * @mixes HandlebarsApplication
 */
export default class UserConfig extends DocumentSheetV2 {
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
        actions: {
            releaseCharacter: typeof UserConfig.#onReleaseCharacter;
        };
        form: {
            closeOnSubmit: boolean;
        };
    };
    /** @override */
    static override PARTS: {
        form: {
            id: string;
            template: string;
            scrollable: string[];
        };
        footer: {
            template: string;
        };
    };
    /**
     * Handle button clicks to release the currently selected character.
     * @param {PointerEvent} event
     */
    static #onReleaseCharacter(event: PointerEvent): void;
    #private;
}
import DocumentSheetV2 from "../api/document-sheet.mjs";
