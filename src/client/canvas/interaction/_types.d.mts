export type RenderFlag = {
    /**
     * Activating this flag also sets these flags to true
     */
    propagate?: string[] | undefined;
    /**
     * Activating this flag resets these flags to false
     */
    reset?: string[] | undefined;
    /**
     * Is this flag deprecated? The deprecation options are passed to
     *     logCompatibilityWarning. The deprectation message is auto-generated
     *     unless message is passed with the options.
     *     By default the message is logged only once.
     */
    deprecated?: object | undefined;
};
export type PingData = {
    /**
     * Pulls all connected clients' views to the pinged coordinates.
     */
    pull?: boolean | undefined;
    /**
     * The ping style, see CONFIG.Canvas.pings.
     */
    style: string;
    /**
     * The ID of the scene that was pinged.
     */
    scene: string;
    /**
     * The zoom level at which the ping was made.
     */
    zoom: number;
};
export type PingOptions = {
    /**
     * The duration of the animation in milliseconds.
     */
    duration?: number | undefined;
    /**
     * The size of the ping graphic.
     */
    size?: number | undefined;
    /**
     * The color of the ping graphic.
     */
    color?: string | undefined;
    /**
     * The name for the ping animation to pass to
     * {@link foundry.canvas.animation.CanvasAnimation.animate}.
     */
    name?: string | undefined;
};
export type _PulsePingOptions = {
    /**
     * The number of rings used in the animation.
     */
    rings?: number | undefined;
    /**
     * The alternate color that the rings begin at. Use white for a 'flashing' effect.
     */
    color2?: string | undefined;
};
export type PulsePingOptions = PingOptions & _PulsePingOptions;
