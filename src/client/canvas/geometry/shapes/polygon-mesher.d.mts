/**
 * A helper class used to construct triangulated polygon meshes
 * Allow to add padding and a specific depth value.
 * @param {number[]|PIXI.Polygon} poly      Closed polygon to be processed and converted to a mesh
 *                                          (array of points or PIXI Polygon)
 * @param {object|{}} options               Various options : normalizing, offsetting, add depth, ...
 */
export default class PolygonMesher {
  /**
   * Default options values
   * @type {Record<string,boolean|number>}
   */
  static _defaultOptions: Record<string, boolean | number>
  /**
   * Convert a flat points array into a 2 dimensional ClipperLib path
   * @param {number[]|PIXI.Polygon} poly             PIXI.Polygon or points flat array.
   * @param {number} [dimension=2]                   Dimension.
   * @returns {ClipperLib.Path|undefined}      The clipper lib path.
   */
  static getClipperPathFromPoints(poly: number[] | PIXI.Polygon, dimension?: number): ClipperLib.Path | undefined
  constructor(poly: any, options?: object)
  /**
   * Contains options to apply during the meshing process
   * @type {Record<string,boolean|number>}
   */
  options: Record<string, boolean | number>
  /**
   * Polygon mesh vertices
   * @type {number[]}
   */
  vertices: number[]
  /**
   * Polygon mesh indices
   * @type {number[]}
   */
  indices: number[]
  /**
   * Execute the triangulation to create indices
   * @param {PIXI.Geometry} geometry    A geometry to update
   * @returns {PIXI.Geometry}           The resulting geometry
   */
  triangulate(geometry: PIXI.Geometry): PIXI.Geometry
  #private
}
