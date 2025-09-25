/**
 * @import {SystemManifestData} from "./_types.mjs";
 */
/**
 * The data schema used to define System manifest files.
 * Extends the basic PackageData schema with some additional system-specific fields.
 * @extends BasePackage<SystemManifestData>
 */
export default class BaseSystem extends BasePackage<SystemManifestData> {
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
    documentTypes: AdditionalTypesField
    background: fields.StringField
    initiative: fields.StringField
    grid: fields.SchemaField
    primaryTokenAttribute: fields.StringField
    secondaryTokenAttribute: fields.StringField
  }
  /**
   * The default icon used for this type of Package.
   * @type {string}
   */
  static icon: string
  /** @inheritdoc */
  static migrateData(data: any, options: any): object
  /** @inheritdoc */
  static shimData(data: any, options: any): object
  constructor(data: foundry.packages.types.PackageManifestData, options?: object)
  /**
   * Does the system template request strict type checking of data compared to template.json inferred types.
   * @type {boolean}
   */
  strictDataCleaning: boolean
}
import * as fields from "../data/fields.mjs"
import type { SystemManifestData } from "./_types.mjs"
import BasePackage from "./base-package.mjs"
import AdditionalTypesField from "./sub-types.mjs"
