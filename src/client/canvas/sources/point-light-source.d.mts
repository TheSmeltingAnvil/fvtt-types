/**
 * @import {CanvasVisibilityTestConfiguration} from "../../_types.mjs";
 */
/**
 * A specialized subclass of the BaseLightSource which renders a source of light as a point-based effect.
 * @extends {BaseLightSource}
 * @mixes PointEffectSourceMixin
 */
export default class PointLightSource extends BaseLightSource {
    /** @override */
    override get requiresEdges(): boolean;
    /** @inheritDoc */
    _createShapes(): void;
    /** @inheritDoc */
    _configure(changes: any): void;
    /** @inheritDoc */
    _getPolygonConfiguration(): any;
    /**
     * Test whether this LightSource provides visibility to see a certain target object.
     * @param {CanvasVisibilityTestConfiguration} config    The visibility test configuration
     * @returns {boolean}                                   Is the target object visible to this source?
     */
    testVisibility({ tests, object }: CanvasVisibilityTestConfiguration): boolean;
    /**
     * Can this LightSource theoretically detect a certain object based on its properties?
     * This check should not consider the relative positions of either object, only their state.
     * @param {PlaceableObject} target      The target object being tested
     * @returns {boolean}                   Can the target object theoretically be detected by this vision source?
     * @protected
     */
    protected _canDetectObject(target: PlaceableObject): boolean;
    #private;
}
import BaseLightSource from "./base-light-source.mjs";
import type { CanvasVisibilityTestConfiguration } from "../../_types.mjs";
