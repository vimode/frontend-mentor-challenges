import axios from "axios";

const getPopularTVShows = async (req, res) => {
  let url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&original_language=en-US&with_original_language=en&page=1&sort_by=popularity.desc`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    let response = await axios(url, options);
    let cleanedResponse = response.data.results.map((show) => {
      return {
        id: show.id,
        backdrop_path: show.backdrop_path,
        name: show.name,
        release_date: show.first_air_date.slice(0, 4),
        rating: show.vote_average.toFixed(1),
      };
    });
    console.log(`accessed / populartvshows`);
    res.status(200).send(cleanedResponse);
  } catch (err) {
    console.log(err);
    res.status(401).send("Data currently unavailable, try again");
  }
};

const getTVShowDetails = async (req, res) => {
  const { id } = req.params;
  let url = `https://api.themoviedb.org/3/tv/${id}?append_to_response=credits,videos`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    let response = await axios(url, options);
    console.log(`accessed /${id}`);
    let cleanedResponse = {
      id: response.data.id,
      backdrop_path: response.data.backdrop_path,
      poster_path: response.data.poster_path,
      title: response.data.original_name,
      first_air_date: response.data.first_air_date.slice(0, 4),
      last_air_date: response.data.last_air_date.slice(0, 4),
      network: response.data.networks[0].name,
      number_of_seasons: response.data.number_of_seasons,
      number_of_episodes: response.data.number_of_episodes,
      overview: response.data.overview,
      videoEmbedId: response.data.videos.results.filter(
        (video) => video.name.includes("Trailer") && video.site === "YouTube"
      )[0],
      created_by: response.data.created_by[0],
      rating: response.data.vote_average.toFixed(1),
      genres: response.data.genres,
      cast: response.data.credits.cast,
    };
    res.status(200).send(cleanedResponse);
  } catch (err) {
    console.log(err);
    res.status(401).send("Data currently unavailable, try again later");
  }
};
export { getPopularTVShows, getTVShowDetails };
