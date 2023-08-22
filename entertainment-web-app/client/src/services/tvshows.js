const getPopularTVShows = async () => {
  const res = await fetch(`/api/tvshows/popular`);
  if (!res.ok) {
    throw {
      message: "Failed to load Popular tvshows",
      status: res.status,
    };
  }
  const data = await res.json();
  return data;
};

const getTVShowDetails = async (id) => {
  const res = await fetch(`/api/tvshows/${id}`);
  if (!res.ok) {
    throw {
      message: "Failed to load TV show details, please try again later",
      status: res.status,
    };
  }
  const data = await res.json();
  return data;
};

export { getPopularTVShows, getTVShowDetails };
