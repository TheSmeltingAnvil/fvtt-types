import Tour from "../Tour.js"

export default class SetupTour extends Tour {
  protected override _preStep(): Promise<void>
  protected override _postStep(): Promise<void>
}
