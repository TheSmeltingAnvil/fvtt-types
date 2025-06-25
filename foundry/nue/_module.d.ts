/** @module nue */

import Tour from "./Tour.js"
import * as tours from "./tours/_module.js"

export { default as NewUserExperienceManager } from "./NewUserExperienceManager.js"
export { default as ToursCollection } from "./ToursCollection.js"
export { Tour, tours }

/**
 * Register core Tours.
 */
export function registerTours(): Promise<void>
