declare const DocumentSheetConfig_base: typeof ApplicationV2;
/**
 * @import {ApplicationConfiguration, ApplicationRenderContext, ApplicationRenderOptions} from "../_types.mjs";
 * @import {DocumentSheetConfiguration, DocumentSheetRenderOptions} from "../api/document-sheet.mjs";
 * @import Application from "@client/appv1/api/application-v1.mjs";
 * @import ApplicationV2 from "../api/application.mjs";
 */
/**
 * @typedef DefaultSheetDescriptor
 * @property {string} sheet  The identifier of the default sheet.
 * @property {string} theme  The default theme.
 */
/**
 * @typedef SheetRegistrationDescriptor
 * @property {typeof ClientDocument} documentClass  The Document class to register a new sheet option for.
 * @property {string} id                            The identifier of the sheet being registered.
 * @property {typeof Application|typeof ApplicationV2} sheetClass An Application class used to render the sheet.
 * @property {string|(()=>string)} [label]          A human-readable label for the sheet name, or a function that
 *                                                  returns one. Will be localized.
 * @property {string[]} [types]                     An array of Document sub-types to register the sheet for.
 * @property {Record<string, string>|null} [themes] An object of theme keys to labels that the sheet supports. If this
 *                                                  option is not supplied, the sheet is assumed to support both light
 *                                                  and dark themes. If null is supplied, it indicates that the sheet
 *                                                  does not support theming.
 * @property {boolean} [makeDefault=false]          Whether to make this sheet the default for the provided sub-types.
 * @property {boolean} [canBeDefault=true]          Whether this sheet is available to be selected as a default sheet
 *                                                  for all Documents of that type.
 * @property {boolean} [canConfigure=true]          Whether this sheet appears in the sheet configuration UI for users.
 */
/**
 * @typedef {Omit<SheetRegistrationDescriptor, "documentClass"|"id"|"sheetClass">} SheetRegistrationOptions
 */
/**
 * @typedef DocumentSheetConfigRenderContext
 * @property {DocumentSheetConfigFieldDescriptor} sheet  Context for the sheet field.
 * @property {DocumentSheetConfigFieldDescriptor} theme  Context for the theme field.
 */
/**
 * @typedef DocumentSheetConfigFieldDescriptor
 * @property {DataField} field     The field instance.
 * @property {string} name         The field's form name.
 * @property {string} value        The field's value.
 * @property {boolean} [disabled]  Whether the field should be disabled in the form.
 */
/**
 * An Application for configuring Document sheet settings.
 * @extends {ApplicationV2<
 *  ApplicationConfiguration & DocumentSheetConfiguration,
 *  ApplicationRenderOptions & DocumentSheetRenderOptions
 * >}
 * @mixes HandlebarsApplication
 */
