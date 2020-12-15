import { Type } from '@nestjs/common'
import { CreateUserDto } from './create-user.dto'
import { MinLength } from 'class-validator'

export declare function PickType<T, K extends keyof T>(
  classRef: Type<T>,
  keys: readonly K[]
): Type<Pick<T, typeof keys[number]>>

export class UpdatePassDto extends PickType(CreateUserDto, ['pass']) {
  @MinLength(6)
  newPass: string
}
