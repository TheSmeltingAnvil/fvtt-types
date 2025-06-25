import DataModel from "foundry/abstract/DataModel.js"
import { fields } from "foundry/data/_module.js"

/** A custom SchemaField for defining package compatibility versions. */
export class PackageCompatibility extends fields.SchemaField<PackageCompatibilitySchema> {
  constructor(
    options: foundry.data.types.DataFieldOptions<
      fields.SourceFromSchema<PackageCompatibilitySchema>,
      true,
      false,
      true
    >,
  )
}

type PackageCompatibilitySchema = {
  /** The Package will not function before this version */
  minimum: fields.StringField<string, string, false, false, false>
  /** Verified compatible up to this version */
  verified: fields.StringField<string, string, false, false, false>
  /** The Package will not function after this version */
  maximum: fields.StringField<string, string, false, false, false>
}

/** A custom SchemaField for defining package relationships. */
export class PackageRelationships extends fields.SchemaField<PackageRelationshipsSchema> {
  constructor(
    options?: foundry.data.types.DataFieldOptions<
      fields.SourceFromSchema<PackageRelationshipsSchema>,
      true,
      false,
      true
    >,
  )
}

type PackageRelationshipsSchema = {
  /** Systems that this Package supports */
  systems: fields.SetField<foundry.packages.RelatedPackage>
  /** Packages that are required for base functionality */
  requires: fields.SetField<RelatedPackage>
  /** Packages that are recommended for optimal functionality */
  recommends: fields.SetField<RelatedPackage>
  conflicts: fields.SetField<RelatedPackage>
  flags: fields.ObjectField<Record<string, JSONValue | undefined>, Record<string, unknown>>
}

/** A special SetField which provides additional validation and initialization behavior specific to compendium packs. */
export class PackageCompendiumPacks<TSchema extends foundry.packages.PackageCompendiumSchema> extends fields.SetField<
  fields.SchemaField<TSchema>
> {
  protected override _cleanType(value: Record<string, unknown>[], options?: Record<string, unknown>): void

  override initialize(
    value: fields.SourceFromSchema<TSchema>[],
    model: ConstructorOf<DataModel>,
    options?: Record<string, unknown>,
  ): Set<fields.ModelPropsFromSchema<TSchema>>

  /** Extend the logic for validating the complete set of packs to ensure uniqueness. */
  protected override _validateElements(value: unknown[], options?: Record<string, unknown>): void

  /** Validate each individual compendium pack, ensuring its name and path are unique. */
  protected _validateElement(value: unknown, options?: Record<string, unknown>): void
}

/** A custom SchemaField for defining the folder structure of the included compendium packs. */
export class PackageCompendiumFolder extends fields.SchemaField<PackageCompendiumFolderSchema> {
  constructor(options?: foundry.data.types.DataFieldOptions<PackageCompendiumFolderSchema, true, false, true>)
}

type PackageCompendiumFolderSchema = {
  name: fields.StringField<string, string, true, false, false>
  sorting: fields.StringField<"a" | "m">
  color: fields.ColorField
  packs: fields.SetField<fields.StringField<string, string, true, false, false>>
}

/**
 * A custom SchemaField for defining a related Package.
 * It may be required to be a specific type of package, by passing the packageType option to the constructor.
 */
export class RelatedPackage extends fields.SchemaField<RelatedPackageSchema> {
  constructor(
    options?: foundry.data.types.DataFieldOptions<fields.SourceFromSchema<RelatedPackageSchema>, true, false, true>,
  )
}

type RelatedPackageSchema = {
  id: fields.StringField<string, string, true, false, false>
  type: fields.StringField<CONST.PackageType>
  manifest: fields.StringField<string, string, false, false, false>
  compatibility: PackageCompatibility
  reason: fields.StringField<string, string, false, false, false>
}
