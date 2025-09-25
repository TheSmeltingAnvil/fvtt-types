export namespace ol {
  let content: string
  namespace managed {
    let attributes: string[]
  }
  let group: string
  namespace attrs {
    namespace order {
      let _default: number
      export { _default as default }
    }
  }
  let parseDOM: {
    tag: string
    getAttrs: (el: any) => {
      order: number
    }
  }[]
  function toDOM(node: any): (
    | string
    | number
    | {
        start: any
      }
  )[]
}
export namespace ul {
  let content_1: string
  export { content_1 as content }
  let group_1: string
  export { group_1 as group }
  let parseDOM_1: {
    tag: string
  }[]
  export { parseDOM_1 as parseDOM }
  export function toDOM_1(): (string | number)[]
  export { toDOM_1 as toDOM }
}
export namespace li {
  let content_2: string
  export { content_2 as content }
  export let defining: boolean
  let parseDOM_2: {
    tag: string
    getAttrs: (el: any) => false | undefined
  }[]
  export { parseDOM_2 as parseDOM }
  export function toDOM_2(): (string | number)[]
  export { toDOM_2 as toDOM }
}
export namespace liText {
  let content_3: string
  export { content_3 as content }
  let defining_1: boolean
  export { defining_1 as defining }
  let parseDOM_3: {
    tag: string
    getAttrs: (el: any) => false | undefined
  }[]
  export { parseDOM_3 as parseDOM }
  export function toDOM_3(): (string | number)[]
  export { toDOM_3 as toDOM }
}
