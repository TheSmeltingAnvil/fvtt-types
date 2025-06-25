import * as types from "./_types.js"

// @ts-expect-error Should fix.
export abstract class ClientPackageType extends foundry.packages.BasePackage {
  /**
   * Is this package marked as a favorite?
   * This boolean is currently only populated as true in the /setup view of the software.
   */
  declare favorite: boolean

  /**
   * Associate package availability with certain badge for client-side display.
   */
  getVersionBadge(): types.PackageCompatibilityBadge | null

  /**
   * Retrieve a Package of this type from its collection.
   * @param id The package ID to retrieve
   * @returns The retrieved package instance, or undefined
   */
  static get(id: string): ClientPackageType | undefined

  /**
   * Determine a version badge for the provided compatibility data.
   * @param {number} availability                The availability level.
   * @param {Partial<PackageManifestData>} data  The compatibility data.
   * @param {object} [options]
   * @param {Collection<string, Module>} [options.modules]  A specific collection of modules to test availability
   *                                                        against. Tests against the currently installed modules by
   *                                                        default.
   * @param {Collection<string, System>} [options.systems]  A specific collection of systems to test availability
   *                                                        against. Tests against the currently installed systems by
   *                                                        default.
   */
  static getVersionBadge(
    availability: number,
    data: Partial<types.PackageManifestData>,
    options?: {
      modules?: Collection<string, foundry.packages.Module>
      systems?: Collection<string, foundry.packages.System>
    },
  ): types.PackageCompatibilityBadge | null

  /**
   * List missing dependencies and format them for display.
   * @param {number} availability                The availability value.
   * @param {Partial<PackageManifestData>} data  The compatibility data.
   * @param {Iterable<RelatedPackage>} deps      The dependencies to format.
   * @param {object} [options]
   * @param {Collection<string, Module>} [options.modules]  A specific collection of modules to test availability
   *                                                        against. Tests against the currently installed modules by
   *                                                        default.
   * @param {Collection<string, System>} [options.systems]  A specific collection of systems to test availability
   *                                                        against. Tests against the currently installed systems by
   *                                                        default.
   * @returns {string}
   * @protected
   */
  static _formatBadDependenciesTooltip(
    availability: number,
    data: Partial<types.PackageManifestData>,
    deps: Iterable<foundry.packages.RelatedPackage>,
    options?: {
      modules?: Collection<string, foundry.packages.Module>
      systems?: Collection<string, foundry.packages.System>
    },
  ): string

  /**
   * List any installed systems that are incompatible with this module's systems relationship, and format them for
   * display.
   * @param {Partial<PackageManifestData>} data             The compatibility data.
   * @param {Iterable<RelatedPackage>} relationships        The system relationships.
   * @param {object} [options]
   * @param {Collection<string, System>} [options.systems]  A specific collection of systems to test against. Tests
   *                                                        against the currently installed systems by default.
   * @returns {string}
   * @protected
   */
  static _formatIncompatibleSystemsTooltip(
    data: Partial<types.PackageManifestData>,
    relationships: Iterable<foundry.packages.RelatedPackage>,
    options?: { systems?: Collection<string, foundry.packages.System> },
  ): string

  /**
   * When a package has been installed, add it to the local game data.
   */
  install(): void

  /**
   * When a package has been uninstalled, remove it from the local game data.
   */
  uninstall(): void

  /**
   * Remove a package from the local game data when it has been uninstalled.
   * @param {string} id  The package ID.
   */
  static uninstall(id: string): void

  /**
   * Retrieve the latest Package manifest from a provided remote location.
   * @param manifest A remote manifest URL to load
   * @param options Additional options which affect package construction
   * @param options.strict Whether to construct the remote package strictly
   * @returns A Promise which resolves to a constructed ServerPackage instance
   * @throws An error if the retrieved manifest data is invalid
   */
  static fromRemoteManifest(manifest: string, options?: { strict?: boolean }): Promise<ClientPackageType | null>
}

/**
 * A client-side mixin used for all Package types.
 */
export default function ClientPackageMixin<TBase extends ConstructorOf<foundry.packages.BasePackage>>(
  BasePackage: TBase,
): ConstructorOf<ClientPackageType> & TBase
