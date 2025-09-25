export class ClientDocument extends Document {}

export type ClientDocumentMixinType = ReturnType<typeof ClientDocumentMixin>

export function ClientDocumentMixin<TBase extends foundry.abstract.Document>(
  Base: TBase,
): ConstructorOf<TBase> & ConstructorOf<ClientDocument> {
  return class extends Base {}
}
