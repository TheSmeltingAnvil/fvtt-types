/**
 * @import Scene from "@client/documents/scene.mjs";
 */
/**
 * The World Scene directory listing.
 * @extends {DocumentDirectory<Scene>}
 */
export default class SceneDirectory extends DocumentDirectory<Scene> {
    /** @override */
    static override DEFAULT_OPTIONS: {
        renderUpdateKeys: string[];
        collection: string;
    };
    constructor(options: any);
    /** @inheritDoc */
    _getEntryContextOptions(): ({
        name: string;
        icon: string;
        callback: (li: any) => any;
        condition?: undefined;
    } | {
        name: string;
        icon: string;
        condition: (li: any) => any;
        callback: (li: any) => void;
    })[];
}
import type Scene from "@client/documents/scene.mjs";
import DocumentDirectory from "../document-directory.mjs";
