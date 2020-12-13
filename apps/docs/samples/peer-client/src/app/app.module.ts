import { environment } from './../environments/environment'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

import { PeerClientModule } from '@freecom/peer-client'
import { PeerPlayerModule } from '@freecom/peer-player'

import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    PeerPlayerModule,
    PeerClientModule.forRoot(environment.connection),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
