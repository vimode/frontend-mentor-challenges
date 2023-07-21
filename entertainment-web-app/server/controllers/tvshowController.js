import axios from "axios";

const getPopularTVShows = async (req, res) => {
  let popularTVShowsURL = `https://api.themoviedb.org/3/discover/tv?include_adult=false&original_language=en-US&with_original_language=en&page=1&sort_by=popularity.desc`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    let response = await axios(popularTVShowsURL, options);
    let data = response.data;
    console.log(`accessed / populartvshows`);
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(401).send("Data currently unavailable, try again");
  }
};

const getTVShowDetails = async (req, res) => {
  const { id } = req.params;
  let tvshowURL = `https://api.themoviedb.org/3/tv/${id}?append_to_response=credits,videos`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    let tvshowData = await axios(tvshowURL, options);
    console.log(`accessed /${id}`);
    res.status(200).send(await tvshowData.data);
  } catch (err) {
    console.log(err);
    res.status(401).send("Data currently unavailable, try again later");
  }
};
export { getPopularTVShows, getTVShowDetails };
