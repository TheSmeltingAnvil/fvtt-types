export type PackageAuthorData = {
  /**
   * The author name
   */
  name: string
  /**
   * The author email address
   */
  email?: string | undefined
  /**
   * A website url for the author
   */
  url?: string | undefined
  /**
   * A Discord username for the author
   */
  discord?: string | undefined
}
export type CompendiumArtFlag = {
  /**
   * The path to the art mapping file.
   */
  mapping: string
  /**
   * An optional credit string for use by the game system to apply in an appropriate place.
   */
  credit?: string | undefined
}
/**
 * Flags used by the core software.
 */
export type PackageFlagsData = {
  /**
   * Can you upload to this package's folder using the built-in FilePicker.
   */
  canUpload: boolean
  /**
   * Configuration information for hot reload logic
   */
  hotReload: {
    extensions: string[]
    paths: string[]
  }
  /**
   * Mapping information for CompendiumArt
   * Each key is a unique system ID, e.g. "dnd5e" or "pf2e".
   */
  compendiumArtMappings: Record<string, CompendiumArtFlag>
  /**
   * A mapping of token subject paths
   * to configured subject images.
   */
  tokenRingSubjectMappings: Record<string, string>
}
export type PackageMediaData = {
  /**
   * Usage type for the media asset. "setup" means it will be used on the setup screen.
   */
  type?: string | undefined
  /**
   * A web url link to the media element.
   */
  url?: string | undefined
  /**
   * A caption for the media element.
   */
  caption?: string | undefined
  /**
   * Should the media play on loop?
   */
  loop?: boolean | undefined
  /**
   * A link to the thumbnail for the media element.
   */
  thumbnail?: string | undefined
  /**
   * An object of optional key/value flags.
   */
  flags?: object | undefined
}
export type PackageCompendiumData = {
  /**
   * The canonical compendium name. This should contain no spaces or special characters
   */
  name: string
  /**
   * The human-readable compendium name
   */
  label: string
  /**
   * The local relative path to the compendium source directory. The filename should match
   * the name attribute
   */
  path: string
  /**
   * The specific document type that is contained within this compendium pack
   */
  type: string
  /**
   * A file path to a banner image that will be used in the Compendium sidebar. This should
   *     be hosted within your package, e.g. `modules/my-module/assets/banners/bestiary.webp`.
   *     The dimensions are 290 x 70; you can either have each be an individual landscape or
   *     slice them up to form a composite with your other compendiums, but keep in mind that
   *     users can reorder compendium packs as well as filter them to break up the composite.
   */
  banner?: string | undefined
  /**
   * Denote that this compendium pack requires a specific game system to function properly.
   *     Required for "Actor" and "Item" packs, but even others should keep in mind that system
   *     specific features and subtypes (e.g. JournalEntryPage) may present limitations.
   */
  system?: string | undefined
}
export type PackFolderData = {
  /**
   * Name for the folder. Multiple packages with identical folder names will merge by name.
   */
  name: string
  /**
   * Alphabetical or manual sorting.
   */
  sorting: "a" | "m"
  /**
   * A hex string for the pack's color.
   */
  color: string
  /**
   * A list of the pack names to include in this folder.
   */
  packs: string[]
  /**
   * Nested folder data, up to three levels.
   */
  folders: PackFolderData[]
}
export type PackageLanguageData = {
  /**
   * A string language code which is validated by Intl.getCanonicalLocales
   */
  lang: string
  /**
   * The human-readable language name
   */
  name: string
  /**
   * The relative path to included JSON translation strings
   */
  path: string
  /**
   * Only apply this set of translations when a specific system is being used
   */
  system?: string | undefined
  /**
   * Only apply this set of translations when a specific module is active
   */
  module?: string | undefined
}
export type RelatedPackageData = {
  /**
   * The id of the related package
   */
  id: string
  /**
   * The type of the related package
   */
  type: string
  /**
   * An explicit manifest URL, otherwise learned from the Foundry web
   *                       server
   */
  manifest?: string | undefined
  /**
   * The compatibility data with this related Package
   */
  compatibility?: PackageCompatibilityData | undefined
  /**
   * The reason for this relationship
   */
  reason?: string | undefined
}
/**
 * See {@linkcode foundry.utils.isNewerVersion} for the function used for comparison.
 */
