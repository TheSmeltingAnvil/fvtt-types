export * as types from "./_types.mjs";
export * from "@common/utils/_module.mjs";
export * from "./helpers.mjs";
export namespace SortingHelpers {
    /**
     * Given a source object to sort, a target to sort relative to, and an Array of siblings in the container.
     * @param {...Parameters<performIntegerSort>} args
     * @deprecated since v13
     * @ignore
     */
    function performIntegerSort(...args: Parameters<typeof foundry.utils.performIntegerSort>[]): object[];
}
