import DocumentSheetV2 from "../api/DocumentSheetV2.js"
import HandlebarsApplicationMixin from "../api/HandlebarsApplicationMixin.js"

export default class BaseSheet extends HandlebarsApplicationMixin(DocumentSheetV2) {}
