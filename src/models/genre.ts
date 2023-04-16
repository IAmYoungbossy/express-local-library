import mongoose, { Document } from "mongoose";

const Schema = mongoose.Schema;

export interface IGenre {
  name: string;
}

export interface IGenreModel extends IGenre, Document {}

const GenreSchema = new Schema({
  name: { type: String, minLength: 3, maxLength: 100 },
});

// Virtuals for Genre's URL
GenreSchema.virtual("url").get(function () {
  return `/catalog/genre/${this._id}`;
});

/*************************************************************
 ** Arrow function is not used as callback in get method above
 ** so we can always point to the right "This". **************
 *************************************************************/

export const Genre = mongoose.model<IGenreModel>(
  "Genre",
  GenreSchema
);
