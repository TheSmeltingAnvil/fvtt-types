/**
 * @import {BaseEffectSourceData} from "./base-effect-source.mjs";
 * @import {RenderedEffectSourceData} from "./rendered-effect-source.mjs";
 */
/**
 * @typedef VisionSourceData
 * @property {number} contrast            The amount of contrast
 * @property {number} attenuation         Strength of the attenuation between bright, dim, and dark
 * @property {number} saturation          The amount of color saturation
 * @property {number} brightness          The vision brightness.
 * @property {string} visionMode          The vision mode.
 * @property {number} lightRadius         The range of light perception.
 * @property {boolean} blinded            Is this vision source blinded?
 */
/**
 * A specialized subclass of RenderedEffectSource which represents a source of point-based vision.
 * @extends {RenderedEffectSource<BaseEffectSourceData & RenderedEffectSourceData & VisionSourceData, PointSourcePolygon>}
 */
export default class PointVisionSource {
  /**
   * The corresponding lighting levels for dim light.
   * @type {number}
   * @protected
   */
  protected static _dimLightingLevel: number
  /**
   * The corresponding lighting levels for bright light.
   * @type {number}
   * @protected
   */
  protected static _brightLightingLevel: number
  /** @inheritDoc */
  static defaultData: any
  /** @override */
  static override get _layers(): {
    background: {
      defaultShader: typeof BackgroundVisionShader
      blendMode: string
    }
    coloration: {
      defaultShader: typeof ColorationVisionShader
      blendMode: string
    }
    illumination: {
      defaultShader: typeof IlluminationVisionShader
      blendMode: string
    }
  }
  /**
   * The vision mode linked to this VisionSource
   * @type {VisionMode|null}
   */
  visionMode: VisionMode | null
  /**
   * The vision mode activation flag for handlers
   * @type {boolean}
   * @internal
   */
  _visionModeActivated: boolean
  /**
   * The unconstrained LOS polygon.
   * @type {PointSourcePolygon}
   */
  los: PointSourcePolygon
  /**
   * The polygon of light perception.
   * @type {PointSourcePolygon}
   */
  light: PointSourcePolygon
  /**
   * An alias for the shape of the vision source.
   * @type {PointSourcePolygon|PIXI.Polygon}
   */
  get fov(): PointSourcePolygon | PIXI.Polygon
  /**
   * If this vision source background is rendered into the lighting container.
   * @type {boolean}
   */
  get preferred(): boolean
  /**
   * Is the rendered source animated?
   * @type {boolean}
   */
  get isAnimated(): boolean
  /**
   * Light perception radius of this vision source, taking into account if the source is blinded.
   * @type {number}
   */
  get lightRadius(): number
  /** @override */
  override get radius(): any
  /**
   * Is this source temporarily blinded?
   * @type {boolean}
   */
  get isBlinded(): boolean
  /**
   * Records of blinding strings with a boolean value.
   * By default, if any of this record is true, the source is blinded.
   * @type {Record<string, boolean>}
   */
  blinded: Record<string, boolean>
  /**
   * Data overrides that could happen with blindness vision mode.
   * @type {object}
   */
  visionModeOverrides: object
  /** @inheritDoc */
  _initialize(data: any): void
  /** @inheritDoc */
  _createShapes(): void
  shape: any
  /**
   * Responsible for assigning the Vision Mode and calling the activation and deactivation handlers.
   * @protected
   */
  protected _updateVisionMode(): void
  /** @inheritDoc */
  _configure(changes: any): void
  /** @override */
  override _configureLayer(layer: any, layerId: any): void
  /** @inheritDoc */
  _getPolygonConfiguration(): any
  /**
   * Creates the polygon that represents light perception.
   * If the light perception radius is unconstrained, no new polygon instance is created;
   * instead the LOS polygon of this vision source is returned.
   * @returns {PointSourcePolygon}    The new polygon or `this.los`.
   * @protected
   */
  protected _createLightPolygon(): PointSourcePolygon
  /**
   * Create a restricted FOV polygon by limiting the radius of the unrestricted LOS polygon.
   * If the vision radius is unconstrained, no new polygon instance is created;
   * instead the LOS polygon of this vision source is returned.
   * @returns {PointSourcePolygon}    The new polygon or `this.los`.
   * @protected
   */
  protected _createRestrictedPolygon(): PointSourcePolygon
  /** @override */
  override _configureShaders(): object
  /** @inheritDoc */
  _updateColorationUniforms(): void
  /** @inheritDoc */
  _updateIlluminationUniforms(): void
  /** @inheritDoc */
  _updateBackgroundUniforms(): void
  /** @inheritDoc */
  _updateCommonUniforms(shader: any): void
  /**
   * Update layer uniforms according to vision mode uniforms, if any.
   * @param {AdaptiveVisionShader} shader        The shader being updated.
   * @param {Record<string, any>} vmUniforms     The targeted layer.
   * @protected
   */
  protected _updateVisionModeUniforms(shader: AdaptiveVisionShader, vmUniforms: Record<string, any>): void
  #private
}
export type VisionSourceData = {
  /**
   * The amount of contrast
   */
  contrast: number
  /**
   * Strength of the attenuation between bright, dim, and dark
   */
  attenuation: number
  /**
   * The amount of color saturation
   */
  saturation: number
  /**
   * The vision brightness.
   */
  brightness: number
  /**
   * The vision mode.
   */
  visionMode: string
  /**
   * The range of light perception.
   */
  lightRadius: number
  /**
   * Is this vision source blinded?
   */
  blinded: boolean
}
import BackgroundVisionShader from "../rendering/shaders/vision/background-vision.mjs"
import ColorationVisionShader from "../rendering/shaders/vision/coloration-vision.mjs"
import IlluminationVisionShader from "../rendering/shaders/vision/illumination-vision.mjs"
