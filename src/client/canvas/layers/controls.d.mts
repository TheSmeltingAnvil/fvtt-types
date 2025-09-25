/**
 * @import {PingData, PingOptions} from "../interaction/_types.mjs";
 * @import BaseRuler from "../interaction/ruler/base-ruler.mjs";
 * @import {ElevatedPoint, Point, Rectangle} from "@common/_types.mjs";
 * @import User from "../../documents/user.mjs";
 * @import {LineIntersection} from "@common/utils/_types.mjs";
 */
/**
 * A CanvasLayer for displaying UI controls which are overlayed on top of other layers.
 *
 * We track three types of events:
 * 1) Cursor movement
 * 2) Ruler measurement
 * 3) Map pings
 */
export default class ControlsLayer extends InteractionLayer {
    /** @override */
    static override get layerOptions(): object;
    /**
     * A container of DoorControl instances
     * @type {PIXI.Container}
     */
    doors: PIXI.Container;
    /**
     * A container of pings interaction elements.
     * Contains pings elements.
     * @type {PIXI.Container}
     */
    pings: PIXI.Container;
    /**
     * A container of cursor interaction elements not bound to stage transforms.
     * Contains cursors elements.
     * @type {UnboundContainer}
     */
    cursors: UnboundContainer;
    /**
     * The ruler paths.
     * @type {PIXI.Container}
     * @internal
     */
    _rulerPaths: PIXI.Container;
    /**
     * A graphics instance used for drawing debugging visualization
     * @type {PIXI.Graphics}
     */
    debug: PIXI.Graphics;
    /**
     * The Canvas selection rectangle
     * @type {PIXI.Graphics}
     */
    select: PIXI.Graphics;
    /**
     * A convenience accessor to the Ruler for the active game user
     * @type {BaseRuler}
     */
    get ruler(): BaseRuler;
    /**
     * Get the Ruler instance for a specific User ID.
     * @param {string} userId    The User ID
     * @returns {BaseRuler|null}
     */
    getRulerForUser(userId: string): BaseRuler | null;
    /**
     * Get the Cursor instance for a specific User ID.
     * @param {string} userId    The User ID
     * @returns {Cursor|null}
     */
    getCursorForUser(userId: string): Cursor | null;
    /** @override */
    override _tearDown(options: any): Promise<void>;
    /**
     * Draw the cursors container
     */
    drawCursors(): void;
    /**
     * Create and add Ruler instances for every game User.
     */
    drawRulers(): Promise<void>;
    /**
     * Draw door control icons to the doors container.
     */
    drawDoors(): void;
    /**
     * Draw the select rectangle given an event originated within the base canvas layer
     * @param {Rectangle} coords    The rectangle
     */
    drawSelect({ x, y, width, height }: Rectangle): void;
    /**
     * Handle mousemove events on the game canvas to broadcast activity. With SHOW_CURSOR permission enabled,
     * the user's cursor position is transmitted.
     * @param {PIXI.Point} currentPos
     * @internal
     */
    _onMouseMove(currentPos: PIXI.Point): void;
    /**
     * Handle pinging the canvas.
     * @param {PIXI.FederatedEvent}   event   The triggering canvas interaction event.
     * @param {PIXI.Point}            origin  The local canvas coordinates of the mousepress.
     * @protected
     */
    protected _onLongPress(event: PIXI.FederatedEvent, origin: PIXI.Point): Promise<boolean> | undefined;
    /**
     * Handle the canvas panning to a new view.
     * @protected
     */
    protected _onCanvasPan(): void;
    /**
     * Create and draw the Cursor object for a given User.
     * @param {User} user   The User document for whom to draw the cursor Container
     * @returns {Cursor}
     */
    drawCursor(user: User): Cursor;
    /**
     * Create and draw the Ruler object for a given User.
     * @param {User} user               The User document for whom to draw the Ruler
     * @returns {Promise<BaseRuler>}    The Ruler instance
     */
    drawRuler(user: User): Promise<BaseRuler>;
    /**
     * Update the cursor when the user moves to a new position
     * @param {User} user           The User for whom to update the cursor
     * @param {Point} position      The new cursor position
     */
    updateCursor(user: User, position: Point): void;
    /**
     * Update the Ruler for a User given the provided path.
     * @param {User} user                                             The User for whom to update the Ruler
     * @param {{path: ElevatedPoint[], hidden: boolean}|null} data    The path and hidden state of the Ruler
     */
    updateRuler(user: User, data: {
        path: ElevatedPoint[];
        hidden: boolean;
    } | null): Promise<void>;
    /**
     * Handle a broadcast ping.
     * @see {@link ControlsLayer#drawPing}
     * @param {User} user                 The user who pinged.
     * @param {Point} position            The position on the canvas that was pinged.
     * @param {PingData} [data]           The broadcast ping data.
     * @returns {Promise<boolean>}        A promise which resolves once the Ping has been drawn and animated
     */
    handlePing(user: User, position: Point, { scene, style, pull, zoom, ...pingOptions }?: PingData): Promise<boolean>;
    /**
     * @typedef PingOffscreenDrawOptions
     * @param {string} [style="arrow"]  The style of ping to draw, from {@link CONFIG.Canvas.pings}. Default: `"arrow"`.
     * @param {User} [user]             The User who pinged.
     */
    /**
     * Draw a ping at the edge of the viewport, pointing to the location of an off-screen ping.
     * @see {@link ControlsLayer#drawPing}
     * @param {Point} position                                    The coordinates of the off-screen ping.
     * @param {PingOptions & PingOffscreenDrawOptions} [options]  Additional options to configure how the ping is drawn.
     * @returns {Promise<boolean>}  A promise which resolves once the Ping has been drawn and animated.
     */
    drawOffscreenPing(position: Point, { style, user, ...pingOptions }?: PingOptions & any): Promise<boolean>;
    /**
     * @typedef PingDrawOptions
     * @param {string} [style="pulse"]  The style of ping to draw, from  {@link CONFIG.Canvas.pings}. Default: `"pulse"`.
     * @param {User} [user]             The User who pinged.
     */
    /**
     * Draw a ping on the canvas.
     * @see {@link foundry.canvas.interaction.Ping#animate}
     * @param {Point} position                           The position on the canvas that was pinged.
     * @param {PingOptions & PingDrawOptions} [options]  Additional options to configure how the ping is drawn.
     * @returns {Promise<boolean>}  A promise which resolves once the Ping has been drawn and animated.
     */
    drawPing(position: Point, { style, user, ...pingOptions }?: PingOptions & any): Promise<boolean>;
    #private;
}
import InteractionLayer from "./base/interaction-layer.mjs";
import { UnboundContainer } from "../containers/_module.mjs";
import type BaseRuler from "../interaction/ruler/base-ruler.mjs";
import Cursor from "../containers/elements/cursor.mjs";
import type { Rectangle } from "@common/_types.mjs";
import type User from "../../documents/user.mjs";
import type { Point } from "@common/_types.mjs";
import type { ElevatedPoint } from "@common/_types.mjs";
import type { PingData } from "../interaction/_types.mjs";
import type { PingOptions } from "../interaction/_types.mjs";
