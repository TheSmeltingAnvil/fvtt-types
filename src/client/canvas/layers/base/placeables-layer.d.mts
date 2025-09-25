/**
 * @import Quadtree from "../../geometry/quad-tree.mjs";
 * @import {CanvasHistoryEvent} from "../_types.mjs"
 * @import {PlaceablesLayerOptions} from "../_types.mjs"
 * @import DocumentCollection from "@client/documents/abstract/document-collection.mjs";
 * @import BasePlaceableHUD from "@client/applications/hud/placeable-hud.mjs";
 */
/**
 * A subclass of Canvas Layer which is specifically designed to contain multiple PlaceableObject instances,
 * each corresponding to an embedded Document.
 * @category Canvas
 */
export default class PlaceablesLayer extends InteractionLayer {
    /**
     * Sort order for placeables belonging to this layer.
     * @type {number}
     */
    static SORT_ORDER: number;
    /**
     * Configuration options for the PlaceablesLayer.
     * @type {PlaceablesLayerOptions}
     */
    static get layerOptions(): PlaceablesLayerOptions;
    /**
     * A reference to the named Document type which is contained within this Canvas Layer.
     * @type {string}
     */
    static documentName: string;
    /**
     * Creation states affected to placeables during their construction.
     * @enum {number}
     */
    static CREATION_STATES: {
        NONE: number;
        POTENTIAL: number;
        CONFIRMED: number;
        COMPLETED: number;
    };
    /**
     * Obtain a reference to the PlaceableObject class definition which represents the Document type in this layer.
     * @type {typeof PlaceableObject}
     */
    static get placeableClass(): typeof PlaceableObject;
    /**
     * The method to sort the objects elevation and sort before sorting by the z-index.
     * @type {Function}
     */
    static #sortObjectsByElevationAndSort: Function;
    /**
     * Placeable Layer Objects
     * @type {PIXI.Container|null}
     */
    objects: PIXI.Container | null;
    /**
     * Preview container for config previews
     * @type {PIXI.Container|null}
     * @internal
     */
    _configPreview: PIXI.Container | null;
    /**
     * Preview Object Placement
     * @type {PIXI.Container|null}
     */
    preview: PIXI.Container | null;
    /**
     * Keep track of history so that CTRL+Z can undo changes.
     * @type {CanvasHistoryEvent[]}
     */
    history: CanvasHistoryEvent[];
    /**
     * Keep track of objects copied with CTRL+C/X which can be pasted later.
     * @type {{objects: PlaceableObject[]; cut: boolean}}
     */
    clipboard: {
        objects: PlaceableObject[];
        cut: boolean;
    };
    /**
     * A Quadtree which partitions and organizes Walls into quadrants for efficient target identification.
     * @type {Quadtree|null}
     */
    quadtree: Quadtree | null;
    /**
     * Obtain a reference to the Collection of embedded Document instances within the currently viewed Scene
     * @type {DocumentCollection|null}
     */
    get documentCollection(): DocumentCollection<any> | null;
    /**
     * To know wheter this layer has a preview object or not.
     * @returns {boolean}
     */
    get hasPreview(): boolean;
    /**
     * If objects on this PlaceablesLayer have a HUD UI, provide a reference to its instance
     * @type {BasePlaceableHUD|null}
     */
    get hud(): BasePlaceableHUD<any, any, any> | null;
    /**
     * A convenience method for accessing the placeable object instances contained in this layer
     * @type {PlaceableObject[]}
     */
    get placeables(): PlaceableObject[];
    /**
     * An Array of placeable objects in this layer which have the _controlled attribute
     * @returns {PlaceableObject[]}
     */
    get controlled(): PlaceableObject[];
    /**
     * Iterates over placeable objects that are eligible for control/select.
     * @yields A placeable object
     * @returns {Generator<PlaceableObject>}
     */
    controllableObjects(): Generator<PlaceableObject>;
    /**
     * Track the set of PlaceableObjects on this layer which are currently controlled.
     * @type {Map<string,PlaceableObject>}
     */
    get controlledObjects(): Map<string, PlaceableObject>;
    set hover(object: PlaceableObject | null);
    /**
     * Track the PlaceableObject on this layer which is currently hovered upon.
     * @type {PlaceableObject|null}
     */
    get hover(): PlaceableObject | null;
    /**
     * Track whether "highlight all objects" is currently active
     * @type {boolean}
     */
    highlightObjects: boolean;
    /**
     * Get the maximum sort value of all placeables.
     * @returns {number}    The maximum sort value (-Infinity if there are no objects)
     */
    getMaxSort(): number;
    /**
     * Send the controlled objects of this layer to the back or bring them to the front.
     * @param {boolean} front         Bring to front instead of send to back?
     * @returns {boolean}             Returns true if the layer has sortable object, and false otherwise
     * @internal
     */
    _sendToBackOrBringToFront(front: boolean): boolean;
    /**
     * Snaps the given point to grid. The layer defines the snapping behavior.
     * @param {Point} point    The point that is to be snapped
     * @returns {Point}        The snapped point
     */
    getSnappedPoint(point: Point): Point;
    /** @override */
    override _highlightObjects(active: any): void;
    /**
     * Obtain an iterable of objects which should be added to this PlaceablesLayer
     * @returns {DocumentCollection|[]}
     */
    getDocuments(): DocumentCollection<any> | [];
    /**
     * Draw a single placeable object
     * @param {ClientDocument} document     The Document instance used to create the placeable object
     * @returns {PlaceableObject}
     */
    createObject(document: ClientDocument): PlaceableObject;
    /** @inheritDoc */
    _tearDown(options: any): Promise<void>;
    /**
     * Clear the contents of the preview container, restoring visibility of original (non-preview) objects.
     */
    clearPreviewContainer(): void;
    /**
     * Get a PlaceableObject contained in this layer by its ID.
     * Returns undefined if the object doesn't exist or if the canvas is not rendering a Scene.
     * @param {string} objectId   The ID of the contained object to retrieve
     * @returns {PlaceableObject}  The object instance, or undefined
     */
    get(objectId: string): PlaceableObject;
    /**
     * Acquire control over all PlaceableObject instances which are visible and controllable within the layer.
     * @param {object} options      Options passed to the control method of each object
     * @returns {PlaceableObject[]}  An array of objects that were controlled
     */
    controlAll(options?: object): PlaceableObject[];
    /**
     * Release all controlled PlaceableObject instance from this layer.
     * @param {object} options   Options passed to the release method of each object
     * @returns {number}         The number of PlaceableObject instances which were released
     */
    releaseAll(options?: object): number;
    /**
     * Simultaneously rotate multiple PlaceableObjects using a provided angle or incremental.
     * This executes a single database operation using Scene#updateEmbeddedDocuments.
     * @param {object} options                Options which configure how multiple objects are rotated
     * @param {number} [options.angle]            A target angle of rotation (in degrees) where zero faces "south"
     * @param {number} [options.delta]            An incremental angle of rotation (in degrees)
     * @param {number} [options.snap]             Snap the resulting angle to a multiple of some increment (in degrees)
     * @param {Array} [options.ids]               An Array of object IDs to target for rotation
     * @param {boolean} [options.includeLocked=false] Rotate objects whose documents are locked?
     * @returns {Promise<PlaceableObject[]>}  An array of objects which were rotated
     * @throws                                An error if an explicitly provided id is not valid
     */
    rotateMany({ angle, delta, snap, ids, includeLocked }?: {
        angle?: number | undefined;
        delta?: number | undefined;
        snap?: number | undefined;
        ids?: any[] | undefined;
        includeLocked?: boolean | undefined;
    }): Promise<PlaceableObject[]>;
    /**
     * Simultaneously move multiple PlaceableObjects via keyboard movement offsets.
     * This executes a single database operation using Scene#updateEmbeddedDocuments.
     * @param {object} options                  Options which configure how multiple objects are moved
     * @param {-1|0|1} [options.dx=0]             Horizontal movement direction
     * @param {-1|0|1} [options.dy=0]             Vertical movement direction
     * @param {-1|0|1} [options.dz=0]             Movement direction along the z-axis (elevation)
     * @param {boolean} [options.rotate=false]    Rotate the placeable to direction instead of moving
     * @param {string[]} [options.ids]            An Array of object IDs to target for movement.
     *                                            The default is the IDs of controlled objects.
     * @param {boolean} [options.includeLocked=false] Move objects whose documents are locked?
     * @returns {Promise<PlaceableObject[]>}    An array of objects which were moved during the operation
     * @throws                                  An error if an explicitly provided id is not valid
     */
    moveMany({ dx, dy, dz, rotate, ids, includeLocked }?: {
        dx?: 0 | 1 | -1 | undefined;
        dy?: 0 | 1 | -1 | undefined;
        dz?: 0 | 1 | -1 | undefined;
        rotate?: boolean | undefined;
        ids?: string[] | undefined;
        includeLocked?: boolean | undefined;
    }): Promise<PlaceableObject[]>;
    /**
     * Prepare the updates and update options for moving the given placeable objects via keyboard.
     * @param {PlaceableObject[]} objects
     * @param {-1|0|1} dx
     * @param {-1|0|1} dy
     * @param {-1|0|1} dz
     * @returns {[updates: object[], options?: object]}
     * @see {@link PlaceablesLayer#moveMany}
     * @internal
     */
    _prepareKeyboardMovementUpdates(objects: PlaceableObject[], dx: -1 | 0 | 1, dy: -1 | 0 | 1, dz: -1 | 0 | 1): [updates: object[], options?: object];
    /**
     * Prepare the updates and update options for rotating the given placeable objects via keyboard.
     * @param {PlaceableObject[]} objects
     * @param {-1|0|1} dx
     * @param {-1|0|1} dy
     * @param {-1|0|1} dz
     * @returns {[updates: object[], options?: object]}
     * @see {@link PlaceablesLayer#moveMany}
     * @internal
     */
    _prepareKeyboardRotationUpdates(objects: PlaceableObject[], dx: -1 | 0 | 1, dy: -1 | 0 | 1, dz: -1 | 0 | 1): [updates: object[], options?: object];
    /**
     * Assign a set of render flags to all placeables in this layer.
     * @param {Record<string, boolean>} flags     The flags to set
     */
    setAllRenderFlags(flags: Record<string, boolean>): void;
    /**
     * An internal helper method to identify the array of PlaceableObjects which can be moved or rotated.
     * @param {string[]|undefined} ids    An explicit array of IDs requested.
     * @param {boolean} includeLocked     Include locked objects which would otherwise be ignored?
     * @returns {PlaceableObject[]}       An array of objects which can be moved or rotated
     * @throws {Error}                    If any explicitly requested ID is not valid
     * @internal
     */
    _getMovableObjects(ids: string[] | undefined, includeLocked: boolean): PlaceableObject[];
    /**
     * An internal helper method to identify the array of PlaceableObjects which can be copied/cut.
     * @param {object} options         Additional options
     * @param {boolean} options.cut    Cut instead of copy?
     * @returns {PlaceableObject[]}    An array of objects which can be copied/cut
     * @internal
     */
    _getCopyableObjects(options: {
        cut: boolean;
    }): PlaceableObject[];
    /**
     * Undo a change to the objects in this layer
     * This method is typically activated using CTRL+Z while the layer is active
     * @returns {Promise<Document[]>}     An array of documents which were modified by the undo operation
     */
    undoHistory(): Promise<Document[]>;
    /**
     * Undo creation with deletion workflow
     * @param {Event} event
     * @returns {Promise<Document[]>}     An array of documents which were modified by the undo operation
     * @protected
     */
    protected _onUndoCreate(event: Event): Promise<Document[]>;
    /**
     * Undo updates with update workflow.
     * @param {Event} event
     * @returns {Promise<Document[]>}     An array of documents which were modified by the undo operation
     * @protected
     */
    protected _onUndoUpdate(event: Event): Promise<Document[]>;
    /**
     * Undo deletion with creation workflow.
     * @param {Event} event
     * @returns {Promise<Document[]>}     An array of documents which were modified by the undo operation
     * @protected
     */
    protected _onUndoDelete(event: Event): Promise<Document[]>;
    /**
     * A helper method to prompt for deletion of all PlaceableObject instances within the Scene
     * Renders a confirmation dialogue to confirm with the requester that all objects will be deleted
     * @returns {Promise<Document[]>}    An array of Document objects which were deleted by the operation
     */
    deleteAll(): Promise<Document[]>;
    /**
     * Record a new CRUD event in the history log so that it can be undone later.
     * The base implemenation calls {@link PlaceablesLayer#_storeHistory} without
     * passing the given options. Subclasses may override this function and can call
     * {@link PlaceablesLayer#_storeHistory} themselves to pass options as needed.
     * @param {"create"|"update"|"delete"} type    The event type
     * @param {object[]} data                      The create/update/delete data
     * @param {object} [options]                   The create/update/delete options
     */
    storeHistory(type: "create" | "update" | "delete", data: object[], options?: object): void;
    /**
     * Record a new CRUD event in the history log so that it can be undone later.
     * Updates without changes are filtered out unless the `diff` option is set to false.
     * This function may not be overridden.
     * @param {"create"|"update"|"delete"} type    The event type
     * @param {object[]} data                      The create/update/delete data
     * @param {object} [options]                   The options of the undo operation
     * @protected
     */
    protected _storeHistory(type: "create" | "update" | "delete", data: object[], options?: object): void;
    /**
     * Copy (or cut) currently controlled PlaceableObjects, ready to paste back into the Scene later.
     * @param {object} [options]                    Additional options
     * @param {boolean} [options.cut=false]         Cut instead of copy?
     * @returns {ReadonlyArray<PlaceableObject>}    The Array of copied PlaceableObject instances
     */
    copyObjects({ cut }?: {
        cut?: boolean | undefined;
    }): ReadonlyArray<PlaceableObject>;
    /**
     * Paste currently copied PlaceableObjects back to the layer by creating new copies
     * @param {Point} position                    The destination position for the copied data.
     * @param {object} [options]                  Options which modify the paste operation
     * @param {boolean} [options.hidden=false]    Paste data in a hidden state, if applicable. Default is false.
     * @param {boolean} [options.snap=true]       Snap the resulting objects to the grid. Default is true.
     * @returns {Promise<Document[]>}             An Array of created Document instances
     */
    pasteObjects(position: Point, { hidden, snap }?: {
        hidden?: boolean | undefined;
        snap?: boolean | undefined;
    }): Promise<Document[]>;
    /**
     * Select all PlaceableObject instances which fall within a coordinate rectangle.
     * @param {object} [options={}]
     * @param {number} [options.x]                     The top-left x-coordinate of the selection rectangle.
     * @param {number} [options.y]                     The top-left y-coordinate of the selection rectangle.
     * @param {number} [options.width]                 The width of the selection rectangle.
     * @param {number} [options.height]                The height of the selection rectangle.
     * @param {object} [options.releaseOptions={}]     Optional arguments provided to any called release() method.
     * @param {object} [options.controlOptions={}]     Optional arguments provided to any called control() method.
     * @param {object} [aoptions]                      Additional options to configure selection behaviour.
     * @param {boolean} [aoptions.releaseOthers=true]  Whether to release other selected objects.
     * @returns {boolean}       A boolean for whether the controlled set was changed in the operation.
     */
    selectObjects({ x, y, width, height, releaseOptions, controlOptions }?: {
        x?: number | undefined;
        y?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        releaseOptions?: object | undefined;
        controlOptions?: object | undefined;
    }, { releaseOthers }?: {
        releaseOthers?: boolean | undefined;
    }): boolean;
    /**
     * Update all objects in this layer with a provided transformation.
     * Conditionally filter to only apply to objects which match a certain condition.
     * @param {Function|object} transformation     An object of data or function to apply to all matched objects
     * @param {Function|null}  condition           A function which tests whether to target each object
     * @param {object} [options]                   Additional options passed to Document.update
     * @returns {Promise<Document[]>}              An array of updated data once the operation is complete
     */
    updateAll(transformation: Function | object, condition?: Function | null, options?: object): Promise<Document[]>;
    /**
     * Get the world-transformed drop position.
     * @param {DragEvent} event
     * @param {object} [options]
     * @param {boolean} [options.center=true]  Return the coordinates of the center of the nearest grid element.
     * @returns {number[]|boolean}     Returns the transformed x, y coordinates, or false if the drag event was outside
     *                                 the canvas.
     * @protected
     */
    protected _canvasCoordinatesFromDrop(event: DragEvent, { center }?: {
        center?: boolean | undefined;
    }): number[] | boolean;
    /**
     * Create a preview of this layer's object type from a world document and show its sheet to be finalized.
     * @param {object} createData                     The data to create the object with.
     * @param {object} [options]                      Options which configure preview creation
     * @param {boolean} [options.renderSheet]           Render the preview object config sheet?
     * @param {number} [options.top]                    The offset-top position where the sheet should be rendered
     * @param {number} [options.left]                   The offset-left position where the sheet should be rendered
     * @returns {PlaceableObject}                     The created preview object
     * @internal
     */
    _createPreview(createData: object, { renderSheet, top, left }?: {
        renderSheet?: boolean | undefined;
        top?: number | undefined;
        left?: number | undefined;
    }): PlaceableObject;
    /** @override */
    override _onClickLeft(event: any): void;
    /** @override */
    override _canDragLeftStart(user: any, event: any): boolean;
    /** @override */
    override _onDragLeftStart(event: any): void;
    /** @override */
    override _onDragLeftMove(event: any): void;
    /** @override */
    override _onDragLeftDrop(event: any): void;
    /** @override */
    override _onDragLeftCancel(event: any): void;
    /** @override */
    override _onClickRight(event: any): void;
    /** @override */
    override _onMouseWheel(event: any): Promise<PlaceableObject[]> | undefined;
    /** @override */
    override _onDeleteKey(event: any): boolean;
    /**
     * Confirm deletion via the delete key.
     * Called only if {@link foundry.canvas.layers.types.PlaceablesLayerOptions#confirmDeleteKey} is true.
     * @param {Document} documents    The documents that will be deleted on confirmation.
     * @returns {Promise<boolean>}    True if the deletion is confirmed to proceed.
     * @protected
     */
    protected _confirmDeleteKey(documents: Document): Promise<boolean>;
    /** @override */
    override _onSelectAllKey(event: any): boolean;
    /** @override */
    override _onDismissKey(event: any): boolean;
    /** @override */
    override _onUndoKey(event: any): boolean;
    /** @override */
    override _onCutKey(event: any): boolean;
    /** @override */
    override _onCopyKey(event: any): boolean;
    /** @override */
    override _onPasteKey(event: any): boolean;
    /**
     * @deprecated since v12
     * @ignore
     */
    get gridPrecision(): 0 | 2 | 5;
    #private;
}
import InteractionLayer from "./interaction-layer.mjs";
import type { CanvasHistoryEvent } from "../_types.mjs";
import PlaceableObject from "../../placeables/placeable-object.mjs";
import type Quadtree from "../../geometry/quad-tree.mjs";
import type DocumentCollection from "@client/documents/abstract/document-collection.mjs";
import type BasePlaceableHUD from "@client/applications/hud/placeable-hud.mjs";
import type { PlaceablesLayerOptions } from "../_types.mjs";
