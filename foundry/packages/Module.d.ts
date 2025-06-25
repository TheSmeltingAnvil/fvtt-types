export default class Module extends foundry.packages.ClientPackageMixin(foundry.packages.BaseModule) {
  constructor(
    data: DeepPartial<foundry.packages.ModuleSource> & { active: boolean },
    options?: foundry.abstract.types.DataModelConstructionContext<null>,
  )

  /**
   * Is this package currently active?
   */
  active: boolean
}
