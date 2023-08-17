export default function CastGrid({ cast }) {
  let gridSize = cast.length > 12 ? 10 : cast.length;

  return (
    <ul className="cast_grid">
      {cast.slice(0, gridSize).map((cast) => (
        <li key={cast.id}>
          {cast.profile_path ? (
            <picture>
              <source
                srcSet={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
                media="(max-width:1440px)"
              />
              <img
                className="castImg"
                src={`https://image.tmdb.org/t/p/h632${cast.profile_path}`}
              />
            </picture>
          ) : (
            <img
              className="castImg"
              src={`https://ui-avatars.com/api/?size=300&font-size=0.25&background=171e31&color=fff&&name=${cast.original_name}`}
            />
          )}
          <p>{cast.original_name}</p>
        </li>
      ))}
    </ul>
  );
}
