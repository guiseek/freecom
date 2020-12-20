import { takeUntil } from 'rxjs/operators'
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import {
  AfterViewInit,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MediaForm, RtcForm, SocketForm } from './../../forms'
import { MeetingConfig, MEETING_CONFIG } from '../../config'
import { getDevices, getUserMedia } from '@freecom/peer-core'
import { MatStepper } from '@angular/material/stepper'

@Component({
  selector: 'peer-meeting-config',
  templateUrl: './meeting-config.component.html',
  styleUrls: ['./meeting-config.component.scss'],
})
export class MeetingConfigComponent
  implements OnInit, AfterViewInit, OnDestroy {
  destroy$ = new Subject<void>()

  @ViewChild('stepper') stepper: MatStepper

  rtcForm: RtcForm
  mediaForm: MediaForm
  socketForm: SocketForm
  audioList: MediaDeviceInfo[]
  videoList: MediaDeviceInfo[]

  localStream = new BehaviorSubject<MediaStream>(null)
  localStream$ = this.localStream.asObservable()

  constructor(
    private _ref: MatDialogRef<MeetingConfigComponent, MeetingConfig>,
    @Inject(MEETING_CONFIG) public meetingConfig: MeetingConfig,
    @Inject(MAT_DIALOG_DATA) public config: MeetingConfig = {}
  ) {
    const { media, rtc, socket } = config ?? meetingConfig ?? {}
    this.rtcForm = new RtcForm(rtc ?? {})
    this.mediaForm = new MediaForm(media ?? {})
    this.socketForm = new SocketForm(socket ?? {})
  }

  ngOnInit(): void {
    getDevices('audioinput').then((devices) => {
      this.audioList = devices
      devices.forEach(({ deviceId }) => {
        if (deviceId === 'default') {
          this.mediaForm.audio.patchValue({ deviceId })
        }
      })
    })
    getDevices('videoinput').then((devices) => {
      this.videoList = devices
      devices.forEach(({ deviceId }) => {
        if (deviceId === 'default') {
          this.mediaForm.video.patchValue({ deviceId })
        }
      })
    })
  }

  ngAfterViewInit() {
    this.stepper.selectionChange
      .pipe(takeUntil(this.destroy$))
      .subscribe(async ({ selectedIndex }) => {
        if (selectedIndex === 3) {
          this.localStream.next(await getUserMedia(this.mediaForm.value))
        }
      })
  }

  getUserMedia() {
    console.log('qwe')
    return new Observable((subscribe) => {
      getUserMedia(this.rtcForm.value).then((stream) => {
        subscribe.next(stream)
      })
    })
  }

  onConfirm() {
    if ((this.rtcForm.valid, this.mediaForm.valid, this.socketForm.valid)) {
      this._ref.close({
        rtc: this.rtcForm.value,
        media: this.mediaForm.value,
        socket: this.socketForm.value,
      })
    }
  }

  onCancel() {
    this._ref.close()
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
    if (this.localStream.getValue()) {
      this.localStream
        .getValue()
        .getTracks()
        .forEach((track) => track.stop())
    }
  }
}
