import axios from "axios";

const searchMovies = async (req, res) => {
  let query = req.query.search;

  const url = `https://api.themoviedb.org/3/search/movie?language=en&query=${query}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    let searchResults = await axios(url, options);
    const results = await searchResults.data.results.map((media) => {
      return {
        id: media.id,
        backdrop_path: media.backdrop_path || media.poster_path || null,
        title: media.title || media.name,
        release_year: media.release_date?.slice(0, 4),
        type: media.media_type || "movie",
        rating: media.vote_average.toFixed(1),
      };
    });
    res.status(200).send(results);
  } catch (err) {
    console.error(err);
    res.status(401).send({ message: "Something went wrong", Error: err });
  }
};

const searchShows = async (req, res) => {
  let query = req.query.search;

  const url = `https://api.themoviedb.org/3/search/tv?language=en&query=${query}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    let searchResults = await axios(url, options);
    const results = await searchResults.data.results.map((media) => {
      return {
        id: media.id,
        backdrop_path: media.backdrop_path || media.poster_path || null,
        title: media.title || media.name,
        release_year: media.release_date?.slice(0, 4),
        type: media.media_type || "tv",
        rating: media.vote_average.toFixed(1),
      };
    });
    res.status(200).send(results);
  } catch (err) {
    console.error(err);
    res.status(401).send({ message: "Something went wrong", Error: err });
  }
};

const searchMoviesAndShows = async (req, res) => {
  let query = req.query.search;

  const url = `https://api.themoviedb.org/3/search/multi?language=en&query=${query}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    let searchResults = await axios(url, options);
    let filteredSeachResults = await searchResults.data.results.filter(
      (media) => media.media_type !== "person"
    );
    const results = await filteredSeachResults.map((media) => {
      return {
        id: media.id,
        backdrop_path: media.backdrop_path || media.poster_path || null,
        title: media.title || media.name,
        release_year: media.release_date?.slice(0, 4),
        type: media.media_type,
        rating: media.vote_average.toFixed(1),
      };
    });
    res.status(200).send(results);
  } catch (err) {
    console.error(err);
    res.status(401).send({ message: "Something went wrong", Error: err });
  }
};

export { searchMovies, searchShows, searchMoviesAndShows };
