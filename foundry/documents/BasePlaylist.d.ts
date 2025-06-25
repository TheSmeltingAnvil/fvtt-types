import { DocumentMetadata } from "foundry/abstract/Document.js"
import EmbeddedCollection from "foundry/abstract/EmbeddedCollection.js"
import { fields } from "foundry/data/_module.js"
import BasePlaylistSound from "./BasePlaylistSound.js"
import BaseFolder from "./BaseFolder.js"

/** The Playlist document model. */
export default class BasePlaylist extends foundry.abstract.Document<null, PlaylistSchema> {
  static override get metadata(): PlaylistMetadata

  static override defineSchema(): PlaylistSchema
}

export default interface BasePlaylist
  extends foundry.abstract.Document<null, PlaylistSchema>,
    fields.ModelPropsFromSchema<PlaylistSchema> {
  get documentName(): PlaylistMetadata["name"]

  readonly sounds: EmbeddedCollection<any>
}

interface PlaylistMetadata extends DocumentMetadata {
  name: "Playlist"
  collection: "playlists"
  indexed: true
  compendiumIndexFields: ["_id", "name", "description", "sort", "folder"]
  embedded: { PlaylistSound: "sounds" }
  label: "DOCUMENT.Playlist"
  labelPlural: "DOCUMENT.Playlists"
}

type PlaylistSchema = {
  _id: fields.DocumentIdField
  name: fields.StringField<string, string, true, false, false>
  description: fields.StringField
  sounds: fields.EmbeddedCollectionField<BasePlaylistSound<BasePlaylist>>
  mode: fields.NumberField<CONST.PlaylistMode, CONST.PlaylistMode, true>
  playing: fields.BooleanField
  fade: fields.NumberField
  folder: fields.ForeignDocumentField<BaseFolder>
  sorting: fields.StringField<CONST.PlaylistSortMode, CONST.PlaylistSortMode, true, false, true>
  seed: fields.NumberField
  sort: fields.IntegerSortField
  ownership: fields.DocumentOwnershipField
  flags: fields.DocumentFlagsField
  _stats: fields.DocumentStatsField
}

export type PlaylistSource = fields.SourceFromSchema<PlaylistSchema>
