/**
 * @import {ApplicationClickAction, ApplicationFormSubmission} from "@client/applications/_types.mjs"
 */
export default class DefaultSheetsConfig extends CategoryBrowser {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        id: string;
        window: {
            title: string;
            icon: string;
        };
        position: {
            width: number;
            height: number;
        };
        form: {
            handler: typeof DefaultSheetsConfig.#onSubmit;
        };
        actions: {
            resetDefaults: typeof DefaultSheetsConfig.#onResetDefaults;
        };
        subtemplates: {
            category: string;
            sidebarFooter: string;
        };
    };
    /**
     * The Default Sheets setting name
     * @type {"sheetClasses"}
     */
    static SETTING: "sheetClasses";
    /**
     * All document types with configurable default sheets
     * @type {Set<string>}
     */
    static #DOCUMENT_TYPES: Set<string>;
    /**
     * The "sheetClasses" Setting field
     * @type {fields.SchemaField}
     */
    static get SCHEMA(): fields.SchemaField;
    /**
     * @type {fields.SchemaField}
     */
    static #SCHEMA: fields.SchemaField;
    /**
     * Register the "sheetClasses" Setting and this menu application.
     */
    static registerSetting(): void;
    static #onResetDefaults(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onSubmit(event: SubmitEvent | Event, form: HTMLFormElement, formData: foundry.applications.ux.FormDataExtended): Promise<any>;
    /** @inheritDoc */
    _prepareCategoryData(): object;
}
import CategoryBrowser from "@client/applications/api/category-browser.mjs";
import * as fields from "@common/data/fields.mjs";
