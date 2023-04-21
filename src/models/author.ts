import { DateTime } from "luxon";
import mongoose, { Document, Schema } from "mongoose";

export interface IAuthor {
  first_name: string;
  date_of_birth: Date;
  family_name: string;
  date_of_death: Date;
}

export interface IAuthorModel extends IAuthor, Document {}

// Structure of data to be stored in author collection
const AuthorSchema = new Schema({
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
});

/*************************************************************
 ** Arrow function is not used as callback in get method below
 ** so we can always point to the right "This". **************
 *************************************************************/
AuthorSchema.virtual("name").get(function () {
  let fullname: string = "";
  if (this.first_name && this.family_name)
    fullname = `${this.family_name}, ${this.first_name}`;
  if (!this.first_name || !this.family_name) fullname = "";
  return fullname;
});

AuthorSchema.virtual("url").get(function () {
  return `/catalog/author/${this._id}`;
});

AuthorSchema.virtual("date_of_birth_formatted").get(function () {
  return this.date_of_birth
    ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(
        DateTime.DATE_MED
      )
    : "";
});

AuthorSchema.virtual("date_of_death_formatted").get(function () {
  return this.date_of_death
    ? DateTime.fromJSDate(this.date_of_death).toLocaleString(
        DateTime.DATE_MED
      )
    : "";
});

export const Author = mongoose.model<IAuthorModel>(
  "Author",
  AuthorSchema
);
