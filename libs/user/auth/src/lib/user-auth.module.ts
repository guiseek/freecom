import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { A11yModule } from '@angular/cdk/a11y'
import { MatTabsModule } from '@angular/material/tabs'
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatStepperModule } from '@angular/material/stepper'
import { MatFormFieldModule } from '@angular/material/form-field'

import { UserDomainModule } from '@freecom/user/domain'
import { UserAuthService } from './user-auth.service'
import { UserAuthDialog } from './user-auth.dialog'
import { SignInForm, SignUpForm } from './forms'

@NgModule({
  imports: [
    A11yModule,
    CommonModule,
    MatMenuModule,
    MatTabsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    UserDomainModule,
  ],
  declarations: [UserAuthDialog, SignInForm, SignUpForm],
  exports: [UserAuthDialog, SignInForm, SignUpForm],
  providers: [UserAuthService]
})
export class UserAuthModule {}
