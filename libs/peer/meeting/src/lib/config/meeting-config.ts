import { ManagerOptions, SocketOptions } from 'socket.io-client'

export type SocketConfig = Partial<ManagerOptions & SocketOptions>

export interface MeetingConfig {
  id?: string
  media?: MediaStreamConstraints
  rtc?: RTCConfiguration
  socket?: SocketConfig
}
export const meetingConfig: MeetingConfig = {
  socket: {
    host: 'https://gateway.freecom.dev',
    port: '3000',
    path: '',
    transports: [],
  },
  rtc: {
    iceServers: [{ urls: 'stun:stun.stunprotocol.org:3478' }],
    peerIdentity: '',
  },
  media: {
    audio: {
      deviceId: '',
    },
  },
}
