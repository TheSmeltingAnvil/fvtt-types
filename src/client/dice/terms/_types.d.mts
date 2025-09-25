export type RollTermData = {
    /**
     * The name of the {@link foundry.dice.terms.RollTerm} class with which this data
     *         should be constructed
     */
    class?: string | undefined;
    /**
     * Options modifying or describing the Roll
     */
    options?: RollOptions | undefined;
    /**
     * Has this term been evaluated?
     */
    evaluated?: boolean | undefined;
};
import type { RollOptions } from "../_types.mjs";
