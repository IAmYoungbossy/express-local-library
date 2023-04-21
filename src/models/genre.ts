import mongoose, { Document } from "mongoose";

const Schema = mongoose.Schema;

export interface IGenre {
  name: string;
}

export interface IGenreModel extends IGenre, Document {}

const GenreSchema = new Schema({
  name: { type: String, minLength: 3, maxLength: 100 },
});

/*************************************************************
 ** Arrow function is not used as callback in get method below
 ** so we can always point to the right "This". **************
 *************************************************************/
GenreSchema.virtual("url").get(function () {
  return `/catalog/genre/${this._id}`;
});

export const Genre = mongoose.model<IGenreModel>(
  "Genre",
  GenreSchema
);
