import { useLoaderData } from "react-router-dom";
import CastGrid from "../components/CastGrid";
import MediaDetails from "../components/MediaDetails";
import MediaPage from "../components/MediaPage";

export default function TVShowItem() {
  const mediaData = useLoaderData();
  let poster_size = "w185";
  let profileImg_size = "h632";

  return (
    <MediaPage>
      <h1 className="media_title">
        {mediaData.title}
        <span>
          {" "}
          ({mediaData.first_air_date} - {mediaData.last_air_date})
        </span>
      </h1>
      <img
        className="posterImg"
        src={`https://image.tmdb.org/t/p/${poster_size}/${mediaData.poster_path}`}
      />
      <MediaDetails>
        <li>
          <h2>TV Network</h2>
          <p>{mediaData.network}</p>
        </li>
        <li>
          <h2>Seasons</h2>
          <p>{mediaData.number_of_seasons}</p>
        </li>
        <li>
          <h2>Episodes</h2>
          <p>{mediaData.number_of_episodes}</p>
        </li>
        <li>
          <h2>Rating</h2>
          <p>{mediaData.rating}</p>
        </li>
        <li>
          <h2>Language</h2>
          <p>English</p>
        </li>
      </MediaDetails>
      <div className="video-player">
        {/* TODO: Add a placeholder video? or update backend call to return any available video. */}
        {mediaData.videoEmbedId && (
          <iframe
            src={`https://www.youtube.com/embed/${mediaData.videoEmbedId.key}`}
            frameBorder="0"
            width="560"
            height="315"
            allowFullScreen
            title="Embedded video player"
            allow="accelerometer; clipboard-write; autoplay; encrypted-media"
          ></iframe>
        )}
      </div>
      <div className="media_data">
        <div>
          <h2>Created by</h2>
          <div>
            {mediaData.created_by && mediaData.created_by.profile_path ? (
              <img
                className="castImg"
                src={`https://image.tmdb.org/t/p/${profileImg_size}/${mediaData.created_by?.profile_path}`}
              />
            ) : (
              <img
                className="castImg"
                src={`https://ui-avatars.com/api/?size=512&font-size=0.25&background=171e31&color=fff&&name=${
                  mediaData.created_by?.name || "John Doe"
                }`}
              />
            )}
            <p>{mediaData.created_by?.name || "John Doe"}</p>
          </div>
        </div>
        <div>
          <h2>Description</h2>
          <p>{mediaData.overview}</p>
        </div>
        <div>
          <h2>Cast</h2>
          <CastGrid cast={mediaData.cast} />
        </div>
      </div>
    </MediaPage>
  );
}
