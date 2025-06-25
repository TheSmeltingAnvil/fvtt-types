import { ApplicationConfiguration, FormFooterButton } from "../_types.js"
import ApplicationV2 from "../api/ApplicationV2.js"
import HandlebarsApplicationMixin, {
  HandlebarsRenderOptions,
  HandlebarsTemplatePart,
} from "../api/HandlebarsApplicationMixin.js"
import * as types from "foundry/applications/_types.js"

export interface PermissionConfigContext extends types.ApplicationRenderContext {
  roles: Record<keyof typeof CONST.USER_ROLES, string>
  permissions: typeof CONST.USER_PERMISSIONS
  buttons: FormFooterButton[]
}

/** An application for configuring the permissions which are available to each User role. */
export default class PermissionConfig extends HandlebarsApplicationMixin(ApplicationV2) {
  static override DEFAULT_OPTIONS: DeepPartial<ApplicationConfiguration>

  static PARTS: Record<string, HandlebarsTemplatePart>

  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  override _prepareContext(options: HandlebarsRenderOptions): Promise<PermissionConfigContext>
}