export type PackageCompatibilityData = {
  /**
   * The Package will not function before this version
   */
  minimum: string
  /**
   * Verified compatible up to this version
   */
  verified: string
  /**
   * The Package will not function after this version
   */
  maximum: string
}
export type PackageRelationshipsData = {
  /**
   * Systems that this Package supports
   */
  systems: RelatedPackage[]
  /**
   * Packages that are required for base functionality
   */
  requires: RelatedPackage[]
  /**
   * Packages that are recommended for optimal functionality
   */
  recommends: RelatedPackage[]
}
/**
 * The data structure of a package manifest. This data structure is extended by BasePackage subclasses to add additional
 * type-specific fields.
 */
export type PackageManifestData = {
  /**
   * The machine-readable unique package id, should be lower-case with no spaces or
   * special characters
   */
  id: string
  /**
   * The human-readable package title, containing spaces and special characters
   */
  title: string
  /**
   * The current package version. It is recommended to stick to dot-separated numbers
   * like "5.0.3" and to not include a leading "v" to avoid string comparison.
   * See {@linkcode foundry.utils.isNewerVersion}.
   */
  version: string
  /**
   * The compatibility of this version with the core Foundry
   * software. See https://foundryvtt.com/article/versioning/ for more info on how the
   * core software structures its releases.
   */
  compatibility?: PackageCompatibilityData | undefined
  /**
   * A publicly accessible web URL which provides the latest available package manifest
   *       file. Required in order to support package updates.
   */
  manifest?: string | undefined
  /**
   * A publicly accessible web URL where the source files for this package may be
   *       downloaded. Required in order to support package installation.
   */
  download?: string | undefined
  /**
   * An array of urls or relative file paths for JavaScript files to include
   */
  scripts?: string[] | undefined
  /**
   * An array of urls or relative file paths for ESModule files to include
   */
  esmodules?: string[] | undefined
  /**
   * An array of urls or relative file paths for CSS stylesheet files to include
   */
  styles?: string[] | undefined
  /**
   * An optional package description, may contain HTML. Visible on the Setup screen
   *    in "gallery" view as well as in the "Module Management" application.
   */
  description?: string | undefined
  /**
   * An array of author objects who are co-authors of this package.
   */
  authors?: PackageAuthorData[] | undefined
  /**
   * A web url where more details about the package may be found
   */
  url?: string | undefined
  /**
   * A web url or relative file path where license details may be found
   */
  license?: string | undefined
  /**
   * A web url or relative file path where readme instructions may be found
   */
  readme?: string | undefined
  /**
   * A web url where bug reports may be submitted and tracked
   */
  bugs?: string | undefined
  /**
   * A web url where notes detailing package updates are available
   */
  changelog?: string | undefined
  /**
   * An array of objects containing media info about the package.
   */
  media: PackageMediaData[]
  /**
   * An array of language data objects which are included by this package
   */
  languages?: PackageLanguageData[] | undefined
  /**
   * An array of compendium packs which are included by this package
   */
  packs?: PackageCompendiumData[] | undefined
  /**
   * An array of pack folders that will be initialized once per world.
   */
  packFolders?: PackFolderData[] | undefined
  /**
   * An organized object of relationships to other Packages
   */
  relationships?: PackageRelationshipsData | undefined
  /**
   * Whether to require a package-specific socket namespace for this package
   */
  socket?: boolean | undefined
  /**
   * Whether updates should leave the contents of the package's /storage folder.
   */
  persistentStorage?: boolean | undefined
  /**
   * An object of optional key/value flags. Packages can use this namespace for their
   *  own purposes, preferably within a namespace matching their package ID.
   */
  flags?: PackageFlagsData | undefined
  /**
   * Whether this package uses the protected content access system.
   */
  protected?: boolean | undefined
  /**
   * Whether this package is a free Exclusive pack.
   */
  exclusive?: boolean | undefined
}
/**
 * Fields that need dedicated server-side handling. Paths are automatically relative to `system`.
 */
