/** @import Scene from "../scene.mjs"; */
/**
 * The singleton collection of Scene documents which exist within the active World.
 * This Collection is accessible within the Game object as game.scenes.
 * @extends {WorldCollection<Scene>}
 * @category Collections
 *
 * @see {@link foundry.documents.Scene}: The Scene document
 * @see {@link foundry.applications.sidebar.tabs.SceneDirectory}: The SceneDirectory sidebar directory
 */
export default class Scenes extends WorldCollection<Scene> {
  /** @override */
  // @ts-expect-error -- IGNORE --
  static override _activateSocketListeners(socket: any): void
  /**
   * Handle requests pulling the current User to a specific Scene
   * @param {string} sceneId
   */
  static #pullToScene(sceneId: string): void
  constructor(data?: object[])
  /**
   * Return a reference to the Scene which is currently active
   * @type {Scene}
   */
  get active(): Scene
  /**
   * Return the current Scene target.
   * This is the viewed scene if the canvas is active, otherwise it is the currently active scene.
   * @type {Scene}
   */
  get current(): Scene
  /**
   * Return a reference to the Scene which is currently viewed
   * @type {Scene}
   */
  get viewed(): Scene
  /**
   * Handle preloading the art assets for a Scene
   * @param {string} sceneId    The Scene id to begin loading
   * @param {boolean} push      Trigger other connected clients to also preload Scene resources
   */
  preload(sceneId: string, push?: boolean): Promise<any>
  /** @inheritDoc */
  fromCompendium(
    document: any,
    {
      clearSort,
      ...options
    }?: {
      clearSort?: boolean | undefined
    },
  ): object
}
import WorldCollection from "../abstract/world-collection.mjs"
import type Scene from "../scene.mjs"
