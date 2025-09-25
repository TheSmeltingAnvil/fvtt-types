/**
 * @import {WorldManifestData} from "./_types.mjs";
 */
/**
 * The data schema used to define World manifest files.
 * Extends the basic PackageData schema with some additional world-specific fields.
 * @extends BasePackage<WorldManifestData>
 */
export default class BaseWorld extends BasePackage<WorldManifestData> {
  /** @inheritDoc */
  static defineSchema(): {
    id: fields.StringField
    title: fields.StringField
    description: fields.HTMLField
    authors: fields.SetField
    url: fields.StringField
    license: fields.StringField
    readme: fields.StringField
    bugs: fields.StringField
    changelog: fields.StringField
    flags: fields.ObjectField
    media: fields.SetField
    version: fields.StringField
    compatibility: foundry.packages.PackageCompatibility
    scripts: fields.SetField
    esmodules: fields.SetField
    styles: fields.ArrayField<fields.SchemaField>
    languages: fields.SetField
    packs: import("./base-package.mjs").PackageCompendiumPacks
    packFolders: fields.SetField
    relationships: import("./base-package.mjs").PackageRelationships
    socket: fields.BooleanField
    manifest: fields.StringField
    download: fields.StringField
    protected: fields.BooleanField
    exclusive: fields.BooleanField
    persistentStorage: fields.BooleanField
  } & {
    system: fields.StringField
    background: fields.FilePathField
    description: fields.HTMLField
    joinTheme: fields.StringField
    coreVersion: fields.StringField
    systemVersion: fields.StringField
    lastPlayed: fields.StringField
    playtime: fields.NumberField
    nextSession: fields.StringField
    resetKeys: fields.BooleanField
    safeMode: fields.BooleanField
    version: fields.StringField
    demo: fields.SchemaField
  }
  /**
   * The default icon used for this type of Package.
   * @type {string}
   */
  static icon: string
  /** @inheritDoc */
  static migrateData(data: any): any
  /**
   * Check the given compatibility data against the current installation state and determine its availability.
   * @param {Partial<WorldManifestData>} data  The compatibility data to test.
   * @param {object} [options]
   * @param {ReleaseData} [options.release]      A specific software release for which to test availability.
   *                                             Tests against the current release by default.
   * @param {Collection<string, Module>} [options.modules]  A specific collection of modules to test availability
   *                                                        against. Tests against the currently installed modules by
   *                                                        default.
   * @param {Collection<string, System>} [options.systems]  A specific collection of systems to test availability
   *                                                        against. Tests against the currently installed systems by
   *                                                        default.
   * @param {number} [options.systemAvailabilityThreshold]  Ignore the world's own core software compatibility and
   *                                                        instead defer entirely to the system's core software
   *                                                        compatibility, if the world's availability is less than
   *                                                        this.
   * @returns {number}
   */
  static testAvailability(
    data: Partial<WorldManifestData>,
    {
      release,
      modules,
      systems,
      systemAvailabilityThreshold,
    }?: {
      release?: any
      modules?: any
      systems?: any
      systemAvailabilityThreshold?: number | undefined
    },
  ): number
  constructor(data: foundry.packages.types.PackageManifestData, options?: object)
}
import * as fields from "../data/fields.mjs"
import type { WorldManifestData } from "./_types.mjs"
import BasePackage from "./base-package.mjs"
