import Scene from "./Scene.js"
import * as documents from "./_module.js"
import * as abstract from "./abstract/_module.js"

interface CanvasBaseAmbientLightStatic
  extends Omit<typeof documents.BaseAmbientLight, "new">,
    abstract.CanvasDocumentStatic {}

declare const CanvasBaseAmbientLight: {
  new <TParent extends Scene | null>(
    ...args: any
  ): documents.BaseAmbientLight<TParent> & abstract.CanvasDocument<TParent>
} & CanvasBaseAmbientLightStatic

type CanvasBaseAmbientLight<TParent extends Scene | null> = InstanceType<typeof CanvasBaseAmbientLight<TParent>>

export default class AmbientLightDocument<TParent extends Scene | null> extends CanvasBaseAmbientLight<TParent> {
  /* -------------------------------------------- */
  /*  Model Properties                            */
  /* -------------------------------------------- */

  /** Is this ambient light source global in nature? */
  get isGlobal(): boolean

  /* -------------------------------------------- */
  /*  Event Handlers                              */
  /* -------------------------------------------- */

  protected override _onUpdate(
    changed: DeepPartial<this["_source"]>,
    options: abstract.DatabaseUpdateCallbackOptions,
    userId: string,
  ): void
}

export default interface AmbientLightDocument<TParent extends Scene | null> extends CanvasBaseAmbientLight<TParent> {
  get object(): foundry.canvas.placeables.AmbientLight<this> | null
}
