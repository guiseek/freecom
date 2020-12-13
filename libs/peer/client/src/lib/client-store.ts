import { Observable, BehaviorSubject } from 'rxjs'
import { PeerClient } from '@freecom/peer-core'
import { Injectable } from '@angular/core'
import { List } from 'immutable'

@Injectable()
export class ClientStore {
  private _clients: BehaviorSubject<List<PeerClient>> = new BehaviorSubject(
    List([])
  )

  constructor() {}

  public get clients$(): Observable<List<PeerClient>> {
    return this._clients.asObservable()
  }

  public getClient(clientId: string): PeerClient {
    const clientList = this._clients.getValue()
    return clientList.find((c) => c.id === clientId)
  }

  public addClient(newClient: PeerClient): void {
    this._clients.next(this._clients.getValue().push(newClient))
  }

  public removeClient(clientId: string): void {
    const clientList = this._clients.getValue()
    const removeIndex = clientList.findIndex((c) => c.id === clientId)
    this._clients.next(clientList.remove(removeIndex))
  }
}
