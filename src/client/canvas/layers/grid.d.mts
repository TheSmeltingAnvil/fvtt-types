/**
 * A CanvasLayer responsible for drawing a square grid
 */
export default class GridLayer extends CanvasLayer {
  /** @inheritdoc */
  static get layerOptions(): object
  /** @override */
  static override get instance(): any
  /**
   * The grid mesh.
   * @type {GridMesh}
   */
  mesh: GridMesh
  /**
   * The Grid Highlight container
   * @type {PIXI.Container}
   */
  highlight: PIXI.Container
  /**
   * Map named highlight layers
   * @type {Record<string, GridHighlight>}
   */
  highlightLayers: Record<string, GridHighlight>
  /** @override */
  override _draw(options: any): Promise<void>
  /**
   * Creates the grid mesh.
   * @returns {Promise<GridMesh>}
   * @protected
   */
  protected _drawMesh(): Promise<GridMesh>
  /**
   * Initialize the grid mesh appearance and configure the grid shader.
   * @param {object} options
   * @param {string} [options.style]         The grid style
   * @param {number} [options.thickness]     The grid thickness
   * @param {string} [options.color]         The grid color
   * @param {number} [options.alpha]         The grid alpha
   */
  initializeMesh({
    style,
    thickness,
    color,
    alpha,
  }?: {
    style?: string | undefined
    thickness?: number | undefined
    color?: string | undefined
    alpha?: number | undefined
  }): void
  /**
   * Define a new Highlight graphic
   * @param {string} name     The name for the referenced highlight layer
   */
  addHighlightLayer(name: string): GridHighlight
  /**
   * Clear a specific Highlight graphic
   * @param {string} name     The name for the referenced highlight layer
   */
  clearHighlightLayer(name: string): void
  /**
   * Destroy a specific Highlight graphic
   * @param {string} name     The name for the referenced highlight layer
   */
  destroyHighlightLayer(name: string): void
  /**
   * Obtain the highlight layer graphic by name
   * @param {string} name     The name for the referenced highlight layer
   */
  getHighlightLayer(name: string): GridHighlight
  /**
   * Add highlighting for a specific grid position to a named highlight graphic
   * @param {string} name                        The name for the referenced highlight layer
   * @param {object} options
   *                               - If gridless you need to pass `shape` but not `x` and `y`.
   *                               - If not gridless you need to pass `x` and `y`, but not `shape`.
   * @param {number} [options.x]                 The x-coordinate of the highlighted position
   * @param {number} [options.y]                 The y-coordinate of the highlighted position
   * @param {PIXI.ColorSource} [options.color=0x33BBFF]    The fill color of the highlight
   * @param {PIXI.ColorSource|null} [options.border=null]  The border color of the highlight
   * @param {number} [options.alpha=0.25]        The opacity of the highlight
   * @param {PIXI.Polygon} [options.shape=null]  A predefined shape to highlight
   */
  highlightPosition(
    name: string,
    {
      x,
      y,
      color,
      border,
      alpha,
      shape,
    }: {
      x?: number | undefined
      y?: number | undefined
      color?: any
      border?: PIXI.ColorSource | null
      alpha?: number | undefined
      shape?: any
    },
  ): void
  /**
   * @deprecated since v12
   * @ignore
   */
  get type(): CONST.GridType
  /**
   * @deprecated since v12
   * @ignore
   */
  get size(): number
  /**
   * @deprecated since v12
   * @ignore
   */
  get grid(): foundry.grid.BaseGrid<foundry.grid.types.GridCoordinates2D, foundry.grid.types.GridCoordinates3D> | null
  /**
   * @deprecated since v12
   * @ignore
   */
  isNeighbor(r0: any, c0: any, r1: any, c1: any): boolean
  /**
   * @deprecated since v12
   * @ignore
   */
  get w(): number
  /**
   * @deprecated since v12
   * @ignore
   */
  get h(): number
  /**
   * @deprecated since v12
   * @ignore
   */
  get isHex(): boolean
  /**
   * @deprecated since v12
   * @ignore
   */
  getTopLeft(x: any, y: any): number[]
  /**
   * @deprecated since v12
   * @ignore
   */
  getCenter(x: any, y: any): any[]
  /**
   * @deprecated since v12
   * @ignore
   */
  getSnappedPosition(
    x: any,
    y: any,
    interval?: number,
    options?: object,
  ): {
    x: number
    y: number
  }
  /**
   * @deprecated since v12
   * @ignore
   */
  measureDistance(origin: any, target: any, options?: object): any
}
import { GridHighlight, GridMesh } from "../containers/_module.mjs"
import CanvasLayer from "./base/canvas-layer.mjs"
