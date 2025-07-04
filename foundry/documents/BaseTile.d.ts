import { fields } from "foundry/data/_module.js"
import BaseScene from "./BaseScene.js"
import { DocumentMetadata } from "foundry/abstract/Document.js"
import { data } from "foundry/_module.js"

/**
 * The Document definition for a Tile.
 * Defines the DataSchema and common behaviors for a Tile which are shared between both client and server.
 * @memberof documents
 *
 * @param data    Initial data from which to construct the Tile
 * @param context Construction context options
 */
export default class BaseTile<TParent extends BaseScene | null> extends foundry.abstract.Document<TParent, TileSchema> {
  /* -------------------------------------------- */
  /*  Model Configuration                         */
  /* -------------------------------------------- */

  static override get metadata(): TileMetadata

  static override defineSchema(): TileSchema
}

export default interface BaseTile<TParent extends BaseScene | null>
  extends foundry.abstract.Document<TParent, TileSchema>,
    fields.ModelPropsFromSchema<TileSchema> {
  get documentName(): TileMetadata["name"]
}

interface TileMetadata extends DocumentMetadata {
  name: "Tile"
  collection: "tiles"
  label: "DOCUMENT.Tile"
  labelPlural: "DOCUMENT.Tiles"
}

type TileSchema = {
  /** The _id which uniquely identifies this Tile embedded document */
  _id: fields.DocumentIdField
  /** An image or video texture which this tile displays. */
  texture: data.TextureData
  /** The pixel width of the tile */
  width: fields.NumberField<number, number, true, false, true>
  /** The pixel height of the tile */
  height: fields.NumberField<number, number, true, false, true>
  /** The x-coordinate position of the top-left corner of the tile */
  x: fields.NumberField<number, number, true, false, true>
  /** The y-coordinate position of the top-left corner of the tile */
  y: fields.NumberField<number, number, true, false, true>
  /** The z-index ordering of this tile relative to its siblings */
  z: fields.NumberField<number, number, true, false, true>
  /** The angle of rotation for the tile between 0 and 360 */
  rotation: fields.AngleField
  /** The tile opacity */
  alpha: fields.AlphaField
  /** Is the tile currently hidden? */
  hidden: fields.BooleanField
  /** Is the tile currently locked? */
  locked: fields.BooleanField
  /** Is the tile an overhead tile? */
  overhead: fields.BooleanField
  roof: fields.BooleanField
  /** The tile's occlusion settings */
  occlusion: fields.SchemaField<TileOcclusionSchema>
  /** The tile's video settings */
  video: fields.SchemaField<TileVideoSchema>
  /** An object of optional key/value flags */
  flags: fields.DocumentFlagsField
}

type TileOcclusionSchema = {
  /** The occlusion mode from CONST.TILE_OCCLUSION_MODES */
  mode: fields.NumberField<CONST.TileOcclusionMode, CONST.TileOcclusionMode, false, true, true>
  /** The occlusion alpha between 0 and 1 */
  alpha: fields.AlphaField
  /** An optional radius of occlusion used for RADIAL mode */
  radius: fields.NumberField
}

type TileVideoSchema = {
  /** Automatically loop the video? */
  loop: fields.BooleanField
  /** Should the video play automatically? */
  autoplay: fields.BooleanField
  /** The volume level of any audio that the video file contains */
  volume: fields.AlphaField
}

export type TileSource = fields.SourceFromSchema<TileSchema>
