/**
 * A mixin which decorates a PIXI.Filter or PIXI.Shader with common properties.
 * @category Mixins
 * @param {typeof PIXI.Filter|typeof PIXI.Shader} ShaderClass The parent ShaderClass class being mixed.
 */
export default function BaseShaderMixin(ShaderClass: typeof PIXI.Filter | typeof PIXI.Shader): {
  new (): object
  /**
   * Useful constant values computed at compile time
   * @type {string}
   */
  CONSTANTS: string
  /**
   * Fast approximate perceived brightness computation
   * Using Digital ITU BT.709 : Exact luminance factors
   * @type {string}
   */
  PERCEIVED_BRIGHTNESS: string
  /**
   * Simplex 3D noise functions
   * @type {string}
   */
  SIMPLEX_3D: string
  /**
   * Conversion functions for sRGB and Linear RGB.
   * @type {string}
   */
  COLOR_SPACES: string
  /**
   * Fractional Brownian Motion for a given number of octaves
   * @param {number} [octaves=4]
   * @param {number} [amp=1.0]
   * @returns {string}
   */
  FBM(octaves?: number, amp?: number): string
  /**
   * High Quality Fractional Brownian Motion.
   * @param {number} [octaves=3]               Number of octaves (iteration).
   * @param {string} [fbmFuncName="fbm"]       Name of the fbm function.
   * @param {string} [noiseFuncName="noise"]   Name of the noise function to use inside fbm (must return a `float`).
   * @param {string} [vecType="vec2"]          The vec type the function accepts as a parameter.
   * @returns {string} The formed fbm function
   */
  FBMHQ(octaves?: number, fbmFuncName?: string, noiseFuncName?: string, vecType?: string): string
  /**
   * Angular constraint working with coordinates on the range [-1, 1]
   * => coord: Coordinates
   * => angle: Angle in radians
   * => smoothness: Smoothness of the pie
   * => l: Length of the pie.
   * @type {string}
   */
  PIE: string
  /**
   * A conventional pseudo-random number generator with the "golden" numbers, based on uv position
   * @type {string}
   */
  PRNG_LEGACY: string
  /**
   * A pseudo-random number generator based on uv position which does not use cos/sin
   * This PRNG replaces the old PRNG_LEGACY to workaround some driver bugs
   * @type {string}
   */
  PRNG: string
  /**
   * A Vec2 pseudo-random generator, based on uv position
   * @type {string}
   */
  PRNG2D: string
  /**
   * A Vec3 pseudo-random generator, based on uv position
   * @type {string}
   */
  PRNG3D: string
  /**
   * A conventional noise generator
   * @type {string}
   */
  NOISE: string
  /**
   * Convert a Hue-Saturation-Brightness color to RGB - useful to convert polar coordinates to RGB
   * @type {string}
   */
  HSB2RGB: string
  /**
   * Declare a wave function in a shader -> wcos (default), wsin or wtan.
   * Wave on the [v1,v2] range with amplitude -> a and speed -> speed.
   * @param {string} [func="cos"]     the math function to use
   * @returns {string}
   */
  WAVE(func?: string): string
  /**
   * Rotation function.
   * @type {string}
   */
  ROTATION: string
  /**
   * Voronoi noise function. Needs PRNG2D and CONSTANTS.
   * @see {@link PRNG2D}
   * @see {@link CONSTANTS}
   * @type {string}
   */
  VORONOI: string
  /**
   * Enables GLSL 1.0 backwards compatibility in GLSL 3.00 ES vertex shaders.
   * @type {string}
   */
  GLSL1_COMPATIBILITY_VERTEX: string
  /**
   * Enables GLSL 1.0 backwards compatibility in GLSL 3.00 ES fragment shaders.
   * @type {string}
   */
  GLSL1_COMPATIBILITY_FRAGMENT: string
}
