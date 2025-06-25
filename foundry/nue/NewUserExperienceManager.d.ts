import * as documents from "foundry/documents/_module.js"
/**
 * Responsible for managing the New User Experience workflows.
 * @see {@link foundry.Game#nue}
 */
export default class NewUserExperienceManager {
  /**
   * Create a default scene for the new world.
   * @param sceneData Additional data to merge with the default scene
   * @returns The created default scene.
   */
  // @ts-expect-error Should fix.
  createDefaultScene(sceneData?: SceneData): Promise<documents.Scene>

  /**
   * Initialize the new user experience.
   * Currently, this generates some chat messages with hints for getting started if we detect this is a new world.
   */
  initialize(): void
}
