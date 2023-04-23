import { DateTime } from "luxon";
import mongoose, { Schema, Document } from "mongoose";

type bookIdType = {
  _id: Schema.Types.ObjectId;
};
type bookType = Schema.Types.ObjectId & bookIdType;

export interface IBookInstance {
  url: string;
  due_back: Date;
  status: string;
  book: bookType;
  imprint: string;
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

BookInstanceSchema.virtual("due_back_formatted").get(
  function () {
    return DateTime.fromJSDate(this.due_back).toLocaleString(
      DateTime.DATE_MED
    );
  }
);

export const BookInstance = mongoose.model<IBookInstanceModel>(
  "BookInstance",
  BookInstanceSchema
);
