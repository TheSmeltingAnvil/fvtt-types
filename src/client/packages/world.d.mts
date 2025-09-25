/**
 * @extends BaseWorld
 * @mixes {@link ClientPackageMixin}
 * @see {@link foundry.packages.types.WorldManifestData} For the world.json schema
 * @see {@link foundry.ClientPackage}
 * @category Packages
 */
export default class World extends BaseWorld {
  /** @inheritDoc */
  static getVersionBadge(availability: any, data: any, { modules, systems }?: object): any
  /** @inheritdoc */
  static _formatBadDependenciesTooltip(availability: any, data: any, deps: any): any
  /**
   * Provide data for a system badge displayed for the world which reflects the system ID and its availability
   * @param {System} [system]  A specific system to use, otherwise use the installed system.
   * @returns {PackageCompatibilityBadge|null}
   */
  getSystemBadge(system?: System): PackageCompatibilityBadge | null
}
import BaseWorld from "@common/packages/base-world.mjs"
