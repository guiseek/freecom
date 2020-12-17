import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AudioDestinationNode } from './directives/audio-destination-node.directive'
import { AnalyserNodeDirective } from './directives/analyser-node.directive'
import { MediaSourceDirective } from './directives/media-source.directive'
import { OutputDirective } from './directives/output.directive'

@NgModule({
  imports: [CommonModule],
  declarations: [
    AudioDestinationNode,
    AnalyserNodeDirective,
    MediaSourceDirective,
    OutputDirective,
  ],
  exports: [
    AudioDestinationNode,
    AnalyserNodeDirective,
    MediaSourceDirective,
    OutputDirective,
  ],
})
export class MediaAudioModule {}
