import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  login: String,
  password: String,
  isAdmin: Boolean
})