import { ApplicationConfiguration, ApplicationPosition, ApplicationRenderContext } from "foundry/applications/_types.js"
import ApplicationV2 from "foundry/applications/api/ApplicationV2.js"
import HandlebarsApplicationMixin, {
  HandlebarsRenderOptions,
  HandlebarsTemplatePart,
} from "foundry/applications/api/HandlebarsApplicationMixin.js"

interface CameraPopoutConfiguration extends ApplicationConfiguration {
  user: User
}

/**
 * An application for a single popped-out camera.
 * @extends {ApplicationV2<CameraPopoutConfiguration, HandlebarsRenderOptions>}
 * @mixes HandlebarsApplication
 */
export default class CameraPopout extends HandlebarsApplicationMixin(ApplicationV2) {
  constructor(options?: DeepPartial<ApplicationConfiguration> & { user: User })

  static override DEFAULT_OPTIONS: DeepPartial<ApplicationConfiguration>

  static PARTS: Record<string, HandlebarsTemplatePart>

  /**
   * The user this camera view is for.
   */
  get user(): User

  /** @inheritDoc */
  _initializeApplicationOptions(options: DeepPartial<ApplicationConfiguration>): ApplicationConfiguration

  protected override _onFirstRender(context: ApplicationRenderContext, options: HandlebarsRenderOptions): Promise<void>

  protected override _prepareContext(options: HandlebarsRenderOptions): Promise<ApplicationRenderContext>

  override setPosition(position?: Partial<ApplicationPosition>): ApplicationPosition

  protected override _onClickAction(event: PointerEvent, target: HTMLElement): void | Promise<void>
}
