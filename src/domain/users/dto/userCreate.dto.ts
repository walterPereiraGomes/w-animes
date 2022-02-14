import { IsIn, IsNotEmpty } from 'class-validator'

export class UserCreateDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  age: number

  @IsNotEmpty()
  login: string

  @IsNotEmpty()
  password: string

  isAdmin: boolean
}