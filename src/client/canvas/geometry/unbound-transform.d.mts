/**
 * A custom Transform class which is not bound to the parent worldTransform.
 * localTransform are working as usual.
 */
export default class UnboundTransform {
    /** @override */
    static override IDENTITY: UnboundTransform;
    /** @override */
    override updateTransform(parentTransform: any): void;
    _currentLocalID: any;
    _parentID: any;
}
