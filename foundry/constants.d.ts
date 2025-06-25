/**
 * Configure the severity of compatibility warnings.
 */
export const COMPATIBILITY_MODES: Readonly<{
  /**
   * Nothing will be logged
   */
  SILENT: 0
  /**
   * A message will be logged at the "warn" level
   */
  WARNING: 1
  /**
   * A message will be logged at the "error" level
   */
  ERROR: 2
  /**
   * An Error will be thrown
   */
  FAILURE: 3
}>

export type CompatibilityMode = (typeof COMPATIBILITY_MODES)[keyof typeof COMPATIBILITY_MODES]
