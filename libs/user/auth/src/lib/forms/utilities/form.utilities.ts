import {
  AbstractControlOptions,
  AsyncValidatorFn,
  FormControl,
  ValidatorFn,
} from '@angular/forms'

export type ValidatorOrOpts =
  | ValidatorFn
  | ValidatorFn[]
  | AbstractControlOptions
export type AsyncValidator = AsyncValidatorFn | AsyncValidatorFn[]

export const newControl = (
  value?: any,
  validatorOrOpts?: ValidatorOrOpts,
  asyncValidator?: AsyncValidator
) => new FormControl(value, validatorOrOpts, asyncValidator)
