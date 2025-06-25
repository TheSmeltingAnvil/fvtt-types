export default class System extends foundry.packages.ClientPackageMixin(foundry.packages.BaseSystem) {
  constructor(
    data: DeepPartial<foundry.packages.SystemSource>,
    options?: foundry.abstract.types.DataModelConstructionContext<null>,
  )

  protected override _configure(options?: Record<string, unknown>): void
}
