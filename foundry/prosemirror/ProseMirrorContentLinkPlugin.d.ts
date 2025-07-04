import { Schema, Slice } from "prosemirror-model"
import { Plugin } from "prosemirror-state"
import { EditorView } from "prosemirror-view"

import * as types from "./_types.js"
import ProseMirrorPlugin from "./ProseMirrorPlugin.js"

/**
 * A class responsible for handling the dropping of Documents onto the editor and creating content links for them.
 */
export default class ProseMirrorContentLinkPlugin extends ProseMirrorPlugin {
  /** The parent document housing this editor. */
  document: Readonly<foundry.documents.abstract.ClientDocument>

  /** Whether to generate links relative to the parent document. */
  relativeLinks: boolean

  /**
   * @param schema  The ProseMirror schema.
   * @param options Additional options to configure the plugin's behaviour.
   */
  constructor(schema: Schema, options?: types.ProseMirrorContentLinkOptions)

  static override build(schema: Schema, options?: object): Plugin

  /**
   * Handle a drop onto the editor.
   * @param view  The ProseMirror editor view.
   * @param event The drop event.
   * @param slice A slice of editor content.
   * @param moved Whether the slice has been moved from a different part of the editor.
   */
  protected _onDrop(view: EditorView, event: DragEvent, slice: Slice, moved: boolean): boolean | void
}
