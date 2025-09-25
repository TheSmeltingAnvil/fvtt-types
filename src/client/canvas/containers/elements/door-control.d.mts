/**
 * An icon representing a Door Control
 * @extends {PIXI.Container}
 */
export default class DoorControl {
    constructor(wall: any);
    wall: any;
    visible: boolean;
    /**
     * The center of the wall which contains the door.
     * @type {PIXI.Point}
     */
    get center(): PIXI.Point;
    /**
     * Draw the DoorControl icon, displaying its icon texture and border
     * @returns {Promise<DoorControl>}
     */
    draw(): Promise<DoorControl>;
    bg: any;
    icon: any;
    border: any;
    eventMode: string | undefined;
    interactiveChildren: boolean | undefined;
    hitArea: any;
    cursor: string | undefined;
    alpha: number | undefined;
    /**
     * Get the icon texture to use for the Door Control icon based on the door state
     * @returns {PIXI.Texture}
     * @protected
     */
    protected _getTexture(): PIXI.Texture;
    reposition(): void;
    /**
     * Determine whether the DoorControl is visible to the calling user's perspective.
     * The control is always visible if the user is a GM and no Tokens are controlled.
     * @see {CanvasVisibility#testVisibility}
     * @type {boolean}
     */
    get isVisible(): boolean;
    /**
     * Handle mouse over events on a door control icon.
     * @param {PIXI.FederatedEvent} event      The originating interaction event
     * @protected
     */
    protected _onMouseOver(event: PIXI.FederatedEvent): false | undefined;
    /**
     * Handle mouse out events on a door control icon.
     * @param {PIXI.FederatedEvent} event      The originating interaction event
     * @protected
     */
    protected _onMouseOut(event: PIXI.FederatedEvent): false | undefined;
    /**
     * Handle left mouse down events on a door control icon.
     * This should only toggle between the OPEN and CLOSED states.
     * @param {PIXI.FederatedEvent} event      The originating interaction event
     * @protected
     */
    protected _onMouseDown(event: PIXI.FederatedEvent): any;
    /**
     * Handle right mouse down events on a door control icon.
     * This should toggle whether the door is LOCKED or CLOSED.
     * @param {PIXI.FederatedEvent} event      The originating interaction event
     * @protected
     */
    protected _onRightDown(event: PIXI.FederatedEvent): any;
}
