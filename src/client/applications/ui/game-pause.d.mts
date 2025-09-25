/**
 * The Game Paused banner.
 * @extends {ApplicationV2}
 */
export default class GamePause extends ApplicationV2<foundry.applications.types.ApplicationConfiguration, foundry.applications.types.ApplicationRenderOptions> {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        id: string;
        tag: string;
        window: {
            frame: boolean;
            positioned: boolean;
        };
    };
    constructor(options?: Partial<foundry.applications.types.ApplicationConfiguration> | undefined);
    /** @override */
    override _prepareContext(_options: any): Promise<{
        cssClass: string;
        icon: string;
        text: string;
        spin: boolean;
    }>;
    /** @override */
    override _renderHTML(context: any, options: any): Promise<HTMLElement[]>;
    /** @override */
    override _replaceHTML(result: any, content: any, _options: any): void;
}
import ApplicationV2 from "../api/application.mjs";
