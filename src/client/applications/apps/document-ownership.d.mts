/**
 * @import {ApplicationFormSubmission} from "../_types.mjs";
 */
/**
 * A generic application for configuring permissions for various Document types.
 * @extends DocumentSheetV2
 * @mixes HandlebarsApplication
 */
export default class DocumentOwnershipConfig extends DocumentSheetV2 {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        classes: string[];
        template: string;
        viewPermission: 3;
        window: {
            contentClasses: string[];
            icon: string;
        };
        position: {
            width: number;
        };
        form: {
            handler: typeof DocumentOwnershipConfig.#onSubmitForm;
            closeOnSubmit: boolean;
        };
        sheetConfig: boolean;
    };
    /** @override */
    static override PARTS: {
        ownership: {
            template: string;
            root: boolean;
            scrollable: string[];
        };
        footer: {
            template: string;
        };
    };
    /**
     * Are Gamemaster users currently hidden?
     * @type {boolean}
     */
    static #gmHidden: boolean;
    static #onSubmitForm(event: SubmitEvent | Event, form: HTMLFormElement, formData: foundry.applications.ux.FormDataExtended): Promise<any>;
    /** @override */
    override _prepareContext(options: any): Promise<foundry.applications.types.ApplicationRenderContext & {
        document: ClientDocument;
        source: any;
        fields: any;
        editable: boolean;
        user: foundry.documents.User | null;
        rootId: string;
    } & {
        currentDefault: any;
        instructions: string;
        defaultLevels: {
            level: -20 | -10;
            label: string;
        }[];
        playerLevels: {
            level: -20 | -10;
            label: string;
        }[];
        isFolder: boolean;
        showGM: boolean;
        users: any[];
        buttons: {
            type: string;
            icon: string;
            label: string;
        }[];
    }>;
    #private;
}
import DocumentSheetV2 from "../api/document-sheet.mjs";
