import * as nue from "./nue/_module.js"

export type TourStatus = (typeof nue.Tour.STATUS)[keyof typeof nue.Tour.STATUS]
