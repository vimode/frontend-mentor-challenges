import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <section>
      <h1>Something went wrong</h1>
    </section>
  );
};

export default Error;
