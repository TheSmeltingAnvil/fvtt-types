/**
 * An application for configuring compendium art priorities.
 * @extends ApplicationV2
 * @mixes HandlebarsApplication
 */
export default class CompendiumArtConfig extends ApplicationV2<foundry.applications.types.ApplicationConfiguration, foundry.applications.types.ApplicationRenderOptions> {
    /** @override */
    static override DEFAULT_OPTIONS: {
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
            handler: typeof CompendiumArtConfig.#onSubmit;
        };
        actions: {
            priority: typeof CompendiumArtConfig.#onAdjustPriority;
        };
    };
    /** @override */
    static override PARTS: {
        priorities: {
            id: string;
            template: string;
        };
        footer: {
            template: string;
        };
    };
    /**
     * Adjust the priority of a package.
     * @this {ApplicationV2}
     * @param {MouseEvent} _event         The click event.
     * @param {HTMLButtonElement} target  The button that was clicked.
     */
    static #onAdjustPriority(this: ApplicationV2<foundry.applications.types.ApplicationConfiguration, foundry.applications.types.ApplicationRenderOptions>, _event: MouseEvent, target: HTMLButtonElement): Promise<void>;
    /**
     * Save the compendium art configuration.
     * @this {ApplicationV2}
     * @param {SubmitEvent} _event         The form submission event.
     * @param {HTMLFormElement} _form      The form element that was submitted.
     * @param {FormDataExtended} formData  Processed data for the submitted form.
     */
    static #onSubmit(this: ApplicationV2<foundry.applications.types.ApplicationConfiguration, foundry.applications.types.ApplicationRenderOptions>, _event: SubmitEvent, _form: HTMLFormElement, formData: FormDataExtended): Promise<void>;
    constructor(options?: Partial<foundry.applications.types.ApplicationConfiguration> | undefined);
    /** @override */
    override _prepareContext(_options?: object): Promise<{
        config: foundry.helpers.types.CompendiumArtDescriptor[];
        buttons: {
            type: string;
            icon: string;
            label: string;
        }[];
    }>;
}
import ApplicationV2 from "../api/application.mjs";
