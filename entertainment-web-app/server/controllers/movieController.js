import axios from "axios";

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
    let response = await axios(trendingMoviesURL, options);
    let data = response.data;
    console.log("accesssed /trending");
    res.status(200).send(data);
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
    let response = await axios(topRatedMoviesURL, options);
    let data = response.data;
    console.log(`accessed / popular`);
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(401).send("Data currently unavailable, try again");
  }
};

export { getTrendingMovies, getPopularMovies };
