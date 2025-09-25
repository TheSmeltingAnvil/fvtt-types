/**
 * @import {ApplicationConfiguration} from "../_types.mjs";
 * @import {HandlebarsRenderOptions} from "../api/handlebars-application.mjs";
 */
/**
 * @typedef _DependencyResolutionAppConfiguration
 * @param {ModuleManagement} manager  The module management application.
 * @param {Module} root               The module that is the root of the dependency resolution.
 * @param {boolean} enabling          Whether the root dependency is being enabled or disabled.
 */
/**
 * @typedef {ApplicationConfiguration & _DependencyResolutionAppConfiguration} DependencyResolutionAppConfiguration
 */
/**
 * @typedef DependencyResolutionDescriptor
 * @property {Module} module       The module.
 * @property {boolean} checked     Has the user toggled the checked state of this dependency in this application.
 * @property {string} [reason]     Some reason associated with the dependency.
 * @property {boolean} [required]  Whether this module is a hard requirement and cannot be unchecked.
 */
/**
 * A class responsible for prompting the user about dependency resolution for their modules.
 * @extends {ApplicationV2<DependencyResolutionAppConfiguration, HandlebarsRenderOptions>}
 * @mixes HandlebarsApplication
 */
export default class DependencyResolution extends ApplicationV2<any, HandlebarsRenderOptions> {
    /** @override */
    static override DEFAULT_OPTIONS: {
        tag: string;
        classes: string[];
        window: {
            contentTag: string;
            contentClasses: string[];
            icon: string;
            title: string;
        };
        position: {
            width: number;
        };
        actions: {
            cancel: typeof DependencyResolution.#onCancel;
        };
        form: {
            closeOnSubmit: boolean;
            handler: typeof DependencyResolution.#onSubmitForm;
        };
        enabling: boolean;
    };
    /** @override */
    static override PARTS: {
        resolution: {
            classes: string[];
            template: string;
        };
        footer: {
            template: string;
        };
    };
    /**
     * Handle canceling dependency resolution.
     * @this {DependencyResolution}
     */
    static #onCancel(this: DependencyResolution): Promise<DependencyResolution>;
    /**
     * Commit the dependency resolution result.
     * @this {DependencyResolution}
     * @param {SubmitEvent} event          The submission event.
     * @param {HTMLFormElement} form       The form that was submitted.
     */
    static #onSubmitForm(this: DependencyResolution, event: SubmitEvent, form: HTMLFormElement): void;
    /**
     * @param {DeepPartial<DependencyResolutionAppConfiguration>} [options={}]  Options to configure DependencyResolution
     *                                                                          behavior.
     */
    constructor(options?: DeepPartial<DependencyResolutionAppConfiguration>);
    /**
     * Whether there are additional dependencies that need resolving by the user.
     * @type {boolean}
     */
    get needsResolving(): boolean;
    /**
     * The module that is the root of the dependency resolution.
     * @type {Module}
     */
    get root(): Module;
    /** @override */
    override _onFirstRender(_context: any, _options: any): Promise<void>;
    /** @override */
    override _prepareContext(options: any): Promise<foundry.applications.types.ApplicationRenderContext & {
        required: any[];
        optional: any[];
        subtypes: string | undefined;
        checkbox: BooleanField;
        enabling: any;
        buttons: ({
            type: string;
            icon: string;
            label: string;
            action?: undefined;
        } | {
            type: string;
            icon: string;
            label: string;
            action: string;
        })[];
    }>;
    /** @inheritDoc */
    _onChangeForm(formConfig: any, event: any): void;
    /**
     * Return any modules that the root module is required by.
     * @returns {Set<Module>}
     * @internal
     */
    _getRootRequiredBy(): Set<Module>;
    #private;
}
export type _DependencyResolutionAppConfiguration = any;
export type DependencyResolutionAppConfiguration = ApplicationConfiguration & _DependencyResolutionAppConfiguration;
export type DependencyResolutionDescriptor = {
    /**
     * The module.
     */
    module: Module;
    /**
     * Has the user toggled the checked state of this dependency in this application.
     */
    checked: boolean;
    /**
     * Some reason associated with the dependency.
     */
    reason?: string | undefined;
    /**
     * Whether this module is a hard requirement and cannot be unchecked.
     */
    required?: boolean | undefined;
};
import type { HandlebarsRenderOptions } from "../api/handlebars-application.mjs";
import ApplicationV2 from "../api/application.mjs";
import { BooleanField } from "@common/data/fields.mjs";
import type { ApplicationConfiguration } from "../_types.mjs";
