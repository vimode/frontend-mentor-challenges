import { NotFoundError } from "../types";

type Props = {
  notFound:NotFoundError;
  word: string;
}

function NotFound ({notFound, word}:Props) {
  return (
    <div className="notFound_wrapper">
      <span role="img" className="emoji">🙁</span>
      <h1>{notFound.title} for {word}</h1>
      <div>
        <span>{notFound.message}</span>
        <span>{notFound.resolution}</span>
      </div>
    </div>
  )
}

export default NotFound;
