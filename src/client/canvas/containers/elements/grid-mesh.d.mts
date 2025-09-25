/**
 * @import {GridMeshData} from "../_types.mjs"
 */
/**
 * The grid mesh, which uses the {@link foundry.canvas.rendering.shaders.GridShader} to render the grid.
 */
export default class GridMesh extends QuadMesh {
    /**
     * The grid mesh constructor.
     * @param {typeof GridShader} [shaderClass=GridShader]    The shader class
     */
    constructor(shaderClass?: typeof GridShader);
    width: number;
    height: number;
    alpha: number;
    renderable: boolean;
    /**
     * The data of this mesh.
     * @type {GridMeshData}
     */
    data: GridMeshData;
    /**
     * Initialize and update the mesh given the (partial) data.
     * @param {Partial<GridMeshData>} data    The (partial) data.
     * @returns {this}
     */
    initialize(data: Partial<GridMeshData>): this;
    /**
     * Initialize the data of this mesh given the (partial) data.
     * @param {Partial<GridMeshData>} data    The (partial) data.
     * @protected
     */
    protected _initialize(data: Partial<GridMeshData>): void;
}
import QuadMesh from "./quad-mesh.mjs";
import type { GridMeshData } from "../_types.mjs";
import GridShader from "../../rendering/shaders/grid/grid.mjs";
