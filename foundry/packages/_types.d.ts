export interface PackageAuthorData {
  /** A Discord username for the author. */
  discord?: string
  /** The author email address. */
  email?: string
  /** The author name. */
  name: string
  /** A website url for the author. */
  url?: string
}

export interface PackageCompatibilityBadge {
  /** An optional icon displayed in the badge. */
  icon?: string
  /** An optional text label displayed in the badge. */
  label?: string
  /** A tooltip string displayed when hovering over the badge. */
  tooltip: string
  /** A type in "safe", "unsafe", "warning", "neutral" applied as a CSS class. */
  type: string
}

export interface PackageCompatibilityData {
  /** The Package will not function after this version. */
  maximum: string
  /** The Package will not function before this version. */
  minimum: string
  /** Verified compatible up to this version. */
  verified: string
}

export interface PackageCompendiumData {
  /** The human-readable compendium name. */
  label: string
  /** The canonical compendium name. This should contain no spaces or special characters. */
  name: string
  /**
   * The local relative path to the compendium source directory.
   * The filename should match the name attribute .
   */
  path: string
  /**
   * Denote that this compendium pack requires a specific
   * game system to function properly.
   */
  system?: string
  /** The specific document type that is contained within this compendium pack. */
  type: string
}

export interface PackageLanguageData {
  /** A string language code which is validated by Intl.getCanonicalLocales. */
  lang: string
  /** Only apply this set of translations when a specific module is active. */
  module?: string
  /** The human-readable language name. */
  name: string
  /** The relative path to included JSON translation strings. */
  path: string
  /** Only apply this set of translations when a specific system is being used. */
  system?: string
}

export interface PackageManifestData {
  /**
   * An array of author objects who are co-authors of this package. Preferred to the singular author field.
   */
  authors?: PackageAuthorData[]
  /** A web url where bug reports may be submitted and tracked. */
  bugs?: string
  /** A web url where notes detailing package updates are available. */
  changelog?: string
  /** The compatibility of this version with the core Foundry software. */
  compatibility?: PackageCompatibilityData
  /** An optional package description, may contain HTML. */
  description?: string
  /**
   * A publicly accessible web URL where the source files for this package may be downloaded.
   * Required in order to support module installation.
   */
  download?: string
  /** An array of urls or relative file paths for ESModule files which should be included. */
  esmodules?: string[]
  /** The machine-readable unique package id, should be lower-case with no spaces or special characters. */
  id: string
  /** An array of language data objects which are included by this package. */
  languages?: PackageLanguageData[]
  /** A web url or relative file path where license details may be found. */
  license?: string
  /**
   * A publicly accessible web URL which provides the latest available package manifest file. Required in order to
   * support module updates.
   */
  manifest?: string
  /** An array of compendium packs which are included by this package. */
  packs?: PackageCompendiumData[]
  /** Whether this package uses the protected content access system. */
  protected?: boolean
  /** A web url or relative file path where readme instructions may be found. */
  readme?: string
  /** An organized object of relationships to other Packages. */
  relationships?: PackageRelationshipsData
  /** An array of urls or relative file paths for JavaScript files which should be included. */
  scripts?: string[]
  /** Whether to require a package-specific socket namespace for this package. */
  socket?: boolean
  /** An array of urls or relative file paths for CSS stylesheet files which should be included. */
  styles?: string[]
  /** The human-readable package title, containing spaces and special characters. */
  title: string
  /** A web url where more details about the package may be found. */
  url?: string
  /** The current package version. */
  version: string
}

export interface PackageRelationshipsData {
  /** Packages that are recommended for optimal functionality. */
  recommends: RelatedPackageData[]
  /** Packages that are required for base functionality. */
  requires: RelatedPackageData[]
  /** Systems that this Package supports. */
  systems: RelatedPackageData[]
}

export interface RelatedPackageData {
  /** The compatibility data with this related Package. */
  compatibility?: any
  /** The id of the related package. */
  id: string
  /** An explicit manifest URL, otherwise learned from the Foundry web server. */
  manifest?: string
  /** The reason for this relationship. */
  reason?: string
  /** The type of the related package. */
  type: string
}

export type DocumentTypesConfiguration = Record<string, Record<string, object>>
