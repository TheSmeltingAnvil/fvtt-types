/**
 * @import Collection from "@common/utils/collection.mjs";
 * @import {ElevatedPoint, Point} from "../../_types.mjs";
 * @import {AmbientSoundPlaybackConfig} from "./_types.mjs";
 * @import {PointEffectSourceData} from "../sources/point-effect-source.mjs";
 * @import {PositionalSoundPlaybackOptions} from "@client/audio/sound.mjs";
 */
/**
 * This Canvas Layer provides a container for AmbientSound objects.
 * @category Canvas
 */
export default class SoundsLayer extends PlaceablesLayer {
    /** @inheritdoc */
    static get layerOptions(): object;
    /** @override */
    static override prepareSceneControls(): {
        name: string;
        order: number;
        title: string;
        layer: string;
        icon: string;
        visible: boolean;
        onChange: (_event: any, active: any) => void;
        onToolChange: () => any;
        tools: {
            sound: {
                name: string;
                order: number;
                title: string;
                icon: string;
                toolclip: {
                    src: string;
                    heading: string;
                    items: import("../../applications/ui/scene-controls.mjs").ToolclipConfigurationItem[];
                };
            };
            preview: {
                name: string;
                order: number;
                title: string;
                icon: string;
                toggle: boolean;
                active: any;
                onChange: (_event: any, toggled: any) => void;
                toolclip: {
                    src: string;
                    heading: string;
                    items: {
                        paragraph: string;
                    }[];
                };
            };
            clear: {
                name: string;
                order: number;
                title: string;
                icon: string;
                onChange: () => any;
                button: boolean;
            };
        };
        activeTool: string;
    };
    constructor(...args: any[]);
    /**
     * Track whether to actively preview ambient sounds with mouse cursor movements
     * @type {boolean}
     */
    livePreview: boolean;
    /**
     * A mapping of ambient audio sources which are active within the rendered Scene
     * @type {Collection<string, PointSoundSource>}
     */
    sources: Collection<string, PointSoundSource>;
    /**
     * Initialize all AmbientSound sources which are present on this layer
     */
    initializeSources(): void;
    /**
     * Update all AmbientSound effects in the layer by toggling their playback status.
     * Sync audio for the positions of tokens which are capable of hearing.
     * @param {object} [options={}]   Additional options forwarded to AmbientSound synchronization
     */
    refresh(options?: object): number | undefined;
    /**
     * Preview ambient audio for a given position
     * @param {Point|ElevatedPoint} position    The position to preview
     */
    previewSound(position: Point | ElevatedPoint): void;
    /**
     * Terminate playback of all ambient audio sources
     */
    stopAll(): void;
    /**
     * Get an array of listener positions for Tokens which are able to hear environmental sound.
     * @returns {ElevatedPoint[]}
     */
    getListenerPositions(): ElevatedPoint[];
    /**
     * Sync the playing state and volume of all AmbientSound objects based on the position of listener points
     * @param {ElevatedPoint[]} listeners    Locations of listeners which have the capability to hear
     * @param {object} [options={}]          Additional options forwarded to AmbientSound synchronization
     * @protected
     */
    protected _syncPositions(listeners: ElevatedPoint[], options?: object): void;
    /**
     * Configure playback by assigning the muffled state and final playback volume for the sound.
     * This method should mutate the config object by assigning the volume and muffled properties.
     * @param {AmbientSoundPlaybackConfig} config
     * @internal
     */
    _configurePlayback(config: AmbientSoundPlaybackConfig): void;
    /**
     * Actions to take when the darkness level of the Scene is changed
     * @param {PIXI.FederatedEvent} event
     * @internal
     */
    _onDarknessChange(event: PIXI.FederatedEvent): void;
    /**
     * Play a one-shot Sound originating from a predefined point on the canvas.
     * The sound plays locally for the current client only.
     * To play a sound for all connected clients use {@link SoundsLayer#emitAtPosition}.
     *
     * @param {string} src                    The sound source path to play
     * @param {Point|ElevatedPoint} origin    The canvas coordinates from which the sound originates
     * @param {number} radius                 The radius of effect in distance units
     * @param {PositionalSoundPlaybackOptions} options  Options passed to {@link Sound#playAtPosition}
     * @returns {Promise<Sound|null>}         A Promise which resolves to the played Sound, or null
     *
     * @example Play the sound of a trap springing
     * ```js
     * const src = "modules/my-module/sounds/spring-trap.ogg";
     * const origin = {x: 5200, y: 3700};  // The origin point for the sound
     * const radius = 30;                  // Audible in a 30-foot radius
     * await canvas.sounds.playAtPosition(src, origin, radius);
     * ```
     *
     * @example A Token casts a spell
     * ```js
     * const src = "modules/my-module/sounds/spells-sprite.ogg";
     * const origin = token.center;         // The origin point for the sound
     * const radius = 60;                   // Audible in a 60-foot radius
     * await canvas.sounds.playAtPosition(src, origin, radius, {
     *   walls: false,                      // Not constrained by walls with a lowpass muffled effect
     *   muffledEffect: {type: "lowpass", intensity: 6},
     *   sourceData: {
     *     angle: 120,                      // Sound emitted at a limited angle
     *     rotation: 270                    // Configure the direction of sound emission
     *   }
     *   playbackOptions: {
     *     loopStart: 12,                   // Audio sprite timing
     *     loopEnd: 16,
     *     fade: 300,                      // Fade-in 300ms
     *     onended: () => console.log("Do something after the spell sound has played")
     *   }
     * });
     * ```
     */
    playAtPosition(src: string, origin: Point | ElevatedPoint, radius: number, options?: PositionalSoundPlaybackOptions): Promise<Sound | null>;
    /**
     * Emit playback to other connected clients to occur at a specified position.
     * @param {...*} args           Arguments passed to SoundsLayer#playAtPosition
     * @returns {Promise<void>}     A Promise which resolves once playback for the initiating client has completed
     */
    emitAtPosition(...args: any[]): Promise<void>;
    /**
     * Handle mouse cursor movements which may cause ambient audio previews to occur
     * @param {PIXI.Point} currentPos
     * @internal
     */
    _onMouseMove(currentPos: PIXI.Point): void;
    /**
     * Handle PlaylistSound document drop data.
     * @param {DragEvent} event  The drag drop event
     * @param {object} data      The dropped transfer data.
     * @protected
     */
    protected _onDropData(event: DragEvent, data: object): Promise<false | foundry.canvas.placeables.PlaceableObject>;
    #private;
}
import PlaceablesLayer from "./base/placeables-layer.mjs";
import type Collection from "@common/utils/collection.mjs";
import type { Point } from "../../_types.mjs";
import type { ElevatedPoint } from "../../_types.mjs";
import type { AmbientSoundPlaybackConfig } from "./_types.mjs";
import type { PositionalSoundPlaybackOptions } from "@client/audio/sound.mjs";
import Sound from "../../audio/sound.mjs";
