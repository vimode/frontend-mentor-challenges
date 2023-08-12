import { saveToBookmark } from "../services/user.js";

const MediaCard = ({ trending, media, type, id }) => {
  const handleBookmark = async (e) => {
    e.stopPropagation();
    const userId = localStorage.getItem("UUID");
    let data = await saveToBookmark(userId, id, type);
    console.log(data);
  };

  return (
    <div className={`mediaCard${trending ? "_trending" : ""}`}>
      <a
        href={`${type === "movie" ? `movies/${id}` : `tvshows/${id}`}`}
        className="media_link"
        aria-label={`Read more about ${media.title}`}
      ></a>
      <button className="bookmarkIcon" onClick={handleBookmark}>
        <img src="/images/icon-bookmark-empty.svg" alt="bookmark" />
      </button>
      {/* TODO: Add <picture> to make it responsive with different size than original ref API config  */}
      <img
        className="mediaimg"
        src={`https://image.tmdb.org/t/p/original${media.backdrop_path}`}
      />
      <div className="mediaCard_data">
        <div className="mediaCard_data_info">
          {media.release_year && <p>{media.release_year} &#8226;</p>}
          <p className="media_type">
            {type === "movie" ? (
              <img src="/images/icon-category-movie.svg" alt="movie icon" />
            ) : (
              <img src="/images/icon-category-tv.svg" alt="tv series icon" />
            )}{" "}
            {type === "movie"
              ? type.charAt(0).toUpperCase() + type.slice(1)
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
