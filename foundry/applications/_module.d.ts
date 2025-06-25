import { ApplicationConfiguration, ApplicationRenderOptions } from "./_types.js"
import ApplicationV2 from "./api/ApplicationV2.js"

/** A registry of currently rendered ApplicationV2 instances. */
export const instances: Map<string, ApplicationV2<ApplicationConfiguration, ApplicationRenderOptions>>

/**
 * Parse an HTML string, returning a processed HTMLElement or HTMLCollection.
 * @param htmlString
 * @deprecated since v13
 * @see {@link foundry.utils.parseHTML}
 */
export function parseHTML(htmlString: string): HTMLElement | HTMLCollection

export * as api from "./api/_module.js"
export * as apps from "./apps/_module.js"
export * as dice from "./dice/_module.js"
export * as elements from "./elements/_module.js"
export * as fields from "./fields/_module.js"
export * as handlebars from "./_handlebars.js"
export * as hud from "./hub/_module.js"
export * as settings from "./settings/_module.js"
export * as sheets from "./sheets/_module.js"
export * as sidebar from "./sidebar/_module.js"
export * as types from "./_types.js"
export * as ui from "./ui/_module.js"
export * as ux from "./ux/_module.js"
