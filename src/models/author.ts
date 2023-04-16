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

// virtual for author's full name
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

/*************************************************************
 ** Arrow function is not used as callback in get method above
 ** so we can always point to the right "This". **************
 *************************************************************/

export const Author = mongoose.model<IAuthorModel>(
  "Author",
  AuthorSchema
);
