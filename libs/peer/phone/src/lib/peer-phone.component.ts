import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Component, Inject, OnInit, OnDestroy } from '@angular/core'
import { PEER_PHONE_CONFIG } from './config/config-injectors'
import { PeerPhoneConfig } from './config/peer-phone-config'
import { delay, repeatWhen, takeUntil } from 'rxjs/operators'
import { Subject, interval, fromEvent } from 'rxjs'
import { User } from '@freecom/core-entities';

@Component({
  selector: 'peer-peer-phone',
  templateUrl: './peer-phone.component.html',
  styleUrls: ['./peer-phone.component.scss'],
})
export class PeerPhoneComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>()

  private ring: HTMLAudioElement

  constructor(
    private ref: MatDialogRef<PeerPhoneComponent, RTCPeerConnection>,
    @Inject(PEER_PHONE_CONFIG) private config: PeerPhoneConfig,
    @Inject(MAT_DIALOG_DATA) public data: Pick<User, 'name' | 'uuid'>
  ) {}

  ngOnInit(): void {
    this.ring = new Audio(this.config.ringtones.incoming)

    interval(this.ring.duration)
      .pipe(
        delay(1000),
        takeUntil(this.destroy$),
        repeatWhen(() => fromEvent(this.ring, 'onended'))
      )
      .subscribe(() => this.ring.play())
  }

  cancel() {
    this.ref.close(null)
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
