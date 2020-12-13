import { ModuleWithProviders, NgModule } from '@angular/core'
import { ClientConnection } from './client-connection'
import { ClientStore } from './client-store'
import { mergeConfig, PeerConfig, PEER_CONFIG } from './config'

@NgModule({ providers: [ClientConnection, ClientStore] })
export class PeerClientModule {
  static forRoot(config?: PeerConfig): ModuleWithProviders<PeerClientModule> {
    const peerConfig = mergeConfig(
      config ?? { rtc: {}, media: {}, socket: null }
    )
    return {
      ngModule: PeerClientModule,
      providers: [{ provide: PEER_CONFIG, useValue: peerConfig }],
    }
  }
}
