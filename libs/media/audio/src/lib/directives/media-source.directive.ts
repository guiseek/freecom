import {
  Directive,
  ElementRef,
  forwardRef,
  Inject,
  OnDestroy,
} from '@angular/core'
import { AUDIO_CONTEXT } from '../tokens/audio-context'
import { AUDIO_NODE } from '../tokens/audio-node'
import { CONSTRUCTOR_SUPPORT } from '../tokens/constructor-support'

@Directive({
  selector:
    'audio[mediaElementAudioSourceNode], video[mediaElementAudioSourceNode]',
  exportAs: 'AudioNode',
  providers: [
    {
      provide: AUDIO_NODE,
      useExisting: forwardRef(() => MediaSourceDirective),
    },
  ],
})
export class MediaSourceDirective
  extends MediaElementAudioSourceNode
  implements OnDestroy {
  constructor(
    @Inject(AUDIO_CONTEXT) context: AudioContext,
    @Inject(CONSTRUCTOR_SUPPORT) modern: boolean,
    @Inject(ElementRef) { nativeElement }: ElementRef<HTMLMediaElement>
  ) {
    if (modern) {
      super(context, { mediaElement: nativeElement })
    } else {
      const result = context.createMediaElementSource(nativeElement)

      Object.setPrototypeOf(result, MediaSourceDirective.prototype)

      return result as MediaSourceDirective
    }
  }

  ngOnDestroy() {
    this.disconnect()
  }
}
