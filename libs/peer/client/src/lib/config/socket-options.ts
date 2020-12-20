import * as SocketIOClient from 'socket.io-client'

export type SocketOptions = Partial<
  SocketIOClient.SocketOptions & SocketIOClient.ManagerOptions
> & {
  uri: string
}

export const socketOptions: SocketOptions = {
  uri: 'http://localhost:3000',
}