export default class DocumentSheetConfig extends DocumentSheetConfig_base {
    /** @override */
    static override DEFAULT_OPTIONS: {
        id: string;
        classes: string[];
        sheetConfig: boolean;
        window: {
            contentClasses: string[];
            icon: string;
        };
        position: {
            width: number;
        };
        form: {
            handler: typeof DocumentSheetConfig.#onSubmitForm;
            closeOnSubmit: boolean;
        };
    };
    /** @override */
    static override PARTS: {
        form: {
            classes: string[];
            template: string;
        };
        footer: {
            template: string;
        };
    };
    /**
     * Process form submission for the sheet.
     * @this {DocumentSheetConfig}
     * @param {SubmitEvent} event          The form submission event.
     * @param {HTMLFormElement} form       The form element that was submitted.
     * @param {FormDataExtended} formData  Processed data for the submitted form.
     * @returns {Promise<void>}
     */
    static #onSubmitForm(this: DocumentSheetConfig, event: SubmitEvent, form: HTMLFormElement, formData: FormDataExtended): Promise<void>;
    /**
     * Marshal information on the available sheet classes for a given document type and sub-type, and format it for
     * display.
     * @param {string} documentName  The Document type.
     * @param {string} [subType]     The Document sub-type, if applicable.
     * @returns {{sheetClasses: Record<string, string>, defaultClasses: Record<string, string>, defaultClass: string}}
     */
    static getSheetClassesForSubType(documentName: string, subType?: string): {
        sheetClasses: Record<string, string>;
        defaultClasses: Record<string, string>;
        defaultClass: string;
    };
    /**
     * Retrieve the user's theme preference for the given Document.
     * @param {ClientDocument} document  The Document.
     * @returns {string}                 The theme identifier, or a blank string if the user has no preference.
     */
    static getSheetThemeForDocument(document: ClientDocument): string;
    /**
     * An array of pending sheet assignments which are submitted before other elements of the framework are ready.
     * @type {Array<SheetRegistrationDescriptor & { action: "register"|"unregister" }>}
     */
    static #pending: Array<SheetRegistrationDescriptor & {
        action: "register" | "unregister";
    }>;
    /**
     * Get the available Document sub-types for the given Document class.
     * @param {typeof ClientDocument} cls  The Document class.
     * @param {string[]} types             A sub-set of Document sub-types to return instead.
     */
    static #getDocumentTypes(cls: typeof ClientDocument, types?: string[]): string[];
    /**
     * Initialize the configured sheet preferences for Documents which support dynamic sheet assignment.
     * @returns {Promise<void>}
     */
    static initializeSheets(): Promise<void>;
    /**
     * Register a sheet class as a candidate to be used to display Documents of a given type.
     * @param {typeof ClientDocument} documentClass                 The Document class to register a new sheet for.
     * @param {string} scope                                        A unique namespace scope for this sheet.
     * @param {typeof Application|typeof ApplicationV2} sheetClass  An Application class used to render the sheet.
     * @param {SheetRegistrationOptions} options                    Sheet registration configuration options.
     */
    static registerSheet(documentClass: typeof ClientDocument, scope: string, sheetClass: typeof Application | typeof ApplicationV2, options?: SheetRegistrationOptions): void;
    /**
     * Perform the sheet registration.
     * @param {SheetRegistrationDescriptor} config  Sheet registration configuration.
     */
    static #registerSheet(config?: SheetRegistrationDescriptor): void;
    /**
     * Unregister a sheet class, removing it from the list of available Applications to use for a Document type.
     * @param {typeof ClientDocument} documentClass                 The Document class to register a new sheet option for.
     * @param {string} scope                                        A unique namespace scope for this sheet.
     * @param {typeof Application|typeof ApplicationV2} sheetClass  An Application class used to render the sheet.
     * @param {object} [options]
     * @param {string[]} [options.types]                            The sub-types this sheet should be removed for,
     *                                                              otherwise all sub-types are unregistered.
     */
    static unregisterSheet(documentClass: typeof ClientDocument, scope: string, sheetClass: typeof Application | typeof ApplicationV2, { types }?: {
        types?: string[] | undefined;
    }): void;
    /**
     * Perform the sheet de-registration.
     * @param {Partial<SheetRegistrationDescriptor>} config  Sheet de-registration configuration.
     */
    static #unregisterSheet(config?: Partial<SheetRegistrationDescriptor>): void;
    /**
     * Update the current default sheets using a new core World setting.
     * @param {Record<string, string>} setting  The stored default sheet settings.
     */
    static updateDefaultSheets(setting?: Record<string, string>): void;
    constructor(options?: Partial<ApplicationConfiguration & DocumentSheetConfiguration> | undefined);
    /** @override */
    override _preparePartContext(partId: any, context: any, options: any): Promise<any>;
    /**
     * Prepare render context for the footer part.
     * @param {ApplicationRenderContext} context
     * @param {ApplicationRenderOptions} options
     * @returns {Promise<void>}
     * @protected
     */
    protected _prepareFooterContext(context: ApplicationRenderContext, options: ApplicationRenderOptions): Promise<void>;
    /**
     * Prepare render context for the form part.
     * @param {ApplicationRenderContext} context
     * @param {ApplicationRenderOptions} options
     * @returns {Promise<void>}
     * @protected
     */
    protected _prepareFormContext(context: ApplicationRenderContext, options: ApplicationRenderOptions): Promise<void>;
    /** @inheritDoc */
    _onChangeForm(formConfig: any, event: any): void;
    /** @override */
    override _onClose(_options: any): void;
    /** @override */
    override _onFirstRender(_context: any, _options: any): void;
    #private;
}
export type DefaultSheetDescriptor = {
    /**
     * The identifier of the default sheet.
     */
    sheet: string;
    /**
     * The default theme.
     */
    theme: string;
};
export type SheetRegistrationDescriptor = {
    /**
     * The Document class to register a new sheet option for.
     */
    documentClass: typeof ClientDocument;
    /**
     * The identifier of the sheet being registered.
     */
    id: string;
    /**
     * An Application class used to render the sheet.
     */
    sheetClass: typeof Application | typeof ApplicationV2;
    /**
     * A human-readable label for the sheet name, or a function that
     *           returns one. Will be localized.
     */
    label?: string | (() => string) | undefined;
    /**
     * An array of Document sub-types to register the sheet for.
     */
    types?: string[] | undefined;
    /**
     * An object of theme keys to labels that the sheet supports. If this
     *  option is not supplied, the sheet is assumed to support both light
     *  and dark themes. If null is supplied, it indicates that the sheet
     *  does not support theming.
     */
    themes?: Record<string, string> | null | undefined;
    /**
     * Whether to make this sheet the default for the provided sub-types.
     */
    makeDefault?: boolean | undefined;
    /**
     * Whether this sheet is available to be selected as a default sheet
     *           for all Documents of that type.
     */
    canBeDefault?: boolean | undefined;
    /**
     * Whether this sheet appears in the sheet configuration UI for users.
     */
    canConfigure?: boolean | undefined;
};
export type SheetRegistrationOptions = Omit<SheetRegistrationDescriptor, "documentClass" | "id" | "sheetClass">;
export type DocumentSheetConfigRenderContext = {
    /**
     * Context for the sheet field.
     */
    sheet: DocumentSheetConfigFieldDescriptor;
    /**
     * Context for the theme field.
     */
    theme: DocumentSheetConfigFieldDescriptor;
};
export type DocumentSheetConfigFieldDescriptor = {
    /**
     * The field instance.
     */
    field: DataField;
    /**
     * The field's form name.
     */
    name: string;
    /**
     * The field's value.
     */
    value: string;
    /**
     * Whether the field should be disabled in the form.
     */
    disabled?: boolean | undefined;
};
import type ApplicationV2 from "../api/application.mjs";
import type { ApplicationRenderContext } from "../_types.mjs";
import type { ApplicationRenderOptions } from "../_types.mjs";
import FormDataExtended from "../ux/form-data-extended.mjs";
import type Application from "@client/appv1/api/application-v1.mjs";
import type { ApplicationConfiguration } from "../_types.mjs";
import type { DocumentSheetConfiguration } from "../api/document-sheet.mjs";
export {};
