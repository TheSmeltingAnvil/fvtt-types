import { FormFooterButton } from "../_types.js"
import { DocumentSheetV2 } from "../api/_module.js"
import HandlebarsApplicationMixin, {
  HandlebarsRenderOptions,
  HandlebarsTemplatePart,
} from "../api/HandlebarsApplicationMixin.js"
import SceneConfig from "../sheets/SceneConfig.js"
import { DocumentSheetConfigRenderContext } from "./DocumentSheetConfig.js"
import * as foundry from "foundry/_module.js"

interface GridConfigContext<TScene extends Scene = Scene> extends DocumentSheetConfigRenderContext {
  scene: TScene
  gridTypes: Record<string, string>
  scale: number
  pixelsLabel: string
  buttons: FormFooterButton[]
}

/** A tool for fine-tuning the grid in a Scene */
export default class GridConfig<TScene extends Scene = Scene> extends HandlebarsApplicationMixin(DocumentSheetV2) {
  constructor(options: foundry.DocumentSheetConfiguration)

  static override DEFAULT_OPTIONS: DeepPartial<foundry.DocumentSheetConfiguration>

  static PARTS: Record<string, HandlebarsTemplatePart>

  /** Track the Scene Configuration sheet reference. */
  sheet: SceneConfig<TScene>

  // @ts-expect-error Should fix.
  override _prepareContext(options: HandlebarsRenderOptions): Promise<GridConfigContext<TScene>>
}
