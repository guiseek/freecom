import { SocketForm } from './socket.form'
import { FormArray, FormGroup, Validators } from '@angular/forms'
import { MeetingConfig } from '../config'
import { control, group } from './form.utils'
import { RtcForm } from './rtc.form'
import { MediaForm } from './media.form'

export class ConfigurationForm extends FormGroup {
  value: MeetingConfig

  constructor(value?: MeetingConfig) {
    super({
      uid: control('', Validators.required),
      socket: new SocketForm(),
      rtc: new RtcForm(),
      media: new MediaForm(),
    })

    if (value) {
      this.patchValue(value)
    }
  }

  get rtc() {
    return this.get('rtc') as FormGroup
  }
  get iceServers() {
    return this.rtc.get('iceServers') as FormArray
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
