import {
  ACTIVE_EFFECT_MODES,
  AUDIO_FILE_EXTENSIONS,
  CANVAS_PERFORMANCE_MODES,
  CHAT_MESSAGE_STYLES,
  DICE_ROLL_MODES,
  DOCUMENT_OWNERSHIP_LEVELS,
  DRAWING_FILL_TYPES,
  FILE_CATEGORIES,
  FOLDER_DOCUMENT_TYPES,
  GRID_DIAGONALS,
  GRID_SNAPPING_MODES,
  GRID_TYPES,
  IMAGE_FILE_EXTENSIONS,
  JOURNAL_ENTRY_PAGE_FORMATS,
  LIGHTING_LEVELS,
  MACRO_SCOPES,
  MACRO_TYPES,
  MEASURED_TEMPLATE_TYPES,
  PACKAGE_TYPES,
  PLAYLIST_MODES,
  REGION_EVENTS,
  REGION_MOVEMENT_SEGMENTS,
  TABLE_RESULT_TYPES,
  TEXT_ANCHOR_POINTS,
  TEXTURE_DATA_FIT_MODES,
  TILE_OCCLUSION_MODES,
  TOKEN_DISPLAY_MODES,
  TOKEN_DISPOSITIONS,
  TOKEN_SHAPES,
  USER_PERMISSIONS,
  USER_ROLE_NAMES,
  USER_ROLES,
  VIDEO_FILE_EXTENSIONS,
  WALL_DIRECTIONS,
  WALL_DOOR_STATES,
  WALL_DOOR_TYPES,
  WALL_MOVEMENT_TYPES,
  WALL_RESTRICTION_TYPES,
  WALL_SENSE_TYPES,
  WORLD_DOCUMENT_TYPES,
} from "./values.js"

export type ActiveEffectChangeMode = (typeof ACTIVE_EFFECT_MODES)[keyof typeof ACTIVE_EFFECT_MODES]

export type AudioFileExtension = keyof typeof AUDIO_FILE_EXTENSIONS

export type CanvasPerformanceMode = (typeof CANVAS_PERFORMANCE_MODES)[keyof typeof CANVAS_PERFORMANCE_MODES]

export type ChatMessageStyle = (typeof CHAT_MESSAGE_STYLES)[keyof typeof CHAT_MESSAGE_STYLES]

export type CompendiumDocumentType = (typeof CONST.COMPENDIUM_DOCUMENT_TYPES)[number]

export type DocumentOwnershipLevel = keyof typeof DOCUMENT_OWNERSHIP_LEVELS | DocumentOwnershipNumber

export type DocumentOwnershipNumber = (typeof DOCUMENT_OWNERSHIP_LEVELS)[keyof typeof DOCUMENT_OWNERSHIP_LEVELS]

export type DocumentOwnershipString = keyof typeof DOCUMENT_OWNERSHIP_LEVELS

export type DrawingFillType = (typeof DRAWING_FILL_TYPES)[keyof typeof DRAWING_FILL_TYPES]

export type FileCategory = keyof typeof FILE_CATEGORIES

export type FolderDocumentType = (typeof FOLDER_DOCUMENT_TYPES)[number]

export type GridDiagonal = (typeof GRID_DIAGONALS)[keyof typeof GRID_DIAGONALS]

export type GridDiagonalRule = (typeof GRID_DIAGONALS)[keyof typeof GRID_DIAGONALS]

export type GridType = (typeof GRID_TYPES)[keyof typeof GRID_TYPES]

export type GridSnappingMode = (typeof GRID_SNAPPING_MODES)[keyof typeof GRID_SNAPPING_MODES]

export type HexColorString = `#${string}`

export type ImageFileExtension = keyof typeof IMAGE_FILE_EXTENSIONS

export type JournalEntryPageFormat = (typeof JOURNAL_ENTRY_PAGE_FORMATS)[keyof typeof JOURNAL_ENTRY_PAGE_FORMATS]

export type LightingLevel = (typeof LIGHTING_LEVELS)[keyof typeof LIGHTING_LEVELS]

export type MacroScope = (typeof MACRO_SCOPES)[number]

export type MacroType = (typeof MACRO_TYPES)[keyof typeof MACRO_TYPES]

export type MeasuredTemplateType = (typeof MEASURED_TEMPLATE_TYPES)[keyof typeof MEASURED_TEMPLATE_TYPES]

export type PackageType = (typeof PACKAGE_TYPES)[number]

export type PlaylistMode = (typeof PLAYLIST_MODES)[keyof typeof PLAYLIST_MODES]

export type PlaylistSortMode = "a" | "m"

export type RegionEventType = (typeof REGION_EVENTS)[keyof typeof REGION_EVENTS]

export type RegionMovementSegmentType = (typeof REGION_MOVEMENT_SEGMENTS)[keyof typeof REGION_MOVEMENT_SEGMENTS]

export type RollMode = (typeof DICE_ROLL_MODES)[keyof typeof DICE_ROLL_MODES]

export type TableResultType = (typeof TABLE_RESULT_TYPES)[keyof typeof TABLE_RESULT_TYPES]

export type TextAnchorPoint = (typeof TEXT_ANCHOR_POINTS)[keyof typeof TEXT_ANCHOR_POINTS]

export type TextureDataFitMode = (typeof TEXTURE_DATA_FIT_MODES)[number]

export type TileOcclusionMode = (typeof TILE_OCCLUSION_MODES)[keyof typeof TILE_OCCLUSION_MODES]

export type TokenDisplayMode = (typeof TOKEN_DISPLAY_MODES)[keyof typeof TOKEN_DISPLAY_MODES]

export type TokenDisposition = (typeof TOKEN_DISPOSITIONS)[keyof typeof TOKEN_DISPOSITIONS]

export type TokenShapeType = (typeof TOKEN_SHAPES)[keyof typeof TOKEN_SHAPES]

export type UserPermission = keyof typeof USER_PERMISSIONS

export type UserRole = keyof typeof USER_ROLE_NAMES

export type UserRoleName = keyof typeof USER_ROLES

export type VideoFileExtension = keyof typeof VIDEO_FILE_EXTENSIONS

export type WallDirection = (typeof WALL_DIRECTIONS)[keyof typeof WALL_DIRECTIONS]

export type WallDoorState = (typeof WALL_DOOR_STATES)[keyof typeof WALL_DOOR_STATES]

export type WallDoorType = (typeof WALL_DOOR_TYPES)[keyof typeof WALL_DOOR_TYPES]

export type WallMovementType = (typeof WALL_MOVEMENT_TYPES)[keyof typeof WALL_MOVEMENT_TYPES]

export type WallRestrictionType = (typeof WALL_RESTRICTION_TYPES)[number]

export type WallSenseType = (typeof WALL_SENSE_TYPES)[keyof typeof WALL_SENSE_TYPES]

export type WorldDocumentType = (typeof WORLD_DOCUMENT_TYPES)[number]
