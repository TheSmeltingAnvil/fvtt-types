import { DialogV2, DialogV2Configuration, HandlebarsRenderOptions } from "foundry/applications/api/_module.js"

/**
 * A Dialog subclass that allows the user to configure export options for a Folder
 */
export default class FolderExport extends DialogV2 {
  static override DEFAULT_OPTIONS: DeepPartial<DialogV2Configuration>

  protected override _onRender(context: object, options: HandlebarsRenderOptions): Promise<void>
}
