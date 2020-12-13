import { NgModule } from '@angular/core'
import { MatRippleModule } from '@angular/material/core'
import { MatSliderModule } from '@angular/material/slider'
import { CommonModule } from '@angular/common'
import { PlayButton } from './buttons/play.button'
import { FullscreenButton } from './buttons/fullscreen.button'
import { MatButtonModule } from '@angular/material/button'
import { QualityControl } from './controls/quality.control'
import { PlayerComponent } from './player.component'
import { Fullscreen } from './utilities/fullscreen'
import { VolumeControl } from './controls'

@NgModule({
  imports: [CommonModule, MatButtonModule, MatSliderModule, MatRippleModule],
  declarations: [
    PlayButton,
    VolumeControl,
    QualityControl,
    PlayerComponent,
    FullscreenButton,
  ],
  exports: [
    PlayButton,
    VolumeControl,
    QualityControl,
    PlayerComponent,
    FullscreenButton,
  ],
  providers: [Fullscreen],
})
export class PeerPlayerModule {}
