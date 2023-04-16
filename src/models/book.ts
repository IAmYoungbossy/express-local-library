import mongoose, { Document, Schema } from "mongoose";

export interface IBook {
  isbn: string;
  title: string;
  summary: string;
  genre: Schema.Types.ObjectId;
  author: Schema.Types.ObjectId;
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

// Virtuals for book's URL
BooksSchema.virtual("url").get(function () {
  return `/catalog/book/${this._id}`;
});

/*************************************************************
 ** Arrow function is not used as callback in get method above
 ** so we can always point to the right "This". **************
 *************************************************************/

export const Book = mongoose.model<IBookModel>(
  "Book",
  BooksSchema
);
