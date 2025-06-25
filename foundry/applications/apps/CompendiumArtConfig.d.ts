import { ApplicationConfiguration, FormFooterButton } from "../_types.js"
import ApplicationV2 from "../api/ApplicationV2.js"
import HandlebarsApplicationMixin, {
  HandlebarsRenderOptions,
  HandlebarsTemplatePart,
} from "../api/HandlebarsApplicationMixin.js"
import * as types from "foundry/applications/_types.js"

export interface CompendiumArtContext extends types.ApplicationRenderContext {
  // @ts-expect-error Should fix.
  config: foundry.helpers.CompendiumArtDescriptor[]
  buttons: FormFooterButton[]
}

/** An application for configuring compendium art priorities. */
export default class CompendiumArtConfig extends HandlebarsApplicationMixin(ApplicationV2) {
  static override DEFAULT_OPTIONS: DeepPartial<ApplicationConfiguration>

  static PARTS: Record<string, HandlebarsTemplatePart>

  override _prepareContext(options: HandlebarsRenderOptions): Promise<CompendiumArtContext>
}
