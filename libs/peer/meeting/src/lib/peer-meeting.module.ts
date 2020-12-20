import { ModuleWithProviders, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FlexLayoutModule } from '@angular/flex-layout'
import { LayoutModule } from '@angular/cdk/layout'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatSelectModule } from '@angular/material/select'
import { MatDialogModule } from '@angular/material/dialog'
import { MatStepperModule } from '@angular/material/stepper'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms'

import { PeerPlayerModule } from '@freecom/peer-player'

import { ConfigurationComponent, MeetingConfigComponent } from './components'
import { MeetingConfig, MEETING_CONFIG, mergeConfig } from './config'
import { PeerMeeting } from './peer-meeting.service'
import { MeetingContainer } from './containers/meeting/meeting.container'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatStepperModule,
    MatSelectModule,
    MatButtonModule,
    FlexLayoutModule,
    PeerPlayerModule,
  ],
  declarations: [
    ConfigurationComponent,
    MeetingConfigComponent,
    MeetingContainer,
  ],
  exports: [ConfigurationComponent, MeetingConfigComponent, MeetingContainer],
  providers: [PeerMeeting],
})
export class PeerMeetingModule {
  static forRoot(
    config?: MeetingConfig
  ): ModuleWithProviders<PeerMeetingModule> {
    const peerConfig = mergeConfig(
      config ?? { rtc: {}, media: {}, socket: null }
    )
    return {
      ngModule: PeerMeetingModule,
      providers: [{ provide: MEETING_CONFIG, useValue: peerConfig }],
    }
  }
}
