/**
 * The client-side ActorDelta embedded document which extends the common BaseActorDelta document model.
 * @extends BaseActorDelta
 * @mixes ClientDocumentMixin
 * @category Documents
 *
 * @see {@link foundry.documents.TokenDocument}: The TokenDocument document type which contains ActorDelta embedded
 *   documents.
 */
export default class ActorDelta extends BaseActorDelta {
  /** @inheritDoc */
  _configure(options?: object): void
  /** @inheritDoc */
  _initialize({ sceneReset, ...options }?: { sceneReset?: boolean | undefined }): void
  set type(type: string)
  /**
   * Pass-through the type from the synthetic Actor, if it exists.
   * @type {string}
   */
  get type(): string
  /** @internal */
  _type: any
  /**
   * Apply this ActorDelta to the base Actor and return a synthetic Actor.
   * @param {object} [context]  Context to supply to synthetic Actor instantiation.
   * @returns {Actor|null}
   */
  apply(context?: object): Actor | null
  /** @override */
  override prepareEmbeddedDocuments(): void
  /**
   * Generate a synthetic Actor instance when constructed, or when the represented Actor, or actorLink status changes.
   * @param {object} [options]
   * @param {boolean} [options.reinitializeCollections]  Whether to fully re-initialize this ActorDelta's collections in
   *                                                     order to re-retrieve embedded Documents from the synthetic
   *                                                     Actor.
   * @internal
   */
  _createSyntheticActor({ reinitializeCollections }?: { reinitializeCollections?: boolean | undefined }): void
  /**
   * Update the synthetic Actor instance with changes from the delta or the base Actor.
   */
  updateSyntheticActor(): void
  /**
   * Restore this delta to empty, inheriting all its properties from the base actor.
   * @returns {Promise<Actor>}  The restored synthetic Actor.
   */
  restore(): Promise<Actor>
  /**
   * Ensure that the embedded collection delta is managing any entries that have had their descendants updated.
   * @param {Document} doc  The parent whose immediate children have been modified.
   * @internal
   */
  _handleDeltaCollectionUpdates(doc: Document): any
  /** @override */
  override _onSheetChange(): Promise<void>
  /** @inheritDoc */
  _prepareDeltaUpdate(changes?: object, options?: object): void
  /** @inheritDoc */
  _preDelete(options: any, user: any): Promise<boolean | void>
  /** @inheritDoc */
  _onUpdate(changed: any, options: any, userId: any): void
  /** @inheritDoc */
  _onDelete(options: any, userId: any): void
  /** @inheritDoc */
  _dispatchDescendantDocumentEvents(event: any, collection: any, args: any, _parent: any): void
}
import BaseActorDelta from "@common/documents/actor-delta.mjs"
