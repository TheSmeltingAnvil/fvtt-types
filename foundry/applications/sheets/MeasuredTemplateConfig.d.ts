import * as api from "foundry/applications/api/_module.js"
import { ApplicationConfiguration, ApplicationRenderOptions } from "../_types.js"
/**
 * The Application responsible for configuring a single MeasuredTemplate document within a parent Scene.
 */
export default abstract class MeasuredTemplateConfig<T> extends api.ApplicationV2<
  ApplicationConfiguration,
  ApplicationRenderOptions
> {
  declare _: T
}
