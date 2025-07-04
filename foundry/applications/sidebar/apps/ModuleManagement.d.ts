import {
  ApplicationClosingOptions,
  ApplicationConfiguration,
  ApplicationRenderContext,
} from "foundry/applications/_types.js"
import ApplicationV2 from "foundry/applications/api/ApplicationV2.js"
import HandlebarsApplicationMixin, {
  HandlebarsRenderOptions,
  HandlebarsTemplatePart,
} from "foundry/applications/api/HandlebarsApplicationMixin.js"
import Module from "module"

/**
 * The Module Management Application.
 * This application provides a view of which modules are available to be used and allows for configuration of the
 * set of modules which are active within the World.
 */
export default class ModuleManagement extends HandlebarsApplicationMixin(ApplicationV2) {
  /**
   * The named game setting which persists module configuration.
   */
  static readonly SETTING: "moduleConfiguration"

  static override DEFAULT_OPTIONS: DeepPartial<ApplicationConfiguration>

  static PARTS: Record<string, HandlebarsTemplatePart>

  /**
   * Can the current User manage modules?
   */
  get isEditable(): boolean

  /**
   * Format a document count collection for display.
   * @param counts An object of sub-type counts.
   * @param verbose Detailed breakdown of by sub-type?
   * @param module Are sub-types relative to a module?
   * @internal
   */
  _formatDocumentSummary(counts: object, verbose: boolean, module?: Module): string

  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  protected override _prepareContext(options: HandlebarsRenderOptions): Promise<ApplicationRenderContext>

  protected override _onRender(context: ApplicationRenderContext, options: HandlebarsRenderOptions): Promise<void>

  protected override _tearDown(options: ApplicationClosingOptions): void

  /**
   * Check if a module is enabled currently in the application.
   * @param id The module ID.
   * @internal
   */
  _isModuleChecked(id: string): boolean

  /**
   * Update the checked state of modules based on user dependency resolution.
   * @param formData The dependency resolution result.
   * @param enabling Whether the user was performing an enabling or disabling workflow.
   * @internal
   */
  _onSelectDependencies(formData: Record<string, boolean>, enabling: boolean): void

  /* -------------------------------------------- */
  /*  Event Listeners and Handlers                */
  /* -------------------------------------------- */

  protected override _attachPartListeners(partId: string, element: HTMLElement, options: HandlebarsRenderOptions): void
}
