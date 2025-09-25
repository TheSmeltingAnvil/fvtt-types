export type LineIntersection = {
  /**
   * The x-coordinate of intersection
   */
  x: number
  /**
   * The y-coordinate of intersection
   */
  y: number
  /**
   * The vector distance from A to B on segment AB
   */
  t0: number
  /**
   * The vector distance from C to D on segment CD
   */
  t1?: number | undefined
}
export type LineCircleIntersection = {
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
   * Is the segment AB fully outside the circle?
   */
  outside: boolean
  /**
   * Is the segment AB tangent to the circle?
   */
  tangent: boolean
  /**
   * Intersection points: zero, one, or two
   */
  intersections: Point[]
}
export type ResolvedUUID = {
  /**
   * The original UUID.
   */
  uuid: string
  /**
   * The type of Document referenced. Legacy compendium UUIDs will not
   *                     populate this field if the compendium is not active in the World.
   */
  type?: string | undefined
  /**
   * The ID of the Document referenced.
   */
  id: string
  /**
   * The primary Document type of this UUID. Only present if the Document
   *              is embedded.
   */
  primaryType?: string | undefined
  /**
   * The primary Document ID of this UUID. Only present if the Document
   *                is embedded.
   */
  primaryId?: string | undefined
  /**
   * The Collection containing the referenced Document unless that Document
   *   is embedded, in which case the Collection of the primary Document.
   */
  collection?: DocumentCollection<Document>
  /**
   * Additional Embedded Document parts.
   */
  embedded: string[]
  /**
   * Either the document type or the parent type. Retained for backwards
   *             compatibility.
   */
  documentType?: string | undefined
  /**
   * Either the document id or the parent id. Retained for backwards
   *               compatibility.
   */
  documentId?: string | undefined
}
export type IterableWeakMapHeldValue = {
  /**
   * The set to be cleaned.
   */
  set: Set<WeakRef<any>>
  /**
   * The ref to remove.
   */
  ref: WeakRef<any>
}
export type IterableWeakMapValue = {
  /**
   * The value.
   */
  value: any
  /**
   * The weak ref of the key.
   */
  ref: WeakRef<any>
}
/**
 * A string tree node consists of zero-or-more string keys, and a leaves property that contains any objects that
 * terminate at the current node.
 */
// @ts-expect-error -- IGNORE --
export type StringTreeNode = Record<string, StringTreeNode | any>
export type StringTreeEntryFilter = (entry: any) => boolean
/**
 * A leaf entry in the tree.
 */
export type WordTreeEntry = {
  /**
   * An object that this entry represents.
   */
  entry: Document | object
  /**
   * The document type.
   */
  documentName: string
  /**
   * The document's UUID.
   */
  uuid: string
  /**
   * The pack ID.
   */
  pack?: string | undefined
}
export type EmittedEventListener = (event: Event) => any
import DocumentCollection from "@client/documents/abstract/document-collection.mjs"
import type { Point } from "../_types.mjs"
import type { Document } from "../abstract/_module.mjs"

// REVIEW add DocumentUUID, ActorUUID, ItemUUID, etc.
