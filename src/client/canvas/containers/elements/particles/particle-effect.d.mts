declare const ParticleEffect_base: {
    new (): {
        calculateBounds(): void;
    };
};
/**
 * An interface for defining particle-based weather effects
 * @mixes FullCanvasObjectMixin
 */
export default class ParticleEffect extends ParticleEffect_base {
    /**
     * @param {object} [options]          Options passed to the getParticleEmitters method which can be used to customize
     *                                    values of the emitter configuration.
     */
    constructor(options?: object);
    /**
     * The array of emitters which are active for this particle effect
     * @type {PIXI.particles.Emitter[]}
     */
    emitters: PIXI.particles.Emitter[];
    /**
     * Create an emitter instance which automatically updates using the shared PIXI.Ticker
     * @param {PIXI.particles.EmitterConfigV3} config   The emitter configuration
     * @returns {PIXI.particles.Emitter}                The created Emitter instance
     */
    createEmitter(config: PIXI.particles.EmitterConfigV3): PIXI.particles.Emitter;
    /**
     * Get the particle emitters which should be active for this particle effect.
     * This base class creates a single emitter using the explicitly provided configuration.
     * Subclasses can override this method for more advanced configurations.
     * @param {object} [options={}] Options provided to the ParticleEffect constructor which can be used to customize
     *                              configuration values for created emitters.
     * @returns {PIXI.particles.Emitter[]}
     */
    getParticleEmitters(options?: object): PIXI.particles.Emitter[];
    /** @override */
    override destroy(...args: any[]): void;
    /**
     * Begin animation for the configured emitters.
     */
    play(): void;
    /**
     * Stop animation for the configured emitters.
     */
    stop(): void;
}
export {};
