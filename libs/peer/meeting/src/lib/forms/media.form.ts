import { FormGroup } from '@angular/forms'
import { control, group } from './form.utils'

export class MediaForm extends FormGroup {
  value: MediaStreamConstraints

  constructor(value?: MediaStreamConstraints) {
    super({
      audio: group({
        deviceId: control(''),
      }),
      video: group({
        deviceId: control(''),
      }),
    })
    if (value) {
      this.patchValue(value)
    }
  }
  get audio() {
    return this.get('audio') as FormGroup
  }
  get video() {
    return this.get('video') as FormGroup
  }
}
