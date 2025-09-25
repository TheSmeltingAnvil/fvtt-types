export namespace paragraph {
  namespace attrs {
    namespace alignment {
      let _default: string
      export { _default as default }
      export let formatting: boolean
    }
  }
  namespace managed {
    let styles: string[]
  }
  let content: string
  let group: string
  let parseDOM: {
    tag: string
    getAttrs: (el: any) => {
      alignment: any
    }
  }[]
  function toDOM(node: any): (
    | string
    | number
    | {
        style: string
      }
  )[]
}
export namespace blockquote {
  let content_1: string
  export { content_1 as content }
  let group_1: string
  export { group_1 as group }
  export let defining: boolean
  let parseDOM_1: {
    tag: string
  }[]
  export { parseDOM_1 as parseDOM }
  export function toDOM_1(): (string | number)[]
  export { toDOM_1 as toDOM }
}
export namespace hr {
  let group_2: string
  export { group_2 as group }
  let parseDOM_2: {
    tag: string
  }[]
  export { parseDOM_2 as parseDOM }
  export function toDOM_2(): string[]
  export { toDOM_2 as toDOM }
}
export namespace heading {
  export namespace attrs_1 {
    namespace level {
      let _default_1: number
      export { _default_1 as default }
    }
  }
  export { attrs_1 as attrs }
  let content_2: string
  export { content_2 as content }
  let group_3: string
  export { group_3 as group }
  let defining_1: boolean
  export { defining_1 as defining }
  let parseDOM_3: {
    tag: string
    attrs: {
      level: number
    }
  }[]
  export { parseDOM_3 as parseDOM }
  export function toDOM_3(node: any): (string | number)[]
  export { toDOM_3 as toDOM }
}
export namespace pre {
  let content_3: string
  export { content_3 as content }
  export let marks: string
  let group_4: string
  export { group_4 as group }
  export let code: boolean
  let defining_2: boolean
  export { defining_2 as defining }
  let parseDOM_4: {
    tag: string
    preserveWhitespace: string
  }[]
  export { parseDOM_4 as parseDOM }
  export function toDOM_4(): (string | (string | number)[])[]
  export { toDOM_4 as toDOM }
}
export namespace br {
  export let inline: boolean
  let group_5: string
  export { group_5 as group }
  export let selectable: boolean
  let parseDOM_5: {
    tag: string
  }[]
  export { parseDOM_5 as parseDOM }
  export function toDOM_5(): string[]
  export { toDOM_5 as toDOM }
}
