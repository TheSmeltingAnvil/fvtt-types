/**
 * Augment any PIXI.DisplayObject to assume bounds that are always aligned with the full visible screen.
 * The bounds of this container do not depend on its children but always fill the entire canvas.
 * @param {typeof PIXI.DisplayObject} Base    Any PIXI DisplayObject subclass
 */
export default function FullCanvasObjectMixin(Base: typeof PIXI.DisplayObject): {
    new (): {
        /** @override */
        calculateBounds(): void;
    };
};
