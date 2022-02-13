import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  age: Date,
  login: String,
  password: String
})