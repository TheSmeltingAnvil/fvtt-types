import * as canvas from "../foundry/canvas/_module.js"

/**
 * A light source animation configuration object.
 */
export type LightSourceAnimationConfig = Record<
  string,
  {
    animation: Function
    backgroundShader?: typeof canvas.rendering.shaders.AdaptiveBackgroundShader
    colorationShader: typeof canvas.rendering.shaders.AdaptiveColorationShader
    illuminationShader?: typeof canvas.rendering.shaders.AdaptiveIlluminationShader
    label: string
  }
>
