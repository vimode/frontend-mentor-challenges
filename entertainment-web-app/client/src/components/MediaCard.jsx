import { Link } from "react-router-dom";

const MediaCard = ({ trending, media, type, id }) => {
  return (
    <a
      href={`${type === "Movie" ? `movies/${id}` : `tvshows/${id}`}`}
      className={`mediaCard${trending ? "_trending" : ""}`}
    >
      <button className="bookmarkIcon">
        <img src="/images/icon-bookmark-empty.svg" alt="bookmark" />
      </button>
      {/* TODO: Add <picture> to make it responsive with different size than original ref API config  */}
      <img
        className="mediaimg"
        src={`https://image.tmdb.org/t/p/original${media.backdrop_path}`}
      />
      <div className="mediaCard_data">
        <div className="mediaCard_data_info">
          {media.release_date && (
            <p>{media.release_date.slice(0, 4)} &#8226;</p>
          )}
          {media.first_air_date && (
            <p>{media.first_air_date.slice(0, 4)} &#8226;</p>
          )}
          <p className="media_type">
            {type === "Movie" ? (
              <img src="/images/icon-category-movie.svg" alt="movie icon" />
            ) : (
              <img src="/images/icon-category-tv.svg" alt="tv series icon" />
            )}{" "}
            {type} &#8226;
          </p>
          <p>&#x2605; {media.vote_average.toFixed(1)}</p>
        </div>
        {media.title ? <h2>{media.title}</h2> : <h2>{media.name}</h2>}
      </div>
    </a>
  );
};

export default MediaCard;
