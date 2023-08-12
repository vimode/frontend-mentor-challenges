import axios from "axios";

const getTrendingMoviesAndShows = async (req, res) => {
  const urls = [
    "https://api.themoviedb.org/3/trending/all/day?page=1",
    "https://api.themoviedb.org/3/trending/all/day?page=2",
    "https://api.themoviedb.org/3/trending/all/day?page=3",
  ];
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    let response = await Promise.all([
      axios.get(urls[0], options),
      axios.get(urls[1], options),
      axios.get(urls[2], options),
    ]);
    let data = response.map((response) => response.data);
    let allData = data
      .flat()
      .map((page) => page.results)
      .flat()
      .filter((item) => item.media_type !== "person");
    let moviesData = allData
      .filter((media) => media.media_type === "movie")
      .map((movie) => {
        return {
          id: movie.id,
          backdrop_path: movie.backdrop_path,
          title: movie.title,
          release_year: movie.release_date.slice(0, 4),
          type: "movie",
          rating: movie.vote_average.toFixed(1),
        };
      });
    let showsData = allData
      .filter((media) => media.media_type === "tv")
      .map((show) => {
        return {
          id: show.id,
          backdrop_path: show.backdrop_path,
          name: show.name,
          release_year: show.first_air_date.slice(0, 4),
          type: "tv",
          rating: show.vote_average.toFixed(1),
        };
      });
    console.log("accessed /multi/trending");
    res.status(200).send({ moviesData, showsData });
  } catch (err) {
    console.error(err);
    res.status(401).send({ error: err.message });
  }
};

export { getTrendingMoviesAndShows };
