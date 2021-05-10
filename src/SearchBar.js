function SearchBar({ filterCountries,lightMode }) {
  return (
    <>
      <input
        className={
          lightMode
            ? "search-input light-mode-element"
            : "search-input dark-mode-element"
        }
        onChange={filterCountries}
      ></input>
    </>
  );
}

export default SearchBar;
