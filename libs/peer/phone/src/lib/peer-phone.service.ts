import { Observable } from 'rxjs'
import { PeerClient } from '@freecom/peer-core'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { PeerPhoneComponent } from './peer-phone.component'

@Injectable()
export class PeerPhoneService {
  constructor(private dialog: MatDialog) {}

  call(client?: PeerClient): Observable<RTCPeerConnection> {
    return this.dialog
      .open(PeerPhoneComponent, {
        panelClass: 'phone-container',
        data: client,
      })
      .afterClosed()
  }
}
