import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
  book: {
    type: Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  imprint: { type: String, required: true },
  due_back: { type: Date, default: Date.now },
  status: {
    type: String,
    required: true,
    default: "Maintenance",
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
  },
});

// Virtuals for bookInstance's URL
BookInstanceSchema.virtual("url").get(function () {
  return `/catalog/bookinstance/${this._id}`;
});

/*************************************************************
 ** Arrow function is not used as callback in get method above
 ** so we can always point to the right "This". **************
 *************************************************************/
const BookInstanceModel = mongoose.model(
  "BookInstance",
  BookInstanceSchema
);

export default BookInstanceModel;
