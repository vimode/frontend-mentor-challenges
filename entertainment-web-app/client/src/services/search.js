const searchAllData = async (query) => {
  const res = await fetch(`/api/search/all?search=${query}`);
  if (!res.ok) {
    throw {
      message: "Unable to get search data, please try again later",
      status: res.status,
    };
  }
  const data = await res.json();
  return data;
};

const searchMovies = async (query) => {
  const res = await fetch(`/api/search/movies?search=${query}`);
  if (!res.ok) {
    throw {
      message: "Unable to get search data, please try again later",
      status: res.status,
    };
  }
  const data = await res.json();
  return data;
};

const searchTVshows = async (query) => {
  const res = await fetch(`/api/search/tvshows?search=${query}`);
  if (!res.ok) {
    throw {
      message: "Unable to get search data, please try again later",
      status: res.status,
    };
  }
  const data = await res.json();
  return data;
};

export { searchAllData, searchTVshows, searchMovies };
