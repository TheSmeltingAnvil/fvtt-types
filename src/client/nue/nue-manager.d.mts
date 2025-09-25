/**
 * Responsible for managing the New User Experience workflows.
 * @see {@link foundry.Game#nue}
 */
export default class NewUserExperienceManager {
    /**
     * Initialize the new user experience.
     * Currently, this generates some chat messages with hints for getting started if we detect this is a new world.
     */
    initialize(): void;
    /**
     * Create a default scene for the new world.
     * @param {Partial<SceneData>} sceneData      Additional data to merge with the default scene
     * @returns {Promise<Scene>}                  The created default scene
     */
    createDefaultScene(sceneData?: Partial<SceneData>): Promise<Scene>;
    #private;
}
import Scene from "@client/documents/scene.mjs";
