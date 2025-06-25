import { ApplicationConfiguration, ApplicationFormConfiguration } from "foundry/applications/_types.js"
import ApplicationV2 from "foundry/applications/api/ApplicationV2.js"
import HandlebarsApplicationMixin, {
  HandlebarsTemplatePart,
} from "foundry/applications/api/HandlebarsApplicationMixin.js"
import World from "foundry/packages/World.js"

/**
 * The World Management setup application
 */
export default class WorldConfig extends HandlebarsApplicationMixin(ApplicationV2) {
  /**
   * @param options Application configuration options
   */
  constructor(options: DeepPartial<ApplicationConfiguration> & { world: World })

  static override DEFAULT_OPTIONS: DeepPartial<ApplicationConfiguration>

  static PARTS: Record<string, HandlebarsTemplatePart>

  /**
   * The World being configured.
   */
  world: World

  override get title(): string

  /**
   * Is this World to be created?
   */
  get isCreate(): boolean

  protected override _onChangeForm(formConfig: ApplicationFormConfiguration, event: Event): void

  //protected override _prepareContext(options: ApplicationRenderContext): Promise<ApplicationRenderContext>
}
