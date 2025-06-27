import * as audio from "foundry/audio/_module.js"
import * as canvas from "foundry/canvas/_module.js"

export interface AmbientSoundPlaybackConfig {
  /** The Sound node which should be controlled for playback */
  sound: audio.Sound
  /** The SoundSource which defines the area of effect for the sound */
  // @ts-expect-error Should fix.
  source: PointSoundSource<audio.AmbientSound>
  /** An AmbientSound object responsible for the sound, or undefined */
  // @ts-expect-error Should fix.
  object?: audio.AmbientSound
  /** The coordinates of the closest listener or undefined if there is none */
  listener?: foundry.types.ElevatedPoint
  /** The minimum distance between a listener and the AmbientSound origin */
  distance: number
  /** Is the closest listener muffled */
  muffled: boolean
  /** Is playback constrained or muffled by walls? */
  walls: boolean
  /** The final volume at which the Sound should be played */
  volume: number
}

export interface CanvasHistoryEvent<TData extends object = object> {
  /** The type of operation stored as history */
  type: "create" | "update" | "delete"
  /** The data corresponding to the action which may later be un-done */
  data: TData[]
  /** The options of the undo operation */
  options: object
}

export interface PlaceablesLayerOptions extends canvas.layers.CanvasLayerOptions {
  /** Can placeable objects in this layer be controlled? */
  controllableObjects: boolean
  /** Can placeable objects in this layer be rotated? */
  rotatableObjects: boolean
  /** Confirm placeable object deletion with a dialog? */
  confirmDeleteKey: boolean
  /** The class used to represent an object on this layer. */
  objectClass: AbstractConstructorOf<canvas.placeables.PlaceableObject>
  /** Does this layer use a quadtree to track object positions? */
  quadtree: boolean
}

/**
 * The sight part of {@link foundry.canvas.layers.types.CanvasVisionContainer}.
 * The blend mode is MAX_COLOR.
 */
export interface CanvasVisionContainerSight extends PIXI.Graphics {
  /** FOV that should not be committed to fog exploration. */
  preview: PIXI.Graphics
}

/**
 * The light part of {@link foundry.canvas.layers.types.CanvasVisionContainer}.
 * The blend mode is MAX_COLOR.
 */
export interface CanvasVisionContainerLight extends PIXI.Graphics {
  /** FOV that should not be committed to fog exploration. */
  preview: PIXI.Graphics
  /** The sprite with the texture of FOV of cached light sources. */
  // @ts-expect-error Should fix.
  cached: SpriteMesh
  /** The light perception polygons of vision sources and the FOV of vision sources that provide vision. */
  mask: CanvasVisionContainerSight
}

/**
 * The sight part of {@link foundry.canvas.layers.types.CanvasVisionContainer}.
 * The blend mode is ERASE.
 */
export interface CanvasVisionContainerDarkness extends PIXI.Graphics {
  /** Darkness source erasing fog of war. */
  darkness: PIXI.Graphics
}

/** The currently visible areas. */
export interface CanvasVisionContainer extends PIXI.Container {
  /** Areas visible because of light sources and light perception. */
  light: CanvasVisionContainerLight
  /** Areas visible because of FOV of vision sources. */
  sight: CanvasVisionContainerSight
  /** Areas visible because of FOV of vision sources. */
  darkness: CanvasVisionContainerDarkness
}
