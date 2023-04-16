import mongoose from "mongoose";

const Schema = mongoose.Schema;

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
const BookModel = mongoose.model("Author", BooksSchema);

export default BookModel;
