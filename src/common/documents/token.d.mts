/**
 * @import {Point, ElevatedPoint, DeepReadonly} from "../_types.mjs";
 * @import {TokenShapeType} from "../constants.mjs";
 * @import {TokenHexagonalOffsetsData, TokenHexagonalShapeData, TokenDimensions, TokenPosition} from "./_types.mjs";
 * @import {GridOffset2D, GridOffset3D} from "../grid/_types.mjs";
 * @import {TokenData} from "./_types.mjs";
 * @import {SquareGrid} from "../grid/_module.mjs";
 * @import {DataModelUpdateOptions, DocumentPermissionTest} from "@common/abstract/_types.mjs";
 */
/**
 * The Token Document.
 * Defines the DataSchema and common behaviors for a Token which are shared between both client and server.
 * @extends {Document<TokenData>}
 * @mixes TokenData
 * @category Documents
 */
export default class BaseToken extends Document<TokenData, foundry.abstract.types.DocumentConstructionContext> {
  /** @inheritdoc */
  static metadata: object
  /** @inheritdoc */
  static defineSchema(): {
    _id: fields.DocumentIdField
    name: fields.StringField
    displayName: fields.NumberField
    actorId: fields.ForeignDocumentField
    actorLink: fields.BooleanField
    delta: ActorDeltaField
    width: fields.NumberField
    height: fields.NumberField
    texture: TextureData
    shape: fields.NumberField
    x: fields.NumberField
    y: fields.NumberField
    elevation: fields.NumberField
    sort: fields.NumberField
    locked: fields.BooleanField
    lockRotation: fields.BooleanField
    rotation: fields.AngleField
    alpha: fields.AlphaField
    hidden: fields.BooleanField
    disposition: fields.NumberField
    displayBars: fields.NumberField
    bar1: fields.SchemaField
    bar2: fields.SchemaField
    light: fields.EmbeddedDataField
    sight: fields.SchemaField
    detectionModes: fields.ArrayField<fields.SchemaField>
    occludable: fields.SchemaField
    ring: fields.SchemaField
    turnMarker: fields.SchemaField
    movementAction: fields.StringField
    /** @internal */
    _movementHistory: fields.ArrayField<fields.SchemaField>
    /** @internal */
    _regions: fields.ArrayField<fields.ForeignDocumentField>
    flags: fields.DocumentFlagsField
  }
  /**
   * The fields of the data model for which changes count as a movement action.
   * @type {Readonly<["x", "y", "elevation", "width", "height", "shape"]>}
   * @readonly
   */
  static readonly MOVEMENT_FIELDS: Readonly<["x", "y", "elevation", "width", "height", "shape"]>
  /**
   * Are the given positions equal?
   * @param {TokenPosition} position1
   * @param {TokenPosition} position2
   * @returns {boolean}
   */
  static arePositionsEqual(position1: TokenPosition, position2: TokenPosition): boolean
  /**
   * Validate the structure of the detection modes array
   * @param {object[]} modes    Configured detection modes
   * @throws                    An error if the array is invalid
   */
  static #validateDetectionModes(modes: object[]): void
  /**
   * The default icon used for newly created Token documents
   * @type {string}
   */
  static DEFAULT_ICON: string
  static #canUpdate(user: foundry.documents.BaseUser, document: Document, data?: object | undefined): boolean
  /**
   * Get the snapped position on a square grid.
   * @param {SquareGrid} grid     The square grid
   * @param {Point} position      The position that is snapped or grid offset
   * @param {number} width        The width in grid spaces (positive)
   * @param {number} height       The height in grid spaces (positive)
   * @returns {Point}             The snapped position
   */
  static #getSnappedPositionInSquareGrid(grid: SquareGrid, position: Point, width: number, height: number): Point
  /**
   * Get the snapped position on a hexagonal grid.
   * @param {SquareGrid} grid       The hexagonal grid
   * @param {Point} position        The position that is snapped or grid offset
   * @param {number} width          The width in grid spaces (positive)
   * @param {number} height         The height in grid spaces (positive)
   * @param {TokenShapeType} shape  The shape (one of {@link CONST.TOKEN_SHAPES})
   * @returns {Point}               The snapped position
   */
  static #getSnappedPositionInHexagonalGrid(
    grid: SquareGrid,
    position: Point,
    width: number,
    height: number,
    shape: CONST.TokenShapeType,
  ): Point
  /**
   * The cache of hexagonal offsets.
   * @type {Map<string, DeepReadonly<TokenHexagonalOffsetsData>>}
   */
  static #hexagonalOffsets: Map<string, DeepReadonly<TokenHexagonalOffsetsData>>
  /**
   * Get the hexagonal offsets given the type, width, and height.
   * @param {number} width                                 The width of the Token (positive)
   * @param {number} height                                The height of the Token (positive)
   * @param {TokenShapeType} shape                         The shape (one of {@link CONST.TOKEN_SHAPES})
   * @param {boolean} columns                              Column-based instead of row-based hexagonal grid?
   * @returns {DeepReadonly<TokenHexagonalOffsetsData>}    The hexagonal offsets
   * @internal
   */
  static _getHexagonalOffsets(
    width: number,
    height: number,
    shape: CONST.TokenShapeType,
    columns: boolean,
  ): DeepReadonly<TokenHexagonalOffsetsData>
  /**
   * The cache of hexagonal shapes.
   * @type {Map<string, DeepReadonly<TokenHexagonalShapeData>>}
   */
  static #hexagonalShapes: Map<string, DeepReadonly<TokenHexagonalShapeData>>
  /**
   * Get the hexagonal shape given the type, width, and height.
   * @param {number} width                                    The width of the Token (positive)
   * @param {number} height                                   The height of the Token (positive)
   * @param {TokenShapeType} shape                            The shape (one of {@link CONST.TOKEN_SHAPES})
   * @param {boolean} columns                                 Column-based instead of row-based hexagonal grid?
   * @returns {DeepReadonly<TokenHexagonalShapeData>|null}    The hexagonal shape or null if there is no shape
   *                                                          for the given combination of arguments
   */
  static #getHexagonalShape(
    width: number,
    height: number,
    shape: CONST.TokenShapeType,
    columns: boolean,
  ): DeepReadonly<TokenHexagonalShapeData> | null
  /**
   * Create the row-based hexagonal ellipse/trapezoid given the type, width, and height.
   * @param {number} width                   The width of the Token (positive)
   * @param {number} height                  The height of the Token (positive)
   * @param {number} shape                   The shape type (must be ELLIPSE_1, ELLIPSE_1, TRAPEZOID_1, or TRAPEZOID_2)
   * @returns {TokenHexagonalShapeData|null} The hexagonal shape or null if there is no shape for the given combination
   *                                         of arguments
   */
  static #createHexagonalEllipseOrTrapezoid(
    width: number,
    height: number,
    shape: number,
  ): TokenHexagonalShapeData | null
  /**
   * Create the row-based hexagonal rectangle given the type, width, and height.
   * @param {number} width                      The width of the Token (positive)
   * @param {number} height                     The height of the Token (positive)
   * @param {TokenShapeType} shape              The shape type (must be RECTANGLE_1 or RECTANGLE_2)
   * @returns {TokenHexagonalShapeData|null}    The hexagonal shape or null if there is no shape
   *                                            for the given combination of arguments
   */
  static #createHexagonalRectangle(
    width: number,
    height: number,
    shape: CONST.TokenShapeType,
  ): TokenHexagonalShapeData | null
  /** @inheritDoc */
  static migrateData(data: any): object
  /** @inheritdoc */
  static shimData(data: any, options: any): object
  constructor(
    data?: Partial<TokenData> | undefined,
    { parent, strict, ...options }?: foundry.abstract.types.DocumentConstructionContext | undefined,
  )
  /**
   * Prepare changes to a descendent delta collection.
   * @param {object} changes                  Candidate source changes.
   * @param {DataModelUpdateOptions} options  Options which determine how the new data is merged.
   * @internal
   */
  _prepareDeltaUpdate(changes?: object, options?: DataModelUpdateOptions): void
  /** @inheritDoc */
  updateSource(changes?: object, options?: object): object
  /** @inheritDoc */
  clone(
    data?: object,
    context?: object,
  ):
    | Document<object, foundry.abstract.types.DocumentConstructionContext>
    | Promise<Document<object, foundry.abstract.types.DocumentConstructionContext>>
  /**
   * Get the snapped position of the Token.
   * @param {Partial<ElevatedPoint & TokenDimensions>} [data] The position and dimensions
   * @returns {ElevatedPoint}                                 The snapped position
   */
  getSnappedPosition(data?: Partial<ElevatedPoint & TokenDimensions>): ElevatedPoint
  /**
   * Get the top-left grid offset of the Token.
   * @param {Partial<ElevatedPoint & TokenDimensions>} [data]      The position and dimensions
   * @returns {GridOffset3D}                                       The top-left grid offset
   * @internal
   */
  _positionToGridOffset(data?: Partial<ElevatedPoint & TokenDimensions>): GridOffset3D
  /**
   * Get the position of the Token from the top-left grid offset.
   * @param {GridOffset3D } offset                 The top-left grid offset
   * @param {Partial<TokenDimensions>} [data]      The dimensions that override the current dimensions
   * @returns {ElevatedPoint}                      The snapped position
   * @internal
   */
  _gridOffsetToPosition(offset: GridOffset3D, data?: Partial<TokenDimensions>): ElevatedPoint
  /**
   * Get the width and height of the Token in pixels.
   * @param {Partial<{width: number; height: number}>} [data] The width and/or height in grid units (must be positive)
   * @returns {{width: number; height: number}} The width and height in pixels
   */
  getSize(
    data?: Partial<{
      width: number
      height: number
    }>,
  ): {
    width: number
    height: number
  }
  /**
   * Get the center point of the Token.
   * @param {Partial<ElevatedPoint & TokenDimensions>} [data] The position and dimensions
   * @returns {ElevatedPoint}                                 The center point
   */
  getCenterPoint(data?: Partial<ElevatedPoint & TokenDimensions>): ElevatedPoint
  /**
   * Get the grid space polygon of the Token.
   * Returns undefined in gridless grids because there are no grid spaces.
   * @param {Partial<TokenDimensions>} [data] The dimensions
   * @returns {Point[]|void}                  The grid space polygon or undefined if gridless
   */
  getGridSpacePolygon(data?: Partial<TokenDimensions>): Point[] | void
  /**
   * Get the offsets of grid spaces that are occupied by this Token at the current or given position.
   * The grid spaces the Token occupies are those that are covered by the Token's shape in the snapped position.
   * Returns an empty array in gridless grids.
   * @param {Partial<Point & TokenDimensions>} [data] The position and dimensions
   * @returns {GridOffset2D[]}                        The offsets of occupied grid spaces
   */
  getOccupiedGridSpaceOffsets(data?: Partial<Point & TokenDimensions>): GridOffset2D[]
  /** @inheritDoc */
  getUserLevel(user: any): any
  /**
   * @deprecated since v12
   * @ignore
   */
  get effects(): never[]
  /**
   * @deprecated since v12
   * @ignore
   */
  get overlayEffect(): string
  /**
   * @deprecated since v13
   * @ignore
   */
  get hexagonalShape(): any
}
/**
 * A special subclass of EmbeddedDocumentField which allows construction of the ActorDelta to be lazily evaluated.
 */
export class ActorDeltaField extends fields.EmbeddedDocumentField {}
import type { DataModelUpdateOptions } from "@common/abstract/_types.mjs"
import type { DeepReadonly, ElevatedPoint, Point } from "../_types.mjs"
import Document from "../abstract/document.mjs"
import * as CONST from "../constants.mjs"
import { TextureData } from "../data/data.mjs"
import * as fields from "../data/fields.mjs"
import type { SquareGrid } from "../grid/_module.mjs"
import type { GridOffset2D, GridOffset3D } from "../grid/_types.mjs"
import type {
  TokenData,
  TokenDimensions,
  TokenHexagonalOffsetsData,
  TokenHexagonalShapeData,
  TokenPosition,
} from "./_types.mjs"
