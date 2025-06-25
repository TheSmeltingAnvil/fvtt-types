import { CompendiumDocument } from "foundry/documents/_module.js"
import DocumentDirectory, { DocumentDirectoryConfiguration } from "../DocumentDirectory.js"
import { HandlebarsRenderOptions, HandlebarsTemplatePart } from "foundry/applications/api/HandlebarsApplicationMixin.js"
import { ContextMenuEntry } from "foundry/applications/ux/ContextMenu.js"
import { ApplicationRenderContext } from "foundry/applications/_types.js"
import { DropCanvasData } from "foundry/helpers/Hooks.js"

/**
 * An Application that displays the indexed contents of a Compendium pack.
 */
export default class Compendium<
  TDocument extends CompendiumDocument = CompendiumDocument,
> extends DocumentDirectory<TDocument> {
  static override DEFAULT_OPTIONS: DeepPartial<DocumentDirectoryConfiguration>

  static override PARTS: Record<string, HandlebarsTemplatePart>

  protected static override _entryPartial: string

  /* -------------------------------------------- */
  /*  Properties                                  */
  /* -------------------------------------------- */

  //override get isPopout(): boolean

  override get title(): string

  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  protected override _initializeApplicationOptions(
    options: DeepPartial<DocumentDirectoryConfiguration>,
  ): DocumentDirectoryConfiguration

  protected override _canCreateEntry(): boolean

  protected override _canCreateFolder(): boolean

  protected override _canRender(options: HandlebarsRenderOptions): false | void

  protected override _configureRenderOptions(options: DeepPartial<HandlebarsRenderOptions>): void

  protected override _getEntryContextOptions(): ContextMenuEntry[]

  protected override _getFolderContextOptions(): ContextMenuEntry[]

  protected override _prepareHeaderContext(
    context: ApplicationRenderContext,
    options: HandlebarsRenderOptions,
  ): Promise<void>

  protected override _onRender(context: ApplicationRenderContext, options: HandlebarsRenderOptions): Promise<void>

  /* -------------------------------------------- */
  /*  Event Listeners & Handlers                  */
  /* -------------------------------------------- */

  //protected override _onCreateEntry(event: PointerEvent, target: HTMLElement): Promise<TDocument | undefined>

  /* -------------------------------------------- */
  /*  Drag & Drop                                 */
  /* -------------------------------------------- */

  protected override _canDragDrop(selector: string): boolean

  protected override _createDroppedEntry(entry: TDocument, updates?: object): Promise<TDocument | undefined>

  protected override _entryAlreadyExists(entry: TDocument): boolean

  protected _getEntryDragData(entryId: string): DropCanvasData
}
