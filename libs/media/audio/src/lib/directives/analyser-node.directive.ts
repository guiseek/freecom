import {
  Directive,
  forwardRef,
  Inject,
  OnDestroy,
  Output,
  SkipSelf,
} from '@angular/core'
import { animationFrameScheduler, interval, Observable } from 'rxjs'
import { map, mapTo, tap } from 'rxjs/operators'
import { AUDIO_CONTEXT } from '../tokens/audio-context'
import { AUDIO_NODE } from '../tokens/audio-node'
import { CONSTRUCTOR_SUPPORT } from '../tokens/constructor-support'
import { connect } from '@freecom/media-core'

@Directive({
  selector: '[mediaAnalyserNode]',
  exportAs: 'AudioNode',
  inputs: [
    'fftSize',
    'minDecibels',
    'maxDecibels',
    'smoothingTimeConstant',
    'channelCount',
    'channelCountMode',
    'channelInterpretation',
  ],
  providers: [
    {
      provide: AUDIO_NODE,
      useExisting: forwardRef(() => AnalyserNodeDirective),
    },
  ],
})
export class AnalyserNodeDirective extends AnalyserNode implements OnDestroy {
  @Output()
  frequencyByte$?: Observable<Uint8Array>

  @Output()
  frequencyFloat$?: Observable<Float32Array>

  @Output()
  timeByte$?: Observable<Uint8Array>

  @Output()
  timeFloat$?: Observable<Float32Array>

  constructor(
    @Inject(AUDIO_CONTEXT) context: BaseAudioContext,
    @SkipSelf() @Inject(AUDIO_NODE) node: AudioNode | null,
    @Inject(CONSTRUCTOR_SUPPORT) modern: boolean
  ) {
    if (modern) {
      super(context)
      AnalyserNodeDirective.init(this, node)
    } else {
      const result = context.createAnalyser() as AnalyserNodeDirective

      Object.setPrototypeOf(result, AnalyserNodeDirective.prototype)
      AnalyserNodeDirective.init(result, node)

      return result
    }
  }

  ngOnDestroy() {
    this.disconnect()
  }

  static init(that: AnalyserNodeDirective, node: AudioNode | null) {
    connect(node, that)

    that.frequencyByte$ = interval(0, animationFrameScheduler).pipe(
      mapTo(new Uint8Array(that.frequencyBinCount)),
      map((array) =>
        array.length === that.frequencyBinCount
          ? array
          : new Uint8Array(that.frequencyBinCount)
      ),
      tap((array) => that.getByteFrequencyData(array))
    )

    that.frequencyFloat$ = interval(0, animationFrameScheduler).pipe(
      mapTo(new Float32Array(that.frequencyBinCount)),
      map((array) =>
        array.length === that.frequencyBinCount
          ? array
          : new Float32Array(that.frequencyBinCount)
      ),
      tap((array) => that.getFloatFrequencyData(array))
    )

    that.timeByte$ = interval(0, animationFrameScheduler).pipe(
      mapTo(new Uint8Array(that.fftSize)),
      map((array) =>
        array.length === that.fftSize
          ? array
          : new Uint8Array(that.frequencyBinCount)
      ),
      tap((array) => that.getByteTimeDomainData(array))
    )

    that.timeFloat$ = interval(0, animationFrameScheduler).pipe(
      mapTo(new Float32Array(that.fftSize)),
      map((array) =>
        array.length === that.fftSize
          ? array
          : new Float32Array(that.frequencyBinCount)
      ),
      tap((array) => that.getFloatTimeDomainData(array))
    )
  }
}
