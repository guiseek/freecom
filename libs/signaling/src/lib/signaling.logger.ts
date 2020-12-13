import { Injectable, Logger, Scope } from '@nestjs/common'

@Injectable({ scope: Scope.DEFAULT })
export class SignalingLogger extends Logger {
  log(message: string, context?: string) {
    super.log(message, context ? context : 'Signaling')
  }

  error(message: string, trace: string) {
    // add your tailored logic here
    super.error(message, trace)
  }

  connected(id: string, total: number) {
    this.log(`${id} - ${total} clients.`, 'ClientConnected')
  }

  disconnected(id: string, total: number) {
    this.log(`${id} - ${total} clients.`, 'ClientDisconnected')
  }
}
