import { Directive, Inject, OnDestroy, Output } from '@angular/core'
import { interval, Observable } from 'rxjs'
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  mapTo,
  skipWhile,
  tap,
} from 'rxjs/operators'
import { POLLING_TIME } from '../constants/polling-time'
import { AUDIO_CONTEXT } from '../tokens/audio-context'
import { AUDIO_NODE } from '../tokens/audio-node'
import { CONSTRUCTOR_SUPPORT } from '../tokens/constructor-support'
import { connect } from '../utilities/connect'

@Directive({
  selector: '[mediaAudioDestinationNode]',
  exportAs: 'AudioNode',
})
export class AudioDestinationNode extends AnalyserNode implements OnDestroy {
  @Output()
  quiet?: Observable<unknown>

  constructor(
    @Inject(AUDIO_CONTEXT) context: BaseAudioContext,
    @Inject(AUDIO_NODE) node: AudioNode | null,
    @Inject(CONSTRUCTOR_SUPPORT) modern: boolean
  ) {
    if (modern) {
      super(context)
      AudioDestinationNode.init(this, node)
    } else {
      const result = context.createAnalyser() as AudioDestinationNode

      Object.setPrototypeOf(result, AudioDestinationNode.prototype)
      AudioDestinationNode.init(result, node)

      return result
    }
  }

  ngOnDestroy() {
    this.disconnect()
  }

  private isSilent(array: Float32Array): boolean {
    return Math.abs(array.reduce((acc, cur) => acc + cur, 0)) < 0.001
  }

  static init(that: AudioDestinationNode, node: AudioNode | null) {
    connect(node, that)
    that.fftSize = 256
    that.connect(that.context.destination)
    that.quiet = interval(POLLING_TIME).pipe(
      mapTo(new Float32Array(that.fftSize)),
      tap((array) => that.getFloatTimeDomainData(array)),
      map((array) => that.isSilent(array)),
      distinctUntilChanged(),
      skipWhile((isSilent) => isSilent),
      debounceTime(5000),
      filter((isSilent) => isSilent)
    )
  }
}
