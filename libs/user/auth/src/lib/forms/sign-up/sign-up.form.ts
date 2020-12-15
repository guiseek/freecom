import {
  Input,
  OnInit,
  Output,
  OnDestroy,
  Component,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core'
import { debounceTime, takeUntil } from 'rxjs/operators'
import { uuid } from '@freecom/peer-core'
import { FormGroup, Validators } from '@angular/forms'
import { newControl } from './../utilities'
import { Subject } from 'rxjs'
import { User } from '@freecom/user/domain'

@Component({
  selector: 'user-sign-up',
  exportAs: 'userSignUp',
  templateUrl: './sign-up.form.html',
  styleUrls: ['./sign-up.form.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpForm extends FormGroup implements OnInit, OnDestroy {
  destroy$ = new Subject<void>()

  form = this

  public get user(): Partial<User> {
    return this.value
  }

  @Input()
  public set user(value: Partial<User>) {
    this.patchValue(value ?? {})
  }

  @Output() loaded = new EventEmitter()

  @Output() updated = new EventEmitter()

  constructor() {
    super({
      uuid: newControl('', [Validators.required]),
      name: newControl('', [Validators.required]),
      user: newControl('', [Validators.required]),
      pass: newControl('', [Validators.required, Validators.minLength(6)]),
      email: newControl('', [Validators.required, Validators.email]),
    })
  }

  ngOnInit() {
    this.loaded.emit(this.form)
    this.get('uuid').setValue(uuid())
    this.valueChanges
      .pipe(debounceTime(1000), takeUntil(this.destroy$))
      .subscribe((value) => this.updated.emit(value))
  }

  ngOnDestroy() {
    this.destroy$.complete()
  }
}
