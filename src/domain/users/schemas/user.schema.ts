import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  age: Boolean,
  login: String,
  password: String
})