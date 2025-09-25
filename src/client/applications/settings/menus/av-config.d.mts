/**
 * @import {ApplicationClickAction, ApplicationConfiguration, ApplicationFormSubmission} from "../../_types.mjs";
 * @import {AVMaster} from "@client/av/master.mjs";
 */
/**
 * @typedef AVConfigConfiguration
 * @property {AVMaster} [webrtc] The AVMaster instance being configured
 */
/**
 * Audio/Video Conferencing Configuration Sheet
 * @extends ApplicationV2
 * @mixes HandlebarsApplication
 */
export default class AVConfig extends ApplicationV2<ApplicationConfiguration, foundry.applications.types.ApplicationRenderOptions> {
    /** @override */
    static override DEFAULT_OPTIONS: {
        tag: string;
        id: string;
        window: {
            title: string;
            contentClasses: string[];
            icon: string;
        };
        position: {
            width: number;
        };
        form: {
            closeOnSubmit: boolean;
            handler: typeof AVConfig.#onSubmit;
        };
    };
    /** @override */
    static override PARTS: {
        tabs: {
            template: string;
        };
        general: {
            template: string;
        };
        devices: {
            template: string;
        };
        server: {
            template: string;
        };
        footer: {
            template: string;
        };
    };
    /** @override */
    static override TABS: {
        main: {
            tabs: {
                id: string;
                icon: string;
            }[];
            initial: string;
            labelPrefix: string;
        };
    };
    static #onSubmit(event: SubmitEvent | Event, form: HTMLFormElement, formData: foundry.applications.ux.FormDataExtended): Promise<any>;
    /**
     * @param {ApplicationConfiguration & AVConfigConfiguration} options
     */
    constructor(options: ApplicationConfiguration & AVConfigConfiguration);
    /**
     * The AVMaster instance being configured
     * @type {AVMaster}
     */
    webrtc: AVMaster;
    /** @inheritDoc */
    _configureRenderParts(options: any): any;
    /** @inheritDoc */
    _prepareContext(options: any): Promise<foundry.applications.types.ApplicationRenderContext & {
        rootId: string;
        settings: any;
        fields: {
            world: foundry.abstract.types.DataSchema;
            client: foundry.abstract.types.DataSchema;
        };
        isSSL: boolean;
    }>;
    /** @inheritDoc */
    _preparePartContext(partId: any, context: any, options: any): Promise<any>;
    /** @override */
    override _onRender(context: any, options: any): Promise<void>;
    #private;
}
export type AVConfigConfiguration = {
    /**
     * The AVMaster instance being configured
     */
    webrtc?: AVMaster;
};
import type { ApplicationConfiguration } from "../../_types.mjs";
import { ApplicationV2 } from "../../api/_module.mjs";
