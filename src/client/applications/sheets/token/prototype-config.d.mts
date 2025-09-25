/**
 * @import {ApplicationClickAction, ApplicationFormSubmission} from "../../_types.mjs";
 * @import DocumentSheetV2 from "../../api/document-sheet.mjs";
 */
/**
 * The Application responsible for configuring an actor's PrototypeToken
 * @extends ApplicationV2
 * @mixes TokenApplication
 */
export default class PrototypeTokenConfig extends ApplicationV2<foundry.applications.types.ApplicationConfiguration, foundry.applications.types.ApplicationRenderOptions> {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        tag: string;
        classes: string[];
        actions: {
            assignToken: typeof PrototypeTokenConfig.#onAssignToken;
        };
        form: {
            handler: typeof PrototypeTokenConfig.#onSubmit;
        };
    };
    static #onAssignToken(event: PointerEvent, target: HTMLElement): void | Promise<void>;
    static #onSubmit(event: SubmitEvent | Event, form: HTMLFormElement, formData: foundry.applications.ux.FormDataExtended): Promise<any>;
    /** @inheritDoc */
    constructor(options: any);
    /** @override */
    override isPrototype: boolean;
    /** @override */
    override get token(): foundry.abstract.DataModel<object, foundry.abstract.types.DataModelConstructionContext> | Promise<foundry.abstract.DataModel<object, foundry.abstract.types.DataModelConstructionContext>>;
    /** @override */
    override get actor(): foundry.abstract.DataModel<object, foundry.abstract.types.DataModelConstructionContext> | null;
    /** @override */
    override get _fields(): foundry.abstract.types.DataSchema;
    /**
     * Is this sheet visible to the user?
     * @returns {boolean}
     */
    get isVisible(): boolean;
    /** @inheritDoc */
    _canRender(options: any): false | void;
    /** @inheritDoc */
    _initializeApplicationOptions(options: any): foundry.applications.types.ApplicationConfiguration;
    /** @override */
    override _initializeTokenPreview(): Promise<void>;
    _preview: foundry.abstract.DataModel<object, foundry.abstract.types.DataModelConstructionContext> | Promise<foundry.abstract.DataModel<object, foundry.abstract.types.DataModelConstructionContext>> | undefined;
    /** @inheritDoc */
    _configureRenderOptions(options: any): void;
    /** @inheritDoc */
    _prepareButtons(): any;
    /** @inheritDoc */
    _onFirstRender(context: any, options: any): Promise<void>;
    /**
     * Customize how form data is extracted into an expanded object.
     * @param {SubmitEvent|null} event    The originating form submission event
     * @param {HTMLFormElement} form      The form element that was submitted
     * @param {FormDataExtended} formData Processed data for the submitted form
     * @returns {object} An expanded object of processed form data
     * @throws {Error}   Subclasses may throw validation errors here to prevent form submission
     * @protected
     */
    protected _processFormData(event: SubmitEvent | null, form: HTMLFormElement, formData: FormDataExtended): object;
    /** @inheritDoc */
    _tearDown(options: any): void;
    #private;
}
import ApplicationV2 from "../../api/application.mjs";
