import { saveToBookmark } from "../services/user.js";

const MediaCard = ({ trending, media, id }) => {
  const handleBookmark = async (e) => {
    e.stopPropagation();
    const userId = localStorage.getItem("UUID");
    let data = await saveToBookmark(userId, id, media.type);
    console.log(data);
  };

  return (
    <div className={`mediaCard${trending ? "_trending" : ""}`}>
      <a
        href={`${media.type === "movie" ? `movies/${id}` : `tvshows/${id}`}`}
        className="media_link"
        aria-label={`Read more about ${media.title}`}
      ></a>
      <button className="bookmarkIcon" onClick={handleBookmark}>
        <img src="/images/icon-bookmark-empty.svg" alt="bookmark" />
      </button>
      <picture>
        <source
          srcSet={`https://image.tmdb.org/t/p/w300${media.backdrop_path}`}
          media="(max-width:500px)"
        />
        <source
          srcSet={`https://image.tmdb.org/t/p/w780${media.backdrop_path}`}
          media="(max-width:1440px)"
        />
        <img
          className="mediaimg"
          src={`https://image.tmdb.org/t/p/w1280${media.backdrop_path}`}
        />
      </picture>
      <div className="mediaCard_data">
        <div className="mediaCard_data_info">
          {media.release_year && <p>{media.release_year} &#8226;</p>}
          <p className="media_type">
            {media.type === "movie" ? (
              <img src="/images/icon-category-movie.svg" alt="movie icon" />
            ) : (
              <img src="/images/icon-category-tv.svg" alt="tv series icon" />
            )}{" "}
            {media.type === "movie"
              ? media.type.charAt(0).toUpperCase() + media.type.slice(1)
              : "TV"}{" "}
            &#8226;
          </p>
          <p>&#x2605; {media.rating}</p>
        </div>
        {media.title ? <h2>{media.title}</h2> : <h2>{media.name}</h2>}
      </div>
    </div>
  );
};

export default MediaCard;
