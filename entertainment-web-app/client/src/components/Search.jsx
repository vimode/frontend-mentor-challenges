const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <form className="search_form">
      <input
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
        type="search"
        placeholder="Search for Movies or TV Series"
        name="Search"
      />
    </form>
  );
};

export default Search;
