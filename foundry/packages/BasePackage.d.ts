import DataModel from "foundry/abstract/DataModel.js"
import { fields } from "foundry/data/_module.js"

import * as types from "./_types.js"

/**
 * The data schema used to define a Package manifest.
 * Specific types of packages extend this schema with additional foundry.data.fields.
 */
export default abstract class BasePackage<TDataSchema extends BasePackageSchema = BasePackageSchema> extends DataModel<
  null,
  TDataSchema
> {
  /** An availability code in PACKAGE_AVAILABILITY_CODES which defines whether this package can be used. */
  availability: foundry.packages.PackageAvailabilityCode

  /** A flag which tracks whether this package is currently locked. */
  locked: boolean

  /** A flag which tracks whether this package is a free Exclusive pack */
  exclusive: boolean

  /** A flag which tracks whether this package is owned, if it is protected. */
  owned: boolean | null

  /** A set of Tags that indicate what kind of Package this is, provided by the Website */
  tags: string[]

  /** A flag which tracks if this package has files stored in the persistent storage folder */
  hasStorage: boolean

  /**
   * @param data         Source data for the package
   * @param [options={}] Options which affect DataModel construction
   */
  constructor(data: types.PackageManifestData, options?: foundry.abstract.types.DataModelConstructionContext<null>)

  /**
   * Define the package type in CONST.PACKAGE_TYPES that this class represents.
   * Each BasePackage subclass must define this attribute.
   */
  static type: CONST.PackageType

  /** The type of this package instance. A value in CONST.PACKAGE_TYPES. */
  get type(): CONST.PackageType

  /** A flag which defines whether this package is unavailable to be used. */
  get unavailable(): boolean

  /** Is this Package incompatible with the currently installed core Foundry VTT software version? */
  get incompatibleWithCoreVersion(): boolean

  /**
   * Test if a given availability is incompatible with the core version.
   * @param availability The availability value to test.
   */
  static isIncompatibleWithCoreVersion(availability: foundry.packages.PackageAvailabilityCode): boolean

  /** The named collection to which this package type belongs */
  static get collection(): string

  static override defineSchema(): BasePackageSchema

  /**
   * Check the given compatibility data against the current installation state and determine its availability.
   * @param data      The compatibility data to test.
   * @param [release] A specific software release for which to test availability.
   *                  Tests against the current release by default.
   */
  static testAvailability(
    data?: Partial<types.PackageManifestData>,
    release?: ReleaseData,
  ): foundry.packages.PackageAvailabilityCode

  /**
   *
   * @param compatibility The compatibility range declared for the dependency, if any
   * @param dependency    The known dependency package
   * @returns Is the dependency compatible with the required range?
   */
  static testDependencyCompatibility(
    compatibility: foundry.packages.PackageCompatibility,
    dependency: BasePackage<BasePackageSchema>,
  ): boolean

  static override cleanData(
    source?: Record<string, unknown>,
    options?: Record<string, unknown>,
  ): foundry.data.fields.SourceFromSchema<BasePackageSchema>

  /**
   * Validate that a Package ID is allowed.
   * @param id The candidate ID
   * @throws An error if the candidate ID is invalid
   */
  static validateId(id: string): void

  static override migrateData(
    source: Record<string, unknown>,
  ): foundry.data.fields.SourceFromSchema<foundry.abstract.types.DataSchema>

  /**
   * Retrieve the latest Package manifest from a provided remote location.
   * @param manifestUrl A remote manifest URL to load
   * @param options     Additional options which affect package construction
   * @param [options.strict=true]   Whether to construct the remote package strictly
   * @return A Promise which resolves to a constructed ServerPackage instance
   * @throws An error if the retrieved manifest data is invalid
   */
  static fromRemoteManifest<T extends BasePackage<BasePackageSchema>>(
    this: ConstructorOf<T>,
    manifestUrl: string,
    options?: { strict?: boolean },
  ): Promise<T | null>
}

export default interface BasePackage<TDataSchema extends BasePackageSchema>
  extends DataModel<null, TDataSchema>,
    foundry.data.fields.ModelPropsFromSchema<BasePackageSchema> {}

/**
 * The data structure of a package manifest. This data structure is extended by BasePackage subclasses to add additional
 * type-specific fields.
 */
