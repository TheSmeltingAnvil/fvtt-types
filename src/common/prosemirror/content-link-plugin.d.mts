/**
 * @import {EditorView} from "prosemirror-view";
 * @import {ProseMirrorContentLinkOptions} from "./_types.mjs";
 */
/**
 * A class responsible for handling the dropping of Documents onto the editor and creating content links for them.
 * @extends {ProseMirrorPlugin}
 */
export default class ProseMirrorContentLinkPlugin extends ProseMirrorPlugin {
  /** @inheritdoc */
  static build(schema: any, options?: object): any
  /**
   * @param {Schema} schema                          The ProseMirror schema.
   * @param {ProseMirrorContentLinkOptions} options  Additional options to configure the plugin's behaviour.
   */
  constructor(schema: Schema, { document, relativeLinks }?: ProseMirrorContentLinkOptions)
  /**
   * Handle a drop onto the editor.
   * @param {EditorView} view  The ProseMirror editor view.
   * @param {DragEvent} event  The drop event.
   * @param {Slice} slice      A slice of editor content.
   * @param {boolean} moved    Whether the slice has been moved from a different part of the editor.
   * @protected
   */
  protected _onDrop(view: Plugin, event: DragEvent, slice: Slice, moved: boolean): true | undefined
}
import { Schema, Slice } from "prosemirror-model"
import type { ProseMirrorContentLinkOptions } from "./_types.mjs"
import ProseMirrorPlugin from "./plugin.mjs"
