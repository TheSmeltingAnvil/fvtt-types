/**
 * An application for configuring the permissions which are available to each User role.
 * @extends ApplicationV2
 * @mixes HandlebarsApplication
 */
export default class PermissionConfig extends ApplicationV2<foundry.applications.types.ApplicationConfiguration, foundry.applications.types.ApplicationRenderOptions> {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        id: string;
        tag: string;
        window: {
            contentClasses: string[];
            icon: string;
            title: string;
        };
        position: {
            width: number;
        };
        form: {
            closeOnSubmit: boolean;
            handler: typeof PermissionConfig.#onSubmit;
        };
        actions: {
            reset: typeof PermissionConfig.#onReset;
        };
    };
    /** @override */
    static override PARTS: {
        permissions: {
            id: string;
            template: string;
            root: boolean;
            scrollable: string[];
        };
        footer: {
            template: string;
        };
    };
    /**
     * Handle submission
     * @this {DocumentSheetV2}                      The handler is called with the application as its bound scope
     * @param {SubmitEvent} event                   The originating form submission event
     * @param {HTMLFormElement} form                The form element that was submitted
     * @param {FormDataExtended} formData           Processed data for the submitted form
     * @returns {Promise<void>}
     */
    static #onSubmit(this: DocumentSheetV2, event: SubmitEvent, form: HTMLFormElement, formData: FormDataExtended): Promise<void>;
    /**
     * Handle click actions to reset all permissions back to their initial state.
     * @this {PermissionConfig}
     * @param {PointerEvent} event
     * @returns {Promise<void>}
     */
    static #onReset(this: PermissionConfig, event: PointerEvent): Promise<void>;
    constructor(options?: Partial<foundry.applications.types.ApplicationConfiguration> | undefined);
    /** @override */
    override _prepareContext(_options?: object): Promise<{
        roles: object;
        permissions: object[];
        buttons: ({
            type: string;
            action: string;
            icon: string;
            label: string;
        } | {
            type: string;
            icon: string;
            label: string;
            action?: undefined;
        })[];
    }>;
    #private;
}
import ApplicationV2 from "../api/application.mjs";
