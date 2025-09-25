/**
 * @typedef {TourConfig} SetupTourConfig
 * @property {boolean} [closeWindows=true]  Whether to close all open windows before beginning the tour.
 */
/**
 * A Tour subclass that handles controlling the UI state of the Setup screen
 */
export default class SetupTour extends Tour {
    /**
     * Stores a currently open Application for future steps
     * @type {Application}
     */
    focusedApp: Application;
    #private;
}
export type SetupTourConfig = TourConfig;
import Tour from "../tour.mjs";
