/**
 * Augment a base class with EventEmitter behavior.
 * @param BaseClass Some base class to be augmented with event emitter functionality: defaults to an anonymous empty class.
 */
export default function EventEmitterMixin<TBase extends object>(
  BaseClass?: AbstractConstructorOf<TBase>,
): ConstructorOf<foundry.EventEmitter> & TBase
