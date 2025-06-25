import AmbientSound from "foundry/canvas/placeables/AmbientSound.js"
import { CanvasDocument } from "./abstract/CanvasDocumentMixin.js"
import BaseAmbientSound from "./BaseAmbientSound.js"

declare const CanvasBaseAmbientSound: new <TParent extends Scene | null>(
  ...args: any
) => BaseAmbientSound<TParent> & CanvasDocument<TParent>

type CanvasBaseAmbientSound<TParent extends Scene | null> = InstanceType<typeof CanvasBaseAmbientSound<TParent>>

export default class AmbientSoundDocument<TParent extends Scene | null> extends CanvasBaseAmbientSound<TParent> {}

export default interface AmbientSoundDocument<TParent extends Scene | null> extends CanvasBaseAmbientSound<TParent> {
  readonly _object: AmbientSound<this> | null
}
