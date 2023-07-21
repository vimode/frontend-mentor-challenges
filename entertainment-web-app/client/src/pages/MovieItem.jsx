import { useLoaderData } from "react-router-dom";
import CastGrid from "../components/CastGrid";
import MediaDetails from "../components/MediaDetails";

function MovieItem() {
  const mediaData = useLoaderData();

  let poster_size = "w185";

  const mediaDirector = mediaData.credits.crew.filter(
    (item) => item.job === "Director"
  )[0].name;

  const videoEmbedId = mediaData.videos.results.filter(
    (video) => video.name.includes("Trailer") && video.site === "YouTube"
  )[0];

  return (
    <section>
      <h1>{mediaData.original_title}</h1>
      <MediaDetails>
        <li>
          <h2>Year</h2>
          <p>{mediaData.release_date.slice(0, 4)}</p>
        </li>
        <li>
          <h2>Rating</h2>
          <p>{mediaData.vote_average.toFixed(1)}</p>
        </li>
        <li>
          <h2>Runtime</h2>
          <p>{mediaData.runtime} mins</p>
        </li>
        <li>
          <h2>Genres</h2>
          <div className="genre_list">
            {mediaData.genres.map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
        </li>
        <li>
          <h2>Language</h2>
          <p>English</p>
        </li>
      </MediaDetails>
      {/* TODO: Add <picture> to make it responsive with different poster_size ref API config  */}
      <img
        className="posterImg"
        src={`https://image.tmdb.org/t/p/${poster_size}/${mediaData.poster_path}`}
      />
      <div>
        <div className="video-player">
          <iframe
            src={`https://www.youtube.com/embed/${videoEmbedId.key}`}
            frameBorder="0"
            width="560"
            height="315"
            allowFullScreen
            title="Embedded video player"
            allow="accelerometer; clipboard-write; autoplay; encrypted-media"
          ></iframe>
        </div>
        <h2>Synopsis</h2>
        <p>{mediaData.overview}</p>
      </div>
      <div>
        <h2>Director</h2>
        <p>{mediaDirector}</p>
      </div>
      <div>
        <h2>Cast</h2>
        <CastGrid cast={mediaData.credits.cast} />
      </div>
    </section>
  );
}

export default MovieItem;
