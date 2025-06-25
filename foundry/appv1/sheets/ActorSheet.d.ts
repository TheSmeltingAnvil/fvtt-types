import { DocumentSheet } from "foundry/appv1/api/_module.js"

/**
 * @deprecated since v13
 */
export default class ActorSheet<T extends Actor = Actor> extends DocumentSheet<T> {}
