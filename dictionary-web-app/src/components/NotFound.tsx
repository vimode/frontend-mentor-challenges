import { NotFoundState } from "../App";

interface Props {
  notFound:object;
  word: string;
}

function NotFound ({notFound, word}:Props) {
  return (
    <>
      <h1>{notFound.title} for {word}</h1>
      <p>{notFound.message}</p>
      <p>{notFound.resolution}</p>
    </>
  )
}

export default NotFound;
