import { DocumentSheetConfiguration } from "foundry/_module.js"
import {
  DocumentSheetRenderContext,
  DocumentSheetV2,
  HandlebarsApplicationMixin,
  HandlebarsRenderOptions,
  HandlebarsTemplatePart,
} from "foundry/applications/api/_module.js"

/**
 * The Combatant configuration application.
 */
export default class CombatantConfig extends HandlebarsApplicationMixin(DocumentSheetV2) {
  static override DEFAULT_OPTIONS: DeepPartial<DocumentSheetConfiguration>

  static PARTS: Record<string, HandlebarsTemplatePart>

  // @ts-expect-error Should fix.
  override get title(): string

  protected override _prepareContext(options: HandlebarsRenderOptions): Promise<DocumentSheetRenderContext>
}
