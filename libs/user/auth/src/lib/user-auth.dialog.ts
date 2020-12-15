import {
  Inject,
  OnInit,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core'
import { FormGroup } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Auth, User } from '@freecom/user/domain'

@Component({
  selector: 'user-auth',
  templateUrl: './user-auth.dialog.html',
  styleUrls: ['./user-auth.dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAuthDialog implements OnInit {
  form: FormGroup

  constructor(
    private ref: MatDialogRef<UserAuthDialog>,
    @Inject(MAT_DIALOG_DATA)
    public data: { type: 'in' | 'up'; user: Partial<Auth | User> } = {
      type: 'in',
      user: {},
    }
  ) {}

  ngOnInit(): void {}

  onLoadForm(form: FormGroup) {
    console.log(form)

    this.form = form
  }

  onChange(value: Partial<User>) {
    console.log(value)
  }
  onIn(auth: Auth) {
    console.log(auth)
  }
  onUp(user: User) {
    console.log(user)
  }
}
