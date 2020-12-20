import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { PhoneComponent } from './phone/phone.component'
import { PlayerComponent } from './player/player.component'
import { MeetingComponent } from './meeting/meeting.component'

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: 'meeting' },
        { path: 'phone', component: PhoneComponent },
        { path: 'player', component: PlayerComponent },
        { path: 'meeting', component: MeetingComponent },
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
