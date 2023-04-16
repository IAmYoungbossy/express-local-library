import mongoose from "mongoose";

const Schema = mongoose.Schema;

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
const GenreModel = mongoose.model("Genre", GenreSchema);

export default GenreModel;
