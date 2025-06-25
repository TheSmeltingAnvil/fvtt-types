import { TourStep } from "./TourStep.js"

/**
 * Tour configuration data
 */
export interface TourConfig {
  /** The namespace this Tour belongs to. Typically, the name of the package which implements the tour should use */
  namespace: string

  /** A machine-friendly id of the Tour, must be unique within the provided namespace */
  id: string

  /** A human-readable name for this Tour. Localized. */
  title: string

  /** The list of Tour Steps */
  steps: TourStep[]

  /** A human-readable description of this Tour. Localized. */
  description?: string

  /** A map of localizations for the Tour that should be merged into the default localizations */
  localization?: object

  /** Whether the Tour is restricted to the GM only. Defaults to false. */
  restricted?: boolean

  /** Whether the Tour should be displayed in the Manage Tours UI. Defaults to false. */
  display?: boolean

  /** Whether the Tour can be resumed or if it always needs to start from the beginning. Defaults to false. */
  canBeResumed?: boolean

  /**
   * A list of namespaced Tours that might be suggested to the user when this Tour is completed. The first
   * non-completed Tour in the array will be recommended.
   */
  suggestedNextTours?: string[]
}
