import {
  Logger,
  PeerEvent,
  PeerClient,
  PeerTransport,
  IPeerTransport,
  getUserMedia,
  getDisplayMedia,
} from '@freecom/peer-core'
import { BehaviorSubject } from 'rxjs'
import { PeerConfig, PEER_CONFIG } from './config'
import { Inject, Injectable } from '@angular/core'
import { ClientStore } from './client-store'
import { io, Socket } from 'socket.io-client'

@Injectable({
  providedIn: 'root',
})
export class ClientConnection {
  private socket: Socket

  private peerId: string
  private peer: RTCPeerConnection
  private peers: RTCPeerConnection[] = []

  private stream: MediaStream
  private active = new BehaviorSubject<boolean>(false)
  public active$ = this.active.asObservable()

  private logger: Logger = new Logger()

  constructor(
    @Inject(PEER_CONFIG)
    private config: PeerConfig,
    private clientStore: ClientStore
  ) {
    const { rtc, socket } = this.config

    this.logger.info(socket)

    this.socket = io(socket.uri)

    this.socket.on('connect', () => {
      this.logger.log('Socket connected. I am', this.socket.id)
      this.peerId = this.socket.id
    })

    this.socket.on('disconnect', ({ id }) => {
      this.logger.log('Socket disconnected. I was', id, this.socket.id)
    })

    this.socket.on(PeerEvent.Connected, ({ id }) => this.makeOffer(id))

    this.socket.on(PeerEvent.Disconnected, ({ id }) => this.close(id))

    this.socket.on(PeerEvent.Message, (data: IPeerTransport) =>
      this.handleMessage(data)
    )
  }

  public connectToRoom = async () => {
    const video = {
      height: 720,
      echoCancellation: true,
    }
    try {
      const stream = await getUserMedia({ video })
      this.stream = stream
      this.socket.emit(PeerEvent.ConnectToRoom)
      const client = new PeerClient({
        id: this.socket.id,
        stream: stream,
      })
      this.clientStore.addClient(client)
      this.peer = this.peers[this.peerId]
      console.log(this.peer)

      this.active.next(true)
    } catch (err) {
      this.logger.error("Can't get media stream", err)
    }
  }

  public connectScreen = async () => {
    try {
      const stream = await getDisplayMedia()
      this.stream = stream
      this.socket.emit(PeerEvent.ConnectToRoom)
      const client = new PeerClient({
        id: this.socket.id,
        stream: stream,
      })
      this.clientStore.addClient(client)
      this.peer = this.peers[this.peerId]
      console.log(this.peer)

      this.active.next(true)
    } catch (err) {
      this.logger.error("Can't get media stream", err)
    }
  }

  private async makeOffer(clientId: string) {
    try {
      const peer = this.getPeer(clientId)

      const sdp = await peer.createOffer({
        offerToReceiveVideo: true,
        offerToReceiveAudio: true,
      })

      return peer.setLocalDescription(sdp).then(() => {
        this.socket.emit(
          PeerEvent.Message,
          PeerTransport.offer(this.peerId, clientId, sdp)
        )
      })
    } catch (err) {
      this.logger.error("Can't get media stream", err)
    }
  }

  private async handleMessage(message: IPeerTransport) {
    const peer = this.getPeer(message.by)
    this.logger.log(peer)

    this.logger.log(message)
    switch (message.type) {
      case PeerEvent.SdpOffer:
        return this.handleOffer(peer, message)
      case PeerEvent.SdpAnswer:
        return this.handleAnswer(peer, message)
      case PeerEvent.Ice:
        return this.handleIce(peer, message)
    }
  }
  private async handleOffer(peer: RTCPeerConnection, message: IPeerTransport) {
    try {
      await peer.setRemoteDescription(new RTCSessionDescription(message.sdp))
      this.logger.log('Setting remote description by offer')

      const sdp = await peer.createAnswer()

      return peer.setLocalDescription(sdp).then(() => {
        const transport = PeerTransport.answer(this.peerId, message.by, sdp)
        this.socket.emit(PeerEvent.Message, transport)
      })
    } catch (err) {
      this.logger.error('Error on SDP-Offer:', err)
    }
  }

  private async handleAnswer(peer: RTCPeerConnection, message: IPeerTransport) {
    try {
      await peer.setRemoteDescription(new RTCSessionDescription(message.sdp))
      this.logger.log('Setting remote description by answer')
    } catch (err) {
      this.logger.error('Error on SDP-Answer:', err)
    }
  }

  private async handleIce(peer: RTCPeerConnection, message: IPeerTransport) {
    if (message.ice) {
      this.logger.log('Adding ice candidate')
      peer.addIceCandidate(message.ice)
    }
  }

  private getPeer(id: string): RTCPeerConnection {
    if (this.peers[id]) {
      return this.peers[id]
    }

    const peer = new RTCPeerConnection()
    this.peers[id] = peer

    /**
     * Caso seja meu id, armazena
     * o peer em memória volátil */
    if (id === this.peerId) {
      this.peer = peer
    }

    peer.addEventListener(
      'icecandidate',
      ({ candidate }: RTCPeerConnectionIceEvent) => {
        if (candidate) {
          const message = PeerTransport.candidate(this.peerId, id, candidate)
          this.socket.emit(PeerEvent.Message, message)
        }
      }
    )

    peer.addEventListener('iceconnectionstatechange', (ev) => {
      if (peer.iceConnectionState === 'failed') {
        console.log('peer.restartIce()')
      }
    })
    peer.addEventListener('onnegotiationneeded', () => {
      this.logger.log('Need negotiation:', id)
    })

    peer.addEventListener('onsignalingstatechange', () => {
      this.logger.log(
        'ICE signaling state changed to:',
        peer.signalingState,
        'for client',
        id
      )
    })

    // Workaround for Chrome
    // see: https://github.com/webrtc/adapter/issues/361
    if (window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
      // Chrome
      // DEPECRATED https://developer.mozilla.org/de/docs/Web/API/RTCPeerConnection/addStream
      ;(peer as any).addStream(this.stream)
      ;(peer as any).onaddstream = ({ stream }) => {
        this.logger.log('Received new stream')
        const client = new PeerClient({ id: id, stream: stream })
        this.clientStore.addClient(client)
      }
    } else {
      // Firefox
      peer.addTrack(this.stream.getVideoTracks()[0], this.stream)
      peer.ontrack = ({ streams }: RTCTrackEvent) => {
        this.logger.log('Received new stream')
        const client = new PeerClient({ id: id, stream: streams[0] })
        this.clientStore.addClient(client)
      }
    }

    return peer
  }

  close(id: string) {
    const peer = this.peers[id]
    if (peer) peer.close()

    const client = this.clientStore.getClient(id)
    if (client) client.stream.getTracks().forEach((t) => t.stop())

    this.clientStore.removeClient(id)
  }

  hangup() {
    this.close(this.peerId)
    this.socket.emit(PeerEvent.Disconnected)
    this.peer = null
    this.peerId = null
    this.active.next(false)
  }
}
