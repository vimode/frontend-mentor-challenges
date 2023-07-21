const baseURL = import.meta.env.VITE_BACKEND_URL;

const getPopularTVShows = async () => {
  const res = await fetch(`${baseURL}tvshows/popular`);
  if (!res.ok) {
    throw {
      message: "failed to load Popular tvshows",
      status: res.status,
    };
  }
  const data = await res.json();
  return data.results;
};

const getTVShowDetails = async (id) => {
  const res = await fetch(`${baseURL}tvshows/${id}`);
  if (!res.ok) {
    throw {
      message: "failed to load tv show details, please try again later",
      status: res.status,
    };
  }
  const data = await res.json();
  return await data;
};

export { getPopularTVShows, getTVShowDetails };
