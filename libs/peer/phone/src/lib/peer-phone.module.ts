import { CommonModule } from '@angular/common'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { MatDialogModule } from '@angular/material/dialog'
import { PEER_PHONE_CONFIG } from './config/config-injectors'
import { PeerPhoneConfig } from './config/peer-phone-config'
import { PeerPhoneComponent } from './peer-phone.component'
import { PeerPhoneService } from './peer-phone.service'

@NgModule({
  imports: [CommonModule, MatDialogModule],
  declarations: [PeerPhoneComponent],
  providers: [PeerPhoneService],
  exports: [PeerPhoneComponent],
})
export class PeerPhoneModule {
  static forRoot(
    config: PeerPhoneConfig
  ): ModuleWithProviders<PeerPhoneModule> {
    return {
      ngModule: PeerPhoneModule,
      providers: [{ provide: PEER_PHONE_CONFIG, useValue: config }],
    }
  }
}
