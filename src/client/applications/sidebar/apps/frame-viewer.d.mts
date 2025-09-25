/** @import {ApplicationConfiguration} from "../../_types.mjs"; */
/**
 * @typedef FrameViewerConfiguration
 * @property {string} url The initial URL to navigate to
 */
/**
 * A simple window application which shows the built documentation pages within an iframe
 * @extends ApplicationV2<ApplicationConfiguration & FrameViewerConfiguration>
 * @deprecated since V13
 */
export default class FrameViewer extends ApplicationV2<ApplicationConfiguration & FrameViewerConfiguration, foundry.applications.types.ApplicationRenderOptions> {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        id: string;
        classes: string[];
        window: {
            icon: string;
        };
        url: undefined;
    };
    constructor(...args: any[]);
    /** @inheritDoc */
    _configureRenderOptions(options: any): void;
    /**
     * Create the iframe and set its `src`.
     * @returns {HTMLIFrameElement}
     * @override
     */
    override _renderHTML(_context: any, options: any): HTMLIFrameElement;
    /** @override */
    override _replaceHTML(iframe: any, content: any): void;
}
export type FrameViewerConfiguration = {
    /**
     * The initial URL to navigate to
     */
    url: string;
};
import type { ApplicationConfiguration } from "../../_types.mjs";
import { ApplicationV2 } from "../../api/_module.mjs";
