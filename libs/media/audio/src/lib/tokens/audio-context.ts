import { InjectionToken } from '@angular/core'

export const AUDIO_CONTEXT = new InjectionToken<BaseAudioContext>(
  'Media Audio API context',
  {
    providedIn: 'root',
    factory: () => new AudioContext(),
  }
)
