/**
 * @import {Slice} from "prosemirror-model";
 * @import {EditorView} from "prosemirror-view";
 */
/**
 * A class responsible for handle drag-and-drop and pasting of image content. Ensuring no base64 data is injected
 * directly into the journal content and it is instead uploaded to the user's data directory.
 * @extends {ProseMirrorPlugin}
 */
export default class ProseMirrorImagePlugin extends ProseMirrorPlugin {
  /** @inheritdoc */
  static build(schema: any, options?: object): any
  /**
   * Convert a base64 string into a File object.
   * @param {string} data      Base64 encoded data.
   * @param {string} filename  The filename.
   * @param {string} mimetype  The file's mimetype.
   * @returns {File}
   */
  static base64ToFile(data: string, filename: string, mimetype: string): File
  /**
   * @param {Schema} schema                    The ProseMirror schema.
   * @param {object} options                   Additional options to configure the plugin's behaviour.
   * @param {ClientDocument} options.document  A related Document to store extract base64 images for.
   */
  constructor(
    schema: Schema,
    {
      document,
    }?: {
      // @ts-expect-error -- IGNORE --
      document: ClientDocument
    },
  )
  /**
   * Handle a drop onto the editor.
   * @param {EditorView} view  The ProseMirror editor view.
   * @param {DragEvent} event  The drop event.
   * @param {Slice} slice      A slice of editor content.
   * @param {boolean} moved    Whether the slice has been moved from a different part of the editor.
   * @protected
   */
  protected _onDrop(view: Plugin, event: DragEvent, slice: Plugin, moved: boolean): true | undefined
  /**
   * Handle a paste into the editor.
   * @param {EditorView} view       The ProseMirror editor view.
   * @param {ClipboardEvent} event  The paste event.
   * @protected
   */
  protected _onPaste(view: Plugin, event: ClipboardEvent): true | undefined
  /**
   * Upload any image files encountered in the drop.
   * @param {EditorView} view  The ProseMirror editor view.
   * @param {FileList} files   The files to upload.
   * @param {number} [pos]     The position in the document to insert at. If not provided, the current selection will be
   *                           replaced instead.
   * @protected
   */
  protected _uploadImages(view: Plugin, files: FileList, pos?: number): Promise<void>
  /**
   * Capture any base64-encoded images embedded in the rich text paste and upload them.
   * @param {EditorView} view                                      The ProseMirror editor view.
   * @param {string} html                                          The HTML data as a string.
   * @param {[full: string, mime: string, data: string][]} images  An array of extracted base64 image data.
   * @protected
   */
  protected _replaceBase64Images(
    view: Plugin,
    html: string,
    images: [full: string, mime: string, data: string][],
  ): Promise<void>
  /**
   * Detect base64 image data embedded in an HTML string and extract it.
   * @param {string} html  The HTML data as a string.
   * @returns {[full: string, mime: string, data: string][]}
   * @protected
   */
  protected _extractBase64Images(html: string): [full: string, mime: string, data: string][]
}
import { Schema } from "prosemirror-model"
import ProseMirrorPlugin from "./plugin.mjs"
