export const environment = {
  production: false,
  connection: {
    rtc: {
      iceServers: [
        { urls: 'stun:ubuntu.gui:3478' },
        { urls: 'stun:stun.stunprotocol.org:3478' },
      ],
    },
    socket: {
      uri: 'http://localhost:3000',
      // uri: 'https://gateway.freecom.dev',
    },
  },
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
