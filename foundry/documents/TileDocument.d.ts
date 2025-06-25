import Tile from "foundry/canvas/placeables/Tile.js"
import { BaseTile, Scene } from "./_module.js"
import { CanvasDocument, CanvasDocumentStatic } from "./abstract/_module.js"

interface CanvasBaseTileStatic extends Omit<typeof BaseTile, "new">, CanvasDocumentStatic {}

declare const CanvasBaseTile: {
  new <TParent extends Scene | null>(...args: any): BaseTile<TParent> & CanvasDocument<TParent>
} & CanvasBaseTileStatic

type CanvasBaseTile<TParent extends Scene | null> = InstanceType<typeof CanvasBaseTile<TParent>>

export default class TileDocument<TParent extends Scene | null> extends CanvasBaseTile<TParent> {
  override prepareDerivedData(): void
}

export default interface TileDocument<TParent extends Scene | null> extends CanvasBaseTile<TParent> {
  readonly _object: Tile<this> | null
}
