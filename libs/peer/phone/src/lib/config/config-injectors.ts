import { InjectionToken } from '@angular/core'
import { PeerPhoneConfig, peerPhoneConfig } from './peer-phone-config'

export const PEER_PHONE_CONFIG = new InjectionToken<PeerPhoneConfig>(
  'PeerPhoneConfig'
)

export function mergeRtcConfig(config: PeerPhoneConfig) {
  return Object.assign(peerPhoneConfig, config)
}
