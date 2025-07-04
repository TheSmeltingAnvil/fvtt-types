import EmbeddedCollection from "foundry/abstract/EmbeddedCollection.js"
import Scene from "./Scene.js"
import BaseRegion from "./BaseRegion.js"
import { CanvasDocument, CanvasDocumentStatic } from "./abstract/CanvasDocumentMixin.js"
import { RegionShape } from "foundry/data/regionShapes/RegionShape.js"
import Region, { RegionMovementSegment, RegionMovementWaypoint } from "foundry/canvas/placeables/Region.js"

interface CanvasBaseRegionStatic extends Omit<typeof BaseRegion, "new">, CanvasDocumentStatic {}

declare const CanvasBaseRegion: {
  new <TParent extends Scene | null>(...args: any): BaseRegion<TParent> & CanvasDocument<TParent>
} & CanvasBaseRegionStatic

type CanvasBaseRegion<TParent extends Scene | null> = InstanceType<typeof CanvasBaseRegion<TParent>>

export default class RegionDocument<TParent extends Scene | null = Scene | null> extends CanvasBaseRegion<TParent> {
  /* -------------------------------------------- */
  /*  Properties                                  */
  /* -------------------------------------------- */

  /**
   * The shapes of this Region.
   * The value of this property must not be mutated.
   * This property is updated only by a document update.
   */
  get regionShapes(): readonly RegionShape[]

  /**
   * The polygons of this Region.
   * The value of this property must not be mutated.
   * This property is updated only by a document update.
   */
  get polygons(): readonly PIXI.Polygon[]

  /**
   * The polygon tree of this Region.
   *
   * The value of this property must not be mutated.
   *
   * This property is updated only by a document update.
   */
  // @ts-expect-error Should fix.
  get polygonTree(): RegionPolygonTree

  /**
   * Activate the Socket event listeners.
   * @param    socket    The active game socket
   * @internal
   */
  static _activateSocketListeners(socket: unknown): void

  /** The tokens inside this region. */
  tokens: Set<CollectionValue<NonNullable<TParent>["tokens"]>>

  /**
   * Trigger the Region event.
   * @param    eventName        The event name
   * @param    eventData        The event data
   * @internal
   */
  _triggerEvent(eventName: string, eventData: object): Promise<void>

  /**
   * Handle the Region event.
   * @param {RegionEvent} event    The Region event
   * @internal
   */
  _handleEvent(event: unknown): Promise<void>

  /**
   * Update the tokens of this region.
   * @param    [options={}]               Additional options
   * @param    [options.deleted=false]    Was the Region deleted?
   * @returns                             True if the regions could be updated. False otherwise.
   * @internal
   */
  _updateTokens(options?: { deleted?: boolean }): Promise<boolean>
}

export default interface RegionDocument<TParent extends Scene | null = Scene | null> extends CanvasBaseRegion<TParent> {
  get object(): Region<this>

  readonly behaviors: EmbeddedCollection<RegionBehavior<this>>
}

export interface BaseRegionEvent<TDocument extends RegionDocument = RegionDocument, TUser extends User = User> {
  /** The name of the event */
  name: string
  /** The data of the event */
  data: object
  /** The Region the event was triggered on */
  region: TDocument
  /** The User that triggered the event */
  user: TUser
}

export interface BehaviorStatusRegionEvent<TDocument extends RegionDocument = RegionDocument, TUser extends User = User>
  extends BaseRegionEvent<TDocument, TUser> {
  name: "behaviorStatus"
  data: {
    active: boolean
    viewed: boolean
  }
}

export interface CombatRegionEvent<TDocument extends RegionDocument = RegionDocument, TUser extends User = User>
  extends BaseRegionEvent<TDocument, TUser> {
  name: "tokenRoundStart" | "tokenRoundEnd" | "tokenTurnStart" | "tokenTurnEnd"
  data: {
    token: SetElement<TDocument["tokens"]>
    // @ts-expect-error Should fix.
    combatant: SetElement<TDocument["tokens"]>["combatant"]
  }
}

export interface TokenBasicMoveRegionEvent<TDocument extends RegionDocument = RegionDocument, TUser extends User = User>
  extends BaseRegionEvent<TDocument, TUser> {
  name: "tokenEnter" | "tokenExit"
  data: {
    token: SetElement<TDocument["tokens"]>
  }
}

export interface TokenMoveRegionEvent<TDocument extends RegionDocument = RegionDocument, TUser extends User = User>
  extends BaseRegionEvent<TDocument, TUser> {
  name: "tokenPreMove" | "tokenMove" | "tokenMoveIn" | "tokenMoveOut"
  data: {
    destination: RegionMovementWaypoint
    forced: boolean
    origin: RegionMovementWaypoint
    segments: RegionMovementSegment[]
    teleport: boolean
    token: SetElement<TDocument["tokens"]>
  }
}

export interface RegionBoundaryRegionEvent<TDocument extends RegionDocument = RegionDocument, TUser extends User = User>
  extends BaseRegionEvent<TDocument, TUser> {
  name: "regionBoundary"
  data: object
}

export type RegionEvent<TDocument extends RegionDocument = RegionDocument, TUser extends User = User> =
  | BehaviorStatusRegionEvent<TDocument, TUser>
  | CombatRegionEvent<TDocument, TUser>
  | TokenMoveRegionEvent<TDocument, TUser>
  | TokenBasicMoveRegionEvent<TDocument, TUser>

export interface SocketRegionEvent<TData extends object = object> {
  /** The UUID of the Region the event was triggered on */
  regionUuid: string
  /** The ID of the User that triggered the event */
  userId: string
  /** The name of the event */
  eventName: string
  /** The data of the event */
  eventData: TData
  /** The keys of the event data that are Documents */
  eventDataUuids: string[]
}
