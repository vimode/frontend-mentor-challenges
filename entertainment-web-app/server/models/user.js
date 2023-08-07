import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: { type: String },
  bookmarks: {
    movies: [String],
    tv: [String],
  },
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    (returnedObject.id = returnedObject._id.toString()),
      delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const User = mongoose.model("User", userSchema);
export { User };
