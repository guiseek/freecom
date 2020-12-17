import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ClientConnection, ClientStore } from '@freecom/peer-client'
import { catchError, map } from 'rxjs/operators'
import { throwError } from 'rxjs'

@Component({
  selector: 'sample-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent {
  active$ = this.connectionService.active$

  public clients$ = this.clientStoreService.clients$.pipe(
    map((clientList) => clientList.toArray()),
    catchError((err) => throwError('E:', err))
  )

  constructor(
    private clientStoreService: ClientStore,
    private connectionService: ClientConnection
  ) {}

  public connectToRoom() {
    this.connectionService.connectToRoom()
  }

  connectScreen() {
    this.connectionService.connectScreen()
  }

  hangUp() {
    this.connectionService.hangup()
  }

}
