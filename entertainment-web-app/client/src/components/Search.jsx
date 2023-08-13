import { useEffect, useState } from "react";

const Search = ({
  value: initialValue,
  debounce = 500,
  onChange,
  searchQuery,
  setSearchQuery,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

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
    <form className="search_form">
      <input
        value={value}
        onChange={handleInputChange}
        type="search"
        placeholder="Search for Movies or TV Series"
        name="Search"
      />
    </form>
  );
};

export default Search;
