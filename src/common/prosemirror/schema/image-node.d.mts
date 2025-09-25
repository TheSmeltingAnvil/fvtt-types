/**
 * A class responsible for encapsulating logic around image nodes in the ProseMirror schema.
 * @extends {SchemaDefinition}
 */
// @ts-expect-error -- IGNORE --
export default class ImageNode extends SchemaDefinition {
  /** @override */
  static override get attrs(): {
    src: object
    alt: {
      default: null
    }
    title: {
      default: null
    }
    width: {
      default: string
    }
    height: {
      default: string
    }
    alignment: {
      default: string
      formatting: boolean
    }
  }
  /** @override */
  static override getAttrs(el: any): {
    src: any
    title: any
    alt: any
  }
  /** @override */
  static override toDOM(node: any): (
    | string
    | {
        src: any
      }
  )[]
  /** @inheritdoc */
  static make(): object
}
import SchemaDefinition from "./schema-definition.mjs"
