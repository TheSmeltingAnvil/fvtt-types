/**
 * @import Macro from "@client/documents/macro.mjs";
 */
/**
 * The World Macro directory listing.
 * @extends {DocumentDirectory<Macro>}
 */
export default class MacroDirectory extends DocumentDirectory<Macro> {
    /** @override */
    static override DEFAULT_OPTIONS: {
        collection: string;
    };
    constructor(options: any);
}
import type Macro from "@client/documents/macro.mjs";
import DocumentDirectory from "../document-directory.mjs";
