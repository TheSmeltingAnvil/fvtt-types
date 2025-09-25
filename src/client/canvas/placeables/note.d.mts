/**
 * A Note is an implementation of PlaceableObject which represents an annotated location within the Scene.
 * Each Note links to a JournalEntry document and represents its location on the map.
 * @category Canvas
 * @see {@link foundry.documents.NoteDocument}
 * @see {@link foundry.canvas.layers.NotesLayer}
 */
export default class Note extends PlaceableObject {
  /** @override */
  static override RENDER_FLAGS: {
    redraw: {
      propagate: string[]
    }
    refresh: {
      propagate: string[]
      alias: boolean
    }
    refreshState: {
      propagate: string[]
    }
    refreshVisibility: object
    refreshPosition: object
    refreshTooltip: object
    refreshElevation: {
      propagate: string[]
    }
    /** @deprecated since v12 */
    refreshText: {
      propagate: string[]
      deprecated: {
        since: number
        until: number
      }
      alias: boolean
    }
  }
  /**
   * The control icon.
   * @type {ControlIcon}
   */
  controlIcon: ControlIcon
  /**
   * The tooltip.
   * @type {PreciseText}
   */
  tooltip: PreciseText
  /**
   * The associated JournalEntry which is referenced by this Note
   * @type {JournalEntry}
   */
  get entry(): JournalEntry
  /**
   * The specific JournalEntryPage within the associated JournalEntry referenced by this Note.
   */
  get page(): any
  /**
   * Determine whether the Note is visible to the current user based on their perspective of the Scene.
   * Visibility depends on permission to the underlying journal entry, as well as the perspective of controlled Tokens.
   * If Token Vision is required, the user must have a token with vision over the note to see it.
   * @type {boolean}
   */
  get isVisible(): boolean
  /** @override */
  override _draw(options: any): Promise<void>
  /**
   * Draw the control icon.
   * @returns {ControlIcon}
   * @protected
   */
  protected _drawControlIcon(): ControlIcon
  /**
   * Draw the tooltip.
   * @returns {PreciseText}
   * @protected
   */
  protected _drawTooltip(): PreciseText
  /**
   * Refresh the tooltip.
   * @protected
   */
  protected _refreshTooltip(): void
  /**
   * Define a PIXI TextStyle object which is used for the tooltip displayed for this Note
   * @returns {PIXI.TextStyle}
   * @protected
   */
  protected _getTextStyle(): PIXI.TextStyle
  /** @override */
  override _applyRenderFlags(flags: any): void
  /**
   * Refresh the visibility.
   * @protected
   */
  protected _refreshVisibility(): void
  /**
   * Refresh the state of the Note. Called the Note enters a different interaction state.
   * @protected
   */
  protected _refreshState(): void
  alpha: number | undefined
  zIndex: number | undefined
  /**
   * Refresh the position of the Note. Called with the coordinates change.
   * @protected
   */
  protected _refreshPosition(): void
  /**
   * Refresh the elevation of the control icon.
   * @protected
   */
  protected _refreshElevation(): void
  /** @inheritDoc */
  _onUpdate(changed: any, options: any, userId: any): void
  /** @override */
  override _canHover(user: any): boolean
  /** @override */
  override _canView(user: any): any
  /** @override */
  override _canConfigure(user: any): any
  /** @inheritdoc */
  _onClickLeft2(event: any): Promise<ImagePopout> | undefined
  /**
   * @deprecated since v12
   * @ignore
   */
  get text(): any
  /**
   * @deprecated since v12
   * @ignore
   */
  get size(): any
}
import ImagePopout from "../../applications/apps/image-popout.mjs"
import ControlIcon from "../containers/elements/control-icon.mjs"
import PreciseText from "../containers/elements/precise-text.mjs"
import PlaceableObject from "./placeable-object.mjs"
