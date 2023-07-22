const baseURL = import.meta.env.VITE_BACKEND_URL;

const getTrendingMovies = async () => {
  const res = await fetch(`${baseURL}movies/trending`);
  if (!res.ok) {
    throw {
      message: "Failed to load Trending movies",
      status: res.status,
    };
  }
  const data = await res.json();
  return await data.results;
};

const getPopularMovies = async () => {
  const res = await fetch(`${baseURL}movies/popular`);
  if (!res.ok) {
    throw {
      message: "failed to load Popular Movies",
      status: res.status,
    };
  }
  const data = await res.json();
  return data.results;
};

const getMovieDetails = async (id) => {
  const res = await fetch(`${baseURL}movies/${id}`);
  if (!res.ok) {
    throw {
      message: "failed to load movie details, please try again later",
      status: res.status,
    };
  }
  const data = await res.json();
  return await data;
};

export { getTrendingMovies, getPopularMovies, getMovieDetails };