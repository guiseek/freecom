import { ClientConnection, ClientStore } from '@freecom/peer-client'
import { catchError, map } from 'rxjs/operators'
import { Component } from '@angular/core'
import { throwError } from 'rxjs'

@Component({
  selector: 'sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'docs-samples-peer-client'

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
