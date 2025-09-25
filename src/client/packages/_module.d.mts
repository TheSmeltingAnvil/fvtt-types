export * as types from "./_types.mjs";
export * from "@common/packages/_module.mjs";
export { default as ClientPackageMixin } from "./client-package.mjs";
/**
 * A mapping of allowed package types and the classes which implement them.
 * @type {{world: World, system: System, module: Module}}
 */
export const PACKAGE_TYPES: {
    world: World;
    system: System;
    module: Module;
};
import Module from "./module.mjs";
import System from "./system.mjs";
import World from "./world.mjs";
export { Module, System, World };
