import { keymap } from "prosemirror-keymap"
import { DOMSerializer, Schema } from "prosemirror-model"
import { AllSelection, EditorState, Plugin, PluginKey, TextSelection } from "prosemirror-state"
import { Step } from "prosemirror-transform"
import { EditorView } from "prosemirror-view"
import ProseMirrorClickHandler from "./click-handler.mjs"
import ProseMirrorContentLinkPlugin from "./content-link-plugin.mjs"
import ProseMirrorDirtyPlugin from "./dirty-plugin.mjs"
import DOMParser from "./dom-parser.mjs"
import ProseMirrorDropDown from "./dropdown.mjs"
import ProseMirrorHighlightMatchesPlugin from "./highlight-matches-plugin.mjs"
import ProseMirrorImagePlugin from "./image-plugin.mjs"
import ProseMirrorInputRules from "./input-rules.mjs"
import ProseMirrorKeyMaps from "./keymaps.mjs"
import ProseMirrorMenu from "./menu.mjs"
import ProseMirrorPasteTransformer from "./paste-transformer.mjs"
import ProseMirrorPlugin from "./plugin.mjs"
import { schema as defaultSchema } from "./schema.mjs"
import { parseHTMLString, serializeHTMLString } from "./util.mjs"
export * as types from "./_types.mjs"
export {
  AllSelection,
  // @ts-expect-error -- IGNORE --
  collab,
  defaultSchema,
  DOMParser,
  DOMSerializer,
  EditorState,
  EditorView,
  keymap,
  Plugin,
  PluginKey,
  ProseMirrorClickHandler,
  ProseMirrorContentLinkPlugin,
  ProseMirrorDirtyPlugin,
  ProseMirrorDropDown,
  ProseMirrorHighlightMatchesPlugin,
  ProseMirrorImagePlugin,
  ProseMirrorInputRules,
  ProseMirrorKeyMaps,
  ProseMirrorMenu,
  ProseMirrorPasteTransformer,
  ProseMirrorPlugin,
  Schema,
  Step,
  TextSelection,
}
export namespace defaultPlugins {
  let inputRules: any
  let keyMaps: any
  let menu: any
  let isDirty: any
  let clickHandler: any
  let pasteTransformer: any
  let baseKeyMap: any
  let dropCursor: any
  let gapCursor: any
  let history: any
  let columnResizing: any
  let tables: any
}
export namespace dom {
  export let parser: any
  export let serializer: any
  export { parseHTMLString as parseString }
  export { serializeHTMLString as serializeString }
}
