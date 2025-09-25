/**
 * A class responsible for encapsulating logic around link marks in the ProseMirror schema.
 * @extends {SchemaDefinition}
 */
// @ts-expect-error -- IGNORE --
export default class LinkMark extends SchemaDefinition {
  /** @override */
  static override get attrs(): {
    href: {
      default: null
    }
    title: {
      default: null
    }
  }
  /** @override */
  static override getAttrs(el: any):
    | false
    | {
        href: any
        title: any
      }
  /** @override */
  static override toDOM(node: any): (
    | string
    | {
        href: any
        title: any
      }
  )[]
  /** @inheritdoc */
  static make(): object
  /**
   * Handle clicks on link marks while editing.
   * @param {EditorView} view     The ProseMirror editor view.
   * @param {number} pos          The position in the ProseMirror document that the click occurred at.
   * @param {PointerEvent} event  The click event.
   * @param {Mark} mark           The Mark instance.
   * @returns {boolean|void}      Returns true to indicate the click was handled here and should not be propagated to
   *                              other plugins.
   */
  static onClick(view: EditorView, pos: number, event: PointerEvent, mark: Mark): boolean | void
}
import { Mark } from "prosemirror-model"
import { EditorView } from "prosemirror-view"
import SchemaDefinition from "./schema-definition.mjs"
