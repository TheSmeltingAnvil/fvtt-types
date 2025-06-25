import * as av from "foundry/av/_module.js"
import ApplicationV2 from "../../api/ApplicationV2.js"
import HandlebarsApplicationMixin, {
  HandlebarsRenderOptions,
  HandlebarsTemplatePart,
} from "../../api/HandlebarsApplicationMixin.js"
import { ApplicationRenderContext, ApplicationTabsConfiguration } from "foundry/applications/_types.js"

/**
 * Audio/Video Conferencing Configuration Sheet
 */
export default class AVConfig extends HandlebarsApplicationMixin(ApplicationV2) {
  // @ts-expect-error Should fix.
  constructor(options: DeepPartial<AVConfigConfiguration>)

  webrtc: av.AVMaster

  // @ts-expect-error Should fix.
  static override DEFAULT_OPTIONS: DeepPartial<AVConfigConfiguration>

  static PARTS: Record<string, HandlebarsTemplatePart>

  static override TABS: Record<string, ApplicationTabsConfiguration>

  protected _configureRenderParts(options: HandlebarsRenderOptions): Record<string, HandlebarsTemplatePart>

  protected override _prepareContext(options: HandlebarsRenderOptions): Promise<ApplicationRenderContext>

  protected override _preparePartContext(
    partId: string,
    context: ApplicationRenderContext,
    options: HandlebarsRenderOptions,
  ): Promise<ApplicationRenderContext>

  protected override _onRender(context: ApplicationRenderContext, options: HandlebarsRenderOptions): Promise<void>
}
