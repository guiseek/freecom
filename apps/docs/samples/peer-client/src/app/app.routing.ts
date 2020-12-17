import { PlayerComponent } from './player/player.component'
import { PhoneComponent } from './phone/phone.component'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'player' },
      { path: 'phone', component: PhoneComponent },
      { path: 'player', component: PlayerComponent },
    ], { initialNavigation: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
