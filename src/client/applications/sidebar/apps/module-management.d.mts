/**
 * @import {ApplicationFormSubmission} from "../../_types.mjs";
 * @import {SearchFilterCallback} from "../../ux/search-filter.mjs";
 */
/**
 * The Module Management Application.
 * This application provides a view of which modules are available to be used and allows for configuration of the
 * set of modules which are active within the World.
 *
 * @extends ApplicationV2
 * @mixes HandlebarsApplication
 */
export default class ModuleManagement extends ApplicationV2<foundry.applications.types.ApplicationConfiguration, foundry.applications.types.ApplicationRenderOptions> {
    /**
     * The named game setting which persists module configuration.
     * @type {string}
     * @readonly
     */
    static readonly SETTING: string;
    /** @override */
    static override DEFAULT_OPTIONS: {
        id: string;
        tag: string;
        window: {
            title: string;
            icon: string;
            contentClasses: string[];
        };
        position: {
            width: number;
        };
        form: {
            handler: typeof ModuleManagement.#onSubmitForm;
            submitOnClose: boolean;
            closeOnSubmit: boolean;
        };
        actions: {
            changeFilter: typeof ModuleManagement.#onChangeFilter;
            deactivateAll: typeof ModuleManagement.#onDeactivateAll;
            toggleExpanded: typeof ModuleManagement.#onToggleExpanded;
        };
    };
    /** @override */
    static override PARTS: {
        body: {
            template: string;
            templates: string[];
            root: boolean;
        };
        footer: {
            template: string;
        };
    };
    /**
     * Handle a button-click to deactivate all modules.
     * @this {ModuleManagement}
     * @param {PointerEvent} event
     */
    static #onDeactivateAll(this: ModuleManagement, event: PointerEvent): void;
    /**
     * Handle switching the module list filter.
     * @this {ModuleManagement}
     * @param {PointerEvent} _event
     * @param {HTMLButtonElement} target
     */
    static #onChangeFilter(this: ModuleManagement, _event: PointerEvent, target: HTMLButtonElement): void;
    /**
     * Handle a button-click to deactivate all modules.
     * @this {ModuleManagement}
     */
    static #onToggleExpanded(this: ModuleManagement): void;
    static #onSubmitForm(event: SubmitEvent | Event, form: HTMLFormElement, formData: foundry.applications.ux.FormDataExtended): Promise<any>;
    /**
     * @deprecated since v13
     * @ignore
     */
    static get CONFIG_SETTING(): string;
    constructor(options?: Partial<foundry.applications.types.ApplicationConfiguration> | undefined);
    /**
     * Can the current User manage modules?
     * @type {boolean}
     */
    get isEditable(): boolean;
    /**
     * Format a document count collection for display.
     * @param {ModuleSubTypeCounts} counts  An object of sub-type counts.
     * @param {boolean} verbose             Detailed breakdown of by sub-type?
     * @param {Module} [module]             Are sub-types relative to a module?
     * @returns {string}                    The formatted document count
     * @internal
     */
    _formatDocumentSummary(counts: ModuleSubTypeCounts, verbose: boolean, module?: Module): string;
    /** @inheritDoc */
    _prepareContext(options: any): Promise<foundry.applications.types.ApplicationRenderContext>;
    /** @inheritDoc */
    _onRender(context: any, options: any): Promise<void>;
    /** @inheritDoc */
    _tearDown(options: any): void;
    /**
     * Check if a module is enabled currently in the application.
     * @param {string} id  The module ID.
     * @returns {boolean}
     * @internal
     */
    _isModuleChecked(id: string): boolean;
    /**
     * Update the checked state of modules based on user dependency resolution.
     * @param {Record<string, boolean>} formData  The dependency resolution result.
     * @param {boolean} enabling                  Whether the user was performing an enabling or disabling workflow.
     * @internal
     */
    _onSelectDependencies(formData: Record<string, boolean>, enabling: boolean): void;
    /** @inheritDoc */
    _attachPartListeners(partId: any, element: any, options: any): void;
    #private;
}
import ApplicationV2 from "../../api/application.mjs";
