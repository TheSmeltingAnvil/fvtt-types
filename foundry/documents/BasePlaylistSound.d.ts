import { DocumentMetadata } from "foundry/abstract/Document.js"
import { fields } from "foundry/data/_module.js"
import BasePlaylist from "./BasePlaylist.js"
import BaseUser from "./BaseUser.js"

/** The PlaylistSound document model. */
export default class BasePlaylistSound<TParent extends BasePlaylist | null = BasePlaylist | null> extends foundry
  .abstract.Document<TParent, PlaylistSoundSchema> {
  static override get metadata(): PlaylistSoundMetadata

  static override defineSchema(): PlaylistSoundSchema

  testUserPermission(
    user: BaseUser,
    permission: CONST.DocumentOwnershipString | CONST.DocumentOwnershipLevel,
    { exact }?: { exact?: boolean },
  ): boolean
}

export default interface BasePlaylistSound<TParent extends BasePlaylist | null = BasePlaylist | null>
  extends foundry.abstract.Document<TParent, PlaylistSoundSchema>,
    fields.ModelPropsFromSchema<PlaylistSoundSchema> {
  getDocumentName: PlaylistSoundMetadata["name"]
}

interface PlaylistSoundMetadata extends DocumentMetadata {
  name: "PlaylistSound"
  collection: "sounds"
  indexed: true
  label: "DOCUMENT.PlaylistSound"
  labelPlural: "DOCUMENT.PlaylistSounds"
}

type PlaylistSoundSchema = {
  /** The _id which uniquely identifies this PlaylistSound document */
  _id: fields.DocumentIdField
  /** The name of this sound */
  name: fields.StringField<string, string, true, false, false>
  /** The description of this sound */
  description: fields.StringField
  /** The audio file path that is played by this sound */
  path: fields.FilePathField<foundry.abstract.AudioFilePath>
  /** Is this sound currently playing? */
  playing: fields.BooleanField
  /** The time in seconds at which playback was paused */
  pausedTime: fields.NumberField
  /** Does this sound loop? */
  repeat: fields.BooleanField
  /** The audio volume of the sound, from 0 to 1 */
  volume: fields.AlphaField
  /** A duration in milliseconds to fade volume transition */
  fade: fields.NumberField
  /** The sort order of the PlaylistSound relative to others in the same collection */
  sort: fields.IntegerSortField
  /** An object of optional key/value flags */
  flags: fields.DocumentFlagsField
}

export type PlaylistSoundSource = fields.SourceFromSchema<PlaylistSoundSchema>