export type ServerSanitizationFields = {
  /**
   * HTML fields that must be cleaned by the server, e.g. "description.value"
   */
  htmlFields: string[]
  /**
   * File path fields that must be cleaned by the server.
   * Each key is a field path and the values are an array of keys in {@linkcode CONST.FILE_CATEGORIES}.
   */
  filePathFields: Record<string, string[]>
  /**
   * Fields that can only be updated by a GM user.
   */
  gmOnlyFields: string[]
}
/**
 * Document subtype registration information for systems and modules.
 * The first layer of keys are document types, e.g. "Actor" or "Item".
 * The second layer of keys are document subtypes, e.g. "character" or "feature".
 */
export type DocumentTypesConfiguration = Record<string, Record<string, ServerSanitizationFields>>
/**
 * Manifest properties exclusive to systems.
 */
export type _SystemManifestData = {
  /**
   * Additional document subtypes provided by this system.
   */
  documentTypes?: DocumentTypesConfiguration | undefined
  /**
   * A web URL or local file path which provides a default background banner for
   *         worlds which are created using this system
   */
  background?: string | undefined
  /**
   * A default initiative formula used for this system.
   */
  initiative?: string | undefined
  /**
   * The default grid settings to use for Scenes in this system.
   */
  grid?:
    | {
        /**
         * A default grid type to use for Scenes in this system.
         */
        type?: GridType | undefined
        /**
         * A default distance measurement to use for Scenes in this system.
         */
        distance?: number | undefined
        /**
         * A default unit of measure to use for distance measurement in this system.
         */
        units?: string | undefined
        /**
         * The default rule used by this system for diagonal measurement on
         * square and hexagonal grids.
         */
        diagonals?: GridDiagonalRule | undefined
      }
    | undefined
  /**
   * An Actor data attribute path to use for Token primary resource bars
   */
  primaryTokenAttribute?: string | undefined
  /**
   * An Actor data attribute path to use for Token secondary resource bars
   */
  secondaryTokenAttribute?: string | undefined
}
/**
 * The data structure for system.json.
 */
export type SystemManifestData = PackageManifestData & _SystemManifestData
/**
 * Manifest properties exclusive to modules.
 */
export type _ModuleManifestData = {
  /**
   * Does this module provide a translation for the core software?
   */
  coreTranslation?: boolean | undefined
  /**
   * A library module provides no user-facing functionality and is solely
   *                  for use by other modules. Loaded before any system or module scripts.
   */
  library?: boolean | undefined
  /**
   * Additional document subtypes provided by this module.
   */
  documentTypes?: DocumentTypesConfiguration | undefined
}
/**
 * The data structure for module.json.
 */
export type ModuleManifestData = PackageManifestData & _ModuleManifestData
/**
 * Manifest properties exclusive to worlds.
 */
export type _WorldManifestData = {
  /**
   * The game system name which this world relies upon
   */
  system: string
  /**
   * The version of the core software for which this world has been migrated
   */
  coreVersion: string
  /**
   * The version of the game system for which this world has been migrated
   */
  systemVersion: string
  /**
   * A web URL or local file path which provides a background banner image
   */
  background?: string | undefined
  /**
   * An ISO datetime string when the next game session is scheduled to occur
   */
  nextSession?: string | undefined
  /**
   * Should user access keys be reset as part of the next launch?
   */
  resetKeys?: boolean | undefined
  /**
   * Should the world launch in safe mode?
   */
  safeMode?: boolean | undefined
  /**
   * The theme to use for this world's join page.
   */
  joinTheme?: string | undefined
  /**
   * Configuration for demo worlds.
   */
  demo?:
    | {
        /**
         * Path to the world's fresh data.
         */
        sourceZip?: string | undefined
      }
    | undefined
}
/**
 * The data structure for world.json.
 */
export type WorldManifestData = PackageManifestData & _WorldManifestData
import type { GridDiagonalRule, GridType } from "../constants.mjs"
import { RelatedPackage } from "./base-package.mts"
