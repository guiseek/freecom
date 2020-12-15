import { UserAuthDialog } from './user-auth.dialog'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Auth, User } from '@freecom/user/domain'

@Injectable()
export class UserAuthService {
  constructor(private _dialog: MatDialog) {}

  open(type: 'in' | 'up', user?: Partial<Auth | User>) {
    return this._dialog
      .open(UserAuthDialog, {
        panelClass: 'user-auth-dialog',
        data: { type, user },
        maxHeight: 600,
      })
      .afterClosed()
  }
}
