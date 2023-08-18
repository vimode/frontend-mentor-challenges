import { useLoaderData } from "react-router-dom";
import CastGrid from "../components/CastGrid";
import MediaDetails from "../components/MediaDetails";
import MediaPage from "../components/MediaPage";

function MovieItem() {
  const mediaData = useLoaderData();

  return (
    <MediaPage>
      <h1 className="media_title">{mediaData.title}</h1>
      <MediaDetails>
        <li>
          <h2>Year</h2>
          <p>{mediaData.release_year}</p>
        </li>
        <li>
          <h2>Rating</h2>
          <p>{mediaData.rating}</p>
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
      <picture>
        <source
          srcSet={`https://image.tmdb.org/t/p/w342${mediaData.poster_path}`}
          media="(max-width:1200px)"
        />
        <source
          srcSet={`https://image.tmdb.org/t/p/w500${mediaData.poster_path}`}
          media="(max-width:1440px)"
        />
        <img
          className="posterImg"
          src={`https://image.tmdb.org/t/p/w500${mediaData.poster_path}`}
        />
      </picture>
      {mediaData.videoEmbedId && (
        <div className="video-player">
          <iframe
            src={`https://www.youtube.com/embed/${mediaData.videoEmbedId.key}`}
            frameBorder="0"
            width="560"
            height="315"
            allowFullScreen
            title="Embedded video player"
            allow="accelerometer; clipboard-write; autoplay; encrypted-media"
          ></iframe>
        </div>
      )}
      <div className="media_data">
        <div>
          <h2>Synopsis</h2>
          <p>{mediaData.overview}</p>
        </div>
        <div>
          <h2>Director</h2>
          <div>
            <picture>
              <source
                srcSet={`https://image.tmdb.org/t/p/w185${mediaData.director.profile_path}`}
                media="(max-width:1440px)"
              />
              <img
                className="castImg"
                src={`https://image.tmdb.org/t/p/h632${mediaData.director.profile_path}`}
              />
            </picture>
            <p>{mediaData.director.name}</p>
          </div>
        </div>
        <div>
          <h2>Cast</h2>
          <CastGrid cast={mediaData.cast} />
        </div>
      </div>
    </MediaPage>
  );
}

export default MovieItem;
