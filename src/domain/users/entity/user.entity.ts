import { Document } from "mongoose";

export class User extends Document {
  name: String;
  age: Number;
  login: String;
  password: String;
}