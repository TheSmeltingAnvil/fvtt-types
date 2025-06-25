import * as foundry from "../foundry/_module.js"

interface _StatusEffectConfig {
  /**
   * Should this effect appear in the Token HUD? This effect is only selectable in the Token HUD
   * if the Token's Actor sub-type is one of the configured ones.
   */
  hud?: boolean | { actorTypes?: string[] }
  /**
   * Deprecated alias for "img".
   * @deprecated Use "img" instead.
   */
  icon?: string
  /**
   * A string identifier for the effect.
   */
  id: string
  /**
   * Deprecated alias for "name".
   * @deprecated Use "name" instead.
   */
  label?: string
}

export type StatusEffectConfig = _StatusEffectConfig & Partial<foundry.documents.types.ActiveEffectData>
