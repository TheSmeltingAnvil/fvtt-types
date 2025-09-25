/**
 * A class responsible for managing click events inside a ProseMirror editor.
 * @extends {ProseMirrorPlugin}
 */
export default class ProseMirrorClickHandler extends ProseMirrorPlugin {
  /** @override */
  static override build(schema: any, options?: object): any
  /**
   * Handle a click on the editor.
   * @param {EditorView} view     The ProseMirror editor view.
   * @param {number} pos          The position in the ProseMirror document that the click occurred at.
   * @param {Node} node           The current ProseMirror Node that the click has bubbled to.
   * @param {number} nodePos      The position of the click within this Node.
   * @param {PointerEvent} event  The click event.
   * @param {boolean} direct      Whether this Node is the one that was directly clicked on.
   * @returns {boolean|void}      A return value of true indicates the event has been handled, it will not propagate to
   *                              other plugins, and ProseMirror will call preventDefault on it.
   * @protected
   */
  protected _onClick(
    view: EditorView,
    pos: number,
    node: Node,
    nodePos: number,
    event: PointerEvent,
    direct: boolean,
  ): boolean | void
}
import { EditorView } from "prosemirror-view"
import ProseMirrorPlugin from "./plugin.mjs"
