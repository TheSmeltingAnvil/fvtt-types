import * as documents from "./_module.js"

interface CanvasBaseWallStatic
  extends Omit<typeof documents.BaseWall, "new">,
    documents.abstract.CanvasDocumentStatic {}

declare const CanvasBaseWall: {
  new <TParent extends Scene | null>(
    ...args: any
  ): documents.BaseWall<TParent> & documents.abstract.CanvasDocument<TParent>
} & CanvasBaseWallStatic

type CanvasBaseWall<TParent extends Scene | null> = InstanceType<typeof CanvasBaseWall<TParent>>

// @ts-expect-error Should fix.
export default class WallDocument<TParent extends Scene | null = Scene | null> extends CanvasBaseWall<TParent> {}

// @ts-expect-error Should fix.
export default interface WallDocument<TParent extends Scene | null = Scene | null> extends CanvasBaseWall<TParent> {
  get object(): foundry.canvas.placeables.Wall<this> | null
}
