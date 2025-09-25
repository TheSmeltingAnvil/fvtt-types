/**
 * A batch shader generator that could handle extra uniforms during initialization.
 * @param {string} vertexSrc              The vertex shader source
 * @param {string} fragTemplate           The fragment shader source template
 * @param {object | (maxTextures: number) => object} [uniforms]    Additional uniforms
 */
export default class BatchShaderGenerator {
  constructor(vertexSrc: any, fragTemplate: any, uniforms?: object)
  /** @override */
  override generateShader(maxTextures: any): any
  #private
}
