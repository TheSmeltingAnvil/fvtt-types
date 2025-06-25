import { DOMOutputSpec, Mark, MarkType, Node, NodeType } from "prosemirror-model"
import { EditorState } from "prosemirror-state"
import { EditorView } from "prosemirror-view"

export interface _ProseMirrorDropDownEntry {
  /** Any child entries. */
  children?: ProseMirrorDropDownEntry[]
}

export interface ProseMirrorContentLinkOptions {
  /** The parent document housing this editor. */
  document?: foundry.abstract.Document
  /** Whether to generate links relative to the parent document. */
  relativeLinks?: boolean
}

export interface ProseMirrorDropDownConfig {
  /** The menu CSS class. */
  cssClass: string
  /** The drop-down entries. */
  entries: ProseMirrorDropDownEntry[]
  /** An optional icon to use instead of a text label. */
  icon?: string
  /** The default title of the drop-down. */
  title: string
}

interface ProseMirrorMenuItem {
  /** A string identifier for this menu item. */
  action: string
  /** Whether the current item is active under the given selection or cursor. */
  active?: boolean
  /** An object of attributes for the node or mark. */
  attrs?: object
  /** An optional class to apply to the menu item. */
  class?: string
  /** The command to run when the menu item is clicked. */
  cmd?: ProseMirrorCommand
  /**
   * Entries with the same group number will be grouped together in the drop-down. Lower-numbered groups appear higher
   * in the list.
   */
  group?: number
  /** The menu item's icon HTML. */
  icon?: string
  /** The mark to apply to the selected text. */
  mark?: MarkType
  /** The node to wrap the selected text in. */
  node?: NodeType
  /**
   * A numeric priority which determines whether this item is displayed as the dropdown title. Lower priority takes
   * precedence.
   */
  priority?: number
  /** An optional style to apply to the title text. */
  style?: string
  /** The description of the menu item. */
  title: string
}

interface ProseMirrorMenuOptions {
  /** Whether to display a more compact version of the menu. */
  compact?: boolean
  /** Whether this editor instance is intended to be destroyed when saved. */
  destroyOnSave?: boolean
  /** A function to call when the save button is pressed. */
  onSave?: Function
}

export type MenuToggleBlockWrapCommand = (node: NodeType, attrs?: object) => ProseMirrorCommand
export type ProseMirrorCommand = (state: EditorState, dispatch: Function, view: EditorView) => boolean
export type ProseMirrorDropDownEntry = ProseMirrorMenuItem & _ProseMirrorDropDownEntry
export type ProseMirrorMarkOutput = (mark: Mark, inline: boolean) => DOMOutputSpec
export type ProseMirrorNodeOutput = (node: Node) => DOMOutputSpec
export type ProseMirrorSliceTransformer = (node: Node) => Node | void
