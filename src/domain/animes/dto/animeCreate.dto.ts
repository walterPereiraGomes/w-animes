import { Type } from 'class-transformer';
import { IsDateString, IsNotEmpty, MaxDate, maxDate, MinDate } from 'class-validator'

export class AnimeCreateDto {

  @IsNotEmpty()
  name: String;

  @IsNotEmpty()
  author: String;

  @IsNotEmpty()
  @IsDateString(null, { message: "invalid date"})
  creationDate: Date;

  @IsNotEmpty()
  description: String;
}