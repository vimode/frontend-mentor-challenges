import axios from "axios";

const searchMovies = async (req, res) => {
  let query = req.query.search;

  const url = `https://api.themoviedb.org/3/search/movie?language=en&query=${query}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjYzZWQzZWRjZGQzMGUzODQ5N2M3MzYzZmE0ZmYzNiIsInN1YiI6IjYwZGM1MDNmNTY5MGI1MDAyZTNiMTQ1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Vwc2FqAfnCmvr3JoxXgsqnB265lEMbw-zu8G1clhwA",
    },
  };

  try {
    let searchResults = await axios(url, options);
    res.status(200).send(searchResults.data);
  } catch (err) {
    console.error(err);
    res.status(401).send("Unable to find  results, please try again");
  }
};

const searchShows = async (req, res) => {
  let query = req.query.search;

  const url = `https://api.themoviedb.org/3/search/tv?language=en&query=${query}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjYzZWQzZWRjZGQzMGUzODQ5N2M3MzYzZmE0ZmYzNiIsInN1YiI6IjYwZGM1MDNmNTY5MGI1MDAyZTNiMTQ1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Vwc2FqAfnCmvr3JoxXgsqnB265lEMbw-zu8G1clhwA",
    },
  };

  try {
    let searchResults = await axios(url, options);
    res.status(200).send(searchResults);
  } catch (err) {
    console.error(err);
    res.status(401).send("Unable to find  results, please try again");
  }
};
export { searchMovies, searchShows };
