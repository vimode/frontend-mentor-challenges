import { BookmarkModel } from "../models/bookmark.js";

const getUserBookmarks = async (req, res) => {
  res.status(200).send("okay");
};

const addNewBookmark = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.status(200).send("okay");
};
export { getUserBookmarks, addNewBookmark };
