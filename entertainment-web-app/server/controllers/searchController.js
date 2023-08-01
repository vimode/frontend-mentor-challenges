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
    res.status(200).send(searchResults.data);
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
    res.status(200).send(searchResults);
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
    // res.status(200).send(searchResults.data);
    res.status(200).send(filteredSeachResults);
  } catch (err) {
    console.error(err);
    res.status(401).send({ message: "Something went wrong", Error: err });
  }
};

export { searchMovies, searchShows, searchMoviesAndShows };