/**
 * @import {TokenMeasureMovementPathOptions, TokenMovementCostFunction} from "../_types.mjs";
 * @import TokenDocument from "@client/documents/token.mjs";
 */
/**
 * The base TerrainData.
 * @template TerrainEffect
 * @abstract
 */
export class BaseTerrainData<TerrainEffect> extends DataModel<
  object,
  foundry.abstract.types.DataModelConstructionContext
> {
  /**
   * Create the terrain data from the given array of terrain effects.
   * The type of the terrain effects and data is system-defined.
   * The terrain effects are not passed in any particular order.
   * Ownership of the array is passed to this function.
   * This function must return null if the array of terrain effects is empty.
   * @param {TerrainEffect[]} effects                  An array of terrain effects
   * @returns {BaseTerrainData<TerrainEffect>|null}    The terrain data or null
   * @abstract
   */
  static resolveTerrainEffects(effects: TerrainEffect[]): BaseTerrainData<TerrainEffect> | null
  /**
   * Create the terrain movement cost function for the given token.
   * Only movement cost that is caused by the terrain should be calculated by this function,
   * which includes the base movement cost.
   * Extra movement cost unrelated to terrain must be calculated in
   * {@link foundry.canvas.placeables.Token#_getMovementCostFunction}.
   * In square and hexagonal grids it calculates the cost for single grid space move between two grid space offsets.
   * For tokens that occupy more than one grid space the cost of movement is calculated as the median of all individual
   * grid space moves unless the cost of any of these is infinite, in which case total cost is always infinite.
   * In gridless grids the `from` and `to` parameters of the cost function are top-left offsets.
   * If the movement cost function is undefined, the cost equals the distance moved.
   * @param {TokenDocument} token                          The Token that moves
   * @param {TokenMeasureMovementPathOptions} [options]    Additional options that affect cost calculations
   * @returns {TokenMovementCostFunction|void}
   * @abstract
   */
  static getMovementCostFunction(
    token: TokenDocument,
    options?: TokenMeasureMovementPathOptions,
  ): TokenMovementCostFunction | void
  constructor(
    data?: object | undefined,
    { parent, strict, ...options }?: foundry.abstract.types.DataModelConstructionContext | undefined,
  )
  /**
   * Is this terrain data the same as some other terrain data?
   * @param {any} other    Some other terrain data
   * @returns {boolean}    Are the terrain datas equal?
   * @abstract
   */
  equals(other: any): boolean
}
/**
 * The core TerrainData implementation.
 * @extends {BaseTerrainData<{name: "difficulty", difficulty: number}>}
 *
 * @property {number} difficulty    The difficulty of the terrain (the movement cost multiplier)
 */
export class TerrainData extends BaseTerrainData<{
  name: "difficulty"
  difficulty: number
}> {
  /** @override */
  static override defineSchema(): {
    difficulty: fields.NumberField
  }
  /** @override */
  static override resolveTerrainEffects(effects: any): TerrainData | null
  /** @override */
  static override getMovementCostFunction(
    token: any,
    options: any,
  ): (from: any, to: any, distance: any, segment: any) => number
  constructor(
    data?: object | undefined,
    { parent, strict, ...options }?: foundry.abstract.types.DataModelConstructionContext | undefined,
  )
  /** @inheritDoc */
  _initialize(options: any): void
  /** @override */
  override equals(other: any): boolean
}
import type TokenDocument from "@client/documents/token.mjs"
import DataModel from "../../common/abstract/data.mjs"
import * as fields from "../../common/data/fields.mjs"
