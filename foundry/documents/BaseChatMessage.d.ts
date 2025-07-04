import { DocumentMetadata } from "foundry/abstract/Document.js"
import { fields } from "foundry/data/_module.js"
import { DocumentFlags } from "foundry/data/_types.js"
import BaseUser from "./BaseUser.js"
import { DatabaseCreateOperation } from "foundry/abstract/_types.js"
import { DatabaseCreateCallbackOptions } from "./abstract/_module.js"

/**
 * The ChatMessage document model.
 * @memberof documents
 *
 * @param data    Initial data from which to construct the document.
 * @property data The constructed data object for the document.
 */
export default class BaseChatMessage<TUser extends BaseUser | null = BaseUser | null> extends foundry.abstract.Document<
  null,
  ChatMessageSchema
> {
  static override get metadata(): ChatMessageMetadata

  static override defineSchema(): ChatMessageSchema

  declare author: TUser

  override getUserLevel(user: BaseUser): CONST.DocumentOwnershipLevel
}

export default interface BaseChatMessage<TUser extends BaseUser | null>
  extends foundry.abstract.Document<null, ChatMessageSchema>,
    Omit<fields.ModelPropsFromSchema<ChatMessageSchema>, "author"> {
  get documentName(): ChatMessageMetadata["name"]

  author: TUser
}

declare type ChatMessageSchema = {
  /** The _id which uniquely identifies this ChatMessage document */
  _id: fields.DocumentIdField
  /** An ChatMessage subtype which configures the system data model applied */
  type: fields.DocumentTypeField<string, string, true, false, true, BaseChatMessage>
  /** The system data object */
  system: fields.TypeDataField
  /** The message style from CONST.CHAT_MESSAGE_STYLES */
  style: fields.NumberField<CONST.ChatMessageStyle, CONST.ChatMessageStyle, true, true, true>
  /** The _id of the User document who generated this message */
  author: fields.ForeignDocumentField<BaseUser, true, false, true>
  /** The timestamp at which point this message was generated */
  timestamp: fields.NumberField<number, number, true, false, true>
  /** An optional flavor text message which summarizes this message */
  flavor: fields.HTMLField
  /** The HTML content of this chat message */
  content: fields.HTMLField
  /** A ChatSpeakerData object which describes the origin of the ChatMessage */
  speaker: fields.SchemaField<ChatSpeakerSchema>
  /** An array of User _id values to whom this message is privately whispered */
  whisper: fields.ArrayField<fields.ForeignDocumentField<string>>
  /** Is this message sent blindly where the creating User cannot see it? */
  blind: fields.BooleanField
  /** Serialized content of any Roll instances attached to the ChatMessage */
  rolls: fields.ArrayField<fields.JSONField<Roll, true>>
  /** The URL of an audio file which plays when this message is received */
  sound: fields.FilePathField<foundry.abstract.AudioFilePath>
  /** Is this message styled as an emote? */
  emote: fields.BooleanField
  /** An object of optional key/value flags */
  flags: fields.DocumentFlagsField
  /** An object of creation and access information. */
  _stats: fields.DocumentStatsField
}

export type ChatMessageFlags = DocumentFlags & {
  core?: {
    canPopout?: boolean
    initiativeRoll?: boolean
    RollTable?: string
  }
}

declare type ChatSpeakerSchema = {
  /** The _id of the Scene where this message was created */
  scene: fields.ForeignDocumentField<string>
  /** The _id of the Actor who generated this message */
  actor: fields.ForeignDocumentField<string>
  /** The _id of the Token who generated this message */
  token: fields.ForeignDocumentField<string>
  /** An overridden alias name used instead of the Actor or Token name */
  alias: fields.StringField<string, string, false, false, true>
}

export type ChatSpeakerData = fields.SourceFromSchema<ChatSpeakerSchema>

interface ChatMessageMetadata extends DocumentMetadata {
  name: "ChatMessage"
  collection: "messages"
  label: "DOCUMENT.ChatMessage"
  labelPlural: "DOCUMENT.ChatMessages"
  isPrimary: true
}

export interface ChatMessageCreateOperation extends DatabaseCreateOperation<null> {
  rollMode?: CONST.RollMode | "roll"
}

export interface ChatMessageCreateCallbackOptions extends DatabaseCreateCallbackOptions {
  rollMode?: CONST.RollMode | "roll"
}

export type ChatMessageSource = fields.SourceFromSchema<ChatMessageSchema>
