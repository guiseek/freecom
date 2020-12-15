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
import { FormGroup, Validators } from '@angular/forms'
import { newControl } from './../utilities'
import { Subject } from 'rxjs'
import { Auth } from '@freecom/user/domain'

@Component({
  selector: 'user-sign-in',
  exportAs: 'userSignIn',
  templateUrl: './sign-in.form.html',
  styleUrls: ['./sign-in.form.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInForm extends FormGroup implements OnInit, OnDestroy {
  destroy$ = new Subject<void>()

  form = this

  public get auth(): Partial<Auth> {
    return this.value
  }

  @Input()
  public set auth(value: Partial<Auth>) {
    this.patchValue(value ?? {})
  }

  @Output() loaded = new EventEmitter()

  @Output() updated = new EventEmitter()

  constructor() {
    super({
      user: newControl('', [Validators.required]),
      pass: newControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  ngOnInit() {
    this.loaded.emit(this.form)
    this.valueChanges
      .pipe(debounceTime(1000), takeUntil(this.destroy$))
      .subscribe((value) => this.updated.emit(value))
  }

  ngOnDestroy() {
    this.destroy$.complete()
  }
}
