export namespace em {
  let parseDOM: (
    | {
        tag: string
        style?: undefined
      }
    | {
        style: string
        tag?: undefined
      }
  )[]
  function toDOM(): (string | number)[]
}
export namespace strong {
  let parseDOM_1: (
    | {
        tag: string
        style?: undefined
        getAttrs?: undefined
      }
    | {
        style: string
        getAttrs: (weight: any) => false | null
        tag?: undefined
      }
  )[]
  export { parseDOM_1 as parseDOM }
  export function toDOM_1(): (string | number)[]
  export { toDOM_1 as toDOM }
}
export namespace code {
  let parseDOM_2: {
    tag: string
  }[]
  export { parseDOM_2 as parseDOM }
  export function toDOM_2(): (string | number)[]
  export { toDOM_2 as toDOM }
}
export namespace underline {
  let parseDOM_3: (
    | {
        tag: string
        style?: undefined
      }
    | {
        style: string
        tag?: undefined
      }
  )[]
  export { parseDOM_3 as parseDOM }
  export function toDOM_3(): (
    | string
    | number
    | {
        style: string
      }
  )[]
  export { toDOM_3 as toDOM }
}
export namespace strikethrough {
  let parseDOM_4: (
    | {
        tag: string
        style?: undefined
      }
    | {
        style: string
        tag?: undefined
      }
  )[]
  export { parseDOM_4 as parseDOM }
  export function toDOM_4(): (string | number)[]
  export { toDOM_4 as toDOM }
}
export namespace superscript {
  let parseDOM_5: (
    | {
        tag: string
        style?: undefined
      }
    | {
        style: string
        tag?: undefined
      }
  )[]
  export { parseDOM_5 as parseDOM }
  export function toDOM_5(): (string | number)[]
  export { toDOM_5 as toDOM }
}
export namespace subscript {
  let parseDOM_6: (
    | {
        tag: string
        style?: undefined
      }
    | {
        style: string
        tag?: undefined
      }
  )[]
  export { parseDOM_6 as parseDOM }
  export function toDOM_6(): (string | number)[]
  export { toDOM_6 as toDOM }
}
export namespace span {
  let parseDOM_7: {
    tag: string
    getAttrs: (el: any) => object
  }[]
  export { parseDOM_7 as parseDOM }
  export function toDOM_7(): (string | number)[]
  export { toDOM_7 as toDOM }
}
export namespace font {
  export namespace attrs {
    let family: object
  }
  let parseDOM_8: {
    tag: string
    getAttrs: (el: any) => {
      family: any
    }
  }[]
  export { parseDOM_8 as parseDOM }
  export function toDOM_8(node: any): (
    | string
    | {
        style: string
      }
  )[]
  export { toDOM_8 as toDOM }
}
