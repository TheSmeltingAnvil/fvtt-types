/**
 * @import {LightingLevel} from "@common/constants.mjs"
 * @import {AdaptiveBackgroundShader, AdaptiveColorationShader, AdaptiveDarknessShader, AdaptiveIlluminationShader,
 *   AdaptiveLightingShader} from "../rendering/shaders/_module.mjs";
 * @import {BaseEffectSourceData} from "./base-effect-source.mjs";
 */
/**
 * @typedef RenderedEffectSourceData
 * @property {object} animation           An animation configuration for the source
 * @property {number|null} color          A color applied to the rendered effect
 * @property {number|null} seed           An integer seed to synchronize (or de-synchronize) animations
 * @property {boolean} preview            Is this source a temporary preview?
 */
/**
 * @typedef RenderedEffectSourceAnimationConfig
 * @property {string} [label]                                   The human-readable (localized) label for the animation
 * @property {Function} [animation]                             The animation function that runs every frame
 * @property {AdaptiveIlluminationShader} [illuminationShader]  A custom illumination shader used by this animation
 * @property {AdaptiveColorationShader} [colorationShader]      A custom coloration shader used by this animation
 * @property {AdaptiveBackgroundShader} [backgroundShader]      A custom background shader used by this animation
 * @property {AdaptiveDarknessShader} [darknessShader]          A custom darkness shader used by this animation
 * @property {number} [seed]                                    The animation seed
 * @property {number} [time]                                    The animation time
 */
/**
 * @typedef RenderedEffectLayerConfig
 * @property {typeof AdaptiveLightingShader} defaultShader      The default shader used by this layer
 * @property {PIXI.BLEND_MODES} blendMode                       The blend mode used by this layer
 */
/**
 * An abstract class which extends the base PointSource to provide common functionality for rendering.
 * This class is extended by both the LightSource and VisionSource subclasses.
 * @extends {BaseEffectSource<BaseEffectSourceData & RenderedEffectSourceData>}
 * @abstract
 */
export default class RenderedEffectSource extends BaseEffectSource<
  BaseEffectSourceData & RenderedEffectSourceData,
  PIXI.Polygon
