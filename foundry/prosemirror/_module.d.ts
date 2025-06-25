/** @module prosemirror */

import * as collab from "prosemirror-collab"
import { keymap } from "prosemirror-keymap"
import { DOMSerializer, Schema } from "prosemirror-model"
import { AllSelection, EditorState, Plugin, PluginKey, TextSelection } from "prosemirror-state"
import { Step } from "prosemirror-transform"
import { EditorView } from "prosemirror-view"

import DOMParser from "./DOMparser.js"
import ProseMirrorClickHandler from "./ProseMirrorClickHandler.js"
import ProseMirrorContentLinkPlugin from "./ProseMirrorContentLinkPlugin.js"
import ProseMirrorDirtyPlugin from "./ProseMirrorDirtyPlugin.js"
import ProseMirrorHighlightMatchesPlugin from "./ProseMirrorHighlightMatchesPlugin.js"
import ProseMirrorImagePlugin from "./ProseMirrorImagePlugin.js"
import ProseMirrorInputRules from "./ProseMirrorInputRules.js"
import ProseMirrorKeyMaps from "./ProseMirrorKeyMaps.js"
import ProseMirrorMenu from "./ProseMirrorMenu.js"
import ProseMirrorPlugin from "./ProseMirrorPlugin.js"
import { schema as defaultSchema } from "./schema.js"
import { parseHTMLString, serializeHTMLString } from "./utils.js"

declare const dom: {
  parser: DOMParser
  serializer: DOMSerializer
  parseString: typeof parseHTMLString
  serializeString: typeof serializeHTMLString
}

declare const defaultPlugins: {
  inputRules: Plugin
  keyMaps: Plugin
  menu: Plugin
  isDirty: Plugin
  clickHandler: Plugin
  pasteTransformer: Plugin
  baseKeyMap: Plugin
  dropCursor: Plugin
  gapCursor: Plugin
  history: Plugin
  columnResizing: Plugin
  tables: Plugin
}

export * as commands from "prosemirror-commands"
export * as input from "prosemirror-inputrules"
export * as list from "prosemirror-schema-list"
export * as state from "prosemirror-state"
export * as tables from "prosemirror-tables"
export * as transform from "prosemirror-transform"

export * as types from "./_types.js"

export {
  AllSelection,
  collab,
  defaultPlugins,
  defaultSchema,
  dom,
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
  ProseMirrorHighlightMatchesPlugin,
  ProseMirrorImagePlugin,
  ProseMirrorInputRules,
  ProseMirrorKeyMaps,
  ProseMirrorMenu,
  ProseMirrorPlugin,
  Schema,
  Step,
  TextSelection,
}
