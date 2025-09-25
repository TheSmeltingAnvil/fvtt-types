export type AbstractConstructorOf<T> = abstract new (...args: any[]) => T
export type Builtin = Date | Function | Uint8Array | string | number | boolean | symbol | null | undefined
export type CollectionValue<T> = T extends Collection<string, infer U> ? U : never
/**
 * A class constructor.
 * Used for functions with generic class constructor parameters.
 */
export type Constructor<TApplication = unknown> = new (...args: any[]) => TApplication
export type ConstructorOf<T> = new (...args: any[]) => T
/**
 * A recursively-partial object
 */
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeepPartial<U>>
      : T extends unknown
        ? { [K in keyof T]?: DeepPartial<T[K]> }
        : Partial<T>
/**
 * Make all properties in T recursively readonly.
 */
export type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends undefined | null | boolean | number | string | symbol | bigint | Function
    ? T[K]
    : T[K] extends Array<infer V>
      ? ReadonlyArray<DeepReadonly<V>>
      : T[K] extends Map<infer K_1, infer V>
        ? ReadonlyMap<DeepReadonly<K_1>, DeepReadonly<V>>
        : T[K] extends Set<infer V_1>
          ? ReadonlySet<DeepReadonly<V_1>>
          : DeepReadonly<T[K]>
}
export type DocumentConstructorOf<T extends foundry.abstract.Document> = {
  new (...args: any[]): T
  updateDocuments(
    updates?: object[],
    // @ts-expect-error -- IGNORE --
    operation?: Partial<foundry.abstract.types.DatabaseUpdateOperation<T["parent"]>>,
  ): Promise<T[]>
}
export type Maybe<T> = T | null | undefined
/**
 * A 2D point, expressed as {x, y}.
 */
export type Point = {
  /**
   * The x-coordinate
   */
  x: number
  /**
   * The y-coordinate
   */
  y: number
}
/**
 * A 2D point, expressed as an array [x, y].
 */
export type PointArray = [x: number, y: number]
/**
 * A 3D point, expessed as {x, y, elevation}.
 */
export type ElevatedPoint = {
  /**
   * The x-coordinate in pixels
   */
  x: number
  /**
   * The y-coordinate in pixels
   */
  y: number
  /**
   * The elevation in grid units
   */
  elevation: number
}
/**
 * A standard rectangle interface.
 */
export type Rectangle = {
  /**
   * The x-coordinate of the top-left corner
   */
  x: number
  /**
   * The y-coordinate of the top-left corner
   */
  y: number
  /**
   * The width
   */
  width: number
  /**
   * The height
   */
  height: number
}
export type BuiltinType = NumberConstructor | StringConstructor | BooleanConstructor | ObjectConstructor
export type ColorSource = number | [red: number, green: number, blue: number] | string | Color
export type RequestData = Record<string, unknown> | Record<string, unknown>[] | string | string[]
export type SocketRequest = {
  options?: object | undefined
  broadcast?: boolean | undefined
}
export type SocketResponse = {
  /**
   * The initial request
   */
  request: SocketRequest
  /**
   * An error, if one occurred
   */
  error?: Error | undefined
  /**
   * The status of the request
   */
  status?: string | undefined
  /**
   * The ID of the requesting User
   */
  userId?: string | undefined
  /**
   * Data returned as a result of the request
   */
  data?: RequestData | undefined
}
export type ParentOf<TDataModel> =
  TDataModel extends foundry.abstract.DataModel<infer P extends foundry.abstract.DataModel | null> ? P : never
export type SchemaOf<TDataModel> =
  TDataModel extends foundry.abstract.DataModel<infer _P, infer S extends foundry.abstract.types.DataSchema> ? S : never

/** A JSON-compatible value, plus `undefined` */
export type JSONValue = string | number | boolean | object | null | undefined

import type Collection from "./utils/collection.d.mts"
import type Color from "./utils/color.mjs"
