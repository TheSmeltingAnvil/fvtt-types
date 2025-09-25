/**
 * A class responsible for encapsulating logic around secret nodes in the ProseMirror schema.
 * @extends {SchemaDefinition}
 */
// @ts-expect-error -- IGNORE --
export default class SecretNode extends SchemaDefinition {
  /** @override */
  static override get attrs(): {
    revealed: {
      default: boolean
    }
    id: object
  }
  /** @override */
  static override getAttrs(el: any):
    | false
    | {
        revealed: any
        id: any
      }
  /** @override */
  static override toDOM(node: any): (
    | string
    | number
    | {
        id: any
        class: string
      }
  )[]
  /** @inheritdoc */
  static make(): object
  /**
   * Handle splitting a secret block in two, making sure the new block gets a unique ID.
   * @param {EditorState} state                   The ProseMirror editor state.
   * @param {(tr: Transaction) => void} dispatch  The editor dispatch function.
   */
  static split(state: EditorState, dispatch: (tr: Transaction) => void): boolean
}
import { EditorState, Transaction } from "prosemirror-state"
import SchemaDefinition from "./schema-definition.mjs"
