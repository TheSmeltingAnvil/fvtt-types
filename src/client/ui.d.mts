/**
 * A collection of application instances
 * @module ui
 */
/**
 * @import * as applications from "./applications/_module.mjs";
 * @import * as appv1 from "./appv1/_module.mjs";
 */
/**
 * @type {appv1.api.Application|applications.api.ApplicationV2|null}
 */
export let activeWindow: appv1.api.Application | applications.api.ApplicationV2 | null
/**
 * @type {Record<string, appv1.api.Application>}
 */
export const windows: Record<string, appv1.api.Application>
/** @type {applications.sidebar.tabs.ChatLog} */
export let chat: applications.sidebar.tabs.ChatLog
/** @type {applications.ui.SceneControls} */
export let controls: applications.ui.SceneControls
/** @type {applications.ui.Hotbar} */
export let hotbar: applications.ui.Hotbar
/** @type {applications.ui.MainMenu} */
export let menu: applications.ui.MainMenu
/** @type {applications.ui.SceneNavigation} */
export let nav: applications.ui.SceneNavigation
/** @type {applications.ui.Notifications} */
export let notifications: applications.ui.Notifications
/** @type {applications.ui.GamePause} */
export let pause: applications.ui.GamePause
/** @type {applications.ui.Players} */
export let players: applications.ui.Players
/** @type {applications.sidebar.Sidebar} */
export let sidebar: applications.sidebar.Sidebar
import type * as applications from "./applications/_module.mjs"
import type * as appv1 from "./appv1/_module.mjs"
