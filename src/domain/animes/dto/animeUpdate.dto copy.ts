import { IsNotEmpty } from 'class-validator'

export class AnimeCreateDto {
  name: String;

  author: String;

  creationDate: Date;

  description: String;
}