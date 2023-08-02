import { User } from "../models/user.js";

const getUserBookmarks = async (req, res) => {
  res.status(200).send("okay");
};

const addNewBookmark = async (req, res) => {
  const bookmarkId = req.params.id;
  console.log(bookmarkId);
  const userId = req.body.uuid;

  const existingUser = await User.findOne({ userId });

  if (existingUser) {
    existingUser.bookmarks.indexOf(bookmarkId.toString()) === -1
      ? existingUser.bookmarks.push(bookmarkId.toString())
      : null;
    await existingUser.save();
    return res.status(201).json(existingUser);
  }

  const addUser = new User({ userId });

  try {
    const newUser = await addUser.save();
    newUser.bookmarks.push(bookmarkId.toString());
    await newUser.save();
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export { getUserBookmarks, addNewBookmark };
