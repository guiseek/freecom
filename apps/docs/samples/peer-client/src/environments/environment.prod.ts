export const environment = {
  production: true,
  connection: {
    rtc: {
      iceServers: [
        // { urls: 'stun:gateway.guiseek.dev:3478' },
        { urls: 'stun:stun.services.mozilla.com' },
        { urls: 'stun:stun.stunprotocol.org:3478' },
      ]
    },
    socket: {
      uri: 'https://gateway.guiseek.dev'
    }
  }

}
