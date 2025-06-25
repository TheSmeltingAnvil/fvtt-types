/**
 * Encode the reasons why a package may be available or unavailable for use
 */
export const PACKAGE_AVAILABILITY_CODES: Readonly<{
  /**
   * Package availability could not be determined
   */
  UNKNOWN: 0
  /**
   * The Package is verified to be compatible with the current core software build
   */
  VERIFIED: 1
  /**
   * Package is available for use, but not verified for the current core software build
   */
  UNVERIFIED_BUILD: 2
  /**
   * One or more installed system is incompatible with the Package.
   */
  UNVERIFIED_SYSTEM: 3
  /**
   * Package is available for use, but not verified for the current core software generation
   */
  UNVERIFIED_GENERATION: 4
  /**
   * The System that the Package relies on is not available
   */
  MISSING_SYSTEM: 5
  /**
   * A dependency of the Package is not available
   */
  MISSING_DEPENDENCY: 6
  /**
   * The Package is compatible with an older version of Foundry than the currently installed version
   */
  REQUIRES_CORE_DOWNGRADE: 7
  /**
   * The Package is compatible with a newer version of Foundry than the currently installed version, and that version is Stable
   */
  REQUIRES_CORE_UPGRADE_STABLE: 8
  /**
   * The Package is compatible with a newer version of Foundry than the currently installed version, and that version is not yet Stable
   */
  REQUIRES_CORE_UPGRADE_UNSTABLE: 9
  /**
   * A required dependency is not compatible with the current version of Foundry
   */
  REQUIRES_DEPENDENCY_UPDATE: 10
}>

export type PackageAvailabilityCode = (typeof PACKAGE_AVAILABILITY_CODES)[keyof typeof PACKAGE_AVAILABILITY_CODES]
