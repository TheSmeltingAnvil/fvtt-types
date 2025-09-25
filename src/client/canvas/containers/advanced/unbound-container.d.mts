/**
 * UnboundContainers behave like PIXI.Containers except that they are not bound to their parent's transforms.
 * However, they normally propagate their own transformations to their children.
 */
export default class UnboundContainer {
    constructor(...args: any[]);
    transform: UnboundTransform;
}
import UnboundTransform from "../../geometry/unbound-transform.mjs";
