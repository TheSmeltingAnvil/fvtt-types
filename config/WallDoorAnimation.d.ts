import { CanvasAnimationAttribute } from "foundry/canvas/animation/_types.js"

/**
 *
 */
export default interface WallDoorAnimationConfig {
  animate: WallDoorAnimationFunction
  duration: number
  easing?: string | Function
  initialize?: WallDoorAnimationHook
  label: string
  midpoint?: boolean
  postAnimate?: WallDoorAnimationHook
  preAnimate?: WallDoorAnimationHook
}

/**
 *
 */
export type WallDoorAnimationFunction = (open: boolean) => CanvasAnimationAttribute[]

//** */
export type WallDoorAnimationHook = (open: boolean) => Promise<void> | void
