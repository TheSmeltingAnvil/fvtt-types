/**
 * @import Tile from "../../canvas/placeables/tile.mjs";
 * @import TileDocument from "../../documents/tile.mjs";
 * @import TilesLayer from "../../canvas/layers/tiles.mjs";
 */
/**
 * An implementation of the PlaceableHUD base class which renders a heads-up-display interface for Tile objects.
 * The TileHUD implementation can be configured and replaced via {@link CONFIG.Tile.hudClass}.
 * @extends {BasePlaceableHUD<Tile, TileDocument, TilesLayer>}
 * @mixes HandlebarsApplication
 */
export default class TileHUD extends BasePlaceableHUD<Tile, TileDocument, TilesLayer> {
    /** @inheritDoc */
    static DEFAULT_OPTIONS: {
        id: string;
        actions: {
            video: typeof TileHUD.#onControlVideo;
        };
    };
    /** @override */
    static override PARTS: {
        hud: {
            root: boolean;
            template: string;
        };
    };
    /**
     * Toggle playback of a video tile.
     * @this {TileHUD}
     * @param {PointerEvent} event
     * @param {HTMLButtonElement} target
     * @returns {Promise<void>}
     */
    static #onControlVideo(this: TileHUD, event: PointerEvent, target: HTMLButtonElement): Promise<void>;
    constructor(options?: Partial<foundry.applications.types.ApplicationConfiguration> | undefined);
    /** @inheritDoc */
    _prepareContext(options: any): Promise<{
        id: string;
        classes: string;
        appId: any;
        isGM: boolean;
        isGamePaused: boolean;
        icons: {
            combat: string;
            visibility: string;
            effects: string;
            lock: string;
            up: string;
            down: string;
            defeated: string;
            light: string;
            lightOff: string;
            template: string;
            sound: string;
            soundOff: string;
            doorClosed: string;
            doorOpen: string;
            doorSecret: string;
            doorLocked: string;
            wallDirection: string;
        };
        visibilityClass: string;
        lockedClass: string;
    } & {
        isVideo: boolean;
        videoIcon: string;
        videoTitle: string;
    }>;
}
import type Tile from "../../canvas/placeables/tile.mjs";
import type TileDocument from "../../documents/tile.mjs";
import type TilesLayer from "../../canvas/layers/tiles.mjs";
import BasePlaceableHUD from "./placeable-hud.mjs";
