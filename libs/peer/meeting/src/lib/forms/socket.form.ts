import { FormGroup, Validators } from '@angular/forms'
import { array, control } from './form.utils'
import { SocketConfig } from '../config'

export class SocketForm extends FormGroup {
  value: SocketConfig

  constructor(value?: SocketConfig) {
    super({
      host: control('', Validators.required),
      port: control('', Validators.required),
      path: control(''),
      transports: array([]),
    })
    if (value) {
      this.patchValue(value)
    }
  }
}
