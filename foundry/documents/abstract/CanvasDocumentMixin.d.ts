import * as canvas from "foundry/canvas/_module.js"
import * as abstract from "foundry/documents/abstract/_module.js"
import * as documents from "foundry/documents/_module.js"
import { Document } from "foundry/abstract/_module.js"
/**
 * A specialized subclass of the ClientDocumentMixin which is used for document types that are intended to be
 * represented upon the game Canvas.
 * @category Mixins
 * @param Base The base document class mixed with client and canvas features
 */
export default function CanvasDocumentMixin<TParent extends Document | null, TDocument extends Document<TParent>>(
  Base: ConstructorOf<TDocument>,
): ConstructorOf<CanvasDocument<TParent> & TDocument>

/**
 * A ClientDocument class with additional facilities for utilizing the {@link foundry.canvas.Canvas} API
 */
export class CanvasDocument<
  TParent extends Document | null = Document | null,
> extends abstract.ClientDocument<TParent> {
  /* -------------------------------------------- */
  /*  Properties                                  */
  /* -------------------------------------------- */

  /**
   * A lazily constructed PlaceableObject instance which can represent this Document on the game canvas.
   * @returns {PlaceableObject|null}
   */
  get object(): canvas.placeables.PlaceableObject | null

  /**
   * Has this object been deliberately destroyed as part of the deletion workflow?
   * @internal
   */
  _destroyed: boolean

  /**
   * A reference to the CanvasLayer which contains Document objects of this type.
   */
  get layer(): canvas.layers.PlaceablesLayer

  /**
   * An indicator for whether this document is currently rendered on the game canvas.
   */
  get rendered(): boolean

  /* -------------------------------------------- */
  /*  Event Handlers                              */
  /* -------------------------------------------- */

  protected override _preCreate(
    data: Record<string, unknown>,
    options: abstract.DatabaseCreateCallbackOptions,
    user: documents.BaseUser,
  ): Promise<boolean | void>

  protected override _onCreate(
    data: this["_source"],
    options: abstract.DatabaseCreateCallbackOptions,
    userId: string,
  ): void

  protected override _onUpdate(
    changed: DeepPartial<this["_source"]>,
    options: abstract.DatabaseUpdateCallbackOptions,
    userId: string,
  ): void

  protected override _onDelete(options: abstract.DatabaseDeleteCallbackOptions, userId: string): void
}

export type CanvasDocumentStatic = abstract.ClientDocumentStatic
