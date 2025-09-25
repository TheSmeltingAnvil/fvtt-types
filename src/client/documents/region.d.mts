/**
 * @import {Point, ElevatedPoint} from "@common/_types.mjs";
 * @import {RegionSocketEvent} from "@common/documents/_types.mjs";
 * @import {RegionEvent, RegionMovementSegment, RegionSegmentizeMovementPathWaypoint} from "./_types.mjs";
 * @import TokenDocument from "./token.mjs";
 */
/**
 * The client-side Region document which extends the common BaseRegion model.
 * @extends BaseRegion
 * @mixes CanvasDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.Scene}: The Scene document type which contains Region documents
 * @see {@link foundry.applications.sheets.RegionConfig}: The Region configuration application
 */
export default class RegionDocument extends BaseRegion {
    /**
     * Shared point instance.
     * @type {Point}
     */
    static #SHARED_POINT: Point;
    /**
     * The minimum distance from the boundary for a point to be considered interior/exterior.
     * @type {number}
     */
    static #MIN_BOUNDARY_DISTANCE: number;
    /**
     * Activate the Socket event listeners.
     * @param {io.Socket} socket    The active game socket
     * @internal
     */
    static _activateSocketListeners(socket: io.Socket): void;
    /**
     * Handle the Region event received via the socket.
     * @param {RegionSocketEvent} socketEvent    The socket Region event
     */
    static #onSocketEvent(socketEvent: RegionSocketEvent): Promise<void>;
    /**
     * Update the tokens of the given regions.
     * @param {RegionDocument[]} regions           The Regions documents, which must be all in the same Scene
     * @param {object} [options={}]                Additional options
     * @param {boolean} [options.deleted=false]    Are the Region documents deleted?
     */
    static #updateTokens(regions: RegionDocument[], { deleted }?: {
        deleted?: boolean | undefined;
    }): Promise<void>;
    /** @override */
    static override _onCreateOperation(documents: any, operation: any, user: any): Promise<void>;
    /** @override */
    static override _onUpdateOperation(documents: any, operation: any, user: any): Promise<void>;
    /** @override */
    static override _onDeleteOperation(documents: any, operation: any, user: any): Promise<void>;
    /**
     * The shapes of this Region.
     *
     * The value of this property must not be mutated.
     *
     * This property is updated only by a document update.
     * @type {ReadonlyArray<RegionShape>}
     */
    get regionShapes(): ReadonlyArray<RegionShape>;
    /**
     * The polygons of this Region.
     *
     * The value of this property must not be mutated.
     *
     * This property is updated only by a document update.
     * @type {ReadonlyArray<PIXI.Polygon>}
     */
    get polygons(): ReadonlyArray<PIXI.Polygon>;
    /**
     * The polygon tree of this Region.
     *
     * The value of this property must not be mutated.
     *
     * This property is updated only by a document update.
     * @type {RegionPolygonTree}
     */
    get polygonTree(): RegionPolygonTree;
    /**
     * The Clipper paths of this Region.
     *
     * The value of this property must not be mutated.
     *
     * This property is updated only by a document update.
     * @type {ReadonlyArray<ReadonlyArray<ClipperLib.IntPoint>>}
     */
    get clipperPaths(): ReadonlyArray<ReadonlyArray<ClipperLib.IntPoint>>;
    /**
     * The triangulation of this Region.
     *
     * The value of this property must not be mutated.
     *
     * This property is updated only by a document update.
     * @type {Readonly<{vertices: Float32Array; indices: Uint16Array|Uint32Array}>}
     */
    get triangulation(): Readonly<{
        vertices: Float32Array;
        indices: Uint16Array | Uint32Array;
    }>;
    /**
     * The bounds of this Region.
     *
     * The value of this property must not be mutated.
     *
     * This property is updated only by a document update.
     * @type {PIXI.Rectangle}
     */
    get bounds(): PIXI.Rectangle;
    /**
     * The tokens inside this region.
     * @type {ReadonlySet<TokenDocument>}
     * @readonly
     */
    readonly tokens: ReadonlySet<TokenDocument>;
    /** @inheritDoc */
    prepareBaseData(): void;
    /**
     * Test whether the given point (at the given elevation) is inside this Region.
     * @param {ElevatedPoint} point    The point.
     * @returns {boolean}              Is the point inside this Region?
     */
    testPoint(point: ElevatedPoint): boolean;
    /**
     * Split the movement path into its segments.
     * @param {RegionSegmentizeMovementPathWaypoint[]} waypoints    The waypoints of movement.
     * @param {Point[]} samples                       The points relative to the waypoints that are tested.
     *                                                Whenever one of them is inside the region, the moved object
     *                                                is considered to be inside the region.
     * @returns {RegionMovementSegment[]}             The movement split into its segments.
     */
    segmentizeMovementPath(waypoints: RegionSegmentizeMovementPathWaypoint[], samples: Point[]): RegionMovementSegment[];
    /** @inheritDoc */
    _onUpdate(changed: any, options: any, userId: any): void;
    /**
     * Teleport a Token into this Region.
     * The Token may be in the same Scene as this Region, or in a different Scene.
     * The current User must be an owner of the Token Document in order to teleport it
     * For teleportation to a different Scene the current User requires `TOKEN_CREATE` and
     * `TOKEN_DELETE` permissions. If the Token is teleported to different Scene, it is deleted
     * and a new Token Document in the other Scene is created.
     * @param {TokenDocument} token         An existing Token Document to teleport
     * @returns {Promise<TokenDocument>}    The same Token Document if teleported within the same Scene,
     *                                      or a new Token Document if teleported to a different Scene
     */
    teleportToken(token: TokenDocument): Promise<TokenDocument>;
    /**
     * Trigger the Region event.
     * @param {string} eventName        The event name
     * @param {object} eventData        The event data
     * @returns {Promise<void>}
     * @internal
     */
    _triggerEvent(eventName: string, eventData: object): Promise<void>;
    /**
     * Handle the Region event.
     * @param {RegionEvent} event    The Region event
     * @returns {Promise<void>}
     * @internal
     */
    _handleEvent(event: RegionEvent): Promise<void>;
    /** @inheritDoc */
    _onCreateDescendantDocuments(parent: any, collection: any, documents: any, data: any, options: any, userId: any): void;
    /** @inheritDoc */
    _onUpdateDescendantDocuments(parent: any, collection: any, documents: any, changes: any, options: any, userId: any): void;
    /** @inheritDoc */
    _onDeleteDescendantDocuments(parent: any, collection: any, documents: any, ids: any, options: any, userId: any): void;
    #private;
}
import BaseRegion from "@common/documents/region.mjs";
import { RegionShape } from "../data/region-shapes/_module.mjs";
import { RegionPolygonTree } from "../data/region-shapes/_module.mjs";
import type TokenDocument from "./token.mjs";
import type { ElevatedPoint } from "@common/_types.mjs";
import type { RegionSegmentizeMovementPathWaypoint } from "./_types.mjs";
import type { Point } from "@common/_types.mjs";
import type { RegionMovementSegment } from "./_types.mjs";
import type { RegionEvent } from "./_types.mjs";
import type { RegionSocketEvent } from "@common/documents/_types.mjs";
