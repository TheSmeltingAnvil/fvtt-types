export * from "@common/packages/_types.mjs";
export type PackageCompatibilityBadge = {
    /**
     * A type in "safe", "unsafe", "warning", "neutral" applied as a CSS class
     */
    type: string;
    /**
     * A tooltip string displayed when hovering over the badge
     */
    tooltip: string;
    /**
     * An optional text label displayed in the badge
     */
    label?: string | undefined;
    /**
     * An optional icon displayed in the badge
     */
    icon?: string | undefined;
};
