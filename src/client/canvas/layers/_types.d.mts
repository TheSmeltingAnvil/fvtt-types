export type AmbientSoundPlaybackConfig = {
    /**
     * The Sound node which should be controlled for playback
     */
    sound: Sound;
    /**
     * The SoundSource which defines the area of effect
     *                        for the sound
     */
    source: PointSoundSource;
    /**
     * An AmbientSound object responsible for the sound, or undefined
     */
    object: AmbientSound;
    /**
     * The coordinates of the closest listener or undefined if there is none
     */
    listener: ElevatedPoint;
    /**
     * The minimum distance between a listener and the AmbientSound origin
     */
    distance: number;
    /**
     * Is the closest listener muffled
     */
    muffled: boolean;
    /**
     * Is playback constrained or muffled by walls?
     */
    walls: boolean;
    /**
     * The final volume at which the Sound should be played
     */
    volume: number;
};
export type CanvasHistoryEvent = {
    /**
     * The type of operation stored as history
     */
    type: "create" | "update" | "delete";
    /**
     * The data corresponding to the action which may later be un-done
     */
    data: object[];
    /**
     * The options of the undo operation
     */
    options: object;
};
export type PlaceablesLayerOptions = {
    /**
     * Can placeable objects in this layer be controlled?
     */
    controllableObjects: boolean;
    /**
     * Can placeable objects in this layer be rotated?
     */
    rotatableObjects: boolean;
    /**
     * Confirm placeable object deletion with a dialog?
     */
    confirmDeleteKey: boolean;
    /**
     * The class used to represent an object on this layer.
     */
    objectClass: PlaceableObject;
    /**
     * Does this layer use a quadtree to track object positions?
     */
    quadtree: boolean;
};
export type _CanvasVisionContainerSight = {
    /**
     * FOV that should not be committed to fog exploration.
     */
    preview: PIXI.LegacyGraphics;
};
/**
 * The sight part of {@link foundry.canvas.layers.types.CanvasVisionContainer}.
 * The blend mode is MAX_COLOR.
 */
export type CanvasVisionContainerSight = PIXI.LegacyGraphics & _CanvasVisionContainerSight;
export type _CanvasVisionContainerLight = {
    /**
     * FOV that should not be committed to fog exploration.
     */
    preview: PIXI.LegacyGraphics;
    /**
     * The sprite with the texture of FOV of cached light sources.
     */
    cached: SpriteMesh;
    /**
     * The light perception polygons of vision
     * sources and the FOV of vision sources that
     * provide vision.
     */
    mask: PIXI.LegacyGraphics & {
        preview: PIXI.LegacyGraphics;
    };
};
/**
 * The light part of {@link foundry.canvas.layers.types.CanvasVisionContainer}.
 * The blend mode is MAX_COLOR.
 */
export type CanvasVisionContainerLight = PIXI.LegacyGraphics & _CanvasVisionContainerLight;
export type _CanvasVisionContainerDarkness = {
    /**
     * Darkness source erasing fog of war.
     */
    darkness: PIXI.LegacyGraphics;
};
/**
 * The sight part of {@link foundry.canvas.layers.types.CanvasVisionContainer}.
 * The blend mode is ERASE.
 */
export type CanvasVisionContainerDarkness = PIXI.LegacyGraphics & _CanvasVisionContainerDarkness;
export type _CanvasVisionContainer = {
    /**
     * Areas visible because of light sources and light perception.
     */
    light: CanvasVisionContainerLight;
    /**
     * Areas visible because of FOV of vision sources.
     */
    sight: CanvasVisionContainerSight;
    /**
     * Areas erased by darkness sources.
     */
    darkness: CanvasVisionContainerDarkness;
};
/**
 * The currently visible areas.
 */
export type CanvasVisionContainer = PIXI.Container & _CanvasVisionContainer;
import type Sound from "../../audio/sound.mjs";
import type PointSoundSource from "../sources/point-sound-source.mjs";
import type { AmbientSound } from "../placeables/_module.mjs";
import type { ElevatedPoint } from "../../_types.mjs";
import type { PlaceableObject } from "../placeables/_module.mjs";
