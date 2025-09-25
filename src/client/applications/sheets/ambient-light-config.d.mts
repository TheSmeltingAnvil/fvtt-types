/**
 * The AmbientLight configuration application.
 * @extends DocumentSheetV2
 * @mixes HandlebarsApplication
 */
// @ts-expect-error -- IGNORE --
export default class AmbientLightConfig extends DocumentSheetV2 {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        classes: string[];
        window: {
            contentClasses: string[];
        };
        position: {
            width: number;
        };
        form: {
            closeOnSubmit: boolean;
        };
        actions: {
            reset: typeof AmbientLightConfig.#onReset;
        };
    };
    /** @override */
    // @ts-expect-error -- IGNORE --
    static override PARTS: {
        tabs: {
            template: string;
        };
        basic: {
            template: string;
        };
        animation: {
            template: string;
        };
        advanced: {
            template: string;
        };
        footer: {
            template: string;
        };
    };
    /** @override */
    static override TABS: {
        sheet: {
            tabs: {
                id: string;
                icon: string;
            }[];
            initial: string;
            labelPrefix: string;
        };
    };
    /**
     * Process reset button click
     * @param {PointerEvent} event                  The originating button click
     * @this {AmbientLightConfig}
     * @returns {Promise<void>}
     */
    static #onReset(this: AmbientLightConfig, event: PointerEvent): Promise<void>;
    /**
     * Maintain a copy of the original to show a real-time preview of changes.
     * @type {AmbientLightDocument}
     */
    preview: AmbientLightDocument;
    /** @inheritDoc */
    _preRender(context: any, options: any): Promise<void>;
    /** @inheritDoc */
    _prepareContext(options: any): Promise<foundry.applications.types.ApplicationRenderContext & {
        document: ClientDocument;
        source: any;
        fields: any;
        editable: boolean;
        user: foundry.documents.User | null;
        rootId: string;
    } & {
        document: AmbientLightDocument;
        light: AmbientLightDocument;
        source: foundry.documents.types.AmbientLightData;
        colorationTechniques: Record<string, import("../../canvas/rendering/shaders/lighting/base-lighting.mjs").ShaderTechnique>;
        gridUnits: any;
        isDarkness: any;
        lightAnimations: CONFIG.LightSourceAnimationConfig | CONFIG.DarknessSourceAnimationConfig;
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
    /** @inheritDoc */
    changeTab(...args: any[]): void;
    /**
     * Preview changes to the AmbientLight document as if they were true document updates.
     * @param {object} [change]  A change to preview.
     * @protected
     */
    protected _previewChanges(change?: object): void;
    /**
     * Restore the true data for the AmbientLight document when the form is submitted or closed.
     * @protected
     */
    protected _resetPreview(): void;
    #private;
}
import DocumentSheetV2 from "../api/document-sheet.mjs";
import AmbientLightDocument from "@client/documents/ambient-light.mjs";
