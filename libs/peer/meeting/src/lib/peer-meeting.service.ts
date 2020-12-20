import { MatDialog } from '@angular/material/dialog'
import { Injectable } from '@angular/core'
import { MeetingConfigComponent } from './components'

@Injectable()
export class PeerMeeting {
  constructor(private _dialog: MatDialog) {}

  create() {
    const ref = this._dialog.open(MeetingConfigComponent, {
      panelClass: 'meeting-config-container',
    })
    return ref.afterClosed()
  }
}
