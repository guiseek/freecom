export type SocketOptions = SocketIOClient.ConnectOpts & {
  uri: string
}

export const socketOptions: SocketOptions = {
  uri: 'http://localhost:3000',
}
