import { PeerEvent } from './peer-event.enum'

export interface IPeerTransport {
  type: PeerEvent
  by: string
  to: string
  sdp?: RTCSessionDescriptionInit
  ice?: RTCIceCandidate
}

export class PeerTransport {
  static offer(
    by: string,
    to: string,
    sdp: RTCSessionDescriptionInit
  ): IPeerTransport {
    return { type: PeerEvent.SdpOffer, by, to, sdp }
  }

  static answer(
    by: string,
    to: string,
    sdp: RTCSessionDescriptionInit
  ): IPeerTransport {
    return { type: PeerEvent.SdpAnswer, by, to, sdp }
  }

  static candidate(
    by: string,
    to: string,
    ice: RTCIceCandidate
  ): IPeerTransport {
    return { type: PeerEvent.Ice, by, to, ice }
  }

  static set({ type, by, to, ...data }: IPeerTransport) {
    return { type, by, to, ...data }
  }
}
