import { Directive, Inject, Input, OnDestroy } from '@angular/core'
import { AUDIO_CONTEXT } from '../tokens/audio-context'
import { AUDIO_NODE } from '../tokens/audio-node'
import { CONSTRUCTOR_SUPPORT } from '../tokens/constructor-support'
import { connect } from '@freecom/media-core'

@Directive({
  selector: '[mediaOutput]',
})
export class OutputDirective extends GainNode implements OnDestroy {
  @Input()
  set mediaOutput(destination: AudioNode | AudioParam | undefined) {
    this.disconnect()
    connect(this, destination)
  }

  constructor(
    @Inject(AUDIO_CONTEXT) context: BaseAudioContext,
    @Inject(AUDIO_NODE) node: AudioNode | null,
    @Inject(CONSTRUCTOR_SUPPORT) modern: boolean
  ) {
    if (modern) {
      super(context)
      connect(node, this)
    } else {
      const result = context.createGain()

      Object.setPrototypeOf(result, OutputDirective.prototype)
      connect(node, result)

      return result as OutputDirective
    }
  }

  ngOnDestroy() {
    this.disconnect()
  }

  static init(that: OutputDirective, node: AudioNode | null) {
    connect(node, that)
  }
}
