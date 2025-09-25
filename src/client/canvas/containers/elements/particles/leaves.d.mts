/**
 * A full-screen weather effect which renders gently falling autumn leaves.
 * @extends {ParticleEffect}
 */
export default class AutumnLeavesWeatherEffect extends ParticleEffect {
    /** @inheritdoc */
    static label: string;
    /**
     * Configuration for the particle emitter for falling leaves
     * @type {PIXI.particles.EmitterConfigV3}
     */
    static LEAF_CONFIG: PIXI.particles.EmitterConfigV3;
    /** @inheritdoc */
    getParticleEmitters(): PIXI.particles.Emitter[];
}
import ParticleEffect from "./particle-effect.mjs";
