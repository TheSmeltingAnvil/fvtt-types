//import * as foundry from "../_module"
import { Document } from "foundry/abstract/_module.js"

export interface IterableWeakMapHeldValue<K extends WeakKey = WeakKey> {
  /**
   * The ref to remove.
   */
  ref: WeakRef<K>
  /**
   * The set to be cleaned.
   */
  set: Set<WeakRef<K>>
}

export interface IterableWeakMapValue<K extends WeakKey = WeakKey, V = unknown> {
  /**
   * The weak ref of the key.
   */
  ref: WeakRef<K>
  /**
   * The value.
   */
  value: V
}

export interface LineCircleIntersection {
  /**
   * Is point A inside the circle?
   */
  aInside: boolean
  /**
   * Is point B inside the circle?
   */
  bInside: boolean
  /**
   * Is the segment AB contained within the circle?
   */
  contained: boolean
  /**
   * Intersection points: zero, one, or two
   */
  intersections: foundry.types.Point[]
  /**
   * Is the segment AB fully outside the circle?
   */
  outside: boolean
  /**
   * Is the segment AB tangent to the circle?
   */
  tangent: boolean
}

export interface LineIntersection {
  /**
   * The vector distance from A to B on segment AB.
   */
  t0: number
  /**
   * The vector distance from C to D on segment CD.
   */
  t1?: number
  /**
   * he x-coordinate of intersection.
   */
  x: number
  /**
   * The y-coordinate of intersection.
   */
  y: number
}

export interface ResolvedUUID {
  /**
   * The Collection containing the referenced Document unless that Document is embedded, in which case the Collection
   * of the primary Document.
   */
  collection?: foundry.documents.abstract.DocumentCollection<Document>
  /**
   * Either the document id or the parent id. Retained for backwards compatibility.
   */
  documentId?: string
  /**
   * Either the document type or the parent type. Retained for backwards compatibility.
   */
  documentType?: string
  /**
   * Additional Embedded Document parts.
   */
  embedded: string[]
  /**
   * The ID of the Document referenced.
   */
  id: string
  /**
   * The primary Document ID of this UUID. Only present if the Document is embedded.
   */
  primaryId?: string
  /**
   * The primary Document type of this UUID. Only present if the Document is embedded.
   */
  primaryType?: string
  /**
   * The type of Document referenced. Legacy compendium UUIDs will not populate this field if the compendium is
   * not active in the World.
   */
  type?: string
  /**
   * The original UUID.
   */
  uuid: string
}

/**
 * A leaf entry in the tree.
 */
export interface WordTreeEntry {
  /** The document type. */
  documentName: string
  /** An object that this entry represents. */
  entry: object | foundry.abstract.Document /*<object, foundry.abstract.types.DocumentConstructionContext>*/
  /** The pack ID. */
  pack?: string
  /** The document's UUID. */
  uuid: string
}

/**
 *
 * @param event The emitted event
 */
export type EmittedEventListener = (event: Event) => any
