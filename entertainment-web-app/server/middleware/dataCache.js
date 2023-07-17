import { caching } from "cache-manager";
const moviesCache = await caching("memory", {
  max: 100,
  ttl: 30000,
});

const cachedMoviesDataMiddleware = async (req, res, next) => {
  async function getCacheData(key) {
    let cache = await moviesCache.store.get(key)
    if (cache) {
      console.log("cached  data")
      let cachedMovieData = await moviesCache.store.mget(key)
      return res.send(cachedMovieData[0]).status(200);
    }
    return next();
  }
  let pathname = req.url;
  switch (pathname.slice(1)) {
    case "popular":
      try {
        return getCacheData("popular-movies");
      } catch (err) {
        console.log(err);
        throw err;
      }
    case "trending":
    try {
        return getCacheData("trending-movies")
      } catch (err) {
        console.log(err);
        throw err;
      } 
    default:
      try {
      return  getCacheData(pathname)
      } catch(err) {
        console.log(err);
        throw err;
      }
  }
};

export { moviesCache, cachedMoviesDataMiddleware }
