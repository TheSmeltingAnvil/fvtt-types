/**
 * An Application that displays the indexed contents of a Compendium pack.
 * @template {ClientDocument} TDocument
 * @extends {DocumentDirectory<TDocument>}
 */
export default class Compendium<TDocument extends ClientDocument> extends DocumentDirectory<TDocument> {
  /** @override */
  static override DEFAULT_OPTIONS: {
    classes: string[]
    window: {
      frame: boolean
      positioned: boolean
    }
    position: {
      top: number
      left: number
      width: number
      height: number
    }
  }
  /** @override */
  static override PARTS: {
    header: {
      template: string
    }
    directory: {
      template: string
      templates: string[]
      scrollable: string[]
    }
    footer: {
      template: string
    }
  }
  constructor(options: any)
  /** @override */
  override _canCreateEntry(): any
  /** @override */
  override _canCreateFolder(): any
  /** @inheritDoc */
  _configureRenderOptions(options: any): void
  /** @override */
  override _getEntryContextOptions(): {
    name: string
    icon: string
    condition: () => any
    callback: (li: any) => Promise<any>
  }[]
  /** @inheritDoc */
  _prepareHeaderContext(context: any, options: any): Promise<void>
  /** @inheritDoc */
  _onCreateEntry(event: any, target: any): any
  /** @override */
  override _canDragDrop(selector: any): any
  /** @override */
  override _createDroppedEntry(entry: any, updates?: object): any
  /** @override */
  override _entryAlreadyExists(entry: any): any
  /** @override */
  override _getEntryDragData(entryId: any): {
    type: string
    uuid: any
  }
}
import DocumentDirectory from "../document-directory.mjs"
