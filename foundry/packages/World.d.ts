import * as types from "./_types.js"
import { WorldSource } from "./BaseWorld.js"

export default class World extends foundry.packages.ClientPackageMixin(foundry.packages.BaseWorld) {
  //static override getVersionBadge(
  //  availability: number,
  //  data: Partial<types.PackageManifestData>,
  //  options?: {
  //    modules?: Collection<string, foundry.packages.Module>
  //    systems?: Collection<string, foundry.packages.System>
  //  },
  //): foundry.packages.types.PackageCompatibilityBadge | null

  constructor(data: DeepPartial<WorldSource>, options?: foundry.abstract.types.DataModelConstructionContext<null>)

  /**
   * Provide data for a system badge displayed for the world which reflects the system ID and its availability
   * @param system A specific system to use, otherwise use the installed system.
   */
  getSystemBadge(system?: foundry.packages.System): foundry.packages.types.PackageCompatibilityBadge | null

  //static override _formatBadDependenciesTooltip(
  //    availability: number,
  //    data: Partial<types.PackageManifestData>,
  //    deps: Iterable<foundry.packages.RelatedPackage>,
  //    options?: {
  //      modules?: Collection<string, foundry.packages.Module>;
  //      systems?: Collection<string, foundry.packages.System>
  //    },
  //  ): string
}
