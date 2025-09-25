/**
 * A singleton Tour Collection class responsible for registering and activating Tours, accessible as game.tours.
 * @extends {Collection<string, Tour>}
 * @see {@link foundry.Game#tours}
 */
export default class ToursCollection extends Collection<string, Tour> {
    constructor();
    /**
     * Register a new Tour.
     * @param {string} namespace          The namespace of the Tour
     * @param {string} id                 The machine-readable id of the Tour
     * @param {Tour} tour                 The constructed Tour
     */
    register(namespace: string, id: string, tour: Tour): void;
    /**
     * Set a Tour to the collection.
     * @param {string} key
     * @param {Tour} tour
     */
    set(key: string, tour: Tour): this;
}
import Tour from "./tour.mjs";
import Collection from "@common/utils/collection.mjs";
