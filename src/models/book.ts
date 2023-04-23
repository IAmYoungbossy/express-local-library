import mongoose, { Document, Schema } from "mongoose";

export interface IBook {
  url: string;
  isbn: string;
  title: string;
  summary: string;
  author: Schema.Types.ObjectId;
  genre: mongoose.Types.ObjectId[];
}

export interface IBookModel extends IBook, Document {}

const BooksSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  isbn: { type: String, required: true },
  title: { type: String, required: true },
  summary: { type: String, required: true },
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});

/*************************************************************
 ** Arrow function is not used as callback in get method below
 ** so we can always point to the right "This". **************
 *************************************************************/
BooksSchema.virtual("url").get(function () {
  return `/catalog/book/${this._id}`;
});

export const Book = mongoose.model<IBookModel>(
  "Book",
  BooksSchema
);
