import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema({
  mediaId: String,
  // user: {type:mongoose.Schma.Types.Objectid, ref: "User"},
});

const BookmarkModel = mongoose.model("Bookmarks", bookmarkSchema);
export { BookmarkModel };
