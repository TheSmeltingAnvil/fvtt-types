import { TombstoneDataSchema } from "../_module.js"
import EmbeddedCollectionField from "./EmbeddedCollectionField.js"
import { SourceFromDocument, SourceFromSchema } from "./util.js"

/**
 * A subclass of {@link EmbeddedCollectionField} which manages a collection of delta objects relative to another
 * collection.
 * @todo: fill in
 */
export default class EmbeddedCollectionDeltaField<
  TDocument extends foundry.abstract.Document<foundry.abstract.Document>,
  TSource extends (SourceFromDocument<TDocument> | SourceFromSchema<TombstoneDataSchema>)[] = (
    | SourceFromDocument<TDocument>
    | SourceFromSchema<TombstoneDataSchema>
  )[],
  TRequired extends boolean = true,
  TNullable extends boolean = false,
  THasInitial extends boolean = true,
> extends EmbeddedCollectionField<TDocument, TSource, TRequired, TNullable, THasInitial> {}
