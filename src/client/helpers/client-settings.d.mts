/**
 * @import {SettingConfig, SettingSubmenuConfig} from "@client/_types.mjs";
 * @import ApplicationV2 from "../applications/api/application.mjs"
 * @import Application from "../appv1/api/application-v1.mjs"
 */
/**
 * A class responsible for managing defined game settings or settings menus.
 * Each setting is a string key/value pair belonging to a certain namespace and a certain store scope.
 *
 * When Foundry Virtual Tabletop is initialized, a singleton instance of this class is constructed within the global
 * Game object as game.settings.
 *
 * @see {@link foundry.Game#settings}
 * @see {@link foundry.applications.sidebar.tabs.Settings}
 * @see {@link foundry.applications.settings.SettingsConfig}
 */
export default class ClientSettings {
    constructor(worldSettings: any);
    /**
     * A object of registered game settings for this scope
     * @type {Map<string, SettingConfig>}
     */
    settings: Map<string, SettingConfig>;
    /**
     * Registered settings menus which trigger secondary applications
     * @type {Map<string, ApplicationV2|Application}
     */
    menus: Map<string, ApplicationV2 | Application>;
    /**
     * The storage interfaces used for persisting settings
     * Each storage interface shares the same API as window.localStorage
     */
    storage: Map<"world" | "client", Storage>;
    /**
     * Return a singleton instance of the Game Settings Configuration app
     * @returns {SettingsConfig}
     */
    get sheet(): SettingsConfig;
    /**
     * Register a new namespaced game setting. The setting's scope determines where the setting is saved.
     * World - World settings are applied to everyone in the World. Use this for settings like system rule variants that
     * everyone must abide by.
     * User - User settings are applied to an individual user. Use this for settings that are a player's personal
     * preference, like 3D dice skins.
     * Client - Client settings are applied to the browser or client used to access the World. Use this for settings that
     * are affected by the client itself, such as screen dimensions, resolution, or performance.
     *
     * @param {string} namespace    The namespace under which the setting is registered
     * @param {string} key          The key name for the setting under the namespace
     * @param {SettingConfig} data  Configuration for setting data
     *
     * @example Register a client setting
     * ```js
     * game.settings.register("myModule", "myClientSetting", {
     *   name: "Register a Module Setting with Choices",
     *   hint: "A description of the registered setting and its behavior.",
     *   scope: "client",     // This specifies a client-stored setting
     *   config: true,        // This specifies that the setting appears in the configuration view
     *   requiresReload: true // This will prompt the user to reload the application for the setting to take effect.
     *   type: String,
     *   choices: {           // If choices are defined, the resulting setting will be a select menu
     *     "a": "Option A",
     *     "b": "Option B"
     *   },
     *   default: "a",        // The default value for the setting
     *   onChange: value => { // A callback function which triggers when the setting is changed
     *     console.log(value)
     *   }
     * });
     * ```
     *
     * @example Register a world setting
     * ```js
     * game.settings.register("myModule", "myWorldSetting", {
     *   name: "Register a Module Setting with a Range slider",
     *   hint: "A description of the registered setting and its behavior.",
     *   scope: "world",      // This specifies a world-level setting
     *   config: true,        // This specifies that the setting appears in the configuration view
     *   requiresReload: true // This will prompt the GM to have all clients reload the application for the setting to
     *                        // take effect.
     *   type: new foundry.fields.NumberField({nullable: false, min: 0, max: 100, step: 10}),
     *   default: 50,         // The default value for the setting
     *   onChange: value => { // A callback function which triggers when the setting is changed
     *     console.log(value)
     *   }
     * });
     * ```
     *
     * @example Register a user setting
     * ```js
     * game.settings.register("myModule", "myUserSetting", {
     *   name: "Register a Module Setting with a checkbox",
     *   hint: "A description of the registered setting and its behavior.",
     *   scope: "user",       // This specifies a user-level setting
     *   config: true,        // This specifies that the setting appears in the configuration view
     *   type: new foundry.fields.BooleanField(),
     *   default: false
     * });
     * ```
     */
    register(namespace: string, key: string, data: SettingConfig): void;
    /**
     * Register a new sub-settings menu
     *
     * @param {string} namespace           The namespace under which the menu is registered
     * @param {string} key                 The key name for the setting under the namespace
     * @param {SettingSubmenuConfig} data  Configuration for setting data
     *
     * @example Define a settings submenu which handles advanced configuration needs
     * ```js
     * game.settings.registerMenu("myModule", "mySettingsMenu", {
     *   name: "My Settings Submenu",
     *   label: "Settings Menu Label",      // The text label used in the button
     *   hint: "A description of what will occur in the submenu dialog.",
     *   icon: "fa-solid fa-bars",               // A Font Awesome icon used in the submenu button
     *   type: MySubmenuApplicationClass,   // A FormApplication subclass which should be created
     *   restricted: true                   // Restrict this submenu to gamemaster only?
     * });
     * ```
     */
    registerMenu(namespace: string, key: string, data: SettingSubmenuConfig): void;
    /**
     * Get the value of a game setting for a certain namespace and setting key
     *
     * @param {string} namespace    The namespace under which the setting is registered
     * @param {string} key          The setting key to retrieve
     * @param {object} options      Additional options for setting retrieval
     * @param {boolean} [options.document]  Retrieve the full Setting document instance instead of just its value
     * @returns {any|Setting}       The current value or the Setting document instance
     *
     * @example Retrieve the current setting value
     * ```js
     * game.settings.get("myModule", "myClientSetting");
     * ```
     */
    get(namespace: string, key: string, { document }?: {
        document?: boolean | undefined;
    }): any | Setting;
    /**
     * Set the value of a game setting for a certain namespace and setting key
     *
     * @param {string} namespace        The namespace under which the setting is registered
     * @param {string} key              The setting key to retrieve
     * @param {any} value               The data to assign to the setting key
     * @param {object} [options]        Additional options passed to the server when updating world-scope settings
     * @param {boolean} [options.document]  Return the updated Setting document instead of just its value
     * @returns {Promise<any|Setting>}  The assigned setting value or the Setting document instance
     *
     * @example Update the current value of a setting
     * ```js
     * game.settings.set("myModule", "myClientSetting", "b");
     * ```
     */
    set(namespace: string, key: string, value: any, { document, ...options }?: {
        document?: boolean | undefined;
    }): Promise<any | Setting>;
    #private;
}
import type { SettingConfig } from "@client/_types.mjs";
import type ApplicationV2 from "../applications/api/application.mjs";
import type Application from "../appv1/api/application-v1.mjs";
import SettingsConfig from "../applications/settings/config.mjs";
import type { SettingSubmenuConfig } from "@client/_types.mjs";
import Setting from "../documents/setting.mjs";
