import { Document } from "mongoose";

export class Anime extends Document {
  name: String;
  author: String;
  creationDate: Date;
  description: String;
}