> {
  /**
   * Keys of the data object which require shaders to be re-initialized.
   * @type {string[]}
   * @protected
   */
  protected static _initializeShaderKeys: string[]
  /**
   * Keys of the data object which require uniforms to be refreshed.
   * @type {string[]}
   * @protected
   */
  protected static _refreshUniformsKeys: string[]
  /**
   * Layers handled by this rendered source.
   * @type {Record<string, RenderedEffectLayerConfig>}
   * @protected
   */
  protected static get _layers(): Record<string, RenderedEffectLayerConfig>
  /**
   * The offset in pixels applied to create soft edges.
   * @type {number}
   */
  static EDGE_OFFSET: number
  /** @inheritDoc */
  static defaultData: {
    animation: object
    seed: null
    preview: boolean
    color: null
    /**
     * The x-coordinate of the source location
     */
    x: number
    /**
     * The y-coordinate of the source location
     */
    y: number
    /**
     * The elevation of the point source
     */
    elevation: number
    /**
     * Whether or not the source is disabled
     */
    disabled: boolean
  }
  /**
   * Create a new shader using a provider shader class
   * @param {typeof AdaptiveLightingShader} cls   The shader class to create
   * @param {PointSourceMesh} container           The container which requires a new shader
   * @returns {AdaptiveLightingShader}            The shader instance used
   */
  static #createShader(cls: typeof AdaptiveLightingShader, container: PointSourceMesh): AdaptiveLightingShader
  /**
   * Get corrected level according to level and active vision mode data.
   * @param {LightingLevel} level  The lighting level (one of {@link CONST.LIGHTING_LEVELS})
   * @returns {number} The corrected level.
   */
  static getCorrectedLevel(level: LightingLevel): number
  /**
   * Get corrected color according to level, dim color, bright color and background color.
   * @param {LightingLevel} level The lighting level (one of {@link CONST.LIGHTING_LEVELS})
   * @param {Color} colorDim
   * @param {Color} colorBright
   * @param {Color} [colorBackground]
   * @returns {Color}
   */
  static getCorrectedColor(level: LightingLevel, colorDim: Color, colorBright: Color, colorBackground?: Color): Color
  constructor(options?: import("./base-effect-source.mjs").BaseEffectSourceOptions | undefined)
  /**
   * The animation configuration applied to this source
   * @type {RenderedEffectSourceAnimationConfig}
   */
  animation: RenderedEffectSourceAnimationConfig
  /**
   * @typedef RenderedEffectSourceLayer
   * @property {boolean} active             Is this layer actively rendered?
   * @property {boolean} reset              Do uniforms need to be reset?
   * @property {boolean} suppressed         Is this layer temporarily suppressed?
   * @property {PointSourceMesh} mesh       The rendered mesh for this layer
   * @property {AdaptiveLightingShader} shader  The shader instance used for the layer
   */
  /**
   * Track the status of rendering layers
   * @type {{
   *  background: RenderedEffectSourceLayer,
   *  coloration: RenderedEffectSourceLayer,
   *  illumination: RenderedEffectSourceLayer
   * }}
   */
  layers: {
    background: {
      /**
       * Is this layer actively rendered?
       */
      active: boolean
      /**
       * Do uniforms need to be reset?
       */
      reset: boolean
      /**
       * Is this layer temporarily suppressed?
       */
      suppressed: boolean
      /**
       * The rendered mesh for this layer
       */
      mesh: PointSourceMesh
      /**
       * The shader instance used for the layer
       */
      shader: AdaptiveLightingShader
    }
    coloration: {
      /**
       * Is this layer actively rendered?
       */
      active: boolean
      /**
       * Do uniforms need to be reset?
       */
      reset: boolean
      /**
       * Is this layer temporarily suppressed?
       */
      suppressed: boolean
      /**
       * The rendered mesh for this layer
       */
      mesh: PointSourceMesh
      /**
       * The shader instance used for the layer
       */
      shader: AdaptiveLightingShader
    }
    illumination: {
      /**
       * Is this layer actively rendered?
       */
      active: boolean
      /**
       * Do uniforms need to be reset?
       */
      reset: boolean
      /**
       * Is this layer temporarily suppressed?
       */
      suppressed: boolean
      /**
       * The rendered mesh for this layer
       */
      mesh: PointSourceMesh
      /**
       * The shader instance used for the layer
       */
      shader: AdaptiveLightingShader
    }
  }
  /**
   * The color of the source as an RGB vector.
   * @type {[number, number, number]|null}
   */
  colorRGB: [number, number, number] | null
  /**
   * PIXI Geometry generated to draw meshes.
   * @type {PIXI.Geometry|null}
   * @protected
   */
  protected _geometry: PIXI.Geometry | null
  /**
   * Is the rendered source animated?
   * @type {boolean}
   */
  get isAnimated(): boolean
  /**
   * Has the rendered source at least one active layer?
   * @type {boolean}
   */
  get hasActiveLayer(): boolean
  /**
   * Is this RenderedEffectSource a temporary preview?
   * @returns {boolean}
   */
  get isPreview(): boolean
  /**
   * A convenience accessor to the background layer mesh.
   * @type {PointSourceMesh}
   */
  get background(): PointSourceMesh
  /**
   * A convenience accessor to the coloration layer mesh.
   * @type {PointSourceMesh}
   */
  get coloration(): PointSourceMesh
  /**
   * A convenience accessor to the illumination layer mesh.
   * @type {PointSourceMesh}
   */
  get illumination(): PointSourceMesh
  /** @inheritDoc */
  _initialize(data: any): void
  /**
   * Decide whether to render soft edges with a blur.
   * @protected
   */
  protected _initializeSoftEdges(): void
  /** @override */
  override _configure(changes: any): void
  /**
   * Configure which shaders are used for each rendered layer.
   * @returns {Record<string, typeof AdaptiveLightingShader>}
   *   An object whose keys are layer identifiers and whose values are shader classes.
   * @protected
   */
  protected _configureShaders(): Record<string, typeof AdaptiveLightingShader>
  /**
   * Specific configuration for a layer.
   * @param {object} layer
   * @param {string} layerId
   * @protected
   */
  protected _configureLayer(layer: object, layerId: string): void
  /**
   * Create the geometry for the source shape that is used in shaders and compute its bounds for culling purpose.
   * Triangulate the form and create buffers.
   * @protected
   * @abstract
   */
  protected _updateGeometry(): void
  /**
   * Render the containers used to represent this light source within the LightingLayer
   * @returns {Record<string, PIXI.Mesh|null>}
   */
  drawMeshes(): Record<string, PIXI.Mesh | null>
  /**
   * Create a Mesh for a certain rendered layer of this source.
   * @param {string} layerId            The layer key in layers to draw
   * @returns {PIXI.Mesh|null}          The drawn mesh for this layer, or null if no mesh is required
   * @protected
   */
  protected _drawMesh(layerId: string): PIXI.Mesh | null
  /**
   * Update shader uniforms used by every rendered layer.
   * @param {AbstractBaseShader} shader
   * @protected
   */
  protected _updateCommonUniforms(shader: AbstractBaseShader): void
  /**
   * Update shader uniforms used for the background layer.
   * @protected
   */
  protected _updateBackgroundUniforms(): void
  /**
   * Update shader uniforms used for the coloration layer.
   * @protected
   */
  protected _updateColorationUniforms(): void
  /**
   * Update shader uniforms used for the illumination layer.
   * @protected
   */
  protected _updateIlluminationUniforms(): void
  /**
   * Animate the PointSource, if an animation is enabled and if it currently has rendered containers.
   * @param {number} dt         Delta time.
   */
  animate(dt: number): any
  /**
   * Generic time-based animation used for Rendered Point Sources.
   * @param {number} dt           Delta time.
   * @param {object} [options]    Options which affect the time animation
   * @param {number} [options.speed=5]            The animation speed, from 0 to 10
   * @param {number} [options.intensity=5]        The animation intensity, from 1 to 10
   * @param {boolean} [options.reverse=false]     Reverse the animation direction
   */
  animateTime(
    dt: number,
    {
      speed,
      intensity,
      reverse,
    }?: {
      speed?: number | undefined
      intensity?: number | undefined
      reverse?: boolean | undefined
    },
  ): void
  #private
}
export type RenderedEffectSourceData = {
  /**
   * An animation configuration for the source
   */
  animation: object
  /**
   * A color applied to the rendered effect
   */
  color: number | null
  /**
   * An integer seed to synchronize (or de-synchronize) animations
   */
  seed: number | null
  /**
   * Is this source a temporary preview?
   */
  preview: boolean
}
export type RenderedEffectSourceAnimationConfig = {
  /**
   * The human-readable (localized) label for the animation
   */
  label?: string | undefined
  /**
   * The animation function that runs every frame
   */
  animation?: Function | undefined
  /**
   * A custom illumination shader used by this animation
   */
  illuminationShader?: AdaptiveIlluminationShader | undefined
  /**
   * A custom coloration shader used by this animation
   */
  colorationShader?: AdaptiveColorationShader | undefined
  /**
   * A custom background shader used by this animation
   */
  backgroundShader?: AdaptiveBackgroundShader | undefined
  /**
   * A custom darkness shader used by this animation
   */
  darknessShader?: AdaptiveDarknessShader | undefined
  /**
   * The animation seed
   */
  seed?: number | undefined
  /**
   * The animation time
   */
  time?: number | undefined
}
export type RenderedEffectLayerConfig = {
  /**
   * The default shader used by this layer
   */
  defaultShader: typeof AdaptiveLightingShader
  /**
   * The blend mode used by this layer
   */
  blendMode: PIXI.BLEND_MODES
}
import type { LightingLevel } from "@common/constants.mjs"
import Color from "@common/utils/color.mjs"
import PointSourceMesh from "../containers/elements/point-source-mesh.mjs"
import type {
  AdaptiveBackgroundShader,
  AdaptiveColorationShader,
  AdaptiveDarknessShader,
  AdaptiveIlluminationShader,
  AdaptiveLightingShader,
} from "../rendering/shaders/_module.mjs"
import type { BaseEffectSourceData } from "./base-effect-source.mjs"
import BaseEffectSource from "./base-effect-source.mjs"
