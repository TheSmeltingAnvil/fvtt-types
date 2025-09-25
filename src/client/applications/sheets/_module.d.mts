/**
 * Initialize default sheet configurations for all Document types.
 * @internal
 */
export function _registerDefaultSheets(): void;
export { default as AdventureExporter } from "./adventure-exporter.mjs";
export { default as BaseSheet } from "./base-sheet.mjs";
import * as journal from "./journal/_module.mjs";
import ActiveEffectConfig from "./active-effect-config.mjs";
import ActorSheetV2 from "./actor-sheet.mjs";
import AdventureImporterV2 from "./adventure-importer.mjs";
import AmbientLightConfig from "./ambient-light-config.mjs";
import AmbientSoundConfig from "./ambient-sound-config.mjs";
import CardConfig from "./card-config.mjs";
import { CardDeckConfig } from "./cards-config.mjs";
import { CardHandConfig } from "./cards-config.mjs";
import { CardPileConfig } from "./cards-config.mjs";
import { CardsConfig } from "./cards-config.mjs";
import CombatantConfig from "./combatant-config.mjs";
import DrawingConfig from "./drawing-config.mjs";
import FolderConfig from "./folder-config.mjs";
import ItemSheetV2 from "./item-sheet.mjs";
import MacroConfig from "./macro-config.mjs";
import NoteConfig from "./note-config.mjs";
import PlaylistConfig from "./playlist-config.mjs";
import PlaylistSoundConfig from "./playlist-sound-config.mjs";
import RegionBehaviorConfig from "./region-behavior-config.mjs";
import RegionConfig from "./region-config.mjs";
import RollTableSheet from "./roll-table-sheet.mjs";
import MeasuredTemplateConfig from "./template-config.mjs";
import SceneConfig from "./scene-config.mjs";
import TableResultConfig from "./table-result-config.mjs";
import TileConfig from "./tile-config.mjs";
import { TokenConfig } from "./token/_module.mjs";
import { PrototypeTokenConfig } from "./token/_module.mjs";
import UserConfig from "./user-config.mjs";
import WallConfig from "./wall-config.mjs";
export { journal, ActiveEffectConfig, ActorSheetV2, ActorSheetV2 as ActorSheet, AdventureImporterV2, AdventureImporterV2 as AdventureImporter, AmbientLightConfig, AmbientSoundConfig, CardConfig, CardDeckConfig, CardHandConfig, CardPileConfig, CardsConfig, CombatantConfig, DrawingConfig, FolderConfig, ItemSheetV2, ItemSheetV2 as ItemSheet, MacroConfig, NoteConfig, PlaylistConfig, PlaylistSoundConfig, RegionBehaviorConfig, RegionConfig, RollTableSheet, MeasuredTemplateConfig, SceneConfig, TableResultConfig, TileConfig, TokenConfig, PrototypeTokenConfig, UserConfig, WallConfig };
