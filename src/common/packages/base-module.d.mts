/**
 * @import {ModuleManifestData} from "./_types.mjs";
 */
/**
 * The data schema used to define Module manifest files.
 * Extends the basic PackageData schema with some additional module-specific fields.
 * @extends BasePackage<ModuleManifestData>
 */
export default class BaseModule extends BasePackage<ModuleManifestData> {
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
    coreTranslation: fields.BooleanField
    library: fields.BooleanField
    documentTypes: AdditionalTypesField
  }
  /**
   * The default icon used for this type of Package.
   * @type {string}
   */
  static icon: string
  constructor(data: foundry.packages.types.PackageManifestData, options?: object)
}
import * as fields from "../data/fields.mjs"
import type { ModuleManifestData } from "./_types.mjs"
import BasePackage from "./base-package.mjs"
import AdditionalTypesField from "./sub-types.mjs"
