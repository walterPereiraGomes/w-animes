import { Document } from "mongoose";

export class User extends Document {
  name: String;
  age: Date;
  login: String;
  password: String;
}