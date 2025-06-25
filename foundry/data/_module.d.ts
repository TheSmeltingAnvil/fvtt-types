import { fields } from "foundry/data/_module.js"

export type TombstoneDataSchema = {
  _id: fields.DocumentIdField
  _tombstone: fields.BooleanField<true, true>
  _stats: fields.DocumentStatsField
}

export * from "./BaseShapeData.js"
export { default as BaseShapeData } from "./BaseShapeData.js"
export * from "./CalendarData.js"
export { default as CalendarData } from "./CalendarData.js"
export { default as ClientDatabaseBackend } from "./ClientDatabaseBackend.js"
export { default as CombatConfiguration } from "./CombatConfiguration.js"
export * from "./LightData.js"
export { default as LightData } from "./LightData.js"
export { default as PrototypeToken } from "./PrototypeToken.js"
export { default as ShapeData } from "./ShapeData.js"
export { default as TextureData } from "./TextureData.js"

export * as fields from "./fields/_module.js"
export * as types from "./_types.js"
export * as validation from "./validation/_module.js"
