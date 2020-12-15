import {
  IsNotEmpty,
  IsUUID,
  MinLength,
  IsEmail,
  IsAlphanumeric,
} from 'class-validator'

export class CreateUserDto {
  @IsUUID()
  @IsNotEmpty()
  uuid: string

  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  user: string

  @IsNotEmpty()
  @MinLength(6)
  @IsAlphanumeric()
  pass: string

  @IsEmail()
  email?: string
}
