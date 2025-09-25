/**
 * A custom Transform class allowing to observe changes with a callback.
 */
export default class ObservableTransform {
    /**
     * @param {Function} callback          The callback called to observe changes.
     * @param {object} scope               The scope of the callback.
     */
    constructor(callback: Function, scope: object);
    /**
     * The scope of the callback.
     * @type {object}
     */
    scope: object;
    /**
     * The callback which is observing the changes.
     * @type {Function}
     */
    cb: Function;
    /** @inheritDoc */
    onChange(): void;
    /** @inheritDoc */
    updateSkew(): void;
}
