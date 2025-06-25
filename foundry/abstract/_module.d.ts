/** @namespace abstract */

export * as types from "./_types.js"

export { default as DatabaseBackend } from "./DatabaseBackend.js"
export { default as DataModel } from "./DataModel.js"
export * from "./Document.js"
export { default as Document } from "./Document.js"
export { default as DocumentSocketResponse } from "./DocumentSocketResponse.js"
export { default as EmbeddedCollection } from "./EmbeddedCollection.js"
export { default as EmbeddedCollectionDelta } from "./EmbeddedCollectionDelta.js"
export { default as SingletonEmbeddedCollection } from "./SingletonEmbeddedCollection.js"
export { default as TypeDataModel } from "./TypeDataModel.js"

export type AudioFilePath = `${string}.${CONST.AudioFileExtension}`
export type ImageFilePath = `${string}.${CONST.ImageFileExtension}`
export type VideoFilePath = `${string}.${CONST.VideoFileExtension}`
export type FilePath = AudioFilePath | ImageFilePath | VideoFilePath
