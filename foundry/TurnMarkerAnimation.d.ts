interface TurnMarkerAnimationData {
  config?: TurnMarkerAnimationConfigData
  id: string
  label: string
}

interface TurnMarkerAnimationConfigData {
  pulse: { max?: number; min?: number; speed?: number }
  shader?: any
  spin?: number
}
