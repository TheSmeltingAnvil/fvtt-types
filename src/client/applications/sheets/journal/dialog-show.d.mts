/**
 * A dialog for configuring options when showing content to players.
 * @extends DialogV2
 * @mixes HandlebarsApplication
 */
export default class ShowToPlayersDialog extends DialogV2 {
    /** @override */
    static override DEFAULT_OPTIONS: {
        classes: string[];
        modal: boolean;
        buttons: {
            label: string;
            type: string;
            icon: string;
        }[];
        window: {
            contentTag: string;
            contentClasses: string[];
        };
        position: {
            width: number;
        };
        form: {
            handler: typeof ShowToPlayersDialog.#onFormSubmit;
            closeOnSubmit: boolean;
        };
    };
    /** @override */
    static override PARTS: {
        body: {
            classes: string[];
            template: string;
        };
        footer: {
            template: string;
        };
    };
    /**
     * Handle submitting the dialog.
     * @this {ShowToPlayersDialog}
     * @param {SubmitEvent} event          The submission event.
     * @param {HTMLFormElement} form       The submitted form element.
     * @param {FormDataExtended} formData  The submitted form data.
     * @returns {Promise<void>}
     */
    static #onFormSubmit(this: ShowToPlayersDialog, event: SubmitEvent, form: HTMLFormElement, formData: FormDataExtended): Promise<void>;
    /**
     * The Document that is being shown.
     * @type {JournalEntry|JournalEntryPage}
     */
    get document(): JournalEntry | JournalEntryPage;
    /**
     * Whether the Document that is being shown is an image-type JournalEntryPage.
     * @type {boolean}
     */
    get isImage(): boolean;
    /** @inheritDoc */
    _prepareContext(options: any): Promise<foundry.applications.types.ApplicationRenderContext>;
    /** @override */
    override _onChangeForm(formConfig: any, event: any): void;
}
import DialogV2 from "../../api/dialog.mjs";
import JournalEntryPage from "@client/documents/journal-entry-page.mjs";
