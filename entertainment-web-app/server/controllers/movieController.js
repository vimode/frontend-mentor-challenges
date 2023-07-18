import axios from "axios";
import { moviesCache } from "../middleware/dataCache.js";


const getTrendingMovies = async (req, res) => {
  let time_window = "day";
  let trendingMoviesURL = `https://api.themoviedb.org/3/trending/movie/${time_window}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    let trendingMovies = await axios(trendingMoviesURL, options);
    await moviesCache.store.mset([["trending-movies",trendingMovies.data]])
    console.log("accesssed /trending");
    res.status(200).send(trendingMovies.data);
  } catch (err) {
    console.error(err);
    res
      .status(401)
      .send("Data currently unavailable, try again in few minutes");
  }
};

const getPopularMovies = async (req, res) => {
  let topRatedMoviesURL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&with_original_language=en&page=1&sort_by=popularity.desc`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    let popularMovies = await axios(topRatedMoviesURL, options);
    await moviesCache.store.mset([["popular-movies",popularMovies.data]]);
    console.log(`accessed / popular`);
    res.status(200).send(popularMovies.data);
  } catch (err) {
    console.log(err);
    res.status(401).send("Data currently unavailable, try again");
  }
};

const getMovieDetails = async(req,res) => {
  const {id}= req.params
  let findMovieURL = `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits,videos`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    let movieData = await axios(findMovieURL, options);
    console.log(`accessed /${id}`);
    res.status(200).send(await movieData.data)
  } catch (err) {
    console.log(err);
    res.status(401).send("Data currently unavailable, try again later")
  }
};

export { getTrendingMovies, getPopularMovies, getMovieDetails };
