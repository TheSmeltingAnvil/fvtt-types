/** @module documents */

//export * from "common/documents/_module";
//export * from "./_types";

export * as abstract from "./abstract/_module.js"
export { default as Adventure } from "./Adventure.js"
export * as collections from "./collections/_module.js"
//export * from "./constants.js"
export { default as Setting } from "./Setting.js"

import { default as Actor } from "./Actor.js"
import Adventure from "./Adventure.js"
import { default as Cards } from "./Cards.js"
import { default as ChatMessage } from "./ChatMessage.js"
import { default as Combat } from "./Combat.js"
import { default as FogExploration } from "./FogExploration.js"
import { default as Folder } from "./Folder.js"
import { default as Item } from "./Item.js"
import { default as JournalEntry } from "./JournalEntry.js"
import { default as Macro } from "./Macro.js"
import { default as Playlist } from "./Playlist.js"
import { default as RollTable } from "./RollTable.js"
import { default as Scene } from "./Scene.js"
import { default as User } from "./User.js"

export {
  Actor,
  Cards,
  ChatMessage,
  Combat,
  FogExploration,
  Folder,
  Item,
  JournalEntry,
  Macro,
  Playlist,
  RollTable,
  Scene,
  User,
}

// Base (common) Documents
export * from "./BaseActiveEffect.js"
export { default as BaseActiveEffect } from "./BaseActiveEffect.js"
export * from "./BaseActor.js"
export { default as BaseActor } from "./BaseActor.js"
export * from "./BaseActorDelta.js"
export { default as BaseActorDelta } from "./BaseActorDelta.js"
export * from "./BaseAdventure.js"
export { default as BaseAdventure } from "./BaseAdventure.js"
export * from "./BaseAmbientLight.js"
export { default as BaseAmbientLight } from "./BaseAmbientLight.js"
export * from "./BaseAmbientSound.js"
export { default as BaseAmbientSound } from "./BaseAmbientSound.js"
export * from "./BaseCard.js"
export { default as BaseCard } from "./BaseCard.js"
export * from "./BaseCards.js"
export { default as BaseCards } from "./BaseCards.js"
export * from "./BaseChatMessage.js"
export { default as BaseChatMessage } from "./BaseChatMessage.js"
export * from "./BaseCombat.js"
export { default as BaseCombat } from "./BaseCombat.js"
export * from "./BaseCombatant.js"
export { default as BaseCombatant } from "./BaseCombatant.js"
export * from "./BaseCombatantGroup.js"
export { default as BaseCombatantGroup } from "./BaseCombatantGroup.js"
export * from "./BaseDrawing.js"
export { default as BaseDrawing } from "./BaseDrawing.js"
export * from "./BaseFogExploration.js"
export { default as BaseFogExploration } from "./BaseFogExploration.js"
export * from "./BaseFolder.js"
export { default as BaseFolder } from "./BaseFolder.js"
export * from "./BaseItem.js"
export { default as BaseItem } from "./BaseItem.js"
export * from "./BaseJournalEntry.js"
export { default as BaseJournalEntry } from "./BaseJournalEntry.js"
export * from "./BaseJournalEntryPage.js"
export { default as BaseJournalEntryPage } from "./BaseJournalEntryPage.js"
export * from "./BaseMacro.js"
export { default as BaseMacro } from "./BaseMacro.js"
export * from "./BaseMeasuredTemplate.js"
export { default as BaseMeasuredTemplate } from "./BaseMeasuredTemplate.js"
export * from "./BaseNote.js"
export { default as BaseNote } from "./BaseNote.js"
export * from "./BasePlaylist.js"
export { default as BasePlaylist } from "./BasePlaylist.js"
export * from "./BasePlaylistSound.js"
export { default as BasePlaylistSound } from "./BasePlaylistSound.js"
export * from "./BaseRegion.js"
export { default as BaseRegion } from "./BaseRegion.js"
export * from "./BaseRegionBehavior.js"
export { default as BaseRegionBehavior } from "./BaseRegionBehavior.js"
export * from "./BaseRollTable.js"
export { default as BaseRollTable } from "./BaseRollTable.js"
export * from "./BaseScene.js"
export { default as BaseScene } from "./BaseScene.js"
export * from "./BaseSetting.js"
export { default as BaseSetting } from "./BaseSetting.js"
export * from "./BaseTableResult.js"
export { default as BaseTableResult } from "./BaseTableResult.js"
export * from "./BaseTile.js"
export { default as BaseTile } from "./BaseTile.js"
export * from "./BaseToken.js"
export { default as BaseToken } from "./BaseToken.js"
export * from "./BaseUser.js"
export { default as BaseUser } from "./BaseUser.js"
export * from "./BaseWall.js"
export { default as BaseWall } from "./BaseWall.js"

// Embedded Documents
export { default as ActiveEffect } from "./ActiveEffect.js"
export { default as ActorDelta } from "./ActorDelta.js"
export { default as Card } from "./Card.js"
export { default as CombatantGroup } from "./CombatantGroup.js"
export { default as Combatant } from "./Combatant.js"
export { default as JournalEntryCategory } from "./JournalEntryCategory.js"
export { default as JournalEntryPage } from "./JournalEntryPage.js"
export { default as PlaylistSound } from "./PlaylistSound.js"
export { default as RegionBehavior } from "./RegionBehavior.js"
export { default as TableResult } from "./TableResult.js"

// Canvas Documents
export { default as AmbientLightDocument } from "./AmbientLightDocument.js"
export { default as AmbientSoundDocument } from "./AmbientSoundDocument.js"
export { default as DrawingDocument } from "./DrawingDocument.js"
export { default as MeasuredTemplateDocument } from "./MeasuredTemplateDocument.js"
export { default as NoteDocument } from "./NoteDocument.js"
export { default as RegionDocument } from "./RegionDocument.js"
export { default as TileDocument } from "./TileDocument.js"
export { default as TokenDocument } from "./TokenDocument.js"
export { default as WallDocument } from "./WallDocument.js"

export type WorldDocument =
  | Actor<null>
  | Cards
  | ChatMessage
  | Combat
  | Folder
  | FogExploration
  | Item<null>
  | JournalEntry
  | Macro
  | Playlist
  | RollTable
  | Scene
  | User

export type CompendiumDocument =
  | Actor<null>
  | Adventure
  | Cards
  | Item<null>
  | JournalEntry
  | Macro
  | Playlist
  | RollTable
  | Scene

export type { ItemSource } from "./BaseItem.js"

export type ActorUUID = `Actor.${string}` | `${TokenDocumentUUID}.Actor.${string}` | CompendiumActorUUID
export type CompendiumActorUUID = `Compendium.${string}.Actor.${string}`
export type CompendiumItemUUID = `Compendium.${string}.Item.${string}`
export type CompendiumUUID = `Compendium.${string}.${CONST.CompendiumDocumentType}.${string}`
export type DocumentUUID = foundry.documents.WorldDocumentUUID | CompendiumUUID | foundry.documents.TokenDocumentUUID
export type EmbeddedItemUUID = `Actor.${string}.Item.${string}`
export type ItemUUID = WorldItemUUID | EmbeddedItemUUID | CompendiumItemUUID
export type TokenDocumentUUID = `Scene.${string}.Token.${string}`
export type UserUUID = `User.${string}`
export type WorldDocumentUUID = `${CONST.WorldDocumentType}.${string}`
export type WorldItemUUID = `Item.${string}`

export * as types from "./_types.js"
