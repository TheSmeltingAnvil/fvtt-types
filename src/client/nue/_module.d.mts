/**
 * Register core Tours.
 * @returns {Promise<void>}
 */
export function registerTours(): Promise<void>;
export { default as NewUserExperienceManager } from "./nue-manager.mjs";
export { default as ToursCollection } from "./tours-collection.mjs";
import * as tours from "./tours/_module.mjs";
import Tour from "./tour.mjs";
export { tours, Tour };
