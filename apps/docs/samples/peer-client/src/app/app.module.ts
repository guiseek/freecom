import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { environment } from './../environments/environment.prod'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

import { PeerClientModule } from '@freecom/peer-client'
import { PeerPlayerModule } from '@freecom/peer-player'
import { PeerPhoneModule } from '@freecom/peer-phone'

import { PlayerComponent } from './player/player.component'
import { PhoneComponent } from './phone/phone.component'
import { AppRoutingModule } from './app.routing'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent, PhoneComponent, PlayerComponent],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    PeerPlayerModule,
    PeerPhoneModule.forRoot({
      ringtones: {
        incoming: 'assets/audios/phone-ringtone_time_that_passes.ogg'
      }
    }),
    PeerClientModule.forRoot(environment.connection),
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
