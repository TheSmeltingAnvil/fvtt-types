/**
 * Parse an HTML string, returning a processed HTMLElement or HTMLCollection.
 * @param {string} htmlString
 * @deprecated since v13
 * @see {@link foundry.utils.parseHTML}
 */
export function parseHTML(htmlString: string): HTMLElement | HTMLCollection;
export * as api from "./api/_module.mjs";
export * as apps from "./apps/_module.mjs";
export * as dice from "./dice/_module.mjs";
export * as elements from "./elements/_module.mjs";
export * as fields from "./forms/fields.mjs";
export * as handlebars from "./handlebars.mjs";
export * as hud from "./hud/_module.mjs";
export * as settings from "./settings/_module.mjs";
export * as sheets from "./sheets/_module.mjs";
export * as sidebar from "./sidebar/_module.mjs";
export * as types from "./_types.mjs";
export * as ux from "./ux/_module.mjs";
export * as ui from "./ui/_module.mjs";
/**
 * A registry of currently rendered ApplicationV2 instances.
 * @type {Map<string, ApplicationV2>}
 */
export const instances: Map<string, ApplicationV2>;
import type ApplicationV2 from "./api/application.mjs";
