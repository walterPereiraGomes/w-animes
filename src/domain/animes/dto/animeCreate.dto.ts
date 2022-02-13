import { IsNotEmpty } from 'class-validator'

export class AnimeCreateDto {
  @IsNotEmpty()
  name: String;

  @IsNotEmpty()
  author: String;

  @IsNotEmpty()
  createdAge: Date;

  @IsNotEmpty()
  description: String;
}