import { useState, useEffect } from "react";
import { getUserBookmarks, saveToBookmark } from "../services/user.js";
import { useOutletContext } from "react-router-dom";

const MediaCard = ({ trending, media, id, children }) => {
  const [bookmarks, setBookmarks] = useOutletContext();
  const [isBookmarked, setisBookmarked] = useState(false);
  const handleBookmark = async (e) => {
    e.stopPropagation();
    const userId = localStorage.getItem("UUID");
    await saveToBookmark(userId, id, media.type);
    let data = await getUserBookmarks(userId);
    await setBookmarks(data);
  };

  useEffect(() => {
    if (bookmarks) {
      const isBookmark =
        !!bookmarks?.movieData.find((item) => item.id === id) ||
        !!bookmarks?.tvData.find((item) => item.id === id);
      setisBookmarked(isBookmark);
    }
  }, [bookmarks]);

  return (
    <div className={`mediaCard${trending ? "_trending" : ""}`}>
      {children}
      <button className="bookmarkIcon" onClick={handleBookmark}>
        {isBookmarked ? (
          <img src="/images/icon-bookmark-full.svg" alt="bookmark" />
        ) : (
          <img src="/images/icon-bookmark-empty.svg" alt="bookmark" />
        )}
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
