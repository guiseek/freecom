import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'
import { PeerEvent, IPeerTransport } from '@freecom/peer-core'
import { SignalingLogger } from './signaling.logger'
import { Server, Socket, Client } from 'socket.io'

@WebSocketGateway()
export class SignalingGateway
  implements OnGatewayConnection, OnGatewayDisconnect {
  private logger: SignalingLogger = new SignalingLogger()

  sockets = new Map<string, Client>([])

  @WebSocketServer()
  server: Server

  @SubscribeMessage(PeerEvent.Message)
  onPeerMessage(socket: Socket, data: IPeerTransport) {
    this.logger.log(`Forward WebRTC peer message ${JSON.stringify(data)}`)
    socket.broadcast.emit(PeerEvent.Message, data)
  }

  @SubscribeMessage(PeerEvent.ConnectToRoom)
  onPeerConnect(socket: Socket, data: any) {
    this.logger.log(`Client ${socket.id} connected to room`)
    socket.broadcast.emit(PeerEvent.Connected, { id: socket.id })
  }

  handleConnection(socket: Socket, ...args: any[]) {
    this.sockets.set(socket.id, socket.client)

    this.logger.connected(socket.id, this.sockets.size)

    this.server.emit(
      PeerEvent.JoinedToRoom,
      JSON.stringify(this.sockets.keys())
    )
    socket.broadcast.emit(
      PeerEvent.JoinedToRoom,
      JSON.stringify(this.sockets.keys())
    )
  }
  handleDisconnect(socket: Socket) {
    if (this.sockets.has(socket.id)) {
      this.sockets.delete(socket.id)
    }
    socket.broadcast.emit(PeerEvent.Disconnected, {
      id: socket.id,
    })
  }
}
