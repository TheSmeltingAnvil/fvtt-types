/**
 * @extends BaseModule
 * @mixes {@link ClientPackageMixin}
 * @see {@link foundry.packages.types.ModuleManifestData} For the module.json schema
 * @see {@link foundry.ClientPackage}
 * @category Packages
 */
export default class Module extends BaseModule {
  constructor(data: any, options?: object)
  /**
   * Is this package currently active?
   * @type {boolean}
   */
  active: boolean
}
import BaseModule from "@common/packages/base-module.mjs"
