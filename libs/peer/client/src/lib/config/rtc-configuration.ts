export const configuration: RTCConfiguration = {
  iceServers: [
    { urls: 'stun:ubuntu.gui:3478' },
    // { urls: 'stun:stun.services.mozilla.com' },
    // { urls: 'stun:stun.stunprotocol.org:3478' },
  ],
  bundlePolicy: 'balanced',
  certificates: [],
  iceCandidatePoolSize: 10,
  iceTransportPolicy: 'all',
  peerIdentity: '',
}
