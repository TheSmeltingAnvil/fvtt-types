/**
 * A sound effect which applies a biquad filter.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode}
 */
export default class BiquadFilterEffect extends BiquadFilterNode {
    /**
     * The allowed filter types supported by this effect class.
     */
    static #ALLOWED_TYPES: string[];
    /**
     * A ConvolverEffect is constructed by passing the following parameters.
     * @param {AudioContext} context      The audio context required by the BiquadFilterNode
     * @param {object} [options]          Additional options which modify the BiquadFilterEffect behavior
     * @param {BiquadFilterType} [options.type=lowpass]  The filter type to apply
     * @param {number} [options.intensity=5]   The initial intensity of the effect
     */
    constructor(context: AudioContext, { type, intensity, ...options }?: {
        type?: BiquadFilterType | undefined;
        intensity?: number | undefined;
    });
    set intensity(intensity: number);
    /**
     * Adjust the intensity of the effect on a scale of 0 to 10.
     * @type {number}
     */
    get intensity(): number;
    /**
     * Update the state of the effect node given the active flag and numeric intensity.
     * @param {object} options            Options which are updated
     * @param {number} [options.intensity]  A new effect intensity
     * @param {BiquadFilterType} [options.type] A new filter type
     */
    update({ intensity, type }?: {
        intensity?: number | undefined;
        type?: BiquadFilterType | undefined;
    }): void;
    #private;
}
