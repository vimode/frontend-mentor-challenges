import axios from "axios";
import { moviesCache } from "../middleware/dataCache.js";

const getTrendingMovies = async (req, res) => {
  let time_window = "day";
  let url = `https://api.themoviedb.org/3/trending/movie/${time_window}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    let response = await axios(url, options);
    let cleanedResponse = response.data.results.map((movie) => {
      return {
        id: movie.id,
        backdrop_path: movie.backdrop_path,
        title: movie.title,
        release_year: movie.release_date.slice(0, 4),
        type: movie.media_type,
        rating: movie.vote_average.toFixed(1),
      };
    });
    await moviesCache.store.mset([["trending-movies", cleanedResponse]]);
    console.log("accesssed /trending");
    res.status(200).send(cleanedResponse);
  } catch (err) {
    console.error(err);
    res
      .status(401)
      .send("Data currently unavailable, try again in few minutes");
  }
};

const getPopularMovies = async (req, res) => {
  let url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&with_original_language=en&page=1&sort_by=popularity.desc`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    let response = await axios(url, options);
    let cleanedResponse = response.data.results.map((movie) => {
      return {
        id: movie.id,
        backdrop_path: movie.backdrop_path,
        title: movie.title,
        release_year: movie.release_date.slice(0, 4),
        type: movie.media_type,
        rating: movie.vote_average.toFixed(1),
      };
    });
    await moviesCache.store.mset([["popular-movies", cleanedResponse]]);
    console.log(`accessed / popular`);
    res.status(200).send(cleanedResponse);
  } catch (err) {
    console.log(err);
    res.status(401).send("Data currently unavailable, try again");
  }
};

const getMovieDetails = async (req, res) => {
  const { id } = req.params;
  let url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits,videos`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    let response = await axios(url, options);
    let cleanedResponse = {
      id: response.data.id,
      backdrop_path: response.data.backdrop_path,
      poster_path: response.data.poster_path,
      title: response.data.title,
      overview: response.data.overview,
      runtime: response.data.runtime,
      videoEmbedId: response.data.videos.results.filter(
        (video) => video.name.includes("Trailer") && video.site === "YouTube"
      )[0],
      director: response.data.credits.crew.filter(
        (item) => item.job === "Director"
      )[0],
      release_year: response.data.release_date.slice(0, 4),
      type: response.data.media_type,
      rating: response.data.vote_average.toFixed(1),
      genres: response.data.genres,
      cast: response.data.credits.cast,
    };
    await moviesCache.store.mset([[`${id}`, cleanedResponse]], 900 * 1000);
    console.log(`accessed /${id}`);
    res.status(200).send(cleanedResponse);
  } catch (err) {
    console.log(err);
    res.status(401).send("Data currently unavailable, try again later");
  }
};

export { getTrendingMovies, getPopularMovies, getMovieDetails };
