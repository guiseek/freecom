import * as SocketIOClient from 'socket.io-client'

/**
 *    `Caller`
 * 1. Caller create offer
 * 1. Caller sets local description
 * 1. Caller sends the description to the callee
 * ---
 *    `Callee`
 * 1. Callee receives the offer sets remote description
 * 1. Callee creates answer
 * 1. Callee sets local description
 * 1. Callee send the description to caller
 * ---
 * 1. Caller receives the answer and sets remote description
 */

import { uuid } from './utilities'

export interface IPeer {
  uid: string
  transport: SocketIOClient.Socket
}

export class Peer implements IPeer {
  uid: string
  transport: SocketIOClient.Socket

  constructor({ uid, transport }: IPeer) {
    this.uid = uid ? uid : uuid()
    this.transport = transport
  }

  async connect(pc: RTCPeerConnection) {
    // const offer = await pc.createOffer()
    pc.setLocalDescription(await pc.createOffer())
    const description = { sdp: pc.localDescription }
    this.transport.emit('message', {
      sender: this.uid,
      sdp: description,
    })
  }
}
