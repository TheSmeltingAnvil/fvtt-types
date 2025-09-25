/** @import Actor from "../actor.mjs"; */
/**
 * The singleton collection of Actor documents which exist within the active World.
 * This Collection is accessible within the Game object as game.actors.
 * @extends {WorldCollection<Actor>}
 * @category Collections
 *
 * @see {@link foundry.documents.Actor}: The Actor document
 * @see {@link foundry.applications.sidebar.tabs.ActorDirectory}: The ActorDirectory sidebar directory
 *
 * @example Retrieve an existing Actor by its id
 * ```js
 * let actor = game.actors.get(actorId);
 * ```
 */
export default class Actors extends WorldCollection<Actor> {
    constructor(data?: object[]);
    /**
     * A mapping of synthetic Token Actors which are currently active within the viewed Scene.
     * Each Actor is referenced by the Token.id.
     * @type {Record<string, Actor>}
     */
    get tokens(): Record<string, Actor>;
    /** @inheritDoc */
    fromCompendium(document: any, options: any): object;
}
import type Actor from "../actor.mjs";
import WorldCollection from "../abstract/world-collection.mjs";
