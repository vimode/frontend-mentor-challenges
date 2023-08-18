import { useEffect, useState } from "react";

const Search = ({ value: initialValue, debounce = 500, onChange }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  return (
    <form action="/" method="get" className="search_form">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="search"
        placeholder="Search for Movies or TV Series"
        name="s"
      />
    </form>
  );
};

export default Search;
