import {
  AbstractControl,
  AbstractControlOptions,
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms'

export type ValidateOrOpts =
  | ValidatorFn
  | ValidatorFn[]
  | AbstractControlOptions
type AsyncValidator = AsyncValidatorFn | AsyncValidatorFn[]

export const control = (
  formState?: any,
  validatorOrOpts?: ValidateOrOpts,
  asyncValidator?: AsyncValidator
) => new FormControl(formState, validatorOrOpts, asyncValidator)

export const group = (
  controls: { [key: string]: AbstractControl },
  validatorOrOpts?: ValidateOrOpts,
  asyncValidator?: AsyncValidator
) => new FormGroup(controls, validatorOrOpts, asyncValidator)

export const array = (
  controls: AbstractControl[],
  validatorOrOpts?: ValidateOrOpts,
  asyncValidator?: AsyncValidator
) => new FormArray(controls, validatorOrOpts, asyncValidator)
