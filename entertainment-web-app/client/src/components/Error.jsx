import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <section className="error_wrapper">
      <h1>{error.status}</h1>
      <h2>Something went wrong</h2>
      <pre>{error.message}</pre>
    </section>
  );
};

export default Error;
