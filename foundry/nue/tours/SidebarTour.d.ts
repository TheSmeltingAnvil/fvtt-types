import Tour from "../Tour.js"

export default class SidebarTour extends Tour {
  protected override _preStep(): Promise<void>
  protected override _postStep(): Promise<void>
}
