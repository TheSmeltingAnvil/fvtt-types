import { DataFieldContext, ObjectFieldOptions } from "../_types.js"
import DocumentUUIDField from "./DocumentUUIDField.js"
import ForeignDocumentField from "./ForeignDocumentField.js"
import NumberField from "./NumberField.js"
import SchemaField from "./SchemaField.js"
import StringField from "./StringField.js"

/**
 * A subclass of {@link SchemaField} which stores document metadata in the _stats field.
 * @mixes DocumentStats
 */
export default class DocumentStatsField<TDocumentUUID extends DocumentUUID = DocumentUUID> extends SchemaField<
  DocumentStatsSchema<TDocumentUUID>
> {
  constructor(options?: ObjectFieldOptions<DocumentStatsSchema, true, false, true>, context?: DataFieldContext)
}

type DocumentStatsSchema<TDocumentUUID extends DocumentUUID = DocumentUUID> = {
  /** The package name of the system the Document was created in. */
  systemId: StringField<string, string, true, false, true>
  /** The version of the system the Document was created or last modified in. */
  systemVersion: StringField<string, string, true, false, true>
  /** The core version the Document was created in. */
  coreVersion: StringField<string, string, true, false, true>
  /** A timestamp of when the Document was created. */
  createdTime: NumberField
  /** A timestamp of when the Document was last modified. */
  modifiedTime: NumberField
  /** The ID of the user who last modified the Document. */
  lastModifiedBy: ForeignDocumentField<string>
  /** The UUID of the compendium Document this one was imported from. */
  compendiumSource: DocumentUUIDField<TDocumentUUID>
  /** The UUID of the Document this one is a duplicate of. */
  duplicateSource: DocumentUUIDField<TDocumentUUID>
}
