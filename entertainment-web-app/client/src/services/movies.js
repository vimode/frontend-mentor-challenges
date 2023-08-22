const getTrendingMoviesAndShows = async () => {
  const res = await fetch(`/api/multi/trending`);
  if (!res.ok) {
    throw {
      message: "Failed to load Trending Data",
      status: res.status,
    };
  }
  const data = await res.json();
  return data;
};

const getTrendingMovies = async () => {
  const res = await fetch(`/api/movies/trending`);
  if (!res.ok) {
    throw {
      message: "Failed to load Trending movies",
      status: res.status,
    };
  }
  const data = await res.json();
  return data;
};

const getPopularMovies = async () => {
  const res = await fetch(`/api/movies/popular`);
  if (!res.ok) {
    throw {
      message: "Failed to load Popular Movies",
      status: res.status,
    };
  }
  const data = await res.json();
  return data;
};

const getMovieDetails = async (id) => {
  const res = await fetch(`/api/movies/${id}`);
  if (!res.ok) {
    throw {
      message: "Failed to load movie details, please try again later",
      status: res.status,
    };
  }
  const data = await res.json();
  return data;
};

export {
  getTrendingMoviesAndShows,
  getTrendingMovies,
  getPopularMovies,
  getMovieDetails,
};
