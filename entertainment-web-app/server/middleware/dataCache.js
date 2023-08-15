import { caching } from "cache-manager";
const moviesCache = await caching("memory", { max: 100, ttl: 300 * 1000 });
const tvshowsCache = await caching("memory", { max: 100, ttl: 300 * 1000 });
const multiCache = await caching("memory", { max: 100, ttl: 300 * 1000 });

const cachedMoviesDataMiddleware = async (req, res, next) => {
  async function getCacheData(key) {
    let cache = await moviesCache.store.get(key);
    if (cache) {
      console.log("cached data");
      let cachedMovieData = await moviesCache.store.mget(key);
      return res.send(cachedMovieData[0]).status(200);
    }
    return next();
  }
  let pathname = req.url.slice(1);
  switch (pathname) {
    case "popular":
      try {
        return getCacheData("popular-movies");
      } catch (err) {
        console.log(err);
        throw err;
      }
    case "trending":
      try {
        return getCacheData("trending-movies");
      } catch (err) {
        console.log(err);
        throw err;
      }
    default:
      try {
        console.log(pathname);
        return getCacheData(pathname);
      } catch (err) {
        console.log(err);
        throw err;
      }
  }
};

const cachedTVShowDataMiddleware = async (req, res, next) => {
  async function getCacheData(key) {
    let cache = await tvshowsCache.store.get(key);
    if (cache) {
      console.log("cached  data");
      let cachedData = await tvshowsCache.store.mget(key);
      return res.send(cachedData[0]).status(200);
    }
    return next();
  }
  let pathname = req.url.slice(1);
  switch (pathname) {
    case "popular":
      try {
        return getCacheData("popular-tvshows");
      } catch (err) {
        console.log(err);
        throw err;
      }
    default:
      try {
        return getCacheData(pathname);
      } catch (err) {
        console.log(err);
        throw err;
      }
  }
};
export {
  moviesCache,
  cachedMoviesDataMiddleware,
  tvshowsCache,
  cachedTVShowDataMiddleware,
};
