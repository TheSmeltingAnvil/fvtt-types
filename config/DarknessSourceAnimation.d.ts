import * as canvas from "../foundry/canvas/_module.js"

/**
 * A darkness source animation configuration object.
 */
export type DarknessSourceAnimationConfig = Record<
  string,
  {
    animation: Function
    darknessShader: typeof canvas.rendering.shaders.AdaptiveDarknessShader
    label: string
  }
>
