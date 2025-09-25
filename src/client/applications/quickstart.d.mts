/**
 * Application documentation here.
 *
 * @extends ApplicationV2
 * @mixes HandlebarsApplication
 */
export default class AppV2QuickStartTemplate extends ApplicationV2<
  foundry.applications.types.ApplicationConfiguration,
  foundry.applications.types.ApplicationRenderOptions
> {
  /** @inheritDoc */
  static DEFAULT_OPTIONS: {
    id: string
    classes: never[]
    tag: string
    window: {
      frame: boolean
      positioned: boolean
    }
    actions: object
  }
  /** @override */
  static override PARTS: {
    part: {
      template: string
    }
  }
  constructor(options?: Partial<foundry.applications.types.ApplicationConfiguration> | undefined)
  /** @override */
  override _prepareContext(_options: any): Promise<void>
}
import ApplicationV2 from "./api/application.mjs"
