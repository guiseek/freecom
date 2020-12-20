import { getUserMedia } from '@freecom/peer-core'
import { MeetingConfig } from '@freecom/peer-meeting'
import { io, Socket } from 'socket.io-client'
import { uuid } from '@freecom/peer-core'
import { BehaviorSubject } from 'rxjs'

export class Meeting {
  io: Socket
  pc: RTCPeerConnection
  sender: string
  localStream: MediaStream

  message = new BehaviorSubject<any>('')
  message$ = this.message.asObservable()

  constructor({ rtc, media, socket }: MeetingConfig) {
    this.sender = uuid()
    this.io = io(socket)
    this.pc = new RTCPeerConnection(rtc)
    this.setLocalStream(media)

    this.io.on('connected', (evt) => {
      this.message.next(evt)
    })
  }

  async setLocalStream(media: MediaStreamConstraints) {
    this.localStream = await getUserMedia(media)
  }

  async setLocal(pc: RTCPeerConnection, opts: RTCOfferOptions) {
    return pc.setLocalDescription(await pc.createOffer(opts))
  }

  send(offerOpts: RTCOfferOptions) {
    this.setLocal(this.pc, offerOpts).then(() => {
      this.io.emit('message', { sdp: this.pc.localDescription })
    })
  }
}
