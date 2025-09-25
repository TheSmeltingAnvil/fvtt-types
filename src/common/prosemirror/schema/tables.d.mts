export const builtInTableNodes: any
export namespace tableComplex {
  let content: string
  let isolating: boolean
  let group: string
  let parseDOM: {
    tag: string
    getAttrs: (el: any) => false | undefined
  }[]
  function toDOM(): (string | number)[]
}
export namespace colgroup {
  let content_1: string
  export { content_1 as content }
  let isolating_1: boolean
  export { isolating_1 as isolating }
  let parseDOM_1: {
    tag: string
  }[]
  export { parseDOM_1 as parseDOM }
  export function toDOM_1(): (string | number)[]
  export { toDOM_1 as toDOM }
}
export namespace col {
  export let tableRole: string
  let parseDOM_2: {
    tag: string
  }[]
  export { parseDOM_2 as parseDOM }
  export function toDOM_2(): string[]
  export { toDOM_2 as toDOM }
}
export namespace thead {
  let content_2: string
  export { content_2 as content }
  let isolating_2: boolean
  export { isolating_2 as isolating }
  let parseDOM_3: {
    tag: string
  }[]
  export { parseDOM_3 as parseDOM }
  export function toDOM_3(): (string | number)[]
  export { toDOM_3 as toDOM }
}
export namespace tbody {
  let content_3: string
  export { content_3 as content }
  let isolating_3: boolean
  export { isolating_3 as isolating }
  let parseDOM_4: {
    tag: string
    getAttrs: (el: any) => false | undefined
  }[]
  export { parseDOM_4 as parseDOM }
  export function toDOM_4(): (string | number)[]
  export { toDOM_4 as toDOM }
}
export namespace tfoot {
  let content_4: string
  export { content_4 as content }
  let isolating_4: boolean
  export { isolating_4 as isolating }
  let parseDOM_5: {
    tag: string
  }[]
  export { parseDOM_5 as parseDOM }
  export function toDOM_5(): (string | number)[]
  export { toDOM_5 as toDOM }
}
export namespace caption {
  let content_5: string
  export { content_5 as content }
  let isolating_5: boolean
  export { isolating_5 as isolating }
  let parseDOM_6: {
    tag: string
    getAttrs: (el: any) => false | undefined
  }[]
  export { parseDOM_6 as parseDOM }
  export function toDOM_6(): (string | number)[]
  export { toDOM_6 as toDOM }
}
export namespace captionBlock {
  let content_6: string
  export { content_6 as content }
  let isolating_6: boolean
  export { isolating_6 as isolating }
  let parseDOM_7: {
    tag: string
    getAttrs: (el: any) => false | undefined
  }[]
  export { parseDOM_7 as parseDOM }
  export function toDOM_7(): (string | number)[]
  export { toDOM_7 as toDOM }
}
export namespace tableRowComplex {
  let content_7: string
  export { content_7 as content }
  let parseDOM_8: {
    tag: string
    getAttrs: (el: any) => false | undefined
  }[]
  export { parseDOM_8 as parseDOM }
  export function toDOM_8(): (string | number)[]
  export { toDOM_8 as toDOM }
}
export namespace tableCellComplex {
  let content_8: string
  export { content_8 as content }
  export { CELL_ATTRS as attrs }
  export { MANAGED_CELL_ATTRS as managed }
  let isolating_7: boolean
  export { isolating_7 as isolating }
  let parseDOM_9: {
    tag: string
    getAttrs: (el: any) =>
      | false
      | {
          colspan: number
          rowspan: number
        }
  }[]
  export { parseDOM_9 as parseDOM }
  export function toDOM_9(node: any): (string | number | object)[]
  export { toDOM_9 as toDOM }
}
export namespace tableCellComplexBlock {
  let content_9: string
  export { content_9 as content }
  export { CELL_ATTRS as attrs }
  export { MANAGED_CELL_ATTRS as managed }
  let isolating_8: boolean
  export { isolating_8 as isolating }
  let parseDOM_10: {
    tag: string
    getAttrs: (el: any) =>
      | false
      | {
          colspan: number
          rowspan: number
        }
  }[]
  export { parseDOM_10 as parseDOM }
  export function toDOM_10(node: any): (string | number | object)[]
  export { toDOM_10 as toDOM }
}
export namespace tableHeaderComplex {
  let content_10: string
  export { content_10 as content }
  export { CELL_ATTRS as attrs }
  export { MANAGED_CELL_ATTRS as managed }
  let isolating_9: boolean
  export { isolating_9 as isolating }
  let parseDOM_11: {
    tag: string
    getAttrs: (el: any) =>
      | false
      | {
          colspan: number
          rowspan: number
        }
  }[]
  export { parseDOM_11 as parseDOM }
  export function toDOM_11(node: any): (string | number | object)[]
  export { toDOM_11 as toDOM }
}
export namespace tableHeaderComplexBlock {
  let content_11: string
  export { content_11 as content }
  export { CELL_ATTRS as attrs }
  export { MANAGED_CELL_ATTRS as managed }
  let isolating_10: boolean
  export { isolating_10 as isolating }
  let parseDOM_12: {
    tag: string
    getAttrs: (el: any) =>
      | false
      | {
          colspan: number
          rowspan: number
        }
  }[]
  export { parseDOM_12 as parseDOM }
  export function toDOM_12(node: any): (string | number | object)[]
  export { toDOM_12 as toDOM }
}
declare namespace CELL_ATTRS {
  namespace colspan {
    let _default: number
    export { _default as default }
  }
  namespace rowspan {
    let _default_1: number
    export { _default_1 as default }
  }
  namespace colwidth {
    let _default_2: null
    export { _default_2 as default }
  }
}
declare namespace MANAGED_CELL_ATTRS {
  let attributes: string[]
}
export {}
