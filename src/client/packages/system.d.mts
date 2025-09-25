/**
 * @extends BaseSystem
 * @mixes {@link ClientPackageMixin}
 * @see {@link foundry.packages.types.SystemManifestData} For the system.json schema
 * @see {@link foundry.ClientPackage}
 * @category Packages
 */
export default class System extends BaseSystem {
  constructor(data: any, options?: object)
  /** @inheritDoc */
  _configure(options: any): void
  /**
   * @deprecated since v12
   * @ignore
   */
  get template(): Record<string, Record<string, object>>
}
import BaseSystem from "@common/packages/base-system.mjs"
