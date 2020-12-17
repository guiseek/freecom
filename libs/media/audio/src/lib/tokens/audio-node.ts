import { InjectionToken } from '@angular/core'

export const AUDIO_NODE = new InjectionToken<AudioNode | null>(
  'Media Audio API audio node',
  {
    factory: () => null,
  }
)
