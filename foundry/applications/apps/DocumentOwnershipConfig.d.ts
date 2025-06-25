import {
  DocumentSheetRenderContext,
  DocumentSheetV2,
  HandlebarsApplicationMixin,
  HandlebarsRenderOptions,
  HandlebarsTemplatePart,
} from "foundry/applications/api/_module.js"

/** A generic application for configuring permissions for various Document types. */
export default class DocumentOwnershipConfig extends HandlebarsApplicationMixin(DocumentSheetV2) {
  static override DEFAULT_OPTIONS: DeepPartial<foundry.DocumentSheetConfiguration>

  static PARTS: Record<string, HandlebarsTemplatePart>

  override _prepareContext(options: HandlebarsRenderOptions): Promise<DocumentSheetRenderContext>
}
