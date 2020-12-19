import { InjectionToken } from '@angular/core'

import { socketOptions, SocketOptions } from './socket-options'
import { configuration } from './rtc-configuration'
import { mediaConstraints } from './media-constraints'

export interface PeerConfig {
  rtc?: RTCConfiguration
  media?: MediaStreamConstraints
  socket: SocketOptions
}

export const PEER_CONFIG = new InjectionToken<PeerConfig>('peer-config')
export const PEER_RTC_CONFIGURATION = new InjectionToken<RTCConfiguration>(
  'peer-rtc-configuration'
)
export const PEER_MEDIA_CONSTRAINTS = new InjectionToken<
  MediaStreamConstraints
>('peer-media-constraints')

export function mergeRtcConfig(config: RTCConfiguration) {
  return Object.assign(configuration, config)
}
export function mergeMediaConstraints(constraints: RTCConfiguration) {
  return Object.assign(mediaConstraints, constraints)
}
export function mergeSocketOptions(options: SocketOptions) {
  return Object.assign(socketOptions, options)
}
export function mergeConfig({ rtc, media, socket }: PeerConfig) {
  return {
    rtc: mergeRtcConfig(rtc),
    media: mergeMediaConstraints(media),
    socket: mergeSocketOptions(socket),
  }
}
