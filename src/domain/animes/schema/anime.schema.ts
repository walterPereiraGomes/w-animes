import * as mongoose from 'mongoose';

export const AnimeSchema = new mongoose.Schema({
  name: String,
  author: String,
  creationDate: Date,
  description: String
})