import { FormArray, FormGroup, Validators } from '@angular/forms'
import { array, control, group } from './form.utils'

export class RtcForm extends FormGroup {
  value: RTCConfiguration

  constructor({ iceServers = [], ...value }: RTCConfiguration = {}) {
    super({
      iceServers: array([]),
      peerIdentity: control(''),
    })
    if (value) {
      this.patchValue(value)
    }
    console.log(iceServers)

    if (iceServers) {
      iceServers.forEach((iceServer) => {
        this.addIceServer(iceServer.urls as string)
      })
    }
  }
  get iceServers() {
    return this.get('iceServers') as FormArray
  }

  addIceServer(url: string = '') {
    this.iceServers.push(this.createIceServer(url))
  }

  createIceServer(url: string = '') {
    return group({
      urls: control(url, Validators.required),
    })
  }
}
