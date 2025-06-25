import { ApplicationConfiguration } from "foundry/applications/_types.js"
import { DocumentDirectory } from "foundry/applications/sidebar/_module.js"

/**
 * The World Macro directory listing.
 */
export default class MacroDirectory extends DocumentDirectory<Macro> {
  static override DEFAULT_OPTIONS: Partial<ApplicationConfiguration>

  static override tabName: "macros"
}
