const baseURL = `${import.meta.env.VITE_BACKEND_URL}/search`;

const searchAllData = async (query) => {
  const res = await fetch(`${baseURL}/all?search=${query}`);
  if (!res.ok) {
    throw {
      message: "failed to get search data, please try again later",
      status: res.status,
    };
  }
  const data = await res.json();
  return data;
};

const searchMovies = async (query) => {
  const res = await fetch(`${baseURL}/movies?search=${query}`);
  if (!res.ok) {
    throw {
      message: "failed to get search data, please try again later",
      status: res.status,
    };
  }
  const data = await res.json();
  return data;
};

const searchTVshows = async (query) => {
  const res = await fetch(`${baseURL}/tvshows?search=${query}`);
  if (!res.ok) {
    throw {
      message: "failed to get search data, please try again later",
      status: res.status,
    };
  }
  const data = await res.json();
  return data;
};

export { searchAllData, searchTVshows, searchMovies };
