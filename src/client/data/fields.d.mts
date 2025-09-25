export * from "@common/data/fields.mjs";
/**
 * A special subclass of DataField used to reference an AbstractBaseShader definition. Client only.
 */
export class ShaderField extends DataField {
    /** @override */
    override _cast(value: any): any;
}
import { DataField } from "@common/data/fields.mjs";
