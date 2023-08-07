import axios from "axios";
import { User } from "../models/user.js";

const getUserBookmarks = async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  const savedUser = await User.findOne({ userId });

  if (!savedUser) {
    return res.status(404).json("User doesn't exist");
  }

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  const userBookmarks = savedUser.bookmarks;
  let movieurls = [];
  for (const id in userBookmarks.movies) {
    movieurls.push(
      `https://api.themoviedb.org/3/movie/${userBookmarks.movies[id]}?language=en-US`
    );
  }

  let tvurls = [];
  for (const id in userBookmarks.tv) {
    tvurls.push(
      `https://api.themoviedb.org/3/tv/${userBookmarks.tv[id]}?language=en-US`
    );
  }

  try {
    const moviePromises = movieurls.map((url) => axios(url, options));
    const movieResponses = await Promise.all(moviePromises);
    const mergedMovieData = movieResponses
      .flat()
      .map((m) => m.data)
      .flat();
    const movieData = mergedMovieData.map((movie) => {
      return {
        id: movie.id,
        backdrop_path: movie.backdrop_path,
        title: movie.title,
        release_year: movie.release_date.slice(0, 4),
        type: "Movie",
        rating: movie.vote_average.toFixed(1),
      };
    });
    const tvPromises = tvurls.map((url) => axios(url, options));
    const tvResponses = await Promise.all(tvPromises);
    const mergedTvData = tvResponses
      .flat()
      .map((m) => m.data)
      .flat();
    const tvData = mergedTvData.map((show) => {
      return {
        id: show.id,
        backdrop_path: show.backdrop_path,
        name: show.name,
        release_year: show.first_air_date.slice(0, 4),
        type: "TV Show",
        rating: show.vote_average.toFixed(1),
      };
    });
    res.status(200).json({ movieData, tvData });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const addNewBookmark = async (req, res) => {
  const { userId, mediaId, type } = req.body;
  console.log(userId, mediaId, type);

  const existingUser = await User.findOne({ userId });

  async function addItem(user, type) {
    if (type === "Movie") {
      user.bookmarks.movies.indexOf(mediaId) === -1
        ? user.bookmarks.movies.push(mediaId)
        : null;
    } else {
      user.bookmarks.tv.indexOf(mediaId) === -1
        ? user.bookmarks.tv.push(mediaId)
        : null;
    }
  }

  if (existingUser) {
    await addItem(existingUser, type);
    await existingUser.save();
    return res.status(201).json(existingUser);
  }

  const addUser = new User({ userId });

  try {
    const newUser = await addUser.save();
    await addItem(newUser, type);
    await newUser.save();
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const getBookmarksDev = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (e) {
    console.log(e);
  }
};

export { getUserBookmarks, addNewBookmark, getBookmarksDev };
