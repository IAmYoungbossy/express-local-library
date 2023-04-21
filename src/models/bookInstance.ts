import mongoose, { Schema, Document } from "mongoose";

export interface IBookInstance {
  due_back: Date;
  status: string;
  imprint: string;
  book: Schema.Types.ObjectId;
}

export interface IBookInstanceModel
  extends IBookInstance,
    Document {}

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

/*************************************************************
 ** Arrow function is not used as callback in get method below
 ** so we can always point to the right "This". **************
 *************************************************************/
BookInstanceSchema.virtual("url").get(function () {
  return `/catalog/bookinstance/${this._id}`;
});

export const BookInstance = mongoose.model<IBookInstanceModel>(
  "BookInstance",
  BookInstanceSchema
);
