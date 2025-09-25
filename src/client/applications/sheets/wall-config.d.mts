/**
 * The Application responsible for configuring a single Wall document within a parent Scene.
 * @extends DocumentSheetV2
 * @mixes HandlebarsApplication
 */
export default class WallConfig extends DocumentSheetV2 {
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
        form: {
            closeOnSubmit: boolean;
        };
        actions: {
            previewSound: typeof WallConfig.#onPreviewSound;
        };
    };
    /** @override */
    static override PARTS: {
        body: {
            template: string;
        };
        footer: {
            template: string;
        };
    };
    /** Wall sense types affected by proximity threshold attenuation */
    static #PROXIMITY_SENSE_TYPES: (30 | 40)[];
    /**
     * Handle previewing a sound file for a Wall setting
     * @this {WallConfig}
     * @returns {Promise<void>}
     */
    static #onPreviewSound(this: WallConfig): Promise<void>;
    /**
     * The set of Wall documents that should all be edited when changes to this config form are submitted.
     * @type {ReadonlySet<WallDocument>}
     */
    get editTargets(): ReadonlySet<WallDocument>;
    /** @inheritDoc */
    _prepareContext(options: any): Promise<foundry.applications.types.ApplicationRenderContext & {
        document: ClientDocument;
        source: any;
        fields: any;
        editable: boolean;
        user: foundry.documents.User | null;
        rootId: string;
    } & {
        coordinates: string;
        thresholdFields: {
            name: string;
            label: any;
            choices: any;
            disabled: boolean;
        }[];
        animation: any;
        animationDirections: {
            value: number;
            label: string;
        }[];
        animationTypes: Record<string, CONFIG.WallDoorAnimationConfig>;
        animationFieldsetClass: string;
        editingMany: boolean;
        rootId: string;
        gridUnits: any;
        doorSounds: Record<string, CONFIG.WallDoorSound>;
        buttons: {
            type: string;
            icon: string;
            label: string;
        }[];
    }>;
    /** @inheritDoc */
    _prepareSubmitData(event: any, form: any, formData: any, updateData: any): object;
    /** @override */
    override _processSubmitData(_event: any, _form: any, submitData: any, options: any): Promise<void>;
    #private;
}
import { DocumentSheetV2 } from "../api/_module.mjs";