type BasePackageSchema = {
  /** The machine-readable unique package id, should be lower-case with no spaces or special characters */
  id: fields.StringField<string, string, true, false, false>
  /** The human-readable package title, containing spaces and special characters */
  title: fields.StringField<string, string, true, false, false>
  /** An optional package description, may contain HTML */
  description: fields.StringField<string, string, true, false, true>
  /** An array of author objects who are co-authors of this package. Preferred to the singular author field. */
  authors: fields.SetField<fields.SchemaField<PackageAuthorSchema>>
  /** A web url where more details about the package may be found */
  url: fields.StringField<string, string, false, false, false>
  /** A web url or relative file path where license details may be found */
  license: fields.StringField<string, string, false, false, false>
  /** A web url or relative file path where readme instructions may be found */
  readme: fields.StringField<string, string, false, false, false>
  /** A web url where bug reports may be submitted and tracked */
  bugs: fields.StringField<string, string, false, false, false>
  /** A web url where notes detailing package updates are available */
  changelog: fields.StringField<string, string, false, false, false>
  flags: fields.ObjectField<Record<string, JSONValue | undefined>, Record<string, unknown>>
  media: fields.SetField<
    fields.SchemaField<{
      type: fields.StringField<string, string, false, false, false>
      url: fields.StringField<string, string, false, false, false>
      caption: fields.StringField<string, string, false, false, false>
      loop: fields.BooleanField
      thumbnail: fields.StringField<string, string, false, false, false>
      flags: fields.ObjectField<Record<string, JSONValue | undefined>, Record<string, unknown>>
    }>
  >

  /** The current package version */
  version: fields.StringField<string, string, true, boolean, true>
  /** The compatibility of this version with the core Foundry software */
  compatibility: foundry.packages.PackageCompatibility
  /** An array of urls or relative file paths for JavaScript files which should be included */
  scripts: fields.SetField<fields.StringField<string, string, true, false, false>>
  /** An array of urls or relative file paths for ESModule files which should be included */
  esmodules: fields.SetField<fields.StringField<string, string, true, false, false>>
  /** An array of urls or relative file paths for CSS stylesheet files which should be included */
  styles: fields.SetField<fields.StringField<string, string, true, false, false>>
  /** An array of language data objects which are included by this package */
  languages: fields.SetField<fields.SchemaField<PackageLanguageSchema>>
  /** An array of compendium packs which are included by this package */
  packs: foundry.packages.PackageCompendiumPacks<PackageCompendiumSchema>
  packFolders: fields.SetField<foundry.packages.PackageCompendiumFolder>
  /** An organized object of relationships to other Packages */
  relationships: foundry.packages.PackageRelationships
  /** Whether to require a package-specific socket namespace for this package */
  socket: fields.BooleanField
  /** A publicly accessible web URL which provides the latest available package manifest file. Required in order to support module updates. */
  manifest: fields.StringField
  /** A publicly accessible web URL where the source files for this package may be downloaded. Required in order to support module installation. */
  download: fields.StringField<string, string, false, false, false>
  /** Whether this package uses the protected content access system. */
  protected: fields.BooleanField
  exclusive: fields.BooleanField
  persistentStorage: fields.BooleanField
}

type PackageAuthorSchema = {
  /** The author name */
  name: fields.StringField<string, string, true, false, false>
  /** The author email address */
  email: fields.StringField<string, string, false, false, false>
  /** A website url for the author */
  url: fields.StringField<string, string, false, false, false>
  /** A Discord username for the author */
  discord: fields.StringField<string, string, false, false, false>
  flags: fields.ObjectField<Record<string, JSONValue | undefined>, Record<string, unknown>>
}

type PackageCompendiumSchema = {
  /** The canonical compendium name. This should contain no spaces or special characters */
  name: fields.StringField<string, string, true, false, false>
  /** The human-readable compendium name */
  label: fields.StringField<string, string, true, false, false>
  banner: fields.StringField<string, string, false, false, false>
  /** The local relative path to the compendium source directory. The filename should match the name attribute */
  path: fields.StringField<string, string, false, false, true>
  /** The specific document type that is contained within this compendium pack */
  type: fields.StringField<CONST.CompendiumDocumentType, CONST.CompendiumDocumentType, true, false, false>
  /** Denote that this compendium pack requires a specific game system to function properly */
  system: fields.StringField<string, string, false, false, false>
  //ownership: CompendiumOwnershipField
  flags: fields.ObjectField<Record<string, JSONValue | undefined>, Record<string, unknown>>
}
export type PackageCompendiumData = fields.ModelPropsFromSchema<PackageCompendiumSchema>

type PackageLanguageSchema = {
  /** A string language code which is validated by Intl.getCanonicalLocales */
  lang: fields.StringField<string, string, true, false, false>
  /** The human-readable language name */
  name: fields.StringField<string, string, false, false, true>
  /** The relative path to included JSON translation strings */
  path: fields.StringField<string, string, true, false, false>
  /** Only apply this set of translations when a specific system is being used */
  system: fields.StringField<string, string, false, false, false>
  /** Only apply this set of translations when a specific module is active */
  module: fields.StringField<string, string, false, false, false>
  flags: fields.ObjectField<Record<string, JSONValue | undefined>, Record<string, unknown>>
}
export type ReleaseData = object
